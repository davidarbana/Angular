import { Component, OnInit } from '@angular/core';
import { CameraService } from '../camera.service';
import { Camera } from '../camera';
import { Observable, Subject } from 'rxjs';

import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-camera-list',
  templateUrl: './camera-ud.component.html',
  styleUrls: ['./camera-ud.component.css']
})
export class CameraUdComponent implements OnInit {


 constructor(private cameraService: CameraService) { }

  get CameraName() {
    return this.cameraUpdateForm.get('cameraName');
  }
  get CameraModel() {
    return this.cameraUpdateForm.get('cameraModel');
  }
  get CameraResolution() {
    return this.cameraUpdateForm.get('cameraResolution');
  }
  get CameraId() {
    return this.cameraUpdateForm.get('cameraId');
  }
  get CameraIp() {
    return this.cameraUpdateForm.get('cameraIp');
  }

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();


  cameras: Camera[];
  camera: Camera = new Camera();
  deleteMessage = false;
  isUpdated = false;

  cameraUpdateForm = new FormGroup({
    cameraId: new FormControl(),
    cameraName: new FormControl(),
    cameraModel: new FormControl(),
    cameraResolution: new FormControl(),
    cameraIp: new FormControl()
  });


  ngOnInit() {
    this.isUpdated = false;
    this.dtOptions = {
      pageLength: 6,
      stateSave: true,
      lengthMenu: [[6, 16, 20, -1], [6, 16, 20, 'All']],
      processing: true
    };
    this.cameraService.getCameraList().subscribe(data => {
      console.log(data);
      this.cameras = data;
      this.dtTrigger.next();
    });
  }

  deleteCamera(id: string) {
    this.cameraService.deleteCamera(id).subscribe(
      _ => {
        this.ngOnInit();
      }
    );
  }


  updateCamera(stringId: string) {
    this.cameraService.getCamera(stringId);
  }

  updateCam(stringId: string, camera: Camera) {
    this.cameraService.updateCamera(stringId, camera)
      .subscribe(
      res => {
        console.log(res);
        this.ngOnInit();
      }
    );
  }

  changeIsUpdated() {
    this.isUpdated = false;
  }
}
