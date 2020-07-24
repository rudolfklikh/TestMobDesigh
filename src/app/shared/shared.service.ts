import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProfileElement } from './profile-interface';
import { ProfileElements } from '../mock-data';
import { ProfilePosts } from '../mock-data';
import { ProfilePost } from './profile-post';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  profileElements$: Observable<Array<ProfileElement>>;
  profilePosts$: Observable<Array<ProfilePost>>;

  getProfileElements() {
    this.profileElements$ = of(ProfileElements);
    return this.profileElements$;
  }

  getProfilePosts() {
    this.profilePosts$ = of(ProfilePosts);
    return this.profilePosts$;
  }
  constructor() { }
}
