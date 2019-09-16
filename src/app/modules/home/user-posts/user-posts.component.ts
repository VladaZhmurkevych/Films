import { Component, OnInit } from '@angular/core';
import {Post} from "../../../entity/post";
import {User} from "../../../entity/User";
import {Store} from "@ngrx/store";
import {State} from "../../../store/State";
import {loadPosts, loadUsers} from "../../../store/actions/main.actions";
import {map} from "rxjs/operators";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {
  posts: Post[];
  user: User;
  page = 1;
  constructor(private store: Store<State>,
              private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.store.select(state => state.main.posts)
      .subscribe((posts: Post[]) => {
        this.posts = posts;
        console.log(Math.ceil(this.posts.length / 8));
      });

    this.route.params.pipe(map(p => p.id))
      .subscribe((value) => {
        this.store.select(state => state.main.users)
          .subscribe((users: User[]) => {
            this.user = users.find(person => person.id === +value);
          });
      });

    this.store.dispatch(loadUsers());

    this.store.dispatch(loadPosts());
    this.store.dispatch(loadUsers());
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
