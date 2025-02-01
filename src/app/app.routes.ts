import { Routes } from '@angular/router';
import { AppComponent } from './app.component'; 

export const routes: Routes = [
  { path: '', component: AppComponent }, // Root route
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirect unknown routes
];

