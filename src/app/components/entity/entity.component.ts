import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.scss']
})
export class EntityComponent implements OnInit {

  currentTab = 'active';
  searchText = '';

  entities = [
    {
      id: 1,
      name: 'Entity 1',
      description: 'Description 1'
    },
    {
      id: 2,
      name: 'Entity 2',
      description: 'Description 2'
    },
    {
      id: 3,
      name: 'Entity 3',
      description: 'Description 3'
    }
  ]
  
  constructor() { }

  ngOnInit() {
  }

  switchTabs(tab) {
    this.currentTab = tab;
  }

  createEntity() {
    let entity = {
      id: 4,
      name: 'entity 4',
      description: ''
    }

    this.entities.push(entity);
  }
}
