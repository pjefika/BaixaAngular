import { Injectable } from '@angular/core';
import { SuperService } from '../../services/superservice/super.service';
import { Http } from '@angular/http';
import { Baixa } from '../../viewmodels/baixa/baixa';

@Injectable()
export class BaixaService extends SuperService {

    constructor(public http: Http) {
        super(http)
    }

    public getList() {

    }

    public getlistMock(): Promise<Baixa[]> {
        let baixas: Baixa[] = require("../../../assets/json/table-baixa.json");
        return Promise.resolve(baixas);
    }

}