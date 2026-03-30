import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Toolbutton } from './toolbutton';

describe('Toolbutton', () => {
  let component: Toolbutton;
  let fixture: ComponentFixture<Toolbutton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Toolbutton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Toolbutton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
