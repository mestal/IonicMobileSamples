import { Component, OnChanges, Input, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnChanges, OnInit {
  @Input() rating = 0;
  @Input() disabled: boolean;
  @Input() size: string;
  starWidth = 0;
  @Output() ratingClicked: EventEmitter<string> =
    new EventEmitter<string>();
  private width: number;

  selectedRating = 0;

  ngOnInit(): void {
    if(this.size == "large") {
      this.width = 160;
    }
    else {
      this.width = 80;
    }

    if(!this.disabled) {
      this.rating = 5;
    }
    this.starWidth = this.rating * this.width / 5;
  }

  ngOnChanges(): void {
    this.starWidth = this.rating * this.width / 5;
  }

  onClick(rating): void {
    if(this.disabled) {
      return;
    }

    this.selectedRating = rating; 

    this.ratingClicked.emit(rating);
  }
}