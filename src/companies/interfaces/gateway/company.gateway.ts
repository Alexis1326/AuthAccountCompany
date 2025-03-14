import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { Logger } from '@nestjs/common';

@WebSocketGateway({
  cors: true, // Habilita CORS para conexiones WebSocket
  port: 8080, // Asegúrate de que coincida con el puerto de tu aplicación
})
export class CompanyGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;
  private logger = new Logger('CompanyGateway');

  handleConnection(client: any) {
    this.logger.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: any) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  emitCompanyCreated(company: any) {
    this.server.emit('company.created', company);
    this.logger.log(`Event "company.created" emitted with data: ${JSON.stringify(company)}`);
  }
}