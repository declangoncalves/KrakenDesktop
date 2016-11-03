import { Routes, RouterModule }  from '@angular/router';
import { BrowseComponent } from './browse.component';

const routes: Routes = [
  {
    path: '',
    component: BrowseComponent
  }
];

export const routing = RouterModule.forChild(routes);