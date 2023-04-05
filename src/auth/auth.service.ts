import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';

// The services classes uses the injectable decorator
@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  signup(dto: AuthDto) {
    // Generates the password hash

    // Save the new user in the db

    // return the saved user
    return { msg: 'I Have signed up' };
  }

  signin() {
    return { msg: 'I Have signed in' };
  }
}
