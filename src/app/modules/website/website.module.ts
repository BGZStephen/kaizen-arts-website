import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxGalleryModule } from 'ngx-gallery';
import * as components from 'app/modules/website/components/components-barrel';

import { AppRoutes } from 'app/app.routes';

@NgModule({
  declarations: [
    components.HomeViewComponent,
    components.WebsiteMenuComponent,
    components.WebsiteViewWrapperComponent,
    components.AboutViewComponent,
    components.ContactViewComponent,
    components.HomeSeperatorComponent,
    components.HomeFeaturesComponent,
    components.HomeFeatureComponent,
    components.HomeActionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    NgxGalleryModule
  ],
  providers: [],
})
export class WebsiteModule { }
