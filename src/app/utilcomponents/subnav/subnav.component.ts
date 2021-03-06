import { Component, OnInit, Input } from '@angular/core';
import { SuperComponentService } from '../../services/supercomponent/supercomponent.service';
import { ToastyComponent } from '../alertas/toasty/toasty.component';
import { SubNav } from '../../viewmodels/subnav/subnav';
import { DynamicRouterService } from '../dynamicrouter/dynamic-router.service';
import { SistemaService } from '../../services/sistema/sistema.service';

@Component({
    selector: 'subnav-component',
    templateUrl: 'subnav.component.html',
    styleUrls: ['subnav.component.css']
})

export class SubnavComponent extends SuperComponentService implements OnInit {

    @Input() public menus: SubNav[];

    constructor(public toastyComponent: ToastyComponent,
        public dynamicRouterService: DynamicRouterService,
        public sistemaService: SistemaService) {
        super(toastyComponent, sistemaService);
    }

    ngOnInit() { }

    private abrecomponent(l: SubNav) {
        if (this.sistemaService.liberarSubNav || l.ativo) {
            if (l.link) {
                window.open(l.link);
            } else {
                this.dynamicRouterService.component = l.component;
            }
        }
        if (!this.validaSeTemSideNav(l)) {
            super.enabledisablesidenav(false);
        }
    }

    private subNavActive(l: SubNav): Boolean {
        let active = false;
        if (l.component === this.dynamicRouterService.component) {
            active = true;
        }
        return active;
    }

    private validaSeTemSideNav(l: SubNav) {
        let valid: boolean = false;
        if (l.haveSideNav) {
            valid = true;
        }
        return valid;
    }

}