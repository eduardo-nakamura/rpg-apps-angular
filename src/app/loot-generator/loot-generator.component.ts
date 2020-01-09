import { Component,OnInit, ViewChild} from '@angular/core';
import * as tables from './lootObjs';
import {MatTableDataSource} from '@angular/material/table';
//import { artTable,gemsTable,magTable,individual,hoard} from './lootObjs';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-loot-generator',
  templateUrl: './loot-generator.component.html',
  styleUrls: ['./loot-generator.component.css']
})
export class LootGeneratorComponent implements OnInit {
  public selectOptions = ['Cobre','Prata','Electrum', 'Ouro', 'Platina']
  public selectedOption = "Escolha uma Moeda";
  displayedColumns: string[] = ['cobre','prata','electrum', 'ouro', 'platina'];
  dataSource = new MatTableDataSource<ConvertTable>(ELEMENT_DATA);
  
 
  valorToConvert;
  lootType: number
  lootAlt: any
  lootFinal: any = ""
  //https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/manipulating-complex-objects
  //https://www.freecodecamp.org/forum/t/freecodecamp-challenge-guide-profile-lookup/18259
  // numberDraw: Number
  format = num => String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1.');
  constructor() {}

  ngOnInit() {

  }
  genLoot() {
    this.resetLoot();
    this.chooseLoot();
    if(this.lootAlt == "Nada"){
      this.lootFinal = "Nada";
    } else if(this.lootAlt.piece1){
      this.generateLootPieces();
    }
  }

