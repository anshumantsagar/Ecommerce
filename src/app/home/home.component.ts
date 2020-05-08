import { Component, OnInit, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';
//import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import {CommonService} from "../common.service"
var apiurl = "/api/showProduct"
//var apiurl = "http://localhost:5000/api/showProduct"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   products= null

  constructor(private Http:HttpClient, private commonservice: CommonService) {
    if(commonservice.products){
      this.products = this.commonservice.products
    }
    else{
      this.Http.get(apiurl).subscribe((response)=>{
        this.products =response["data"]
        this.commonservice = this.products
      console.log(this.products)
      },(error)=>{
        console.log("error in getting product api",error)
      })
    }
  
   }

  ngOnInit() {
  }

}
