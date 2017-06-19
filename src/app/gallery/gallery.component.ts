import { Component, OnInit, Input } from '@angular/core';
import { ImageService } from '../servicios/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit{

  @Input() filterBy?: string = "all";

  visibleImages: any[] = [];  
  constructor(private servicioParaImagen: ImageService ) {
    this.visibleImages = servicioParaImagen.getImages();
  }

  ngOnInit() {  }

  // // aquets no stic segur
  // ngOnChanges(){
  //   this.visibleImages = this.servicioParaImagen.getImages(); 
  // }
}