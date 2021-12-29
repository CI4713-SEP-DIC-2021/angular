import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-meeting',
  templateUrl: './show-meeting.component.html',
  styleUrls: ['./show-meeting.component.scss']
})
export class ShowMeetingComponent implements OnInit {

  sprintIdSelected!: Number;

  constructor(
    private dialogRef: MatDialogRef<ShowMeetingComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ) { }

  ngOnInit(): void {
  }

  selectSprint(event: any) {
    this.sprintIdSelected = event.value;
  }

  goToPlanningMeeting() {
    this.router.navigate(["/meetings", 'planning', this.sprintIdSelected])
    this.close()
  }

  goToDailyMeeting() {
    this.router.navigate(["/meetings",'daily', this.sprintIdSelected])
    this.close()
  }

  goToRetrospectiveMeeting() {
    this.router.navigate(["/meetings", 'retrospective', this.sprintIdSelected])
    this.close()
  }

  close() {
    this.dialogRef.close();
  }
}
