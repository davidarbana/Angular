import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CameraUdComponent } from './camera-ud/camera-ud.component';
import {AddCameraComponent} from './add-camera/add-camera.component';

const routes: Routes = [
  { path: '', redirectTo: 'view-camera', pathMatch: 'full' },
  { path: 'view-camera', component: CameraUdComponent },
  { path: 'add-camera', component: AddCameraComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
