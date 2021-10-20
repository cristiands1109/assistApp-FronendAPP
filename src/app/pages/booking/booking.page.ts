import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar';
import * as moment from 'moment';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {

  @ViewChild(CalendarComponent, { static: false }) myCal: CalendarComponent;

  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };

  currnetMonth;
  date;
  myDate;
  todayDate;

  time = ['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '03:00 PM', '04:00 PM',
    '04:30 PM', '05:00 PM', '05:30 PM', '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM'
  ];
  selTime;

  constructor(private route: Router, private navCtrl: NavController) {
    this.todayDate = moment();
  }

  ngOnInit() {
    this.currnetMonth = this.getDate(new Date());

    console.log(this.currnetMonth);
  }

  goBack() {
      this.navCtrl.back();
  }

  goToPayment() {
    this.route.navigate(['/payment']);
  }

  back() {
    this.date = this.todayDate.subtract(1,'days').toDate();
    this.myDate = moment(this.date).format('ddd, Do MMMM')
    var swiper = document.querySelector('.swiper-container')['swiper'];
    var date = moment().add('-1', 'M').toLocaleString();
    this.currnetMonth = this.getDate(date);
    swiper.slidePrev();
  }

  next() {
    this.date = this.todayDate.add(1,'days').toDate();
    this.myDate = moment(this.date).format('ddd, Do MMMM');
    var swiper = document.querySelector('.swiper-container')['swiper'];

    console.log(swiper)
    swiper.slideNext();
  }

  getDate(date) {
    var d = new Date(date);
    const monthNames = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
      "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
    ];
    var c = monthNames[d.getMonth()];
    return c;
  }

  onCurrentDateChanged(ents) {
    this.currnetMonth = this.getDate(ents);
    console.log("====",this.currnetMonth);
  }

  selectTime(val) {
    this.selTime = val;
  }

}
