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
import { Subscription, interval } from 'rxjs';
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

    targetTime = new Date('2023-10-10T12:00:00').getTime();
    currentTime = new Date().getTime();
    date: any;
    difference: number = 0;
    now: any;
    days = 0;
    hours = 0;
    minutes = 0;
    seconds = 0;
    countDown$!: Subscription;

    ngOnInit(): void {
        this.difference = Math.floor(
            (this.targetTime - this.currentTime) / 1000
        );
        if (this.difference <= 0) {
            this.difference = 0;
        }

        this.countDown$ = interval(1000).subscribe((res) => {
            this.difference--;
            this.ticktock();
            if (this.difference === 0) {
                this.countDown$.unsubscribe();
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
        this.seconds =  Math.floor(offsetMin);
        this.cdr.markForCheck();
    }
}
