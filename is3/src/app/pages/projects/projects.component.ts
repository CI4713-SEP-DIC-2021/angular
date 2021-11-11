import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

// Components
import { AddProjectComponent } from './dialogs/add-project/add-project.component';
import { DeleteProjectComponent } from './dialogs/delete-project/delete-project.component';
import { MatTableDataSource } from '@angular/material/table';

// Project model
import { Project } from 'src/app/models/project';
import { EditProjectComponent } from './dialogs/edit-project/edit-project.component';
import { ProjectsService } from 'src/app/services/projects.service';

const PROJECT_DATA: Project[] = [
  {id: 1, description: 'Proyecto 1', status: 'active'},
  {id: 2, description: 'Proyecto 2', status: 'paused'},
  {id: 3, description: 'Proyecto 3', status: 'active'},
  {id: 4, description: 'Proyecto 4', status: 'active'},
];


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  search!: string;    // input search
  projectsList = [];

  constructor(
    public dialog: MatDialog,
    private projectService: ProjectsService) { }

  ngOnInit(): void {
    this.projectService.getAllByUser(1).then((projects: any) => {
      if (projects) { 
        this.projectsList = projects;
      }
      console.log(this.projectsList);
    });
  }

  displayedColumns: string[] = ['id', 'description', 'actions'];

  /**
   * changeStatus
   * Changes the status of the project (active, paused)
   * @param project Project element
   */
  changeStatus(project: Project) {
    if(project.status === 'active') {
      this.projectService.pause(project?.id);
    } else {
      this.projectService.reactivate(project?.id);
    }
    this.getProjectList();
  }

  /**
   * searchProject
   * Searches projects by description
   */
  searchProject() {
    if (this.search != "") {
      this.projectsList = this.projectsList.filter((res: any) => {
        return res?.description.toLocaleLowerCase().match(this.search.toLocaleLowerCase());
      })
    } else {
      this.projectsList = this.projectsList;
      this.getProjectList();
    }
  }

  /**
   * addProject
   * Opens dialog to add a new project
   */
  addProject() {
    this.dialog.open(AddProjectComponent);
  }

  /**
   * editProject
   * Opens dialog to edit the information of a project
   * @param project Project element to be edited
   */
  editProject(project: Project) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { project: project }
    this.dialog.open(EditProjectComponent, dialogConfig);
  }

  /**
   * deleteProject
   * Opens confirmation dialog to delete a project
   * @param project Project element
   */
  deleteProject(project: Project) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { id: project.id }
    this.dialog.open(DeleteProjectComponent, dialogConfig);
    
  }

  getProjectList(userId = 1) {
    this.projectService.getAllByUser(userId).then((projects: any) => {
      if (projects) { 
        this.projectsList = projects;
      }
      console.log(this.projectsList);
    });
  }
}
