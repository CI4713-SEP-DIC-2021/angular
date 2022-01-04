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
  displayedColumns: string[] = ['id', 'date', 'report', 'actions'];

  @Input() sprint: any;

  meetList = [];
  meetListBase = [];

  constructor(
    public dialog: MatDialog,
    public meetingService: MeetingService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.meetingService.getAllDailiesBySprint(this.sprint?.id).then((meetings: any) => {
      if(meetings) {
        this.meetList = meetings
        this.meetListBase = this.meetList;
      }

      this.cdr.detectChanges();
    })
  }

  add() {
    this.dialog.open(AddDailyComponent, { data: {sprintId: this.sprint.id} }).afterClosed()
    .subscribe(result => {
      this.ngOnInit()
    });
  }

  edit(meet: any) {
    this.dialog.open(EditDailyComponent, { 
      data: {
        id: meet.id, 
        sprintId: this.sprint.id, 
        date: meet.subject,
        report: meet.report,
      } }).afterClosed()
    .subscribe(result => {
      this.ngOnInit()
    });
  }

  delete(meet: any) {
    this.meetingService.deleteDailies(meet.id);
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
