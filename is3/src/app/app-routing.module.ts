import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { EventsComponent } from './pages/events/events.component';
import { ProductBacklogComponent } from './pages/product-backlog/product-backlog.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
