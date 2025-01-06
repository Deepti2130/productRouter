import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../model/product';
import { ActivatedRoute, Router } from '@angular/router';
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
    private _productservice:ProductService,
    private _routes:ActivatedRoute,
    private _router:Router

  ) {
    console.log('Products comp constructor')
    console.log(this._routes)
    this._routes.data
    .subscribe(res=>{
      console.log(res['productData'])
      this.productInfo = res['productData']
      this._router.navigate(['/products'])
    })


   }



  ngOnInit(): void {
    console.log('Products comp initialization')
      // this._productservice.fetchAllproduct()
      // .subscribe(res=>{
      //   console.log(res)
      //   this.productInfo = res
      // })
  }

}
