import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filtroImagen'})

export class FiltroPipe implements PipeTransform {

  transform(fotos:any[], criterio: string): any {
      if(criterio === "all") {
        return fotos;
      } else{
        return fotos.filter(foto => {
          return foto.category === criterio;
        });
      }
    }
  }
