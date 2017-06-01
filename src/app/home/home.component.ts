import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: FirebaseListObservable<any[]>;
  name: any;
  msgVal: string = '';

  constructor(db: AngularFireDatabase) { 
    this.items = db.list('/zweets', {
      query: {
        limitToLast:50
      }
    });

    

  }

  ngOnInit() {
  }

}
