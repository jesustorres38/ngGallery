import { Component, OnInit, OnChanges } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  visibleImages: any[] = [];


  constructor(private servicioParaImagen: ImageService ) {
    this.visibleImages = servicioParaImagen.getImages();
   }

  ngOnInit() {
  }

}
