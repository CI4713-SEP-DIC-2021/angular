import { Component, Inject, OnInit } from '@angular/core';
import { Form, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss']
})
export class AddMemberComponent implements OnInit {

  token!: any;
  usersList = [] as any;

  membersForm = this.formBuilder.group({
    username: [''],
    email: [''],
    phone_number: ['']
  })

  constructor(
    private formBuilder: FormBuilder,
    private userProfileService: UserProfileService,
    private dialogRef: MatDialogRef<AddMemberComponent>,
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
   * addMember
   * Returns the information of the new member to be added 
   */
  addMember() {
    let member_data: any = [{}];
    for (let x of this.usersList) {
      let element: any = x;
      if (element.username == this.membersForm.value.username) {
        member_data[0].name = element.first_name + " " + element.last_name;
        member_data[0].role = element.role;
        member_data[0].username = element.username;
        member_data[0].id = element.id;
      }
    }

    member_data[0].email = this.membersForm.value.email;
    member_data[0].phone_number = this.membersForm.value.phone_number;

    this.dialogRef.close(member_data[0]);
  }

}
