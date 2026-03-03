import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
        provideBrowserGlobalErrorListeners(), //瀏覽器層級的全域錯誤監聽
        provideRouter(routes) //啟用 Angular 路由系統，並註冊routes。
  ]
};
