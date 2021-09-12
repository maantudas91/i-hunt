import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent{
  @Output() onQuery = new EventEmitter<string>();

  constructor() {}

  seachControl = new FormControl('', [Validators.required]);

  onSubmit() {  // form submit
    if (this.seachControl.valid && this.seachControl.value)
      this.onQuery.emit(this.seachControl.value);
  }
}
