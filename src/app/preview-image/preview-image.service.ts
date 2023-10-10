import { Dialog } from '@angular/cdk/dialog';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PreviewImageComponent } from './preview-image.component';

@Injectable()
export class PreviewImageService {
    constructor(protected dialog: Dialog) {}
    openDialog(
        listImage: Array<{ url?: string; type?: any }>,
        currentIndex = 0,
        canDownload = true
    ): Observable<any> {
        const dialogRef = this.dialog.open(PreviewImageComponent, {
            data: {
                listImage: listImage,
                currentIndex: currentIndex,
                canDownload: canDownload
            },
        });
        return dialogRef.closed;
    }
}
