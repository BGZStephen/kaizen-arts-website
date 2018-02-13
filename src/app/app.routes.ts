import { RouterModule, Routes } from '@angular/router';

import { HomeViewComponent } from 'app/modules/website/components/home/view/home-view.component';

const APP_ROUTES: Routes = [
  {path: '', component: HomeViewComponent},
]

export const AppRoutes = RouterModule.forRoot(APP_ROUTES);
