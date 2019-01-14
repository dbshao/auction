import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit, OnChanges {

  @Input()
  private rating = 0;
  private stars: boolean[];

  @Output()
  private ratingChange: EventEmitter<number> = new EventEmitter();

  @Input()
  private readonly: boolean = true;

  constructor() {
  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
    }
  }

  clickStar(index: number) {
    if (!this.readonly) {
      this.rating = index + 1;
      // 值的改变会触发ngOnchange函数
      // this.ngOnInit();
      this.ratingChange.emit(this.rating);
    }

  }

}
