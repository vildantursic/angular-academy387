import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project'
import { HomeService } from '../../services/home/home.service'
import { DataShareService } from '../../services/data-share/data-share.service';

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

  projects = []
  
  constructor(private homeService: HomeService,
              private dataShareService: DataShareService) {}

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.homeService.getProjects().subscribe((response: any) => {
      this.projects = response;
      this.dataShareService.data.next(this.projects.length) 
    });
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
  model = new Project('Name', '')
 
  onSubmit() { 
    console.log(this.model)
    this.submitted = true;
    // this.projects.push(this.model)
    this.homeService.createProject(this.model).subscribe((response: any) => {
      console.log(response);
      this.getProjects();
    });
  }
 
  deleteProject(id) {
    this.homeService.deleteProject(id).subscribe((response: any) => {
      console.log(response);
      this.getProjects();
    })
  }

  newHero() {
    this.model = new Project('', '');
  }

  onSelected(value) {
    console.log(value);
  }
}
