import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import * as Handlebars from 'handlebars';

@Injectable()
export class EmailTemplateAdapter {
  private templatesDir: string;

  constructor() {
    this.templatesDir = path.join(
      __dirname,
      process.env.NODE_ENV === 'production' ? '../templates' : '../../../src/templates/emailTemplates',
    );
  }

  async render(templateName: string, context: any): Promise<string> {
    console.log(process.env.NODE_ENV);
    
    const templatePath = path.join(this.templatesDir, `${templateName}.hbs`);

    try {
      const template = await fs.promises.readFile(templatePath, 'utf-8');
      const compiledTemplate = Handlebars.compile(template);
      return compiledTemplate(context);
    } catch (err) {
      throw new Error(`Error al renderizar la plantilla: ${err.message}`);
    }
  }
}
