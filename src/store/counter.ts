// import { makeAutoObservable } from "mobx";

class Counter {
    count = 0;
    // constructor(){
    //     // makeAutoObservable(this)
    // }
    increment(){
        this.count = this.count + 1
    }
    decrement(){
        this.count = this.count - 1
    }
}
    // export let count = 0;
    // export const increment = () => {
    //     count += 1
    // }
    // export const decrement = () => {
    //     count -= 1
    // }
export default new Counter();