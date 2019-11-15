import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBookPage } from './delete-book.page';

describe('DeleteBookPage', () => {
  let component: DeleteBookPage;
  let fixture: ComponentFixture<DeleteBookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteBookPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteBookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
