import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { GalleriaModule } from 'primeng/galleria';
import { FormsModule } from '@angular/forms';

import { SliderComponent } from './slider/slider.component';
import { LocationComponent } from './location/location.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        GalleriaModule,
        FormsModule,
        SliderComponent,
        LocationComponent,
        HttpClientModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
