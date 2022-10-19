import { Component, OnInit, Input, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { languages, leftItems } from 'src/app/config';

declare var $: any;

@Component({
  selector: 'app-collect',
  templateUrl: './collect.component.html',
  styleUrls: ['./collect.component.scss']
})
export class CollectComponent implements OnInit, AfterViewInit {

  @Input() item: any;

  id = Date.now();

  settingActive = false;

  get languages() {
    return languages;
  }

  get leftItems() {
    return leftItems;
  }

  model = {
    type: 'menu',
    text: '',
    language: '',
    voice: '',
    mappings: [],
    continueTo: '',
    assignTo: '',
    scope: '',
    prttern: '',
    prtternType: 'one-of',
    inputType: 'dtmf',
    dtmfFinishOnKey: '',
    noOfDigits: '',
    dtmfTimeout: '',
    speachLanguage: '',
    hotwords: '',
    speechFinishOnKey: '',
    speechTimeout: '',
    partialResultURL: '',
    method: 'GET'
  };

  rightItems = [];

  showMsg = false;

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.item.model = this.getModel.bind(this);
  }

  getModel() {
    const model = { ...this.model };
    if (!this.settingActive) {
      delete model.inputType;
      delete model.dtmfFinishOnKey;
      delete model.noOfDigits;
      delete model.dtmfTimeout;
      delete model.speachLanguage;
      delete model.hotwords;
      delete model.speechFinishOnKey;
      delete model.speechTimeout;
      delete model.partialResultURL;
      delete model.method;
    } else {
      if (model.inputType === 'dtmf') {
        delete model.speachLanguage;
        delete model.hotwords;
        delete model.speechFinishOnKey;
        delete model.speechTimeout;
        delete model.partialResultURL;
        delete model.method;
      } else {
        delete model.dtmfFinishOnKey;
        delete model.noOfDigits;
        delete model.dtmfTimeout;
      }
    }
    if (model.type === 'menu') {
      delete model.continueTo;
      delete model.assignTo;
      delete model.scope;
      delete model.prttern;
      delete model.prtternType;
    } else {
      delete model.mappings;
    }
    const prompt = this.rightItems.map(x => x.model());
    return { ...model, prompt };
  }

  ngAfterViewInit() {
    $(`.sortable-${this.id}.collect-sortable-${this.id}`).sortable({
      revert: true,
      handle: '.handle',
      placeholder: 'ui-state-highlight',
      receive: (event, ui) => {
      },
      update: (_, ui) => {
        const item = ui.item;
        const id = item.data('id');
        if (!['Play', 'Say'].includes(id)) {
          this.showMessage();
        } else {
          const index = item.index();
          if (item.hasClass(`draggable`)) {
            const _item = this.leftItems.find(x => x.id === id);
            this.rightItems.splice(index, 0, { ..._item });
          } else {
            const _id = ui.item.attr('id');
            const i = this.rightItems.findIndex(x => +x._id === +_id);
            const el = this.rightItems.splice(i, 1);
            if (index < this.rightItems.length) {
              this.rightItems.splice(index, 0, el[0]);
            } else {
              this.rightItems.push(el[0]);
            }
          }
        }
        $(`.sortable-${this.id} .draggable`).remove();
        this.cdRef.detectChanges();
      }
    });
  }

  removePanel(index: number) {
    this.rightItems.splice(index, 1);
  }

  showMessage() {
    this.showMsg = true;
    setTimeout(() => {
      this.showMsg = false;
      this.cdRef.detectChanges();
    }, 2000);
  }

}
