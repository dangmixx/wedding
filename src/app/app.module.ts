import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { GalleriaModule } from 'primeng/galleria';
import { FormsModule } from '@angular/forms';

import { SliderComponent } from './slider/slider.component';
import { LocationComponent } from './location/location.component';
import { HttpClientModule } from '@angular/common/http';
import { FormSubmitComponent } from './form-submit/form-submit.component';
import { SummaryInfoComponent } from './summary-info/summary-info.component';
@NgModule({
    declarations: [AppComponent, SummaryInfoComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        GalleriaModule,
        FormsModule,
        SliderComponent,
        LocationComponent,
        HttpClientModule,
        FormSubmitComponent
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
