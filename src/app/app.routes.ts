import { Routes } from '@angular/router';
import { EcommerceComponent } from './pages/dashboard/ecommerce/ecommerce.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NotFoundComponent } from './pages/other-page/not-found/not-found.component';
import { AppLayoutComponent } from './shared/layout/app-layout/app-layout.component';
import { InvoicesComponent } from './pages/invoices/invoices.component';
import { LineChartComponent } from './pages/charts/line-chart/line-chart.component';
import { BarChartComponent } from './pages/charts/bar-chart/bar-chart.component';
import { SignInComponent } from './pages/auth-pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/auth-pages/sign-up/sign-up.component';
import { ResetPasswordComponent } from './pages/auth-pages/reset-password/reset-password.component';
import { PlaceholderComponent } from './pages/placeholder/placeholder.component';
import { CalenderComponent } from './pages/calender/calender.component';

export const routes: Routes = [
  {
    path:'',
    component:AppLayoutComponent,
    children:[
      {
        path: '',
        component: EcommerceComponent,
        pathMatch: 'full',
        title:
          'Dashboard | Dakata',
      },
      {
        path:'shipments',
        component:PlaceholderComponent,
        data:{ heading:'Shipments' },
        title:'Shipments | Dakata'
      },
      {
        path:'orders',
        component:PlaceholderComponent,
        data:{ heading:'Orders' },
        title:'Orders | Dakata'
      },
      {
        path:'tracking',
        component:PlaceholderComponent,
        data:{ heading:'Live Tracking' },
        title:'Live Tracking | Dakata'
      },
      {
        path:'vehicles',
        component:PlaceholderComponent,
        data:{ heading:'Vehicles' },
        title:'Vehicles | Dakata'
      },
      {
        path:'drivers',
        component:PlaceholderComponent,
        data:{ heading:'Drivers' },
        title:'Drivers | Dakata'
      },
      {
        path:'maintenance',
        component:PlaceholderComponent,
        data:{ heading:'Maintenance' },
        title:'Maintenance | Dakata'
      },
      {
        path:'warehouses',
        component:PlaceholderComponent,
        data:{ heading:'Warehouses' },
        title:'Warehouses | Dakata'
      },
      {
        path:'inventory',
        component:PlaceholderComponent,
        data:{ heading:'Inventory' },
        title:'Inventory | Dakata'
      },
      {
        path:'customers',
        component:PlaceholderComponent,
        data:{ heading:'Customers' },
        title:'Customers | Dakata'
      },
      {
        path:'settings',
        component:PlaceholderComponent,
        data:{ heading:'Settings' },
        title:'Settings | Dakata'
      },
      {
        path:'calendar',
        component:CalenderComponent,
        title:'Schedule | Dakata'
      },
      {
        path:'profile',
        component:ProfileComponent,
        title:'Profile | Dakata'
      },
      // support tickets
      {
        path:'invoice',
        component:InvoicesComponent,
        title:'Invoice Details | Dakata'
      },
      {
        path:'line-chart',
        component:LineChartComponent,
        title:'Line Chart | Dakata'
      },
      {
        path:'bar-chart',
        component:BarChartComponent,
        title:'Bar Chart | Dakata'
      },
    ]
  },
  // auth pages
  {
    path:'signin',
    component:SignInComponent,
    title:'Sign In | Dakata'
  },
  {
    path:'signup',
    component:SignUpComponent,
    title:'Sign Up | Dakata'
  },
  {
    path:'reset-password',
    component:ResetPasswordComponent,
    title:'Reset Password | Dakata'
  },
  // error pages
  {
    path:'error-404',
    component:NotFoundComponent,
    title:'NotFound | Dakata'
  },
  {
    path:'**',
    component:NotFoundComponent,
    title:'NotFound | Dakata'
  },
];
