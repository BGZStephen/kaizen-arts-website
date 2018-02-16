import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSeperatorComponent } from './home-seperator.component';

describe('HomeSeperatorComponent', () => {
  let component: HomeSeperatorComponent;
  let fixture: ComponentFixture<HomeSeperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSeperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSeperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
