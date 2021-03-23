import { ModuleWithProviders, NgModule } from '@angular/core';
import {
  PluginConfig,
  pluginConfigToken,
  pluginToken,
} from 'projects/core-system/src/public-api';
import { ExamplePlugin } from './example.plugin';

export function examplePluginFactory(config: PluginConfig): ExamplePlugin {
  return new ExamplePlugin(config);
}

@NgModule()
export class ExamplePluginModule {
  static forRoot(
    config: PluginConfig
  ): ModuleWithProviders<ExamplePluginModule> {
    return {
      ngModule: ExamplePluginModule,
      providers: [
        { provide: pluginConfigToken, useValue: config },
        {
          provide: pluginToken,
          useFactory: examplePluginFactory,
          deps: [pluginConfigToken],
          multi: true,
        },
      ],
    };
  }
}
