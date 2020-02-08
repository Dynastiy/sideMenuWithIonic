import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FlutterPage } from './flutter.page';

describe('FlutterPage', () => {
  let component: FlutterPage;
  let fixture: ComponentFixture<FlutterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlutterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FlutterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
