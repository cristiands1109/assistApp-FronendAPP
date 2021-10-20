import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmergancyPage } from './emergancy.page';

describe('EmergancyPage', () => {
  let component: EmergancyPage;
  let fixture: ComponentFixture<EmergancyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmergancyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmergancyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
