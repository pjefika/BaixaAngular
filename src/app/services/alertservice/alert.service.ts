import { Injectable } from '@angular/core';
import { ToastyComponent } from '../../utilcomponents/alertas/toasty/toasty.component';

@Injectable()
export class AlertService {

    constructor(public toastyComponent: ToastyComponent) { }

    public callToasty(titulo: string, msg: string, theme: string, timeout?: number) {
        this.toastyComponent.toastyInfo = {
            titulo: titulo,
            msg: msg,
            theme: theme,
            timeout: timeout
        }
        this.toastyComponent.addToasty();
    }

}