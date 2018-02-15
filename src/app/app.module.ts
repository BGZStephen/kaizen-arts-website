import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxGalleryModule } from 'ngx-gallery';

// modules
import { WebsiteModule } from './modules/website/website.module';

// routes
import { AppRoutes } from './app.routes';

// components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    WebsiteModule,
    AppRoutes,
    NgxGalleryModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
