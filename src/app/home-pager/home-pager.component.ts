import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { Observable } from 'rxjs';
import { ProfilePost } from '../shared/profile-post';

@Component({
  selector: 'app-home-pager',
  templateUrl: './home-pager.component.html',
  styleUrls: ['./home-pager.component.scss']
})
export class HomePagerComponent implements OnInit {

  profilePosts$: Observable<Array<ProfilePost>>;

  @Output() public toggleNav = new EventEmitter<void>();
  public statusToggle = false;


  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.profilePosts$ = this.sharedService.getProfilePosts();
  }

  toggleSideNav() {
    this.toggleNav.emit();
  }
}
