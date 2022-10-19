import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {DragDropModule} from '@angular/cdk/drag-drop';
import { SayComponent } from './actions/say/say.component';
import { DailComponent } from './actions/dail/dail.component';
import { PlayComponent } from './actions/play/play.component';
import { ControlComponent } from './actions/control/control.component';
import { LogComponent } from './actions/log/log.component';
import { RejectComponent } from './actions/reject/reject.component';
import { PauseComponent } from './actions/pause/pause.component';
import { RedirectComponent } from './actions/redirect/redirect.component';
import { SmsComponent } from './actions/sms/sms.component';
import { EmailComponent } from './actions/email/email.component';
import { RecordComponent } from './actions/record/record.component';
import { CollectComponent } from './actions/collect/collect.component';
import { ExternalServiceComponent } from './actions/external-service/external-service.component';
import { HungUpComponent } from './actions/hung-up/hung-up.component';

@NgModule({
  declarations: [
    AppComponent,
    SayComponent,
    DailComponent,
    PlayComponent,
    ControlComponent,
    LogComponent,
    RejectComponent,
    PauseComponent,
    RedirectComponent,
    SmsComponent,
    EmailComponent,
    RecordComponent,
    CollectComponent,
    ExternalServiceComponent,
    HungUpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
