import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../service/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login.component',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginservice = inject(User);
  loginObj: any = {
    email: '',
    password: '',
  };
  router = inject(Router);
  
 
  login() {
    // debugger;
    this.loginservice.login(this.loginObj).subscribe((result: any) => {
      // debugger;
      console.log(result);
      
        // alert('Login successful');
        localStorage.setItem('userApp',JSON.stringify(result.user));
        this.router.navigateByUrl("user-list");
      
      
    });
  }
}
