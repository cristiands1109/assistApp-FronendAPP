import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppoinmentsPage } from './appoinments.page';

describe('AppoinmentsPage', () => {
  let component: AppoinmentsPage;
  let fixture: ComponentFixture<AppoinmentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppoinmentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppoinmentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
