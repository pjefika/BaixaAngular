import { Component, OnInit } from '@angular/core';
import { BaixaService } from './baixa.service';
import { Baixa } from '../../viewmodels/baixa/baixa';

@Component({
    selector: 'baixa-component',
    templateUrl: 'baixa.component.html',
    styleUrls: ['baixa.component.css'],
    providers: [BaixaService]
})

export class BaixaComponent implements OnInit {

    private baixa: Baixa;

    constructor() { }

    public ngOnInit() { 

        this.baixa = require("../../../assets/json/");

    }

}