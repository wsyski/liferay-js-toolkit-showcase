import {ApplicationRef, ComponentFactoryResolver, InjectionToken, Injector, NgModuleRef, NgZone, Type} from '@angular/core';
import LiferayParams from '../types/LiferayParams';
import Liferay from '../types/Liferay';

export const LIFERAY_PARAMS_TOKEN = new InjectionToken<LiferayParams>('LiferayParams');
export const LIFERAY_TOKEN = new InjectionToken<Liferay>('Liferay');

declare const Liferay: any;

export class DynamicLoader {
    constructor(private ngModuleRef: NgModuleRef<any>) {
    }

    loadComponent<T>(component: Type<T>, liferayParams: LiferayParams) {
        const element = document.getElementById(liferayParams.portletElementId);
        const moduleInjector: Injector = this.ngModuleRef.injector;
        (moduleInjector.get(NgZone) as NgZone).run(() => {
            const injector: Injector = Injector.create({
                providers: [
                    {provide: LIFERAY_PARAMS_TOKEN, useValue: liferayParams},
                    {provide: LIFERAY_TOKEN, useValue: Liferay}
                ], parent: moduleInjector});
            const componentFactoryResolver = injector.get(ComponentFactoryResolver);
            const applicationRef = injector.get(ApplicationRef);
            const componentFactory = componentFactoryResolver.resolveComponentFactory(component);
            const componentRef = componentFactory.create(
                injector,
                [],
                element
            );
            applicationRef.attachView(componentRef.hostView);
        });
    }
}
