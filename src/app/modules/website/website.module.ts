import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxGalleryModule } from 'ngx-gallery';
import * as components from 'app/modules/website/components/components-barrel';

import { AppRoutes } from 'app/app.routes';
import { HomeFeaturesComponent } from './components/home/home-features/home-features.component';
import { HomeFeatureComponent } from './components/home/home-feature/home-feature.component';

@NgModule({
  declarations: [
    components.HomeViewComponent,
    components.WebsiteMenuComponent,
    components.WebsiteViewWrapperComponent,
    components.AboutViewComponent,
    components.ContactViewComponent,
    components.HomeSeperatorComponent,
    HomeFeaturesComponent,
    HomeFeatureComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    NgxGalleryModule
  ],
  providers: [],
})
export class WebsiteModule { }
