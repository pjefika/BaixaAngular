import { Injectable } from '@angular/core';
import { SuperService } from '../../services/superservice/super.service';
import { Http } from '@angular/http';

@Injectable()
export class BaixaService extends SuperService {

    constructor(public http: Http) { 
        super(http)
    }
}