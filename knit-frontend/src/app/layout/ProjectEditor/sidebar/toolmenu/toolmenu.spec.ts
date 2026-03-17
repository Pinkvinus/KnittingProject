import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Toolmenu } from './toolmenu';

describe('Toolmenu', () => {
  let component: Toolmenu;
  let fixture: ComponentFixture<Toolmenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Toolmenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Toolmenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
