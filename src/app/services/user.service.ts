import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { User } from '../interfaces/User';
// import { userList } from '../test/list-users';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  token: string = null;
  user: User = null;
  users: User[] = null;

  constructor(
    private navCtrl: NavController,
    private storage: Storage,
    private firestoreService: FirestoreService
  ) {}

  async findUser(email: string, password: string): Promise<User> {
    // this.users.forEach(user => {
    //   if((user.email.toLocaleLowerCase() === email.toLocaleLowerCase())){
    //     this.user = user;
    //   }
    // });

    return this.user;
  }

  async isUserInDataBase(email, password) {
    this.user = null;
    await this.findUser(email, password);
    if (this.user !== null) {
      await this.storage.set('token', this.user.uid);
      return true;
    }
    await this.storage.set('token', null);
    return false;
  }

  async setTokenLogin(uid) {
    await this.storage.set('token', uid);
  }

  async loadToken() {
    this.token = await this.storage.get('token');
  }

  async isTokenValid(): Promise<boolean> {
    await this.loadToken();
    return new Promise((resolve) => {
      if (!this.token) {
        resolve(false);
        this.navCtrl.navigateForward('/welcome');
      }
      resolve(true);
    });
  }

  async findEmail(email: string): Promise<boolean> {
    let isEmailExist = false;

    this.users.forEach((user) => {
      if (user.email.toLocaleLowerCase() === email.toLocaleLowerCase()) {
        isEmailExist = true;
      }
    });

    return isEmailExist;
  }
}
