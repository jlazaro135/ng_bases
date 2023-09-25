import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>
      counter: {{ counter }}
    </p>

    <button (click)="incrementar(1)">Incrementar</button>
    <button (click)="reset()">Reset</button>
    <button (click)="incrementar(-1)">Decrementar</button>

  `
})

export class CounterComponent {

  public counter: number = 20;

  incrementar(value: number): void{
    this.counter += value
  }

  reset(): void{
    this.counter = 20;
  }

}
