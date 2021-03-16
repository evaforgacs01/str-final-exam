import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  userList$: BehaviorSubject<User[]> = this.userService.userList$;

  sortedOrder = 'ASC';
  sortedColumn = 'id';
  firstSorting = true;
  sortedCount = 0;
  phrase: string = '';
  column: string = '';
  direction: boolean = false;
  columnKey: string = '';
  filterKey: string = 'name';

  users$: Observable<User[]> = this.userService.getAll();

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getAll();
  }

  // onRemove(user: User): void {
  //   this.userService.remove(user).subscribe(() => {
  //     this.userService.getAll();
  //   });
  // }

  onRemove(user: User): void {
    this.userService
      .remove(user)
      .subscribe(() => alert('Biztosan törli a felhaszálót?'));
  }

  onChangePhrase(event: any): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }

  onColumnSelect(columnName: string): void {
    if (this.firstSorting) {
      this.sortedOrder = 'ASC';
      this.firstSorting = false;
    } else
      this.sortedOrder == 'ASC'
        ? (this.sortedOrder = 'DESC')
        : (this.sortedOrder = 'ASC');
    this.sortedColumn = columnName;
    this.direction = !this.direction;
  }
}
