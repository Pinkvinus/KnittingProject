import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YarnMenu } from './yarn-menu';

describe('YarnMenu', () => {
  let component: YarnMenu;
  let fixture: ComponentFixture<YarnMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YarnMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YarnMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
