import { Component, OnInit } from '@angular/core';
// I import Location so that I can query the current path
import { Location } from "@angular/common";
// I also import Router so that I can subscribe to events
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ height: 0, opacity: 0 }),
            animate('1s ease-out', 
                    style({ height: 300, opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ height: 300, opacity: 1 }),
            animate('1s ease-in', 
                    style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class AppComponent implements OnInit{
  menuContent = [
    {router: 'dice-roller', title: 'Dice Roller',class:'fa-dice'},
    {router: 'init-tracker', title: 'Initiative Tracker',class:'fa-hourglass-half'},
    {router: 'game-hook', title: 'Game Hook',class:'fa-comments'},
    {router: 'loot-generator', title: 'Loot Generator',class:'fa-coins'},
    {router: 'npc-generator', title: 'NPC Generator',class:'fa-users'},
    {router: 'intro', title: 'Intro',class:'fa-rocket'}
  ]
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