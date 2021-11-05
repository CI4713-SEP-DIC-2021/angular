import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: "dialog-errorLogin",
  templateUrl: "dialog-errorLogin.html",
})
export class DialogErrorLogin {
  constructor(public dialogRef: MatDialogRef<DialogErrorLogin>) {}

  close() {
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    this.close();
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  public form!: FormGroup;
  public prueba: any[] = []

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public dialogRef: MatDialogRef<LoginComponent>,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    
    this.prueba = ["cristomax","hola"],
    this.form = this.formBuilder.group({
      user: [null, [Validators.required]],
      password: [null, [Validators.required]],
      check: false
    })
  }

 onSubmit(values: any){
    //Debemos verificar el login usando el servicio
    if ((values.user ===this.prueba[0]) && (values.password === this.prueba[1])) {
      this.router.navigate(["/dashboard"])
    }
    else{
      const dialogRef = this.dialog.open(DialogErrorLogin);
    }
 }

 recover_password(){

 }
}