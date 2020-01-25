import LiferayParams from '../../src/types/LiferayParams';
import {environment} from './environments/environment';
import {enableProdMode, NgModuleRef} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from '../../src/app/app.module';
import {DynamicLoader} from '../../src/app/dynamic.loader';
import {AppComponent} from '../../src/app/app.component';

declare const Liferay: any;

const liferayParams: LiferayParams = {
    contextPath: '/',
    portletElementId: 'js-portlet-_liferay_portlet_',
    portletNamespace: '_liferay_portlet_',
    configuration: {
        portletInstance: {},
        system: {}
    }
};

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .then((ngModuleRef: NgModuleRef<any>) => {
        const dynamicLoader = new DynamicLoader(ngModuleRef);
        dynamicLoader.loadComponent(AppComponent, liferayParams);
    });
