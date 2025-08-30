import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pickbar } from './pickbar/pickbar';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  template: `<app-header></app-header>
  <router-outlet></router-outlet>`,
  styleUrls: ['./app.css']
}) 
export class App {
  protected readonly title = signal('Zaprintowana');
}
