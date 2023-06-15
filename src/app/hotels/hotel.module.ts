
import { NgModule } from '@angular/core';
import { HotellistComponent } from './hotel-list/hotel-list.component';
import { HotelDetailsComponent } from './hotel-detail/hotel-detail.component';
import { SharedModule } from '../shared/shared.module';
import { HotelRoutingModule } from './hotel-routing.module';
import { HotelEditComponent } from './hotel-edit/hotel-edit.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HotelData } from '../shared/api/hotel.data';



@NgModule({
  declarations: [
    HotellistComponent,
    HotelDetailsComponent,
    HotelEditComponent,


  ],
  imports: [

   SharedModule,
   HotelRoutingModule,
   InMemoryWebApiModule.forFeature(HotelData)


  ]

})

export class HotelModule { };


