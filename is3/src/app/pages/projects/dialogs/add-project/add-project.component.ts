import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  projectsForm = this.formBuilder.group({
    description: ['', Validators.required],
    status: ['', Validators.required]
  })

  /**
   * addProject
   * Adds a new project to the database
   */
  addProject() {
    // Adds a new project
    console.log(this.projectsForm.value);
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

  /**
   * statusError
   * Checks if there's an error in the status input
   * @returns True if there's an error on the input of the status
   */
   statusError() {
    if (this.projectsForm.controls['status'].invalid && (this.projectsForm.controls['status'].dirty || this.projectsForm.controls['status'].touched)) {
      return true;
    } else {
      return false;
    }
  }

}
