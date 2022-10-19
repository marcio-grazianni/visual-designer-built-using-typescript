import { Component, OnInit, Input } from '@angular/core';
import { lockupVarsList } from 'src/app/config';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {

  get lockupVarsList() {
    return lockupVarsList;
  }

  @Input() item: any;

  model = {
    text: ''
  };

  constructor() { }

  ngOnInit(): void {
    this.item.model = this.getModel.bind(this);
  }

  getModel() {
    return this.model;
  }

  addLookupVar(lockupVar) {
    this.model.text += `$${lockupVar}`;
  }

}
