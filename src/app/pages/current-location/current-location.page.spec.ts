import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CurrentLocationPage } from './current-location.page';

describe('CurrentLocationPage', () => {
  let component: CurrentLocationPage;
  let fixture: ComponentFixture<CurrentLocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentLocationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CurrentLocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
