import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitTrackerComponent } from './init-tracker/init-tracker.component'
import { DiceRollerComponent } from './dice-roller/dice-roller.component'
import { IntroComponent } from './intro/intro.component'

const routes: Routes = [
  { 
    path: 'dice-roller', 
    component: DiceRollerComponent
  },
  { 
    path: 'init-tracker', 
    component: InitTrackerComponent
  },
  { 
    path: 'intro', 
    component: IntroComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
