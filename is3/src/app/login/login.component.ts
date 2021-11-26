import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login.service';

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
  public prueba: any[] = [];
  public test: any = "";

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public dialogRef: MatDialogRef<LoginComponent>,
    public dialog: MatDialog,
    private loginService: LoginService,
  ) { }

  ngOnInit() {
    
    //this.prueba = ["usuario","1234"],
    this.form = this.formBuilder.group({
      user: [null, [Validators.required]],
      password: [null, [Validators.required]],
      check: false
    })
  }

 onSubmit(values: any){
  this.loginService.login(values.user, values.password).then((data: any) => {
    this.test = data;
    if (data) { 
     // console.log(data)
      localStorage.setItem('acces_token', data.access_token);
      localStorage.setItem('refresh_token', data.refresh_token);
      this.router.navigate(["/user-profile"])
    }
    else{
      const dialogRef = this.dialog.open(DialogErrorLogin);
    }
  });
 }

 recover_password(){
  this.test = true;
 }
}