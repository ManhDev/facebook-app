import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentFunctionComponent } from './comment-function.component';

describe('CommentFunctionComponent', () => {
  let component: CommentFunctionComponent;
  let fixture: ComponentFixture<CommentFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentFunctionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
