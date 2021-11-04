import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule
  ],
  exports: [
    UserProfileComponent,
  ],
})
export class UserProfileModule { }
