import { Component, Inject, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MeetingService } from 'src/app/services/meeting.service';
import { SprintsService } from 'src/app/services/sprints.service';
import { UserProfileService } from 'src/app/services/user-profile.service';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-edit-daily',
  templateUrl: './edit-daily.component.html',
  styleUrls: ['./edit-daily.component.scss']
})
export class EditDailyComponent implements OnInit {

  token!: any;
  usersList: any;
  storiesList: any;

  constructor(
    private formBuilder: FormBuilder,
    private meetingService: MeetingService,
    private sprintsService: SprintsService,
    private dialogRef: MatDialogRef<EditDailyComponent>,
    private userProfileService: UserProfileService,
    public datePipe: DatePipe,
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
    date: [this.data?.date, Validators.required],
    report: [this.data?.report, Validators.required],
    sprint_id: [this.data?.sprintId, Validators.required]
  })

  /**
   * addProject
   * Adds a new project to the database
   */
  addRetrospective() {
    // Adds a new project
    console.log(this.planningForm.value);
    console.log(new Date(this.planningForm.controls['date'].value))

    let date_modified =this.datePipe.transform(new Date(this.planningForm.controls['date'].value), 'dd/MM/yyyy');

    this.planningForm.controls['date'].setValue(date_modified);
    
    this.meetingService.updateDailies(this.planningForm.value, this.data?.id);
    this.dialogRef.close();
  }

}