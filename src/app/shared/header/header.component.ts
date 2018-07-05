import { Component, OnInit } from '@angular/core';
import { DataShareService } from '../../services/data-share/data-share.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  numberOfProjects = 0;

  constructor(private dataShareService: DataShareService) { }

  ngOnInit() {
    this.dataShareService.data.subscribe(item => {
      this.numberOfProjects = item;
    })
  }

}
