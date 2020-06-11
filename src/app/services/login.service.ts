import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  public authenticate(username: string, password: string) {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        if (username == 'vatsal' && password == 'vatsal') {
          resolve(true);
        } else {
          reject(false);
        }
      }, 2000)
    );
  }
}
