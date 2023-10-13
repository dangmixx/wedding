import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    Input,
    OnInit,
    ViewChild,
    inject,
} from '@angular/core';
import { Subject, Subscription, interval, takeUntil } from 'rxjs';
import { AppConfigService } from '../app.service';
import { AppConfig } from '../app.model';
@Component({
    selector: 'app-location',
    templateUrl: './location.component.html',
    styleUrls: ['./location.component.scss'],
    standalone: true,
    imports: [CommonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationComponent implements OnInit {
    // Timestamp
    cdr = inject(ChangeDetectorRef);
    #configService = inject(AppConfigService);
    public configApp: AppConfig = this.#configService.getConfig();

    targetTime = 0;
    difference = 0;
    days = 0;
    hours = 0;
    minutes = 0;
    seconds = 0;
    countDown$ = new Subject<void>();

    ngOnInit(): void {
        this.targetTime = new Date(this.configApp.targeDate).getTime();
        const currentTime = new Date().getTime();
        this.difference = Math.floor((this.targetTime - currentTime) / 1000);
        if (this.difference <= 0 || !this.difference) {
            console.error('EndTime or InvalidDate');
            this.difference = 0;
        }
        interval(1000)
            .pipe(takeUntil(this.countDown$))
            .subscribe(() => {
                this.difference--;
                if (this.difference <= 0) {
                    this.countDown$.next();
                    this.countDown$.complete();
                } else {
                    this.ticktock();
                }
            });
    }

    ticktock() {
        this.days = Math.floor(this.difference / (60 * 60 * 24));
        const offsetDay = this.difference - this.days * (60 * 60 * 24);
        this.hours = Math.floor(offsetDay / (60 * 60));
        const offsetHour = offsetDay - this.hours * 60 * 60;
        this.minutes = Math.floor(offsetHour / 60);
        const offsetMin = offsetHour - this.minutes * 60;
        this.seconds = Math.floor(offsetMin);
        this.cdr.markForCheck();
    }
}
