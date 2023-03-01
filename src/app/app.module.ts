import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './core/components/header/header.component';
import {VideosCardComponent} from './media/components/videos-card/videos-card.component';
import {VideosListComponent} from './media/components/videos-list/videos-list.component';
import {VideosViewComponent} from './media/components/videos-view/videos-view.component';
import {HttpClientModule} from "@angular/common/http";
import { ImagesCardComponent } from './media/components/images-card/images-card.component';
import { ImagesViewComponent } from './media/components/images-view/images-view.component';
import { ImagesListComponent } from './media/components/images-list/images-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VideosCardComponent,
    VideosListComponent,
    VideosViewComponent,
    ImagesCardComponent,
    ImagesListComponent,
    ImagesViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
