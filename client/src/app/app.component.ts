import { Component } from '@angular/core';
import { ServerMessageService, ServerMessage } from './servermessage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ServerMessageService ]
})
export class AppComponent {
  serverMessage: ServerMessage;
  title = 'client';

  constructor(private serverMessageService: ServerMessageService) {
    console.log('constructor called...');
  }

  /**
   * https://angular.io/guide/lifecycle-hooks
   */
  ngAfterViewInit() {
    console.log("after the view initializes...");
  }

  handleButtonClick() {
    this.serverMessageService.getMessage().subscribe(data => this.serverMessage = {
      message: (data as any).message,
    });
  }

}
