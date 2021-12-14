import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

// Components
import { AddProjectComponent } from './dialogs/add-project/add-project.component';
import { DeleteProjectComponent } from './dialogs/delete-project/delete-project.component';
import { MatTableDataSource } from '@angular/material/table';

// Project model
import { Project } from 'src/app/models/project';
import { EditProjectComponent } from './dialogs/edit-project/edit-project.component';
import { ProjectsService } from 'src/app/services/projects.service';
import { LoginService } from 'src/app/services/login.service';

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

  current_user_id: any;

  constructor(
    public dialog: MatDialog,
    private projectService: ProjectsService,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.current_user_id = this.loginService.getCurrentID();

    //this.projectService.getAllByUser(this.current_user_id).then((projects: any) => {
    this.projectService.getAllProjects().then((projects: any) => {
      var is_array = Array.isArray(projects);
      if (is_array) { 
        this.projectsList = projects;
      } 
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
    this.ngOnInit();
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
    this.dialog.open(AddProjectComponent).afterClosed()
    .subscribe(result => {
      this.ngOnInit()
    });
  }

  /**
   * editProject
   * Opens dialog to edit the information of a project
   * @param project Project element to be edited
   */
  editProject(project: Project) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { project: project }
    
    this.dialog.open(EditProjectComponent, dialogConfig).afterClosed()
    .subscribe(result => {
      this.ngOnInit()
    });
  }

  /**
   * deleteProject
   * Opens confirmation dialog to delete a project
   * @param project Project element
   */
  deleteProject(project: Project) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { id: project.id }

    this.dialog.open(DeleteProjectComponent, dialogConfig).afterClosed()
    .subscribe(result => {
      this.ngOnInit()
    });

  }

  getProjectList() {
    this.current_user_id = this.loginService.getCurrentID();
    this.projectService.getAllByUser(this.current_user_id).then((projects: any) => {
      if (projects) { 
        this.projectsList = projects;
      }
      console.log(this.projectsList);
    });
  }

  projectsDocuments(){
    this.router.navigate(["/projects-documents"])
  }
}
