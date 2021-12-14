import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login.service';
import { SprintsService } from 'src/app/services/sprints.service';

@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.scss']
})
export class AddTestComponent implements OnInit {

  testsForm!: FormGroup;
  storyId: any;

  current_user_id: any;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddTestComponent>,
    private loginService: LoginService,
    private sprintService: SprintsService,
    @Inject(MAT_DIALOG_DATA) data: any
  ) { this.storyId = data.storyId }

  ngOnInit(): void {
    this.current_user_id = this.loginService.getCurrentID();

    this.testsForm = this.formBuilder.group({
      description: ['', Validators.required]
    })
  }

  /**
   * addTests 
   * Adds a new acceptance test for the selected user story
   */
   addTest() {
    this.sprintService.addTest(this.storyId, this.testsForm.value.description, this.current_user_id);
    this.dialogRef.close();
  }

  /**
   * descriptionError
   * Checks if there's an error in the description input
   * @returns True if there's an error on the input of the description
   */
   displayError(formName: string) {
    if (this.testsForm.controls[formName].invalid && (this.testsForm.controls[formName].dirty || this.testsForm.controls[formName].touched)) {
      return true;
    } else {
      return false;
    }
  }



}
