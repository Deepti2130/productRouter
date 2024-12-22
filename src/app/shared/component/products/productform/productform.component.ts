import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/shared/model/product';
import { ProductService } from 'src/app/shared/service/product.service';
import { UuidService } from 'src/app/shared/service/uuid.service';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.scss']
})
export class ProductformComponent implements OnInit {
productId! :string

productobj!:Iproduct

ProductForm!:FormGroup

isInEditmode:boolean = false
  constructor(
    private _routes:ActivatedRoute,
    private _productservice:ProductService,
    private _uuidservice:UuidService
  ) { }

  ngOnInit(): void {

    this.ProductForm = new FormGroup({
      name:new FormControl(null, Validators.required),
      price:new FormControl(null, Validators.required),
      offerprice:new FormControl(null, Validators.required),
      image:new FormControl(null, Validators.required),
      isAvailable:new FormControl(null, Validators.required),
      rating:new FormControl(null, Validators.required),
      noofitem:new FormControl(null, Validators.required),
      pstatus:new FormControl(null, Validators.required),
      canreturn:new FormControl(null, Validators.required),
    })


    this.productId = this._routes.snapshot.params['id']

    if(this.productId){
      this.isInEditmode = true

      this.productobj = this._productservice.fetchproduct(this.productId)

      this.ProductForm.patchValue({
        ...this.productobj,
        canreturn:this.productobj.canreturn? "Yes" :"No",
        isAvailable:this.productobj.isAvailable? "Yes":"No"
      })
    }
  }

  onAddproduct(){
    if(this.ProductForm.valid){

      let canreturnval = this.ProductForm.controls['canreturn'].value === "Yes"? 1:0


      let product:Iproduct={
       ...this.ProductForm.value,
       canreturn:canreturnval,
       id:this._uuidservice.generateUuid()
      }

      this._productservice.postproduct(product)
    }
  }


  onupdateproduct(){
    let updatedobj:Iproduct={
      ...this.ProductForm.value,
      canreturn:this.ProductForm.controls['canreturn'].value === "Yes" ? 1 :0,
      isAvailable:this.ProductForm.controls['canreturn'].value === "Yes" ? "true":"false",
      id:this.productId
    }

    this.ProductForm.reset()

    this._productservice.updatedproduct(updatedobj)
  }

}
