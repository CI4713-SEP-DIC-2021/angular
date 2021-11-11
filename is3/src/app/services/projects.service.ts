import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  readonly url = 'http://127.0.0.1:5000'

  constructor(private http: HttpClient) { }

  getAllByUser(userId: number) {
    return this.http.get(`${this.url}/projects/getall/${userId}`)
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


  create(project: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      token: '?'
    });

    const proyectObject = {
      "description": 'asdasd',
      "user_id": 2,
      "status": "active"
    };

    return this.http.post(`${this.url}/projects/add`, proyectObject, {headers})
    .toPromise()
    .then(
      (response) => {
        console.log(response);
        return response;
      },
      (error) => {
        // Devuelvo null
        console.log(error);
      }
    );
  }

  edit(project: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      token: '?'
    });
    
    const proyectObject = {
      "description": project?.description,
      "user_id": project?.user_id,
    };
    
    return this.http.put(`${this.url}/projects/update/1`, proyectObject, {headers})
    .toPromise()
    .then(
      (response) => {
        console.log(response);
        return response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  pause(projectId: number) {
    return this.http.patch(`${this.url}/projects/pause/${projectId}`, {})
    .toPromise()
    .then(
      (response) => {
        console.log(response);
        return response;
      },
      (error) => {
        // Devuelvo null
        console.log(error);
      }
    );
  }

  reactivate(projectId: number) {
    return this.http.patch(`${this.url}/projects/reactivate/${projectId}`, {})
    .toPromise()
    .then(
      (response) => {
        console.log(response);
        return response;
      },
      (error) => {
        // Devuelvo null
        console.log(error);
      }
    );
  }

  delete(projectId: number) {
    return this.http.delete(`${this.url}/projects/delete/${projectId}`)
    .toPromise()
    .then(
      (response) => {
        console.log(response);
        return response;
      },
      (error) => {
        // Devuelvo null
        console.log(error);
      }
    );

  }
}
