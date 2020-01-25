import {Component, Inject} from '@angular/core';

import LiferayParams from '../types/LiferayParams';
import Liferay from '../types/Liferay';
import {LIFERAY_PARAMS_TOKEN, LIFERAY_TOKEN} from './dynamic.loader';

@Component({
    template: `
        <div>
            <div>
                <span class="tag">{{labels.portletNamespace}}:</span>
                <span class="value">{{liferayParams.portletNamespace}}</span>
            </div>
            <div>
                <span class="tag">{{labels.contextPath}}:</span>
                <span class="value">{{liferayParams.contextPath}}</span>
            </div>
            <div>
                <span class="tag">{{labels.portletElementId}}:</span>
                <span class="value">{{liferayParams.portletElementId}}</span>
            </div>

            <div>
                <span class="tag">{{labels.configuration}}:</span>
                <span class="value pre">{{configurationJSON}}</span>
            </div>
        </div>
    `
})
export class AppComponent {
    labels: any;
    liferayParams: any;

    constructor(@Inject(LIFERAY_PARAMS_TOKEN) liferayParams: LiferayParams, @Inject(LIFERAY_TOKEN) private liferay: Liferay) {
        this.liferayParams = liferayParams;
        this.labels = {
            configuration: liferay.Language.get('configuration'),
            portletNamespace: liferay.Language.get('portlet-namespace'),
            contextPath: liferay.Language.get('context-path'),
            portletElementId: liferay.Language.get('portlet-element-id'),
        };
    }

    get configurationJSON() {
        return JSON.stringify(this.liferayParams.configuration, null, 2);
    }
}
