import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VideosListComponent} from "./media/components/videos-list/videos-list.component";
import {VideosViewComponent} from "./media/components/videos-view/videos-view.component";
import {ImagesViewComponent} from "./media/components/images-view/images-view.component";
import {ImagesListComponent} from "./media/components/images-list/images-list.component";

const routes: Routes = [
  {path: 'videos/:id', component: VideosViewComponent},
  {path: 'videos', component: VideosListComponent},
  {path: 'images/:id', component: ImagesViewComponent},
  {path: 'images', component: ImagesListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
