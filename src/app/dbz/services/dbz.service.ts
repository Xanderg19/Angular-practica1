import { Injectable } from '@angular/core';
import {v4 as uuid} from 'uuid';

import { Character } from '../interfaces/character.interface';



@Injectable({providedIn: 'root'})
export class DbzService {

public characters: Character[] = [{
  id: uuid(),
  name: 'Goku',
  power: 9500
},
{
  id: uuid(),
  name: 'Vegeta',
  power: 7500
},
{
id: uuid(),
name:'Trunks',
power: 7000
}
];

addCharacter( character: Character): void {

const newCharacter:Character = {
  id: uuid(), ...character
};
this.characters.push(newCharacter);
}

deleteCharacterbyId(id:string) {
this.characters = this.characters.filter(character => character.id !== id);

}
}

