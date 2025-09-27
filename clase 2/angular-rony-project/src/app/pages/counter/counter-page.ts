import { Component } from "@angular/core";


@Component({
    templateUrl: './counter-page.html',
    styleUrl: './counter-page.css',    
})
export class CounterPageComponent {
    counter : number = 0; 

    add(value: number){
        this.counter += value;
    }
    decrease(value: number){
        this.counter -= value;
    }
    reset(){
        this.counter = 0;
    }
}