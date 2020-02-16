import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelsRoutingModule } from './hotels-routing.module';
import { HotelsComponent } from './hotels.component';
import { HotelListingComponent } from './hotel-listing/hotel-listing.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [HotelsComponent, HotelListingComponent],
  imports: [
    CommonModule,
    HotelsRoutingModule,
    NgbAccordionModule
  ]
})
export class HotelsModule { }
