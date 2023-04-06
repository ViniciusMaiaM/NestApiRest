import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

// Since it's an auth controller, it's a good practice to put a global prefix route
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // To make a route it's only needed to add an decorator to the type of route
  @Post('signup')
  /* 
    In this way can be declared that a request is expected
    When working with nestjs it's not a good to use a request object of another library
    When using the nest decorators it's not necessary to import the request from express...
    In this way can be declared the expected type of the body 
  */
  signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  signin(@Body() dto: AuthDto) {
    return this.authService.signin(dto);
  }
}
