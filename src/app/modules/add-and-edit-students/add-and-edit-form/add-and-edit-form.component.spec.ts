import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAndEditFormComponent } from './add-and-edit-form.component';

describe('AddAndEditFormComponent', () => {
  let component: AddAndEditFormComponent;
  let fixture: ComponentFixture<AddAndEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAndEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAndEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
