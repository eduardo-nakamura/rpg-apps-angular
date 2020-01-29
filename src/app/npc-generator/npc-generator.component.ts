import { Component, OnInit } from '@angular/core';
import * as nameList from './names';

@Component({
  selector: 'app-npc-generator',
  templateUrl: './npc-generator.component.html',
  styleUrls: ['./npc-generator.component.css']
})
export class NpcGeneratorComponent implements OnInit {
  races = ["Anão","Elfo","Halfling","Humano","Draconato","Gnomo","Meio-Elfo","Meio-Orc","Tiefling"];
  classes = ["Bárbaro","Bardo","Bruxo","Clérigo","Druida","Feiticeiro","Guerreiro","Ladino","Mago","Monge","Paladino","Patrulheiro"]
  genderList = ["Masculino","Feminino","Outro"]
  selectedRace = ""
  selectedClass = ""
  levelNPC = 1
  gender
  constructor() { }
  generateNPC(){
    if(this.selectedRace == ""){
      let rollRace = Math.floor((Math.random() * this.races.length));
      this.selectedRace = this.races[rollRace]
    }
    if(this.selectedClass == ""){
      let rollClass = Math.floor((Math.random() * this.classes.length));
      this.selectedClass = this.classes[rollClass]
    }    
    if(this.gender == undefined){      
      let rollGender = Math.floor((Math.random() * 3));      
      this.gender = this.genderList[rollGender]
    }
  }
  generateName(){    
    let npcRace =  nameList.names.filter(function(hero) {
      return hero.race == "Firbolg";
    });
  }
  resetNPC(){
    this.selectedRace = ""
    this.selectedClass = ""
    this.gender = undefined
  }
  ngOnInit() {
   
  }
 
 
}
