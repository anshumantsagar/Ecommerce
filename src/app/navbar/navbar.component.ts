import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  projectname = "coer project"
  isuserloggedin = false
name = null
  constructor() { 
    if(localStorage.email){
      this.isuserloggedin = true
      this.name = localStorage.name
    }
  }

  ngOnInit() {
  }
  ngDoCheck(){
    if(localStorage.email){
      this.isuserloggedin = true
      this.name = localStorage
    }
  }
logout(){
  this.isuserloggedin = false
  localStorage.clear()
}
}
