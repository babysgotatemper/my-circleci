import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiURL: string = "https://jsonplaceholder.typicode.com/users";

  constructor(private httpClient: HttpClient) {}

  public getUsers() {
    return this.httpClient.get<User[]>(`${this.apiURL}`);
  }
}
