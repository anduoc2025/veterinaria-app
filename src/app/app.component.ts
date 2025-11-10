import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {}

  goHome() {
    // ir a la página principal
    this.router.navigateByUrl('/home', { replaceUrl: true });
  }
}
