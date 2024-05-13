import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAdminModificarUsuarioComponent } from './form-admin-modificar-usuario.component';

describe('FormAdminModificarUsuarioComponent', () => {
  let component: FormAdminModificarUsuarioComponent;
  let fixture: ComponentFixture<FormAdminModificarUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAdminModificarUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAdminModificarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
