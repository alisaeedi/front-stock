import { Injectable } from '@angular/core';
import {Observable, Observer, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private subject: Subject<any>|null;
  public connect(url: any): Subject<any>{
    if (!this.subject) {
      this.subject = this.create(url);
    }
    return this.subject;
  }

  private create(url: any): Subject<any> {
    const ws = new WebSocket(url);
    const observable = new Observable((obs: Observer<any>) => {
      ws.onmessage = obs.next.bind(obs);
      ws.onerror = obs.error.bind(obs);
      ws.onclose = obs.complete.bind(obs);
      return ws.close.bind(ws);
    });
    const observer = {
      next: (data: any) => {
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify(data));
        }
      }
    };
    return Subject.create(observer, observable);
  }

  constructor() {
    this.subject = null;
  }
}
