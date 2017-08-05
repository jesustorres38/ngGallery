import { Component, OnInit} from '@angular/core';
import { FinderService } from '../servicios/finder.service';

@Component({
  selector: 'app-image-datail-finder',
  templateUrl: './image-datail-finder.component.html',
  styleUrls: ['./image-datail-finder.component.css']
})
export class ImageDatailFinderComponent implements OnInit {

  link: string;
  tags: string;
  constructor(private servicio: FinderService) { 
  this.link = servicio.regresarlink();
  this.tags = servicio.regresartags();
  }
  ngOnInit() {
  }

}
