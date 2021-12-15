import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { LOGGERS } from '../data/data';
import { LoggerService } from './logger.service';

describe('LoggerService using HttpClientTestingModule', () => {
  let service: LoggerService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [],
    });

    service = TestBed.inject(LoggerService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('create', () => {
    expect(service).toBeTruthy();
  });

  it('return all loggers', (done) => {
    service.getAll().then((projects: any) => {
        expect(projects).toBeTruthy()
        console.log(projects)
        done();
    }, done.fail);
    const req = controller.expectOne(`${environment.apiUrl}/logger/getall`);
    expect(req.request.method).toEqual('GET');
    req.flush(LOGGERS);
  });

  it('should create a new project', (done) => {
    const logger = LOGGERS[0];
    const loggerID = logger.id;

    service.deleteLog(loggerID).then(loggerDeleted => {
      expect(loggerDeleted).toBeNull;
      done();
    }, done.fail);
    const req = controller.expectOne(`${environment.apiUrl}/logger/delete/${loggerID}`);
    expect(req.request.method).toEqual('DELETE');

    req.flush(null);
  });

  afterEach(() => {
    controller.verify();
  });
});
