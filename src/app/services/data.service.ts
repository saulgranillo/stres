import { HttpClient } from '@angular/common/http';
import { compileNgModule } from '@angular/compiler';
import { Injectable } from '@angular/core';

import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) { }


  getPost(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
    .pipe(
      tap( posts =>{
        console.log("desde service");
        console.log(posts);
      })
    );
    //o ponerlo:  .pipe( tap( console.log));
  }
}
