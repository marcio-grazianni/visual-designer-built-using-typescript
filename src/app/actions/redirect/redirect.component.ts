import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss']
})
export class RedirectComponent implements OnInit {

  @Input() item: any;

  model = {
    continueTo: '',
    continueToType: 'URL',
    method: 'GET'
  };

  constructor() { }

  ngOnInit(): void {
    this.item.model = this.getModel.bind(this);
  }

  getModel() {
    return this.model;
  }

}
