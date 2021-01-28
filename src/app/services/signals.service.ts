import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {WebsocketService} from './websocket.service';
import { map } from 'rxjs/operators';

interface Message {
  author: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class SignalsService {

  SIGNAL_URL = 'ws://echo.websocket.org/';

  public messages: Subject<Message>;
  constructor(wsService: WebsocketService) {
    this.messages = wsService.connect(this.SIGNAL_URL).pipe(map(
      (response: MessageEvent): Message => {
        const data = JSON.parse(response.data);
        return {
          author: data.author,
          message: data.message
        };
      }
    )) as Subject<Message>;
  }
}
