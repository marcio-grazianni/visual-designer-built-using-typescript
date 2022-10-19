import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {

  @Input() item: any;

  model = {
    conditions: [],
    actions: []
  };

  constructor() { }

  ngOnInit(): void {
    this.item.model = this.getModel.bind(this);
  }

  getModel() {
    return { ...this.model };
  }

  addCondition() {
    this.model.conditions.push({ condition: 'equal', regexType: 'regex', compareAs: 'text' });
  }

  addAction() {
    this.model.actions.push({ action: 'assign', varType: 'scope' });
  }

  onNeedleChange(condition) {
    const text = condition.needle || '';
    switch (condition.regexType) {
      case 'regex':
        condition.pattern = text;
        break;
      case 'startsWith':
        condition.pattern = '^' + text + '.*';
        break;
      case 'endsWith':
        condition.pattern = '^.*' + text + '$';
        break;
      case 'contains':
        condition.pattern = '^.*' + text + '.*$';
        break;
    }
  }
}
