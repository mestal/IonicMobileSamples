import { Component, OnChanges, Input, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnChanges, OnInit {
  @Input() rating = 0;
  @Input() disabled: boolean;
  starWidth = 0;
  @Output() ratingClicked: EventEmitter<string> =
    new EventEmitter<string>();

  selectedRating = 0;

  ngOnInit(): void {
    if(!this.disabled) {
      this.rating = 5;
      this.starWidth = this.rating * 80 / 5;
    }
  }

  ngOnChanges(): void {
    this.starWidth = this.rating * 80 / 5;
  }

  onClick(rating): void {
    if(this.disabled) {
      return;
    }

    this.selectedRating = rating; 

    this.ratingClicked.emit(rating);
  }
}