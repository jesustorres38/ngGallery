import { Component, OnInit } from '@angular/core';
import { FinderService } from '../servicios/finder.service';
@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.css']
})
export class FinderComponent implements OnInit {

  images: any[];
  constructor(private servicio: FinderService) { }

  ngOnInit() {
  }

  buscarImagenes(query: string){
    return this.servicio.getImage(query).subscribe(
      data => console.log(data),
      error => console.log(error),
      () => console.log("Request Complete")
    );
  }

}
