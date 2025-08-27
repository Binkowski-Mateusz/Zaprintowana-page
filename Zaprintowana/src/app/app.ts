import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pickbar } from './pickbar/pickbar';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [Pickbar, Header],
  template: `<app-header></app-header>
  <app-pickbar></app-pickbar>`,
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Zaprintowana');
}
