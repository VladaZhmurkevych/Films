import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../../entity/post';
import {User} from "../../../entity/User";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  @Input() user: User;
  constructor() { }

  ngOnInit() {
  }
}
