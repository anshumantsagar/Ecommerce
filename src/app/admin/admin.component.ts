import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {ToastrService} from 'ngx-toastr'
import {Router} from '@angular/router'

var loginurl = "/api/login"
//var loginurl = "http://localhost:5000/api/login"


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
email = null
password = null
incorrect = null
  constructor(private http:HttpClient,private toastr:ToastrService,private router:Router) {
    if(localStorage.adminemail){
      this.router.navigate(['/orderlist'])
    }
  }
login(){
  var requestobj = {
    email : this.email,
    password : this.password
  }
  this.http.post(loginurl,requestobj).subscribe((response)=>{
    console.log("response ",response)
    console.log(response)
    if(response["data"]["role"] == "admin"){
    this.toastr.success("login successfull")
    localStorage.adminemail = response["data"]["email"]
    localStorage.name = response["data"]["email"]
    this.router.navigate(['/orderlist'])
    }
    else{
      this.incorrect = true
    }
  },(error)=>{
    console.log("error ",error)
  })
}
  ngOnInit() {
  }

}