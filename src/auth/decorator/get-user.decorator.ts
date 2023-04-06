import { createParamDecorator } from '@nestjs/common';
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';

export const GetUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContextHost) => {
    // Declaring that this request is going to be the same as the expres request
    const request: Express.Request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