  chooseLoot() {      
      let rollTableRes = Math.floor((Math.random() * 100) + 1);      
      switch(this.lootType){
        case 1:rollTableRes<=30?this.lootAlt=tables.individual1[0]:30<rollTableRes&&rollTableRes<=60?this.lootAlt=tables.individual1[1]:60<rollTableRes&&rollTableRes<=70?this.lootAlt=tables.individual1[2]:70<rollTableRes&&rollTableRes<=95?this.lootAlt=tables.individual1[3]:this.lootAlt=tables.individual1[4];break;
        case 2:rollTableRes<=30?this.lootAlt=tables.individual2[0]:30<rollTableRes&&rollTableRes<=60?this.lootAlt=tables.individual2[1]:60<rollTableRes&&rollTableRes<=70?this.lootAlt=tables.individual2[2]:70<rollTableRes&&rollTableRes<=95?this.lootAlt=tables.individual2[3]:this.lootAlt=tables.individual2[4];break;
        case 3:rollTableRes<=20?this.lootAlt=tables.individual3[0]:20<rollTableRes&&rollTableRes<=35?this.lootAlt=tables.individual3[1]:35<rollTableRes&&rollTableRes<=75?this.lootAlt=tables.individual3[2]:this.lootAlt=tables.individual3[3];break;
        case 4:rollTableRes<=15?this.lootAlt=tables.individual4[0]:15<rollTableRes&&rollTableRes<=55?this.lootAlt=tables.individual4[1]:this.lootAlt=tables.individual4[2];break;
        case 5:rollTableRes<=6?this.lootAlt="Nada":6<rollTableRes&&rollTableRes<=16?this.lootAlt=tables.hoard1[0]:16<rollTableRes&&rollTableRes<=26?this.lootAlt=tables.hoard1[1]:26<rollTableRes&&rollTableRes<=36?this.lootAlt=tables.hoard1[2]:36<rollTableRes&&rollTableRes<=44?this.lootAlt=tables.hoard1[3]:44<rollTableRes&&rollTableRes<=52?this.lootAlt=tables.hoard1[4]:52<rollTableRes&&rollTableRes<=60?this.lootAlt=tables.hoard1[5]:60<rollTableRes&&rollTableRes<=65?this.lootAlt=tables.hoard1[6]:65<rollTableRes&&rollTableRes<=70?this.lootAlt=tables.hoard1[7]:70<rollTableRes&&rollTableRes<=75?this.lootAlt=tables.hoard1[8]:75<rollTableRes&&rollTableRes<=78?this.lootAlt=tables.hoard1[9]:78<rollTableRes&&rollTableRes<=80?this.lootAlt=tables.hoard1[10]:81<rollTableRes&&rollTableRes<=85?this.lootAlt=tables.hoard1[11]:86<rollTableRes&&rollTableRes<=92?this.lootAlt=tables.hoard1[12]:93<rollTableRes&&rollTableRes<=97?this.lootAlt=tables.hoard1[13]:98<rollTableRes&&rollTableRes<=99?this.lootAlt=tables.hoard1[14]:this.lootAlt=tables.hoard1[15];break;
        case 6:rollTableRes<=4?this.lootAlt="Nada":4<rollTableRes&&rollTableRes<=10?this.lootAlt=tables.hoard2[0]:10<rollTableRes&&rollTableRes<=22?this.lootAlt=tables.hoard2[1]:22<rollTableRes&&rollTableRes<=28?this.lootAlt=tables.hoard2[2]:28<rollTableRes&&rollTableRes<=32?this.lootAlt=tables.hoard2[3]:32<rollTableRes&&rollTableRes<=36?this.lootAlt=tables.hoard2[4]:36<rollTableRes&&rollTableRes<=40?this.lootAlt=tables.hoard2[5]:40<rollTableRes&&rollTableRes<=44?this.lootAlt=tables.hoard2[6]:44<rollTableRes&&rollTableRes<=49?this.lootAlt=tables.hoard2[7]:49<rollTableRes&&rollTableRes<=54?this.lootAlt=tables.hoard2[8]:54<rollTableRes&&rollTableRes<=59?this.lootAlt=tables.hoard2[9]:59<rollTableRes&&rollTableRes<=63?this.lootAlt=tables.hoard2[10]:63<rollTableRes&&rollTableRes<=66?this.lootAlt=tables.hoard2[11]:66<rollTableRes&&rollTableRes<=69?this.lootAlt=tables.hoard2[12]:69<rollTableRes&&rollTableRes<=72?this.lootAlt=tables.hoard2[13]:71<rollTableRes&&rollTableRes<=74?this.lootAlt=tables.hoard2[14]:74<rollTableRes&&rollTableRes<=76?this.lootAlt=tables.hoard2[15]:76<rollTableRes&&rollTableRes<=78?this.lootAlt=tables.hoard2[16]:79==rollTableRes?this.lootAlt=tables.hoard2[17]:80==rollTableRes?this.lootAlt=tables.hoard2[18]:80<rollTableRes&&rollTableRes<=84?this.lootAlt=tables.hoard2[19]:84<rollTableRes&&rollTableRes<=88?this.lootAlt=tables.hoard2[20]:88<rollTableRes&&rollTableRes<=91?this.lootAlt=tables.hoard2[21]:91<rollTableRes&&rollTableRes<=94?this.lootAlt=tables.hoard2[22]:94<rollTableRes&&rollTableRes<=96?this.lootAlt=tables.hoard2[23]:96<rollTableRes&&rollTableRes<=98?this.lootAlt=tables.hoard2[24]:99==rollTableRes?this.lootAlt=tables.hoard2[25]:this.lootAlt=tables.hoard2[26];break;
        case 7:rollTableRes<=4?this.lootAlt="Nada":4<rollTableRes&&rollTableRes<=6?this.lootAlt=tables.hoard3[0]:6<rollTableRes&&rollTableRes<=10?this.lootAlt=tables.hoard3[1]:10<rollTableRes&&rollTableRes<=12?this.lootAlt=tables.hoard3[2]:12<rollTableRes&&rollTableRes<=15?this.lootAlt=tables.hoard3[3]:15<rollTableRes&&rollTableRes<=19?this.lootAlt=tables.hoard3[4]:19<rollTableRes&&rollTableRes<=23?this.lootAlt=tables.hoard3[5]:23<rollTableRes&&rollTableRes<=26?this.lootAlt=tables.hoard3[6]:26<rollTableRes&&rollTableRes<=29?this.lootAlt=tables.hoard3[7]:29<rollTableRes&&rollTableRes<=35?this.lootAlt=tables.hoard3[8]:35<rollTableRes&&rollTableRes<=40?this.lootAlt=tables.hoard3[9]:40<rollTableRes&&rollTableRes<=45?this.lootAlt=tables.hoard3[10]:45<rollTableRes&&rollTableRes<=50?this.lootAlt=tables.hoard3[11]:50<rollTableRes&&rollTableRes<=54?this.lootAlt=tables.hoard3[12]:54<rollTableRes&&rollTableRes<=58?this.lootAlt=tables.hoard3[13]:58<rollTableRes&&rollTableRes<=62?this.lootAlt=tables.hoard3[14]:62<rollTableRes&&rollTableRes<=66?this.lootAlt=tables.hoard3[15]:66<rollTableRes&&rollTableRes<=68?this.lootAlt=tables.hoard3[16]:68<rollTableRes&&rollTableRes<=70?this.lootAlt=tables.hoard3[17]:70<rollTableRes&&rollTableRes<=72?this.lootAlt=tables.hoard3[18]:72<rollTableRes&&rollTableRes<=74?this.lootAlt=tables.hoard3[19]:74<rollTableRes&&rollTableRes<=76?this.lootAlt=tables.hoard3[20]:76<rollTableRes&&rollTableRes<=78?this.lootAlt=tables.hoard3[21]:78<rollTableRes&&rollTableRes<=80?this.lootAlt=tables.hoard3[22]:80<rollTableRes&&rollTableRes<=82?this.lootAlt=tables.hoard3[23]:82<rollTableRes&&rollTableRes<=85?this.lootAlt=tables.hoard3[24]:85<rollTableRes&&rollTableRes<=88?this.lootAlt=tables.hoard3[25]:88<rollTableRes&&rollTableRes<=90?this.lootAlt=tables.hoard3[26]:90<rollTableRes&&rollTableRes<=92?this.lootAlt=tables.hoard3[27]:92<rollTableRes&&rollTableRes<=94?this.lootAlt=tables.hoard3[28]:94<rollTableRes&&rollTableRes<=96?this.lootAlt=tables.hoard3[29]:96<rollTableRes&&rollTableRes<=98?this.lootAlt=tables.hoard3[30]:this.lootAlt=tables.hoard3[31];break;
        case 8:rollTableRes<=2?this.lootAlt="Nada":rollTableRes>2&&rollTableRes<=5?this.lootAlt=tables.hoard4[0]:rollTableRes>5&&rollTableRes<=8?this.lootAlt=tables.hoard4[1]:rollTableRes>8&&rollTableRes<=11?this.lootAlt=tables.hoard4[2]:rollTableRes>14&&rollTableRes<=14?this.lootAlt=tables.hoard4[3]:rollTableRes>14&&rollTableRes<=22?this.lootAlt=tables.hoard4[4]:rollTableRes>22&&rollTableRes<=30?this.lootAlt=tables.hoard4[5]:rollTableRes>30&&rollTableRes<=38?this.lootAlt=tables.hoard4[6]:rollTableRes>38&&rollTableRes<=46?this.lootAlt=tables.hoard4[7]:rollTableRes>46&&rollTableRes<=52?this.lootAlt=tables.hoard4[8]:rollTableRes>52&&rollTableRes<=58?this.lootAlt=tables.hoard4[9]:rollTableRes>58&&rollTableRes<=63?this.lootAlt=tables.hoard4[10]:rollTableRes>63&&rollTableRes<=68?this.lootAlt=tables.hoard4[11]:69==rollTableRes?this.lootAlt=tables.hoard4[12]:70==rollTableRes?this.lootAlt=tables.hoard4[13]:71==rollTableRes?this.lootAlt=tables.hoard4[14]:72==rollTableRes?this.lootAlt=tables.hoard4[15]:rollTableRes>72&&rollTableRes<=74?this.lootAlt=tables.hoard4[16]:rollTableRes>74&&rollTableRes<=76?this.lootAlt=tables.hoard4[17]:rollTableRes>76&&rollTableRes<=78?this.lootAlt=tables.hoard4[18]:rollTableRes>78&&rollTableRes<=80?this.lootAlt=tables.hoard4[19]:rollTableRes>80&&rollTableRes<=85?this.lootAlt=tables.hoard4[20]:rollTableRes>85&&rollTableRes<=90?this.lootAlt=tables.hoard4[21]:rollTableRes>90&&rollTableRes<=95?this.lootAlt=tables.hoard4[22]:rollTableRes>95&&rollTableRes<=100&&(this.lootAlt=tables.hoard4[23]);break;                   
      }   
      console.log(this.lootAlt) 
  }
  generateLootPieces(){       
    let iter = Object.keys(this.lootAlt);    
      for (let i = 0; i < iter.length; i++ ){      
        let diceResult = 0;
          for (let j = 0; j < this.lootAlt[iter[i]].quant; j++){
            let dice = Math.floor((Math.random() * this.lootAlt[iter[i]].sides) + 1);
            diceResult += dice;
          }
          let total = diceResult * this.lootAlt[iter[i]].multiply;
          iter[i] = `${this.format(total)} ${this.lootAlt[iter[i]].type}`      
      }
      this.lootFinal += iter;   
  }

