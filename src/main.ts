import { bootstrapApplication } from '@angular/platform-browser'; //用瀏覽器方式啟動Angular
import { appConfig } from './app/app.config';//應用程式設定(路由、providers等)
import { App } from './app/app';//根元件

bootstrapApplication(App, appConfig) //啟動：根元件＋全域設定
  .catch((err) => console.error(err));
