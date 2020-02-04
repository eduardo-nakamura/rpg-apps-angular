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
  classes = nameList.classDnd.map(({ className }) => `${className}`)
  genderList = ["Masculino", "Feminino", "Outro"];
  selectedRace = "";
  selectedClass = "";
  levelNPC: number;
  generatedChar = {
    name: "", race: "", class: "", gender: "", level: 0, traits: [], stats: { str: 0, con: 0, wis: 0, int: 0, cha: 0, dex: 0 },aligment:[],pv:0
  }
  generatedCharClipboard = "";
  gender;
  id;

  constructor() { }
  generateNPC() {
    if(this.generatedChar.name == ""){
      this.randomizeNPC();
      this.generateName();
      this.generateTraits();
      this.generateAbility();    
      this.generatedChar.aligment = this.alignmentNPC();
      
    }
    this.generatedCharClipboard = JSON.stringify(this.generatedChar);
  }

  randomizeNPC() {
    if (this.selectedRace == "") {
      let rollRace = this.rollDice(this.races.length);
      this.selectedRace = this.races[rollRace];
    }
    if (this.selectedClass == "") {
      let rollClass = this.rollDice(this.classes.length);
      this.selectedClass = this.classes[rollClass];
    }
    if (this.gender == undefined) {
      let rollGender = this.rollDice(10);
      let genderSelect: number;
      if (rollGender <= 4) {
        genderSelect = 0;
      } else if (rollGender <= 8) {
        genderSelect = 1;
      } else {
        genderSelect = 2;
      }
      this.gender = this.genderList[genderSelect];
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
    if (this.generatedChar.name == "") {
      let raceName = this.selectedRace;
      let rollName;
      let nameNPC = "";
      let npcRace = nameList.names.filter(function (hero) {
        return hero.race == raceName;
      });
      switch (this.gender) {
        case "Masculino":
          rollName = this.rollDice(npcRace[0].male.length);
          nameNPC += npcRace[0].male[rollName];
          if (npcRace[0].lastName.length > 0) {
            let rollLastName = this.rollDice(npcRace[0].lastName.length);
            nameNPC += " " + npcRace[0].lastName[rollLastName];
          }
          this.generatedChar.name = nameNPC;
          break;
        case "Feminino":
          rollName = this.rollDice(npcRace[0].female.length);
          nameNPC += npcRace[0].female[rollName];
          if (npcRace[0].lastName.length > 0) {
            let rollLastName = this.rollDice(npcRace[0].lastName.length);
            nameNPC += " " + npcRace[0].lastName[rollLastName];
          }
          this.generatedChar.name = nameNPC;
          break;
        case "Outro":
          rollName = this.rollDice(npcRace[0].male.length + npcRace[0].female.length);
          if (rollName < npcRace[0].male.length) {
            nameNPC += npcRace[0].male[rollName];
          } else {
            nameNPC += npcRace[0].female[rollName - npcRace[0].male.length];
          }
          if (npcRace[0].lastName.length > 0) {
            let rollLastName = this.rollDice(npcRace[0].lastName.length);
            nameNPC += " " + npcRace[0].lastName[rollLastName];
          }
          this.generatedChar.name = nameNPC;
          break;
      }
    }
  }

  generateTraits() {
    if (this.generatedChar.traits.length == 0) {
      let traitNameDesc = ["Aparência: ", "Dons: ", "Maneirismos: ", "Vinculos: ", "Defeitos/Segredos: "]
      for (let i = 0; i < Object.keys(nameList.traits).length; i++) {
        let traitName = Object.keys(nameList.traits)[i];
        let dice = this.rollDice(nameList.traits[traitName].length);
        if (nameList.traits[traitName][dice] == "Role duas vezes, ignorando resultados iguais a 10") {
          let dice1 = this.rollDice(nameList.traits[traitName].length);
          let dice2 = this.rollDice(nameList.traits[traitName].length);
          do {
            dice2 = this.rollDice(nameList.traits[traitName].length);
          } while (dice1 === dice2)
          if (dice1 == 9) {
            dice1 -= 1;
          }
          if (dice2 == 9) {
            dice2 -= 1;
          }
          traitNameDesc[i] += nameList.traits[traitName][dice1] + ", " + nameList.traits[traitName][dice2];
        } else {
          traitNameDesc[i] += nameList.traits[traitName][dice]          
        }
        this.generatedChar.traits = traitNameDesc
      }
    }
  }
  generateAbility() {
    let raceFilter = this.selectedRace
    let classFilter = this.selectedClass
    let lvlUp = this.levelNPC
    let stats = { str: 0, con: 0, wis: 0, int: 0, cha: 0, dex: 0 }    
    let rollStats = new Array(6).fill(null)
    let rollStatsLvlUp = new Array(6).fill(null)
    for (let i = 0; i < 6; i++) {
      let rollDiceStats = new Array(4).fill(null)
      rollDiceStats = rollDiceStats.map(() => (Math.floor(Math.random() * 6) + 1));
      rollDiceStats.sort();
      rollDiceStats.shift();
      rollStats[i] = rollDiceStats.reduce(function (previous, current) {
        return previous + current;
      }, 0);
    }
    if(lvlUp > 1 ){      
      for(let j = 0; j < lvlUp; j++){        
        if (j < 4){
          rollStatsLvlUp[this.rollDice(6)] += 2;
        }
        if (j > 3 && j < 8){
          rollStatsLvlUp[this.rollDice(6)] += 3;
        }
        if (j > 7 && j < 12){
          rollStatsLvlUp[this.rollDice(6)] += 4;
        }
        if (j > 11 && j < 16){
          rollStatsLvlUp[this.rollDice(6)] += 5;
        }
        if (j > 15 && j < 21){
          rollStatsLvlUp[this.rollDice(6)] += 6;
        }        
      }  
    }   
    rollStatsLvlUp.sort(this.sortNumAscend)
    rollStats.sort(this.sortNumAscend)    
    switch(raceFilter){case"Anão":stats.con+=2;break;case"Elfo":case"Halfling":stats.dex+=2;break;case"Humano":stats.str+=1,stats.dex+=1,stats.con+=1,stats.wis+=1,stats.int+=1,stats.cha+=1;break;case"Draconato":stats.str+=2,stats.cha+=1;break;case"Gnomo":stats.int+=2;break;case"Meio-Elfo":stats.cha+=2;break;case"Meio-orc":stats.str+=2,stats.con+=1;break;case"Tiferino":stats.int+=1,stats.cha+=2;break}
    switch(classFilter){case"Bárbaro":stats={cha:Math.min(rollStats[0] + rollStatsLvlUp[0], 20),int:Math.min(rollStats[1] + rollStatsLvlUp[1], 20),wis:Math.min(rollStats[2] + rollStatsLvlUp[2], 20),dex:Math.min(rollStats[3] + rollStatsLvlUp[3], 20),con:Math.min(rollStats[4] + rollStatsLvlUp[4], 20),str:Math.min(rollStats[5] + rollStatsLvlUp[5], 20)};break;case"Bardo":stats={str:Math.min(rollStats[0] + rollStatsLvlUp[0], 20),con:Math.min(rollStats[1] + rollStatsLvlUp[1], 20),wis:Math.min(rollStats[2] + rollStatsLvlUp[2], 20),int:Math.min(rollStats[3] + rollStatsLvlUp[3], 20),cha:Math.min(rollStats[4] + rollStatsLvlUp[4], 20),dex:Math.min(rollStats[5] + rollStatsLvlUp[5], 20)};break;case"Bruxo":stats={str:Math.min(rollStats[0] + rollStatsLvlUp[0], 20),dex:Math.min(rollStats[1] + rollStatsLvlUp[1], 20),con:Math.min(rollStats[2] + rollStatsLvlUp[2], 20),int:Math.min(rollStats[3] + rollStatsLvlUp[3], 20),wis:Math.min(rollStats[4] + rollStatsLvlUp[4], 20),cha:Math.min(rollStats[5] + rollStatsLvlUp[5], 20)};break;case"Druid":stats={str:Math.min(rollStats[0] + rollStatsLvlUp[0], 20),cha:Math.min(rollStats[1] + rollStatsLvlUp[1], 20),con:Math.min(rollStats[2] + rollStatsLvlUp[2], 20),dex:Math.min(rollStats[3] + rollStatsLvlUp[3], 20),int:Math.min(rollStats[4] + rollStatsLvlUp[4], 20),wis:Math.min(rollStats[5] + rollStatsLvlUp[5], 20)};break;case"Feiticeiro":stats={dex:Math.min(rollStats[0] + rollStatsLvlUp[0], 20),str:Math.min(rollStats[1] + rollStatsLvlUp[1], 20),int:Math.min(rollStats[2] + rollStatsLvlUp[2], 20),wis:Math.min(rollStats[3] + rollStatsLvlUp[3], 20),con:Math.min(rollStats[4] + rollStatsLvlUp[4], 20),cha:Math.min(rollStats[5] + rollStatsLvlUp[5], 20)};break;case"Guerreiro":stats={cha:Math.min(rollStats[0] + rollStatsLvlUp[0], 20),wis:Math.min(rollStats[1] + rollStatsLvlUp[1], 20),int:Math.min(rollStats[2] + rollStatsLvlUp[2], 20),dex:Math.min(rollStats[3] + rollStatsLvlUp[3], 20),con:Math.min(rollStats[4] + rollStatsLvlUp[4], 20),str:Math.min(rollStats[5] + rollStatsLvlUp[5], 20)};break;case"Ladino":stats={cha:Math.min(rollStats[0] + rollStatsLvlUp[0], 20),str:Math.min(rollStats[1] + rollStatsLvlUp[1], 20),con:Math.min(rollStats[2] + rollStatsLvlUp[2], 20),wis:Math.min(rollStats[3] + rollStatsLvlUp[3], 20),int:Math.min(rollStats[4] + rollStatsLvlUp[4], 20),dex:Math.min(rollStats[5] + rollStatsLvlUp[5], 20)};break;case"Mago":stats={str:Math.min(rollStats[0] + rollStatsLvlUp[0], 20),dex:Math.min(rollStats[1] + rollStatsLvlUp[1], 20),cha:Math.min(rollStats[2] + rollStatsLvlUp[2], 20),con:Math.min(rollStats[3] + rollStatsLvlUp[3], 20),wis:Math.min(rollStats[4] + rollStatsLvlUp[4], 20),int:Math.min(rollStats[5] + rollStatsLvlUp[5], 20)};break;case"Monge":stats={int:Math.min(rollStats[0] + rollStatsLvlUp[0], 20),wis:Math.min(rollStats[1] + rollStatsLvlUp[1], 20),cha:Math.min(rollStats[2] + rollStatsLvlUp[2], 20),con:Math.min(rollStats[3] + rollStatsLvlUp[3], 20),str:Math.min(rollStats[4] + rollStatsLvlUp[4], 20),dex:Math.min(rollStats[5] + rollStatsLvlUp[5], 20)};break;case"Paladino":stats={int:Math.min(rollStats[0] + rollStatsLvlUp[0], 20),dex:Math.min(rollStats[1] + rollStatsLvlUp[1], 20),con:Math.min(rollStats[2] + rollStatsLvlUp[2], 20),cha:Math.min(rollStats[3] + rollStatsLvlUp[3], 20),wis:Math.min(rollStats[4] + rollStatsLvlUp[4], 20),str:Math.min(rollStats[5] + rollStatsLvlUp[5], 20)};break;case"Patrulheiro":stats={int:Math.min(rollStats[0] + rollStatsLvlUp[0], 20),wis:Math.min(rollStats[1] + rollStatsLvlUp[1], 20),con:Math.min(rollStats[2] + rollStatsLvlUp[2], 20),cha:Math.min(rollStats[3] + rollStatsLvlUp[3], 20),str:Math.min(rollStats[4] + rollStatsLvlUp[4], 20),dex:Math.min(rollStats[5] + rollStatsLvlUp[5], 20)}}    
    this.generatedChar.stats = stats    
    let classSelected = this.selectedClass
    let npcPv = nameList.classDnd.filter(function (hero) {      
      return hero.className == classSelected;
    });    
    let pvTotal = 0;
    for(let j = 0; j < lvlUp; j++){
      do{pvTotal += this.rollDice(npcPv[0].hpDice)} while (pvTotal == 0)      
      pvTotal += stats.con > 19 ? 5 : stats.con > 17 ? 4 : stats.con > 15 ? 3 : stats.con > 13 ? 2 : stats.con > 11 ? 1 : stats.con > 9 ? 0 : stats.con > 7 ? -1 : stats.con > 5 ? -2 : stats.con > 3 ? -3 : stats.con > 1 ? -4 : -5      
    }
    this.generatedChar.pv = pvTotal
  }

  sortNumAscend(a, b) {
    return a > b ? 1 : b > a ? -1 : 0;
  }
  resetNPC() {
    this.selectedRace = "";
    this.selectedClass = "";
    this.gender = undefined;
    this.levelNPC = undefined;
    this.generatedChar = {
      name: "", race: "", class: "", gender: "", level: 0, traits: [], stats: { str: 0, con: 0, wis: 0, int: 0, cha: 0, dex: 0 },aligment:[],pv:0
    }
  }
  alignmentNPC(){
    let alignments = new Array(2).fill(this.rollDice(3))
    if (alignments[0] == 0){
      alignments[0] = "Leal"
    } else if (alignments[0] == 1){
      alignments[0] = "Neutro"
    } else {
      alignments[0] = "Caótico"
    }
    if (alignments[1] == 0){
      alignments[1] = "bom"
    } else if (alignments[1] == 1){
      alignments[1] = "neutro"
    } else {
      alignments[1] = "mau"
    }
    if (alignments[0] == "Neutro" && alignments[1] == "neutro" ){
      alignments.pop()
    }    
    return alignments
  }
  ngOnInit() {

  }
  rollDice(max) {
    return Math.floor(Math.random() * (max - 0)) + 0;
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
