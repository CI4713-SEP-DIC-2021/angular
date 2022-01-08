import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SprintsService } from 'src/app/services/sprints.service';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {

  tasksForm!: FormGroup;
  task: any;

  // Users
  token!: any;
  usersList = [] as any;

  constructor(
    private userProfileService: UserProfileService,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<EditTaskComponent>,
    private sprintService: SprintsService,
    @Inject(MAT_DIALOG_DATA) data: any
  ) { this.task = data.task }

  ngOnInit(): void {
    // Get all users 
    this.token = localStorage.getItem('acces_token');
    this.userProfileService.getAll(this.token).then((users: any) => {
      if (users) { 
        this.usersList = users.users;
      }
    });

    // Get type of the task
    let task_type = "";
    if (this.task.task_type === "Desarrollo") task_type = "develop";
    if (this.task.task_type === "Diseño") task_type = "design";
    if (this.task.task_type === "Reparar") task_type = "fix";
    if (this.task.task_type === "Refactor") task_type = "refact";

    // Get status of the task
    let task_status = "";
    if (this.task.task_status === "Nueva") task_status = "new";
    if (this.task.task_status === "Iniciada") task_status = "init";
    if (this.task.task_status === "Lista para Pruebas") task_status = "to_test";
    if (this.task.task_status === "Culminada") task_status = "ended";


    // Get class of the task
    let task_class = "";
    if (this.task.task_class === "Sencilla") task_class = "easy";
    if (this.task.task_class === "Media") task_class = "middle";
    if (this.task.task_class === "Compleja") task_class = "hard";

    // Get second user assigned to the task
    let second_user = "";
    if (this.task.users.length > 1) second_user = this.task.users[1].id;

    // Task form
    this.tasksForm = this.formBuilder.group({
      description: [this.task.description],
      task_type: [task_type],
      task_status: [task_status],
      user1: [this.task.users[0].id],
      user2: [second_user],
      task_class: [task_class],
      functions: [this.task.functions]
    });
  }

  editTask() {
    // Edits the task
    this.sprintService.updateTask(this.tasksForm.value, this.task.id);
    this.dialogRef.close();
  }

}
