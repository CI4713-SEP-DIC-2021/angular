import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { PROJECTS } from '../data/data';
import { ProjectsService } from './projects.service';

describe('ProjectsService using HttpClientTestingModule', () => {
  let service: ProjectsService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [],
    });

    service = TestBed.inject(ProjectsService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('create', () => {
    expect(service).toBeTruthy();
  });

  it('return all projects by a user id', (done) => {
    const userId = 1;
    service.getAllByUser(userId).then((projects: any) => {
        var is_array = Array.isArray(projects);

        if (is_array) {
            expect(projects[0].user_id).toEqual(userId)
        }
        done();
    });
    const req = controller.expectOne(`${environment.apiUrl}/projects/getall/${userId}`);
    expect(req.request.method).toEqual('GET');
    req.flush(PROJECTS);
  });

  it('return all projects', (done) => {
    service.getAllProjects().then((projects: any) => {
        expect(projects).toBeTruthy()
        console.log(projects)
        done();
    }, done.fail);
    const req = controller.expectOne(`${environment.apiUrl}/projects/getall`);
    expect(req.request.method).toEqual('GET');
    req.flush(PROJECTS);
  });

  it('should create a new project', (done) => {
    const project = {
        "description": 'This a dummy description',
        "user_id": 2,
        "status": "active"
      };
    project.description = 'Descripción test editado';
    service.create(project).then((newProject) => {
      expect(newProject).toEqual(project);
      done();
    }, done.fail);
    const req = controller.expectOne(`${environment.apiUrl}/projects/add`);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body.description).toEqual(project.description);

    req.flush(project);
  });

  it('should update project', (done) => {
    const project = PROJECTS[0];
    project.description = 'Descripción test editado';
    service.edit(project).then((updatedProject) => {
      expect(updatedProject).toEqual(project);
      done();
    }, done.fail);
    const req = controller.expectOne(`${environment.apiUrl}/projects/update/${project.id}`);
    expect(req.request.method).toEqual('PUT');
    expect(req.request.body.description).toEqual(project.description);

    req.flush(project);
  });

  it('should pause a project', (done) => {
    const project = PROJECTS[0];
    project.status = 'paused';
    service.pause(project.id).then((projectPaused: any) => {
      expect(projectPaused.status).toEqual('paused');
      done();
    }, done.fail);
    const req = controller.expectOne(`${environment.apiUrl}/projects/pause/${project.id}`);
    expect(req.request.method).toEqual('PATCH');

    req.flush(project);
  });

  it('should reactivate a project', (done) => {
    const project = PROJECTS[0];
    project.status = 'active';
    service.reactivate(project.id).then((projectReactivated: any) => {
      expect(projectReactivated.status).toEqual('active');
      done();
    }, done.fail);
    const req = controller.expectOne(`${environment.apiUrl}/projects/reactivate/${project.id}`);
    expect(req.request.method).toEqual('PATCH');

    req.flush(project);
  });

  it('should delete a project', (done) => {
    const project = PROJECTS[0];
    service.delete(project.id).then((projectDeleted: any) => {
      expect(projectDeleted).toBeNull();
      done();
    }, done.fail);
    const req = controller.expectOne(`${environment.apiUrl}/projects/delete/${project.id}`);
    expect(req.request.method).toEqual('DELETE');

    req.flush(null);
  });

  afterEach(() => {
    controller.verify();
  });
});