import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLogFormComponent } from './app-log-form.component';

describe('AppLogFormComponent', () => {
  let component: AppLogFormComponent;
  let fixture: ComponentFixture<AppLogFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppLogFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
