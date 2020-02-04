import { Component, OnInit } from '@angular/core';
import * as nameList from './objs';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-npc-generator',
  templateUrl: './npc-generator.component.html',
  styleUrls: ['./npc-generator.component.css'],

})

export class NpcGeneratorComponent implements OnInit {
  races = nameList.names.map(({ race }) => `${race}`)
  classes = nameList.classDnd.map(({ className }) => `${className}`);
  genderList = ["Masculino", "Feminino", "Outro"];
  levelNPC: number;
  selectedRace = "";
  selectedClass = "";
  gender;
  generatedChar = {
    name: "", 
    race: "", 
    class: "", 
    gender: "", 
    level: 0, 
    traits: [], 
    statsInit: { str: 0, con: 0, wis: 0, int: 0, cha: 0, dex: 0 },
    statsCurrent: { str: 0, con: 0, wis: 0, int: 0, cha: 0, dex: 0 },
    aligment:[],
    pv:0
  }


  constructor() { }
  generateNPC() {
    this.randomizeNPC();
    this.generateName();
    this.generateStats();
  
  }

  randomizeNPC() {    
    if (this.selectedRace == "") {
      let rollRace = this.rollDice(this.races.length,0);
      this.selectedRace = this.races[rollRace];
    }
    if (this.selectedClass == "") {
      let rollClass = this.rollDice(this.classes.length,0);
      this.selectedClass = this.classes[rollClass];
    }
    if (this.gender == undefined) {
      let rollGender = this.rollDice(10,0);      
      if (rollGender <= 4) {
        this.gender = this.genderList[0];
      } else if (rollGender <= 8) {
        this.gender = this.genderList[1];
      } else {
        this.gender = this.genderList[2];
      }      
    }
    if (this.levelNPC == undefined) {
      this.levelNPC = 1;
    }
    this.generatedChar.race = this.selectedRace;
    this.generatedChar.class = this.selectedClass;
    this.generatedChar.gender = this.gender;
    this.generatedChar.level = this.levelNPC;  
  }

  generateName() {
    if (this.generatedChar.name == ""){
      let raceName = this.selectedRace;
      let npcRace = nameList.names.filter(function (hero) {
        return hero.race == raceName;
      });
      switch (this.gender) {
        case "Masculino":
          this.generatedChar.name += npcRace[0].male[this.rollDice(npcRace[0].male.length,0)];
          if (npcRace[0].lastName.length > 0) {            
            this.generatedChar.name += " " + npcRace[0].lastName[this.rollDice(npcRace[0].lastName.length,0)];
          }
          break;
        case "Feminino":
          this.generatedChar.name += npcRace[0].female[this.rollDice(npcRace[0].female.length,0)];
          if (npcRace[0].lastName.length > 0) {            
            this.generatedChar.name += " " + npcRace[0].lastName[this.rollDice(npcRace[0].lastName.length,0)];
          }
          break;
        case "Outro":
          let rollName = this.rollDice(npcRace[0].male.length + npcRace[0].female.length, 0);
          if (rollName < npcRace[0].male.length) {
            this.generatedChar.name += npcRace[0].male[rollName];
          } else {
            this.generatedChar.name += npcRace[0].female[rollName - npcRace[0].male.length];
          }
          if (npcRace[0].lastName.length > 0) {            
            this.generatedChar.name += " " + npcRace[0].lastName[this.rollDice(npcRace[0].lastName.length,0)];
          }
          break;
      }
    }
  }

  generateStats() {
   let raceFilter = this.selectedRace
   let classFilter = this.selectedClass
   this.generatedChar.level = this.levelNPC
   if(this.generatedChar.statsInit.str == 0){
    let rollStats = new Array(6).fill(null)
    for (let i = 0; i < 6; i++) {
      let rollDiceStats = new Array(4).fill(null)
      rollDiceStats = rollDiceStats.map(() => (this.rollDice(6,1)));
      rollDiceStats.sort();
      rollDiceStats.shift();
      rollStats[i] = rollDiceStats.reduce(function (previous, current) {
        return previous + current;
      }, 0);
      console.log(rollDiceStats,rollStats[i])
      switch(classFilter){
        case"Bárbaro":this.generatedChar.statsInit={cha:rollStats[0],int:rollStats[1],wis:rollStats[2],dex:rollStats[3],con:rollStats[4],str:rollStats[5]};break;
        case"Bardo":this.generatedChar.statsInit={str:rollStats[0],con:rollStats[1],wis:rollStats[2],int:rollStats[3],cha:rollStats[4],dex:rollStats[5]};break;
        case"Bruxo":this.generatedChar.statsInit={str:rollStats[0],dex:rollStats[1],con:rollStats[2],int:rollStats[3],wis:rollStats[4],cha:rollStats[5]};break;
        case"Druid":this.generatedChar.statsInit={str:rollStats[0],cha:rollStats[1],con:rollStats[2],dex:rollStats[3],int:rollStats[4],wis:rollStats[5]};break;
        case"Feiticeiro":this.generatedChar.statsInit={dex:rollStats[0],str:rollStats[1],int:rollStats[2],wis:rollStats[3],con:rollStats[4],cha:rollStats[5]};break;
        case"Guerreiro":this.generatedChar.statsInit={cha:rollStats[0],wis:rollStats[1],int:rollStats[2],dex:rollStats[3],con:rollStats[4],str:rollStats[5]};break;
        case"Ladino":this.generatedChar.statsInit={cha:rollStats[0],str:rollStats[1],con:rollStats[2],wis:rollStats[3],int:rollStats[4],dex:rollStats[5]};break;
        case"Mago":this.generatedChar.statsInit={str:rollStats[0],dex:rollStats[1],cha:rollStats[2],con:rollStats[3],wis:rollStats[4],int:rollStats[5]};break;
        case"Monge":this.generatedChar.statsInit={int:rollStats[0],wis:rollStats[1],cha:rollStats[2],con:rollStats[3],str:rollStats[4],dex:rollStats[5]};break;
        case"Paladino":this.generatedChar.statsInit={int:rollStats[0],dex:rollStats[1],con:rollStats[2],cha:rollStats[3],wis:rollStats[4],str:rollStats[5]};break;
        case"Patrulheiro":this.generatedChar.statsInit={int:rollStats[0],wis:rollStats[1],con:rollStats[2],cha:rollStats[3],str:rollStats[4],dex:rollStats[5]};break;
      }
    }
    // rollStats.sort(this.sortNumAscend) 
    console.log(rollStats)
    
   }
  }

  sortNumAscend(a, b) {
    return a > b ? 1 : b > a ? -1 : 0;
  }
  resetNPC() {
   
  }
  alignmentNPC(){
   
  }
  ngOnInit() {
    console.log(this.races.length)
  }
  rollDice(max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  copyText(val: string) {
    let selBox = document.createElement('textarea');
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
}
