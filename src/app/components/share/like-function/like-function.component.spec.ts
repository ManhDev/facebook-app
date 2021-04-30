import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeFunctionComponent } from './like-function.component';

describe('LikeFunctionComponent', () => {
  let component: LikeFunctionComponent;
  let fixture: ComponentFixture<LikeFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikeFunctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
