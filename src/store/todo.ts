// import { makeAutoObservable } from "mobx"

class Todo {
    todos = [
        {id: 1, title: 'go to the shop', completed: false},
        {id: 2, title: 'wathch ulbi tv', completed: false},
        {id: 3, title: 'press like button', completed: false}
    ]
    constructor(){
        // makeAutoObservable(this)
    }

    addTodo(todo: {id: number, title: string, completed: boolean}){
        this.todos.push(todo)
        console.log('add');
        
    }
    removeTodo(id: number){
        this.todos = this.todos.filter(todo => todo.id !== id)
        console.log('remove');
        
    }
    completeTodo(id: number){
        this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
        console.log('complete');
        
    }
}

export default new Todo()