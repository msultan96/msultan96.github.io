import { Component, OnInit } from '@angular/core';
import {faGithub, faGithubSquare} from '@fortawesome/free-brands-svg-icons';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  faGithub = faGithub;
  faGithubSquare = faGithubSquare;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  constructor() { }

  ngOnInit() {
  }

}
