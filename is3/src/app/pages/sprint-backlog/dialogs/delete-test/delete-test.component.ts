import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SprintsService } from 'src/app/services/sprints.service';

@Component({
  selector: 'app-delete-test',
  templateUrl: './delete-test.component.html',
  styleUrls: ['./delete-test.component.scss']
})
export class DeleteTestComponent implements OnInit {

  testId: any;

  constructor(
    private dialogRef: MatDialogRef<DeleteTestComponent>,
    private sprintService: SprintsService,
    @Inject(MAT_DIALOG_DATA) data: any
  ) { this.testId = data.testId }

  ngOnInit(): void {
  }

  /**
   * closeDialog
   * Closes the 'delete acceptance test' dialog
   */
   closeDialog() {
    this.dialogRef.close();
  }

  /**
   * deleteTest
   * Deletes the given acceptance test
   */
  deleteTest() {
    this.sprintService.deleteTest(this.testId);
    this.closeDialog();
  }

}
