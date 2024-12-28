import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user = new BehaviorSubject<any>(null);

  constructor() { }

  public getUser = this.user.asObservable();

  setUser(theUser:any) {
    this.user.next(theUser);
  }
}
