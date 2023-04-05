import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

// The services classes uses the injectable decorator
@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}
  async signup(dto: AuthDto) {
    // Generates the password hash
    const hash = await argon.hash(dto.password);
    // Save the new user in the db
    try {
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          hash,
        },
      });

      // return the saved user
      return this.signToken(user.id, user.email);
    } catch (err) {
      // Verify if the error is being catch from the prisma
      if (err instanceof PrismaClientKnownRequestError) {
        // This code stands to a duplicated field
        if (err.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }
      // If the error does not come from prisma it just need to be thrown
      throw err;
    }
  }

  async signin(dto: AuthDto) {
    // Find the user by email
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    // If user does not exist throw exception
    if (!user) throw new ForbiddenException('Credentials incorrect');
    // Compare passwords
    const pwMatches = await argon.verify(user.hash, dto.password);
    // If password incorrect throw exception
    if (!pwMatches) throw new ForbiddenException('Credentials incorrect');
    // Send back the user
    return this.signToken(user.id, user.email);
  }

  async signToken(
    userId: string,
    email: string,
  ): Promise<{ access_token: string }> {
    const payload = {
      // Sub is a standart from the jwt that you need to define that name of variable
      sub: userId,
      email,
    };

    const secret = this.config.get('JWT_SECRET');

    const token = await this.jwt.signAsync(payload, {
      // Times for the token to expire
      expiresIn: '15m',
      secret: secret,
    });

    return {
      access_token: token,
    };
  }
}
