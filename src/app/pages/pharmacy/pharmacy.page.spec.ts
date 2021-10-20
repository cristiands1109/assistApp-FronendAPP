import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PharmacyPage } from './pharmacy.page';

describe('PharmacyPage', () => {
  let component: PharmacyPage;
  let fixture: ComponentFixture<PharmacyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PharmacyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
