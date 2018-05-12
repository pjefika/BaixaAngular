import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ClarityModule } from "@clr/angular";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ToastyModule } from 'ng2-toasty';
import { ToastyComponent } from './utilcomponents/alertas/toasty/toasty.component';
import { DynamicComponent } from './utilcomponents/dynamiccomponent/dynamic.component';
import { DynamicRouterComponent } from './utilcomponents/dynamicrouter/dynamic-router.component';
import { DynamicRouterService } from './utilcomponents/dynamicrouter/dynamic-router.service';
import { AlertService } from './services/alertservice/alert.service';
import { SuperComponentService } from './services/supercomponent/supercomponent.service';
import { RequestModule } from 'HttpEasyRequestForPostGet';
import { SuperService } from './services/superservice/super.service';
import { LinkService } from './services/linkservice/link.service';
import { LoadingComponent } from './utilcomponents/loading/loading.component';
import { SistemaService } from './services/sistema/sistema.service';
import { UtilService } from './services/util/util.service';
import { TemplateComponent } from './template/template.component';
import { SubnavComponent } from './utilcomponents/subnav/subnav.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { PrincipalComponent } from './utilcomponents/principalcomponent/principal.component';
import { BaixaComponent } from './utilcomponents/baixacomponent/baixa.component';
import { MomentModule } from 'angular2-moment';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [
		AppComponent,
		DynamicComponent,
		DynamicRouterComponent,
		ToastyComponent,
		LoadingComponent,
		TemplateComponent,
		SubnavComponent,
		LoginComponent,
		PrincipalComponent,
		BaixaComponent
	],
	imports: [
		BrowserModule,
		ClarityModule,
		AppRoutingModule,
		ToastyModule.forRoot(),
		RequestModule,
		FormsModule,
		MomentModule,
		BrowserAnimationsModule
	],
	providers: [
		DynamicRouterService,
		AlertService,
		SuperComponentService,
		SuperService,
		LinkService,
		SistemaService,
		UtilService,
		ToastyComponent
	],
	bootstrap: [AppComponent],
	entryComponents: [
		PrincipalComponent,
		BaixaComponent
	]
})
export class AppModule { }
