import { Component, OnInit } from '@angular/core';
import { CameraService } from '../camera.service';
import { Camera } from '../camera';
import { Observable, Subject } from 'rxjs';

import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-camera-list',
  templateUrl: './camera-list.component.html',
  styleUrls: ['./camera-list.component.css']
})
export class CameraListComponent implements OnInit {


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

  cameraArray: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  private dtElement: any;


  cameras: Camera[];
  camera: Camera = new Camera();
  deleteMessage = false;
  cameraList: any;
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

  updateCam() {
    this.cameraService.updateCamera(this.camera.stringId, this.camera).subscribe(
      res => {
        console.log(res);
        this.ngOnInit();
      }
    );
  }

  changeIsUpdated() {
    this.isUpdated = true;
  }
}
