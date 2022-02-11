import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputProductComponent } from './input-product.component';

describe('NewProductComponent', () => {
  let component: InputProductComponent;
  let fixture: ComponentFixture<InputProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
