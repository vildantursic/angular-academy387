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
      date: Date()
    },
    {
      id: 2,
      name: 'Project 2',
      date: Date()
    },
    {
      id: 3,
      name: 'Project 3',
      date: Date()
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
      date: Date()
    }

    this.projects.push(project);
  }
}
