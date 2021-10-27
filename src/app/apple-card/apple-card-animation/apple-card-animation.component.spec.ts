import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleCardAnimationComponent } from './apple-card-animation.component';

describe('AppleCardAnimationComponent', () => {
  let component: AppleCardAnimationComponent;
  let fixture: ComponentFixture<AppleCardAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppleCardAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppleCardAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
