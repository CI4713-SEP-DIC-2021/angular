import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserStoriesService } from 'src/app/services/user-stories.service';

@Component({
  selector: 'app-edit-story',
  templateUrl: './edit-story.component.html',
  styleUrls: ['./edit-story.component.scss']
})
export class EditStoryComponent implements OnInit {

  userStoryForm!: FormGroup;
  story: any;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<EditStoryComponent>,
    private userStoryService: UserStoriesService,
    @Inject(MAT_DIALOG_DATA) data: any
  ) { this.story = data.story }

  ngOnInit(): void {
    this.userStoryForm = this.formBuilder.group({
      id: this.story.id,
      description: [this.story.description, Validators.required],
    });
  }

  /**
   * editStory
   * Edits the description of a user story
   */
  editStory() {
    this.story.description = this.userStoryForm.value.description;
    this.userStoryService.editStory(this.story);
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
