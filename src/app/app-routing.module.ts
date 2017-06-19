import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  {path: 'navbar', component: NavbarComponent },
  {path: 'home', component: HomeComponent },
  {path: 'gallery', component: GalleryComponent },
  {path: 'image-detail/:id', component: ImageDetailComponent },
  {path: '', redirectTo: 'home', pathMatch:'full' },
  {path:'**',component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }