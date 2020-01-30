import { Component, OnInit } from '@angular/core';
import * as nameList from './names';

@Component({
  selector: 'app-npc-generator',
  templateUrl: './npc-generator.component.html',
  styleUrls: ['./npc-generator.component.css']
})

export class NpcGeneratorComponent implements OnInit {
  races = nameList.names.map(({race}) => `${race}`)
  classes = ["Bárbaro","Bardo","Bruxo","Clérigo","Druida","Feiticeiro","Guerreiro","Ladino","Mago","Monge","Paladino","Patrulheiro"];
  genderList = ["Masculino","Feminino","Outro"];
  selectedRace = "";
  selectedClass = "";
  levelNPC:number;
  generatedChar = {
    name:"",race:"",class:"",gender:"",level:0,traits:[]
  }
  generatedCharClipboard = ""
  gender;

  constructor() { }
  generateNPC(){    
    this.resetNPC();    
    this.randomizeNPC();
    this.generateName();
    this.generateTraits()
    this.generatedCharClipboard = JSON.stringify(this.generatedChar);    
  }
  randomizeNPC(){
    if(this.selectedRace == ""){
      let rollRace = Math.floor((Math.random() * this.races.length));
      this.selectedRace = this.races[rollRace];
    }
    if(this.selectedClass == ""){
      let rollClass = Math.floor((Math.random() * this.classes.length));
      this.selectedClass = this.classes[rollClass];
    }    
    if(this.gender == undefined){      
      let rollGender = Math.floor((Math.random() * 10));      
      let genderSelect: number;
      if (rollGender <= 4){
        genderSelect = 0;
      } else if (rollGender <= 8){
        genderSelect = 1;
      } else {
        genderSelect = 2;
      }
      this.gender = this.genderList[genderSelect]
    }    
    if(this.levelNPC == undefined){      
      this.levelNPC = 1;
    }
    this.generatedChar.race = this.selectedRace;
    this.generatedChar.class = this.selectedClass;
    this.generatedChar.gender = this.gender;
    this.generatedChar.level = this.levelNPC;

  }
  generateName(){        
    let raceName = this.selectedRace;
    let rollName;
    let nameNPC ="";
    let npcRace =  nameList.names.filter(function(hero) {
      return hero.race == raceName;
    });    
    switch(this.gender){
      case "Masculino":        
        rollName = Math.floor((Math.random() * npcRace[0].male.length) - 1);
        nameNPC += npcRace[0].male[rollName];
        if (npcRace[0].lastName.length > 0){
          let rollLastName = Math.floor((Math.random() * npcRace[0].lastName.length) - 1);        
          nameNPC += " " + npcRace[0].lastName[rollLastName];
        }   
        this.generatedChar.name = nameNPC;
        break;
      case "Feminino":
        rollName = Math.floor((Math.random() * npcRace[0].female.length) - 1);
        nameNPC += npcRace[0].female[rollName];
        if (npcRace[0].lastName.length > 0){
          let rollLastName = Math.floor((Math.random() * npcRace[0].lastName.length) - 1);        
          nameNPC += " " + npcRace[0].lastName[rollLastName];
        }        
        this.generatedChar.name = nameNPC;
        break;
      case "Outro":
        rollName = Math.floor((Math.random() * npcRace[0].male.length + npcRace[0].female.length) - 1);        
        if(rollName < npcRace[0].male.length){
          nameNPC += npcRace[0].male[rollName];
        } else {
          nameNPC += npcRace[0].female[rollName - npcRace[0].male.length];
        }
        if (npcRace[0].lastName.length > 0){
          let rollLastName = Math.floor((Math.random() * npcRace[0].lastName.length) - 1);        
          nameNPC += " " + npcRace[0].lastName[rollLastName];
        }      
        this.generatedChar.name = nameNPC;
        break;
    }

  }
  generateTraits(){
    let traitName = ["Aparência: ","Dons: ","Maneirismos: ","Vinculos: ","Defeitos/Segredos: "]
    for (let i = 0; i < Object.keys(nameList.traits).length; i++){      
      let traitName = Object.keys(nameList.traits)[i];
      let dice = this.rollDice(nameList.traits[traitName].length) 
      console.log(traitName[0])     
      if(nameList.traits[traitName][dice] == "Role duas vezes, ignorando resultados iguais a 10"){
        let dice1 = this.rollDice(nameList.traits[traitName].length)
        let dice2 = this.rollDice(nameList.traits[traitName].length)
        this.generatedChar.traits.push(nameList.traits[traitName][dice1])
        this.generatedChar.traits.push(nameList.traits[traitName][dice2])
      } else {
        this.generatedChar.traits.push(traitName[i],nameList.traits[traitName][dice])
      }      
    }    
  }

  resetNPC(){
    this.selectedRace = "";
    this.selectedClass = "";
    this.gender = undefined;
    this.levelNPC = undefined;
    this.generatedChar = {      
      name:"",race:"",class:"",gender:"",level:0,traits:[]
    }
  }

  ngOnInit() {
  //  this.generateName()
  
  }
  rollDice(diceSides){
    return Math.floor((Math.random() * diceSides));
  }
  copyText(val: string){
    let selBox = document.createElement('textarea');    
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
}
// {"name":"Kilskan Imrad","race":"Draconato","class":"Paladino","gender":"Masculino","level":1}