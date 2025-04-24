import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: RegisterUser[] = [
    { email: 'admin@gmail.com', password: 'admin123' },
  ];

  register(email: string, password: string): boolean {
    const userExists = this.users.some((user) => user.email === email);
    if (userExists) {
      return false; 
    }
    this.users.push({ email, password });
    return true;
  }
  login(email: string, password: string): boolean {
    if(this.users.some((user) => user.email === email && user.password === password)){
      return true;
    }
    return false;
    // return ;
 
  }
  // logout(): void {
  //   this.isAuthenticated = false;
  // const userFound = this.users.some(
  //   (user) => user.email === email && user.password === password
  // );
  // if (userFound) {
  //   this.isAuthenticated = true;
  //   return true;
  // }
  // return false;
  // }
  constructor() { }
} 

class RegisterUser {
  email: string = "";
  password: string = "";
}