  generateLootGemArt(){   
    let iter = Object.keys(this.lootAlt);
    let diceResult = 0;
    let tableLoot: any;  
    let gemArtResult = this.lootAlt.gemArt.type + ": ";
    console.log(this.lootAlt)
    switch(this.lootAlt.gemArt.table){
      case "10GP":tableLoot = tables.gem10;break;
      case "50GP":tableLoot = tables.gem50;break;
      case "100GP":tableLoot = tables.gem100;break;
      case "500GP":tableLoot = tables.gem500;break;
      case "1000GP":tableLoot = tables.gem1000;break;
      case "5000GP":tableLoot = tables.gem5000;break;
      case "25GP":tableLoot = tables.art25;break;
      case "250GP":tableLoot = tables.art250;break;
      case "750GP":tableLoot = tables.art750;break;
      case "2500GP":tableLoot = tables.art2500;break;
      case "7500GP":tableLoot = tables.art7500;break;
    } 
    
    for (let i = 0; i < this.lootAlt.gemArt.quant; i++){
      let dice = Math.floor((Math.random() * (this.lootAlt.gemArt.sides - 1)) + 1);
      gemArtResult += `${(i+1)}) ${tableLoot[dice]}`;
    }

    iter[0] = gemArtResult + `( ${this.format(this.lootAlt.gemArt.quant * parseFloat(this.lootAlt.gemArt.table))} GP Total )`;
    this.lootFinal = iter;
  }

