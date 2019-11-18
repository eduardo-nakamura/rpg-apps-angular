import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice-roller',
  templateUrl: './dice-roller.component.html',
  styleUrls: ['./dice-roller.component.css']
})
export class DiceRollerComponent implements OnInit {
  tipoDados = 'd4';
  tipoDadoImg = '../../assets/d4.svg';
  bonusDados = 0;
  qtdDados = 1;
  min = 1
  max: number
  rolagem: number
  filtraNumero: any
  somaDados: number
  totalDados = []  
  objHistoricoDados = []  

  constructor() { }

  ngOnInit() {
  }
  rolar() {
    this.limparResultado()
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
    for (let i = 0; i < this.qtdDados; i++){
      this.rolagem = (Math.floor((Math.random() * this.max) + this.min))  
      if(this.tipoDados == 'd20' && this.rolagem == 20) {
        alert('Acerto Crítico')
      } else if (this.tipoDados == 'd20' && this.rolagem == 1){
        alert('Erro Crítico')
      }
      if (this.totalDados.length == 0){
        this.totalDados.push(this.rolagem)
      } else {
        this.totalDados.push('+',this.rolagem)
      }  
    }
    if (this.bonusDados > 0){
      this.totalDados.push('+',this.bonusDados)
    }    
    this.filtraNumero = this.totalDados.filter(a => Number(a))
    this.somaDados = this.filtraNumero.reduce(function(a, b) {
      return a + b;
    });      
    this.totalDados.push('=',this.somaDados)

    this.objHistoricoDados.unshift(this.totalDados)
    console.log(this.objHistoricoDados)
    
    
  }
  qtdDadosValue(event: KeyboardEvent) {
    this.qtdDados = (event.target as HTMLInputElement).valueAsNumber;
  }
  bonusDadosValue(event: KeyboardEvent) {
    this.bonusDados = (event.target as HTMLInputElement).valueAsNumber;
  }
  selectChangeHandler(event: any) {
    this.tipoDados = event.target.value;
    switch (event.target.value){
      case "d4":
        this.tipoDadoImg = '../../assets/d4.svg';       
        break;
      case "d6":
        this.tipoDadoImg = '../../assets/d6.svg';       
        break;
        case "d8":
        this.tipoDadoImg = '../../assets/d8.svg';       
        break;
        case "d10":
        this.tipoDadoImg = '../../assets/d10.svg';       
        break;
        case "d12":
        this.tipoDadoImg = '../../assets/d12.svg';       
        break;
        case "d20":
        this.tipoDadoImg = '../../assets/d20.svg';       
        break;
        case "d100":
        this.tipoDadoImg = '../../assets/d10.svg';       
        break;
    }
    // console.log(event.target.value)
  }
  limparResultado(){
    this.totalDados = []
  }
  limparHistorico(){
    this.objHistoricoDados = [] 
  }
}
