import { Component, OnInit } from '@angular/core';
// I import Location so that I can query the current path
import { Location } from "@angular/common";
// I also import Router so that I can subscribe to events
import { Router } from "@angular/router";
import $ from "jquery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  route: string; 
  dataAtual = new Date().getFullYear();

  constructor(
    location: Location, 
    router: Router
  ) { 
    router.events.subscribe(val => {
      if (location.path() != "") {        
        this.route = location.path().split("/").pop();    
      } else {
        this.route = "Home";
      }
    });
  }

  
  ngOnInit() {
		console.log(this)
	}
}
console.log(this)
$(document).ready(function () {
  $("navbar-nav").find("li").on("click", "a", function () {
      $('.navbar-collapse.in').collapse('hide');
  });
});