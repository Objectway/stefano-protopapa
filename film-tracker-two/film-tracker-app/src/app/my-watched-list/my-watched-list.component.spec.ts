import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWatchedListComponent } from './my-watched-list.component';

describe('MyWatchedListComponent', () => {
  let component: MyWatchedListComponent;
  let fixture: ComponentFixture<MyWatchedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyWatchedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWatchedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
