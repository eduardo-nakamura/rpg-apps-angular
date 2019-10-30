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
  partyOptions = example;
  selectedParty = '';
  initObj = '';
  dadosResult: number
  displayedColumns: string[] = ['name', 'bonusInit', 'diceInit', 'totalInit'];    
  dataSource = new MatTableDataSource<initTable>(ELEMENT_DATA);

  constructor() { }

  ngOnInit() {
    console.log(ELEMENT_DATA)
    console.log('1',this.dataSource)
  }
  selectChangeHandler(event: any) {    
    this.selectedParty = event.target.value;    
    this.initObj = this.partyOptions[this.selectedParty].partyMember;
    this.atualizarTabela()  
  }

  atualizarTabela(){
    this.dataSource = new MatTableDataSource<initTable>(example[this.selectedParty].partyMember);
    console.log(this.dataSource)  
  }
  teste(event: any){
    // this.dadosResult = event.target.value;
    console.log(event.target)
    console.log(this.dataSource.filteredData)  
  }
  
}
