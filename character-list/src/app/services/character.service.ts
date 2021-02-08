import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {throwError as observableThrowError } from 'rxjs';
import { Character } from '../models/character.model';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private _http: HttpClient) { }

  getCharacters() {
    return this._http
      .get<Character[]>('../../assets/data/db.json')
      .pipe(catchError(this._handleError));
  }

  private _handleError (error: any) {
    // TODO - handle errors better?
    // let errMsg = (error.message) ? error.message :
      // error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    // console.error(errMsg); // log to console instead
    return observableThrowError(error);
  }
}
