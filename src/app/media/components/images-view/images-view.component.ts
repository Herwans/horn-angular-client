import { Component } from '@angular/core';
import {Image} from "../../models/image.model";
import {ImagesService} from "../../services/images.service";
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-images-view',
  templateUrl: './images-view.component.html',
  styleUrls: ['./images-view.component.scss']
})
export class ImagesViewComponent {
  image!: Image;
  media!: any;
  constructor(
    private imagesService: ImagesService,
    private route: ActivatedRoute,
    private sanitizer : DomSanitizer
  ) {}
  ngOnInit(): void {
    this.imagesService.getById(this.route.snapshot.params['id']).subscribe(value => (this.image = value));
    this.imagesService.getBlob(this.route.snapshot.params['id'])
      .subscribe(value => this.onPlayImage(value));
  }

  onPlayImage(blobImage: any) {
    const URL = window.URL;
    this.media = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(blobImage));
  }
}
