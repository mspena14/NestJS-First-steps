import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer'


@Injectable()
export class NodemailerProvider {

  transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  async sendEmail(subjectEmail:string, sendTo:string, html:string) {
    try {
      await this.transporter.sendMail({
        from: process.env.EMAIL_USER, // sender address
        to: sendTo, // list of receivers
        subject: subjectEmail, // Subject line
        html: html, // html body
      });

    } catch (error) {
      throw error
    }
  }

  async testEmail() {
    try {

      await this.transporter.sendMail({
        from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: 'Email de prueba', // Subject line
        html: '<b>Test Email</b>', // html body
      });
    } catch (error) {
      throw error
    }
  }
}
