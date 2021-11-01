import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';
import { NgxBootstrapIconsModule, exclamationTriangle } from 'ngx-bootstrap-icons';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    NgxBootstrapIconsModule.pick({exclamationTriangle}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
