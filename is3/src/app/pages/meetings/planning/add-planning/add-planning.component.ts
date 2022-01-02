import { Component, Inject, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MeetingService } from 'src/app/services/meeting.service';
import { SprintsService } from 'src/app/services/sprints.service';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-add-planning',
  templateUrl: './add-planning.component.html',
  styleUrls: ['./add-planning.component.scss']
})
export class AddPlanningComponent implements OnInit {
  token!: any;
  usersList: any;
  storiesList: any;

  constructor(
    private formBuilder: FormBuilder,
    private meetingService: MeetingService,
    private sprintsService: SprintsService,
    private dialogRef: MatDialogRef<AddPlanningComponent>,
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
    });
  }

  planningForm = this.formBuilder.group({
    subject: ['', Validators.required],
    activity: ['', Validators.required],
    user_story_id: ['', Validators.required],
    assigned: ['', Validators.required]
  })

  /**
   * addProject
   * Adds a new project to the database
   */
  addPlanning() {
    // Adds a new project
    console.log(this.planningForm.value);
    
    this.meetingService.addPlanningResult(this.planningForm.value, this.data?.planningId);
    this.dialogRef.close();
  }
}
