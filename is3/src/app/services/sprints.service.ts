import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SprintsService {

  readonly url = 'http://127.0.0.1:5000'

  constructor(private http: HttpClient) { }

    /**
   * getSprintByProject
   * Gets the sprints for a specific project id
   * @param projectId ID of the project to get the sprint
   * @returns response of the operation
   */
    getSprintByProject(projectId: any) {
      return this.http.get(`${this.url}/sprint/getbyproject/${projectId}`)
      .toPromise()
      .then(
        (response) => {
          console.log(response)
          return response;
      },
        (error) => {
          console.log(error);
          return [];
        }
      );
    }

  /**
   * getCriteriaByStory
   * Gets the acceptance criteria of a given user story
   * @param storyId ID of the user story to get the criteria from
   * @returns response of the operation
   */
  getCriteriaByStory(storyId: any) {
    return this.http.get(`${this.url}/criteria/getbystory/${storyId}`)
    .toPromise()
    .then(
      (response) => {
        console.log(response)
        return response;
    },
      (error) => {
        console.log(error);
        return [];
      }
    );
  }

  /**
    * addCriteria
    * Adds a new criteria for a given user story
    */
  addCriteria(storyId: any, criteria: string, userId: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      token: '?'
    });

    let new_criteria = {description: criteria, story_id: storyId, user_id: userId}

    return this.http.post(`${this.url}/criteria/add`, new_criteria, {headers})
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


  /**
   * updateCriteria
   * Updates a given acceptance criteria
   * @param criteriaId ID of the acceptance criteria to be updated
   * @param criteriaDescription Description of the acceptance criteria to be updated
   * @param criteriaApproved State of the acceptance criteria to be updated
   * @returns response of the operation
   */
  updateCriteria(criteriaId: any, criteriaDescription: any, criteriaApproved: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      token: '?'
    });

    let new_criteria = {description: criteriaDescription, approved: criteriaApproved}
    
    return this.http.put(`${this.url}/criteria/update/${criteriaId}`, new_criteria, {headers})
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


  /**
   * Deletes an acceptance criteria
   * @param criteriaId ID of the acceptance criteria to be deleted
   * @returns 
   */
  deleteCriteria(criteriaId: any) {
    return this.http.delete(`${this.url}/criteria/delete/${criteriaId}`)
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


  // Acceptance Tests

  /**
   * getTestsByStory
   * Gets the acceptance tests of a given user story
   * @param storyId ID of the user story to get the acceptance tests from
   * @returns response of the operation
   */
  getTestsByStory(storyId: any) {
    return this.http.get(`${this.url}/tests/getbystory/${storyId}`)
    .toPromise()
    .then(
      (response) => {
        console.log(response)
        return response;
    },
      (error) => {
        console.log(error);
        return [];
      }
    );
  }


  /**
   * addTest
   * Adds a new acceptance test for a given user story
   * @param storyId ID of the user story for the acceptance test
   * @param test Description of the new acceptance test
   * @param userId ID of the user that's creating the new acceptance test
   * @returns response of the operation
   */
  addTest(storyId: any, test: string, userId: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      token: '?'
    });

    let new_test = {description: test, story_id: storyId, user_id: userId}

    return this.http.post(`${this.url}/tests/add`, new_test, {headers})
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


  /**
   * updateTest
   * Updates the information of an acceptance test
   * @param testId ID of the acceptance test to be updated
   * @param testDescription Updated description for the acceptance test
   * @param testApproved Updated 'approved status' for the acceptance test
   * @returns response of the operation
   */
  updateTest(testId: any, testDescription: any, testApproved: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      token: '?'
    });

    let new_test = {description: testDescription, approved: testApproved}
    
    return this.http.put(`${this.url}/test/update/${testId}`, new_test, {headers})
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


  /**
   * deleteTest
   * Deletes an acceptance test
   * @param testId ID of the acceptance test to be deleted
   * @returns 
   */
  deleteTest(testId: any) {
    return this.http.delete(`${this.url}/tests/delete/${testId}`)
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
