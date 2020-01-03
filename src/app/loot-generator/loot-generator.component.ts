import { Component, OnInit } from '@angular/core';
import { individualZeroFour, individualFiveTen, individualElevenSixteen, individualSeventeenPlus, hoardZeroFour, hoardFiveTen, hoardElevenSixteen, hoardSeventeenPlus, gems10gp, gems50gp, gems100gp, gems500gp, gems1000gp, gems5000gp, magTableA,magTableB,magTableC,magTableD,magTableE,magTableF,magTableG,magTableH,magTableI } from './lootObjs';

@Component({
  selector: 'app-loot-generator',
  templateUrl: './loot-generator.component.html',
  styleUrls: ['./loot-generator.component.css']
})
export class LootGeneratorComponent implements OnInit {
  lootType: number
  loot: any  
  //https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/manipulating-complex-objects
  //https://www.freecodecamp.org/forum/t/freecodecamp-challenge-guide-profile-lookup/18259
  // numberDraw: Number

  constructor() { }

  ngOnInit() {

  }
  genLoot() {
    this.chooseLoot()
 
  }
  // numberDraw <= 15 
  // numberDraw > 15 && numberDraw <= 55
  // numberDraw > 55
  // aa ? bb : aa ? bb : aa ? bb : cc

  chooseLoot() {
    let numberDraw = Math.floor(Math.random() * (100 - 1 + 1)) + 1    
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
        numberDraw <= 3  ? chosenLoot = hoardElevenSixteen[0] : numberDraw > 3 && numberDraw <= 6 ? chosenLoot = hoardElevenSixteen[1] : numberDraw > 6 && numberDraw <= 10 ? chosenLoot = hoardElevenSixteen[2] : numberDraw > 10 && numberDraw <= 12 ? chosenLoot = hoardElevenSixteen[3] : numberDraw > 12 && numberDraw <= 15 ? chosenLoot = hoardElevenSixteen[4] : numberDraw > 15 && numberDraw <= 19 ? chosenLoot = hoardElevenSixteen[5] : numberDraw > 19 && numberDraw <= 23 ? chosenLoot = hoardElevenSixteen[6] : numberDraw > 23 && numberDraw <= 26 ? chosenLoot = hoardElevenSixteen[7] : numberDraw > 26 && numberDraw <= 29 ? chosenLoot = hoardElevenSixteen[8] : numberDraw > 29 && numberDraw <= 35 ? chosenLoot = hoardElevenSixteen[9] : numberDraw > 35 && numberDraw <= 40 ? chosenLoot = hoardElevenSixteen[10] : numberDraw > 40 && numberDraw <= 45 ? chosenLoot = hoardElevenSixteen[11] : numberDraw > 45 && numberDraw <= 50 ? chosenLoot = hoardElevenSixteen[12] : numberDraw > 50 && numberDraw <= 54 ? chosenLoot = hoardElevenSixteen[13] : numberDraw > 54 && numberDraw <= 58 ? chosenLoot = hoardElevenSixteen[14] : numberDraw > 58 && numberDraw <= 62 ? chosenLoot = hoardElevenSixteen[15] : numberDraw > 62 && numberDraw <= 66 ? chosenLoot = hoardElevenSixteen[16] : numberDraw > 66 && numberDraw <= 68 ? chosenLoot = hoardElevenSixteen[17] : numberDraw > 68 && numberDraw <= 70 ? chosenLoot = hoardElevenSixteen[18] : numberDraw > 70 && numberDraw <= 72 ? chosenLoot = hoardElevenSixteen[19] : numberDraw > 72 && numberDraw <= 74 ? chosenLoot = hoardElevenSixteen[20] : numberDraw > 74 && numberDraw <= 76 ? chosenLoot = hoardElevenSixteen[21] : numberDraw > 76 && numberDraw <= 78 ? chosenLoot = hoardElevenSixteen[22] : numberDraw > 78 && numberDraw <= 80 ? chosenLoot = hoardElevenSixteen[23] : numberDraw > 80 && numberDraw <= 82 ? chosenLoot = hoardElevenSixteen[24] : numberDraw > 82 && numberDraw <= 85 ? chosenLoot = hoardElevenSixteen[25] : numberDraw > 85 && numberDraw <= 88 ? chosenLoot = hoardElevenSixteen[26] : numberDraw > 88 && numberDraw <= 90 ? chosenLoot = hoardElevenSixteen[27] : numberDraw > 90 && numberDraw <= 92 ? chosenLoot = hoardElevenSixteen[28] : numberDraw > 92 && numberDraw <= 94 ? chosenLoot = hoardElevenSixteen[29] : numberDraw > 94 && numberDraw <= 96 ? chosenLoot = hoardElevenSixteen[30] : numberDraw > 96 && numberDraw <= 98 ? chosenLoot = hoardElevenSixteen[31] :  chosenLoot = hoardElevenSixteen[32]
        break;
      case 8:
        numberDraw <= 2  ? chosenLoot = hoardSeventeenPlus[0] : numberDraw > 3 && numberDraw <= 5 ? chosenLoot = hoardSeventeenPlus[1] : numberDraw > 5 && numberDraw <= 8 ? chosenLoot = hoardSeventeenPlus[2] : numberDraw > 8 && numberDraw <= 11 ? chosenLoot = hoardSeventeenPlus[3] : numberDraw > 11 && numberDraw <= 14 ? chosenLoot = hoardSeventeenPlus[4] : numberDraw > 14 && numberDraw <= 22 ? chosenLoot = hoardSeventeenPlus[5] : numberDraw > 22 && numberDraw <= 30 ? chosenLoot = hoardSeventeenPlus[6] : numberDraw > 30 && numberDraw <= 38 ? chosenLoot = hoardSeventeenPlus[7] : numberDraw > 38 && numberDraw <= 46 ? chosenLoot = hoardSeventeenPlus[8] : numberDraw > 46 && numberDraw <= 52 ? chosenLoot = hoardSeventeenPlus[9] : numberDraw > 52 && numberDraw <= 58 ? chosenLoot = hoardSeventeenPlus[10] : numberDraw > 58 && numberDraw <= 63 ? chosenLoot = hoardSeventeenPlus[11] : numberDraw > 63 && numberDraw <= 68 ? chosenLoot = hoardSeventeenPlus[12] : numberDraw == 69 ? chosenLoot = hoardSeventeenPlus[13] : numberDraw == 70 ? chosenLoot = hoardSeventeenPlus[14] : numberDraw == 71 ? chosenLoot = hoardSeventeenPlus[15] : numberDraw == 72 ? chosenLoot = hoardSeventeenPlus[16] : numberDraw > 72 && numberDraw <= 74 ? chosenLoot = hoardSeventeenPlus[17] : numberDraw > 74 && numberDraw <= 76 ? chosenLoot = hoardSeventeenPlus[18] : numberDraw > 76 && numberDraw <= 78 ? chosenLoot = hoardSeventeenPlus[19] : numberDraw > 78 && numberDraw <= 80 ? chosenLoot = hoardSeventeenPlus[20] : numberDraw > 81 && numberDraw <= 85 ? chosenLoot = hoardSeventeenPlus[21] : numberDraw > 86 && numberDraw <= 90 ? chosenLoot = hoardSeventeenPlus[22] : numberDraw > 91 && numberDraw <= 95 ? chosenLoot = hoardSeventeenPlus[23] : chosenLoot = hoardSeventeenPlus[24]
        break;
    }
    let generatedLoot = Object.keys(chosenLoot)    
    
