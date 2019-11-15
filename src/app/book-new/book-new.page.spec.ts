import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookNewPage } from './book-new.page';

describe('BookNewPage', () => {
  let component: BookNewPage;
  let fixture: ComponentFixture<BookNewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookNewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
