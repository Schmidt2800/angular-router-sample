import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Observable } from 'rxjs';
import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';
import { MessageService } from 'src/app/message.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
})
export class CrisisListComponent implements OnInit {
  crises$!: Observable<Crisis[]>;
  selectedId = 0;
  crises: Crisis[] = [];
  selectedCrisis?: Crisis;

  constructor(
    private route: ActivatedRoute,
    private service: CrisisService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getCrises();
    this.crises$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.service.getCrises();
      })
    );
  }

  onSelect(crisis: Crisis): void {
    this.selectedCrisis = crisis;
    this.messageService.add(`CrisisComponent: Selected crisis id=${crisis.id}`);
  }

  getHeroes(): void {
    this.service.getCrises().subscribe((heroes) => (this.heroes = heroes));
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
