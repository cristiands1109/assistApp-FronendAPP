import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SetReminderPage } from './set-reminder.page';

describe('SetReminderPage', () => {
  let component: SetReminderPage;
  let fixture: ComponentFixture<SetReminderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetReminderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SetReminderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
