import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pickbar } from './pickbar';

describe('Pickbar', () => {
  let component: Pickbar;
  let fixture: ComponentFixture<Pickbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pickbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pickbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
