import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { Project } from '../../models/project'
import { HomeService } from '../../services/home/home.service'
import { DataShareService } from '../../services/data-share/data-share.service';
import { ItemDetailsComponent } from '../../shared/item-details/item-details.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  currentTab = 'active';
  searchText = '';
  project = {
    name: 'test',
    description: 'test'
  }

  projects = []

  @ViewChild('itemDetails') itemDetails: ItemDetailsComponent;
  @ViewChild('myButton') myButton: ElementRef<HTMLButtonElement>;
  
  constructor(private homeService: HomeService,
              private dataShareService: DataShareService) {}

  ngOnInit() {
    this.getProjects();
  }

  ngAfterViewInit() {
    // this.myButton.nativeElement.click();
    this.myButton.nativeElement.style.background = 'red';
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
    alert(id);
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

  clickFunc() {
    // alert('you clicked me!!')
    this.itemDetails.item = { id: 1, name: 'test', description: 'test' };

    setTimeout(() => {
      this.itemDetails.deleteProject.emit(1);
    }, 2000)
  }
}
