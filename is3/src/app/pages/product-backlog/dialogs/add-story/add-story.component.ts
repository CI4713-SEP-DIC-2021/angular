import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserStoriesService } from 'src/app/services/user-stories.service';

@Component({
  selector: 'app-add-story',
  templateUrl: './add-story.component.html',
  styleUrls: ['./add-story.component.scss']
})
export class AddStoryComponent implements OnInit {

  projectId: number;
  child: boolean;
  epic_id: number;
  userStoryForm;

  constructor(
    private formBuilder: FormBuilder,
    private userStoriesService: UserStoriesService,
    private dialogRef: MatDialogRef<AddStoryComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) { this.projectId = data.projectId, this.child = data.child, this.epic_id = data.epic_id,
      this.userStoryForm = this.formBuilder.group({
        description: ['', Validators.required],
        epic: [this.child ? 'false' : '', Validators.required],
        priority: ['', Validators.required]
      })
  }

  ngOnInit(): void {
  }

  /**
   * addStory
   * Adds the story to the database
   */
  async addStory() {
    let response:any = await this.userStoriesService.addStory(this.userStoryForm.value, this.projectId);
    let story_id = response.id;

    // Story of an epic:
    if (this.child) {
      this.userStoriesService.addToEpic(story_id, this.epic_id);
    }

    this.dialogRef.close();
  }

  /**
   * descriptionError
   * Checks if there's an error in the description input
   * @returns True if there's an error on the input of the description
   */
   displayError(formName: string) {
    if (this.userStoryForm.controls[formName].invalid && (this.userStoryForm.controls[formName].dirty || this.userStoryForm.controls[formName].touched)) {
      return true;
    } else {
      return false;
    }
  }

}
