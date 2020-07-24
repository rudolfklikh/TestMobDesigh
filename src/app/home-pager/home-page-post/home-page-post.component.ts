import { Component, OnInit, Input } from '@angular/core';
import { ProfilePost } from 'src/app/shared/profile-post';

@Component({
  selector: 'app-home-page-post',
  templateUrl: './home-page-post.component.html',
  styleUrls: ['./home-page-post.component.scss']
})
export class HomePagePostComponent implements OnInit {

  @Input() post: ProfilePost;

  constructor() { }

  ngOnInit() {
  }

}
