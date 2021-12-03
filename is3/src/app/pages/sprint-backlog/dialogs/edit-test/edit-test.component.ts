import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SprintsService } from 'src/app/services/sprints.service';

@Component({
  selector: 'app-edit-test',
  templateUrl: './edit-test.component.html',
  styleUrls: ['./edit-test.component.scss']
})
export class EditTestComponent implements OnInit {

  testsForm!: FormGroup;
  test: any; 

  constructor(
    private formBuilder: FormBuilder,
    private sprintService: SprintsService,
    private dialogRef: MatDialogRef<EditTestComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) { this.test = data.test }

  ngOnInit(): void {
    this.testsForm = this.formBuilder.group({
      description: [this.test.description, Validators.required]
    });
  }

  /**
   * editTest
   * Edits the description of the given acceptance test
   */
   editTest() {
    this.sprintService.updateTest(this.test.id, this.testsForm.value.description, this.test.approved);
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
