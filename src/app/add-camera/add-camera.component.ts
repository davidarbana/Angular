import { Component, OnInit } from '@angular/core';
import { CameraService } from '../camera.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Camera } from '../camera';
@Component({
  selector: 'app-add-camera',
  templateUrl: './add-camera.component.html',
  styleUrls: ['./add-camera.component.css']
})
export class AddCameraComponent implements OnInit {

  constructor(private cameraService: CameraService) { }

  get CameraId() {
    return this.cameraSaveForm.get('cameraId');
  }

  get CameraName() {
    return this.cameraSaveForm.get('cameraName');
  }

  get CameraModel() {
    return this.cameraSaveForm.get('cameraModel');
  }

  get CameraResolution() {
    return this.cameraSaveForm.get('cameraResolution');
  }
  get CameraIp() {
    return this.cameraSaveForm.get('cameraIp');
  }

  camera: Camera = new Camera();
  submitted = false;

  cameraSaveForm = new FormGroup({
    cameraName: new FormControl('' , [Validators.required ] ),
    cameraModel: new FormControl('', [Validators.required]),
    cameraResolution: new FormControl('' ),
    cameraId: new FormControl('' ),
    cameraIp: new FormControl('' ),

  });

  ngOnInit() {
    this.submitted = false;
  }

  saveCamera() {
    console.log(this.camera);
    this.save(this.camera);
    this.submitted = true;

  }



  save(camera) {
    this.cameraService.createCamera(camera).subscribe(
      res => {
        console.log(res);
      }
    );
  }

  addCamera(camera) {
    this.submitted = false;
    this.cameraSaveForm.reset();
  }
}
