import { Injectable } from '@angular/core';
import { ToastyComponent } from '../../utilcomponents/alertas/toasty/toasty.component';
import { AlertService } from '../alertservice/alert.service';
import { SistemaService } from '../sistema/sistema.service';

@Injectable()
export class SuperComponentService extends AlertService {

    constructor(public toastyComponent: ToastyComponent,
        public sistemaService: SistemaService) {
        super(toastyComponent);
    }

    public enabledisablesidenav(enable: boolean) {
        setTimeout(() => {
            this.sistemaService.sideNavAtivo = enable;
        }, 1);
    }

}