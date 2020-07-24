import { Component, OnInit, Input } from '@angular/core';
import { ProfileElement } from 'src/app/shared/profile-interface';

@Component({
  selector: 'app-profile-element',
  templateUrl: './profile-element.component.html',
  styleUrls: ['./profile-element.component.scss']
})
export class ProfileElementComponent implements OnInit {



  @Input() element: ProfileElement;
  constructor() { }

  ngOnInit() {
  }

}
