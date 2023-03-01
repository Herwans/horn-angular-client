import {Component, Input, OnInit} from '@angular/core';
import {Video} from "../../models/video.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-videos-card',
  templateUrl: './videos-card.component.html',
  styleUrls: ['./videos-card.component.scss']
})
export class VideosCardComponent implements OnInit {
  @Input() video!: Video;
  constructor(private router: Router) {
  }
  ngOnInit(): void {
    this.video.thumbnail = "";
    this.video.duration = "99:99:99";
  }

  onWatch(): void {
    this.router.navigateByUrl("/videos/" + this.video.id);
  }
}
