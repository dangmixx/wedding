import { Injectable, inject } from '@angular/core';
import * as config from '../config.json';
import { AppConfig, InvitationFrom } from './app.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AppConfigService {
    #http = inject(HttpClient);
    #url = 'https://sheetdb.io/api/v1/ij2pibj6h4pwl';
    getConfig(): AppConfig {
        return config;
    }
    postGoogleSheet(dataForm: InvitationFrom | any) {
        const data = {
            'entry.2105488832': dataForm.Name,
            'entry.659467747': dataForm.From,
            'entry.661987652': dataForm.Quality,
            'entry.480909358': dataForm.Yes ? 'Yes' : 'No',
            'entry.200497512': dataForm.Note,
        };
        const bodyData = new URLSearchParams(data);

        const options = {
            headers: new HttpHeaders().set(
                'Content-Type',
                'application/x-www-form-urlencoded'
            ),
        };

        return this.#http.post(
            'https://docs.google.com/forms/u/0/d/e/1FAIpQLScfpppSJie0kmzhsffIc8MT8r79ogH91SSQMsALBHSOOOgjgA/formResponse',
            bodyData,
            options
        );
    }
}
