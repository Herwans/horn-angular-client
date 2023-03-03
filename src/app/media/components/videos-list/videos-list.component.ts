import {Component, OnInit} from '@angular/core';
import {Video} from "../../models/video.model";
import {VideosService} from "../../services/videos.service";

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.scss']
})
export class VideosListComponent implements OnInit {
  videos!: Video[];
  constructor(public videosService: VideosService) {
  }
  ngOnInit(): void {
    this.videosService.getAllVideos().subscribe(videos => (this.videos = videos));
  }
}
