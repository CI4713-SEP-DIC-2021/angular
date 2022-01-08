import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SprintsService } from 'src/app/services/sprints.service';

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.scss']
})
export class DeleteTaskComponent implements OnInit {

  taskId: number; 

  constructor(
    private sprintService: SprintsService,
    private dialogRef: MatDialogRef<DeleteTaskComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) { this.taskId = data.taskId }

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
  deleteTask() {
    this.sprintService.deleteTask(this.taskId);
    this.closeDialog();
  }

}
