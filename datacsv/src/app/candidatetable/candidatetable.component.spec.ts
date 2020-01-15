import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatetableComponent } from './candidatetable.component';

describe('CandidatetableComponent', () => {
  let component: CandidatetableComponent;
  let fixture: ComponentFixture<CandidatetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
