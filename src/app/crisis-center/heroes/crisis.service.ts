import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Crisis } from './crisis';
import { CRISES } from './mock-crises';
import { MessageService } from '../../message.service';

@Injectable({
  providedIn: 'root',
})
export class CrisisService {
  constructor(private messageService: MessageService) {}

  getCrises(): Observable<Crisis[]> {
    const crises = of(CRISES);
    this.messageService.add('CrisisService: fetched crises');
    return crises;
  }
  getCrisis(id: number | string): Observable<Crisis> {
    const crisis = CRISES.find((h) => h.id === id)!;
    this.messageService.add(`CrisisService: fetched crises id=${id}`);
    return of(crisis);
  }
}
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
