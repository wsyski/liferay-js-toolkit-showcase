import 'angular-provider';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppComponent} from './app/app.component';
import {AppModule} from './app/app.module';
import {DynamicLoader} from './app/dynamic.loader';

import LiferayParams from './types/LiferayParams';
import {NgModuleRef} from '@angular/core';

export default function(liferayParams: LiferayParams) {

    platformBrowserDynamic()
        .bootstrapModule(AppModule)
        .then((ngModuleRef: NgModuleRef<any>) => {
            const dynamicLoader = new DynamicLoader(ngModuleRef);
            dynamicLoader.loadComponent(AppComponent, liferayParams);
        });
}
