import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router, RouterOutlet} from '@angular/router';
import {Slider} from './app-routing/route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    Slider
  ]
})

export class AppComponent {
  title = 'Muhammad Sultan';
  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {}

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
