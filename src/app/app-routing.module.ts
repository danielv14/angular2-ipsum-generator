import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenerateIpsumComponent } from './generate-ipsum/generate-ipsum.component';

const routes: Routes = [
  {
    path: '',
    children: [],
    component: GenerateIpsumComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
