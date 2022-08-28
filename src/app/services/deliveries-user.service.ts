import { Injectable } from '@angular/core';
import axiosCall from 'utils/axiosCall';
import { AxiosResponse } from '../interfaces/Auth.interface';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root',
})
export class DeliveriesUserService {
  constructor(private storage: Storage) {}

  async getPastDeliveriesUser(user: User): Promise<boolean> {
    try {
      const res: AxiosResponse = await axiosCall(
        process.env.NEXT_PUBLIC_URL_API + `deliveries/lastDeliveries/`,
        { user },
        // eslint-disable-next-line @typescript-eslint/naming-convention
        { 'Content-Type': 'application/json' },
        'GET'
      );

      if (res.status === 200) {
        await this.storage.set('lastDeliveriesUser', res.data);
        return true;
      }
    } catch (error) {
      console.log('Error!: ' + error);
    }

    return false;
  }
}
