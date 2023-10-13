import { Injectable, inject } from '@angular/core';
import * as config from '../config.json';
import { AppConfig } from './app.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AppConfigService {
    #http = inject(HttpClient);
    #url = 'https://sheetdb.io/api/v1/ij2pibj6h4pwl';
    getConfig(): AppConfig {
        return config;
    }

    postData() {
        return this.#http.post(this.#url, {
            data: [
                {
                    Name: 'Name',
                    Quality: 2,
                    Yes: true,
                },
            ],
        });
    }

    postGoogleSheet() {
        const data = {
            'entry.2105488832': 'Name',
            'entry.661987652': 'Qua',
            'entry.480909358': 'Yes',
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
