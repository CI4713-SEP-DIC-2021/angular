import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from './components/components.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserProfileModule } from './pages/user-profile/user-profile.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

// Components
import { ProjectsComponent } from './pages/projects/projects.component';
import { AddProjectComponent } from './pages/projects/dialogs/add-project/add-project.component';
import { DeleteProjectComponent } from './pages/projects/dialogs/delete-project/delete-project.component';
import { EditProjectComponent } from './pages/projects/dialogs/edit-project/edit-project.component';
import { LoginComponent, DialogErrorLogin } from './login/login.component';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { EventsComponent } from './pages/events/events.component';
import { ProductBacklogComponent } from './pages/product-backlog/product-backlog.component';
import { AddStoryComponent } from './pages/product-backlog/dialogs/add-story/add-story.component';
import { EditStoryComponent } from './pages/product-backlog/dialogs/edit-story/edit-story.component';
import { DeleteStoryComponent } from './pages/product-backlog/dialogs/delete-story/delete-story.component';
import { ProjectsDocumentsComponent } from './pages/projects-documents/projects-documents.component';
import { SprintBacklogComponent } from './pages/sprint-backlog/sprint-backlog.component';
import { AddCriteriaComponent } from './pages/sprint-backlog/dialogs/add-criteria/add-criteria.component';
import { EditCriteriaComponent } from './pages/sprint-backlog/dialogs/edit-criteria/edit-criteria.component';
import { DeleteCriteriaComponent } from './pages/sprint-backlog/dialogs/delete-criteria/delete-criteria.component';
import { EditTestComponent } from './pages/sprint-backlog/dialogs/edit-test/edit-test.component';
import { AddTestComponent } from './pages/sprint-backlog/dialogs/add-test/add-test.component';
import { DeleteTestComponent } from './pages/sprint-backlog/dialogs/delete-test/delete-test.component';
import { RevisionHistoryComponent } from './pages/projects-documents/revision-history/revision-history.component';
import { addReviewDialog, editReviewDialog, deleteReviewDialog } from './pages/projects-documents/revision-history/revision-history.component';
import { TeamsRolesComponent } from './pages/projects-documents/teams-roles/teams-roles.component';
import { AddMemberComponent } from './pages/projects-documents/teams-roles/dialogs/add-member/add-member.component';
import { EditMemberComponent } from './pages/projects-documents/teams-roles/dialogs/edit-member/edit-member.component';
import { DeleteMemberComponent } from './pages/projects-documents/teams-roles/dialogs/delete-member/delete-member.component';
import { AddTeamComponent } from './pages/projects-documents/teams-roles/dialogs/add-team/add-team.component';
import { AddTeamMemberComponent } from './pages/projects-documents/teams-roles/dialogs/add-team-member/add-team-member.component';
import { EditTeamMemberComponent } from './pages/projects-documents/teams-roles/dialogs/edit-team-member/edit-team-member.component';
import { DeleteTeamMemberComponent } from './pages/projects-documents/teams-roles/dialogs/delete-team-member/delete-team-member.component';
import { ShowMeetingComponent } from './pages/projects/dialogs/show-meeting/show-meeting.component';
import { MeetingsComponent } from './pages/meetings/meetings.component';
import { PlanningComponent } from './pages/meetings/planning/planning.component';
import { DailyComponent } from './pages/meetings/daily/daily.component';
import { RetrospectiveComponent } from './pages/meetings/retrospective/retrospective.component';
import { AddPlanningComponent } from './pages/meetings/planning/add-planning/add-planning.component';
import { EditPlanningComponent } from './pages/meetings/planning/edit-planning/edit-planning.component';
import { AddDailyComponent } from './pages/meetings/daily/add-daily/add-daily.component';
import { EditDailyComponent } from './pages/meetings/daily/edit-daily/edit-daily.component';
import { AddRetrospectiveComponent } from './pages/meetings/retrospective/add-retrospective/add-retrospective.component';
import { EditRetrospectiveComponent } from './pages/meetings/retrospective/edit-retrospective/edit-retrospective.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    ProjectsComponent,
    AddProjectComponent,
    DeleteProjectComponent,
    EditProjectComponent,
    DialogErrorLogin,
    EventsComponent,
    ProductBacklogComponent,
    AddStoryComponent,
    EditStoryComponent,
    DeleteStoryComponent,
    ProjectsDocumentsComponent,
    SprintBacklogComponent,
    AddCriteriaComponent,
    EditCriteriaComponent,
    DeleteCriteriaComponent,
    EditTestComponent,
    AddTestComponent,
    DeleteTestComponent,
    RevisionHistoryComponent,
    addReviewDialog,
    editReviewDialog,
    deleteReviewDialog,
    TeamsRolesComponent,
    AddMemberComponent,
    EditMemberComponent,
    DeleteMemberComponent,
    AddTeamComponent,
    AddTeamMemberComponent,
    EditTeamMemberComponent,
    DeleteTeamMemberComponent,
    ShowMeetingComponent,
    MeetingsComponent,
    PlanningComponent,
    DailyComponent,
    RetrospectiveComponent,
    AddPlanningComponent,
    EditPlanningComponent,
    AddDailyComponent,
    EditDailyComponent,
    AddRetrospectiveComponent,
    EditRetrospectiveComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ComponentsModule,
    FontAwesomeModule,
    NgbModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    UserProfileModule,
    MatDialogModule,
  ],
  entryComponents: [
  
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
    MatDatepickerModule,
    MatNativeDateModule,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
