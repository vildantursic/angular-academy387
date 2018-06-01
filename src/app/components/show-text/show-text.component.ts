import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-text',
  templateUrl: './show-text.component.html',
  styleUrls: ['./show-text.component.css']
})
export class ShowTextComponent implements OnInit {

  @Input() text;

  constructor() { }

  ngOnInit() {
  }

}
