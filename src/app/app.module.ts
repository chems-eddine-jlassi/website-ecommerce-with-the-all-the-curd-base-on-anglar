import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { UpdateComponent } from './components/produit/update/update.component';
import { AddComponent } from './components/produit/add/add.component';
import { DeleteComponent } from './components/produit/delete/delete.component';
import { AllComponent } from './components/produit/all/all.component'
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UpdateComponent,
    AddComponent,
    DeleteComponent,
    AllComponent

  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
