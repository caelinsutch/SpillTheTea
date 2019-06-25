import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashLoginPage } from './splash-login.page';

describe('SplashLoginPage', () => {
  let component: SplashLoginPage;
  let fixture: ComponentFixture<SplashLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplashLoginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
