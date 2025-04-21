import { Component } from '@angular/core';
import { Validator, FormsModule, NgForm } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { SignupModel } from '../models/signup.model';
import { CommonModule } from '@angular/common';
import { Toast } from 'primeng/toast';

import { MessageService } from 'primeng/api';
import { RippleModule } from 'primeng/ripple';


@Component({
  selector: 'app-signup',
  imports: [FormsModule, ButtonModule, PasswordModule, RippleModule, InputTextModule, RouterLink,CommonModule,Toast],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  providers:[
    [MessageService]
  ]

})
export class SignupComponent {
  title = 'signup';
  value!: string;
  // email: string = '';
  // password: string = '';
  // confirmPassword: string = '';
  // name: string = '';
  // users: string = '';
   errorMessage: string = '';

  User: SignupModel = new SignupModel;

  constructor(private authService: AuthService, private router: Router, private messageService: MessageService) { }

  signup(form: NgForm) {
   console.log(form);
    if(form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    if (this.User.password !== this.User.confirmPassword) {
     this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Password does not match, Please re-write.' });
      return;
    }
    const success = this.authService.register(this.User.email, this.User.password);
   
    if (success) {
      // this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
      // alert('Signup successful! Please log in.');
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Signup successful! Please log-in.' });
      this.router.navigate(['/login']);
    } else {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'User already exist!' });
    }
    
  }
}

