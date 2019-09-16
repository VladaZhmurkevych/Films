import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {User} from '../../../entity/User';
import {State} from '../../../store/State';
import {Store} from '@ngrx/store';
import {loadUsers} from "../../../store/actions/main.actions";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  id: number;
  user: User;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private store: Store<State>
              ) { }

  ngOnInit() {
    this.route.params.pipe(map(p => p.id))
    .subscribe((value) => {
      this.id = value;
      this.store.select(state => state.main.users)
        .subscribe((users: User[]) => {
          this.user = users.find(person => person.id === +this.id);
        });
    });

    this.store.dispatch(loadUsers());


  }



}
