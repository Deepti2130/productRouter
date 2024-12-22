import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/component/home/home.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { UsersComponent } from './shared/component/users/users.component';
import { ProductsComponent } from './shared/component/products/products.component';
import { FairsComponent } from './shared/component/fairs/fairs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material/material.module';
import { ProductComponent } from './shared/component/products/product/product.component';
import { ProductformComponent } from './shared/component/products/productform/productform.component';
import { PagenotfoundComponent } from './shared/component/pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    UsersComponent,
    ProductsComponent,
    FairsComponent,
    ProductComponent,
    ProductformComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
