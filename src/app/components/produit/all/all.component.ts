import { Component, OnInit } from '@angular/core';

import { ProduitService } from 'src/app/services/produit.service';
import {Router} from '@angular/router'
import { produit } from 'src/app/models/produit';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
liste:produit[]=[];

  constructor(private s2: ProduitService,private r: Router ) { 
   // this.liste=this.s2.getProduits();
  
  }
 
  ngOnInit() {
    this.s2.GetAllProductWS().subscribe(data=>{this.liste=data});
  }

  delete1(id:number){
    if (window.confirm("etes vous sur?")) 
    this.s2.DeleteProduits(id);
  }
delete2(id:number)
{
  this.r.navigate(['/DeleteProduits/'+id]);

}

update(id:number)
{this.r.navigate(['/update/'+id]);
}
}