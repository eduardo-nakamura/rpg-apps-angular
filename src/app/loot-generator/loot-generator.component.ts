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
//   numberDraw <= 15 
// numberDraw > 15 && numberDraw <= 55
// numberDraw > 55

// aa ? bb : aa ? bb : aa ? bb : cc
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
        numberDraw <= 15 ? chosenLoot = individualSeventeenPlus[0] : numberDraw > 15 && numberDraw <= 55 ? chosenLoot = individualSeventeenPlus[1] : chosenLoot = individualSeventeenPlus[2]
        break;
      case 5:
      
        numberDraw <= 6  ? chosenLoot = hoardZeroFour[0] : numberDraw > 7 && numberDraw <= 16 ? chosenLoot = hoardZeroFour[1] : numberDraw > 17 && numberDraw <= 26 ? chosenLoot = hoardZeroFour[2] : numberDraw > 27 && numberDraw <= 36 ? chosenLoot = hoardZeroFour[3] : numberDraw > 37 && numberDraw <= 44 ? chosenLoot = hoardZeroFour[4] : numberDraw > 45 && numberDraw <= 52 ? chosenLoot = hoardZeroFour[5] : numberDraw > 53 && numberDraw <= 60 ? chosenLoot = hoardZeroFour[6] : numberDraw > 61 && numberDraw <= 65 ? chosenLoot = hoardZeroFour[7] : numberDraw > 66 && numberDraw <= 70 ? chosenLoot = hoardZeroFour[8] : numberDraw > 71 && numberDraw <= 75 ? chosenLoot = hoardZeroFour[9] : numberDraw > 76 && numberDraw <= 78 ? chosenLoot = hoardZeroFour[10] : numberDraw > 79 && numberDraw <= 80 ? chosenLoot = hoardZeroFour[11] : numberDraw > 81 && numberDraw <= 85 ? chosenLoot = hoardZeroFour[12] : numberDraw > 86 && numberDraw <= 92 ? chosenLoot = hoardZeroFour[13] : numberDraw > 93 && numberDraw <= 97 ? chosenLoot = hoardZeroFour[14] : numberDraw > 98 && numberDraw <= 99 ? chosenLoot = hoardZeroFour[15] : chosenLoot = hoardZeroFour[16]
        break;
      case 6:
        numberDraw <= 4 ? chosenLoot = hoardFiveTen[0] : numberDraw > 4 && numberDraw <= 10 ? chosenLoot = hoardFiveTen[1] : numberDraw > 10 && numberDraw <= 16 ? chosenLoot = hoardFiveTen[2] : numberDraw > 16 && numberDraw <= 22 ? chosenLoot = hoardFiveTen[3] : numberDraw > 22 && numberDraw <= 28 ? chosenLoot = hoardFiveTen[4] : numberDraw > 28 && numberDraw <= 32 ? chosenLoot = hoardFiveTen[5] : numberDraw > 32 && numberDraw <= 36 ? chosenLoot = hoardFiveTen[6] : numberDraw > 36 && numberDraw <= 40 ? chosenLoot = hoardFiveTen[7] : numberDraw > 40 && numberDraw <= 44 ? chosenLoot = hoardFiveTen[8] : numberDraw > 44 && numberDraw <= 49 ? chosenLoot = hoardFiveTen[9] : numberDraw > 49 && numberDraw <= 54 ? chosenLoot = hoardFiveTen[10] : numberDraw > 54 && numberDraw <= 59 ? chosenLoot = hoardFiveTen[11] : numberDraw > 59 && numberDraw <= 63 ? chosenLoot = hoardFiveTen[12] : numberDraw > 63 && numberDraw <= 66 ? chosenLoot = hoardFiveTen[13] : numberDraw > 66 && numberDraw <= 69 ? chosenLoot = hoardFiveTen[14] : numberDraw > 69 && numberDraw <= 72 ? chosenLoot = hoardFiveTen[15] : numberDraw > 72 && numberDraw <= 74 ? chosenLoot = hoardFiveTen[16] : numberDraw > 74 && numberDraw <= 76 ? chosenLoot = hoardFiveTen[17] : numberDraw > 76 && numberDraw <= 78 ? chosenLoot = hoardFiveTen[18] : numberDraw == 79 ? chosenLoot = hoardFiveTen[19] : numberDraw == 80 ? chosenLoot = hoardFiveTen[20] : numberDraw > 80 && numberDraw <= 84 ? chosenLoot = hoardFiveTen[21] : numberDraw > 84 && numberDraw <= 88 ? chosenLoot = hoardFiveTen[22] : numberDraw > 88 && numberDraw <= 91 ? chosenLoot = hoardFiveTen[23] : numberDraw > 91 && numberDraw <= 94 ? chosenLoot = hoardFiveTen[24] : numberDraw > 94 && numberDraw <= 96 ? chosenLoot = hoardFiveTen[25] : numberDraw > 96 && numberDraw <= 98 ? chosenLoot = hoardFiveTen[26] : numberDraw == 99 ? chosenLoot = hoardFiveTen[27] : chosenLoot = hoardFiveTen[28]
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