import {
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    ElementRef,
    Inject,
    OnInit,
    QueryList,
    ViewChildren,
    ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule, DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import {
    CarouselModule,
    OwlOptions,
    SlidesOutputData,
} from 'ngx-owl-carousel-o';

export enum MediaType {
    photo = 'photo',
    video = 'video',
    sticker = 'STICKER',
    giphy = 'GIPHY',
}

@Component({
    selector: 'lib-preview-image',
    standalone: true,
    imports: [
        CommonModule,
        DialogModule,
        CarouselModule,
    ],
    templateUrl: './preview-image.component.html',
    styleUrls: ['./preview-image.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class PreviewImageComponent implements OnInit, AfterViewInit {
    constructor(
        public dialogRef: DialogRef<string>,
        @Inject(DIALOG_DATA)
        public dataDialog: {
            listImage: Array<{
                url: string;
                type: MediaType;
            }>;
            currentIndex: number;
            canDownload?: boolean;
        },
        protected cdr: ChangeDetectorRef
    ) {}

    @ViewChildren('elementPreview')
    elementPreviewList: QueryList<ElementRef<HTMLVideoElement>> | undefined;

    public mediaType = MediaType;
    public loadVideo = '#t=0.001';
    public currentIndexMedia = -1;
    public canDownload = true;

    ngOnInit(): void {
        this.customOptions.startPosition = this.dataDialog.currentIndex;
        this.currentIndexMedia = this.customOptions.startPosition;
        // Default true;
        this.canDownload = this.dataDialog.canDownload === false ? false : true;
        this.cdr.markForCheck();
    }

    ngAfterViewInit(): void {
        if (
            this.dataDialog.listImage[this.currentIndexMedia].type ===
            this.mediaType.video
        ) {
            this.playVideo(this.currentIndexMedia);
        }
    }

    get dataForCarousel() {
        return [...this.dataDialog.listImage];
    }

    //Don't loop cause video will be overplay.
    customOptions: OwlOptions = {
        loop: false,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        margin: 5,
        dots: false,
        dotsEach: true,
        navSpeed: 700,
        lazyLoad: true,
        navText: [
            '<i class="ico ico-arrow-left"><i>',
            '<i class="ico ico-arrow-right"><i>',
        ],
        responsive: {
            0: {
                items: 1,
            },
        },
        nav: true,
    };

    public closeDialog() {
        this.dialogRef.close();
    }

    // currentData
    public changeData(data: SlidesOutputData) {
        // 1st load skip
        if (data?.slides?.length === 0) return;
        const indexData = this.dataDialog.listImage[data.startPosition || 0];
        if (indexData.type === this.mediaType.video) {
            this.pauseVideo(data.startPosition || 0);
        }
    }

    public changedData(data: SlidesOutputData) {
        // 1st load skip
        if (data?.slides?.length === 0) return;
        const indexData = this.dataDialog.listImage[data.startPosition || 0];
        if (indexData.type === this.mediaType.video) {
            this.playVideo(data.startPosition || 0);
        }
    }

    private pauseVideo(index: number): void {
        if (!this.elementPreviewList) {
            return;
        }
        const elementVideo = this.elementPreviewList.find(
            (e) => e.nativeElement.id === `element-${index}`
        );
        // Video not ready. don't need stream for it
        if (elementVideo?.nativeElement.readyState !== 4) {
            return;
        }
        try {
            elementVideo.nativeElement.pause();
        } catch (error) {
            console.log('cant pauseVideo');
        }
    }

    private playVideo(index: number): void {
        if (!this.elementPreviewList) {
            return;
        }
        const elementVideo = this.elementPreviewList.find(
            (e) => e.nativeElement.id === `element-${index}`
        );
        // Video not ready. don't need stream for it
        if (elementVideo?.nativeElement.readyState !== 4) {
            return;
        }
        try {
            elementVideo.nativeElement.play();
        } catch (error) {
            console.log('cant playVideo');
        }
    }
}
