import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {

  constructor() { }

  visibleImages = [];

  getImages(){
    //esto muestra una copia de las imagenes
    return this.visibleImages = IMAGES.slice(0);
  }

  getImage(id: number){
    return IMAGES.slice(0).find( image => image.id == id);
  }

}

const IMAGES = [
  {"id": 1, "category": "boats", "caption": "View from a boat", "url": "assets/img/boat_01.jpg"},
  {"id": 2, "category": "boats", "caption": "View from a boat", "url": "assets/img/boat_01.jpg"},
  {"id": 3, "category": "boats", "caption": "View from a boat", "url": "assets/img/boat_01.jpg"},
  {"id": 4, "category": "boats", "caption": "View from a boat", "url": "assets/img/boat_01.jpg"}
];