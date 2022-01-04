import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from './login.service';
@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  readonly url = 'http://127.0.0.1:5000'

  constructor(private http: HttpClient, private loginService: LoginService) { }

  getAllPlanningBySprint(sprintId: any) {
    return this.http.get(`${this.url}/meetings/planning/${sprintId}`)
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

  createPlanning(planning: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      token: '?'
    });

    return this.http.post(`${this.url}/meetings/planning/add`, planning, {headers})
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

  updatePlanning(planning: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      token: '?'
    });

    return this.http.put(`${this.url}/meetings/planning/${planning.id}`, planning, {headers})
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

  addPlanningResult(planning: any, planningId: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      token: '?'
    });

    return this.http.post(`${this.url}/meetings/planning/${planningId}/results/add`, planning, {headers})
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

  updatePlanningResult(planning: any, planningId: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      token: '?'
    });

    console.log(planning)

    return this.http.put(`${this.url}/meetings/planning/results/${planningId}`, planning, {headers})
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

  deletePlanningResult(planning: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      token: '?'
    });

    return this.http.delete(`${this.url}/meetings/planning/results/delete/${planning.id}`, {headers})
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

  getAllRetrospectiveBySprint(sprintId: any) {
    return this.http.get(`${this.url}/meetings/retrospectives/${sprintId}`)
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

  createRetrospective(retrospective: any, sprintId: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      token: '?'
    });

    return this.http.post(`${this.url}/meetings/retrospectives/add`, retrospective, {headers})
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

  updateRetrospective(retrospective: any, retrospectiveId: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      token: '?'
    });

    console.log(retrospective)

    return this.http.put(`${this.url}/meetings/retrospectives/${retrospectiveId}`, retrospective, {headers})
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

  deleteRetrospective(retrospectiveId: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      token: '?'
    });

    return this.http.delete(`${this.url}/meetings/retrospectives/delete/${retrospectiveId}`, {headers})
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

  getAllDailiesBySprint(sprintId: any) {
    return this.http.get(`${this.url}/meetings/dailies/${sprintId}`)
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

  createDailies(dailies: any, sprintId: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      token: '?'
    });

    return this.http.post(`${this.url}/meetings/dailies/add`, dailies, {headers})
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

  updateDailies(dailies: any, dailiesId: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      token: '?'
    });

    console.log(dailies)

    return this.http.put(`${this.url}/meetings/dailies/${dailiesId}`, dailies, {headers})
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

  deleteDailies(dailiesId: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      token: '?'
    });

    return this.http.delete(`${this.url}/meetings/dailies/delete/${dailiesId}`, {headers})
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
