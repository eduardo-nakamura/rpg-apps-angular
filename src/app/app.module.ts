import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
  MatSortModule, MatTableModule
} from "@angular/material";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiceRollerComponent } from './dice-roller/dice-roller.component';
import { InitTrackerComponent } from './init-tracker/init-tracker.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { FormsModule } from '@angular/forms';
import {MatTooltipModule} from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameHookComponent } from './game-hook/game-hook.component';
import { LootGeneratorComponent } from './loot-generator/loot-generator.component';
import { NpcGeneratorComponent } from './npc-generator/npc-generator.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HeaderMenuComponent } from './header-menu/header-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    DiceRollerComponent,
    InitTrackerComponent,
    IntroComponent,
    HomeComponent,
    GameHookComponent,
    LootGeneratorComponent,
    NpcGeneratorComponent,
    HeaderMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    BrowserAnimationsModule
  ],
  exports:[MatSidenavModule,MatPaginatorModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
