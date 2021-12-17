import { ProjectsService } from 'src/app/services/projects.service';
import { ProjectsDocumentsComponent } from './projects-documents.component';
import {
    TestBed,
  } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { defer, of } from 'rxjs';
import { AppModule } from 'src/app/app.module';

export function asyncData<T>(data: T) {
    return defer(() => Promise.resolve(data));
}

const fakeProjectsService = {
    getAllProjects: jest.fn(),
};

describe('ProjectsDocumentsComponent', () => {
    let component: ProjectsService;
    let fixture: any;
    let element: any;
  
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [AppModule],
            providers: [
                {
                provide: ProjectsService
                }
            ],
        });

        fixture = TestBed.createComponent(ProjectsDocumentsComponent);
        component = fixture.componentInstance;
        element = fixture.debugElement;
    });
  
    it('create', () => {
      expect(component).toBeTruthy();
    });

    it('should two options two select', () => {
        // const projects = PROJECTS;
        // fakeProjectsService.getAllProjects.mockReturnValueOnce(of(projects));
        fixture.detectChanges();
        const tabs = element.queryAll(By.css('.mat-select-value'));
        expect(tabs.length).toBeGreaterThanOrEqual(1);
      });
});