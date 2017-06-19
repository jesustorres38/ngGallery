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
  {"id": 2, "category": "castel", "caption": "castel and flowers", "url": "assets/img/castel_01.jpg"},
  {"id": 3, "category": "city", "caption": "city at night", "url": "assets/img/city_01.jpg"},
  {"id": 4, "category": "city", "caption": "downtown", "url": "assets/img/city_02.jpg"},
  {"id": 5, "category": "field", "caption": "field with a house", "url": "assets/img/field_01.jpg"},
  {"id": 6, "category": "field", "caption": "field and sky", "url": "assets/img/field_02.jpg"},
  {"id": 7, "category": "mountain", "caption": "montain and river", "url": "assets/img/montain_01.jpg"},
  {"id": 8, "category": "town", "caption": "town", "url": "assets/img/town_01.jpg"},
  {"id": 9, "category": "watter", "caption": "water and montain", "url": "assets/img/water_01.jpg"},
  {"id": 10, "category": "watter", "caption": "water and river", "url": "assets/img/water_02.jpg"},
  {"id": 11, "category": "watter", "caption": "water and beach", "url": "assets/img/water_03.jpg"},
  {"id": 12, "category": "watter", "caption": "water and pier", "url": "assets/img/water_04.jpg"}
];