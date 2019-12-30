import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nigga';
  ID : string ="";
  REF : string ="";
  LIB : string ="";
  DESE : string ="";
  Q : string ="";
  P : string ="";
  danger (){
    alert ("Produit saisi "+this.REF);
   this.tableau.push ({ID:this.ID, REF:this.REF,lib:this.LIB,DESE:this.DESE,Q:this.Q,P:this.P});
  }
  danger2 (){
    let found = this.tableau.find(a=>a.ID==this.ID);
    let position = this.tableau.indexOf(found);
    this.tableau[position]=
    {ID:this.ID, REF:this.REF,lib:this.LIB,DESE:this.DESE,Q:this.Q,P:this.P}
  }
  tableau = 
  [{ ID : 'heycha', REF :'123', lib :'pc', DESE :'good qualite', Q :'1200', P :'100'}];
  Update (unproduit){
    this.ID = unproduit.ID;
    this.REF = unproduit.REF;
    this.LIB = unproduit.LIB;
    this.DESE = unproduit.DESE;
    this.Q = unproduit.Q;
    this.P = unproduit.P;
  }
  Delete(unproduit)
  {
   
   let indice = this.tableau.indexOf(unproduit);
   if (indice>=0)
   {this.tableau.splice (indice,1);}
  
  
  }
  
}
