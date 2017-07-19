import { Component, OnInit } from '@angular/core';
import { FinderService } from '../servicios/finder.service';
@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.css']
})
export class FinderComponent implements OnInit {

  images: any[];
  constructor(private Servicio: FinderService) { }

  ngOnInit() {
  }

}
