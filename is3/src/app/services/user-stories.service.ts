import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserStoriesService {

  readonly url = 'http://127.0.0.1:5000'

  constructor(private http: HttpClient) { }

  /**
   * getAllByProject
   * Gets all the user stories of a given project
   * @param projectId Id of the project
   * @returns All the user stories of the project
   */
  getAllByProject(projectId: number) {
    return this.http.get(`${this.url}/stories/getall/${projectId}`)
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
   * addStory
   * Inserts a new user story in the database
   * @param story New story introduced in the form by the user
   * @param project_id Project ID for the user story
   * @returns The response of the operation
   */
  addStory(story: any, project_id: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      token: '?'
    });

    story.project_id = project_id;

    return this.http.post(`${this.url}/stories/add`, story, {headers})
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
   * editStory
   * Edits the information of a user story
   * @param story User story to be edited
   * @returns The response of the operation
   */
  editStory(story: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      token: '?'
    });
    
    return this.http.put(`${this.url}/stories/update/${story.id}`, story, {headers})
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
   * addToEpic
   * Adds a user story to an epic
   * @param story_id Id of the user story to be added to an epic
   * @param epic_id Id of the epic
   * @returns The response of the operation
   */
  addToEpic(story_id: number, epic_id: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      token: '?'
    });
    
    return this.http.put(`${this.url}/stories/add_to_epic/${story_id}/${epic_id}`, {headers})
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
   * getChildrenFromEpic
   * Gets all of the children of the epic (user stories)
   * @param epicId ID of the epic
   * @returns Response of the operation
   */ 
  getChildrenFromEpic(epicId: number) {
    return this.http.get(`${this.url}/stories/get_children/${epicId}`)
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
   * delete
   * Deletes a user story
   * @param storyId ID of the user story to be deleted
   * @returns Response of the operation
   */
  delete(storyId: number) {
    return this.http.delete(`${this.url}/stories/delete/${storyId}`)
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
