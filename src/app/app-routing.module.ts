import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';


const appRoutes: Routes = [
  {path: 'navbar', component: NavbarComponent },
  {path: 'home', component: HomeComponent },
  {path: 'footer', component: FooterComponent },
  {path: '', redirectTo: 'home', pathMatch:'full' },
  {path:'**',component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }