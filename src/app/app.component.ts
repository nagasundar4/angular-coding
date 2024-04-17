import { Component, Inject } from '@angular/core';
import { CarService } from './car.service';
import { UserComponent } from './user/user.component';
import { UpperCasePipe } from '@angular/common';
import { LowerCasePipe } from '@angular/common';

import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <p>{{ loudMessage | uppercase }}</p>
    <p>{{ username | lowercase }}</p>
    <p>Car Listing: {{ display }}</p>
    <form [formGroup]="profileForm" (ngSubmit)="handleSubmit()">
      <label>
        Name
        <input
          type="text"
          placeHolder="Enter Name"
          name="name"
          formControlName="name"
        />
      </label>
      <label>
        Email
        <input
          type="email"
          placeHolder="Enter email"
          formControlName="email"
          name="email"
        />
      </label>
      <button type="submit" [disabled]="!profileForm.valid">Submit</button>
    </form>
    <h2>Profile Form</h2>
    <p>Name: {{ profileForm.value.name }}</p>
    <p>Email: {{ profileForm.value.email }}</p>
  `,
  standalone: true,
  imports: [ReactiveFormsModule, UserComponent, UpperCasePipe, LowerCasePipe],
})
export class AppComponent {
  username = 'yOunGTECh';
  loudMessage = 'we think you are doing great!';
  display = '';

  constructor(private carService: CarService) {
    this.display = this.carService.getCars().join(' ⭐️ ');
  }

  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  handleSubmit() {
    alert(this.profileForm.value.name + ' | ' + this.profileForm.value.email);
  }
}
