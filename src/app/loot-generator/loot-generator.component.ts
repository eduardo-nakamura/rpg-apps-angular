import { Component,OnInit} from '@angular/core';
import { individual,hoard } from './lootObjs';
//import { artTable,gemsTable,magTable,individual,hoard} from './lootObjs';

@Component({
  selector: 'app-loot-generator',
  templateUrl: './loot-generator.component.html',
  styleUrls: ['./loot-generator.component.css']
})
export class LootGeneratorComponent implements OnInit {
  lootType: number
  lootAlt: any
  lootFinal: any
  //https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/manipulating-complex-objects
  //https://www.freecodecamp.org/forum/t/freecodecamp-challenge-guide-profile-lookup/18259
  // numberDraw: Number

  constructor() {}

  ngOnInit() {

  }
  genLoot() {
      this.chooseLoot();
      this.generateLoot();
  }

  chooseLoot() {
      let rollTableRes = Math.floor((Math.random() * 100) + 1);
      switch(this.lootType){
        case 1:rollTableRes<=30?this.lootAlt=individual[0][0]:30<rollTableRes&&rollTableRes<=60?this.lootAlt=individual[0][1]:60<rollTableRes&&rollTableRes<=70?this.lootAlt=individual[0][2]:70<rollTableRes&&rollTableRes<=95?this.lootAlt=individual[0][3]:this.lootAlt=individual[0][4];break;
        case 2:rollTableRes<=30?this.lootAlt=individual[1][0]:30<rollTableRes&&rollTableRes<=60?this.lootAlt=individual[1][1]:60<rollTableRes&&rollTableRes<=70?this.lootAlt=individual[1][2]:70<rollTableRes&&rollTableRes<=95?this.lootAlt=individual[1][3]:this.lootAlt=individual[1][4];break;
        case 3:rollTableRes<=20?this.lootAlt=individual[2][0]:20<rollTableRes&&rollTableRes<=35?this.lootAlt=individual[2][1]:35<rollTableRes&&rollTableRes<=75?this.lootAlt=individual[2][2]:this.lootAlt=individual[2][3];break;
        case 4:rollTableRes<=15?this.lootAlt=individual[3][0]:15<rollTableRes&&rollTableRes<=55?this.lootAlt=individual[3][1]:this.lootAlt=individual[3][2];break;
        case 5:rollTableRes<=6?this.lootAlt="Nada":6<rollTableRes&&rollTableRes<=16?this.lootAlt=hoard[0][0]:16<rollTableRes&&rollTableRes<=26?this.lootAlt=hoard[0][1]:26<rollTableRes&&rollTableRes<=36?this.lootAlt=hoard[0][2]:36<rollTableRes&&rollTableRes<=44?this.lootAlt=hoard[0][3]:44<rollTableRes&&rollTableRes<=52?this.lootAlt=hoard[0][4]:52<rollTableRes&&rollTableRes<=60?this.lootAlt=hoard[0][5]:60<rollTableRes&&rollTableRes<=65?this.lootAlt=hoard[0][6]:65<rollTableRes&&rollTableRes<=70?this.lootAlt=hoard[0][7]:70<rollTableRes&&rollTableRes<=75?this.lootAlt=hoard[0][8]:75<rollTableRes&&rollTableRes<=78?this.lootAlt=hoard[0][9]:78<rollTableRes&&rollTableRes<=80?this.lootAlt=hoard[0][10]:81<rollTableRes&&rollTableRes<=85?this.lootAlt=hoard[0][11]:86<rollTableRes&&rollTableRes<=92?this.lootAlt=hoard[0][12]:93<rollTableRes&&rollTableRes<=97?this.lootAlt=hoard[0][13]:98<rollTableRes&&rollTableRes<=99?this.lootAlt=hoard[0][14]:this.lootAlt=hoard[0][15];break;
        case 6:rollTableRes<=4?this.lootAlt="Nada":4<rollTableRes&&rollTableRes<=10?this.lootAlt=hoard[1][0]:10<rollTableRes&&rollTableRes<=22?this.lootAlt=hoard[1][1]:22<rollTableRes&&rollTableRes<=28?this.lootAlt=hoard[1][2]:28<rollTableRes&&rollTableRes<=32?this.lootAlt=hoard[1][3]:32<rollTableRes&&rollTableRes<=36?this.lootAlt=hoard[1][4]:36<rollTableRes&&rollTableRes<=40?this.lootAlt=hoard[1][5]:40<rollTableRes&&rollTableRes<=44?this.lootAlt=hoard[1][6]:44<rollTableRes&&rollTableRes<=49?this.lootAlt=hoard[1][7]:49<rollTableRes&&rollTableRes<=54?this.lootAlt=hoard[1][8]:54<rollTableRes&&rollTableRes<=59?this.lootAlt=hoard[1][9]:59<rollTableRes&&rollTableRes<=63?this.lootAlt=hoard[1][10]:63<rollTableRes&&rollTableRes<=66?this.lootAlt=hoard[1][11]:66<rollTableRes&&rollTableRes<=69?this.lootAlt=hoard[1][12]:69<rollTableRes&&rollTableRes<=72?this.lootAlt=hoard[1][13]:71<rollTableRes&&rollTableRes<=74?this.lootAlt=hoard[1][14]:74<rollTableRes&&rollTableRes<=76?this.lootAlt=hoard[1][15]:76<rollTableRes&&rollTableRes<=78?this.lootAlt=hoard[1][16]:79==rollTableRes?this.lootAlt=hoard[1][17]:80==rollTableRes?this.lootAlt=hoard[1][18]:80<rollTableRes&&rollTableRes<=84?this.lootAlt=hoard[1][19]:84<rollTableRes&&rollTableRes<=88?this.lootAlt=hoard[1][20]:88<rollTableRes&&rollTableRes<=91?this.lootAlt=hoard[1][21]:91<rollTableRes&&rollTableRes<=94?this.lootAlt=hoard[1][22]:94<rollTableRes&&rollTableRes<=96?this.lootAlt=hoard[1][23]:96<rollTableRes&&rollTableRes<=98?this.lootAlt=hoard[1][24]:99==rollTableRes?this.lootAlt=hoard[1][25]:this.lootAlt=hoard[1][26];break;
        case 7:rollTableRes<=4?this.lootAlt="Nada":4<rollTableRes&&rollTableRes<=6?this.lootAlt=hoard[2][0]:6<rollTableRes&&rollTableRes<=10?this.lootAlt=hoard[2][1]:10<rollTableRes&&rollTableRes<=12?this.lootAlt=hoard[2][2]:12<rollTableRes&&rollTableRes<=15?this.lootAlt=hoard[2][3]:15<rollTableRes&&rollTableRes<=19?this.lootAlt=hoard[2][4]:19<rollTableRes&&rollTableRes<=23?this.lootAlt=hoard[2][5]:23<rollTableRes&&rollTableRes<=26?this.lootAlt=hoard[2][6]:26<rollTableRes&&rollTableRes<=29?this.lootAlt=hoard[2][7]:29<rollTableRes&&rollTableRes<=35?this.lootAlt=hoard[2][8]:35<rollTableRes&&rollTableRes<=40?this.lootAlt=hoard[2][9]:40<rollTableRes&&rollTableRes<=45?this.lootAlt=hoard[2][10]:45<rollTableRes&&rollTableRes<=50?this.lootAlt=hoard[2][11]:50<rollTableRes&&rollTableRes<=54?this.lootAlt=hoard[2][12]:54<rollTableRes&&rollTableRes<=58?this.lootAlt=hoard[2][13]:58<rollTableRes&&rollTableRes<=62?this.lootAlt=hoard[2][14]:62<rollTableRes&&rollTableRes<=66?this.lootAlt=hoard[2][15]:66<rollTableRes&&rollTableRes<=68?this.lootAlt=hoard[2][16]:68<rollTableRes&&rollTableRes<=70?this.lootAlt=hoard[2][17]:70<rollTableRes&&rollTableRes<=72?this.lootAlt=hoard[2][18]:72<rollTableRes&&rollTableRes<=74?this.lootAlt=hoard[2][19]:74<rollTableRes&&rollTableRes<=76?this.lootAlt=hoard[2][20]:76<rollTableRes&&rollTableRes<=78?this.lootAlt=hoard[2][21]:78<rollTableRes&&rollTableRes<=80?this.lootAlt=hoard[2][22]:80<rollTableRes&&rollTableRes<=82?this.lootAlt=hoard[2][23]:82<rollTableRes&&rollTableRes<=85?this.lootAlt=hoard[2][24]:85<rollTableRes&&rollTableRes<=88?this.lootAlt=hoard[2][25]:88<rollTableRes&&rollTableRes<=90?this.lootAlt=hoard[2][26]:90<rollTableRes&&rollTableRes<=92?this.lootAlt=hoard[2][27]:92<rollTableRes&&rollTableRes<=94?this.lootAlt=hoard[2][28]:94<rollTableRes&&rollTableRes<=96?this.lootAlt=hoard[2][29]:96<rollTableRes&&rollTableRes<=98?this.lootAlt=hoard[2][30]:this.lootAlt=hoard[2][31];break;
        //case 8:this.lootAlt = hoard[3];break;                   
      }    
  }
  generateLoot(){
    let montaQuery = "";    
    if (this.lootAlt == "Nada"){
      this.lootFinal = this.lootAlt;
    } else {
      let iter = Object.getOwnPropertyNames(this.lootAlt);      
      for (let i = 0; i < iter.length; i++ ){
        let diceResult = 0;
        for (let j = 0; j < this.lootAlt[iter[i]].quant; j++){
          let dice = Math.floor((Math.random() * this.lootAlt[iter[i]].sides) + 1);
          diceResult += dice;
        }
        switch(iter[i]){
          case "piece1":
          case "piece2":
            iter[i] = diceResult * this.lootAlt[iter[i]].multiply + " " + this.lootAlt[iter[i]].type;
            break;
          case "gemArt":
            if (this.lootAlt[iter[i]].type == "Gemas"){
              if (this.lootAlt[iter[i]].table == "10GP"){
                console.log("GemTabela1")
              } else if (this.lootAlt[iter[i]].table == "50GP"){
                console.log("GemTabela2")
              }else if (this.lootAlt[iter[i]].table == "500GP"){
                console.log("GemTabela3")
              }else if (this.lootAlt[iter[i]].table == "1000GP"){
                console.log("GemTabela4")
              }else if (this.lootAlt[iter[i]].table == "5000GP"){
                console.log("GemTabela5")
              }
            } else if (this.lootAlt[iter[i]].type == "Objetos de Arte") {
              if (this.lootAlt[iter[i]].table == "25GP"){
                console.log("ArteTabela1")
              } else if (this.lootAlt[iter[i]].table == "250GP"){
                console.log("ArteTabela2")
              }else if (this.lootAlt[iter[i]].table == "750GP"){
                console.log("ArteTabela3")
              }else if (this.lootAlt[iter[i]].table == "2500GP"){
                console.log("ArteTabela4")
              }else if (this.lootAlt[iter[i]].table == "7500GP"){
                console.log("ArteTabela5")
              }
            }
          
            iter[i] = this.lootAlt[iter[i]].type
            break;
          case "magItemA":
          case "magItemB":
            iter[i] = this.lootAlt[iter[i]].type
            break;
        }
      }  
      this.lootFinal = iter;
    }   
  }
}