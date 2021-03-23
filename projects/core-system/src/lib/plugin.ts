import { PluginConfig } from './plugin.config';

export interface SystemPlugin {
  config: PluginConfig;

  operationA(...args: unknown[]): unknown;
  operationB(...args: unknown[]): unknown;
  operationZ(...args: unknown[]): unknown;
}
