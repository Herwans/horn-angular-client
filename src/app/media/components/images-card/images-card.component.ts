import {Component, Input, OnInit} from '@angular/core';
import {Image} from "../../models/image.model";
import {Router} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {ImagesService} from "../../services/images.service";

@Component({
  selector: 'app-images-card',
  templateUrl: './images-card.component.html',
  styleUrls: ['./images-card.component.scss']
})
export class ImagesCardComponent implements OnInit {
  @Input() image!: Image;
  thumbnail!: any;

  constructor(private router: Router, private sanitizer: DomSanitizer, private imageService: ImagesService) {
  }

  ngOnInit(): void {
    this.onBase64ConvertToImage(this.image.thumbnail);
  }

  onWatch(): void {
    this.router.navigateByUrl("/images/" + this.image.id);
  }

  onPlayImage(blobImage: any) {
    const URL = window.URL;
    this.thumbnail = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(blobImage));
  }

  onBase64ConvertToImage(blobImage: any) {
    this.thumbnail = `data:image/jpeg;base64,${blobImage}`;
  }
}
