import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private serviceId = 'service_883iaib';
  private templateId = 'template_8p5id1q';
  constructor() {}
  sendEmail(formData: any): Promise<EmailJSResponseStatus> {
    emailjs.init({
      publicKey: 'WmAWHxvb1a-EbLaj8',
      // Do not allow headless browsers
      blockHeadless: true,
      blockList: {
        // Block the suspended emails
        list: ['foo@emailjs.com', 'bar@emailjs.com'],
        // The variable contains the email address
        watchVariable: 'userEmail',
      },
      limitRate: {
        // Set the limit rate for the application
        id: 'app',
        // Allow 1 request per 10s
        throttle: 10000,
      },
    });
    return emailjs.send(this.serviceId, this.templateId, formData);
  }
}
