import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MobilePage } from './mobile.page';

describe('MobilePage', () => {
  let component: MobilePage;
  let fixture: ComponentFixture<MobilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MobilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
