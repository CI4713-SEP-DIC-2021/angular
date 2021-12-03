import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login.service';
import { SprintsService } from 'src/app/services/sprints.service';

@Component({
  selector: 'app-add-criteria',
  templateUrl: './add-criteria.component.html',
  styleUrls: ['./add-criteria.component.scss']
})
export class AddCriteriaComponent implements OnInit { 

  criteriaForm!: FormGroup;
  storyId: any;

  current_user_id: any;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddCriteriaComponent>,
    private loginService: LoginService,
    private sprintService: SprintsService,
    @Inject(MAT_DIALOG_DATA) data: any
  ) { this.storyId = data.storyId }

  ngOnInit(): void {
    this.current_user_id = this.loginService.getCurrentID();

    this.criteriaForm = this.formBuilder.group({
      description: ['', Validators.required]
    })
  }

  /**
   * addCriteria 
   * Adds a new criteria for the selected user story
   */
  addCriteria() {
    this.sprintService.addCriteria(this.storyId, this.criteriaForm.value.description, this.current_user_id);
    this.dialogRef.close();
  }


  /**
   * descriptionError
   * Checks if there's an error in the description input
   * @returns True if there's an error on the input of the description
   */
   displayError(formName: string) {
    if (this.criteriaForm.controls[formName].invalid && (this.criteriaForm.controls[formName].dirty || this.criteriaForm.controls[formName].touched)) {
      return true;
    } else {
      return false;
    }
  }

}
