import { Component, OnInit} from '@angular/core';
import { FinderService } from '../servicios/finder.service';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.css']
})
export class FinderComponent implements OnInit {

  images: any[];
  tag: string;
  buscando: boolean = false;
  noResults: boolean = false;
  constructor(private servicio: FinderService) { }

  ngOnInit() {
  }
  guardar(link: string, tags: string){
    this.servicio.guardar(link,tags);
  }
  presionatecla(tag:string, event:any) { 
    if(event.keyCode == 13){
      this.buscarImagenes(tag);
    }
  }
  llenarArray(data){
    console.log(data);
    this.images = data.hits;
    this.buscando=false;
    if(this.images.length == 0){
      this.noResults = true;}
    else{this.noResults=false;}
  } 
  buscarImagenes(query: string){
    this.buscando = true;
    return this.servicio.getImage(query).subscribe(
      data => this.llenarArray(data),
      error => console.log(error),
      () => console.log("Request Complete")
    );
  }
}