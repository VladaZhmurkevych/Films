import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../../entity/post";

@Injectable({
  providedIn: 'root'
})
export class PostApiService {

  constructor(
    private http: HttpClient,
  ) { }

  $getAllArticles(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

}
