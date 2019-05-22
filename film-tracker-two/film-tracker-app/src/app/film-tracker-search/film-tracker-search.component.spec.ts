import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmTrackerSearchComponent } from './film-tracker-search.component';

describe('FilmTrackerSearchComponent', () => {
  let component: FilmTrackerSearchComponent;
  let fixture: ComponentFixture<FilmTrackerSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmTrackerSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmTrackerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
