import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolMenu } from './tool-menu';

describe('ToolMenu', () => {
  let component: ToolMenu;
  let fixture: ComponentFixture<ToolMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
