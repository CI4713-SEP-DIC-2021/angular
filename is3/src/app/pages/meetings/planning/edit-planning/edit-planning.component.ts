import { Component, Inject, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MeetingService } from 'src/app/services/meeting.service';
import { SprintsService } from 'src/app/services/sprints.service';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-edit-planning',
  templateUrl: './edit-planning.component.html',
  styleUrls: ['./edit-planning.component.scss']
})
export class EditPlanningComponent implements OnInit {

  token!: any;
  usersList: any;
  storiesList: any;

  planningForm!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private meetingService: MeetingService,
    private sprintsService: SprintsService,
    private dialogRef: MatDialogRef<EditPlanningComponent>,
    private userProfileService: UserProfileService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('acces_token');
    this.userProfileService.getAll(this.token).then((users: any) => {
      if (users) { 
        this.usersList = users.users;
      }
    });
    this.sprintsService.getStoriesBySprint(this.data.sprintId).then((stories: any) => {
      if (stories) { 
        this.storiesList = stories;
      }
    })


  this.planningForm = this.formBuilder.group({
    subject: [this.data.subject, Validators.required],
    activity: [this.data.activity, Validators.required],
    user_story_id: [this.data.user_story_id, Validators.required],
    assigned: [this.data.assigned, Validators.required]
  })


  this.planningForm.get('user_story_id')?.setValue(this.data.user_story_id);
  this.planningForm.get('assigned')?.setValue(this.data.assigned);
  }

  editPlanning() {
    console.log(this.planningForm.value);
    
    this.meetingService.updatePlanningResult(this.planningForm.value, this.data.id);
    this.dialogRef.close();
  }
}
