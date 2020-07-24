import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home-pager-header',
  templateUrl: './home-pager-header.component.html',
  styleUrls: ['./home-pager-header.component.scss']
})
export class HomePagerHeaderComponent implements OnInit {

  public statusToggle = false;
  @Output() public toggleSideNav = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  toggleClass() {
    this.statusToggle = (!this.statusToggle) ? true : false;
    this.toggleSideNav.emit();
  }

}
