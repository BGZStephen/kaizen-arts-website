import { RouterModule, Routes } from '@angular/router';

import { WebsiteViewWrapperComponent } from 'app/modules/website/components/view-wrapper/website-view-wrapper.component'
import { HomeViewComponent } from 'app/modules/website/components/home/view/home-view.component';
import { AboutKaizenViewComponent } from 'app/modules/website/components/about-kaizen/view/about-kaizen-view.component';
import { AboutJamesViewComponent } from 'app/modules/website/components/about-james/view/about-james-view.component';
import { ContactViewComponent } from 'app/modules/website/components/contact/view/contact-view.component';

const APP_ROUTES: Routes = [
  {path: '', component: WebsiteViewWrapperComponent, children: [
    {path: '', component: HomeViewComponent},
    {path: 'about-kaizen', component: AboutKaizenViewComponent},
    {path: 'about-james', component: AboutJamesViewComponent},
    {path: 'contact', component: ContactViewComponent}
  ]},
]

export const AppRoutes = RouterModule.forRoot(APP_ROUTES);
