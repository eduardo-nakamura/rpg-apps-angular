import { Component, OnInit } from '@angular/core';
import { individualZeroFour, individualFiveTen, individualElevenSixteen, individualSeventeenPlus, hoardZeroFour, hoardFiveTen, hoardElevenSixteen, hoardSeventeenPlus, magTableA, gems10gp, gems50gp, gems100gp, gems500gp, gems1000gp, gems5000gp } from './lootObjs';

@Component({
  selector: 'app-loot-generator',
  templateUrl: './loot-generator.component.html',
  styleUrls: ['./loot-generator.component.css']
})
export class LootGeneratorComponent implements OnInit {
  lootType: number

  //https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/manipulating-complex-objects
  //https://www.freecodecamp.org/forum/t/freecodecamp-challenge-guide-profile-lookup/18259
  // numberDraw: Number

  constructor() { }

  ngOnInit() {

  }
  genLoot() {
    this.chooseLoot()
    
  }
  chooseLoot() {
    let numberDraw = Math.floor(Math.random() * (100 - 1 + 1)) + 1
    console.log(numberDraw)
    let chosenLoot: any
    switch (this.lootType) {      
      case 1:        
        numberDraw <= 30 ? chosenLoot = individualZeroFour[0] : numberDraw > 30 && numberDraw <= 60 ? chosenLoot = individualZeroFour[1] : numberDraw > 60 && numberDraw <= 70 ? chosenLoot = individualZeroFour[2] : numberDraw > 70 && numberDraw <= 95 ? chosenLoot = individualZeroFour[3] : chosenLoot = individualZeroFour[4]
        break;
      case 2:
        numberDraw <= 30 ? chosenLoot = individualFiveTen[0] : numberDraw > 30 && numberDraw <= 60 ? chosenLoot = individualFiveTen[1] : numberDraw > 60 && numberDraw <= 70 ? chosenLoot = individualFiveTen[2] : numberDraw > 70 && numberDraw <= 95 ? chosenLoot = individualFiveTen[3] : chosenLoot = individualFiveTen[4]
        break;
      case 3:
        numberDraw <= 20 ? chosenLoot = individualElevenSixteen[0] : numberDraw > 20 && numberDraw <= 35 ? chosenLoot = individualElevenSixteen[1] : numberDraw > 35 && numberDraw <= 75 ? chosenLoot = individualElevenSixteen[2] : chosenLoot = individualElevenSixteen[3]
        break;
      case 4:
        chosenLoot = individualSeventeenPlus
        break;
      case 5:
        chosenLoot = hoardZeroFour
        break;
      case 6:
        chosenLoot = hoardFiveTen
        break;
      case 7:
        chosenLoot = hoardElevenSixteen
        break;
      case 8:
        chosenLoot = hoardSeventeenPlus
        break;
    }
    console.log(chosenLoot)
  }
}