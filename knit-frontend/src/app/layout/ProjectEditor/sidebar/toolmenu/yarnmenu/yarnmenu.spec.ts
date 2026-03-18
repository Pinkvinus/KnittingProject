import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Yarnmenu } from './yarnmenu';

describe('Yarnmenu', () => {
  let component: Yarnmenu;
  let fixture: ComponentFixture<Yarnmenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Yarnmenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Yarnmenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
