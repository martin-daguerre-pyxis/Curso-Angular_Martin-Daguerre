import { Component, inject } from '@angular/core';
import { ThemeService } from './theme.service';
@Component({
  selector: 'app-themeChange',
  templateUrl: './themeChange.component.html'
})
export class ThemeChangeComponent {
  private _themeService = inject(ThemeService);

  public toggleTheme(): void {
    this._themeService.toggleDarkMode();
  }
}
