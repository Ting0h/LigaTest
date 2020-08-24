import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Liga Test';
  display: Boolean = false;

  displayNone(): Boolean {
    this.display = true;
    return this.display;
  }

  displayReturn(): Boolean{
    return this.display;
  }
}