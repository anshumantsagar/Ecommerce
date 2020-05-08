import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {ToastrService} from 'ngx-toastr'

//var apiurl = "/api/forgotpass"
var apiurl = "http://localhost:5000/api/forgotpass"
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  email= null
  constructor(private http:HttpClient, private toastr:ToastrService ) { }

  ngOnInit() {
  }
  sendpass(){
  var requestobj = {
    email:this.email
  }
  this.http.post(apiurl,requestobj).subscribe((response)=>{
    console.log(response)
    if(response["code"] == 100){
      this.toastr.success('password sent to your email')
    }
    if(response["code"] == 404){
      this.toastr.error("something went wrong")
    }
    this.toastr.success("password sent at email")
  },(error)=>{})
}

}