import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DashPage } from './dash.page';

describe('DashPage', () => {
  let component: DashPage;
  let fixture: ComponentFixture<DashPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DashPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
