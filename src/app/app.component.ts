import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router, RouterOutlet} from '@angular/router';
import {Slider} from './app-routing/route-animations';
import {faGithub, faGithubSquare} from '@fortawesome/free-brands-svg-icons';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';


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
  faGithub = faGithub;
  faGithubSquare = faGithubSquare;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  constructor(
    private httpClient: HttpClient,
    private router: Router,
  ) {}

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
