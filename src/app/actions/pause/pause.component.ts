import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pause',
  templateUrl: './pause.component.html',
  styleUrls: ['./pause.component.scss']
})
export class PauseComponent implements OnInit {

  @Input() item: any;

  model = {
    length: null
  };

  constructor() { }

  ngOnInit(): void {
    this.item.model = this.getModel.bind(this);
  }

  getModel() {
    return this.model;
  }

}