    for (let i = 0; i < generatedLoot.length; i++){
      let totalLoot = 0
      let separate = chosenLoot[generatedLoot[i]].split("x")
      
      if (separate.length > 2){
        let magicItemA = []
        let regex = /MagItem./g;
        let random: number
        //console.log(separate[1].match(regex),separate[3].match(regex));
        let tableA = separate[1].match(regex)[0];
        let tableB = separate[3].match(regex)[0];
        switch(tableA) {
          case "MagItemA":
            random = Math.floor((Math.random() * 7) + 1)
            console.log(isNaN(random),random,magTableA[random])
            
            // magicItemA = magTableA[random]
            break;
          case "MagItemB":
            random = Math.floor((Math.random() * 35) + 1)
            console.log(isNaN(random),random,magTableA[random])
            // magicItemA = magTableA[random]
            break;
          case "MagItemC":
            random = Math.floor((Math.random() * 28) + 1)
            console.log(isNaN(random),random,magTableA[random])
            // magicItemA = magTableA[random]
            break;
          case "MagItemD":
            random = Math.floor((Math.random() * 16) + 1)
            console.log(isNaN(random),random,magTableA[random])
            // magicItemA = magTableA[random]
            break;
          case "MagItemE":
            random = Math.floor((Math.random() * 7) + 1)
            console.log(isNaN(random),random,magTableA[random])
            // magicItemA = magTableA[random]
            break;
          case "MagItemF":
            random = Math.floor((Math.random() * 60) + 1)
            console.log(isNaN(random),random,magTableA[random])
            // magicItemA = magTableA[random]
            break;
          case "MagItemG":            
            random = Math.floor((Math.random() * 88) + 1)
            console.log(isNaN(random),random,magTableA[random])
            // magicItemA = magTableA[random]
            break;
          case "MagItemH":            
            random = Math.floor((Math.random() * 69) + 1)
            console.log(isNaN(random),random,magTableA[random])
            // magicItemA = magTableA[random]
            break;
          case "MagItemI":            
            random = Math.floor((Math.random() * 52) + 1)
            console.log(isNaN(random),random,magTableA[random])
            // magicItemA = magTableA[random]
            break;
        }
        console.log('magicItemA',magicItemA)
      } else {
        console.log(separate)
      }
      
      // console.log('1d1xMagItemFx1d4xMagItemG'.split("x"))
      // console.log('1d1xMagItemF'.split("x"))
      // console.log('2d4x250art'.split("x"))
      // console.log('3d6x1000gems'.split("x"))
      // console.log('1d6x100'.split("x"))
      // console.log('separate',separate.length)
      // let dice = chosenLoot[generatedLoot[i]].split("d").map(octet => parseInt(octet, 10))
      // console.log('chosenLoot',chosenLoot)      
      // for (let i = 0; i < parseInt(dice[0]); i++) {
      //   let rolagem = Math.floor(Math.random() * parseInt(dice[1])) + 1;
      //   totalLoot += rolagem
      //   console.log(i,rolagem,totalLoot)
      // }
    }   
    
    // if (chosenLoot.pc){
    //   let dice = chosenLoot.chosenLoot[generatedLoot[i]].split("d").map(octet => parseInt(octet, 10));      
    // }
    //console.log(generatedLoot)
  }
}