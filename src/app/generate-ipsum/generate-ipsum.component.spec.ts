import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { GenerateIpsumComponent } from './generate-ipsum.component';
import { HipsterIpsumService } from '../hipster-ipsum.service';

import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';



describe('GenerateIpsumComponent', () => {
  let component: GenerateIpsumComponent;
  let fixture: ComponentFixture<GenerateIpsumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateIpsumComponent ],
      imports: [MaterialModule, FormsModule, ClipboardModule, BrowserAnimationsModule],
      providers: [HipsterIpsumService]
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
