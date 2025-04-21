import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import {  Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [ CommonModule, ButtonModule,RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  title = 'navbar';
  // constructor(private router: Router) { }

  // navigateToMember() {
  //   this.router.navigate(['member'], {  });
  // }
}
