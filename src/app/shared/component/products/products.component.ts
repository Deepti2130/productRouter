import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../model/product';
import { Router } from '@angular/router';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


productInfo! : Array<Iproduct>


isAvailable : boolean = false
  constructor(
    private _productservice:ProductService

  ) { }

  ngOnInit(): void {
    this.productInfo = this._productservice.fetchAllproduct()
  }

}
