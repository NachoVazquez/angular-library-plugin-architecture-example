import { InjectionToken } from '@angular/core';
import { SystemPlugin } from './plugin';

export const pluginToken: InjectionToken<SystemPlugin> = new InjectionToken(
  '__PLUGIN_TOKEN__'
);
