import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.scss']
})
export class EditMemberComponent implements OnInit {

  membersForm!: FormGroup;
  name!: string;
  email!: string;
  phone_number!: string;
  role!: string;
  username!: string;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<EditMemberComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) { this.name = data.name, this.email = data.email, this.phone_number = data.phone_number, this.role = data.role, this.username = data.username }

  ngOnInit(): void { 
    this.membersForm = this.formBuilder.group({
      name: this.name,
      email: this.email,
      phone_number: this.phone_number,
      role: this.role,
      username: this.username
    });
  }

  /**
   * editMember
   * Returns the edited information of the member of the team 
   */
  editMember() {
    this.dialogRef.close(this.membersForm.value);
  }

}
