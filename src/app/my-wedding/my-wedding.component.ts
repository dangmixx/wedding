import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GalleriaModule } from 'primeng/galleria';
import { PhotoService } from './photo.service';
@Component({
    selector: 'app-my-wedding',
    templateUrl: './my-wedding.component.html',
    styleUrls: ['./my-wedding.component.scss'],
    standalone: true,
    imports: [GalleriaModule, FormsModule],
    providers: [PhotoService],
})
export class MyWeddingComponent implements OnInit {
    photoService = inject(PhotoService);
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

    ngOnInit(): void {
        this.photoService.getImages().then((res) => (this.images = [...res]));
    }

    imageClick(index: number) {
        this.activeIndex = index;
        this.displayCustom = true;
    }
}
