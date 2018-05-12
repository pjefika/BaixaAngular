import { Component, OnInit } from '@angular/core';
import { SuperComponentService } from '../services/supercomponent/supercomponent.service';
import { ToastyComponent } from '../utilcomponents/alertas/toasty/toasty.component';
import { SistemaService } from '../services/sistema/sistema.service';
import { UtilService } from '../services/util/util.service';
import { SubNavList } from '../mocks/subnav/subnav';
import { DynamicRouterService } from '../utilcomponents/dynamicrouter/dynamic-router.service';
import { PrincipalComponent } from '../utilcomponents/principalcomponent/principal.component';

@Component({
    selector: 'template-component',
    templateUrl: 'template.component.html',
    styleUrls: ['template.component.css']
})

export class TemplateComponent extends SuperComponentService implements OnInit {

    constructor(public toastyComponent: ToastyComponent,
        public sistemaService: SistemaService,
        public utilService: UtilService,
        public dynamicRouterService: DynamicRouterService) {
        super(toastyComponent, sistemaService);
    }

    public ngOnInit() {
        this.sistemaService.version = this.utilService.getVersion();
        this.utilService
            .isLogado()
            .then(result => {
                if (!result) {
                    this.utilService.navigate("./entrar");
                } else {
                    this.sistemaService.subNavMenus = SubNavList;
                    this.sistemaService.subNavAtivo = true;
                    this.sistemaService.liberarSubNav = true;
                    this.setToDynamicComponent(PrincipalComponent);
                }
            });
    }

    private setToDynamicComponent(component: any) {
        // Sempre resetar para null antes de setar component
        this.dynamicRouterService.component = null;
        // Deixar timeout senão react não entende que mudou variavel na holder.
        setTimeout(() => {
            this.dynamicRouterService.component = component;
        }, 1);
    }

    private sair() {
        sessionStorage.clear();
        this.utilService.navigate('./entrar');
    }



}