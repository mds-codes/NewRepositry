import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rendertodos } from './rendertodos';

describe('Rendertodos', () => {
  let component: Rendertodos;
  let fixture: ComponentFixture<Rendertodos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rendertodos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rendertodos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
