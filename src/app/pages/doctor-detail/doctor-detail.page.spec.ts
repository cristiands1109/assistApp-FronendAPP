import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoctorDetailPage } from './doctor-detail.page';

describe('DoctorDetailPage', () => {
  let component: DoctorDetailPage;
  let fixture: ComponentFixture<DoctorDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoctorDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
