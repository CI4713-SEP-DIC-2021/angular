import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {
  displayedColumns: string[] = ['id', 'theme', 'hu', 'activity', 'assigned', 'edit', 'delete'];

  constructor() { }

  ngOnInit(): void {
  }

}
