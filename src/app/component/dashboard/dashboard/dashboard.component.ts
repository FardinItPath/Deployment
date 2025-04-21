import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableModule, TableRadioButton } from 'primeng/table';
import { User, UserService } from '../../services/user.service';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { ToggleSwitch } from 'primeng/toggleswitch';

class Users {

  constructor(
    public EnrollmentNo: number = 0,
    public Name: string = '',
    public Gender: string = '',
    public SubscriptionPlan: string = '',
    public Height: number = 0,
    public Weight: number = 0,
    public ContactNumber: number = 0,
    public Email: string = '',
    public Active: boolean = true,
    public Membership?: Date
  ) { }

  // constructor(_enrollmentNo: number, _name: string, _gender: string, _subsciptionPlan: number, _height: number, _weight: number, _contactNumber: number, _email: string, _active: boolean, _membership: number) {
  //   this.EnrollmentNo = _enrollmentNo;
  //   this.Name = _name;
  //   this.Gender = _gender;
  //   this.SubscriptionPlan = _subsciptionPlan;
  //   this.Height = _height;
  //   this.Weight = _weight;
  //   this.ContactNumber = _contactNumber;
  //   this.Email = _email;
  //   this.Active = _active;
  //   this.Membership = _membership
  // }
}

@Component({
  selector: 'app-dashboard',
  imports: [TableModule, CommonModule, FormsModule, ButtonModule, CalendarModule, DialogModule,ToggleSwitch],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',

})
export class DashboardComponent {
  title = 'dashboard'
  EndDate: Date = new Date;
  isShowForm: boolean = false;
  addTaskValue: string = "";
  status: boolean = true;
  visible: boolean = false;
  checked: boolean= false;
  showDialog() {
      this.visible = true;
  }


