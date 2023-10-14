import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-form-submit',
    templateUrl: './form-submit.component.html',
    styleUrls: ['./form-submit.component.scss'],
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
})
export class FormSubmitComponent {}
