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
  displayedColumns: string[] = ['name', 'bonusInit', 'diceInit', 'totalInit'];    
  dataSource = new MatTableDataSource<initTable>(ELEMENT_DATA);

  constructor() { }

// Pesquisar Form Array
  ngOnInit() {
    console.log(ELEMENT_DATA)
    console.log('1',this.dataSource)
  }
  selectChangeHandler(event: any) {    
    this.selectedParty = event.target.value;    
    this.initObj = example[this.selectedParty].partyMember
    this.atualizarTabela()  
  }

  atualizarTabela(){
    this.ordenarChars = example[this.selectedParty].partyMember
    console.log(this.ordenarChars)
    for( let i = 0; i < this.ordenarChars.length; i++){      
      this.ordenarChars[i].totalInit = this.ordenarChars[i].bonusInit + this.ordenarChars[i].diceInit
    }    
    //ordenar
    this.ordenarChars.sort(function (a, b) {
      if (a.totalInit > b.totalInit) {
        return -1;
      }
      if (a.totalInit < b.totalInit) {
        return 1;
      }      
      return 0;
    });
    this.dataSource = new MatTableDataSource<initTable>(this.ordenarChars);
    
  }
  teste(event: any){
    // this.dadosResult = event.target.value;
    console.log(event.target.value)
    // console.log(this.dataSource.filteredData)  
  }
  teste2(){
    console.log(example[this.selectedParty].partyMember)
  }
}
