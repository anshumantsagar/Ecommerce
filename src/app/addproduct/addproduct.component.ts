import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';

var apiurl = "/api/addProducts"
//const apiurl = "http://localhost:5000/api/addproduct"


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
   productName = null
   brandName = null
   price = null
   quantity = null
   Category = null
   Seller = null
   Details = null
   Rating = null
   Image = null
   Reviews = null
   discount = null
  constructor(private http : HttpClient, private toastr:ToastrService) { }

  ngOnInit() {
  }

    addProduct(){
    var valid = true
    if(!this.productName){
      this.toastr.warning('product name is not present')
      valid = false
    }
    if(!this.brandName){
      this.toastr.warning('brand name not provided')
      valid = false
    }
    if(!this.price){
      this.toastr.warning('price not exist')
      valid = false
    }
    if(!this.quantity){
      this.toastr.warning('quantity is empty')
      valid = false
    }

    if(valid){
      var requestobj = {
        productName : this.productName,
        brandName : this.brandName,
        price : this.price,
        quantity : this.quantity,
        Category : this.Category,
        Seller : this.Seller,
        Details : this.Details,
        Rating : this.Rating,
        Image : this.Image,
        Reviews : this.Reviews,
        discount : this.discount
        
      }
      this.http.post(apiurl,requestobj).subscribe(
        (response)=>{
          console.log(response)
          this.toastr.success('data added')
        },(error)=>{
          console.log('error in adding data ',error)
          this.toastr.error('error adding data')
        })
    }
    
  }
}