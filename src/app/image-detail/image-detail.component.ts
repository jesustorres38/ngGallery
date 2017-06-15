import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {

  imagen : any;
  constructor(private servicioParaImagen: ImageService, private ruta: ActivatedRoute) { }

  ngOnInit() {
    this.imagen = this.servicioParaImagen.getImage(
      +this.ruta.snapshot.params['id']
    );
  }

}
