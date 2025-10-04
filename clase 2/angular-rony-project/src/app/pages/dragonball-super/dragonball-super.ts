import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { CharacterList } from "../../components/dragonball/character-list/character-list";
import { CharacterAdd } from "../../components/dragonball/character-add/character-add";


interface Character {
  id : number;
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-dragonball-super',
  imports: [NgClass, CharacterList, CharacterAdd],
  templateUrl: './dragonball-super.html',
  styleUrl: './dragonball-super.css'
})
export class DragonballSuper {

  nombre = signal('');
  poder = signal(0)

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
