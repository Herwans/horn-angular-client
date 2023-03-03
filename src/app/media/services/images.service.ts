import { Injectable } from '@angular/core';
import {Image} from "../models/image.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Video} from "../models/video.model";

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  images!: Image[];

  constructor(private httpClient: HttpClient) {
  }

  getAllImages(): Observable<Image[]> {
    return this.httpClient.get<Image[]>("http://localhost:9000/images");
  }

  getById(id: number): Observable<Image> {
    return this.httpClient.get<Image>("http://localhost:9000/images/" + id);
  }

  getBlob(id: number): Observable<Blob> {
    return this.httpClient.get("http://localhost:9000/images/blob/" + id, {responseType: 'blob'})
  }
}
