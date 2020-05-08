import { Component, OnInit , Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router'

//var apiurl = "http://localhost:5000/api/addproducts"
var apiurl = "/api/addproducts"

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product
  
  constructor(private http : HttpClient, private toastr:ToastrService, private router: Router) {
    
   }

  ngOnInit() {
    console.log("data mila wo ye ha",this.product)
  }
  showProduct(){
    var url = "/viewproduct/" + this.product.productid
    this.router.navigate([url])

  }
  


}