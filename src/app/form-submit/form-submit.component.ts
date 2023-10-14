import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'app-form-submit',
    templateUrl: './form-submit.component.html',
    styleUrls: ['./form-submit.component.scss'],
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
})
export class FormSubmitComponent implements OnInit{
    #fb = inject(FormBuilder);
    public formGroup = this.#fb.group({
        Name: ['', [Validators.required]],
        Yes: [true],
        Quality: ['1'],
        Note: [''],
    });
    public submitForm() {
        const valueForm = this.formGroup.getRawValue();
        console.log(valueForm);
    }

    ngOnInit(): void {
        this.formGroup.get('Yes')?.valueChanges.forEach(res=>{
            if(res){
                this.formGroup.get('Quality')?.enable();
            }else{
                this.formGroup.get('Quality')?.disable();
            }
        })
    }
}
