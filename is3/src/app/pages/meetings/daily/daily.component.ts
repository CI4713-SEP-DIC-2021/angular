import { analyzeAndValidateNgModules } from '@angular/compiler';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MeetingService } from 'src/app/services/meeting.service';
import { AddDailyComponent } from './add-daily/add-daily.component';
import { EditDailyComponent } from './edit-daily/edit-daily.component';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss']
})
export class DailyComponent implements OnInit {
  search!: string;    // input search
  displayedColumns: string[] = ['id', 'subject', 'user_story_id', 'activity', 'assigned', 'actions'];

  @Input() sprint: any;

  meetList = [];
  meetListBase = [];
  planning: any;

  constructor(
    public dialog: MatDialog,
    public meetingService: MeetingService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.meetingService.getAllPlanningBySprint(this.sprint?.id).then((meetings: any) => {
      if(meetings) {
        this.planning = meetings.planning
        this.meetList = meetings.results
        this.meetListBase = this.meetList;
      } else {
        this.meetingService.createPlanning(this.sprint?.id).then((planning: any) => {
          this.planning = planning
        });
      }

      this.cdr.detectChanges();
    })
  }

  add() {
    this.dialog.open(AddDailyComponent, { data: {planningId: this.planning.id, sprintId: this.sprint.id} }).afterClosed()
    .subscribe(result => {
      this.ngOnInit()
    });
  }

  edit(meet: any) {
    this.dialog.open(EditDailyComponent, { 
      data: {
        planningId: this.planning.id, 
        sprintId: this.sprint.id, 
        subject: meet.subject,
        activity: meet.activity,
        user_story_id: meet.user_story_id,
        assigned: meet.assigned,
      } }).afterClosed()
    .subscribe(result => {
      this.ngOnInit()
    });
  }

  delete(meet: any) {

  }

  searchMeet() {
    if (this.search != "") {
      this.meetList = this.meetList.filter((res: any) => {
        return res?.subject.toLocaleLowerCase().match(this.search.toLocaleLowerCase());
      })
    } else {
      this.meetList = this.meetListBase;
    }
  }
}
