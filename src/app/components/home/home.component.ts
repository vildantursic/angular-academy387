import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentTab = 'active';
  searchText = '';

  projects = [
    {
      id: 1,
      name: 'Project 1',
    }
  ]
  
  constructor() { }

  ngOnInit() {
  }

  switchTabs(tab) {
    this.currentTab = tab;
  }

  createProject() {
    let project = {
      id: 4,
      name: 'Project 4',
      description: ''
    }

    this.projects.push(project);
  }

  onSelected(value) {
    console.log(value);
  }
}
