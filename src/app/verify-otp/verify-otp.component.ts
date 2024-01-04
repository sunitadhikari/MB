import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Component, ElementRef, ViewChild } from '@angular/core';
// import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-verify-otp',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './verify-otp.component.html',
  styleUrl: './verify-otp.component.css',
})
export class VerifyOtpComponent {
  constructor(private route: Router) {}
  // OTP CODE =9840
  otp: string = '';

  verify() {
    if (this.otp == '9840') {
      // alertify.success('Successfull');
      this.route.navigate(['home']);
    } else {
      // alertify.error('Please enter the correct OTP code.');
    }
    return this.otp;
  }
}
