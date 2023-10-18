import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppConfigService } from '../app.service';
import { InvitationFrom } from '../app.model';
import { EMPTY, EmptyError, catchError, of } from 'rxjs';

@Component({
    selector: 'app-form-submit',
    templateUrl: './form-submit.component.html',
    styleUrls: ['./form-submit.component.scss'],
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
})
export class FormSubmitComponent implements OnInit {
    #fb = inject(FormBuilder);
    #appService = inject(AppConfigService);

    public submitted = false;
    public submitting = false;
    public formGroup = this.#fb.group({
        Name: ['', [Validators.required]],
        Yes: [true],
        From: ['CD'],
        Quality: ['1'],
        Note: [''],
    });

    public submitForm() {
        this.submitting = true;
        const valueForm = this.formGroup.getRawValue();
        this.#appService
            .postGoogleSheet(valueForm)
            .pipe(catchError((err) => of(EMPTY)))
            .subscribe(() => {
                console.log('Submitted')
                this.submitted = true;
            });
    }

    ngOnInit(): void {
        this.formGroup.get('Yes')?.valueChanges.forEach((res) => {
            if (res) {
                this.formGroup.get('Quality')?.enable();
            } else {
                this.formGroup.get('Quality')?.disable();
            }
        });
    }
}
