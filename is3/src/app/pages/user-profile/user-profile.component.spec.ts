import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserProfileComponent } from './user-profile.component';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit, inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {of} from 'rxjs'

fdescribe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;
  const matDialogSpy = jasmine.createSpyObj('MatDialogRef', ['onNoClick', 'closeDialog']);
  const matDialogService = jasmine.createSpyObj<MatDialog>('MatDialog', ['open']);
  let dialogSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfileComponent],
      imports: [ReactiveFormsModule, RouterTestingModule, HttpClientTestingModule, MatToolbarModule],
      providers: [{provide: MatDialogRef, useValue: matDialogSpy},  {provide: MatDialog, useValue: matDialogService} ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
    TestBed.configureTestingModule({
      declarations: [UserProfileComponent],
      imports: [ReactiveFormsModule],
    })
    .createComponent(UserProfileComponent);
    
  });

  it('componente de periles de usuario creado correctamente', () => {
    const fixture = TestBed.createComponent(UserProfileComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('LLegan datos de los usuarios desde el backend', async () => {
    const fixture = TestBed.createComponent(UserProfileComponent);
    const app = fixture.componentInstance;
    expect(app.userList).not.toBe([]);
  });

  it('Se obtiene correctamente los proyectos del usuario', async () => {
    const fixture = TestBed.createComponent(UserProfileComponent);
    const app = fixture.componentInstance;
    document.getElementById('proyectos')?.click();
    expect(app.test).toBeDefined();
  });

  it('Inicia funcion de eliminar usuario', async () => {
    const fixture = TestBed.createComponent(UserProfileComponent);
    const app = fixture.componentInstance;
    app.deleteUser("1")
    expect(app.test).toBe("true1");
  });
  it('Inicia funcion de editar usuario', async () => {
    const fixture = TestBed.createComponent(UserProfileComponent);
    const app = fixture.componentInstance;
    app.change("1")
    expect(app.test).toBe("true2");
  });
  it('Inicia funcion de añadir usuario', async () => {
    const fixture = TestBed.createComponent(UserProfileComponent);
    const app = fixture.componentInstance;
    document.getElementById('agregar')?.click();
    expect(app.test).toBe("");
  });

});
