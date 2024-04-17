import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent],
  template: `
    <div>
      <app-user />
    </div>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-coding';
}
