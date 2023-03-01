import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {VideosService} from "../../services/videos.service";
import {Video} from "../../models/video.model";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-videos-view',
  templateUrl: './videos-view.component.html',
  styleUrls: ['./videos-view.component.scss']
})
export class VideosViewComponent implements OnInit {
  video!: Video;
  media!: any;
  constructor(
    private videosService: VideosService,
    private route: ActivatedRoute,
    private sanitizer : DomSanitizer
  ) {}
  ngOnInit(): void {
    this.videosService.getById(this.route.snapshot.params['id']).subscribe(value => (this.video = value));
    this.videosService.getBlob(this.route.snapshot.params['id'])
      .subscribe(value => this.onPlayVideo(value));
  }

  onPlayVideo(blobVideo: any) {
    const URL = window.URL;
    this.media = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(blobVideo));
  }




}
