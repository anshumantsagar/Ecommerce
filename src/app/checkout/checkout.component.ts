import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service'
import {HttpClient} from '@angular/common/http'
import {ToastrService} from 'ngx-toastr'

var cartapi ="/api/cart"
var orderapi = "/api/order"
// var cartapi = "http://localhost:5000/api/cart"
// var orderapi = "http://localhost:5000/api/order"

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
cartitems= []
totalprice = null

name
email
price
address
street
area
phone
pincode
items
city
state




  constructor(private common : CommonService, private http : HttpClient, private toastr : ToastrService) { 
    if(this.common.carts.length > 0){
      this.cartitems = this.common.carts
      this.cartitems[0].forEach((each)=>{
        this.totalprice = this.totalprice + each.productprice
      })
    }
    else {
      this.http.post(cartapi,{email:localStorage.email}).subscribe((response)=>{
        this.cartitems = response["data"]
        this.cartitems[0].forEach((each)=>{
          this.totalprice = this.totalprice + each.productprice
        })
      },(error)=>{
        console.log("error from cart api ",error)
      })
    }
  }
  placeorder(){
  console.log("click hora")
 var requestobj = {
  name : this.name,
  email: this.email,
  price:this.totalprice,
  address: this.address,
  street: this.street,
  area: this.area,
  phone: this.phone,
  pincode: this.pincode,
  items: this.cartitems[0],
  city: this.city,
  state:this.state
 }
 this.http.post(orderapi,requestobj).subscribe((response)=>{
   console.log("here")
  if(response["code"] == 100){
    console.log(response["data"])
    this.toastr.success("order placed")
    this.common.carts = []

  }
  else{
    console.log("error",response["error"])
  }
},(error)=>{
  console.log("erro in getting response ",error)
})
}
  ngOnInit() {
  }

}
