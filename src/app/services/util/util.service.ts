import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SistemaService } from '../sistema/sistema.service';

import { Md5 } from 'ts-md5/dist/md5';

@Injectable()
export class UtilService {

    constructor(private router: Router,
        public sistemaService: SistemaService) { }

    public isLogado() {
        let localObj = JSON.parse(sessionStorage.getItem("user"));
        if (typeof (Storage) !== "undefined" && localObj && localObj.token === Md5.hashStr("fulltest-app")) {
            return Promise.resolve(true);
        }
        return Promise.resolve(false);
    }

    public navigate(route: string) {
        this.router.navigate([route]);
    }

    public getVersion(): string {
        const { version: appVersion } = require('../../../../package.json'); // Versão da aplicação na package.json
        let version: string = appVersion;
        return version;
    }

}