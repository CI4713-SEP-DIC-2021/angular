import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { SprintsService } from 'src/app/services/sprints.service';
import { UserProfileService } from 'src/app/services/user-profile.service';
import { UserStoriesService } from 'src/app/services/user-stories.service';
import { AddCriteriaComponent } from './dialogs/add-criteria/add-criteria.component';
import { AddTestComponent } from './dialogs/add-test/add-test.component';
import { DeleteCriteriaComponent } from './dialogs/delete-criteria/delete-criteria.component';
import { DeleteTestComponent } from './dialogs/delete-test/delete-test.component';
import { EditCriteriaComponent } from './dialogs/edit-criteria/edit-criteria.component';
import { EditTestComponent } from './dialogs/edit-test/edit-test.component';

@Component({
  selector: 'app-sprint-backlog',
  templateUrl: './sprint-backlog.component.html',
  styleUrls: ['./sprint-backlog.component.scss']
})
export class SprintBacklogComponent implements OnInit {

  storyId: any;
  storiesList:any[] = [];

  criteriaList:any[] = [];
  testsList:any[] = [];

  auxList:any = [];

  auxListCriteria: any = [];
  auxListTests: any = [];

  current_user_id: any;
  current_user_role: any;
  token: any;

  constructor(
    private route: ActivatedRoute,
    private storiesService: UserStoriesService,
    private sprintService: SprintsService,
    private loginService: LoginService,
    private userService: UserProfileService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.storyId = this.route.snapshot.paramMap.get('id');

    // Get current user ID and role
    this.current_user_id = this.loginService.getCurrentID();
    this.token = localStorage.getItem('acces_token');
    
    this.userService.getAll(this.token).then((users: any) => {
      if (users) this.current_user_role = users.current_user.role;
    })

    // Get current user story
    this.storiesService.searchStoryByID(this.storyId).then((story: any) => {
      this.storiesList = story;

      // Get children
      this.getChildren();

      }
    );

  }

  displayedColumnsStories: string[] = ['id', 'description', 'epica', 'priority', 'add'];
  displayedColumnsCriteria: string[] = ['id', 'description', 'approved', 'actions'];
  displayedColumnsTests: string[] = ['id', 'description', 'approved', 'actions'];


  /**
   * getChildren
   * Gets the children of the current user story
   */
  async getChildren() {
    await this.storiesService.getChildrenFromEpic(this.storyId).then((children: any) => {
      var response_array = Array.isArray(children);
      this.auxList.push(this.storiesList[0]);

      if (response_array) {
        for (let x of children) {
          var child: any = x;
          this.auxList.push(child);
        }
      }
    });

    this.storiesList = this.auxList;
    this.auxList = [];

    this.getCriteriaList();
    this.getTestsList();
  }

  /**
   * getCriteriaList
   * Gets the list of the acceptance criteria for the user stories
   */
  async getCriteriaList() {
    for (let i of this.storiesList) {
      let story = i;

      await this.sprintService.getCriteriaByStory(story.id).then((criteria: any) => {
        var response_array = Array.isArray(criteria);

        if (response_array) {
          for (let x of criteria) {
            let element = x;
            this.auxListCriteria.push(element);
          }
        }
      })
    }

    this.criteriaList = this.auxListCriteria;
    this.auxListCriteria = [];
  }

  /**
   * getTestsList
   * Gets the list of the acceptance tests for the user stories
   */
  async getTestsList() {
    for (let i of this.storiesList) {
      let story = i;

      await this.sprintService.getTestsByStory(story.id).then((tests: any) => {
        var response_array = Array.isArray(tests);

        if (response_array) {
          for (let x of tests) {
            let element = x;
            this.auxListTests.push(element);
          }
        }
      })
    }
    this.testsList = this.auxListTests;
    this.auxListTests = [];
  }


  /**
   * addCriteriaDialog
   * Opens a dialog to add a new criteria
   * @param story_id ID of the user story to add a new criteria to
   */
  addCriteriaDialog(story_id: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { storyId: story_id }

    this.dialog.open(AddCriteriaComponent, dialogConfig).afterClosed()
    .subscribe(result => {
      this.ngOnInit()
    }); 
  }

  /**
   * addTestDialog
   * Opens a dialog to add a new acceptance test
   * @param storyId ID of the user story to add a new acceptance test to
   */
  addTestDialog(storyId: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { storyId: storyId }

    this.dialog.open(AddTestComponent, dialogConfig).afterClosed()
    .subscribe(result => {
      this.ngOnInit()
    });
  }

  /**
   * changeApprovedStatus
   * Changes the status of the given acceptance criteria
   * @param criteria Acceptance criteria to be updated
   */
  changeApprovedStatus(criteria: any) {
    let approved_status: boolean;
    if (criteria.approved) {
      approved_status = false;
    } else {
      approved_status = true;
    }
    
    this.sprintService.updateCriteria(criteria.id, criteria.description, approved_status).then((response: any) => {
      this.ngOnInit();
    });
  }

  /**
   * changeStatusTests
   * Changes the status of the given acceptance test
   * @param test Acceptance test to be updated
   */
  changeStatusTests(test: any) {
    let approved_status: boolean;
    if (test.approved) {
      approved_status = false;
    } else {
      approved_status = true;
    }

    this.sprintService.updateTest(test.id, test.description, approved_status).then((response: any) => {
      this.ngOnInit();
    });
  }

  /**
   * editCriteriaDialog
   * Opens a dialog to edit the information of a given acceptance criteria
   * @param criteria Criteria to be edited
   */
  editCriteriaDialog(criteria: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { criteria: criteria }

    this.dialog.open(EditCriteriaComponent, dialogConfig).afterClosed()
    .subscribe(result => {
      this.ngOnInit()
    });
  }

  /**
   * editTestDialog
   * Opens a dialog to edit the information of a given acceptance test
   * @param test Test to be edited
   */
  editTestDialog(test: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { test: test }

    this.dialog.open(EditTestComponent, dialogConfig).afterClosed()
    .subscribe(result => {
      this.ngOnInit()
    });
  }

  /**
   * deleteCriteriaDialog
   * Opens a dialog to delete the selected criteria
   * @param criteriaId ID of the acceptance criteria to be removed
   */
  deleteCriteriaDialog(criteriaId: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { criteriaId: criteriaId }

    this.dialog.open(DeleteCriteriaComponent, dialogConfig).afterClosed()
    .subscribe(result => {
      this.ngOnInit()
    });
  }

  /**
   * deleteTestDialog
   * Opens a dialog to delete the selected test
   * @param testId ID of the acceptance test to be removed
   */
  deleteTestDialog(testId: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { testId: testId }

    this.dialog.open(DeleteTestComponent, dialogConfig).afterClosed()
    .subscribe(result => {
      this.ngOnInit()
    });
  }

}
