import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitTrackerComponent } from './init-tracker/init-tracker.component'
import { DiceRollerComponent } from './dice-roller/dice-roller.component'
import { IntroComponent } from './intro/intro.component'
import { HomeComponent } from './home/home.component'
import { GameHookComponent } from './game-hook/game-hook.component'
import { LootGeneratorComponent } from './loot-generator/loot-generator.component'
import { NpcGeneratorComponent } from './npc-generator/npc-generator.component'
const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent
  },
  { 
    path: 'dice-roller', 
    component: DiceRollerComponent
  },
  { 
    path: 'init-tracker', 
    component: InitTrackerComponent
  },
   { 
    path: 'game-hook', 
    component: GameHookComponent
  },
  { 
    path: 'intro', 
    component: IntroComponent
  },
  { 
    path: 'loot-generator', 
    component: LootGeneratorComponent
  },
  { 
    path: 'npc-generator', 
    component: NpcGeneratorComponent
  },
  {
    path: "**",
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
