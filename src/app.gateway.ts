// import { Logger, UseGuards } from '@nestjs/common';
// import {
//   SubscribeMessage,
//   WebSocketGateway,
//   OnGatewayConnection,
//   ConnectedSocket,
//   MessageBody,
//   OnGatewayDisconnect,
// } from '@nestjs/websockets';
// // import { WsUser } from 'dist/common/decorators/wsUser';
// import { Socket } from 'socket.io';
// import { AuthService } from './auth/auth.service';
// // import { ChatWaitingQueueService } from './chat-waiting-queue/chat-waiting-queue.service';
// import { Public } from './common/decorators';
// import { WsUser } from './common/decorators/wsUser';
// import { SocketSessionGuard } from './common/guards/socket-session.guard';
// import { IConnectedSocket } from './common/interfaces/connected-socket';
// // import { RoomsGateway } from './rooms/rooms.gateway';
// // import { RoomsService } from './rooms/rooms.service';
// import { Status, UserEntity } from './users/entities/user.entity';
// import { UsersService } from './users/users.service';
// @UseGuards(SocketSessionGuard)
// @WebSocketGateway()
// export class AppGateway implements OnGatewayConnection, OnGatewayDisconnect {
//   constructor(
//     private authService: AuthService,
//     private userService: UsersService,
//   ) {}
//   async handleDisconnect(client: IConnectedSocket) {
//     // console.log(user);
//     if (client?.data?.user) {
//       const user = await this.userService.findOneById(client?.data?.user?._id);
//       if (user.deviceCount > 0) user.deviceCount -= 1;
//       if (user.deviceCount === 0) user.statusChat = Status.OFFLINE;
//       await user?.save();
//     }
//   }
//   private readonly logger = new Logger(AppGateway.name);
//   @SubscribeMessage('whoami')
//   handleMessage(@ConnectedSocket() socket: IConnectedSocket) {
//     console.log(socket.data);
//     return socket.data?.user;
//   }
//   @Public()
//   @SubscribeMessage('login')
//   async handleLogin(
//     @ConnectedSocket() socket: IConnectedSocket,
//     @MessageBody() data: { token: string },
//   ) {
//     const { user } = await this.authService.validateWsUser(data?.token);
//     if (user.deviceCount === 0) {
//       user.statusChat = Status.ACTIVE;
//     }
//     user.deviceCount += 1;
//     await user?.save();
//     socket.data = { user, token: data?.token };
//     socket.join(user.id);
//     await this.userService.changeStatus(user.id, { status: Status.ACTIVE });
//     return { message: 'Success' };
//   }
//   @Public()
//   @SubscribeMessage('guestLogin')
//   async handleGuestLogin(
//     @ConnectedSocket() socket: IConnectedSocket,
//     @MessageBody() data: { token: string; projectId: string },
//   ) {
//     const { user } = await this.authService.validateWsUser(data?.token);
//     if (user.deviceCount === 0) user.statusChat = Status.ACTIVE;
//     user.deviceCount += 1;
//     await user?.save();
//     socket.data = { user, token: data?.token, projectId: data?.projectId };
//     socket.join(user.id);
//     await this.userService.changeStatus(user.id, { status: Status.ACTIVE });
//     return { message: 'Success' };
//   }
//   @SubscribeMessage('logout')
//   async handleLogout(
//     @ConnectedSocket() socket: IConnectedSocket,
//     @WsUser() user: UserEntity,
//   ) {
//     if (user.deviceCount > 0) user.deviceCount -= 1;
//     if (user.deviceCount === 0) user.statusChat = Status.OFFLINE;
//     await user?.save();
//     // await this.userService.changeStatus(user?._id, { status: Status.OFFLINE });
//     socket.leave(socket.data?.user?.id);
//     socket.data = {};

//     return { message: 'Success' };
//   }
//   async handleConnection(client: Socket) {
//     console.log(client.handshake.auth?.token);
//     client.setMaxListeners(20);
//     if (client.handshake.auth?.token) {
//       try {
//         const { user, projectId } = await this.authService.validateWsUser(
//           client.handshake.auth?.token,
//         );
//         console.log(user?._id, projectId);

//         client.join(user?._id?.toString());
//         client.data = { user, token: client.handshake.auth?.token, projectId };
//         if (user.deviceCount === 0) {
//           user.statusChat = Status.ACTIVE;
//         }
//         user.deviceCount += 1;
//         const newUser = await user?.save();
//         delete newUser.password;
//         client.emit('updateProfile', newUser);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   }
// }
