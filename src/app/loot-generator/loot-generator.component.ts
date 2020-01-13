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
  //conversor de moedas
  public selectOptions = ['Cobre','Prata','Electrum', 'Ouro', 'Platina'];
  public selectedOption = "Escolha uma Moeda";
  displayedColumnsConvert: string[] = ['cobre','prata','electrum', 'ouro', 'platina'];
  dataSourceConvert = new MatTableDataSource<ConvertTable>(ELEMENT_DATA);
  displayedColumnsIndividual: string[] = [];
  dataSourceIndividual = new MatTableDataSource<lootTable>(ELEMENT_DATA2);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  valorToConvert;
  //gerador de loot
  lootType: number;
  lootAlt: any;
  totalValue: number;
  lootClipboard: String = "";
  format = num => String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1.');
  constructor() {}


  ngOnInit() {
    this.dataSourceIndividual.paginator = this.paginator;
  }
  genLoot() {    
    this.resetLoot();
    this.chooseLoot();
    if (this.lootAlt != "Nada"){
      if(this.lootAlt.piece1){
        this.generateLootPieces();
      } 
      if(this.lootAlt.gemArt) {        
        this.generateLootGemArt();
        if (this.lootAlt.magItemA){
          this.generateLootMagItem();
        }        
      }           
    } 

  }
  
  chooseLoot() {      
      //let rollTableRes = Math.floor((Math.random() * 100) + 1);      
      let rollTableRes = this.rollDice(100);
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
  }
  generateLootPieces(){             
    this.displayedColumnsIndividual = ["quantity", "type"]
    let iter = Object.keys(this.lootAlt);
    let diceResult = 0;
    if (iter[0] == "piece1"){
      iter.forEach((element) => {        
        for (let j = 0; j < this.lootAlt[element].quant; j++){                    
          let dice = this.rollDice(this.lootAlt[element].sides)
          diceResult += dice;
        }          
        let lootDet = {type: this.lootAlt[element].type, quantity: diceResult * this.lootAlt[element].multiply, name:"",value:0 };
        this.lootClipboard += `${this.format(diceResult * this.lootAlt[element].multiply)} ${this.lootAlt[element].type} `;        
        ELEMENT_DATA2.push(lootDet);
        this.addData();
      }); 
    }   
   
  }
  generateLootGemArt(){   
    this.displayedColumnsIndividual = ["name", "type", "value"];
    let diceResult = 0;
    let tableSelected = this.isGemorArt();
    this.lootClipboard += `${this.lootAlt.gemArt.type}: `
    for(let i = 0; i < this.lootAlt.gemArt.quant; i++ ){      
      let dice = this.rollDice(this.lootAlt.gemArt.sides - 1);
      diceResult += dice;
    }
    for(let j = 0; j < diceResult; j++ ){                   
      let dice = this.rollDice(tableSelected.length - 1);      
      let lootDet = {type: this.lootAlt.gemArt.type, quantity: 0, name:tableSelected[dice],value:parseInt(this.lootAlt.gemArt.table) };
      this.lootClipboard += lootDet.name;
      (j < diceResult - 1) ? this.lootClipboard += ", " : this.lootClipboard += ` (${lootDet.value * diceResult} GP Total)`;      
      ELEMENT_DATA2.push(lootDet);
      this.addData();
    }   
  }
  generateLootMagItem(){    
    let magItens = this.lootAlt
    delete magItens.gemArt;    
    this.lootClipboard += `${this.lootAlt.magItemA.type}: `
    Object.keys(this.lootAlt).forEach((element) => {  
      let dice = this.rollDice(magItens[element].sides);      
      for (let j = 0; j < dice; j++){   
        let itemDice = this.rollDice(100);         
        let magItemDraw = this.tableMagItem(magItens[element].table, itemDice);        
        let itemObj = {
          type: magItens[element].type,
          quantity: 1,
          name: `${magItemDraw.name}, LDM pg.${magItemDraw.page}`,
          value: parseInt(magItemDraw.value)
        }
        
        this.lootClipboard += itemObj.name, (j < dice - 1) ? "a" : "b" ;
        ELEMENT_DATA2.push(itemObj);
        this.addData();     
      }
    }); 
  }
  //tabelas
  isGemorArt(){
    //console.log(this.lootAlt)
    switch(this.lootAlt.gemArt.table){
      case "10GP": return tables.gem10;break;
      case "50GP": return tables.gem50;break;
      case "100GP": return tables.gem100;break;
      case "500GP": return tables.gem500;break;
      case "1000GP": return tables.gem1000;break;
      case "5000GP": return tables.gem5000;break;
      case "25GP": return tables.art25;break;
      case "250GP": return tables.art250;break;
      case "750GP": return tables.art750;break;
      case "2500GP": return tables.art2500;break;
      case "7500GP": return tables.art7500;break;
    } 
  }
  tableMagItem(diceTable, diceResult){ 
    switch(diceTable){
      case "TableA":if(diceResult<51){return tables.tableA[0]}else if(diceResult<61){return tables.tableA[1]}else if(diceResult<71){return tables.tableA[2]}else if(diceResult<91){return tables.tableA[3]}else if(diceResult<95){return tables.tableA[4]}else if(diceResult<99){return tables.tableA[5]}else if(diceResult==99){return tables.tableA[6]}else if(diceResult==100){return tables.tableA[7]}break;
      case "TableB":if(diceResult<=15){return tables.tableB[0]}else if(diceResult<=22){return tables.tableB[1]}else if(diceResult<=29){return tables.tableB[2]}else if(diceResult<=34){return tables.tableB[3]}else if(diceResult<=39){return tables.tableB[4]}else if(diceResult<=44){return tables.tableB[5]}else if(diceResult<=49){return tables.tableB[6]}else if(diceResult<=54){return tables.tableB[7]}else if(diceResult<=59){return tables.tableB[8]}else if(diceResult<=64){return tables.tableB[9]}else if(diceResult<=67){return tables.tableB[10]}else if(diceResult<=70){return tables.tableB[11]}else if(diceResult<=73){return tables.tableB[12]}else if(diceResult<=75){return tables.tableB[13]}else if(diceResult<=77){return tables.tableB[14]}else if(diceResult<=79){return tables.tableB[15]}else if(diceResult<=81){return tables.tableB[16]}else if(diceResult<=83){return tables.tableB[17]}else if(diceResult==84){return tables.tableB[18]}else if(diceResult==85){return tables.tableB[19]}else if(diceResult==86){return tables.tableB[20]}else if(diceResult==87){return tables.tableB[21]}else if(diceResult==88){return tables.tableB[22]}else if(diceResult==89){return tables.tableB[23]}else if(diceResult==90){return tables.tableB[24]}else if(diceResult==91){return tables.tableB[25]}else if(diceResult==92){return tables.tableB[26]}else if(diceResult==93){return tables.tableB[27]}else if(diceResult==94){return tables.tableB[28]}else if(diceResult==95){return tables.tableB[29]}else if(diceResult==96){return tables.tableB[30]}else if(diceResult==97){return tables.tableB[31]}else if(diceResult==98){return tables.tableB[32]}else if(diceResult==99){return tables.tableB[33]}else if(diceResult==10){return tables.tableB[34]}break;
      case "TableC":if(diceResult<=15){return tables.tableC[0]}else if(diceResult<=22){return tables.tableC[1]}else if(diceResult<=27){return tables.tableC[2]}else if(diceResult<=32){return tables.tableC[3]}else if(diceResult<=37){return tables.tableC[4]}else if(diceResult<=42){return tables.tableC[5]}else if(diceResult<=47){return tables.tableC[6]}else if(diceResult<=52){return tables.tableC[7]}else if(diceResult<=57){return tables.tableC[8]}else if(diceResult<=62){return tables.tableC[9]}else if(diceResult<=67){return tables.tableC[10]}else if(diceResult<=72){return tables.tableC[11]}else if(diceResult<=75){return tables.tableC[12]}else if(diceResult<=78){return tables.tableC[13]}else if(diceResult<=81){return tables.tableC[14]}else if(diceResult<=84){return tables.tableC[15]}else if(diceResult<=87){return tables.tableC[16]}else if(diceResult<=89){return tables.tableC[17]}else if(diceResult<=91){return tables.tableC[18]}else if(diceResult==92){return tables.tableC[19]}else if(diceResult==93){return tables.tableC[20]}else if(diceResult==94){return tables.tableC[21]}else if(diceResult==95){return tables.tableC[22]}else if(diceResult==96){return tables.tableC[23]}else if(diceResult==97){return tables.tableC[24]}else if(diceResult==98){return tables.tableC[25]}else if(diceResult==99){return tables.tableC[26]}else if(diceResult==100){return tables.tableC[27]}break;
      case "TableD":if(diceResult<=20){return tables.tableD[0]}else if(diceResult<=30){return tables.tableD[1]}else if(diceResult<=40){return tables.tableD[2]}else if(diceResult<=50){return tables.tableD[3]}else if(diceResult<=57){return tables.tableD[4]}else if(diceResult<=62){return tables.tableD[5]}else if(diceResult<=67){return tables.tableD[6]}else if(diceResult<=72){return tables.tableD[7]}else if(diceResult<=77){return tables.tableD[8]}else if(diceResult<=82){return tables.tableD[9]}else if(diceResult<=87){return tables.tableD[10]}else if(diceResult<=92){return tables.tableD[11]}else if(diceResult<=95){return tables.tableD[12]}else if(diceResult<=98){return tables.tableD[13]}else if(diceResult==99){return tables.tableD[14]}else if(diceResult==100){return tables.tableD[15]}break;
      case "TableE":if(diceResult<=30){return tables.tableE[0]}else if(diceResult<=55){return tables.tableE[1]}else if(diceResult<=70){return tables.tableE[2]}else if(diceResult<=85){return tables.tableE[3]}else if(diceResult<=93){return tables.tableE[4]}else if(diceResult<=98){return tables.tableE[5]}else if(diceResult<=100){return tables.tableE[6]}break;
      case "TableF":if(diceResult<=15){return tables.tableF[0]}else if(diceResult<=18){return tables.tableF[1]}else if(diceResult<=21){return tables.tableF[2]}else if(diceResult<=23){return tables.tableF[3]}else if(diceResult<=25){return tables.tableF[4]}else if(diceResult<=27){return tables.tableF[5]}else if(diceResult<=29){return tables.tableF[6]}else if(diceResult<=31){return tables.tableF[7]}else if(diceResult<=33){return tables.tableF[8]}else if(diceResult<=35){return tables.tableF[9]}else if(diceResult<=37){return tables.tableF[10]}else if(diceResult<=39){return tables.tableF[11]}else if(diceResult<=41){return tables.tableF[12]}else if(diceResult<=43){return tables.tableF[13]}else if(diceResult<=45){return tables.tableF[14]}else if(diceResult<=47){return tables.tableF[15]}else if(diceResult<=49){return tables.tableF[16]}else if(diceResult<=51){return tables.tableF[17]}else if(diceResult<=53){return tables.tableF[18]}else if(diceResult<=55){return tables.tableF[19]}else if(diceResult<=57){return tables.tableF[20]}else if(diceResult<=59){return tables.tableF[21]}else if(diceResult<=61){return tables.tableF[22]}else if(diceResult<=63){return tables.tableF[23]}else if(diceResult<=65){return tables.tableF[24]}else if(diceResult==66){return tables.tableF[25]}else if(diceResult==67){return tables.tableF[26]}else if(diceResult==68){return tables.tableF[27]}else if(diceResult==69){return tables.tableF[28]}else if(diceResult==70){return tables.tableF[29]}else if(diceResult==71){return tables.tableF[30]}else if(diceResult==72){return tables.tableF[31]}else if(diceResult==73){return tables.tableF[32]}else if(diceResult==74){return tables.tableF[33]}else if(diceResult==75){return tables.tableF[34]}else if(diceResult==76){return tables.tableF[35]}else if(diceResult==77){return tables.tableF[36]}else if(diceResult==78){return tables.tableF[37]}else if(diceResult==79){return tables.tableF[38]}else if(diceResult==80){return tables.tableF[39]}else if(diceResult==81){return tables.tableF[40]}else if(diceResult==82){return tables.tableF[41]}else if(diceResult==83){return tables.tableF[42]}else if(diceResult==84){return tables.tableF[43]}else if(diceResult==85){return tables.tableF[44]}else if(diceResult==86){return tables.tableF[45]}else if(diceResult==87){return tables.tableF[46]}else if(diceResult==88){return tables.tableF[47]}else if(diceResult==89){return tables.tableF[48]}else if(diceResult==90){return tables.tableF[49]}else if(diceResult==91){return tables.tableF[50]}else if(diceResult==92){return tables.tableF[51]}else if(diceResult==93){return tables.tableF[52]}else if(diceResult==94){return tables.tableF[53]}else if(diceResult==95){return tables.tableF[54]}else if(diceResult==96){return tables.tableF[55]}else if(diceResult==97){return tables.tableF[56]}else if(diceResult==98){return tables.tableF[57]}else if(diceResult==99){return tables.tableF[58]}else if(diceResult==100){return tables.tableF[59]}break;
      case "TableG":if(diceResult<=11){return tables.tableG[0]}else if(diceResult<=14){return tables.tableG[1]}else if(diceResult==15){return tables.tableG[2]}else if(diceResult==16){return tables.tableG[3]}else if(diceResult==17){return tables.tableG[4]}else if(diceResult==18){return tables.tableG[5]}else if(diceResult==19){return tables.tableG[6]}else if(diceResult==20){return tables.tableG[7]}else if(diceResult==21){return tables.tableG[8]}else if(diceResult==22){return tables.tableG[9]}else if(diceResult==23){return tables.tableG[10]}else if(diceResult==24){return tables.tableG[11]}else if(diceResult==25){return tables.tableG[12]}else if(diceResult==26){return tables.tableG[13]}else if(diceResult==27){return tables.tableG[14]}else if(diceResult==28){return tables.tableG[15]}else if(diceResult==29){return tables.tableG[16]}else if(diceResult==30){return tables.tableG[17]}else if(diceResult==31){return tables.tableG[18]}else if(diceResult==32){return tables.tableG[19]}else if(diceResult==33){return tables.tableG[20]}else if(diceResult==34){return tables.tableG[21]}else if(diceResult==35){return tables.tableG[22]}else if(diceResult==36){return tables.tableG[23]}else if(diceResult==37){return tables.tableG[24]}else if(diceResult==38){return tables.tableG[25]}else if(diceResult==39){return tables.tableG[26]}else if(diceResult==40){return tables.tableG[27]}else if(diceResult==41){return tables.tableG[28]}else if(diceResult==42){return tables.tableG[29]}else if(diceResult==43){return tables.tableG[30]}else if(diceResult==44){return tables.tableG[31]}else if(diceResult==45){return tables.tableG[32]}else if(diceResult==46){return tables.tableG[33]}else if(diceResult==47){return tables.tableG[34]}else if(diceResult==48){return tables.tableG[35]}else if(diceResult==49){return tables.tableG[36]}else if(diceResult==50){return tables.tableG[37]}else if(diceResult==51){return tables.tableG[38]}else if(diceResult==52){return tables.tableG[39]}else if(diceResult==53){return tables.tableG[40]}else if(diceResult==54){return tables.tableG[41]}else if(diceResult==55){return tables.tableG[42]}else if(diceResult==56){return tables.tableG[43]}else if(diceResult==57){return tables.tableG[44]}else if(diceResult==58){return tables.tableG[45]}else if(diceResult==59){return tables.tableG[46]}else if(diceResult==60){return tables.tableG[47]}else if(diceResult==61){return tables.tableG[48]}else if(diceResult==62){return tables.tableG[49]}else if(diceResult==63){return tables.tableG[50]}else if(diceResult==64){return tables.tableG[51]}else if(diceResult==65){return tables.tableG[52]}else if(diceResult==66){return tables.tableG[53]}else if(diceResult==67){return tables.tableG[54]}else if(diceResult==68){return tables.tableG[55]}else if(diceResult==69){return tables.tableG[56]}else if(diceResult==70){return tables.tableG[57]}else if(diceResult==71){return tables.tableG[58]}else if(diceResult==72){return tables.tableG[59]}else if(diceResult==73){return tables.tableG[60]}else if(diceResult==74){return tables.tableG[61]}else if(diceResult==75){return tables.tableG[62]}else if(diceResult==76){return tables.tableG[63]}else if(diceResult==77){return tables.tableG[64]}else if(diceResult==78){return tables.tableG[65]}else if(diceResult==79){return tables.tableG[66]}else if(diceResult==80){return tables.tableG[67]}else if(diceResult==81){return tables.tableG[68]}else if(diceResult==82){return tables.tableG[69]}else if(diceResult==83){return tables.tableG[70]}else if(diceResult==84){return tables.tableG[71]}else if(diceResult==85){return tables.tableG[72]}else if(diceResult==86){return tables.tableG[73]}else if(diceResult==87){return tables.tableG[74]}else if(diceResult==88){return tables.tableG[75]}else if(diceResult==89){return tables.tableG[76]}else if(diceResult==90){return tables.tableG[77]}else if(diceResult==91){return tables.tableG[78]}else if(diceResult==92){return tables.tableG[79]}else if(diceResult==93){return tables.tableG[80]}else if(diceResult==94){return tables.tableG[81]}else if(diceResult==95){return tables.tableG[82]}else if(diceResult==96){return tables.tableG[83]}else if(diceResult==97){return tables.tableG[84]}else if(diceResult==98){return tables.tableG[85]}else if(diceResult==99){return tables.tableG[86]}else if(diceResult==100){return tables.tableG[87]}break;
      case "TableH":if(diceResult<=10){return tables.tableH[0]}else if(diceResult<=12){return tables.tableH[1]}else if(diceResult<=14){return tables.tableH[2]}else if(diceResult<=16){return tables.tableH[3]}else if(diceResult<=18){return tables.tableH[4]}else if(diceResult<=20){return tables.tableH[5]}else if(diceResult<=22){return tables.tableH[6]}else if(diceResult<=24){return tables.tableH[7]}else if(diceResult<=26){return tables.tableH[8]}else if(diceResult<=28){return tables.tableH[9]}else if(diceResult<=30){return tables.tableH[10]}else if(diceResult<=32){return tables.tableH[11]}else if(diceResult<=34){return tables.tableH[12]}else if(diceResult<=36){return tables.tableH[13]}else if(diceResult<=38){return tables.tableH[14]}else if(diceResult<=40){return tables.tableH[15]}else if(diceResult<=42){return tables.tableH[16]}else if(diceResult<=44){return tables.tableH[17]}else if(diceResult<=46){return tables.tableH[18]}else if(diceResult<=48){return tables.tableH[19]}else if(diceResult<=50){return tables.tableH[20]}else if(diceResult<=52){return tables.tableH[21]}else if(diceResult<=54){return tables.tableH[22]}else if(diceResult==55){return tables.tableH[23]}else if(diceResult==56){return tables.tableH[24]}else if(diceResult==57){return tables.tableH[25]}else if(diceResult==58){return tables.tableH[26]}else if(diceResult==59){return tables.tableH[27]}else if(diceResult==60){return tables.tableH[28]}else if(diceResult==61){return tables.tableH[29]}else if(diceResult==62){return tables.tableH[30]}else if(diceResult==63){return tables.tableH[31]}else if(diceResult==64){return tables.tableH[32]}else if(diceResult==65){return tables.tableH[33]}else if(diceResult==66){return tables.tableH[34]}else if(diceResult==67){return tables.tableH[35]}else if(diceResult==68){return tables.tableH[36]}else if(diceResult==69){return tables.tableH[37]}else if(diceResult==70){return tables.tableH[38]}else if(diceResult==71){return tables.tableH[39]}else if(diceResult==72){return tables.tableH[40]}else if(diceResult==73){return tables.tableH[41]}else if(diceResult==74){return tables.tableH[42]}else if(diceResult==75){return tables.tableH[43]}else if(diceResult==76){return tables.tableH[44]}else if(diceResult==77){return tables.tableH[45]}else if(diceResult==78){return tables.tableH[46]}else if(diceResult==79){return tables.tableH[47]}else if(diceResult==80){return tables.tableH[48]}else if(diceResult==81){return tables.tableH[49]}else if(diceResult==82){return tables.tableH[50]}else if(diceResult==83){return tables.tableH[51]}else if(diceResult==84){return tables.tableH[52]}else if(diceResult==85){return tables.tableH[53]}else if(diceResult==86){return tables.tableH[54]}else if(diceResult==87){return tables.tableH[55]}else if(diceResult==88){return tables.tableH[56]}else if(diceResult==89){return tables.tableH[57]}else if(diceResult==90){return tables.tableH[58]}else if(diceResult==91){return tables.tableH[59]}else if(diceResult==92){return tables.tableH[60]}else if(diceResult==93){return tables.tableH[61]}else if(diceResult==94){return tables.tableH[62]}else if(diceResult==95){return tables.tableH[63]}else if(diceResult==96){return tables.tableH[64]}else if(diceResult==97){return tables.tableH[65]}else if(diceResult==98){return tables.tableH[66]}else if(diceResult==99){return tables.tableH[67]}else if(diceResult==100){return tables.tableH[68]}break;
      case "TableI":if(diceResult<=5){return tables.tableI[0]}else if(diceResult<=10){return tables.tableI[1]}else if(diceResult<=15){return tables.tableI[2]}else if(diceResult<=20){return tables.tableI[3]}else if(diceResult<=23){return tables.tableI[4]}else if(diceResult<=26){return tables.tableI[5]}else if(diceResult<=29){return tables.tableI[6]}else if(diceResult<=32){return tables.tableI[7]}else if(diceResult<=38){return tables.tableI[8]}else if(diceResult<=41){return tables.tableI[9]}else if(diceResult<=43){return tables.tableI[10]}else if(diceResult<=45){return tables.tableI[11]}else if(diceResult<=47){return tables.tableI[12]}else if(diceResult<=49){return tables.tableI[13]}else if(diceResult<=51){return tables.tableI[14]}else if(diceResult<=53){return tables.tableI[15]}else if(diceResult<=55){return tables.tableI[16]}else if(diceResult<=57){return tables.tableI[17]}else if(diceResult<=59){return tables.tableI[18]}else if(diceResult<=61){return tables.tableI[19]}else if(diceResult<=63){return tables.tableI[20]}else if(diceResult<=65){return tables.tableI[21]}else if(diceResult<=67){return tables.tableI[22]}else if(diceResult<=69){return tables.tableI[23]}else if(diceResult<=71){return tables.tableI[24]}else if(diceResult<=73){return tables.tableI[25]}else if(diceResult<=75){return tables.tableI[26]}else if(diceResult==76){return tables.tableI[27]}else if(diceResult==77){return tables.tableI[28]}else if(diceResult==78){return tables.tableI[29]}else if(diceResult==79){return tables.tableI[30]}else if(diceResult==80){return tables.tableI[31]}else if(diceResult==81){return tables.tableI[32]}else if(diceResult==82){return tables.tableI[33]}else if(diceResult==83){return tables.tableI[34]}else if(diceResult==84){return tables.tableI[35]}else if(diceResult==85){return tables.tableI[36]}else if(diceResult==86){return tables.tableI[37]}else if(diceResult==87){return tables.tableI[38]}else if(diceResult==88){return tables.tableI[39]}else if(diceResult==89){return tables.tableI[40]}else if(diceResult==90){return tables.tableI[41]}else if(diceResult==91){return tables.tableI[42]}else if(diceResult==92){return tables.tableI[43]}else if(diceResult==93){return tables.tableI[44]}else if(diceResult==94){return tables.tableI[45]}else if(diceResult==95){return tables.tableI[46]}else if(diceResult==96){return tables.tableI[47]}else if(diceResult==97){return tables.tableI[48]}else if(diceResult==98){return tables.tableI[49]}else if(diceResult==99){return tables.tableI[50]}else if(diceResult==100){return tables.tableI[51]}break;
    }
  }
  resetLoot(){
    ELEMENT_DATA2 = []
    this.addData();
    this.lootClipboard = ""
    //this.lootFinal = "";
  }
  addData(){    
    this.dataSourceIndividual = new MatTableDataSource<lootTable>(ELEMENT_DATA2);
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

  // Convert Coins
  convertPiece(){    
    if(this.valorToConvert == undefined || this.selectedOption == "Escolha uma Moeda" ){
      //console.log("errou")
    }     
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
        ELEMENT_DATA[0].electrum = (this.valorToConvert / 5)
        ELEMENT_DATA[0].ouro = (this.valorToConvert / 10)
        ELEMENT_DATA[0].platina = (this.valorToConvert /100 )
        break;
      case "Electrum":
        ELEMENT_DATA[0].cobre = this.valorToConvert * 50
        ELEMENT_DATA[0].prata = this.valorToConvert * 5
        ELEMENT_DATA[0].electrum = this.valorToConvert
        ELEMENT_DATA[0].ouro = (this.valorToConvert / 2)
        ELEMENT_DATA[0].platina = (this.valorToConvert /20)
        break;
      case "Ouro":
        ELEMENT_DATA[0].cobre = this.valorToConvert * 100
        ELEMENT_DATA[0].prata = this.valorToConvert * 10
        ELEMENT_DATA[0].electrum = this.valorToConvert * 2
        ELEMENT_DATA[0].ouro = this.valorToConvert
        ELEMENT_DATA[0].platina = (this.valorToConvert /10)
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

  //rolar dados
  rollDice(diceSides){
    return Math.floor((Math.random() * diceSides) + 1);
  }


  getTotalCost() {
    return ELEMENT_DATA2.map(t => t.value).reduce((acc, tesste) => acc + tesste, 0);
  }
}

//individual table Loot  
export interface lootTable {
  type: string;
  quantity: number;
  name: string;
  value: number;
}

let ELEMENT_DATA2: lootTable[] = [
  //{type: "Peças de Ouro",quantity: 0}  
];


//table Convert
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
