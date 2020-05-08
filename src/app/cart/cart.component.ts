import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {HttpClient} from '@angular/common/http'
import {CommonService} from '../common.service'
import {ToastrService} from 'ngx-toastr'

 var cartapi = "/api/cart"
 var removeapi = "/api/remove"
//  var cartapi = "http://localhost:5000/api/cart"
//  var removeapi = "http://localhost:5000/api/remove"

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cartitems = []
isCartEmpty
totalprice = 0

  constructor(private router:Router,private http:HttpClient, private commonservice:CommonService, private toastr:ToastrService) {
    if(!localStorage.email){
      this.router.navigate(['/'])
    }
    else{
      if(this.commonservice.carts.length<=0){
        this.isCartEmpty=true
      }
      else{console.log("common service",this.commonservice.carts)
      this.cartitems = this.commonservice.carts
      console.log("cartitems",this.cartitems)}
      this.cartitems[0].forEach((each)=>{
        this.totalprice = this.totalprice + each.productprice
      })
      console.log(this.totalprice)
  }

}
remove(productid){
  var requestobj = {
    email : localStorage.email,
    id : productid
  }
  this.http.post(removeapi,requestobj).subscribe((response)=>{
    console.log(response)
    if(response["code"] == 100){
      this.toastr.success("item removed successfully")
      this.commonservice.carts.pop(response["data"])
    }
  },(error)=>{
    console.log("error in removing ",error)
  })
}

  ngOnInit() {
  }

}