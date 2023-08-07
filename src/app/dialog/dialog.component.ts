import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent {
  freshnessList = ['Brand New', 'Used', 'Refurbished'];

  productForm!: FormGroup;

  constructor() {}
}
