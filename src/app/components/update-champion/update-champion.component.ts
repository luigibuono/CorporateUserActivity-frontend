import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {catchError, of, tap} from "rxjs";
import { Champion } from 'src/app/models/champion';
import { ChampionDTO } from 'src/app/models/champion-dto.component';
import { ChampionService } from 'src/app/services/champion.service';

@Component({
  selector: 'app-update-champion',
  templateUrl: './update-champion.component.html',
  styleUrls: ['./update-champion.component.css']
})
export class UpdateChampionComponent implements OnInit {

  id!: number;
  champion: Champion = new Champion();
  constructor(private championService: ChampionService,
              private activatedRoute: ActivatedRoute,
              private router: Router){}


  championForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  })

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.championService.getChampionById(this.id)
      .pipe(
        tap(champion => {
          this.champion = champion;
          this.championForm.patchValue(champion);
        }),
        catchError(error => {
          console.log(error);
          return of(null);
        })
      )
      .subscribe();
  }
  onSubmit() {
    if (this.championForm.valid) {
      if (this.id !== undefined) {
        const championData: ChampionDTO = {
          firstName: this.championForm.value.firstName || '', // Se il valore è null o undefined, assegna una stringa vuota
          lastName: this.championForm.value.lastName || '', // Se il valore è null o undefined, assegna una stringa vuota
          email: this.championForm.value.email || '', // Se il valore è null o undefined, assegna una stringa vuota
        };
  
        this.championService.updateChampion(this.id, championData)
          .subscribe(() => {
            console.log("Champion updated successfully");
            this.router.navigate(['/champions']); // Reindirizza alla pagina dei campioni dopo l'aggiornamento
          }, error => {
            console.error("Error updating champion:", error);
          });
      } else {
        console.error("Champion id is undefined");
      }
    }
  }
  
  
}
