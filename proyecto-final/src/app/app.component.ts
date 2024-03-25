import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  options = {
    bottom: 0,
    scrollbars: true,
    fixed: false,
    top: 0,
    opened: true,
    backdrop: true,
  };

  constructor() {}
}
