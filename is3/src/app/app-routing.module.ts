import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { EventsComponent } from './pages/events/events.component';
import { ProductBacklogComponent } from './pages/product-backlog/product-backlog.component';
import { ProjectsDocumentsComponent } from './pages/projects-documents/projects-documents.component';
import { SprintBacklogComponent } from './pages/sprint-backlog/sprint-backlog.component';
import { RevisionHistoryComponent } from './pages/projects-documents/revision-history/revision-history.component';
import { TeamsRolesComponent } from './pages/projects-documents/teams-roles/teams-roles.component';
import { MeetingsComponent } from './pages/meetings/meetings.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'user-profile',
    component: UserProfileComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'events',
    component: EventsComponent,
  },
  {
    path: 'historias/:id',
    component: ProductBacklogComponent,
  },
  {
    path: 'projects-documents',
    component: ProjectsDocumentsComponent,
  },
  {
    path: 'sprints/:id',
    component: SprintBacklogComponent,
  },
  {
    path: 'revision-history',
    component: RevisionHistoryComponent,
  },
  {
    path: 'teams-roles',
    component: TeamsRolesComponent,
  },
  {
    path: 'meetings/:type/:sprintId',
    component: MeetingsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
