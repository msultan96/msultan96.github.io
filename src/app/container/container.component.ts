import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {}

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
  ngOnInit() {
  }

}
