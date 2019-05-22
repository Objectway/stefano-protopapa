import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmTrackerButtonComponent } from './film-tracker-button.component';

describe('FilmTrackerButtonComponent', () => {
  let component: FilmTrackerButtonComponent;
  let fixture: ComponentFixture<FilmTrackerButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmTrackerButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmTrackerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
