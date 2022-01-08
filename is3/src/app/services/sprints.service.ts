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

     getSprintById(sprintId: any) {
      return this.http.get(`${this.url}/sprint/${sprintId}`)
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


    getStoriesBySprint(sprintId: any) {
      return this.http.get(`${this.url}/sprint/getstories/${sprintId}`)
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
  

  // SPRINT

  /**
   * getSprint
   * Gets the information of a given sprint
   * @param sprintId ID of the sprint
   * @returns response of the operation
   */
  getSprint(sprintId: any) {
    return this.http.get(`${this.url}/sprint/${sprintId}`)
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
   * addSprint
   * Creates a new sprint
   */
  addSprint(description: any, project_id: number, end_date: any, user_id: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      token: '?'
    });

    let sprint = {description: description, project_id: project_id, end_date: end_date, user_id: user_id}

    return this.http.post(`${this.url}/sprint/add`, sprint, {headers})
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


  // TASKS

  /**
   * getTasksBySprint
   * Gets the tasks associated with a given sprint
   * @param sprintId ID of the user story associated with the tasks
   * @returns response of the operation
   */
  getTasksBySprint(sprintId: any) {
    return this.http.get(`${this.url}/tasks/getbysprint/${sprintId}`)
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
   * getTasksByStory
   * Gets the tasks associated with a given user story
   * @param storyId ID of the user story associated with the tasks
   * @returns response of the operation
   */
  getTasksByStory(storyId: any) {
    return this.http.get(`${this.url}/tasks/getbystory/${storyId}`)
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
   * addTask
   * Adds a new task to a user story
   */
  addTask(taskForm: any, story_id: number, sprint_id: number, user_id: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      token: '?'
    });

    let users = [];
    if (taskForm.user1 === taskForm.user2) {
      users = [taskForm.user1]
    } else if (!taskForm.user1) {
      users = [taskForm.user2]
    } else if (!taskForm.user2) {
      users = [taskForm.user1]
    } else {
      users = [taskForm.user1, taskForm.user2]
    }

    let task = {description: taskForm.description, task_type: taskForm.task_type, task_status: taskForm.task_status, users: users,
                task_class: taskForm.task_class, functions: taskForm.functions, story_id: story_id, sprint_id: sprint_id, user_id: user_id}

    return this.http.post(`${this.url}/tasks/add`, task, {headers})
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
   * deleteTask
   * Deletes a given task
   * @param taskId ID of the task to be deleted
   * @returns response of the operation
   */
  deleteTask(taskId: any) {
    return this.http.delete(`${this.url}/tasks/delete/${taskId}`)
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
   * updateTask
   * Updates the information of a given task
   */
  updateTask(taskForm: any, taskId: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      token: '?'
    });

    let users = [];
    if (taskForm.user1 === taskForm.user2) {
      users = [taskForm.user1]
    } else if (!taskForm.user1) {
      users = [taskForm.user2]
    } else if (!taskForm.user2) {
      users = [taskForm.user1]
    } else {
      users = [taskForm.user1, taskForm.user2]
    }

    let task = {description: taskForm.description, task_type: taskForm.task_type, task_status: taskForm.task_status, users: users,
      task_class: taskForm.task_class, functions: taskForm.functions}
    
    return this.http.put(`${this.url}/tasks/update/${taskId}`, task, {headers})
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
 

}
