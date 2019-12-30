import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddComponent} from './components/produit/add/add.component';
import {UpdateComponent} from './components/produit/update/update.component';

import {DeleteComponent} from './components/produit/delete/delete.component';

import {AllComponent} from './components/produit/all/all.component';
const routes: Routes = [
  {path:'delete', component:DeleteComponent},
  {path:'DeleteProduits/:id', component:DeleteComponent},
  {path:'update', component:UpdateComponent},
  {path:'update/:id', component:UpdateComponent},
  {path:'add', component:AddComponent},
  {path:'all', component:AllComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
