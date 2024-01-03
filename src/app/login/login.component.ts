import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule } from '@angular/forms';
import { UserService } from './../user.service';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private userService: UserService, private router: Router) {}
  loginDetail: any[] = [];
  loginData = new FormGroup({
    phoneNumber: new FormGroup(''),
    password: new FormGroup(''),
  });

  getUser() {
    // this.userService.getLoginDetail().subscribe((data) => {
    //   console.log(data);
    //   // this.loginData = data;
    // });
  }
  onSubmit() {
    if (this.loginData) {
      console.log('login successful');
    } else {
      console.log('failed to login');
    }
    this.router.navigate(['verify/otp']);
  }
}
