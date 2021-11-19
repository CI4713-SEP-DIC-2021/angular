import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserStoriesService } from 'src/app/services/user-stories.service';

@Component({
  selector: 'app-delete-story',
  templateUrl: './delete-story.component.html',
  styleUrls: ['./delete-story.component.scss']
})
export class DeleteStoryComponent implements OnInit {

  storyId: number;      // ID of the story to be deleted

  constructor(
    private dialogRef: MatDialogRef<DeleteStoryComponent>,
    private storyService: UserStoriesService,
    @Inject(MAT_DIALOG_DATA) data: any
  ) { this.storyId = data.storyId }

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
   * deleteStory
   * Deletes a user story and its children if it has any
   */
  async deleteStory() {
    // Deletes the user story
    await this.storyService.getChildrenFromEpic(this.storyId).then((children: any) => {
      var response_array = Array.isArray(children);
      if (response_array) {
        for (let x of children) {
          var child: any = x;
          this.storyService.delete(child.id);
        }
      }
    });

    this.storyService.delete(this.storyId);
    this.closeDialog();
  }

}
