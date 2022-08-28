import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import axiosCall from '../../../utils/axiosCall';
import { AxiosResponse } from '../interfaces/Auth.interface';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root',
})
export class ActualCartService {
  constructor(private navCtrl: NavController, private storage: Storage) {}

  async getActualCartUser(user: User): Promise<boolean> {
    try {
      const res: AxiosResponse = await axiosCall(
        process.env.NEXT_PUBLIC_URL_API + `deliveries/actualCartUser/`,
        { user },
        // eslint-disable-next-line @typescript-eslint/naming-convention
        { 'Content-Type': 'application/json' },
        'GET'
      );

      if (res.status === 200) {
        await this.storage.set('actualCartUser', res.data);
        return true;
      }
    } catch (error) {
      console.log('Error!: ' + error);
    }

    return false;
  }
}
