import { Component, OnInit, Input, HostListener } from '@angular/core';
import { lockupVarsList, languages } from 'src/app/config';

@Component({
  selector: 'app-say',
  templateUrl: './say.component.html',
  styleUrls: ['./say.component.scss'],
  exportAs: 'say'
})
export class SayComponent implements OnInit {

  @Input() item: any;

  get lockupVarsList() {
    return lockupVarsList;
  }
  get languages() {
    return languages;
  }
  model = {
    text: '',
    language: '',
    voice: '',
    loop: 1
  };

  settingActive = false;

  constructor() { }

  ngOnInit(): void {
    this.item.model = this.getModel.bind(this);
  }

  getModel() {
    if (!this.settingActive) {
      return { text: this.model.text };
    }
    return { ...this.model };
  }

  addLookupVar(lockupVar) {
    this.model.text += `$${lockupVar}`;
  }

}
