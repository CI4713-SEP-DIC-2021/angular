import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SprintsService } from 'src/app/services/sprints.service';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.scss']
})
export class MeetingsComponent implements OnInit {
  meetingType = 'planning'
  sprint!: any;

  constructor(
    private route: ActivatedRoute,
    private sprintService: SprintsService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.meetingType = params['type']
      this.sprintService.getSprintById(params['sprintId']).then(sprint => {
        this.sprint = sprint
        
        if(Array.isArray(sprint)) {
          this.sprint = this.sprint.pop()
        }
      })
    });
  }
}
