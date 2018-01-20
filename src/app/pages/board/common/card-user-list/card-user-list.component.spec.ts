import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUserListComponent } from './card-user-list.component';

describe('CardUserListComponent', () => {
  let component: CardUserListComponent;
  let fixture: ComponentFixture<CardUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
