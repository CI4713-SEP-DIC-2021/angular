import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-team-member',
  templateUrl: './edit-team-member.component.html',
  styleUrls: ['./edit-team-member.component.scss']
})
export class EditTeamMemberComponent implements OnInit {

  membersForm!: FormGroup;
  team_name!: string;
  name!: string;
  email!: string;
  phone_number!: string;
  role!: string;
  username!: string;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<EditTeamMemberComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) { this.team_name = data.team_name, this.name = data.name, this.email = data.email, this.phone_number = data.phone_number, this.role = data.role, this.username = data.username }

  ngOnInit(): void {
    this.membersForm = this.formBuilder.group({
      team_name: this.team_name,
      name: this.name,
      email: this.email,
      phone_number: this.phone_number,
      role: this.role,
      username: this.username
    });
  }

  /**
   * editTeamMember
   * Returns the edited information of the member of the team 
   */
   editTeamMember() {
    this.dialogRef.close(this.membersForm.value);
  }

}
