import { Injectable } from '@angular/core';
import {PostApiService} from './post-api.service';
import {Store} from '@ngrx/store';
import {State} from '../../store/State';
import {Post} from '../../entity/post';
import {Observable} from 'rxjs';
import {User} from "../../entity/User";



@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[];

  constructor(
      private postapi: PostApiService,
      private store: Store<State>
    ) {

    this.store.subscribe((state: State) => {
      this.posts = state.main.posts;
    });
  }

  $getPosts(): Observable<Post[]> {
    return this.postapi.$getAllPosts();
  }

  $getUsers(): Observable<User[]> {
    return this.postapi.$getAllUsers();
  }


}
