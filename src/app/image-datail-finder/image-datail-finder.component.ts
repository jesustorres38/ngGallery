import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FinderService } from '../servicios/finder.service';

@Component({
  selector: 'app-image-datail-finder',
  templateUrl: './image-datail-finder.component.html',
  styleUrls: ['./image-datail-finder.component.css']
})
export class ImageDatailFinderComponent implements OnInit {

  link: string;
  constructor(private ruta: ActivatedRoute, private servicio: FinderService) { 
  this.link = servicio.regresamalditolink();
  }

  ngOnInit() {

  }

}
