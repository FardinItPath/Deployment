import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { FormControl, FormsModule, NgForm } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { MessagesModule } from 'primeng/messages';
import { LoginModel } from '../../models/login.model';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-login',
  imports: [FormsModule, ButtonModule, PasswordModule, InputTextModule, CommonModule, RouterModule, InputTextModule, MessagesModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [
     [MessageService]
  ]
})
export class LoginComponent {
  User: LoginModel = new LoginModel;
  invalidCredential: string = ''
  title = 'login';
  // email: string = '';
  // password: string = '';
  // confirmPassword: string = "";
  // username: string = "";
  // errorMessage: string = "";

  constructor(private authService: AuthService, private router: Router,  private messageService: MessageService) { }


  login(form: NgForm) {
    debugger
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    if (this.authService.login(this.User.email, this.User.password)) {
      // debugger;
      // alert('Login Successful!');
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Login Successful!' });
      this.router.navigate(['/dashboard']);
      // this.router.navigate(['/navbar']);
      return true;

    } else {
      this.invalidCredential = 'Invalid email or password!';
      return false;
    }
  }
}
