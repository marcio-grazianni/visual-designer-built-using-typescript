import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements OnInit {

  @Input() item: any;

  model = {
    continueTo: null,
    beep: '',
    timeout: '',
    maxLength: '',
    finishOn: 'any',
    customKey: ''
  };

  settingActive = false;

  constructor() { }

  ngOnInit(): void {
    this.item.model = this.getModel.bind(this);
  }

  getModel() {
    const model = this.model;
    if (!this.settingActive) {
      delete model.timeout;
      delete model.maxLength;
      delete model.finishOn;
      delete model.customKey;
    }
    return this.model;
  }

}
