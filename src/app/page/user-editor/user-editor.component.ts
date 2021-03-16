import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.scss'],
})
export class UserEditorComponent implements OnInit {
  updating: boolean = false;
  bill: User = new User();
  /**
   * user$ {Observable<User>}
   * Can be two different type of User:
   * 1. If the params.id is 0: new User().
   * 2. If the params.id isn't 0: a user from the database based on its id.
   */
  user$: Observable<User> = this.activatedRoute.params.pipe(
    switchMap((params) => {
      if (Number(params.id) === 0) {
        return of(new User());
      }

      return this.userService.get(Number(params.id));
    })
  );

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onUpdate(user: User): void {
    this.updating = true;
    if (user.id === 0) {
      this.userService.create(user).subscribe(() => {
        // () => {
        //   this.toastr.success('Sikeres számla létrehozás!', 'Siker!', {
        //     timeOut: 3000,
        //   });
        //   this.updating = false;
        //   this.router.navigate(['bills']);
        // },
        // (error) =>
        //   this.toastr.error('Hiba a számla létrehozásakor!', 'Hiba!', {
        //     timeOut: 3000,
        //   })
        this.updating = false;
        this.router.navigate(['user']);
      });
      // } else {
      //   this.userService.update(bill).subscribe(
      //     () => {
      //       this.toastr.success('Sikeresen frissítetted a számlát!', 'Siker!', {
      //         timeOut: 3000,
      //       });
      //       this.updating = false;
      //       this.router.navigate(['bills']);
      //     },
      //     (error) =>
      //       this.toastr.error('Hiba történt a számla frissítésekor!', 'Hiba!', {
      //         timeOut: 3000,
      //       })
      // );
    }
  }

  onClickEdit(user: User): void {
    if (user.name === '' || user.name === '' || user.email === '') {
      alert('Fill the all data of user!');
    } else {
      this.userService.update(user).subscribe();
    }
  }
}
