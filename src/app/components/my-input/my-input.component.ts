import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-my-input',
  templateUrl: './my-input.component.html',
  styleUrls: ['./my-input.component.scss']
})
export class MyInputComponent implements OnInit {

  @Input() name: string;
  @Input() title: string;
  @Input() type: string;
  @Input() formGroup: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
