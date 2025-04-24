import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { ForgetPasswordComponent } from './component/forgotPassword/forget-password/forget-password.component';
import { DashboardComponent } from './component/dashboard/dashboard/dashboard.component';
import { NavbarComponent } from './component/navbar/navbar/navbar.component';
import { PlansComponent } from './component/plans/plans.component';
import { TraineeComponent } from './component/trainee/trainee.component';



export const routes: Routes = [
      {
            path:'',
            pathMatch: "full",
            redirectTo: "login"
      },
      {
            path:'login',
            title:'login',
            component:LoginComponent
      },
      {
            path:'signup',
            component:SignupComponent
      },
      {
            path:'forget-pswd',
            component:ForgetPasswordComponent
      },
      {
            path:'login',
            redirectTo:'dashboard'   
      },
      {
            path:'dashboard',
            component:DashboardComponent,
            
      },
      {
            path:'navbar',
            component: NavbarComponent,
            children:[
             
                  {     
                        path:'plans',
                        component:PlansComponent
                  },
                  {     
                        path:'trainee',
                        component:TraineeComponent
                  },
                  // { path: '', redirectTo: 'member', pathMatch: 'full' },
            ]
      },
      // {
      //       path:'layout',
      //       component: LayoutComponent
      // }
      
];
