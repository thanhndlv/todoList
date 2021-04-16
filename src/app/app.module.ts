import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableListComponent } from './table-list/table-list.component';
import { OnInputComponent } from './on-input/on-input.component';
import { FormsModule } from '@angular/forms';
import { TuPipe } from './tu.pipe'; 


@NgModule({
  declarations: [
    AppComponent,
    TableListComponent,
    OnInputComponent,
    TuPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //run ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
