import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  readonly url = 'http://127.0.0.1:5000'

  constructor(private http: HttpClient) { }

  getAll(token:string) {
    return this.http.get(`${this.url}/user/profiles`, {headers: {'Authorization': `Bearer ${token}`}})
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

  register(username2: string, first_name2: string, last_name2: string, role2: string, password2: string) {
    return this.http.post(`${this.url}/user/register`, {username: username2, first_name: first_name2, last_name: last_name2, role: role2, password: password2})
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

  edit(token: string, username2: string, new_role2: string ){
    return this.http.post(`${this.url}/user/edit`, {username: username2, new_role: new_role2}, {headers: {'Authorization': `Bearer ${token}`}})
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

  getProjects(id: string){
    return this.http.get(`${this.url}/projects/getall/${id}`)
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

  delete(token: string, username2: string ){
    return this.http.post(`${this.url}/user/delete`, {username: username2}, {headers: {'Authorization': `Bearer ${token}`}})
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
