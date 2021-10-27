import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppleCardRoutingModule } from './apple-card-routing.module';
import { AppleCardAnimationComponent } from './apple-card-animation/apple-card-animation.component'


@NgModule({
  declarations: [AppleCardAnimationComponent],
  imports: [
    AppleCardRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppleCardModule { }
