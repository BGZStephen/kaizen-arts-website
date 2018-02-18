import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxGalleryModule } from 'ngx-gallery';
import * as components from 'app/modules/website/components/components-barrel';

import { AppRoutes } from 'app/app.routes';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    components.HomeViewComponent,
    components.WebsiteMenuComponent,
    components.WebsiteViewWrapperComponent,
    components.AboutKaizenViewComponent,
    components.ContactViewComponent,
    components.HomeSeperatorComponent,
    components.HomeFeaturesComponent,
    components.HomeFeatureComponent,
    components.HomeActionsComponent,
    components.AboutJamesViewComponent,
    components.ContactFormComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    NgxGalleryModule
  ],
  providers: [],
})
export class WebsiteModule { }
