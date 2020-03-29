import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {

  constructor(private metaService: Meta){}

  ngOnInit(){
    this.metaService.addTags([
      {name: 'keywords', content: 'Moto SAG Enduro'},
      {name: 'description', content: 'Cálculo para el SAG de una moto de Enduro'},
      {name: 'robots', content: 'index, follow'}
    ]);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/