import {
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
  } from "@nestjs/websockets";
  import { SupportRequestService } from "./request.service";
  import { Server } from "socket.io";
  import { IsAuthenticatedGuard } from "src/guards/is-authenticated.guard";
  import { IsManagerOrClient } from "src/guards/is-manager-or-client.guard";
  import {
    BadGatewayException,
    ForbiddenException,
    NotFoundException,
    UseGuards,
  } from "@nestjs/common";
  import { UserService } from "src/user/user.service";
  import { UserRoles } from "src/types/user-roles";
  import { InjectModel } from "@nestjs/mongoose";
  import { SupportRequest } from "./entities/support-request.entity";
  import { Model } from "mongoose";
  import { Message } from "./entities/message.entity";
  import { ParseMongoIdPipe } from "src/pipes/parse-mongo-id.pipe";
  import { LoggedUser } from "src/decorators/user.decorator";
  
  @WebSocketGateway()
  export class SupportGateway {
    constructor(
      private readonly supportRequestService: SupportRequestService,
      private readonly userService: UserService,
      @InjectModel(SupportRequest.name)
      private supportRequestModel: Model<SupportRequest>,
    ) {}
  
    @WebSocketServer()
    server: Server;
  
    @UseGuards(IsAuthenticatedGuard, IsManagerOrClient)
    @SubscribeMessage("subscribeToChat")
    async handleSubscribeToChat(
      @MessageBody("chatId", ParseMongoIdPipe) chatId: string,
      @LoggedUser("email") email: string,
      @LoggedUser("role") role: string,
    ) {
      try {
        const client = await this.userService.findByEmail(email);
        const supportRequest = await this.supportRequestModel.findById(chatId);
        if (!supportRequest) {
          throw new NotFoundException("Такого обращения нет");
        }
        if (
          role === UserRoles.Client &&
          client._id.toString() !== supportRequest.user.toString()
        ) {
          throw new ForbiddenException("У вас нет доступа к этому обращению");
        }
  
        const unsubscribe = this.supportRequestService.subscribe(
          async (supportRequest: SupportRequest, message: Message) => {
            const author = await this.userService.findById(message.author);
            const messageData = {
              id: message["_id"].toString(),
              createdAt: message.sentAt,
              text: message.text,
              readAt: message.readAt ? message.readAt : null,
              author: {
                id: author._id,
                name: author.name,
              },
            };
            this.server.emit("chatMessage", messageData);
          },
        );
  
        return unsubscribe;
      } catch (error) {
        throw new BadGatewayException(error.message);
      }
    }
  }