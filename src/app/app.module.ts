import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { ZwitterComponent } from './zwitter/zwitter.component';


export const appRoutes: Routes = [
    {path:'home', component: HomeComponent},
    {path:'login', component: LoginComponent},
    {path:'', redirectTo:'home', pathMatch:'full' },
    {path:'**',component: NotFoundComponent}
];

export const firebaseConfig = {
    apiKey: "AIzaSyB4D3yV8UYlgxx__4oVhD0WcnYQ-rlcS5o",
    authDomain: "zwitter-5111e.firebaseapp.com",
    databaseURL: "https://zwitter-5111e.firebaseio.com",
    projectId: "zwitter-5111e",
    storageBucket: "zwitter-5111e.appspot.com",
    messagingSenderId: "252622006217"
  };

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    NotFoundComponent,
    LoginComponent,
    ZwitterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
     AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
