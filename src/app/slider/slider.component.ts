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
}
