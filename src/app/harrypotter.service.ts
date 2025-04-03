import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Wand {
  wood: string;
  core: string;
  length: number;
}

export interface Character {
  id?: string;
  name: string;
  species: string;
  house: string;
  wizard: boolean;
  ancestry: string;
  wand: Wand;
  actor: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class HarrypotterService {
  private baseUrl = 'https://hp-api.onrender.com/api';

  constructor(private http: HttpClient) {}

  // get all charactes
  getAllCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.baseUrl}/characters`);
  }

  // get characters by house
  getCharactersByHouse(house: string): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.baseUrl}/characters/house/${house}`);
  }

  // get character by name
  getCharacterByName(name: string): Observable<Character | undefined> {
    return new Observable((observer) => {
      this.getAllCharacters().subscribe((characters) => {
        const found = characters.find(c => c.name === name);
        observer.next(found);
        observer.complete();
      });
    });
  }
}
