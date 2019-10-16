import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice-roller',
  templateUrl: './dice-roller.component.html',
  styleUrls: ['./dice-roller.component.css']
})
export class DiceRollerComponent implements OnInit {
  tipoDados = 'd4';
  bonusDados = 0;
  qtdDados = 1;
  min = 1
  max: number
  constructor() { }

  ngOnInit() {
  }
  rolar() {
    //pegar infos
    switch (this.tipoDados) {
      case "d4":
        this.max = 4;
        break;
      case "d6":
        this.max = 6;
        break;
      case "d8":
        this.max = 8;
        break;
      case "d10":
        this.max = 10;
        break;
      case "d12":
        this.max = 12;
        break;
      case "d20":
        this.max = 20;
        break;
      case "d100":
        this.max = 100;
      break;
    }
    // gerar numeros
    console.log(this.bonusDados + this.qtdDados)

  }

  qtdDadosValue(event: KeyboardEvent) {
    this.qtdDados = (event.target as HTMLInputElement).valueAsNumber;
  }
  bonusDadosValue(event: KeyboardEvent) {
    this.bonusDados = (event.target as HTMLInputElement).valueAsNumber;
  }
  selectChangeHandler(event: any) {
    this.tipoDados = event.target.value;
  }
}
