import { Component, OnInit } from '@angular/core';
import { individualZeroFour, individualFiveTen, individualElevenSixteen, individualSeventeenPlus, hoardZeroFour, hoardFiveTen, hoardElevenSixteen, hoardSeventeenPlus, magTableA, gems10gp,gems50gp,gems100gp,gems500gp,gems1000gp,gems5000gp } from './lootObjs';

@Component({
  selector: 'app-loot-generator',
  templateUrl: './loot-generator.component.html',
  styleUrls: ['./loot-generator.component.css']
})
export class LootGeneratorComponent implements OnInit {
  lootOptions: any
  lootDraw: any
  lootType: Number
  filterLoot: any
  resultLoot = {
    "pc": 0,
    "pp": 0,
    "pe": 0,
    "po": 0,
    "pl": 0,
    "gemArt": "",
    "magicItems": ""
  }

//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/manipulating-complex-objects
  // numberDraw: Number

  constructor() { }

  ngOnInit() {

  }
  genLoot() {
    this.resetLoot()
    this.chooseLoot();
    this.lootGen()
    // console.log(this.filterLoot)
    // console.log(this.resultLoot)
  }
  resetLoot() {
    this.resultLoot.pc = 0;
    this.resultLoot.pp = 0;
    this.resultLoot.pe = 0;
    this.resultLoot.po = 0;
    this.resultLoot.pl = 0;
    this.resultLoot.gemArt = "";
    this.resultLoot.magicItems = "";
  }
  chooseLoot() {
    // Jogar d100
    let numberDraw = Math.floor(Math.random() * 100) + 1;

    // Definir Tipo de Tesouro
    let chosenLoot: any
    switch (this.lootType) {
      case 1:
        if (numberDraw <= 30) {
          chosenLoot = individualZeroFour[0]
        } else if (numberDraw >= 31 && numberDraw <= 60) {
          chosenLoot = individualZeroFour[1]
        } else if (numberDraw >= 61 && numberDraw <= 70) {
          chosenLoot = individualZeroFour[2]
        } else if (numberDraw >= 71 && numberDraw <= 95) {
          chosenLoot = individualZeroFour[3]
        } else if (numberDraw >= 96) {
          chosenLoot = individualZeroFour[4]
        }
        break;
      case 2:
        if (numberDraw <= 30) {
          chosenLoot = individualFiveTen[0]
        } else if (numberDraw >= 31 && numberDraw <= 60) {
          chosenLoot = individualFiveTen[1]
        } else if (numberDraw >= 61 && numberDraw <= 70) {
          chosenLoot = individualFiveTen[2]
        } else if (numberDraw >= 71 && numberDraw <= 95) {
          chosenLoot = individualFiveTen[3]
        } else if (numberDraw >= 96) {
          chosenLoot = individualFiveTen[4]
        }
        break;
      case 3:
        if (numberDraw <= 20) {
          chosenLoot = individualElevenSixteen[0]
        } else if (numberDraw >= 21 && numberDraw <= 35) {
          chosenLoot = individualElevenSixteen[1]
        } else if (numberDraw >= 36 && numberDraw <= 75) {
          chosenLoot = individualElevenSixteen[2]
        } else if (numberDraw >= 76) {
          chosenLoot = individualElevenSixteen[3]
        }
        break;
      case 4:
        if (numberDraw <= 15) {
          chosenLoot = individualSeventeenPlus[0]
        } else if (numberDraw >= 16 && numberDraw <= 55) {
          chosenLoot = individualSeventeenPlus[1]
        } else if (numberDraw >= 56) {
          chosenLoot = individualSeventeenPlus[2]
        }
        break;
      case 5:
        if (numberDraw <= 6) {
          chosenLoot = hoardZeroFour[0]
        } else if (numberDraw >= 7 && numberDraw <= 16) {
          chosenLoot = hoardZeroFour[1]
        } else if (numberDraw >= 17 && numberDraw <= 26) {
          chosenLoot = hoardZeroFour[2]
        } else if (numberDraw >= 27 && numberDraw <= 36) {
          chosenLoot = hoardZeroFour[3]
        } else if (numberDraw >= 37 && numberDraw <= 44) {
          chosenLoot = hoardZeroFour[4]
        } else if (numberDraw >= 45 && numberDraw <= 52) {
          chosenLoot = hoardZeroFour[5]
        } else if (numberDraw >= 53 && numberDraw <= 60) {
          chosenLoot = hoardZeroFour[6]
        } else if (numberDraw >= 61 && numberDraw <= 65) {
          chosenLoot = hoardZeroFour[7]
        } else if (numberDraw >= 66 && numberDraw <= 70) {
          chosenLoot = hoardZeroFour[8]
        } else if (numberDraw >= 71 && numberDraw <= 75) {
          chosenLoot = hoardZeroFour[9]
        } else if (numberDraw >= 76 && numberDraw <= 78) {
          chosenLoot = hoardZeroFour[10]
        } else if (numberDraw >= 79 && numberDraw <= 80) {
          chosenLoot = hoardZeroFour[11]
        } else if (numberDraw >= 81 && numberDraw <= 85) {
          chosenLoot = hoardZeroFour[12]
        } else if (numberDraw >= 86 && numberDraw <= 92) {
          chosenLoot = hoardZeroFour[13]
        } else if (numberDraw >= 93 && numberDraw <= 97) {
          chosenLoot = hoardZeroFour[14]
        } else if (numberDraw >= 98 && numberDraw <= 99) {
          chosenLoot = hoardZeroFour[15]
        } else if (numberDraw = 100) {
          chosenLoot = hoardZeroFour[16]
        }
        break;
      case 6:
        if (numberDraw <= 4) {
          chosenLoot = hoardFiveTen[0]
        } else if (numberDraw >= 5 && numberDraw <= 10) {
          chosenLoot = hoardFiveTen[1]
        } else if (numberDraw >= 11 && numberDraw <= 16) {
          chosenLoot = hoardFiveTen[2]
        } else if (numberDraw >= 17 && numberDraw <= 22) {
          chosenLoot = hoardFiveTen[3]
        } else if (numberDraw >= 23 && numberDraw <= 28) {
          chosenLoot = hoardFiveTen[4]
        } else if (numberDraw >= 29 && numberDraw <= 32) {
          chosenLoot = hoardFiveTen[5]
        } else if (numberDraw >= 33 && numberDraw <= 36) {
          chosenLoot = hoardFiveTen[6]
        } else if (numberDraw >= 37 && numberDraw <= 40) {
          chosenLoot = hoardFiveTen[7]
        } else if (numberDraw >= 41 && numberDraw <= 44) {
          chosenLoot = hoardFiveTen[8]
        } else if (numberDraw >= 45 && numberDraw <= 49) {
          chosenLoot = hoardFiveTen[9]
        } else if (numberDraw >= 50 && numberDraw <= 54) {
          chosenLoot = hoardFiveTen[10]
        } else if (numberDraw >= 55 && numberDraw <= 59) {
          chosenLoot = hoardFiveTen[11]
        } else if (numberDraw >= 60 && numberDraw <= 63) {
          chosenLoot = hoardFiveTen[12]
        } else if (numberDraw >= 64 && numberDraw <= 66) {
          chosenLoot = hoardFiveTen[13]
        } else if (numberDraw >= 67 && numberDraw <= 69) {
          chosenLoot = hoardFiveTen[14]
        } else if (numberDraw >= 70 && numberDraw <= 72) {
          chosenLoot = hoardFiveTen[15]
        } else if (numberDraw >= 73 && numberDraw <= 74) {
          chosenLoot = hoardFiveTen[16]
        } else if (numberDraw >= 75 && numberDraw <= 76) {
          chosenLoot = hoardFiveTen[17]
        } else if (numberDraw >= 77 && numberDraw <= 78) {
          chosenLoot = hoardFiveTen[18]
        } else if (numberDraw = 79) {
          chosenLoot = hoardFiveTen[19]
        } else if (numberDraw = 80) {
          chosenLoot = hoardFiveTen[20]
        } else if (numberDraw >= 81 && numberDraw <= 84) {
          chosenLoot = hoardFiveTen[21]
        } else if (numberDraw >= 85 && numberDraw <= 88) {
          chosenLoot = hoardFiveTen[22]
        } else if (numberDraw >= 89 && numberDraw <= 91) {
          chosenLoot = hoardFiveTen[23]
        } else if (numberDraw >= 92 && numberDraw <= 94) {
          chosenLoot = hoardFiveTen[24]
        } else if (numberDraw >= 95 && numberDraw <= 96) {
          chosenLoot = hoardFiveTen[25]
        } else if (numberDraw >= 97 && numberDraw <= 98) {
          chosenLoot = hoardFiveTen[26]
        } else if (numberDraw = 99) {
          chosenLoot = hoardFiveTen[27]
        } else if (numberDraw = 100) {
          chosenLoot = hoardFiveTen[28]
        }
        break;
      case 7:
        if (numberDraw <= 3) {
          chosenLoot = hoardElevenSixteen[0]
        } else if (numberDraw >= 4 && numberDraw <= 6) {
          chosenLoot = hoardElevenSixteen[1]
        } else if (numberDraw >= 7 && numberDraw <= 10) {
          chosenLoot = hoardElevenSixteen[2]
        } else if (numberDraw >= 11 && numberDraw <= 12) {
          chosenLoot = hoardElevenSixteen[3]
        } else if (numberDraw >= 13 && numberDraw <= 15) {
          chosenLoot = hoardElevenSixteen[4]
        } else if (numberDraw >= 16 && numberDraw <= 19) {
          chosenLoot = hoardElevenSixteen[5]
        } else if (numberDraw >= 20 && numberDraw <= 23) {
          chosenLoot = hoardElevenSixteen[6]
        } else if (numberDraw >= 24 && numberDraw <= 26) {
          chosenLoot = hoardElevenSixteen[7]
        } else if (numberDraw >= 27 && numberDraw <= 29) {
          chosenLoot = hoardElevenSixteen[8]
        } else if (numberDraw >= 30 && numberDraw <= 35) {
          chosenLoot = hoardElevenSixteen[9]
        } else if (numberDraw >= 36 && numberDraw <= 40) {
          chosenLoot = hoardElevenSixteen[10]
        } else if (numberDraw >= 41 && numberDraw <= 45) {
          chosenLoot = hoardElevenSixteen[11]
        } else if (numberDraw >= 46 && numberDraw <= 50) {
          chosenLoot = hoardElevenSixteen[12]
        } else if (numberDraw >= 51 && numberDraw <= 54) {
          chosenLoot = hoardElevenSixteen[13]
        } else if (numberDraw >= 55 && numberDraw <= 58) {
          chosenLoot = hoardElevenSixteen[14]
        } else if (numberDraw >= 59 && numberDraw <= 62) {
          chosenLoot = hoardElevenSixteen[15]
        } else if (numberDraw >= 63 && numberDraw <= 66) {
          chosenLoot = hoardElevenSixteen[16]
        } else if (numberDraw >= 67 && numberDraw <= 68) {
          chosenLoot = hoardElevenSixteen[17]
        } else if (numberDraw >= 69 && numberDraw <= 70) {
          chosenLoot = hoardElevenSixteen[18]
        } else if (numberDraw >= 71 && numberDraw <= 72) {
          chosenLoot = hoardElevenSixteen[19]
        } else if (numberDraw >= 73 && numberDraw <= 74) {
          chosenLoot = hoardElevenSixteen[20]
        } else if (numberDraw >= 75 && numberDraw <= 76) {
          chosenLoot = hoardElevenSixteen[21]
        } else if (numberDraw >= 77 && numberDraw <= 78) {
          chosenLoot = hoardElevenSixteen[22]
        } else if (numberDraw >= 79 && numberDraw <= 80) {
          chosenLoot = hoardElevenSixteen[23]
        } else if (numberDraw >= 81 && numberDraw <= 82) {
          chosenLoot = hoardElevenSixteen[24]
        } else if (numberDraw >= 83 && numberDraw <= 85) {
          chosenLoot = hoardElevenSixteen[25]
        } else if (numberDraw >= 86 && numberDraw <= 88) {
          chosenLoot = hoardElevenSixteen[26]
        } else if (numberDraw >= 89 && numberDraw <= 90) {
          chosenLoot = hoardElevenSixteen[27]
        } else if (numberDraw >= 91 && numberDraw <= 92) {
          chosenLoot = hoardElevenSixteen[28]
        } else if (numberDraw >= 93 && numberDraw <= 94) {
          chosenLoot = hoardElevenSixteen[29]
        } else if (numberDraw >= 95 && numberDraw <= 96) {
          chosenLoot = hoardElevenSixteen[30]
        } else if (numberDraw >= 97 && numberDraw <= 98) {
          chosenLoot = hoardElevenSixteen[31]
        } else if (numberDraw >= 99) {
          chosenLoot = hoardElevenSixteen[32]
        }
        break;
      case 8:
        debugger
        console.log('hoardSeventeenPlus')
        //chosenLoot = hoardSeventeenPlus
        break;
      default:
        this.lootOptions = '';
    }

    // Filtrar Valores Vazios
    if (chosenLoot.pc == '') {
      delete chosenLoot.pc
    }
    if (chosenLoot.pp == '') {
      delete chosenLoot.pp
    }
    if (chosenLoot.pe == '') {
      delete chosenLoot.pe
    }
    if (chosenLoot.po == '') {
      delete chosenLoot.po
    }
    if (chosenLoot.pl == '') {
      delete chosenLoot.pl
    }
    if (chosenLoot.gemArt == '') {
      delete chosenLoot.gemArt
    }
    if (chosenLoot.magicItems == '') {
      delete chosenLoot.magicItems
    }

    this.filterLoot = chosenLoot
  }

