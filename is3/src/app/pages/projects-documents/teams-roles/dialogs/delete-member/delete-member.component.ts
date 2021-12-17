import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-member',
  templateUrl: './delete-member.component.html',
  styleUrls: ['./delete-member.component.scss']
})
export class DeleteMemberComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DeleteMemberComponent>
  ) { }

  ngOnInit(): void {
  }

  /**
   * closeDialog
   * Returns false
   */
  closeDialog() {
    this.dialogRef.close(false);
  }

  /**
   * deleteMember
   * Returns true to delete the selected member
   */
  deleteMember() {
    this.dialogRef.close(true);
  }

}
