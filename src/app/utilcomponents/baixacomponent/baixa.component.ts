import { Component, OnInit } from '@angular/core';
import { BaixaService } from './baixa.service';
import { Baixa } from '../../viewmodels/baixa/baixa';
import { SistemaService } from '../../services/sistema/sistema.service';
import { SuperComponentService } from '../../services/supercomponent/supercomponent.service';
import { ToastyComponent } from '../alertas/toasty/toasty.component';

@Component({
    selector: 'baixa-component',
    templateUrl: 'baixa.component.html',
    styleUrls: ['baixa.component.css'],
    providers: [BaixaService]
})

export class BaixaComponent extends SuperComponentService implements OnInit {

    private baixas: Baixa[];

    private editarBaixaModal: boolean = false;

    private objBaixaModal: Baixa;

    constructor(public sistemaService: SistemaService,
        private baixaService: BaixaService,
        toastyComponent: ToastyComponent) {
        super(toastyComponent, sistemaService)
    }

    public ngOnInit() {
        this.doGetLista();
    }

    private doGetLista() {
        if (this.sistemaService.ableMock) {
            this.getListaMock();
        } else {

        }
    }

    private getListaMock() {
        this.baixaService
            .getlistMock()
            .then(resposta => {
                this.baixas = resposta;
            }, error => {
                super.callToasty("Ops, Algo Aconteceu", "Não foi possivel carregar lista de baixa.", "error");
            });
    }

    private abrirBaixaModal(baixa: Baixa) {
        this.objBaixaModal = baixa;
        this.editarBaixaModal = true;
    }

    private setBaixa() {
        this.editarBaixaModal = false;
    }

    private setCloseBaixa() {
        this.editarBaixaModal = false;
    }

}