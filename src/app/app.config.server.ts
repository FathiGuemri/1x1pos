import {
  mergeApplicationConfig,
  ApplicationConfig,
  importProvidersFrom,
} from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { IonicServerModule } from '@ionic/angular-server';

const serverConfig: ApplicationConfig = {
  providers: [importProvidersFrom(IonicServerModule), provideServerRendering()],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
