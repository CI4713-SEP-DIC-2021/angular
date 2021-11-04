import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {

  projectsForm!: FormGroup;
  project!: Project;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<EditProjectComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
      this.project = data.project
    }

  ngOnInit(): void {
    this.projectsForm = this.formBuilder.group({
      id: this.project.id,
      description: [this.project.description, Validators.required],
      status: this.project.status
    });
  }

  /**
   * editProject
   * Edits the information of the selected project
   */
  editProject() {
    console.log(this.project);
    this.closeDialog();
  }

  /**
   * closeDialog
   * Closes the 'edit project' dialog
   */
  closeDialog() {
    this.dialogRef.close();
  }

  /**
   * descriptionError
   * Checks if there's an error in the description input
   * @returns True if there's an error on the input of the description
   */
   descriptionError() {
    if (this.projectsForm.controls['description'].invalid && (this.projectsForm.controls['description'].dirty || this.projectsForm.controls['description'].touched)) {
      return true;
    } else {
      return false;
    }
  }

}
