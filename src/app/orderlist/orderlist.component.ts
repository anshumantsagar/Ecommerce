import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Router} from '@angular/router'

const orderapi = "/api/getorder"
//const orderapi = "http://localhost:5000/api/getorder"

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {
orderlist = []
  constructor(private http:HttpClient, private router:Router) {
    if(!localStorage.adminemail){
      this.router.navigate(['/admin'])
    }
    else{
      this.http.get(orderapi).subscribe((response)=>{
        console.log(response["data"])
        this.orderlist = response["data"]
      },(error)=>{
        console.log("error ",error)
      })
    }
  }

  ngOnInit() {
  }

}