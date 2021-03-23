import { InjectionToken } from '@angular/core';
import { CoreConfig } from './core.config';

export const coreConfigToken: InjectionToken<CoreConfig> = new InjectionToken(
  '__CORE_CONFIG_TOKEN__'
);
