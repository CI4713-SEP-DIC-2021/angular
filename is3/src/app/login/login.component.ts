import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  public form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    
    this.form = this.formBuilder.group({
      user: [null, [Validators.required]],
      password: [null, [Validators.required]],
      check: false
    })
  }

 onSubmit(values: string){
    
 }

 recover_password(){

 }
}