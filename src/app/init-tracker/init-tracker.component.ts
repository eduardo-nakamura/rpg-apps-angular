import { Component, OnInit } from '@angular/core';
import example from '../../assets/party.json';
@Component({
  selector: 'app-init-tracker',
  templateUrl: './init-tracker.component.html',
  styleUrls: ['./init-tracker.component.css']
})
export class InitTrackerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(example)
  }

}
