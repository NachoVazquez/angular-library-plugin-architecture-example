import { ModuleWithProviders, NgModule } from '@angular/core';

import { CoreConfig } from './core.config';
import { coreConfigToken } from './core-config.token';

@NgModule()
export class CoreSystemModule {
  static forRoot(config: CoreConfig): ModuleWithProviders<CoreSystemModule> {
    return {
      ngModule: CoreSystemModule,
      providers: [{ provide: coreConfigToken, useValue: config }],
    };
  }
}
