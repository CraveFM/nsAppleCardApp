import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppleCardAnimationComponent } from './apple-card-animation/apple-card-animation.component';

const routes: Routes = [
  { path: "", component: AppleCardAnimationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppleCardRoutingModule { }
