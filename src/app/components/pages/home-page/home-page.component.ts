import { Component, ViewEncapsulation} from '@angular/core';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';
import { CellService } from '../../../services/cell.service';
import { Cell } from '../../../models/cell';
import { Router } from '@angular/router';

import * as L from 'leaflet';
import "../../../../../node_modules/leaflet.tilelayer.colorfilter/src/leaflet-tilelayer-colorfilter.js";

@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePageComponent {

  cells: Cell[];
  user: User;

  settings = {
    clickable: true,
    columns: [
      {
        name: 'name',
        title: 'Cellule'
      }
    ]
  };

  map: L.Map;

  defaultToDarkFilter = [
    'grayscale: 80%'
  ];

  options = {
    layers: [
      (L.tileLayer as any).colorFilter('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '...' ,
        filter: this.defaultToDarkFilter
      }),
    ],
    zoom: 10,
    center: L.latLng(45.5088400, -73.5878100)
  };

  constructor(private cellService: CellService,
              private userService: UserService,
              private router: Router) {
    this.userService.getProfile().subscribe(
      data => {
        this.user = data;
      }
    );
    this.cellService.getCells('name').subscribe(
      data => {
        this.cells = data.results.map(c => new Cell(c) );
      }
    );
  }

  selectUser(cell) {
    this.router.navigate(['/activities/' + cell.id]);
  }

}
