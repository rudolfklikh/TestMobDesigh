import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { Observable } from 'rxjs';
import { ProfileElement } from '../shared/profile-interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileELements$: Observable<Array<ProfileElement>>;
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.profileELements$ = this.sharedService.getProfileElements();
  }

}
