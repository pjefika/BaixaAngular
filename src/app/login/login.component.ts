import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Usuario } from '../viewmodels/login/usuario';
import { AlertService } from '../services/alertservice/alert.service';
import { ToastyComponent } from '../utilcomponents/alertas/toasty/toasty.component';
import { SistemaService } from '../services/sistema/sistema.service';
import { UtilService } from '../services/util/util.service';

import { Md5 } from 'ts-md5/dist/md5';

@Component({
    selector: 'login-component',
    templateUrl: 'login.component.html',
    providers: [LoginService]
})

export class LoginComponent extends AlertService implements OnInit {

    private usuario = new Usuario();

    private logando: boolean = false;

    private msg: string;
    private msgAtivo: boolean = false;

    constructor(public toastyComponent: ToastyComponent,
        public sistemaService: SistemaService,
        private loginService: LoginService,
        public utilService: UtilService) {
        super(toastyComponent);
    }

    public ngOnInit() { }

    private doEntrar() {
        if (this.sistemaService.ableMock) {
            this.entrarMock();
        } else {
            this.entrar();
        }
    }

    private entrar() {
        this.logando = true;
        this.loginService
            .autentica(this.usuario)
            .then(resposta => {
                if (resposta) {
                    this.loginService
                        .getUsuario(this.usuario)
                        .then(resposta => {
                            this.usuario = resposta;
                            sessionStorage.setItem('user', JSON.stringify({ user: this.usuario.login, nv: this.usuario.nivel, token: Md5.hashStr("fulltest-app") }));
                            this.utilService.navigate('./');
                        });
                } else {
                    this.msg = "Senha incorreta, por favor verifique.";
                    this.msgAtivo = true;
                    this.usuario.senha = "";
                }
            }, error => {
                this.usuario.login = "";
                this.usuario.senha = "";
                this.msg = "Usuário ou senha incorretos, por favor verifique.";
                this.msgAtivo = true;
            })
            .then(() => {
                this.logando = false;
            });
    }

    private entrarMock() {
        this.logando = true;
        setTimeout(() => {
            this.usuario = this.loginService.getUsuarioMock();
            sessionStorage.setItem('user', JSON.stringify({ user: this.usuario.login, nv: this.usuario.nivel, token: Md5.hashStr("fulltest-app") }));
            this.utilService.navigate('./');
            this.logando = false;
        }, 1000);
    }


}