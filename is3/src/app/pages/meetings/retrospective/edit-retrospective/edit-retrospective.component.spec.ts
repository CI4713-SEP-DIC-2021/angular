import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRetrospectiveComponent } from './edit-retrospective.component';

describe('EditRetrospectiveComponent', () => {
  let component: EditRetrospectiveComponent;
  let fixture: ComponentFixture<EditRetrospectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRetrospectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRetrospectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
