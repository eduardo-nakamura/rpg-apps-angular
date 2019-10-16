import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cards = [
    {
      imagem:'../../assets/dice.png',
      titulo:'Dice Roller',
      descricao:'Aplicativo para Rolar Dados',
      path:'dice-roller'
    },
    {
      imagem:'../../assets/init-tracker.png',
      titulo:'Initiative Tracker',
      descricao:'Aplicativo para determinar iniciativa',
      path:'init-tracker'
    },
    {
      imagem:'https://via.placeholder.com/300x300',
      titulo:'Intro',
      descricao:'Tela inicial do Angular',
      path:'intro'
    },
  ]
  constructor() { 
    
  }

  ngOnInit() {
    console.log(this.cards)
  }

}
