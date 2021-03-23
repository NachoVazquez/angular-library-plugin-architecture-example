import { Inject, Injectable } from '@angular/core';
import {
  PluginConfig,
  pluginConfigToken,
  SystemPlugin,
} from 'projects/core-system/src/public-api';

@Injectable()
export class ExamplePlugin implements SystemPlugin {
  constructor(@Inject(pluginConfigToken) readonly config: PluginConfig) {}
  operationA(...args: unknown[]): unknown {
    throw new Error('Method not implemented.');
  }
  operationB(...args: unknown[]): unknown {
    throw new Error('Method not implemented.');
  }
  operationZ(...args: unknown[]): unknown {
    throw new Error('Method not implemented.');
  }
}
