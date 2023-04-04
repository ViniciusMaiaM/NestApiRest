import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

// Since it's an auth controller, it's a good practice to put a global prefix route
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // To make a route it's only needed to add an decorator to the type of route
  @Post('signup')
  signup() {
    return this.authService.signup();
  }

  @Post('signin')
  signin() {
    return this.authService.signin();
  }
}
