import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {CommonService} from '../common.service'

//var addtocartapi = "http://localhost:5000/api/addtocart"
var addtocartapi = "/api/addtocart"


@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  product = null;
  productalreadyincart = null;

  constructor(private activatedroute : ActivatedRoute,private commonservice : CommonService , private http : HttpClient, private toastr: ToastrService, private router :Router) {
    
    console.log("current value",this.activatedroute.snapshot)
    var productid = this.activatedroute.snapshot.params.id;
    //var apiurl = "http://localhost:5000/api/product/" + productid
    var apiurl = "/api/product" + productid
    console.log(apiurl)
    this.http.get(apiurl).subscribe((response)=>{
      console.log("response from get product api", response)
      this.product = response["data"]
      this.commonservice.carts.forEach((each) =>{
        if(each[0].product == this.product["id"]){
          this.productalreadyincart = true
        }
      })
      console.log(this.product)
    },
  (error)=>{
      console.log("error in getting product detail" , error)
  })
   }

  ngOnInit() {
  }
  addToCart(){
    if(localStorage.email){
      var requestobj = {
        email:localStorage.email,
        productname: this.product.productName,
        productprice: this.product.price,
        productimage: this.product.Image,
        productid : this.product.productid
      }
      console.log(requestobj)
      this.http.post(addtocartapi,requestobj).subscribe((response)=>{
        if(response["code"]==200){
          this.toastr.success("added to cart")
        }
      },(error)=>{
        console.log("error in adding ")
        this.toastr.error("error in adding to cart")
      })
    }
    else{
      this.router.navigate(['/login'])
    }
  }
  buynow(){
    this.addToCart()
    this.router.navigate(['/cart'])

  }

}


// import { Component, OnInit } from '@angular/core';
// import {ActivatedRoute} from "@angular/router"
// import {HttpClient} from "@angular/common/http"


// @Component({
//   selector: 'app-productdetail',
//   templateUrl: './productdetail.component.html',
//   styleUrls: ['./productdetail.component.css']
// })
// export class ProductdetailComponent implements OnInit {

//   product = {}
//   constructor(private http: HttpClient , private activatedroute : ActivatedRoute) {
//     console.log("current route ki details" , this.activatedroute.snapshot)
//     var productid = this.activatedroute.snapshot.params.id;
// var apiurl = "http://localhost:4000/api/product/"+ productid

//     this.http.get(apiurl).subscribe((response)=>{
//       console.log("response from get product api", response)
//       this.product = response["data"]
//     },
//   (error)=>{
//       console.log("error in getting product detail" , error)
//   })
//    }

//   ngOnInit() {
//   }

// }
