import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as components from 'app/modules/website/components/components-barrel';

@NgModule({
  declarations: [
    components.HomeViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
})
export class WebsiteModule { }
