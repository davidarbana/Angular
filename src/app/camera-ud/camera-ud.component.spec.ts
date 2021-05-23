import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraUdComponent } from './camera-ud.component';

describe('StudentListComponent', () => {
  let component: CameraUdComponent;
  let fixture: ComponentFixture<CameraUdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CameraUdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraUdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
