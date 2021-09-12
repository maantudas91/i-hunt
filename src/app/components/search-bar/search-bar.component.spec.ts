import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [SearchBarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the onSubmit method after form submit', () => {
    //fixture.detectChanges();
    spyOn(component, 'onSubmit');

    const fakeEvent = { preventDefault: () => console.log('preventDefault') };
    fixture.debugElement
      .query(By.css('form'))
      .triggerEventHandler('ngSubmit', null);
    fixture.detectChanges();
    expect(component.onSubmit).toHaveBeenCalledTimes(1);
  });

  it('should be a valid form', () => {
    component.seachControl.setValue('apple');
    expect(component.seachControl.valid).toBeTruthy();
  });

  it('should correctly @Output value of text input in component', () => {
    spyOn(component.onQuery, 'emit');
    component.seachControl.setValue('apple');
    const inputText = component.seachControl.value;
    fixture.debugElement
    .query(By.css('form'))
    .triggerEventHandler('ngSubmit', null);
    fixture.detectChanges();
   
    expect(component.onQuery.emit).toHaveBeenCalledWith(inputText); // 4
  });
});
