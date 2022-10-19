import { Component, OnInit, Input } from '@angular/core';
import { lockupVarsList } from 'src/app/config';

@Component({
  selector: 'app-external-service',
  templateUrl: './external-service.component.html',
  styleUrls: ['./external-service.component.scss']
})
export class ExternalServiceComponent implements OnInit {

  @Input() item: any;

  id = Date.now();

  get lockupVarsList() {
    return lockupVarsList;
  }

  settingActive = false;

  model = {
    serviceUrl: '',
    params: [],
    headers: [],
    method: 'GET',
    contentType: '',
    username: '',
    password: '',
    body: '',
    assignTo: '',
    scope: 'module',
    onHttpError: '',
    timeout: '',
    connectionErr: '',
    continueTo: false,
    continueToType: 'fixed',
    mapped: {},
    reponseVars: [],
    targetModule: '',
    mapping: []
  };

  constructor() { }

  ngOnInit(): void {
    this.item.model = this.getModel.bind(this);
  }

  getModel() {
    const model = { ...this.model };
    if (!this.settingActive) {
      delete model.method;
      delete model.contentType;
      delete model.username;
      delete model.password;
      delete model.body;
    }
    return model;
  }

  addOpeartion(variable) {
    if (variable.operation === void 0) {
      variable.operation = [];
    }
    const { type, scope, value } = variable;
    variable.operation.push({
      type, scope, value
    });
    variable.done = type === 'value';
    variable.type = null;
    variable.scope = null;
    variable.value = null;
  }

  showOperation(operation: any[]) {
    if (operation) {
      return operation.reduce((t, x) => {
        return t + (x.type === 'object' ? ('.' + x.value) : x.type === 'array' ? `[${x.value}]` : ' value');
      }, '');
    }
    return '';
  }

  removeOpeartion(variable) {
    if (variable.operation !== void 0) {
      const operation = variable.operation.pop();
      variable.type = operation.type;
      variable.scope = operation.scope;
      variable.value = operation.value;
      variable.done = false;
    }
  }

}
