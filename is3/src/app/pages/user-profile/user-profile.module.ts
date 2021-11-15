import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent, SignUpDialog, editUserDialog,projectsUserDialog } from './user-profile.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { ComponentsModule } from 'src/app/components/components.module';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [UserProfileComponent, SignUpDialog, editUserDialog, projectsUserDialog],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    ComponentsModule,
    FormsModule,
    MatDialogModule,
    MatSelectModule,
    MatButtonModule,
  ],
  exports: [
    UserProfileComponent,
  ],
})
export class UserProfileModule { }
