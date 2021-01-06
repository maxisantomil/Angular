import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  // tslint:disable-next-line: variable-name
  constructor( private _heroesService: HeroesService,
              private router:Router
              ) {
    //console.log('constructor');
  }

  // tslint:disable-next-line: typedef
  ngOnInit(){

    this.heroes = this._heroesService.getHeroes();
    //console.log(this.heroes);
  }

  verHeroe(idx: number){
    this.router.navigate (['/heroe', idx]);
  }

}