  lootGen() {
    let lootKeys = Object.keys(this.filterLoot)
    for (let i = 0; i < lootKeys.length; i++) {
      let rollLoot: string
      let valor = lootKeys[i]
      let totalLoot = 0
      if (valor === "gemArt") { continue; }
      if (valor === "magicItems") { continue; }
      rollLoot = this.filterLoot[valor].split("x")
      let dice = rollLoot[0].split("d")
      for (let i = 0; i < parseInt(dice[0]); i++) {
        let rolagem = Math.floor(Math.random() * parseInt(dice[1])) + 1;
        totalLoot += rolagem
        //  console.log(i,rolagem,totalLoot)
      }
      if (rollLoot[1] != undefined) {
        totalLoot *= parseInt(rollLoot[1])
      }
      this.resultLoot[valor] = totalLoot
    }
    // arte, gemas
    let artOrGem = ""
    if (this.filterLoot.gemArt != undefined) {
      let identifyLoot: any
      let gemArtQuant: any
      let result: string
      if (this.filterLoot.gemArt.search("gems") == -1) {
        // art       
        gemArtQuant = this.filterLoot.gemArt.split("art")[0]
        identifyLoot = "art"
        console.log(gemArtQuant)
      } else {
        //gem   
        gemArtQuant = this.filterLoot.gemArt.split("gems")[0]
        identifyLoot = "gem"
        console.log(gemArtQuant)
      }
      let separate = gemArtQuant.split("x")
      let dice = separate[0].split("d")
      for (let i = 0; i < dice[0]; i++) {
        let rolagem = Math.floor(Math.random() * parseInt(dice[1])) + 1;       
        if (identifyLoot = "gem") {
          switch (separate[1]) {
            case "10":              
              identifyLoot = gems10gp
              break;
            case "50":
              identifyLoot = gems50gp
              break;
            case "100":
              identifyLoot = gems100gp
              break;
            case "500":
              identifyLoot = gems500gp
              break;
            case "1000":
              identifyLoot = gems1000gp
              break;
            case "5000":
              identifyLoot = gems5000gp
              break;
          }         
        }
        console.log('i',i)
        artOrGem += identifyLoot[rolagem] + ","           
      }
      console.log(artOrGem)

    }

  }
}
