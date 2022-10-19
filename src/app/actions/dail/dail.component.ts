import { Component, OnInit, NgZone, ChangeDetectorRef, Input, AfterViewInit, Host, HostListener } from '@angular/core';
import { lockupVarsList } from 'src/app/config';

declare var $: any;

@Component({
  selector: 'app-dail',
  templateUrl: './dail.component.html',
  styleUrls: ['./dail.component.scss']
})
export class DailComponent implements OnInit, AfterViewInit {

  id = Date.now();

  @Input() item: any;

  defaults = {
    phone: { statusCallbackType: 'URL' },
    client: { statusCallbackType: 'URL' },
    conference: { whileWaitingType: 'URL' },
    'sip-url': { statusCallbackType: 'URL' }
  };

  get lockupVarsList() {
    return lockupVarsList;
  }

  model = {
    nouns: [],
    continueTo: '',
    timeout: null,
    timeLimit: null,
    callerID: null,
    beforeConnect: null,
    ringBackType: 'project',
    ringBack: null
  };

  setting1 = false;

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.item.model = this.getModel.bind(this);
  }

  getModel() {
    return this.model;
  }

  ngAfterViewInit() {
    $(`.dial-noun-${this.id}`).draggable({
      revert: 'invalid',
      helper: 'clone',
      connectToSortable: `.dial-dropzone-${this.id}`,
    });
    $(`.dial-dropzone-${this.id}`).sortable({
      handle: '.handle',
      placeholder: 'ui-state-highlight',
      over: (_, ui) => {
        $(`.dial-dropzone-${this.id} .empty-dropzone-${this.id}`).remove();
      },
      update: (_, ui) => {
        const item = ui.item;
        const index = item.index();
        if (item.hasClass(`dial-noun-${this.id}`)) {
          const type = item.data('type');
          const _id = Date.now();
          this.model.nouns.splice(index, 0, { type, setting: false, ...this.defaults[type], _id });
          this.cdRef.detectChanges();
        } else {
          const id = ui.item.attr('id');
          const i = this.model.nouns.findIndex(x => +x._id === +id);
          const el = this.model.nouns.splice(i, 1);
          if (index < this.model.nouns.length) {
            this.model.nouns.splice(index, 0, el[0]);
          } else {
            this.model.nouns.push(el[0]);
          }
        }
        $(`.dial-dropzone-${this.id} .dial-noun-${this.id}`).remove();
      }
    });
  }

  remove(index) {
    this.model.nouns.splice(index, 1);
  }

}
