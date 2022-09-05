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
      imagem:'./assets/hook.png',
      titulo:'Game Hooks',
      descricao:'Alguns ganchos de história para iniciar uma aventura',
      path:'game-hook'
    },
    {
      imagem:'./assets/loot.png',
      titulo:'Loot Generator',
      descricao:'Determine os tesouros do seus jogadores aqui',
      path:'loot-generator'
    },
      {
      imagem:'./assets/npc-gen.png',
      titulo:'NPC Generator',
      descricao:'Gere personagens para sua campanha',
      path:'npc-generator'
    },
  ]
  constructor() { 
    
  }

  ngOnInit() {
    console.log(this.cards)
  }

}
