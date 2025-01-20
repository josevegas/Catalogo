import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlutenfreeComponent } from './glutenfree.component';

describe('GlutenfreeComponent', () => {
  let component: GlutenfreeComponent;
  let fixture: ComponentFixture<GlutenfreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlutenfreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlutenfreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
