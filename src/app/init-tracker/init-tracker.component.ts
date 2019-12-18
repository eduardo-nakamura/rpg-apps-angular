import { Component, OnInit } from '@angular/core';
import example from '../../assets/party.json';
import { MatTableDataSource } from '@angular/material/table';

import { Character } from './initiativeCharacter';
import { FAHEN,NYARIS,NEW } from './initiativeGroups';


export interface initTable {
  name: string;
  bonusInit: number;
  diceInit: number;
  totalInit: number;
}


const ELEMENT_DATA: initTable[] = []
const FAHENS: initTable[] = [
  { name: 'Chabal', bonusInit: 1, diceInit: 0, totalInit: 0, },
  { name: 'Nibi', bonusInit: 5, diceInit: 0, totalInit: 0, },
  { name: 'Valerius', bonusInit: 4, diceInit: 0, totalInit: 0, },
  { name: 'Sora', bonusInit: 13, diceInit: 0, totalInit: 0, }
]
@Component({
  selector: 'app-init-tracker',
  templateUrl: './init-tracker.component.html',
  styleUrls: ['./init-tracker.component.css']
})
export class InitTrackerComponent implements OnInit {
  textHover:string
  selectedParty = undefined;
  initObj:initTable[] = []
  displayedColumns: string[] = ['name', 'bonusInit', 'diceInit', 'totalInit', 'delete'];
  dataSource = new MatTableDataSource<initTable>(ELEMENT_DATA);
  dataSource1 = new MatTableDataSource<initTable>(ELEMENT_DATA);
  // ordenarChars: any = [];
  turno:number = 0  
  addNewChar = ''
  addNewCharInput = false
  started = false
  constructor() { }

  ngOnInit() {
    console.log(this.initObj)
  }
  selectChangeHandler(event: any) {    
    this.selectedParty = event.target.value;
    switch(this.selectedParty){
      case "0":        
        // this.initObj = JSON.parse(JSON.stringify(FAHENS))
        this.initObj = [...FAHEN]
        break;
      case "1":        
        this.initObj = [...NYARIS]
        break;
      case "2":        
        this.initObj = [...NEW]
        break;
    }
    this.addNewCharInput=true
    this.atualizarTabela()
  }
 
  atualizarTabela() {        
    if(this.initObj[0].name == ''){
      this.initObj.splice(0, 1)
    }    
    for (let i = 0; i < this.initObj.length; i++) {
      this.initObj[i].totalInit = this.initObj[i].bonusInit + this.initObj[i].diceInit
    }
    this.dataSource = new MatTableDataSource<initTable>(this.initObj);     
  }


   ordenarTabela() {
    this.initObj.sort(function (a, b) {
      if (a.totalInit > b.totalInit) {
        return -1;
      }
      if (a.totalInit < b.totalInit) {
        return 1;
      }
      return 0;
    });
    this.atualizarTabela()
  }
  removeChar(i) {
    this.initObj.splice(i, 1)    
    this.atualizarTabela()
  }
  rollDice(i){    
    this.initObj[i].diceInit = Math.floor((Math.random() * 20) + 1)
    this.atualizarTabela()    
  }
  addChar() {    
    if(this.addNewChar != ''){
      let objNewChar = { name: '', bonusInit: 0, diceInit: 0, totalInit: 0, }      
      objNewChar.name = this.addNewChar
      this.initObj.push(objNewChar)
      this.atualizarTabela()
      this.addNewChar = ''
    }    
  }
  start(){   
    this.ordenarTabela()
    this.started = true   
    this.addNewCharInput = false 
    this.turno = 0
    this.displayedColumns = ['name',  'totalInit', 'delete'];
  }
  next(){
    if(this.turno < this.initObj.length-1){
      this.turno = this.turno+1
    } else{
      this.turno = 0
    }    
    this.ordenarTabela()
  }
  prev(){
    if(this.turno < 1){
      this.turno = this.initObj.length-1
    } else{
      this.turno = this.turno-1
    }
    
  }
  finish(){      
   this.selectedParty = ''
   this.initObj = undefined   
   this.dataSource = new MatTableDataSource<initTable>(ELEMENT_DATA);
   this.started = false
   this.displayedColumns = ['name', 'bonusInit', 'diceInit', 'totalInit', 'delete'];
  }
}




