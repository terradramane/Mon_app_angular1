import { Component, Input, OnChanges } from "@angular/core";

@Component({
    selector: 'app-sart-rating',
    templateUrl: './star-rating.component.html',
    styleUrls: ['./star-rating.component.css']
})

export class StartRatingComponent implements OnChanges {

  public starWidth: number | undefined;

  @Input()

  public rating: number = 2;

  ngOnChanges() {
    this.starWidth =this.rating * 125 / 5;
  }





}

