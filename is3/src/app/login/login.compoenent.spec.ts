import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {MatToolbarModule} from '@angular/material/toolbar'; 

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const matDialogSpy = jasmine.createSpyObj('MatDialogRef', ['onNoClick', 'closeDialog']);
  const matDialogService = jasmine.createSpyObj<MatDialog>('MatDialog', ['open']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent],
      imports: [ReactiveFormsModule, RouterTestingModule, HttpClientTestingModule, MatToolbarModule],
      providers: [{provide: MatDialogRef, useValue: matDialogSpy},  {provide: MatDialog, useValue: matDialogService} ],
    })
    .compileComponents();
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule],
    })
    .createComponent(LoginComponent);
  });

  it('componente login creado correctamente', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Se verifico las credenciales del usuario', async () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance;
    (<HTMLInputElement>document.getElementById('usuario')).value = 'admin';
    (<HTMLInputElement>document.getElementById('contrasena')).value = '1234';
    document.getElementById('enviar')?.click();
    expect(app.test).toBeDefined();
    
  });

  it('Fallaron las credenciales del usuario', async () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance;
    (<HTMLInputElement>document.getElementById('usuario')).value = 'admin';
    (<HTMLInputElement>document.getElementById('contrasena')).value = '12';
    document.getElementById('enviar')?.click();
    expect(app.test).toBe("");
  });

  it('Inicia funcion de recuperar contraseña', async () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.componentInstance;
    document.getElementById('recuperar')?.click();
    expect(app.test).toBe(true);
  });

});