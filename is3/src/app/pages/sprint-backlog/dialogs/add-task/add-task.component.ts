import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login.service';
import { SprintsService } from 'src/app/services/sprints.service';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  tasksForm!: FormGroup;
  storyId: any;

  // Users
  current_user_id: any;
  token!: any;
  usersList = [] as any;

  constructor(
    private userProfileService: UserProfileService,
    private loginService: LoginService,
    private sprintService: SprintsService,
    private dialogRef: MatDialogRef<AddTaskComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data: any
  ) { this.storyId = data.storyId }

  ngOnInit(): void {
    // Get all users 
    this.token = localStorage.getItem('acces_token');
    this.userProfileService.getAll(this.token).then((users: any) => {
      if (users) { 
        this.usersList = users.users;
      }
    });

    // Current user
    this.current_user_id = this.loginService.getCurrentID();

    // Tasks form
    this.tasksForm = this.formBuilder.group({
      description: [''],
      task_type: [''],
      task_status: [''],
      user1: [''],
      user2: [''],
      task_class: [''],
      functions: ['']
    })
  }


  /**
   * addTask
   * Adds a new task to a user story
   */
  async addTask() {
    // Create sprint if there isn't one
    await this.sprintService.getSprint(1).then((sprint: any) => {
      var response_array = Array.isArray(sprint);
      if (!response_array) {
        var response = this.sprintService.addSprint("Sprint 1", 1, "20/1/2022", 1);
      }
    })

    // Adds a new task
    this.sprintService.addTask(this.tasksForm.value, this.storyId, 1, this.current_user_id);
    this.dialogRef.close();
  }

}
