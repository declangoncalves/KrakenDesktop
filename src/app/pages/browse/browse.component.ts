import {Component} from '@angular/core';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'browse',
  template: require('./browse.template.html'),
  styleUrls: ['./browse.styles.css']
})
export class BrowseComponent {

  subletPosts: FirebaseListObservable<any>;
  postObject;

  constructor(af: AngularFire) {
    this.subletPosts = af.database.list('/sublet_posts');
  }

  /********* Start of Global Variables *********/

  browsePageInitialized = false; // Determines whether to show the browse filter initialization scene (default should be false)
  displayFiltersCard = false; // Determines if filters card is displayed

  /********* End of Global Variables *********/

  handleInitialFilterSubmit() {
    // TODO: Change this function obviously
    this.browsePageInitialized = true;
  }

  handleDisplayFiltersButton() {
    this.displayFiltersCard = !this.displayFiltersCard;
  }


}