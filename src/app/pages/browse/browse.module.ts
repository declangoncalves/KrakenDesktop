import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { BrowseComponent } from './browse.component';
import { routing } from './browse.routing';
import { DatePicker } from 'ng2-datepicker/ng2-datepicker';
import { FormsModule }   from '@angular/forms';
import { AngularFireModule } from 'angularfire2';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyAVxEuvIDSfmE7a3Nr4U45x9jbMgmKZCGY",
  authDomain: "kraken-df19a.firebaseapp.com",
  databaseURL: "https://kraken-df19a.firebaseio.com",
  storageBucket: "kraken-df19a.appspot.com",
  messagingSenderId: "942377218598"
};

@NgModule({
  imports: [
    CommonModule,
    routing,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  declarations: [
    BrowseComponent,
    DatePicker
  ]
})
export default class BrowseModule {}