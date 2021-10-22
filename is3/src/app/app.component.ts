import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, first, map } from 'rxjs/operators';
import { GenericService } from './generic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data: any;

  constructor(
    public http: HttpClient,
    public genericService: GenericService) {}

  ngOnInit(): void {
    this.genericService.getData().subscribe(data => {
      this.data = data;
      console.log(data);
    });
  }
}
