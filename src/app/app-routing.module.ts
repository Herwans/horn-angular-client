import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VideosListComponent} from "./media/components/videos-list/videos-list.component";
import {VideosViewComponent} from "./media/components/videos-view/videos-view.component";

const routes: Routes = [
  {path: 'videos/:id', component: VideosViewComponent},
  {path: 'videos', component: VideosListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
