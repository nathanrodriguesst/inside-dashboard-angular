import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PentestingComponent } from './components/pentesting/pentesting.component';
import { NmapComponent } from './components/nmap/nmap.component';
import { ReportsComponent } from './components/reports/network/reports.component';
import { VulnerabilityReportComponent } from './components/reports/vulnerability-report/vulnerability-report.component';

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
    },
    {
      path: 'reports',
      component: ReportsComponent,
      title: 'Network Report'
    },
    {
      path: 'vulnerability-report',
      component: VulnerabilityReportComponent,
      title: 'Vulnerability Report'
    }
];

export default routes;