import { Component, signal } from '@angular/core';
import { Greeting } from '../components/greeting/greeting';
import { Counter } from '../components/counter/counter';

@Component({
  selector: 'app-pickbar',
  imports: [Greeting, Counter],
  templateUrl: './pickbar.html',
  styleUrl: './pickbar.css'
})
export class Pickbar {
  homeMessage = signal('Pickbar works!');

  KeyUpHander(event: KeyboardEvent) {
    console.log(`user pressed the ${event.key} key`);
  }
} 
