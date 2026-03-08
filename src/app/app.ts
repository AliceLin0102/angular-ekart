import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TopHeader } from './top-header/top-header';
import { TopMenu } from './header/top-menu/top-menu';
import { MainMenu } from './header/main-menu/main-menu';
import { ContainerComponent } from './container/container';


@Component({
  selector: 'app-root',
    imports: [HeaderComponent, TopHeader, TopMenu, MainMenu, ContainerComponent], //RouterOutlet,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-ekart');
}
