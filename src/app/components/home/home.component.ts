import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentTab = 'active';
  searchText = '';
  project = {
    name: '',
    description: ''
  }

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
    //this.project.id = this.projects.length + 1
    
    Object.defineProperty(this.project, 'id', {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.projects.length + 1
    });

//    this.projects.push(this.project);
  }

  submitted = false;
  model = new Project(1, 'Name', '')
 
  onSubmit() { 
    console.log(this.model)
    this.submitted = true;
    this.projects.push(this.model)
  }
 
  newHero() {
    this.model = new Project(1, '', '');
  }

  onSelected(value) {
    console.log(value);
  }
}
