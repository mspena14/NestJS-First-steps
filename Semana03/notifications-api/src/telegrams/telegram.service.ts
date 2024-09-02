import { Injectable } from '@nestjs/common';
import { TelegramClient } from 'telegram';
import {StringSession} from 'telegram/sessions';
import input from 'input';
import { TelegramTemplateAdapter } from 'src/templates/adapters/telegram-template.adapter';
import { SendTelegramMessageDto } from 'src/templates/dto/send-telegram.dto';

@Injectable()
export class TelegramService {
  private readonly apiId:number=parseInt(process.env.API_ID);
  private readonly hash_id:string= process.env.HASH_ID;
  private readonly phoneNumber:string=process.env.PHONE_NUMBER;
  private client:TelegramClient;
  private session:StringSession=new StringSession("");

  constructor(private readonly telegramAdapter: TelegramTemplateAdapter){}

  async connect():Promise<void>{
    this.client=new TelegramClient(this.session,this.apiId,this.hash_id,{connectionRetries:5})
    await this.client.start({
      phoneNumber:this.phoneNumber,
      phoneCode:async()=>await input.text("Code :"),
      onError:(err)=>console.log(err)
    });
    this.client.session.save();
    await this.client.sendMessage("me",{message:"hola mijo"})
  }

  async sendMessage(body: SendTelegramMessageDto){
    try{
      const {template, params, sendTo} = body
      const messageRendered = await this.telegramAdapter.render(template, params);
      await this.client.sendMessage(sendTo ,{message: messageRendered});
    }catch(err:any){
      console.log(err);
    }
  }
}