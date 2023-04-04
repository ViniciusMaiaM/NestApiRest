import { Injectable } from '@nestjs/common';

// The services classes uses the injectable decorator
@Injectable({})
export class AuthService {
  signup() {
    return { msg: 'I Have signed up' };
  }

  signin() {
    return { msg: 'I Have signed in' };
  }
}
