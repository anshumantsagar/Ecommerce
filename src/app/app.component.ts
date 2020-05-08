import { Component } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import {CommonService} from "./common.service"


//var apiUrlProduct = "http://localhost:5000/api/showProduct"
//var cartapi = "http://localhost:5000/api/cart"
 var apiUrlProduct = "/api/allproduct"
 var cartapi = "/api/cart"



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro';
  
  constructor(private http : HttpClient, private commonservice : CommonService){
    if(localStorage.email){
    console.log("email = ",localStorage.email)
    var reqobj = {
      email:localStorage.email
    }
    this.http.post(cartapi,reqobj).subscribe((response)=>{
      console.log("response got ",response)
      this.commonservice.carts.push(response["data"])
      console.log(this.commonservice.carts)
    },(error)=>{
      console.log("error in getting data ",error)
    })
  }
}




}