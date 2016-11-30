import {Component} from '@angular/core';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'browse',
  template: require('./browse.template.html'),
  styleUrls: ['./browse.styles.css']
})
export class BrowseComponent {

  subletPosts: FirebaseListObservable<any>;
  subletsArray = [];
  filteredSubletsArray = [];
  postObject;

  constructor(af: AngularFire) {
    this.subletPosts = af.database.list('/sublet_posts', {
      query: {
        // limitToFirst: 10
      }
    });

    this.subletPosts.subscribe(data => {
      console.log(data);
      this.subletsArray = data;
      this.filteredSubletsArray = data;
    });

    console.log(this.subletsArray);
  }

  /********* Start of Global Variables *********/

  browsePageInitialized = false; // Determines whether to show the browse filter initialization scene (default should be false)
  displayFiltersCard = false; // Determines if filters card is displayed

  distanceSliderValue = 0;
  priceSliderStartValue = 0;
  priceSliderEndValue = 0;

  /********* End of Global Variables *********/

  handleInitialFilterSubmit() {
    // TODO: Change this function obviously
    this.browsePageInitialized = true;
  }

  handleDisplayFiltersButton() {
    this.displayFiltersCard = !this.displayFiltersCard;
  }

  priceSliderChanged(event){
    this.priceSliderStartValue = event.startValue;
    this.priceSliderEndValue = event.endValue;
  }

  distanceSliderChanged(event){
    this.distanceSliderValue = event.startValue;
  }

  ///////////////// Filters ///////////////////
  
  filters = {
    'rooms_available': 'Any',
    'length': 'Any'
  };

  configureFilters(type, value){
    switch(type){
      case 'roomsAvailable':
        this.filters.rooms_available = value;
        break;
      case 'length':
        this.filters.length = value;
        break;
    }

    console.log(this.filters);
    this.filterSubletObjects();
  }

  filterSubletObjects(){
    this.filteredSubletsArray = [];
    for (let i=0; i < this.subletsArray.length; i++){
      
      let itemQualifies = true;

      if ((this.filters.rooms_available != "Any") && (this.subletsArray[i].rooms_available != this.filters.rooms_available)){
        itemQualifies = false;
      }

      if ((this.filters.length != "Any") && (this.subletsArray[i].length != this.filters.length)){
        itemQualifies = false;
      }

      if (itemQualifies) {
        this.filteredSubletsArray.push(this.subletsArray[i]);
      }
    }
  }


  ///////////////// End of Filters ///////////////////

}