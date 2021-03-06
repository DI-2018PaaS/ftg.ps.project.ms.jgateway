import './vendor.ts';

import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Ng2Webstorage } from 'ngx-webstorage';
import { JhiEventManager } from 'ng-jhipster';

import { AuthExpiredInterceptor } from './blocks/interceptor/auth-expired.interceptor';
import { ErrorHandlerInterceptor } from './blocks/interceptor/errorhandler.interceptor';
import { NotificationInterceptor } from './blocks/interceptor/notification.interceptor';
import { PsGatewaySharedModule } from 'app/shared';
import { PsGatewayCoreModule } from 'app/core';
import { PsGatewayAppRoutingModule } from './app-routing.module';
import { PsGatewayHomeModule } from './home/home.module';
import { PsGatewayAccountModule } from './account/account.module';
import { PsGatewayEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import {
    JhiMainComponent,
    HeaderComponent,
    NavbarComponent,
    Navbar2Component,
    FooterComponent,
    PageRibbonComponent,
    ActiveMenuDirective,
    ActiveMenu2Directive,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        PsGatewayAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-' }),
        PsGatewaySharedModule,
        PsGatewayCoreModule,
        PsGatewayHomeModule,
        PsGatewayAccountModule,
        PsGatewayEntityModule
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        Navbar2Component,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        ActiveMenu2Directive,
        HeaderComponent,
        FooterComponent
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthExpiredInterceptor,
            multi: true,
            deps: [Injector]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorHandlerInterceptor,
            multi: true,
            deps: [JhiEventManager]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: NotificationInterceptor,
            multi: true,
            deps: [Injector]
        }
    ],
    bootstrap: [JhiMainComponent]
})
export class PsGatewayAppModule {}
