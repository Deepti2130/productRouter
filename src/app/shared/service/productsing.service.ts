import { Injectable } from '@angular/core';
import { Iproduct } from '../model/product';
import { ProductService } from './product.service';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsingService implements Resolve<Iproduct> {

  constructor(
    private _productservice:ProductService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<Iproduct>{
    //id of the product
   console.log(route['params'])
   let productId:string = route.params['id']
    //get id from params


    //API call using product service
    let obj = this._productservice.fetchproduct(productId)

    obj.subscribe(res => {
      console.log(res); // Logs the resolved data when it arrives
    });
    return obj;



    // console.log(obj)


    }

  }

