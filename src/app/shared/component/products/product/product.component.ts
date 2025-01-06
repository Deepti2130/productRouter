import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/shared/model/product';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
productId! :string

productobj! :Iproduct
  constructor(
   private _routes:ActivatedRoute,
   private _productservice:ProductService,
   private _router:Router
  ) {
    console.log('singl prod constr')
    this._routes.data
    .subscribe(res=>{
      console.log(res)
      this.productobj = res['productobj']
    })
   }

  ngOnInit(): void {
    console.log('singl prod init')
    // we need id
    // this.productId = this._routes.snapshot.params['id']
    // // console.log(this.productId)

    // if(this.productId){
    //   this._productservice.fetchproduct(this.productId)
    //   .subscribe(res=>{
    //     // console.log(res)
    //     this.productobj = res
    //   })

      // }

      }

      Onremoveproduct(){
        this._productservice.Removeproduct(this.productId)
        .subscribe(res=>{
          console.log(res)
         this._router.navigate(['/products'])
        })
      }

    }














