import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, first, retry } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class GenericService {
  constructor(private http: HttpClient) { }

  getData() {
    return  this.http.get('https://ci4713-sep-dic-2021-flask.herokuapp.com/getall').pipe(
      first(), map(data => {
        return data;
      })
    );
  }
}