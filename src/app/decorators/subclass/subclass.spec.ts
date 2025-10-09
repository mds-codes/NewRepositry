import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subclass } from './subclass';

describe('Subclass', () => {
  let component: Subclass;
  let fixture: ComponentFixture<Subclass>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Subclass]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subclass);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
