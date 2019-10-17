import { Component, OnInit } from '@angular/core';
import example from '../../assets/party.json';
@Component({
  selector: 'app-init-tracker',
  templateUrl: './init-tracker.component.html',
  styleUrls: ['./init-tracker.component.css']
})
export class InitTrackerComponent implements OnInit {
  partyOptions = example;
  selectedParty = '';
  partyMembers = '';
  constructor() { }

  ngOnInit() {
    console.log(example)
  }
  selectChangeHandler(event: any) {    
    this.selectedParty = event.target.value;
    this.partyMembers = this.partyOptions[this.selectedParty]
    console.log(this.partyMembers)
  }
}
