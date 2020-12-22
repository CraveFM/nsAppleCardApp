import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppleCardRoutingModule } from './apple-card-routing.module';
import { AppleCardAnimationComponent} from './apple-card-animation/apple-card-animation.component';

@NgModule({
  declarations: [
    AppleCardAnimationComponent
  ],
  imports: [
    CommonModule,
    AppleCardRoutingModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppleCardModule { }
