import { Component } from '@angular/core';
import { EmailSend } from '../../models/EmailSend';
import { FormsModule } from '@angular/forms';
import { EmailService } from '../../services/email.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-contact-me',
  imports: [FormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css',
})
export class ContactMeComponent {
  Message: EmailSend = {
    my_name: 'Paul',
    from_name: '',
    subject: 'Consulta sobre desarrollo web personalizado',
    message: '',
  };
  constructor(private emailService: EmailService, private toastr: ToastrService) {}
  Send() {
    this.emailService.sendEmail(this.Message).then(
      (res) => {
        this.toastr.success('Mensaje Enviado');
        this.Message = {
          my_name: 'Paul',
          from_name: '',
          subject: 'Consulta sobre desarrollo web personalizado',
          message: ''
        }
      },
      (err) => {
        console.log('Error al enviar:', err);
      }
    );
  }
}
