import { Inject, Injectable, Optional } from '@angular/core';
import { coreConfigToken } from './core-config.token';
import { CoreConfig } from './core.config';
import { SystemPlugin } from './plugin';
import { pluginToken } from './plugin.token';

@Injectable({ providedIn: 'root' })
export class OrchestratorService {
  private readonly plugins: SystemPlugin[];

  constructor(
    @Optional()
    @Inject(pluginToken)
    plugins: SystemPlugin[],
    @Inject(coreConfigToken) private config: CoreConfig
  ) {
    plugins = plugins || [];
    this.plugins = Array.isArray(plugins) ? plugins : [plugins];
  }

  coreOperationA(...args: any[]): unknown {
    // just a demonstration of what can be done
    return this.plugins
      .filter((plugin) => this.canPluginExecute(plugin))
      .reduce<unknown>((acc, plugin) => plugin.operationA(acc), null);
  }

  private canPluginExecute(plugin: SystemPlugin): boolean {
    // implement any validation to determine whether the plugin should be executed or not

    // use the  core config and/or the driver config

    // just a demonstration of what can be done
    return (
      (this.config.coreOptionsA as boolean) &&
      (plugin.config.optionA as boolean)
    );
  }
}
