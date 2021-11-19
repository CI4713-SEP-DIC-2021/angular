import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ProjectsService } from 'src/app/services/projects.service';
import { UserStoriesService } from 'src/app/services/user-stories.service';
import { AddStoryComponent } from './dialogs/add-story/add-story.component';
import { MatDialogConfig } from '@angular/material/dialog';
import { EditStoryComponent } from './dialogs/edit-story/edit-story.component';
import { DeleteStoryComponent } from './dialogs/delete-story/delete-story.component';

@Component({
  selector: 'app-product-backlog',
  templateUrl: './product-backlog.component.html',
  styleUrls: ['./product-backlog.component.scss']
})
export class ProductBacklogComponent implements OnInit {

  projectId: any;
  projectDescription: any;

  userStoriesList = [];
  projectsList = [];
  auxList:any = [];

  search_input!: string;    // input search

  constructor(
    private route: ActivatedRoute,
    private loginService: LoginService,
    private projectService: ProjectsService,
    private userStoriesService: UserStoriesService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.projectId = this.route.snapshot.paramMap.get('id');
    this.getProjectDescription();

    this.allStories();

    // Get the description of the project
    for (let i of this.projectsList) {
      var proyecto:any = i;
      if (proyecto.id == this.projectId) {
        this.projectDescription = proyecto.description;
        break;
      }
    }

  }

  displayedColumns: string[] = ['id', 'description', 'epica', 'priority', 'done', 'actions'];

  /**
   * search
   * Searches for a user story
   */
  search() {
    if (this.search_input != "") {
      this.userStoriesList = this.userStoriesList.filter((res: any) => {
        return res?.description.toLocaleLowerCase().match(this.search_input.toLocaleLowerCase());
      })
    } else {
      this.userStoriesList = this.userStoriesList;
      this.ngOnInit();
    }
  }

  /**
   * addStory
   * Opens a dialog to add a new user story
   */
  add(epic_id: number, child: boolean) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { projectId: this.projectId, child: child, epic_id: epic_id }
    console.log(dialogConfig.data);

    this.dialog.open(AddStoryComponent, dialogConfig).afterClosed()
    .subscribe(result => {
      this.ngOnInit()
    });
  }

  /**
   * edit
   * Opens a dialog to edit a user story
   * @param story Story to be edited
   */
  edit(story: any) {

    // Epic to string
    if (story.epic) {
      story.epic = "true"
    } else {
      story.epic = "false"
    }

    // Done to string
    if (story.done) {
      story.done = "true"
    } else {
      story.done = "false"
    }

    // Open dialog
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { story: story }

    this.dialog.open(EditStoryComponent, dialogConfig).afterClosed()
    .subscribe(result => {
      this.ngOnInit()
    });
  }

  /**
   * editEpic
   * Edits the 'epic' parameter of the user story
   * @param story Story to be edited
   */
  editEpic(story: any) {
    if (story.epic) {
      story.epic = "false"
    } else {
      story.epic = "true"
    }

    // Done to string
    if (story.done) {
      story.done = "true"
    } else {
      story.done = "false"
    }

    this.userStoriesService.editStory(story).then(response =>
      this.ngOnInit());
  }

  /**
   * editDone
   * Edits the 'done' parameter of the user story
   * @param story Story to be edited
   */
  editDone(story: any) {
    if (story.done) {
      story.done = "false"
    } else {
      story.done = "true"
    }

    // Epic to string
    if (story.epic) {
      story.epic = "true"
    } else {
      story.epic = "false"
    }

    this.userStoriesService.editStory(story).then(response =>
      this.ngOnInit());
  }

  /**
   * editPriority
   * Edits the 'priority' parameter of the user story
   * @param event Event (change)
   * @param story Story to be edited
   */
  editPriority(event: any, story: any) {
    story.priority = event.value;

    // Epic to string
    if (story.epic) {
      story.epic = "true"
    } else {
      story.epic = "false"
    }

    // Done to string
    if (story.done) {
      story.done = "true"
    } else {
      story.done = "false"
    }

    this.userStoriesService.editStory(story).then(response =>
      this.ngOnInit());
  }

  /**
   * delete
   * Opens the dialog to delete a user story
   * @param storyId ID of the user story to be deleted
   */
  delete(storyId: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { storyId: storyId }

    this.dialog.open(DeleteStoryComponent, dialogConfig).afterClosed()
    .subscribe(result => {
      this.ngOnInit()
    });
  }

  /**
   * getProjectDescription
   * Gets the description of the selected project
   */
  getProjectDescription() {
    let current_user_id = this.loginService.getCurrentID();

    this.projectService.getAllByUser(current_user_id).then((projects: any) => {
      var is_array = Array.isArray(projects);
      if (is_array) { 
        this.projectsList = projects;
        
        for (let i of this.projectsList) {
          var proyecto:any = i;
          if (proyecto.id == this.projectId) {
            this.projectDescription = proyecto.description;
            break;
          }
        }
      } 
      console.log(this.projectsList);
    });
  }


  /**
   * organizeStories
   * Organizes the user stories of the array of user stories. The child user stories should appear after their parent
   */
  async organizeStories() {
    // Organize the stories of the project with their parents
    for (let i of this.userStoriesList) {
      var story:any = i;
      if (story.parent_id == null) {
        this.auxList.push(story);

        // Buscamos los hijos de la historia
        await this.userStoriesService.getChildrenFromEpic(story.id).then((children: any) => {
          var response_array = Array.isArray(children);
          if (response_array) {
            for (let x of children) {
              var child: any = x;
              this.auxList.push(child);
            }
          }
        });
      }
    }

    this.userStoriesList = this.auxList;
    this.auxList = [];
  }


  /**
   * disableCheckbox
   * Returns true if the user story is an epic and already has children, to disable the checkbox
   * @param story_id ID of the user story
   * @returns A boolean that indicates if the 'epic' checkbox should be disabled
   */
  disableCheckbox(story_id: number) {
    let disable: boolean = false;

    for (let i of this.userStoriesList) {
      var story: any = i;
      if (story.parent_id == story_id) {
        disable = true;
        break;
      }
    }
    return disable;
  }

  allStories() {
    // Get all the stories of the project
    this.userStoriesService.getAllByProject(this.projectId).then((stories: any) => {
      var is_array = Array.isArray(stories);
      if (is_array) { 
        this.userStoriesList = stories;

        // Organize the stories:
        this.organizeStories();
      } 
      console.log(this.userStoriesList);
    });
  }
}
