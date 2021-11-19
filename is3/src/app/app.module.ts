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
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
