import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class FinderService {
  
  private query: string;
  private api_key: string = environment.pixabay_api_key;
  private api_url: string = environment.pixabay_api_url;

  constructor() { }

}
