import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { ChampionFormComponent } from './components/champion-form/champion-form.component';
import { ChampionListComponent } from './components/champion-list/champion-list.component';
import { UpdateChampionComponent } from './components/update-champion/update-champion.component';

@NgModule({
  declarations: [
    AppComponent,
    ChampionFormComponent,
    ChampionListComponent,
    UpdateChampionComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
