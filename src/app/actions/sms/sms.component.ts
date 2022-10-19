import { Component, OnInit, Input } from '@angular/core';
import { lockupVarsList } from 'src/app/config';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.scss']
})
export class SmsComponent implements OnInit {

  get lockupVarsList() {
    return lockupVarsList;
  }

  @Input() item: any;

  model = {
    text: '',
    to: '',
    continueTo: null,
    from: '',
    statusCallback: ''
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
