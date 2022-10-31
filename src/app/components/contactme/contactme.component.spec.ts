import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactmeComponent } from './contactme.component';

describe('ContactmeComponent', () => {
  let component: ContactmeComponent;
  let fixture: ComponentFixture<ContactmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
