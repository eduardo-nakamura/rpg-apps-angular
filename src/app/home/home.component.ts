import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cards = [
    {
      imagem:'./assets/dice.png',
      
      titulo:'Dice Roller',
      descricao:'Aplicativo para Rolar Dados',
      path:'dice-roller'
    },
    {
      imagem:'./assets/init-tracker.png',
      
      titulo:'Initiative Tracker',
      descricao:'Aplicativo para determinar iniciativa',
      path:'init-tracker'
    },
    {
      imagem:'https://via.placeholder.com/300x300',
      titulo:'Game Hooks',
      descricao:'Alguns ganchos de história para iniciar uma aventura',
      path:'game-hook'
    },
    {
      imagem:'https://via.placeholder.com/300x300',
      titulo:'Loot Generator',
      descricao:'Determine os tesouros do seus jogadores aqui',
      path:'loot-generator'
    },
  ]
  constructor() { 
    
  }

  ngOnInit() {
    console.log(this.cards)
  }

}
