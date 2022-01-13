import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from 'src/auth/auth.service';
import { IConnectedSocket } from '../interfaces/connected-socket';

@Injectable()
export class SocketSessionGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private authService: AuthService,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.get<boolean>(
      'isPublic',
      context.getHandler(),
    );

    if (isPublic) {
      return true;
    }
    console.log('SocketSession activated');
    const client = context?.switchToWs()?.getClient<IConnectedSocket>();

    const { user, projectId } = await this.authService.validateWsUser(
      client.data?.token || client.handshake.auth?.token,
    );

    if (user) {
      client.data.user = user;
      return true;
    }
    if (projectId) client.data.projectId = projectId;
    return false;
  }
}
