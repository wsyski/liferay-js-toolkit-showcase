import {Component, Inject} from '@angular/core';

import LiferayParams from '../types/LiferayParams'
import {LiferayParamsProvider} from './liferay-params.provider';

declare const Liferay: any;

@Component({
	templateUrl: 
		// Liferay.ThemeDisplay.getPathContext() +
		'/o/liferay-portlet/app/app.component.html'
})
export class AppComponent {
	params: LiferayParams;
	labels: any;

	constructor(@Inject(LiferayParamsProvider) private liferayParamsProvider: LiferayParamsProvider) {
		this.params = liferayParamsProvider.instanceOf();
		this.labels = {        
			
			configuration: Liferay.Language.get('configuration'),
			
			portletNamespace: Liferay.Language.get('portlet-namespace'),
        	contextPath: Liferay.Language.get('context-path'),
			portletElementId: Liferay.Language.get('portlet-element-id'),
		}
	}

	get configurationJSON() {
		return JSON.stringify(this.params.configuration, null, 2);
	}
}
