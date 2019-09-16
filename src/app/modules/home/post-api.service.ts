import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../../entity/post';
import {User} from "../../entity/User";

@Injectable({
  providedIn: 'root'
})
export class PostApiService {

  constructor(
    private http: HttpClient,
  ) { }

  $getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  $getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

}
