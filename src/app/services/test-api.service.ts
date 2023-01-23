import { Injectable } from '@angular/core';
import { AxiosResponse } from '../interfaces/Auth.interface';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class TestApiService {
  constructor() {}

  async testFetch(): Promise<boolean> {
    try {
      const response: AxiosResponse = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/ditto`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(response.data);

      return true;
    } catch (error) {
      console.log('error: ' + error);
    }
    return false;
  }
}
