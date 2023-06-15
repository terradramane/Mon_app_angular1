import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HotelDetailsComponent } from './hotel-detail/hotel-detail.component';
import { HotellistComponent } from './hotel-list/hotel-list.component';
import { HotelEditComponent } from './hotel-edit/hotel-edit.component';



@NgModule({

  imports: [

     RouterModule.forChild([
      { path: 'hotels-detail/:id', component: HotelDetailsComponent },
      { path: 'hotels', component: HotellistComponent},
      { path: 'hotels/:id/edit', component: HotelEditComponent },

    ]),
  ],
  exports: [ RouterModule ]
})
export class HotelRoutingModule { }
