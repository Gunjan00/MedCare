import { Injectable } from '@angular/core';
import { Medicine } from '../shared/medicine';

import { Observable,of } from 'rxjs';



const firebase = require("nativescript-plugin-firebase/app");

@Injectable({
  providedIn: 'root'
})
export class MedService {

    medCollection;

  constructor() {
      
     this.medCollection = firebase.firestore().collection("medicines");
   }

  getMedicines(): Observable<Medicine[]> {

    return this.medCollection.onSnapshot((snapshot: firestore.QuerySnapshot) => {
  snapshot.forEach(medicine => console.log(medicine.data()));
});
     
    
  }  
 

}