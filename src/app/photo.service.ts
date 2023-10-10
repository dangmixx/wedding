import { Injectable } from '@angular/core';

@Injectable()
export class PhotoService {
    getData() {
        return [
            {
                itemImageSrc:
                    'https://primefaces.org/cdn/primeng/images/galleria/galleria1.jpg',
                alt: 'Description for Image 1',
                title: 'Title 1',
            },
            {
                itemImageSrc:
                    'https://primefaces.org/cdn/primeng/images/galleria/galleria2.jpg',
                alt: 'Description for Image 2',
                title: 'Title 2',
            },
            {
                itemImageSrc:
                    'https://primefaces.org/cdn/primeng/images/galleria/galleria3.jpg',
                alt: 'Description for Image 3',
                title: 'Title 3',
            },
            {
                itemImageSrc:
                    'https://primefaces.org/cdn/primeng/images/galleria/galleria4.jpg',
                alt: 'Description for Image 4',
                title: 'Title 4',
            },
            {
                itemImageSrc:
                    'https://primefaces.org/cdn/primeng/images/galleria/galleria5.jpg',
                alt: 'Description for Image 5',
                title: 'Title 5',
            },
            {
                itemImageSrc:
                    'https://primefaces.org/cdn/primeng/images/galleria/galleria6.jpg',
                alt: 'Description for Image 6',
                title: 'Title 6',
            },
            {
                itemImageSrc:
                    'https://primefaces.org/cdn/primeng/images/galleria/galleria7.jpg',
                alt: 'Description for Image 7',
                title: 'Title 7',
            },
            {
                itemImageSrc:
                    'https://primefaces.org/cdn/primeng/images/galleria/galleria8.jpg',
                alt: 'Description for Image 8',
                title: 'Title 8',
            },
            {
                itemImageSrc:
                    'https://primefaces.org/cdn/primeng/images/galleria/galleria9.jpg',
                alt: 'Description for Image 9',
                title: 'Title 9',
            },
            {
                itemImageSrc:
                    'https://primefaces.org/cdn/primeng/images/galleria/galleria10.jpg',
                alt: 'Description for Image 10',
                title: 'Title 10',
            },
            {
                itemImageSrc:
                    'https://primefaces.org/cdn/primeng/images/galleria/galleria11.jpg',
                alt: 'Description for Image 11',
                title: 'Title 11',
            },
            {
                itemImageSrc:
                    'https://primefaces.org/cdn/primeng/images/galleria/galleria11.jpg',
                alt: 'Description for Image 11',
                title: 'Title 12',
            },

        ];
    }

    getImages() {
        return Promise.resolve(this.getData());
    }
}
