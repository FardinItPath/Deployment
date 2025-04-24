 import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface User {
  EnrollmentNo: number;
  Name: string;
  Gender: string;
  SubscriptionPlan: string;
  Height: number;
  Weight: number;
  ContactNumber: number;
  Email: string;
  Active: boolean;
  Membership: Date;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [
    { EnrollmentNo: 1, Name: 'Shivam', Gender: 'Male', SubscriptionPlan: "Standard", Height: 170, Weight: 60, ContactNumber: 5421281550, Email: 'shivam@gmail.com', Active: true, Membership: new Date() }
  ];

  private usersSubject = new BehaviorSubject<User[]>(this.users);
  users$ = this.usersSubject.asObservable();

  getUsers() {
    return this.usersSubject.asObservable();
  }

  addUser(user: User) {
    user.EnrollmentNo = this.users.length + 1;
    this.users.push(user);
    this.usersSubject.next([...this.users]);
  }

  // updateUser(index: number, user: User) {
  //   this.users[index] = user;
  //   this.usersSubject.next([...this.users]);
  // }

  // deleteUser(index: number) {
  //   this.users.splice(index, 1);
  //   this.usersSubject.next([...this.users]);
  // }
}