import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YcombinatorComponent } from './ycombinator.component';

describe('YcombinatorComponent', () => {
  let component: YcombinatorComponent;
  let fixture: ComponentFixture<YcombinatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YcombinatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YcombinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
