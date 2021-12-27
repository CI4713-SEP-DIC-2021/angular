import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsDocumentsService {

  readonly url = 'http://127.0.0.1:5000'

  constructor(private http: HttpClient) { }

  addId(name2: string, dev_met2: string, version2: number, project_id2: number, metaphor2: string) {
    console.log("soy los datos")
    console.log(name2)
    console.log(dev_met2)
    return this.http.post(`${this.url}/docs/add`, {name: name2, dev_met: dev_met2, version: version2, project_id: project_id2, metaphor: metaphor2})
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

  addCopyRight(doc_id2: number, content2: string) {
    return this.http.post(`${this.url}/docs/add/copyright`, {doc_id: doc_id2, content: content2})
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

  addIntro(doc_id2: number, content2: string) {
    return this.http.post(`${this.url}/docs/add/intro`, {doc_id: doc_id2, content: content2})
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

  addPurpose(doc_id2: number, content2: string) {
    return this.http.post(`${this.url}/docs/add/purpose`, {doc_id: doc_id2, content: content2})
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

  addMotivation(doc_id2: number, content2: string) {
    return this.http.post(`${this.url}/docs/add/motivation`, {doc_id: doc_id2, content: content2})
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

  addStatus(doc_id2: number, content2: string) {
    return this.http.post(`${this.url}/docs/add/status`, {doc_id: doc_id2, content: content2})
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

  addScope(doc_id2: number, content2: string) {
    return this.http.post(`${this.url}/docs/add/scope`, {doc_id: doc_id2, content: content2})
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

  addFoundation(doc_id2: number, content2: string) {
    return this.http.post(`${this.url}/docs/add/foundation`, {doc_id: doc_id2, content: content2})
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

  addValues(doc_id2: number, content2: string) {
    return this.http.post(`${this.url}/docs/add/values`, {doc_id: doc_id2, content: content2})
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

  addArq(doc_id2: number, path2: string) {
    return this.http.post(`${this.url}/docs/add/arq`, {doc_id: doc_id2, path: path2})
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

  addDiag(doc_id2: number, path2: string) {
    return this.http.post(`${this.url}/docs/add/diag`, {doc_id: doc_id2, path: path2})
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

  addHistory(doc_id2: number, date2: string, version2: string, description2: string, teams2: string) {
    return this.http.post(`${this.url}/docs/add/history`, {doc_id: doc_id2, date: date2, version: version2, description: description2, teams: teams2})
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

  editHistory(id2: number, date2: string, version2: string, description2: string, teams2: string) {
    return this.http.post(`${this.url}/docs/edit/history`, {id: id2, date: date2, version: version2, description: description2, teams: teams2})
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

  deleteHistory(id: number){
    return this.http.delete(`${this.url}/docs/delete/history/${id}`)
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

  //get all
  getAllDocs() {
    return this.http.get(`${this.url}/docs/getall`)
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

  getAllCopyRight() {
    return this.http.get(`${this.url}/docs/getall/copyright`)
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

  getAllIntro() {
    return this.http.get(`${this.url}/docs/getall/intro`)
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

  getAllPurpose() {
    return this.http.get(`${this.url}/docs/getall/purpose`)
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

  getAllMotivation() {
    return this.http.get(`${this.url}/docs/getall/motivation`)
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

  getAllStatus() {
    return this.http.get(`${this.url}/docs/getall/status`)
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

  getAllScope() {
    return this.http.get(`${this.url}/docs/getall/scope`)
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

  getAllFoundation() {
    return this.http.get(`${this.url}/docs/getall/foundation`)
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

  getAllValues() {
    return this.http.get(`${this.url}/docs/getall/values`)
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

  getAllArq() {
    return this.http.get(`${this.url}/docs/getall/arq`)
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

  getAllDiag() {
    return this.http.get(`${this.url}/docs/getall/diag`)
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

  getAllHistory() {
    return this.http.get(`${this.url}/docs/getall/history`)
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
