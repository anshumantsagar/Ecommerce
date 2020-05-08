import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {HttpClient} from '@angular/common/http'
import {ToastrService} from 'ngx-toastr'

var apiurl = "/api/deleteaccount"
// var apiurl = "http//localhost:5000/api/deleteaccount"


@Component({
  selector: 'app-deleteaccount',
  templateUrl: './deleteaccount.component.html',
  styleUrls: ['./deleteaccount.component.css']
})
export class DeleteaccountComponent implements OnInit {
email= null
  constructor(private router:Router,private http:HttpClient,private toastr:ToastrService) { 
    console.log("constructor")
    if(!localStorage.email){
      this.router.navigate(['/'])
  } }

  ngOnInit() {
  }
  deleteAccount(){
  this.email = localStorage.email
  console.log(this.email)
  var requestobj = {
    email:this.email
  }
  this.http.post(apiurl,requestobj).subscribe((success)=>{
    console.log("account deleted successfully")
    this.toastr.success("account deleted successfuly")
    localStorage.clear()
    this.router.navigate(["/"])
  },(error)=>{
    console.log("error in delteting account ",error)
    this.toastr.error("Something went wrong")
  })
}
}