import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { LinkService } from '../linkservice/link.service';
import { UrlEndPoint } from '../../viewmodels/url/urlendpoint';

@Injectable()
export class SuperService extends LinkService {

    constructor(public http: Http) {
        super(http);
    }

    public mountLink(endpoint: UrlEndPoint, deploy: string, path: string): string {
        let url: string;
        endpoint.endpoints.forEach(endpoint => {
            if (endpoint.nome === deploy) {
                url = endpoint.url + path;
            }
        });
        return url;
    }

}