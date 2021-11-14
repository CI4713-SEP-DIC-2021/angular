import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  readonly url = 'http://127.0.0.1:5000'

  constructor(private http: HttpClient) { }

  login(username2: string, password2: string) {
    return this.http.post(`${this.url}/user/login`, {username: username2, password: password2})
    .toPromise()
    .then(
      (response) => {
        console.log(response)
        return response;
    },
      (error) => {
        console.log(error);
      }
    );
  }

}