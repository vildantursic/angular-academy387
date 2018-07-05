import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataShareService } from '../../services/data-share/data-share.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {

  $dssSub: Subscription;

  constructor(private dataSharedService: DataShareService) { }

  ngOnInit() {
    this.dataSharedService.data.next(0);
    this.$dssSub = this.dataSharedService.data.subscribe(item => {
      console.log(item);
    })
  }

  ngOnDestroy() {
    this.$dssSub.unsubscribe();
  }

}
