import { 
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
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
export class ItemDetailsComponent implements OnInit {

  @Input() item: Item;

  @Output() selected: EventEmitter<any> = new EventEmitter();
  @Output() deleteProject: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.selected.emit('constructor');    
  }

  ngOnInit() {
    this.selected.emit('ngOnInit');
  }

  changeProject() {
    this.item = { id: 1, name: 'test 2', description: 'test 2' };
  }

}
