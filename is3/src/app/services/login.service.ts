import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  readonly url = 'http://127.0.0.1:5000'

  constructor(private http: HttpClient) { }

  current_id: any;    // ID of current user 

  login(username2: string, password2: string) {
    return this.http.post(`${this.url}/user/login`, {username: username2, password: password2})
    .toPromise()
    .then(
      (response: any) => {
        console.log(response);
        this.current_id = response.userId;
        localStorage.setItem('currentUserID', JSON.stringify(this.current_id));
        return response;
    },
      (error) => {
        console.log(error);
      }
    );
  }

  /**
   * getCurrentID
   * Gets the ID of the current user
   * @returns The ID of the user that's currently logged in
   */
  getCurrentID() {
    this.current_id = JSON.parse(localStorage.getItem('currentUserID')!);
    return this.current_id;
  }

}