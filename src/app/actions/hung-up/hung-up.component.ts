import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hung-up',
  templateUrl: './hung-up.component.html',
  styleUrls: ['./hung-up.component.scss']
})
export class HungUpComponent implements OnInit {

  @Input() item: any;

  model = {};

  constructor() { }

  ngOnInit(): void {
    this.item.model = this.getModel.bind(this);
  }

  getModel() {
    return this.model;
  }

}
