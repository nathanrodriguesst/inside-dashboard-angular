import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PentestingComponent } from './components/pentesting/pentesting.component';
import { NmapComponent } from './components/nmap/nmap.component';

export const routes: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home page'
    },
    {
      path: 'pentesting',
      component: PentestingComponent,
      title: 'Pentesting'
    },
    {
      path: 'nmap',
      component: NmapComponent,
      title: 'Pentesting'
    }
];

export default routes;