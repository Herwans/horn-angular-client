import {Component, OnInit} from '@angular/core';
import {Image} from "../../models/image.model";
import {ImagesService} from "../../services/images.service";

@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.scss']
})
export class ImagesListComponent implements OnInit {
  images!: Image[];
  constructor(public imagesService: ImagesService) {
  }
  ngOnInit(): void {
    this.imagesService.getAllImages().subscribe(images => (this.images = images));
  }
}
