
import{produit} from '../models/produit';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  products :produit[]=[];
  baseurl="http://localhost:8083";
  constructor(private http:HttpClient){}

  GetAllProductWS():Observable<produit[]>{
    return this.http.get<produit[]>(this.baseurl+"/Product/all");   
  }

  AddproductToDBWS(p:produit)
{this.http.post(this.baseurl+"/Product/add",p).subscribe();
}

UpdateproductWS(p:produit)
{this.http.put(this.baseurl+"/Product/edit",p).subscribe();}


  addProductToList(p:produit)
{this.products.push(p);}

getProduits()
{return this.products}

DeleteProduitsws(id:number)
{
  this.http.delete(this.baseurl+"/Product/delete/"+id).subscribe();
}
DeleteProduits(id:number)
{
  let searchedProduct=this.products.find(p=>p.id_product==id);
  let position=this.products.indexOf(searchedProduct);
  this.products.splice(position,1);
}
getById(id:number){ 
  return this.products.find(p=>p.id_product==id);}

  getByIdws(id:number){ 
    return this.http.get<produit>(this.baseurl+"/Product/one/"+id);   }

  updateProduit(p:produit)
  {let oldProduct=this.products.find(p=>p.id_product==p.id_product);
    let position=this.products.indexOf(oldProduct);
    this.products[position]=p;
    
  }




}