import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  @Input() item: any;

  model = {
    content: '',
    subject: '',
    to: '',
    from: '',
    cc: '',
    bcc: ''
  };

  constructor() { }

  ngOnInit(): void {
    this.item.model = this.getModel.bind(this);
  }

  getModel() {
    return this.model;
  }

}
