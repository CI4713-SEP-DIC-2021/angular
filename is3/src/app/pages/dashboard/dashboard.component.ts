import { Component, OnInit, } from '@angular/core';
import { Location } from '@angular/common';
import 'rxjs/add/operator/filter';
import { Router } from '@angular/router';
import PerfectScrollbar from 'perfect-scrollbar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {}
}
