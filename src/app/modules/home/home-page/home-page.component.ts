import { Component, OnInit } from '@angular/core';
import {Post} from '../../../entity/post';
import {Store} from '@ngrx/store';
import {State} from '../../../store/State';
import {loadPosts} from '../../../store/actions/main.actions';
import {User} from "../../../entity/User";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  posts: Post[];
  users: User[];
  page = 1;
  constructor(private store: Store<State>,
  ) { }

  ngOnInit() {
    this.store.select(state => state.main.posts)
      .subscribe((posts: Post[]) => {
        this.posts = posts;
        console.log(posts);
        console.log(Math.ceil(this.posts.length / 8));
      });

    this.store.select(state => state.main.users)
      .subscribe((users: User[]) => {
        this.users = users;
      });

    this.store.dispatch(loadPosts());
  }

  nextPage() {
    if (this.page < Math.ceil(this.posts.length / 8)) {
      this.page++;
    }
    console.log(this.page);
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
    }
    console.log(this.page);
  }
}
