import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import {ToastrService} from 'ngx-toastr'

var apiurl = "/api/signup"
//var apiurl = "http//localhost:5000/api/signup"

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email= null
  name= null
  password= null

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  ngOnInit() {
  }
  signup(){
  var requestobj = {
    email:this.email,
    password:this.password,
    name:this.name
  }
  console.log(requestobj)
  this.http.post(apiurl,requestobj).subscribe(
    (response)=>{
      console.log("response from signup api", response)
      if(response["code"] == 700){
      this.toastr.success("response came")
    }
    else{
      this.toastr.error("something went wrong")
    }

    },
    (error)=>{
      console.log("error from signup api",error)
      this.toastr.warning("invalid response")
    })
}

}
