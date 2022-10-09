import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import {MatSortModule} from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MultiplePipe } from './pipes/multiple.pipe'
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    MultiplePipe
  ],
  imports: [
    BrowserModule,
    MatSortModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
