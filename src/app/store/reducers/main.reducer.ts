import {Post} from '../../entity/post';
import { createReducer, on } from '@ngrx/store';
import {setPosts, setUsers} from '../actions/main.actions';
import {User} from "../../entity/User";

export interface MainState {
  posts: Post[];
  users: User[];
}

export const initialState: MainState = {
  posts: [],
  users: [],
};

export const mainReducer = createReducer(
  initialState,
  on(setPosts, (state, action) => ({...state, posts: action.posts })),
  on(setUsers, (state, action) => ({...state, users: action.users }))

);
