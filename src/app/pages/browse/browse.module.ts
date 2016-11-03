import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { BrowseComponent } from './browse.component';
import { routing } from './browse.routing';
import { DatePicker } from 'ng2-datepicker/ng2-datepicker';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    routing,
    FormsModule
  ],
  declarations: [
    BrowseComponent,
    DatePicker
  ]
})
export default class BrowseModule {}