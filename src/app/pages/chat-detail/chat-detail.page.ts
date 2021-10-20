import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-detail',
  templateUrl: './chat-detail.page.html',
  styleUrls: ['./chat-detail.page.scss'],
})
export class ChatDetailPage implements OnInit {

  messages = [
    {
      side : 'left',
      msg : 'Hello'
    },
    {
      side : 'right',
      msg : 'Hii'
    },
    {
      side : 'left',
      msg : 'Are you nearby ?'
    },
    {
      side : 'right',
      msg : 'I will be there in few mins'
    },
    {
      side : 'left',
      msg : 'Ok, I am waiting at vinmark Store'
    },
    {
      side : 'right',
      msg : 'Sorry I am stuck in traffic. Please give me a moment.'
    },
    {
      side : 'left',
      msg : 'Hello'
    },
    {
      side : 'right',
      msg : 'Hii'
    },
    {
      side : 'left',
      msg : 'Are you nearby ?'
    },
    {
      side : 'right',
      msg : 'I will be there in few mins'
    },
    {
      side : 'left',
      msg : 'Ok, I am waiting at vinmark Store'
    },
    {
      side : 'right',
      msg : 'Sorry I am stuck in traffic. Please give me a moment.'
    },
  ];
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goBack() {
      this.navCtrl.back();
  }
}
