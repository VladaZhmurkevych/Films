import {createAction, props} from '@ngrx/store';
import {Post} from '../../entity/post';
import {User} from "../../entity/User";

export const setPosts = createAction(
  '[MAIN] Set posts',
  props<{ posts: Post[] }>()
);


export const setUsers = createAction(
  '[MAIN] Set posts',
  props<{ users: User[] }>()
);


export const loadPosts = createAction(
  '[MAIN] Load Posts',
);

export const loadUsers = createAction(
  '[MAIN] Load Users',
);
