import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChooseLocationPage } from './choose-location.page';

describe('ChooseLocationPage', () => {
  let component: ChooseLocationPage;
  let fixture: ComponentFixture<ChooseLocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseLocationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChooseLocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
