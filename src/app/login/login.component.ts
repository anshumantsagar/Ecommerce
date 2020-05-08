import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router'
import {ToastrService} from 'ngx-toastr'

var apiurl = '/api/login'
//const apiurl = "http://localhost:5000/api/login"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 email = null
 password = null

  constructor(private http : HttpClient,private router:Router,private toastr:ToastrService) { }

  ngOnInit() {
  }
login(){
  var requestobj = {
    email : this.email,
    password : this.password
  }
  this.http.post(apiurl,requestobj).subscribe((response)=>{
    console.log("response : " ,response)
    if(response["code"] == 400){
      if(response["data"]["role"] == "admin"){
        localStorage.adminemail = response["data"]["email"]
      }
      else{
        localStorage.email = response["data"]["email"]
      }
      localStorage.email = response["data"]["email"]
      localStorage.wallet = response["data"]["wallet"]
      localStorage.role = response["data"]["role"]
      localStorage.name = response["data"]["name"]
      console.log("login sucessfull")
      this.router.navigate(['/'])
    }
    else{
      this.toastr.error("login failed")
    }
    
  }
  
  ,
  (error)=>{
    console.log("error in login : ", error)
  })

}
}
