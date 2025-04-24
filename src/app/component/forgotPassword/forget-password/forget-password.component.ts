import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-forget-password',
  imports: [RouterLink, FormsModule, ButtonModule, PasswordModule, InputTextModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent {
  title = 'forget-pswd';
  value!: string;
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  constructor(private router: Router) { }
}
