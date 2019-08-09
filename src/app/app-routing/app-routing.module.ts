import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from '../index/index.component';
import {ResumeComponent} from '../resume/resume.component';
import {SkillsComponent} from '../skills/skills.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    component: IndexComponent,
    data: {
      animation: 'isLeft'
    }
  },
  {
    path: 'skills',
    component: SkillsComponent,
  },
  {
    path: 'resume',
    component: ResumeComponent,
    data: {
      animation: 'isRight'
    }
  },
  {
    path: '**',
    redirectTo: '/index',
  }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
