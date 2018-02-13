import { RouterModule, Routes } from '@angular/router';

import { HomeViewComponent } from 'app/modules/website/components/home/view/home-view.component';
import { WebsiteViewWrapperComponent } from 'app/modules/website/components/view-wrapper/website-view-wrapper.component'

const APP_ROUTES: Routes = [
  {path: '', component: WebsiteViewWrapperComponent, children: [
    {path: '', component: HomeViewComponent}
  ]},
]

export const AppRoutes = RouterModule.forRoot(APP_ROUTES);
