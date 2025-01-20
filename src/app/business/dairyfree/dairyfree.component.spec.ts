import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DairyfreeComponent } from './dairyfree.component';

describe('DairyfreeComponent', () => {
  let component: DairyfreeComponent;
  let fixture: ComponentFixture<DairyfreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DairyfreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DairyfreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
