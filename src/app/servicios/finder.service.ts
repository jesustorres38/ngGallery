import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FinderService {
  
  private vinculo: string;
  private query: string;
  private api_key: string = environment.pixabay_api_key;
  private api_url: string = environment.pixabay_api_url;
  private url: string = this.api_url + this.api_key + '&q=';
  private pages: string = "&per_page=12";

  constructor(private solicitud: Http) { }

  getImage(query){
    return this.solicitud.get(this.url+query+this.pages)
    .map(x => x.json());
  }
  malditolink(link:string){
    this.vinculo = link;
    console.log(this.vinculo);
  }
  regresamalditolink(){
    return this.vinculo;
  }
}