import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRegistrationComponent } from './login-registration.component';

describe('LoginRegistrationComponent', () => {
  let component: LoginRegistrationComponent;
  let fixture: ComponentFixture<LoginRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a form with 2 controls', () => {
    expect(component.form.contains['email']).toBeTruthy();
    expect(component.form.contains['password']).toBeTruthy();
  });

  it('should make the controls required', () => {
    let control = component.form.get('email').toBeTruthy();
    control.setValu('');
    expect(control.valid).toBeFalsy();

    expect(component.form.contains['password']).toBeTruthy();
    control.setValu('');
    expect(control.valid).toBeFalsy();
  });

  it('should create a user event', () => {
    component.createUserEvent.subscribe()
  });
});
