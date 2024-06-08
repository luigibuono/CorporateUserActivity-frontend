import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Champion } from '../models/champion';
import { ChampionDTO } from '../models/champion-dto.component';

@Injectable({
  providedIn: 'root'
})
export class ChampionService {
  private baseURL = 'http://localhost:8080/api/v1/champions';

  constructor(private httpClient: HttpClient) { }

  getChampions(): Observable<Champion[]> {
    return this.httpClient.get<Champion[]>(this.baseURL).pipe(
      catchError(this.handleError)
    );
  }

  createChampion(champion: ChampionDTO): Observable<Champion> {
    return this.httpClient.post<Champion>(this.baseURL, champion).pipe(
      catchError(this.handleError)
    );
  }

  getChampionById(id: number): Observable<Champion> {
    return this.httpClient.get<Champion>(`${this.baseURL}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  updateChampion(id: number, champion: ChampionDTO): Observable<Champion> {
    return this.httpClient.put<Champion>(`${this.baseURL}/${id}`, champion).pipe(
      catchError(this.handleError)
    );
  }

  deleteChampion(id: number): Observable<string> {
    return this.httpClient.delete<string>(`${this.baseURL}/${id}`).pipe(
      catchError(this.handleError)
    );
  }


  searchChampions(searchTerm: string): Observable<Champion[]> {
    return this.httpClient.get<Champion[]>(`${this.baseURL}/search?keyword=${searchTerm}`).pipe(
      catchError(this.handleError)
    );
  }
  

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error);
    return throwError('Something bad happened; please try again later.');
  }
}
