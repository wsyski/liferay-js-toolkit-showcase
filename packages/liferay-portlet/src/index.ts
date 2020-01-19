import './polyfills';


import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app/app.component';
import { AppModule } from './app/app.module';
import { DynamicLoader } from './app/dynamic.loader';

import LiferayParams from './types/LiferayParams'
import {NgModuleRef} from '@angular/core';
import {getLiferayParamsProvider} from './app/liferay-params.provider';

/**
 * This is the actual method that initializes the portlet. It is invoked by the 
 * "bootstrap" module.
 * 
 * @param  {LiferayParams} params an object with values of interest to the 
 * 									portlet
 */
export default function(params: LiferayParams) {

	platformBrowserDynamic([getLiferayParamsProvider(params)])
		.bootstrapModule(AppModule)
		.then((ngModuleRef: NgModuleRef<any>) => {
			const dynamicLoader = new DynamicLoader(ngModuleRef);
			dynamicLoader.loadComponent(AppComponent, params);
		});


}
