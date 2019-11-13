import { Component, OnInit } from '@angular/core';
import example from '../../assets/party.json';
import {MatTableDataSource} from '@angular/material/table';

export interface initTable {
  name: string;
  bonusInit: number;
  diceInit: number;
  totalInit: number;
}
const ELEMENT_DATA: initTable[] = []
@Component({
  selector: 'app-init-tracker',
  templateUrl: './init-tracker.component.html',
  styleUrls: ['./init-tracker.component.css']
})
export class InitTrackerComponent implements OnInit {
  ordenarChars:any;
  partyOptions = example;
  selectedParty = '';
  initObj = '';
  dadosResult: number
  displayedColumns: string[] = ['name', 'bonusInit', 'diceInit', 'totalInit', 'delete'];    
  dataSource = new MatTableDataSource<initTable>(ELEMENT_DATA);
  addNewChar = ''
  
  constructor() { }

// Pesquisar Form Array
  ngOnInit() {

    
  }
  selectChangeHandler(event: any) {    
    this.selectedParty = event.target.value;    
    this.initObj = example[this.selectedParty].partyMember
    this.atualizarTabela()      
  }

  atualizarTabela(){
    this.ordenarChars = example[this.selectedParty].partyMember
    for( let i = 0; i < this.ordenarChars.length; i++){      
      this.ordenarChars[i].totalInit = this.ordenarChars[i].bonusInit + this.ordenarChars[i].diceInit
    }        
    // this.ordenarChars.sort(function (a, b) {
    //   if (a.totalInit > b.totalInit) {
    //     return -1;
    //   }
    //   if (a.totalInit < b.totalInit) {
    //     return 1;
    //   }      
    //   return 0;
    // });    
    this.dataSource = new MatTableDataSource<initTable>(this.ordenarChars);
  }
  removeChar(i){
    this.ordenarChars.splice(i,1)
    console.log(i)
    this.atualizarTabela()
  }
  addChar(){
    let objNewChar = { name: '', bonusInit: 0, diceInit: 0, totalInit: 0,}
    objNewChar.name = this.addNewChar
    this.ordenarChars.push(objNewChar)    
    this.atualizarTabela()  
    this.addNewChar = ''
  }

}
