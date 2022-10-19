import { Component, ViewChild, ElementRef, OnInit, AfterViewInit, NgZone, ChangeDetectorRef, HostListener } from '@angular/core';
import { leftItems } from './config';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  get leftItems() {
    return leftItems;
  }

  rightItems: any[] = [
    // { id: 'Record', icon: 'phone', text: 'Dial' }
  ];

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $('.draggable').draggable({
      revert: 'invalid',
      connectToSortable: '.sortable',
      helper: 'clone',
      start: (event, ui) => {
        $(ui.helper).addClass('ui-helper');
      }
    });
    $('.sortable').sortable({
      revert: false,
      handle: '.handle',
      placeholder: 'ui-state-highlight',
      update: (_, ui) => {
        const item = ui.item;
        const index = item.index();
        if (item.hasClass('draggable')) {
          const id = item.data('id');
          const _id = Date.now();
          const _item = this.leftItems.find(x => x.id === id);
          this.rightItems.splice(index, 0, { ..._item, _id });
        } else {
          const id = ui.item.attr('id');
          const i = this.rightItems.findIndex(x => +x._id === +id);
          const el = this.rightItems.splice(i, 1);
          if (index < this.rightItems.length) {
            this.rightItems.splice(index, 0, el[0]);
          } else {
            this.rightItems.push(el[0]);
          }
        }
        $('.sortable .draggable').remove();
        this.cdRef.detectChanges();
      }
    });
  }

  removePanel(index: number) {
    this.rightItems.splice(index, 1);
  }

  save() {
    const data = [];
    this.rightItems.forEach((item: any) => {
      data.push({ [item.text]: item.model() });
    });
    console.log(data);
    const a = document.createElement('a');
    const file = new Blob([JSON.stringify(data)], { type: 'text' });
    a.href = URL.createObjectURL(file);
    a.download = 'data.json';
    a.click();
  }

  @HostListener('click')
  click() {
    setTimeout(_ => {
      this.cdRef.detectChanges();
    });
  }
}
