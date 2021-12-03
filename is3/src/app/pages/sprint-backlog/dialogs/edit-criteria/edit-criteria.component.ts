import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SprintsService } from 'src/app/services/sprints.service';

@Component({
  selector: 'app-edit-criteria',
  templateUrl: './edit-criteria.component.html',
  styleUrls: ['./edit-criteria.component.scss']
})
export class EditCriteriaComponent implements OnInit {

  criteriaForm!: FormGroup;
  criteria: any; 

  constructor(
    private formBuilder: FormBuilder,
    private sprintService: SprintsService,
    private dialogRef: MatDialogRef<EditCriteriaComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) { this.criteria = data.criteria }

  ngOnInit(): void {
    this.criteriaForm = this.formBuilder.group({
      description: [this.criteria.description, Validators.required]
    });
  }

  /**
   * editCriteria
   * Edits the description of the given acceptance criteria
   */
  editCriteria() {
    this.sprintService.updateCriteria(this.criteria.id, this.criteriaForm.value.description, this.criteria.approved);
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
