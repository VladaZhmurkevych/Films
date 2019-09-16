import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {PostService} from './post.service';
import {loadPosts, loadUsers, setPosts, setUsers} from '../../store/actions/main.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {Post} from '../../entity/post';
import { EMPTY } from 'rxjs';
import {User} from '../../entity/User';

@Injectable({
  providedIn: 'root'
})
export class PostEffects {
  @Effect() $loadPosts = this.actions$.pipe(
    ofType(loadPosts),
    switchMap(() => this.postService.$getPosts()
      .pipe(
        map((posts: Post[]) => setPosts({ posts })),
        catchError(() => EMPTY)
      )
    ),
  );


  @Effect() $loadUsers = this.actions$.pipe(
    ofType(loadUsers),
    switchMap(() => this.postService.$getUsers()
      .pipe(
        map((users: User[]) => setUsers({ users })),
        catchError(() => EMPTY)
      )
    ),
  );

  constructor(private actions$: Actions,
              private postService: PostService
              ) {}
}
