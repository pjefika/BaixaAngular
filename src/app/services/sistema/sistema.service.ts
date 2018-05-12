import { Injectable } from '@angular/core';
import { SubNav } from '../../viewmodels/subnav/subnav';

@Injectable()
export class SistemaService {

    public version: string;

    public ableMock: boolean = true;

    public subNavAtivo: boolean = false;

    public liberarSubNav: boolean = false;

    public sideNavAtivo: boolean = false;

    public subNavMenus: SubNav[];

    constructor() { }

}