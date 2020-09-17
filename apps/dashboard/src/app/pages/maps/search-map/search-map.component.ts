import { Component } from '@angular/core';
import { PositionModel } from './entity/position.model';

@Component({
  selector: 'dash-search-map',
  templateUrl: './search-map.component.html',
})
export class SearchMapComponent {
  searchedPosition: PositionModel = new PositionModel();

  setPosition(position: PositionModel) {
    this.searchedPosition = position;
  }
}
