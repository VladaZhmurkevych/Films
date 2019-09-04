import {createAction, props} from '@ngrx/store';
import {Post} from "../../entity/post";

export const setPosts = createAction(
  '[MAIN] Set posts',
  props<{ posts: Post[] }>()
);
