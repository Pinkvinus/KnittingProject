import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shapemenu } from './shapemenu';

describe('Shapemenu', () => {
  let component: Shapemenu;
  let fixture: ComponentFixture<Shapemenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Shapemenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Shapemenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
