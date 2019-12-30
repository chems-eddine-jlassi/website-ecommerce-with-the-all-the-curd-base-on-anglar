import { Component, OnInit } from '@angular/core';
import {produit} from 'src/app/models/produit';
import {ProduitService} from 'src/app/services/produit.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  //[x: string]: any;
prod: produit = new produit();
tab :  produit[]=[];

constructor(private s1:ProduitService) { }

  ngOnInit() {
  }

  addProduct(){
 //this.s1.addProductToList(this.prod)
 this.s1.AddproductToDBWS(this.prod);
this.prod=new produit;}
  }