import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goToChatDetail() {
      this.route.navigate(['/chat-detail']);
  }

}
