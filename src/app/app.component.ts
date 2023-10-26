import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { AppConfigService } from './app.service';
import { AppConfig } from './app.model';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [AppConfigService],
})
export class AppComponent implements OnInit {
    #configService = inject(AppConfigService);
    public configApp: AppConfig = this.#configService.getConfig();
    displayCustom = false;
    activeIndex: number = 0;
    displayBasic = false;
    images: any[] = [];
    responsiveOptions: any[] = [
        {
            breakpoint: '1500px',
            numVisible: 5,
        },
        {
            breakpoint: '1024px',
            numVisible: 3,
        },
        {
            breakpoint: '768px',
            numVisible: 2,
        },
        {
            breakpoint: '560px',
            numVisible: 1,
        },
    ];

    public bannerCover = encodeURI(this.configApp.bannerImage);
    public isAudioPlay = false;

    @ViewChild('audio', { static: true }) audio!: ElementRef<HTMLAudioElement>;

    ngOnInit(): void {
        console.log(this.bannerCover);
    }

    public scrollTo(element: HTMLElement) {
        const topScroll =
            element.offsetTop > 100
                ? element.offsetTop - 20
                : element.offsetTop;
        window.scrollTo({
            top: topScroll,
            behavior: 'smooth',
        });
    }

    imageClick(index: number) {
        this.activeIndex = index;
        this.displayCustom = true;
    }

    playAudio() {
        if(this.audio.nativeElement.paused){
            this.audio.nativeElement.play();
        }else{
            this.audio.nativeElement.pause();
        }
    }
}
