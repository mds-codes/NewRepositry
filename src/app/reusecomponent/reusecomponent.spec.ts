import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reusecomponent } from './reusecomponent';

describe('Reusecomponent', () => {
  let component: Reusecomponent;
  let fixture: ComponentFixture<Reusecomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reusecomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reusecomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
