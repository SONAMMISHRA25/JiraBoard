import { provideRouter } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const appConfig = {
  providers: [
    importProvidersFrom(BrowserAnimationsModule), // Import only BrowserAnimationsModule
    provideRouter([
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' }
    ])
  ]
};
