import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss']
})
export class AddTeamComponent implements OnInit {

  token!: any;
  usersList = [] as any;

  membersForm = this.formBuilder.group({
    team_name: [''],
    username: [''],
    email: [''],
    phone_number: ['']
  })

  constructor(
    private formBuilder: FormBuilder,
    private userProfileService: UserProfileService,
    private dialogRef: MatDialogRef<AddTeamComponent>
  ) { }

  ngOnInit(): void {
    // Get all users 
    this.token = localStorage.getItem('acces_token');
    this.userProfileService.getAll(this.token).then((users: any) => {
      if (users) { 
        this.usersList = users.users;
      }
    });
  }

  /**
   * addTeam
   * Adds a new team for the project
   */
  addTeam() {
    let team_data: any = [{}];
    team_data[0].name = this.membersForm.value.team_name;

    let members_data: any = [{}];


    for (let x of this.usersList) {
      let element: any = x;
      if (element.username == this.membersForm.value.username) {
        members_data[0].name = element.first_name + " " + element.last_name;
        members_data[0].role = element.role;
        members_data[0].username = element.username;
        members_data[0].id = element.id;
      }
    }

    members_data[0].email = this.membersForm.value.email;
    members_data[0].phone_number = this.membersForm.value.phone_number;

    team_data[0].members = members_data;

    this.dialogRef.close(team_data[0]);
  }

}
