import {StaticProvider} from '@angular/core';
import LiferayParams from '../types/LiferayParams';

export class LiferayParamsProvider {
  constructor(private liferayParams: LiferayParams) {
  }

  instanceOf(): LiferayParams {
    return this.liferayParams;
  }
}

export function getLiferayParamsProvider(liferayParams: LiferayParams): StaticProvider {
  return {provide: LiferayParamsProvider, useValue: new LiferayParamsProvider(liferayParams)};
}
