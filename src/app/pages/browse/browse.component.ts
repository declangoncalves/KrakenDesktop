import {Component} from '@angular/core';

@Component({
  selector: 'browse',
  template: require('./browse.template.html'),
  styleUrls: ['./browse.styles.css']
})
export class BrowseComponent {
  constructor() {}

  /********* Start of Global Variables *********/

  browsePageInitialized = false; // Determines whether to show the browse filter initialization scene (default should be false)
  displayFiltersCard = false; // Determines if filters card is displayed

  subletsArray = [50,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5];

  /********* End of Global Variables *********/

  handleInitialFilterSubmit() {
    // TODO: Change this function obviously
    this.browsePageInitialized = true;
  }

  handleDisplayFiltersButton() {
    this.displayFiltersCard = !this.displayFiltersCard;
  }

}