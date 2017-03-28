import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateIpsumComponent } from './generate-ipsum.component';

describe('GenerateIpsumComponent', () => {
  let component: GenerateIpsumComponent;
  let fixture: ComponentFixture<GenerateIpsumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateIpsumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateIpsumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
