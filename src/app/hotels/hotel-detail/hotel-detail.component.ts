import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IHotel } from '../shared/models/hotel';
import { HotellistService } from "../shared/services/hotel-list.service";

@Component({
 // selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})


export class HotelDetailsComponent implements OnInit {

  public hotel: IHotel | any = <IHotel>{ };
 // hotels: IHotel;

  constructor(

    private route: ActivatedRoute,
     private router: Router,
     private hotellistService: HotellistService

  ) { }

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.hotellistService.getHotels().subscribe((hotels: IHotel[]) => {
      this.hotel = hotels.find((hotel: IHotel)  => hotel.id == id);

       //console.log('hotel: ', this.hotel);
  })


 }

 public backToList(): void {
   this.router.navigate(['/hotels']);
 }

}
