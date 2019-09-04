import {Post} from "../../entity/post";
import { createReducer, on } from '@ngrx/store';
import {setPosts} from "../actions/main.actions";

export interface MainState {
  posts: Post[],
}

export const initialState: MainState = {
  posts: [],
};

export const mainReducer = createReducer(
  initialState,
  on(setPosts, (state, action) => ({...state, posts: action.posts }))
);
