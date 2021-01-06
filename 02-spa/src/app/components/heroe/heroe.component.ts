import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroesService } from '../../servicios/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent {

    heroe:any = {};
  constructor( private activatedRoute: ActivatedRoute,
               private _heroesServide: HeroesService
    ){

    this.activatedRoute.params.subscribe(params => {
      //id porque hace referencia al id que llamamos en app.routes.ts
        this.heroe = this._heroesServide.getHeroe( params['id'] );
        console.log(this.heroe);
      });
  }
}
