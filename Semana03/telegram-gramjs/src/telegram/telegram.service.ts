import { Injectable } from '@nestjs/common';
import { TelegramClient } from 'telegram';
import { StringSession } from 'telegram/sessions';

@Injectable()
export class TelegramService {
  private client: TelegramClient;
  private phoneCodeResolver: (code: string) => void;

  constructor() {
    const apiId = 28430919
    const apiHash = 'fd623c87e88a8c03be7a422ac4d67111'
    const stringSession = new StringSession(''); // Se guarda la sesión aquí luego de iniciar sesión

    this.client = new TelegramClient(stringSession, apiId, apiHash, {
      connectionRetries: 5,
    });
  }

  async start(phoneNumber: string, password?: string): Promise<void> {
    await this.client.start({
      phoneNumber: () => Promise.resolve(phoneNumber),
      password: () => password ? Promise.resolve(password) : null,
      phoneCode: async () => {
        return new Promise<string>((resolve) => {
          this.phoneCodeResolver = resolve;
        });
      },
      onError: (err) => console.log('Error al iniciar sesión:', err),
    });
    console.log('Conectado a Telegram');
    console.log('Session guardada:', this.client.session.save()); // Guarda la sesión para reutilizar
  }

  resolvePhoneCode(code: string): void {
    if (this.phoneCodeResolver) {
      this.phoneCodeResolver(code);
      this.phoneCodeResolver = null;
    }
  }

  async sendMessage(chatId: string, message: string): Promise<void> {
    try {
      await this.client.sendMessage(chatId, { message });
      console.log(`Mensaje enviado a ${chatId}: ${message}`);
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
    }
  }
}
