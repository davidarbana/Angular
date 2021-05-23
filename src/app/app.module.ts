import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {DataTablesModule} from 'angular-datatables';
import { CameraListComponent } from './camera-list/camera-list.component';
import { AddCameraComponent } from './add-camera/add-camera.component';

@NgModule({
  declarations: [
    AppComponent,
    CameraListComponent,
    AddCameraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