  user: Users[] = [
    {
      EnrollmentNo: 1, Name: 'Shivam', Gender: 'Male', SubscriptionPlan: "Standard", Height: 170, Weight: 60, ContactNumber: 5421281550, Email: 'amit@gmail.com', Active: true,
      Membership: new Date
    },
    {
      EnrollmentNo: 2, Name: 'Pandey', Gender: 'Male', SubscriptionPlan: "None", Height: 175, Weight: 65, ContactNumber: 5427538150, Email: 'pandey@gmail.com', Active: false, Membership: new Date
    },
    {
      EnrollmentNo: 3, Name: 'Amit', Gender: 'Male', SubscriptionPlan: "Standard", Height: 180, Weight: 60, ContactNumber: 5425838150, Email: 'amit@gmail.com', Active: true, Membership: new Date
    },
    {
      EnrollmentNo: 4, Name: 'Sumit', Gender: 'Male', SubscriptionPlan: "Moderate", Height: 180, Weight: 68, ContactNumber: 5421584150, Email: 'sumit@gmail.com', Active: true, Membership: new Date
    },
    {
      EnrollmentNo: 5, Name: 'Roshan', Gender: 'Male', SubscriptionPlan: "None", Height: 155, Weight: 65, ContactNumber: 5427556150, Email: 'roshan@gmail.com', Active: true, Membership: new Date
    },
    {
      EnrollmentNo: 6, Name: 'Tarang Patel', Gender: 'Male', SubscriptionPlan: "None", Height: 150, Weight: 60, ContactNumber: 5421278150, Email: 'tarang@gmail.com', Active: false, Membership: new Date
    },
    {
      EnrollmentNo: 7, Name: 'Chintan Patel', Gender: 'Male', SubscriptionPlan: "Standard", Height: 155, Weight: 63, ContactNumber: 5542748150, Email: 'chintan@gmail.com', Active: true, Membership: new Date
    },
    {
      EnrollmentNo: 8, Name: 'Tirth Shah', Gender: 'Male', SubscriptionPlan: "None", Height: 170, Weight: 70, ContactNumber: 5422457150, Email: 'tirth@gmail.com', Active: false, Membership: new Date
    },
    {
      EnrollmentNo: 9, Name: 'Tisha', Gender: 'Female', SubscriptionPlan: "Moderate", Height: 140, Weight: 70, ContactNumber: 5425228150, Email: 'tisha@gmail.com', Active: true, Membership: new Date
    },
    {
      EnrollmentNo: 10, Name: 'Parshuram', Gender: 'Male', SubscriptionPlan: "Standard", Height: 175, Weight: 75, ContactNumber: 5425728150, Email: 'parshuram@gmail.com', Active: true, Membership: new Date
    },
    {
      EnrollmentNo: 11, Name: 'Kavish', Gender: 'Male', SubscriptionPlan: "Moderate", Height: 172, Weight: 63, ContactNumber: 5486828150, Email: 'kavish@gmail.com', Active: false, Membership: new Date
    },
    {
      EnrollmentNo: 13, Name: 'Bhavya', Gender: 'Male', SubscriptionPlan: "Standard", Height: 170, Weight: 70, ContactNumber: 5454281650, Email: 'bhavya@gmail.com', Active: true, Membership: new Date
    }, {
      EnrollmentNo: 14, Name: 'Chaitali', Gender: 'Female', SubscriptionPlan: "Moderate", Height: 150, Weight: 55, ContactNumber: 5534128150, Email: 'chaitali@gmail.com', Active: true, Membership: new Date
    }, {
      EnrollmentNo: 15, Name: 'Sujal', Gender: 'Male', SubscriptionPlan: "None", Height: 157, Weight: 72, ContactNumber: 5428678150, Email: 'sujal@gmail.com', Active: false, Membership: new Date
    }, {
      EnrollmentNo: 16, Name: 'Rohan', Gender: 'Male', SubscriptionPlan: "Standard", Height: 145, Weight: 50, ContactNumber: 5478588150, Email: 'rohan@gmail.com', Active: true, Membership: new Date
    },
    {
      EnrollmentNo: 17, Name: 'Meshwa', Gender: 'Female', SubscriptionPlan: "None", Height: 145, Weight: 50, ContactNumber: 5427588145, Email: 'meshwa@gmail.com', Active: true, Membership: new Date
    },
    {
      EnrollmentNo: 18, Name: 'Ajay', Gender: 'Male', SubscriptionPlan: "Moderate", Height: 165, Weight: 51, ContactNumber: 5425788150, Email: 'ajay@gmail.com', Active: true, Membership: new Date
    },
    {
      EnrollmentNo: 19, Name: 'Akshit', Gender: 'Male', SubscriptionPlan: "Moderate", Height: 150, Weight: 70, ContactNumber: 5427888150, Email: 'akshit@gmail.com', Active: true, Membership: new Date
    },
    {
      EnrollmentNo: 20, Name: 'Jenish Patel', Gender: 'Male', SubscriptionPlan: "Standard", Height: 155, Weight: 60, ContactNumber: 2127588150, Email: 'jenish@gmail.com', Active: true, Membership: new Date
    },

  ];

  newUser: Users = new Users();
  constructor(private userService: UserService) { }

  toggleStatus() {

  }
 
  addNewTask() {
    this.isShowForm = true;
    this.newUser = new Users();
    this.addTaskValue = ' ';
  }
  addUser() {
    this.newUser.EnrollmentNo = this.user.length+1;
    this.user = [...this.user, this.newUser];
    this.isShowForm = false;
    this.newUser = new Users()
  }

  editUser(index: number) {
  }
  deleteUser(userId : number) {
    const index: number = this.user.findIndex(user => user.EnrollmentNo === userId);
    // const index: number = this.user;
    if (index !== -1) {
        this.user.splice(index, 1);
    }  
  }

  createEmptyUser(): User {
    return {
      EnrollmentNo: 0,
      Name: '',
      Gender: '',
      SubscriptionPlan: '',
      Height: 0,
      Weight: 0,
      ContactNumber: 0,
      Email: '',
      Active: true,
      Membership: new Date()
    };
  }
 
}





















