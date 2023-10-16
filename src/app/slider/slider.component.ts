import { Component, OnInit, inject } from '@angular/core';
import { PreviewImageService } from '../preview-image/preview-image.service';
import { PreviewImageModule } from '../preview-image/preview-image.module';
import { AppConfigService } from '../app.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';
@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss'],
    standalone: true,
    imports: [PreviewImageModule, CommonModule, NgOptimizedImage],
    providers: [PreviewImageService],
})
export class SliderComponent implements OnInit {
    photoService = inject(AppConfigService);
    previewImgService = inject(PreviewImageService);

    public listImage: {
        itemImageSrc: string;
        alt: string;
        title: string;
    }[] = [];

    ngOnInit(): void {
        this.listImage = this.photoService.getConfig().listImage;
    }

    previewImg(index: number) {
        this.previewImgService.openDialog(
            this.listImage.map((e) => {
                return {
                    url: e.itemImageSrc,
                };
            }),
            index
        );
    }

    public column1 = [
        {
            itemImageSrc:
                'https://dangmixx.s3.ap-southeast-1.amazonaws.com/wedding/Wedding (10).jpg',
            alt: 'Dalat-1',
            title: 'Dalat1',
        },
        {
            itemImageSrc:
                'https://dangmixx.s3.ap-southeast-1.amazonaws.com/wedding/Wedding (19).jpg',
            alt: 'Dalat-2',
            title: 'Dalat2',
        },
        {
            itemImageSrc:
                'https://dangmixx.s3.ap-southeast-1.amazonaws.com/wedding/Wedding (30).jpg',
            alt: 'Dalat-3',
            title: 'Dalat3',
        },
        {
            itemImageSrc:
                'https://dangmixx.s3.ap-southeast-1.amazonaws.com/wedding/Wedding (40).jpg',
            alt: 'Dalat-4',
            title: 'Dalat4',
        },
        {
            itemImageSrc:
                'https://dangmixx.s3.ap-southeast-1.amazonaws.com/wedding/Dalat (5).jpg',
            alt: 'Dalat-5',
            title: 'Dalat5',
        },
        {
            itemImageSrc:
                'https://dangmixx.s3.ap-southeast-1.amazonaws.com/wedding/Dalat (6).jpg',
            alt: 'Dalat-6',
            title: 'Dalat6',
        },
        {
            itemImageSrc:
                'https://dangmixx.s3.ap-southeast-1.amazonaws.com/wedding/Dalat (31).jpg',
            alt: 'Dalat-6',
            title: 'Dalat6',
        },
    ];

    public column2 = [
        {
            itemImageSrc:
                'https://dangmixx.s3.ap-southeast-1.amazonaws.com/wedding/Wedding (33).jpg',
            alt: 'Dalat-7',
            title: 'Dalat7',
        },
        {
            itemImageSrc:
                'https://dangmixx.s3.ap-southeast-1.amazonaws.com/wedding/Wedding (43).jpg',
            alt: 'Dalat-8',
            title: 'Dalat8',
        },
        {
            itemImageSrc:
                'https://dangmixx.s3.ap-southeast-1.amazonaws.com/wedding/Wedding (15).jpg',
            alt: 'Dalat-9',
            title: 'Dalat9',
        },
        {
            itemImageSrc:
                'https://dangmixx.s3.ap-southeast-1.amazonaws.com/wedding/Wedding (39).jpg',
            alt: 'Dalat-10',
            title: 'Dalat10',
        },
        {
            itemImageSrc:
                'https://dangmixx.s3.ap-southeast-1.amazonaws.com/wedding/Dalat (26).jpg',
            alt: 'Dalat-11',
            title: 'Dalat11',
        },
        {
            itemImageSrc:
                'https://dangmixx.s3.ap-southeast-1.amazonaws.com/wedding/Dalat (29).jpg',
            alt: 'Dalat-12',
            title: 'Dalat12',
        },
        {
            itemImageSrc:
                'https://dangmixx.s3.ap-southeast-1.amazonaws.com/wedding/Dalat (8).jpg',
            alt: 'Dalat-12',
            title: 'Dalat12',
        },
        {
            itemImageSrc:
                'https://dangmixx.s3.ap-southeast-1.amazonaws.com/wedding/Dalat (10).jpg',
            alt: 'Dalat-12',
            title: 'Dalat12',
        },
        {
            itemImageSrc:
                'https://dangmixx.s3.ap-southeast-1.amazonaws.com/wedding/Dalat (13).jpg',
            alt: 'Dalat-12',
            title: 'Dalat12',
        },
        {
            itemImageSrc:
                'https://dangmixx.s3.ap-southeast-1.amazonaws.com/wedding/Dalat (16).jpg',
            alt: 'Dalat-12',
            title: 'Dalat12',
        },
    ];

    public column3 = [
        {
            itemImageSrc:
                'https://dangmixx.s3.ap-southeast-1.amazonaws.com/wedding/Wedding (22).jpg',
            alt: 'Dalat-13',
            title: 'Dalat13',
        },
        {
            itemImageSrc:
                'https://dangmixx.s3.ap-southeast-1.amazonaws.com/wedding/Wedding (24).jpg',
            alt: 'Dalat-14',
            title: 'Dalat14',
        },
        {
            itemImageSrc:
                'https://dangmixx.s3.ap-southeast-1.amazonaws.com/wedding/Wedding (12).jpg',
            alt: 'Dalat-15',
            title: 'Dalat15',
        },
        {
            itemImageSrc:
                'https://dangmixx.s3.ap-southeast-1.amazonaws.com/wedding/Wedding (28).jpg',
            alt: 'Dalat-16',
            title: 'Dalat16',
        },
        {
            itemImageSrc:
                'https://dangmixx.s3.ap-southeast-1.amazonaws.com/wedding/Dalat (17).jpg',
            alt: 'Dalat-17',
            title: 'Dalat17',
        },
        {
            itemImageSrc:
                'https://dangmixx.s3.ap-southeast-1.amazonaws.com/wedding/Dalat (4).jpg',
            alt: 'Dalat-18',
            title: 'Dalat18',
        },
        {
            itemImageSrc:
                'https://dangmixx.s3.ap-southeast-1.amazonaws.com/wedding/Dalat (24).jpg',
            alt: 'Dalat-18',
            title: 'Dalat18',
        },
        {
            itemImageSrc:
                'https://dangmixx.s3.ap-southeast-1.amazonaws.com/wedding/Dalat (14).jpg',
            alt: 'Dalat-18',
            title: 'Dalat18',
        },
    ];
}
