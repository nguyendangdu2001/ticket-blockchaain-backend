import * as SocketIO from 'socket.io';
// import { Socket } from 'engine.io';
import { UserEntity } from 'src/users/entities/user.entity';

export interface IConnectedSocket extends SocketIO.Socket {
  conn: SocketIO.Socket['conn'] & {
    token: string;
    userId: string;
  };
  data: {
    token?: string;
    user?: UserEntity;
    projectId?: string;
  };
}
