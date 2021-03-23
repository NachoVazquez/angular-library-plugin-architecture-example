import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreSystemModule } from 'projects/core-system/src/public-api';
import { ExamplePluginModule } from 'projects/example-plugin/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreSystemModule.forRoot({
      coreOptionsA: '_A_',
      coreOptionsB: '_B_',
      coreOptionsZ: '_Z_',
    }),
    ExamplePluginModule.forRoot({
      optionA: '-A-',
      optionB: '-B-',
      optionZ: '-Z-',
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
