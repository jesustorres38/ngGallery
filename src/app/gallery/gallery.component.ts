import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnChanges {

  @Input() filterBy?: string = "all";


  visibleImages: any[] = [];

  
  constructor(private servicioParaImagen: ImageService ) {

    this.visibleImages = servicioParaImagen.getImages();

   }

  ngOnInit() {
  }
  //esto no se pa que sirve
  ngOnChanges(){
    this.visibleImages = this.servicioParaImagen.getImages(); 
  }

}
