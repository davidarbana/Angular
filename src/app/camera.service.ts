import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Camera} from './camera';

@Injectable({
  providedIn: 'root'
})

export class CameraService {

  private baseUrl = 'http://localhost:8080/cameras/';

  constructor(private http: HttpClient) { }

  public getCameraList(): Observable<Camera[]> {
    return this.http.get<Camera[]>(this.baseUrl);
  }

  public createCamera(camera: Camera) {
    return this.http.post('http://localhost:8080/cameras/', camera);

  }

  public getCamera(id: string): Observable<Camera> {
    return this.http.get<Camera>(`${this.baseUrl}${id}`);
  }

  public deleteCamera(id: string) {
    return this.http.delete(`${this.baseUrl}${id}`);
  }

  public updateCamera(stringId: string, value: Camera) {
    return this.http.put(`http://localhost:8080/cameras/${stringId}`, value);
  }


}
