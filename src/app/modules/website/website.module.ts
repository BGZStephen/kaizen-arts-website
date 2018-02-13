import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as components from 'app/modules/website/components/components-barrel';

import { AppRoutes } from 'app/app.routes';

@NgModule({
  declarations: [
    components.HomeViewComponent,
    components.WebsiteMenuComponent,
    components.WebsiteViewWrapperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutes
  ],
  providers: [],
})
export class WebsiteModule { }
