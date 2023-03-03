import { Injectable } from '@angular/core';
import {Video} from "../models/video.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  videos!: Video[];

  constructor(private httpClient: HttpClient) {
  }

  getAllVideos(): Observable<Video[]> {
    return this.httpClient.get<Video[]>("http://localhost:9000/videos");
  }

  getById(id: number): Observable<Video> {
    return this.httpClient.get<Video>("http://localhost:9000/videos/" + id);
  }

  getBlob(id: number): Observable<Blob> {
    return this.httpClient.get("http://localhost:9000/videos/blob/" + id, {responseType: 'blob'})
  }
}
