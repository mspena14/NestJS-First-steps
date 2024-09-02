import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import * as Handlebars from 'handlebars';

@Injectable()
export class TelegramTemplateAdapter {
  private templatesDir: string;
  private templateCache: Map<string, Handlebars.TemplateDelegate> = new Map();
  constructor() {
    this.templatesDir = path.join(
      __dirname,
      process.env.NODE_ENV === 'production' ? '../templates' : '../../../src/templates/telegramTemplates',
    );
  }

  async render(templateName: string, context: any): Promise<string> {
    if (this.templateCache.has(templateName)) {
      return this.templateCache.get(templateName)(context);
    }
  
    const templatePath = path.join(this.templatesDir, `${templateName}.hbs`);
    try {
      const template = await fs.promises.readFile(templatePath, 'utf-8');
      const compiledTemplate = Handlebars.compile(template);
      this.templateCache.set(templateName, compiledTemplate);
      return compiledTemplate(context);
    } catch (err) {
      throw new Error(`Error al renderizar la plantilla: ${err.message}`);
    }
  }
}
