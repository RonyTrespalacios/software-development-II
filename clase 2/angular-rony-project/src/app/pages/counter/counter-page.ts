import { Component, signal } from "@angular/core";


@Component({
    templateUrl: './counter-page.html',
    styleUrl: './counter-page.css',    
})
export class CounterPageComponent {
    counter : number = 0; 
    counterSignal = signal(0);

    add(value: number){
        this.counter += value;
        this.counterSignal.update((currentValue)=>currentValue+value);
    }
    decrease(value: number){
        this.counter -= value;
        this.counterSignal.update((currentValue)=>currentValue-value);
    }
    reset(){
        this.counter = 0;
        this.counterSignal.set(0);
    }
}