
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServerMessageService {
  constructor(private http: HttpClient) { }

  getMessage() {
    return this.http.get<ServerMessage>('api/getMessage');
  }
}

export interface ServerMessage {
  message: string;
}