import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import axiosCall from 'utils/axiosCall';
import { AxiosResponse } from '../interfaces/Auth.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private storage: Storage) {}

  async getProducts(): Promise<boolean> {
    try {
      const res: AxiosResponse = await axiosCall(
        process.env.NEXT_PUBLIC_URL_API + `products/`,
        {},
        // eslint-disable-next-line @typescript-eslint/naming-convention
        { 'Content-Type': 'application/json' },
        'GET'
      );

      if (res.status === 200) {
        await this.storage.set('products', res.data);
        return true;
      }
    } catch (error) {
      console.log('Error!: ' + error);
    }

    return false;
  }
}
