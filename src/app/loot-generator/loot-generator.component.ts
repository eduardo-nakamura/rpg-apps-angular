import { Component, OnInit } from '@angular/core';
import { individualZeroFour, individualFiveTen, individualElevenSixteen, individualSeventeenPlus, hoardZeroFour, hoardFiveTen, hoardElevenSixteen, hoardSeventeenPlus } from './lootObjs';
import { LootObj } from './lootclass';

@Component({
  selector: 'app-loot-generator',
  templateUrl: './loot-generator.component.html',
  styleUrls: ['./loot-generator.component.css']
})
export class LootGeneratorComponent implements OnInit {
  lootOptions: any
  lootDraw: any
  lootType: Number  
  // numberDraw: Number
  constructor() { }

  ngOnInit() {

  }
  genLoot() {
    this.chooseLoot();
  }
  lootRoll(){
    // for (let i = 0; i <= ){

    // }
  }
  chooseLoot() {
    let numberDraw = Math.floor(Math.random() * 100) + 1;
    switch (this.lootType) {
      case 1:
        if (numberDraw <= 30) {
          this.lootDraw = individualZeroFour[0]
        } else if (numberDraw >= 31 && numberDraw <= 60) {
          this.lootDraw = individualZeroFour[1]
        } else if (numberDraw >= 61 && numberDraw <= 70) {
          this.lootDraw = individualZeroFour[2]
        } else if (numberDraw >= 71 && numberDraw <= 95) {
          this.lootDraw = individualZeroFour[3]
        } else if (numberDraw >= 96 && numberDraw <= 100) {
          this.lootDraw = individualZeroFour[4]
        }
        break;
      case 2:
        if (numberDraw <= 30) {
          this.lootDraw = individualFiveTen[0]
        } else if (numberDraw >= 31 && numberDraw <= 60) {
          this.lootDraw = individualFiveTen[1]
        } else if (numberDraw >= 61 && numberDraw <= 70) {
          this.lootDraw = individualFiveTen[2]
        } else if (numberDraw >= 71 && numberDraw <= 95) {
          this.lootDraw = individualFiveTen[3]
        } else if (numberDraw >= 96 && numberDraw <= 100) {
          this.lootDraw = individualFiveTen[4]
        }
        break;
      case 3:
        if (numberDraw <= 20) {
          this.lootDraw = individualElevenSixteen[0]
        } else if (numberDraw >= 21 && numberDraw <= 35) {
          this.lootDraw = individualElevenSixteen[1]
        } else if (numberDraw >= 36 && numberDraw <= 75) {
          this.lootDraw = individualElevenSixteen[2]
        } else if (numberDraw >= 76 && numberDraw <= 100) {
          this.lootDraw = individualElevenSixteen[3]
        }
        break;
      case 4:
        if (numberDraw <= 15) {
          this.lootDraw = individualSeventeenPlus[0]
        } else if (numberDraw >= 16 && numberDraw <= 55) {
          this.lootDraw = individualSeventeenPlus[1]
        } else if (numberDraw >= 56) {
          this.lootDraw = individualSeventeenPlus[2]
        }
        break;
      case 5:
        if (numberDraw <= 6) {
          this.lootDraw = hoardZeroFour[0]
        } else if (numberDraw >= 7 && numberDraw <= 16) {
          this.lootDraw = hoardZeroFour[1]
        } else if (numberDraw >= 17 && numberDraw <= 26) {
          this.lootDraw = hoardZeroFour[2]
        } else if (numberDraw >= 27 && numberDraw <= 36) {
          this.lootDraw = hoardZeroFour[3]
        } else if (numberDraw >= 37 && numberDraw <= 44) {
          this.lootDraw = hoardZeroFour[4]
        } else if (numberDraw >= 45 && numberDraw <= 52) {
          this.lootDraw = hoardZeroFour[5]
        } else if (numberDraw >= 53 && numberDraw <= 60) {
          this.lootDraw = hoardZeroFour[6]
        } else if (numberDraw >= 61 && numberDraw <= 65) {
          this.lootDraw = hoardZeroFour[7]
        } else if (numberDraw >= 66 && numberDraw <= 70) {
          this.lootDraw = hoardZeroFour[8]
        } else if (numberDraw >= 71 && numberDraw <= 75) {
          this.lootDraw = hoardZeroFour[9]
        } else if (numberDraw >= 76 && numberDraw <= 78) {
          this.lootDraw = hoardZeroFour[10]
        } else if (numberDraw >= 79 && numberDraw <= 80) {
          this.lootDraw = hoardZeroFour[11]
        } else if (numberDraw >= 81 && numberDraw <= 85) {
          this.lootDraw = hoardZeroFour[12]
        } else if (numberDraw >= 86 && numberDraw <= 92) {
          this.lootDraw = hoardZeroFour[13]
        } else if (numberDraw >= 93 && numberDraw <= 97) {
          this.lootDraw = hoardZeroFour[14]
        } else if (numberDraw >= 98 && numberDraw <= 99) {
          this.lootDraw = hoardZeroFour[15]
        } else if (numberDraw = 100) {
          this.lootDraw = hoardZeroFour[16]
        }
        break;
      case 6:
        if (numberDraw <= 4) {
          this.lootDraw = hoardFiveTen[0]
        } else if (numberDraw >= 5 && numberDraw <= 10) {
          this.lootDraw = hoardFiveTen[1]
        } else if (numberDraw >= 11 && numberDraw <= 16) {
          this.lootDraw = hoardFiveTen[2]
        } else if (numberDraw >= 17 && numberDraw <= 22) {
          this.lootDraw = hoardFiveTen[3]
        } else if (numberDraw >= 23 && numberDraw <= 28) {
          this.lootDraw = hoardFiveTen[4]
        } else if (numberDraw >= 29 && numberDraw <= 32) {
          this.lootDraw = hoardFiveTen[5]
        } else if (numberDraw >= 33 && numberDraw <= 36) {
          this.lootDraw = hoardFiveTen[6]
        } else if (numberDraw >= 37 && numberDraw <= 40) {
          this.lootDraw = hoardFiveTen[7]
        } else if (numberDraw >= 41 && numberDraw <= 44) {
          this.lootDraw = hoardFiveTen[8]
        } else if (numberDraw >= 45 && numberDraw <= 49) {
          this.lootDraw = hoardFiveTen[9]
        } else if (numberDraw >= 50 && numberDraw <= 54) {
          this.lootDraw = hoardFiveTen[10]
        } else if (numberDraw >= 55 && numberDraw <= 59) {
          this.lootDraw = hoardFiveTen[11]
        } else if (numberDraw >= 60 && numberDraw <= 63) {
          this.lootDraw = hoardFiveTen[12]
        } else if (numberDraw >= 64 && numberDraw <= 66) {
          this.lootDraw = hoardFiveTen[13]
        } else if (numberDraw >= 67 && numberDraw <= 69) {
          this.lootDraw = hoardFiveTen[14]
        } else if (numberDraw >= 70 && numberDraw <= 72) {
          this.lootDraw = hoardFiveTen[15]
        } else if (numberDraw >= 73 && numberDraw <= 74) {
          this.lootDraw = hoardFiveTen[16]
        } else if (numberDraw >= 75 && numberDraw <= 76) {
          this.lootDraw = hoardFiveTen[17]
        } else if (numberDraw >= 77 && numberDraw <= 78) {
          this.lootDraw = hoardFiveTen[18]
        } else if (numberDraw = 79) {
          this.lootDraw = hoardFiveTen[19]
        } else if (numberDraw = 80) {
          this.lootDraw = hoardFiveTen[20]
        } else if (numberDraw >= 81 && numberDraw <= 84) {
          this.lootDraw = hoardFiveTen[21]
        } else if (numberDraw >= 85 && numberDraw <= 88) {
          this.lootDraw = hoardFiveTen[22]
        } else if (numberDraw >= 89 && numberDraw <= 91) {
          this.lootDraw = hoardFiveTen[23]
        } else if (numberDraw >= 92 && numberDraw <= 94) {
          this.lootDraw = hoardFiveTen[24]
        } else if (numberDraw >= 95 && numberDraw <= 96) {
          this.lootDraw = hoardFiveTen[25]
        } else if (numberDraw >= 97 && numberDraw <= 98) {
          this.lootDraw = hoardFiveTen[26]
        } else if (numberDraw = 99) {
          this.lootDraw = hoardFiveTen[27]
        } else if (numberDraw = 100) {
          this.lootDraw = hoardFiveTen[28]
        }
        break;
      case 7:
        if (numberDraw <= 3) {
          this.lootDraw = hoardElevenSixteen[0]
        } else if (numberDraw >= 4 && numberDraw <= 6) {
          this.lootDraw = hoardElevenSixteen[1]
        } else if (numberDraw >= 7 && numberDraw <= 10) {
          this.lootDraw = hoardElevenSixteen[2]
        } else if (numberDraw >= 11 && numberDraw <= 12) {
          this.lootDraw = hoardElevenSixteen[3]
        } else if (numberDraw >= 13 && numberDraw <= 15) {
          this.lootDraw = hoardElevenSixteen[4]
        } else if (numberDraw >= 16 && numberDraw <= 19) {
          this.lootDraw = hoardElevenSixteen[5]
        } else if (numberDraw >= 20 && numberDraw <= 23) {
          this.lootDraw = hoardElevenSixteen[6]
        } else if (numberDraw >= 24 && numberDraw <= 26) {
          this.lootDraw = hoardElevenSixteen[7]
        } else if (numberDraw >= 27 && numberDraw <= 29) {
          this.lootDraw = hoardElevenSixteen[8]
        } else if (numberDraw >= 30 && numberDraw <= 35) {
          this.lootDraw = hoardElevenSixteen[9]
        } else if (numberDraw >= 36 && numberDraw <= 40) {
          this.lootDraw = hoardElevenSixteen[10]
        } else if (numberDraw >= 41 && numberDraw <= 45) {
          this.lootDraw = hoardElevenSixteen[11]
        } else if (numberDraw >= 46 && numberDraw <= 50) {
          this.lootDraw = hoardElevenSixteen[12]
        } else if (numberDraw >= 51 && numberDraw <= 54) {
          this.lootDraw = hoardElevenSixteen[13]
        } else if (numberDraw >= 55 && numberDraw <= 58) {
          this.lootDraw = hoardElevenSixteen[14]
        } else if (numberDraw >= 59 && numberDraw <= 62) {
          this.lootDraw = hoardElevenSixteen[15]
        } else if (numberDraw >= 63 && numberDraw <= 66) {
          this.lootDraw = hoardElevenSixteen[16]
        } else if (numberDraw >= 67 && numberDraw <= 68) {
          this.lootDraw = hoardElevenSixteen[17]
        } else if (numberDraw >= 69 && numberDraw <= 70) {
          this.lootDraw = hoardElevenSixteen[18]
        } else if (numberDraw >= 71 && numberDraw <= 72) {
          this.lootDraw = hoardElevenSixteen[19]
        } else if (numberDraw >= 73 && numberDraw <= 74) {
          this.lootDraw = hoardElevenSixteen[20]
        } else if (numberDraw >= 75 && numberDraw <= 76) {
          this.lootDraw = hoardElevenSixteen[21]
        } else if (numberDraw >= 77 && numberDraw <= 78) {
          this.lootDraw = hoardElevenSixteen[22]
        } else if (numberDraw >= 79 && numberDraw <= 80) {
          this.lootDraw = hoardElevenSixteen[23]
        } else if (numberDraw >= 81 && numberDraw <= 82) {
          this.lootDraw = hoardElevenSixteen[24]
        } else if (numberDraw >= 83 && numberDraw <= 85) {
          this.lootDraw = hoardElevenSixteen[25]
        } else if (numberDraw >= 86 && numberDraw <= 88) {
          this.lootDraw = hoardElevenSixteen[26]
        } else if (numberDraw >= 89 && numberDraw <= 90) {
          this.lootDraw = hoardElevenSixteen[27]
        } else if (numberDraw >= 91 && numberDraw <= 92) {
          this.lootDraw = hoardElevenSixteen[28]
        } else if (numberDraw >= 93 && numberDraw <= 94) {
          this.lootDraw = hoardElevenSixteen[29]
        } else if (numberDraw >= 95 && numberDraw <= 96) {
          this.lootDraw = hoardElevenSixteen[30]
        } else if (numberDraw >= 97 && numberDraw <= 98) {
          this.lootDraw = hoardElevenSixteen[31]
        } else if (numberDraw >= 99) {
          this.lootDraw = hoardElevenSixteen[32]
        }
        break;
      case 8:
        if (numberDraw <= 2) {
          this.lootDraw = hoardSeventeenPlus[0]
        } else if (numberDraw >= 3 && numberDraw <= 5) {
          this.lootDraw = hoardSeventeenPlus[1]
        } else if (numberDraw >= 6 && numberDraw <= 8) {
          this.lootDraw = hoardSeventeenPlus[2]
        } else if (numberDraw >= 9 && numberDraw <= 11) {
          this.lootDraw = hoardSeventeenPlus[3]
        } else if (numberDraw >= 12 && numberDraw <= 14) {
          this.lootDraw = hoardSeventeenPlus[4]
        } else if (numberDraw >= 15 && numberDraw <= 22) {
          this.lootDraw = hoardSeventeenPlus[5]
        } else if (numberDraw >= 23 && numberDraw <= 30) {
          this.lootDraw = hoardSeventeenPlus[6]
        } else if (numberDraw >= 31 && numberDraw <= 38) {
          this.lootDraw = hoardSeventeenPlus[7]
        } else if (numberDraw >= 39 && numberDraw <= 46) {
          this.lootDraw = hoardSeventeenPlus[8]
        } else if (numberDraw >= 47 && numberDraw <= 52) {
          this.lootDraw = hoardSeventeenPlus[9]
        } else if (numberDraw >= 53 && numberDraw <= 58) {
          this.lootDraw = hoardSeventeenPlus[10]
        } else if (numberDraw >= 59 && numberDraw <= 63) {
          this.lootDraw = hoardSeventeenPlus[11]
        } else if (numberDraw >= 64 && numberDraw <= 68) {
          this.lootDraw = hoardSeventeenPlus[12]
        } else if (numberDraw = 69) {
          this.lootDraw = hoardSeventeenPlus[13]
        } else if (numberDraw = 70) {
          this.lootDraw = hoardSeventeenPlus[14]
        } else if (numberDraw = 71) {
          this.lootDraw = hoardSeventeenPlus[15]
        } else if (numberDraw = 72) {
          this.lootDraw = hoardSeventeenPlus[16]
        } else if (numberDraw >= 73 && numberDraw <= 74) {
          this.lootDraw = hoardSeventeenPlus[17]
        } else if (numberDraw >= 75 && numberDraw <= 76) {
          this.lootDraw = hoardSeventeenPlus[18]
        } else if (numberDraw >= 77 && numberDraw <= 78) {
          this.lootDraw = hoardSeventeenPlus[19]
        } else if (numberDraw >= 79 && numberDraw <= 80) {
          this.lootDraw = hoardSeventeenPlus[20]
        } else if (numberDraw >= 81 && numberDraw <= 85) {
          this.lootDraw = hoardSeventeenPlus[21]
        } else if (numberDraw >= 86 && numberDraw <= 90) {
          this.lootDraw = hoardSeventeenPlus[22]
        } else if (numberDraw >= 91 && numberDraw <= 95) {
          this.lootDraw = hoardSeventeenPlus[23]
        } else if (numberDraw >= 96) {
          this.lootDraw = hoardSeventeenPlus[24]
        }
        break;
      default:
        this.lootOptions = '';
    }
    //
  }
  
}
