import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapeMenu } from './shape-menu';

describe('ShapeMenu', () => {
  let component: ShapeMenu;
  let fixture: ComponentFixture<ShapeMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShapeMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShapeMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
