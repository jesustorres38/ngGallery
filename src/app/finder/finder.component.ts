import { Component, OnInit} from '@angular/core';
import { FinderService } from '../servicios/finder.service';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.css']
})
export class FinderComponent implements OnInit {

  images: any[];
  buscando: boolean = false;
  noResults: boolean = false;
  constructor(private servicio: FinderService) { }

  ngOnInit() {
  }
  guardar(link: string){
    this.servicio.malditolink(link);
  }
  onKey(tag:string, event:any) { 
    if(event.keyCode == 13){
      console.log(tag);
      this.buscarImagenes(tag);
    }
  }
  llenarArray(data){
    this.images = data.hits;
    this.buscando=false;
    if(this.images.length == 0){this.noResults = true;}
    else{this.noResults=false;}
  }

  //tambien se puede manejar el error al igual que se lleno el array llamando a una funcion 

  buscarImagenes(query: string){
    this.buscando = true;
    return this.servicio.getImage(query).subscribe(
      data => this.llenarArray(data),
      error => console.log(error),
      () => console.log("Request Complete")
    );
  }
}