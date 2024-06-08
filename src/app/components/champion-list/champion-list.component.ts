import {Component, OnInit} from '@angular/core';
import {ChampionService} from "../../services/champion.service";
import {Router} from "@angular/router";
import { Champion } from 'src/app/models/champion';

@Component({
  selector: 'app-champion-list',
  templateUrl: './champion-list.component.html',
  styleUrls: ['./champion-list.component.css']
})
export class ChampionListComponent implements OnInit{

  champions: Champion[] = [];


  constructor(private championService: ChampionService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getChampions();
  }

  private getChampions(): void {
    this.championService.getChampions().subscribe(champions => {
      console.error(champions)
      this.champions = champions;
    });
  }

  updateChampion(id: number) {
    this.router.navigate(['update-champion', id])
  }

  deleteChampion(id: number): void {
    this.championService.deleteChampion(id)
      .subscribe(() => {
        this.champions = this.champions.filter(champion => champion.id !== id);
      });
  }

  search(searchTerm: string): void {
    if (searchTerm.trim()) { // Assicurati che il termine di ricerca non sia una stringa vuota
      this.championService.searchChampions(searchTerm).subscribe(
        champions => {
          this.champions = champions; // Assegna i risultati della ricerca alla variabile champions
        },
        error => {
          console.error('Error searching champions:', error);
        }
      );
    } else {
      // Se il termine di ricerca è una stringa vuota, svuota l'array dei risultati
      this.champions = [];
    }
  }
  
}
