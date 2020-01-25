import {async, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import LiferayParams from '../types/LiferayParams';
import {LIFERAY_PARAMS_TOKEN, LIFERAY_TOKEN} from './dynamic.loader';

const LIFERAY_PARAMS: LiferayParams = {
    contextPath: '/',
    portletElementId: 'js-portlet-_liferay_portlet_',
    portletNamespace: '_liferay_portlet_',
    configuration: {
        portletInstance: {},
        system: {}
    }
};

const LIFERAY = {
    Language: {
        get: (key: string) => {
            return key;
        }
    }
};

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                AppComponent
            ],
            providers: [
                {provide: LIFERAY_PARAMS_TOKEN, useValue: LIFERAY_PARAMS},
                {provide: LIFERAY_TOKEN, useValue: LIFERAY}
            ]
        }).compileComponents();
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have a label 'portlet-namespace'`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.labels.portletNamespace).toEqual('portlet-namespace');
    });

    it('should render portlet namespace value', () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('div span.value').textContent).toContain(LIFERAY_PARAMS.portletNamespace);
    });
});
