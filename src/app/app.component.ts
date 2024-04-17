import { Component, inject } from '@angular/core';
import { CarService } from './car.service';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserComponent } from './user/user.component';
@Component({
  selector: 'app-root',
  template: `
    <p>{{ carService.getCars() }}</p>
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
  imports: [ReactiveFormsModule, UserComponent],
})
export class AppComponent {
  carService = inject(CarService);
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  handleSubmit() {
    alert(this.profileForm.value.name + ' | ' + this.profileForm.value.email);
  }
}
