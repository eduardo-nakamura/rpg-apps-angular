import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice-roller',
  templateUrl: './dice-roller.component.html',
  styleUrls: ['./dice-roller.component.css']
})
export class DiceRollerComponent implements OnInit {
  tipoDados: number
  bonusDados = '';
  qtdDados = '';
  constructor() { }

  ngOnInit() {
  }
  rolar(){
    //pegar infos
    console.log(document.getElementById("qtdDados"))
    
  }

  qtdDadosValue(event: KeyboardEvent) { // with type info
    this.qtdDados = (event.target as HTMLInputElement).value ;    
  }
  bonusDadosValue(event: KeyboardEvent) { // with type info
    this.bonusDados = (event.target as HTMLInputElement).value ;    
  }
}
