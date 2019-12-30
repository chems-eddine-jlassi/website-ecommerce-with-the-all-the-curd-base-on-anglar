import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/services/produit.service';
import { ActivatedRoute } from '@angular/router';
import { produit } from 'src/app/models/produit';
import {Router} from '@angular/router'
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
p:produit;
  constructor(private ar:ActivatedRoute,private s3: ProduitService ,private r2:Router) { 
    
  }
  delete(){
   // this.s3.DeleteProduits(this.p.id_product);
this.s3.DeleteProduitsws(this.p.id_product);
  }

  cancel(){
    this.r2.navigate(['/all']);
    
  }

  ngOnInit() {
    let urlid=this.ar.snapshot.paramMap.get('id');
    this.p=this.s3.getById(parseInt(urlid));
    this.s3.getByIdws(parseInt(urlid)).subscribe(data=>
       this.p =data);
  }
  
}
