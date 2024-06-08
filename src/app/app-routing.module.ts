import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionListComponent } from './components/champion-list/champion-list.component';
import { ChampionFormComponent } from './components/champion-form/champion-form.component';
import { UpdateChampionComponent } from './components/update-champion/update-champion.component';

const routes: Routes = [
  {
    path: 'champions',
    component: ChampionListComponent
  },
  {
    path: 'create-champion',
    component: ChampionFormComponent
  },
  {
    path: '',
    redirectTo: 'champions',
    pathMatch: 'full',
  },
  {
    path: 'update-champion/:id',
    component: UpdateChampionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
