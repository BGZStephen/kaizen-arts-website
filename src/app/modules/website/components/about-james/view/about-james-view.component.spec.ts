import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutJamesViewComponent } from './about-james-view.component';

describe('AboutJamesViewComponent', () => {
  let component: AboutJamesViewComponent;
  let fixture: ComponentFixture<AboutJamesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutJamesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutJamesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
