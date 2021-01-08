import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

 
  mensajes:any;

  constructor( private dataservice: DataService) { }


  ngOnInit(): void {

    this.mensajes = this.dataservice.getPost();  
    //mensajes estaba mensajes:any[]=any[];
    //this.dataservice.getPost(); 
    // .subscribe( (posts:any[]) =>{
    //   console.log(posts);
    //  this.mensajes=posts;
    // });
    //lo cambie porque  de esta forma no cancela la subscripcion y 
    //podría alentar la app
    //Para que funcione de la nueva manera hay que poner el pipe de async
  }
  

}
