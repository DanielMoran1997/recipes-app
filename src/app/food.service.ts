import { Injectable, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { IFood } from './recipes-list/food.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FoodService  {
  //private _foodUrl = 'http://localhost:3000/food';

  foodCollection: AngularFirestoreCollection<IFood>;

  food: Observable<IFood[]>

  //array to hold food
  allfood: IFood[];
  errorMessage: string;

  constructor(private _http: HttpClient, private _afs: AngularFirestore) {
    //connect to database
    this.foodCollection = _afs.collection<IFood>("food");

   }

   

   getfood(): Observable<IFood[]> {
     this.food = this.foodCollection.snapshotChanges().pipe(
       map(actions => actions.map(a => {
         const data = a.payload.doc.data() as IFood;
         console.log("getfood:data" + JSON.stringify(data));
         const id = a.payload.doc.id;
         console.log("getfood:id = " + id);
         return { id, ...data};
       }))
     );

     this.food.subscribe(data => console.log("getfood" + data));
     return this.food;
   }

   addfood(food: IFood): void {
     this.foodCollection.add(food);
   }



 

  
    

   

}


