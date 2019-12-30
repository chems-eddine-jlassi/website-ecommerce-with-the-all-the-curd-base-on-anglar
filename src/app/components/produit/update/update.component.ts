import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from 'src/app/services/produit.service';
import { produit } from 'src/app/models/produit';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
p:produit;

  constructor(private ar:ActivatedRoute,private s4: ProduitService ) { 
  
        
     
  }
  ngOnInit() {
    let urlid=this.ar.snapshot.paramMap.get('id');
    this.p=this.s4.getById(parseInt(urlid));
    this.s4.getByIdws(parseInt(urlid)).subscribe(data=> 
      {this.p =data });
      
  }

 updateProduct(){
  //this.s4.updateProduit(this.p);
this.s4.UpdateproductWS(this.p);
}
}
