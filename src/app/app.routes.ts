import { RouterModule, Routes } from '@angular/router';

import { WebsiteViewWrapperComponent } from 'app/modules/website/components/view-wrapper/website-view-wrapper.component'
import { HomeViewComponent } from 'app/modules/website/components/home/view/home-view.component';
import { AboutViewComponent } from 'app/modules/website/components/about/view/about-view.component';
import { ContactViewComponent } from 'app/modules/website/components/contact/view/contact-view.component';

const APP_ROUTES: Routes = [
  {path: '', component: WebsiteViewWrapperComponent, children: [
    {path: '', component: HomeViewComponent},
    {path: 'about', component: AboutViewComponent},
    {path: 'contact', component: ContactViewComponent}
  ]},
]

export const AppRoutes = RouterModule.forRoot(APP_ROUTES);
