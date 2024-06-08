import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionFormComponent } from './champion-form.component';

describe('ChampionFormComponent', () => {
  let component: ChampionFormComponent;
  let fixture: ComponentFixture<ChampionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChampionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
