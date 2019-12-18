import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitTrackerComponent } from './init-tracker/init-tracker.component'
import { DiceRollerComponent } from './dice-roller/dice-roller.component'
import { IntroComponent } from './intro/intro.component'
import { HomeComponent } from './home/home.component'
import { GameHookComponent } from './game-hook/game-hook.component'

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
    path: "**",
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
