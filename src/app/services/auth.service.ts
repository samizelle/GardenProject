import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/RegisterUser';

const ApiUrl = 'https://efa-gardenapp-backend.herokuapp.com'

@Injectable()
export class AuthService {

  constructor() { }

  register(regUserData: RegisterUser) {

  }
}