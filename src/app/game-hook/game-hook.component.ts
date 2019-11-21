import { Component, OnInit } from '@angular/core';
import gamehooks from '../../assets/gamehook.json';

@Component({
  selector: 'app-game-hook',
  templateUrl: './game-hook.component.html',
  styleUrls: ['./game-hook.component.css']
})
export class GameHookComponent implements OnInit {
  arrayHooks = gamehooks
  hookIndex: number
  min = 0
  max: number
  constructor() { }

  ngOnInit() {
    this.buttonHook()
  }

  buttonHook(){
    this.max = this.arrayHooks.length
    this.hookIndex = (Math.floor((Math.random() * this.max) + this.min))  
  }



}
