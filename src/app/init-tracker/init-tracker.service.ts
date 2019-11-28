import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Character } from './initiativeCharacter';
import { FAHEN,NYARIS,NEW } from './initiativeGroups';


@Injectable({
  providedIn: 'root',
})
export class InitTrackerService {

  constructor() { }

  getHeroes(): Observable<Character[]> {
    // TODO: send the message _after_ fetching the heroes     
    
    return of(FAHEN,NYARIS);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/