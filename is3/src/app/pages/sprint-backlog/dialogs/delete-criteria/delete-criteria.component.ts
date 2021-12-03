import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SprintsService } from 'src/app/services/sprints.service';

@Component({
  selector: 'app-delete-criteria',
  templateUrl: './delete-criteria.component.html',
  styleUrls: ['./delete-criteria.component.scss']
})
export class DeleteCriteriaComponent implements OnInit {

  criteriaId: any; 

  constructor(
    private dialogRef: MatDialogRef<DeleteCriteriaComponent>,
    private sprintService: SprintsService,
    @Inject(MAT_DIALOG_DATA) data: any
  ) { this.criteriaId = data.criteriaId }

  ngOnInit(): void {
  }

  /**
   * closeDialog
   * Closes the 'delete criteria' dialog
   */
  closeDialog() {
    this.dialogRef.close();
  }

  /**
   * deleteCriteria
   * Deletes the given acceptance criteria
   */
  deleteCriteria() {
    this.sprintService.deleteCriteria(this.criteriaId);
    this.closeDialog();
  }

}
