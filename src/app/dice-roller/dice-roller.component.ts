import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice-roller',
  templateUrl: './dice-roller.component.html',
  styleUrls: ['./dice-roller.component.css']
})
export class DiceRollerComponent implements OnInit {  
  showD4 = false
  showD6 = false
  showD8 = false
  showD10 = false
  showD12 = false
  showD20 = false
  showD100 = false
  showDCustom = false
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
  playAudio(){
    let diceSound = new Audio();
    diceSound.src = "../../assets/162456__kastenfrosch__dice.mp3"
    diceSound.load();
    diceSound.play();
  }
  rollDice(){
    this.playAudio()
    setTimeout(this.playAudio, 300)    
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
  
}
