import { analyzeAndValidateNgModules } from '@angular/compiler';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MeetingService } from 'src/app/services/meeting.service';
import { AddRetrospectiveComponent } from './add-retrospective/add-retrospective.component';
import { EditRetrospectiveComponent } from './edit-retrospective/edit-retrospective.component';

@Component({
  selector: 'app-retrospective',
  templateUrl: './retrospective.component.html',
  styleUrls: ['./retrospective.component.scss']
})
export class RetrospectiveComponent implements OnInit {search!: string;    // input search
  displayedColumns: string[] = ['id', 'date', 'method', 'positive', 'negative', 'decision', 'actions'];

  @Input() sprint: any;

  meetList = [];
  meetListBase = [];

  constructor(
    public dialog: MatDialog,
    public meetingService: MeetingService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.meetingService.getAllRetrospectiveBySprint(this.sprint?.id).then((meetings: any) => {
      if(meetings) {
        this.meetList = meetings
        this.meetListBase = this.meetList;
      } 
      
      this.cdr.detectChanges();
    })
  }

  add() {
    this.dialog.open(AddRetrospectiveComponent, { data: {sprintId: this.sprint.id} }).afterClosed()
    .subscribe(result => {
      this.ngOnInit()
    });
  }

  edit(meet: any) {
    this.dialog.open(EditRetrospectiveComponent, { 
      data: {
        sprintId: this.sprint.id, 
        date: meet.date,
        method: meet.method,
        positive: meet.positive,
        negative: meet.negative,
        decision: meet.decision,
        id: meet.id
      } }).afterClosed()
    .subscribe(result => {
      this.ngOnInit()
    });
  }

  delete(meet: any) {
    this.meetingService.deleteRetrospective(meet.id);
    this.ngOnInit()
    this.cdr.detectChanges();
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
