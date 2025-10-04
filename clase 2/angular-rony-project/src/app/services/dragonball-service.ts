import { Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DragonballService {
  characters = signal<Character[]>([
    {id: 1, nombre: 'Goku', poder: 10000},
    {id: 2, nombre: 'Vegenta', poder: 5000},
    {id: 3, nombre: 'Cell', poder: 8000},
    {id: 4, nombre: 'Yamcha', poder: 500},
  ]);

  addCharacter(character : Character) {
    this.characters.update((list)=>[...list, character]);
  }
}
