import {Component, Input, OnInit} from '@angular/core';
import {Image} from "../../models/image.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-images-card',
  templateUrl: './images-card.component.html',
  styleUrls: ['./images-card.component.scss']
})
export class ImagesCardComponent implements OnInit {
  @Input() image!: Image;
  constructor(private router: Router) {
  }
  ngOnInit(): void {
  }
  onWatch(): void {
    this.router.navigateByUrl("/images/" + this.image.id);
  }
}
