import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentarylistComponent } from './commentarylist.component';

describe('CommentarylistComponent', () => {
  let component: CommentarylistComponent;
  let fixture: ComponentFixture<CommentarylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentarylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentarylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
