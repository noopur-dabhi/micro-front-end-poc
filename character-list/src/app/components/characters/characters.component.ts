import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Character } from '../../models/character.model';
import { CharacterService } from '../../services/character.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit, OnDestroy {

  characters: Character[];
  charactersData$: Subscription;

  constructor(
    private _characterService: CharacterService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.charactersData$ = this._characterService.getCharacters().subscribe(data => {
      this.characters = data;
    }, (error) => {
      console.log('****error', error);
    });
  }

  getCharacterImage = (character) => {
    character.image = '../../assets/images/' + character.character + '.jpeg';
    return character.image;
  }

  setCharacter = (character) => {
    console.log('****setting character', character);
    (window as any).store.character.setCharacter(character);
    this._router.navigate(['/character-info']);
  }

  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    if (this.charactersData$) {
      this.charactersData$.unsubscribe();
    }
  }

}
