// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule } from '@angular/router';
// import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';
// import { ContactComponent } from './contact/contact.component';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatListModule } from '@angular/material/list';

// @NgModule({
//   declarations: [
//     AppComponent,
//     HomeComponent,
//     AboutComponent,
//     ContactComponent,
//     MatToolbarModule,
//     MatSidenavModule,
//     MatListModule
//   ],
//   imports: [
//     BrowserModule,
//     RouterModule.forRoot([      
//       { path: 'home', component: HomeComponent },
//       { path: 'about', component: AboutComponent },
//       { path: 'contact', component: ContactComponent },
//       { path: '', redirectTo: '/home', pathMatch: 'full' }
//     ])
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    RouterModule.forRoot([      
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

