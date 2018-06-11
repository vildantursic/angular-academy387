import { 
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
AfterViewChecked,
OnDestroy,
OnChanges,
AfterContentInit,
AfterContentChecked,
 } from '@angular/core';

interface Item {
  id: number,
  name: string,
  description: string
}

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit, 
                                             AfterContentInit,
                                             AfterContentChecked,
                                             AfterViewInit,
                                             AfterViewChecked,
                                             OnDestroy {

  @Input() item: Item

  @Output() selected: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.selected.emit('constructor');    
  }

  ngOnInit() {
    this.selected.emit('ngOnInit');
  }
  ngAfterContentInit() {
    this.selected.emit('ngAfterContentInit');    
  }
  ngAfterContentChecked() {
    this.selected.emit('AfterContentChecked');    
  }
  ngAfterViewInit() {
    this.selected.emit('AfterViewInit');    
  }
  ngAfterViewChecked() {
    this.selected.emit('AfterViewChecked');    
  }
  ngOnDestroy() {
    this.selected.emit('OnDestroy');    
  }

}