  generateLootMagItem(){
    let magItem = this.lootAlt
    delete magItem.gemArt
    console.log(magItem)
    //delete this.lootAlt.gemArt;  
    let diceResult = 0;
    let tableLoot: any;  
    let magItemResult = "Itens Mágicos: ";


  }

  resetLoot(){
    this.lootFinal = "";
  }

  /* Copy Text Loot to Clipboard */
  copyText(val: string){
  let selBox = document.createElement('textarea');    
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
  convertPiece(){    
    if(this.valorToConvert == undefined || this.selectedOption == "Escolha uma Moeda" ){
      console.log("errou")
    } 
    console.log(ELEMENT_DATA[0].cobre)
    //Cobre Prata Electrum Ouro Platina
    switch(this.selectedOption){
      case "Cobre":
        ELEMENT_DATA[0].cobre = this.valorToConvert
        ELEMENT_DATA[0].prata = (this.valorToConvert / 10)
        ELEMENT_DATA[0].electrum = (this.valorToConvert / 50)
        ELEMENT_DATA[0].ouro = (this.valorToConvert / 100)
        ELEMENT_DATA[0].platina = (this.valorToConvert / 1000)
        break;
      case "Prata":
        ELEMENT_DATA[0].cobre = this.valorToConvert * 10
        ELEMENT_DATA[0].prata = this.valorToConvert 
        ELEMENT_DATA[0].electrum = this.valorToConvert / 5
        ELEMENT_DATA[0].ouro = this.valorToConvert / 10
        ELEMENT_DATA[0].platina = this.valorToConvert /100 
        break;
      case "Electrum":
        ELEMENT_DATA[0].cobre = this.valorToConvert * 50
        ELEMENT_DATA[0].prata = this.valorToConvert * 5
        ELEMENT_DATA[0].electrum = this.valorToConvert
        ELEMENT_DATA[0].ouro = this.valorToConvert / 2
        ELEMENT_DATA[0].platina = this.valorToConvert /20
        break;
      case "Ouro":
        ELEMENT_DATA[0].cobre = this.valorToConvert * 100
        ELEMENT_DATA[0].prata = this.valorToConvert * 10
        ELEMENT_DATA[0].electrum = this.valorToConvert * 2
        ELEMENT_DATA[0].ouro = this.valorToConvert
        ELEMENT_DATA[0].platina = this.valorToConvert /10
        break;
      case "Platina":
        ELEMENT_DATA[0].cobre = this.valorToConvert * 1000
        ELEMENT_DATA[0].prata = this.valorToConvert * 100
        ELEMENT_DATA[0].electrum = this.valorToConvert * 20
        ELEMENT_DATA[0].ouro = this.valorToConvert * 10
        ELEMENT_DATA[0].platina = this.valorToConvert
        break;
    }
  }
}

//tabela Loot
export interface lootTable {
  cobre: number;
  prata: number;
  electrum: number;
  ouro: number;
  platina: number;
}

const ELEMENT_DATA2: lootTable[] = [
  {cobre: 0,prata: 0,electrum: 0,ouro: 0,platina: 0}  
];


//tabela Conversão
export interface ConvertTable {
  cobre: number;
  prata: number;
  electrum: number;
  ouro: number;
  platina: number;
}

const ELEMENT_DATA: ConvertTable[] = [
  {cobre: 0,prata: 0,electrum: 0,ouro: 0,platina: 0}  
];
