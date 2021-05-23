import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CameraListComponent } from './camera-list/camera-list.component';
import {AddCameraComponent} from './add-camera/add-camera.component';

const routes: Routes = [
  { path: '', redirectTo: 'view-camera', pathMatch: 'full' },
  { path: 'view-camera', component: CameraListComponent },
  { path: 'add-camera', component: AddCameraComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
