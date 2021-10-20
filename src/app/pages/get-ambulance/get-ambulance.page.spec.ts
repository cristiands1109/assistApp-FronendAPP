import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GetAmbulancePage } from './get-ambulance.page';

describe('GetAmbulancePage', () => {
  let component: GetAmbulancePage;
  let fixture: ComponentFixture<GetAmbulancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAmbulancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GetAmbulancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
