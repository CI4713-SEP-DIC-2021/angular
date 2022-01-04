import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDailyComponent } from './edit-daily.component';

describe('EditDailyComponent', () => {
  let component: EditDailyComponent;
  let fixture: ComponentFixture<EditDailyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDailyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
