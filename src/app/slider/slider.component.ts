import { Component, OnInit, inject } from '@angular/core';
import { PreviewImageService } from '../preview-image/preview-image.service';
import { PreviewImageModule } from '../preview-image/preview-image.module';
import { AppConfigService } from '../app.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ListImage } from '../app.model';
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
    public column1: ListImage[] = [];
    public column2: ListImage[] = [];
    public column3: ListImage[] = [];
    public l1 = 0;
    public l2 = 0;
    public l3 = 0;

    ngOnInit(): void {
        this.column1 = this.photoService.getConfig().columnImage1;
        this.column2 = this.photoService.getConfig().columnImage2;
        this.column3 = this.photoService.getConfig().columnImage3;
        this.l1 = this.column1.length;
        this.l2 = this.column2.length;
        this.l3 = this.column3.length;
        this.getListImage();
    }

    private getListImage() {
        const listImageConfig = this.photoService.getConfig().listImage;
        const listImageFilter = [
            ...this.column1,
            ...this.column2,
            ...this.column3,
        ];
        const listImageAdd = listImageConfig.filter(
            (src) =>
                listImageFilter.findIndex(
                    (e) => e.itemImageSrc === src.itemImageSrc
                ) !== -1
        );

        this.listImage = [...listImageFilter, ...listImageAdd];
    }

    previewImg(index: number, length: number) {
        this.previewImgService.openDialog(
            this.listImage.map((e) => {
                return {
                    url: e.itemImageSrc,
                };
            }),
            index + length
        );
    }
}
