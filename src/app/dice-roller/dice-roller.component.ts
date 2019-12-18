import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice-roller',
  templateUrl: './dice-roller.component.html',
  styleUrls: ['./dice-roller.component.css']
})
export class DiceRollerComponent implements OnInit {
  // tipoDados = 'd4';
  // tipoDadoImg = '../../assets/d4.svg';
  // bonusDados = 0;
  // qtdDados = 1;
  // min = 1
  // max: number = 4
  // rolagem: number
  // filtraNumero: any
  // somaDados: number
  // totalDados = []  
  // objHistoricoDados = [] 
  // horarioRolagem: number 
  showD4 = false
  showD6 = false
  showD8 = false
  showD10 = false
  showD12 = false
  showD20 = false
  showD100 = false
  showDCustom = false
  teste = [
    {},
    {},
  ]
  bonus4 = 0
  bonus6 = 0
  bonus8 = 0
  bonus10 = 0
  bonus12 = 0
  bonus20 = 0
  bonus100 = 0
  bonusCustom = 0
  quant4 = 0  
  quant6 = 0
  quant8 = 0
  quant10 = 0
  quant12 = 0
  quant20 = 0
  quant100 = 0
  quantCustom = 0
  customDice = 0
  s: any
  sideDice: number
  histResults: any[] = []
  constructor() { }

  ngOnInit() {
  }
  rollDice(){
    if (this.quant4 !=0 ){      
      this.genNumber(4, this.quant4, this.bonus4)
    }
    if (this.quant6 !=0 ){      
      this.genNumber(6, this.quant6, this.bonus6)
    }
    if (this.quant8 !=0 ){      
      this.genNumber(8, this.quant8, this.bonus8)
    }
    if (this.quant10 !=0 ){      
      this.genNumber(10, this.quant10, this.bonus10)
    }
    if (this.quant12 !=0 ){
      this.genNumber(12, this.quant12, this.bonus12)
    }
    if (this.quant20 !=0 ){
      this.genNumber(20, this.quant20, this.bonus20)
    }
    if (this.quant100 !=0 ){
      this.genNumber(100, this.quant100, this.bonus100)
    }
    if (this.quantCustom !=0 && this.customDice != 0 ){
      // console.log('Custom')
      this.genNumber(this.customDice, this.quantCustom, this.bonusCustom)
    }
    this.resetDices()
  }

  genNumber(sideDice, quantDice, bonusDice){   
    
    let sideDiceInt = parseInt(sideDice)
    let diceSum = 0;
    let diceResult = '';
    let histDice:string
    for(let i = 0; i < quantDice; i++){         
      let GenDice   = (Math.floor((Math.random() * sideDiceInt) + 1))  
      diceResult += i+1 != quantDice ? GenDice + " + ": GenDice
      diceSum += GenDice
    }        
    if (bonusDice != 0){
      diceResult += " + " + bonusDice
      diceSum += bonusDice
      histDice = quantDice + 'd' + sideDice + ' + ' + bonusDice + ') ' + diceResult + ' = ' + diceSum
    } else {
      histDice = quantDice + 'd' + sideDice + ') ' + diceResult + ' = ' + diceSum
    }
    
    this.histResults.unshift(histDice.toString())
  }
  resetHist(){
    this.histResults = [];    
    this.resetDices()
  }
  resetDices(){
    this.showD4 = false
    this.showD6 = false
    this.showD8 = false
    this.showD10 = false
    this.showD12 = false
    this.showD20 = false
    this.showD100 = false
    this.showDCustom = false
    this.bonus4 = 0
    this.bonus6 = 0
    this.bonus8 = 0
    this.bonus10 = 0
    this.bonus12 = 0
    this.bonus20 = 0
    this.bonus100 = 0
    this.bonusCustom = 0
    this.quant4 = 0  
    this.quant6 = 0
    this.quant8 = 0
    this.quant10 = 0
    this.quant12 = 0
    this.quant20 = 0
    this.quant100 = 0
    this.quantCustom = 0
  }
  // rolar() {
  //   this.limparResultado()       
  //   this.gerarNumeros()
  //   this.somarBonus()   
  //   this.filtraNumero = this.totalDados.filter(a => Number(a))    
  //   this.somaDados = this.filtraNumero.reduce(function(a, b) {
  //     return a + b;
  //   });          
  //   this.totalDados.push('=',this.somaDados)    
  //   this.objHistoricoDados.unshift(this.totalDados)    
  // }

  // gerarNumeros(){
  //   for (let i = 0; i < this.qtdDados; i++){
  //     this.rolagem = (Math.floor((Math.random() * this.max) + this.min))  
  //     if(this.tipoDados == 'd20' && this.rolagem == 20) {
  //       alert('Acerto Crítico')
  //     } else if (this.tipoDados == 'd20' && this.rolagem == 1){
  //       alert('Erro Crítico')
  //     }
  //     if (this.totalDados.length == 0){
  //       this.totalDados.push(this.rolagem)
  //     } else {
  //       this.totalDados.push('+',this.rolagem)
  //     }  
  //   }
  // }
  
  // somarBonus(){
  //   if (this.bonusDados > 0){
  //     this.totalDados.push('+',this.bonusDados)
  //   }    
    
  // }

  // qtdDadosValue(event: KeyboardEvent) {
  //   this.qtdDados = (event.target as HTMLInputElement).valueAsNumber;
  // }
  // bonusDadosValue(event: KeyboardEvent) {
  //   this.bonusDados = (event.target as HTMLInputElement).valueAsNumber;
  // }

  // escolherDado(event: any) {
  //   this.tipoDados = event.target.value;
  //   switch (event.target.value){
  //     case "d4":
  //       this.tipoDadoImg = '../../assets/d4.svg';       
  //       this.max = 4;        
  //       break;
  //     case "d6":
  //       this.tipoDadoImg = '../../assets/d6.svg';       
  //       this.max = 6;        
  //       break;
  //       case "d8":
  //       this.tipoDadoImg = '../../assets/d8.svg';       
  //       this.max = 8;        
  //       break;
  //       case "d10":
  //       this.tipoDadoImg = '../../assets/d10.svg';       
  //       this.max = 10;
  //       break;
  //       case "d12":
  //       this.tipoDadoImg = '../../assets/d12.svg';       
  //       this.max = 12;      
  //       break;
  //       case "d20":
  //       this.tipoDadoImg = '../../assets/d20.svg';       
  //       this.max = 20;        
  //       break;
  //       case "d100":
  //       this.tipoDadoImg = '../../assets/d10.svg';       
  //       this.max = 100;        
  //       break;
  //   }
  // }
  // limparResultado(){
  //   this.totalDados = []
  // }
  // limparHistorico(){
  //   this.objHistoricoDados = [] 
  // }
}
