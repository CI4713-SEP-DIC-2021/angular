import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';

// Dialog
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-project',
  templateUrl: './delete-project.component.html',
  styleUrls: ['./delete-project.component.scss']
})
export class DeleteProjectComponent implements OnInit {

  projectId: number;    // ID of the project to be deleted

  constructor(
    private dialogRef: MatDialogRef<DeleteProjectComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
    ) 
    {
      this.projectId = data.id
     }

  ngOnInit(): void {
  }

  /**
   * closeDialog
   * Closes the 'delete project' dialog
   */
  closeDialog() {
    this.dialogRef.close();
  }

  /**
   * deleteProject
   * Deletes the selected project
   */
  deleteProject() {
    console.log(this.projectId);
    this.closeDialog();
  }

}
