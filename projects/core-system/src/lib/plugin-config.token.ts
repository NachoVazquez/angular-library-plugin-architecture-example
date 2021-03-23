import { InjectionToken } from '@angular/core';
import { PluginConfig } from './plugin.config';

export const pluginConfigToken: InjectionToken<PluginConfig> = new InjectionToken(
  '__PLUGIN_CONFIG_TOKEN__'
);
