import {action, computed, observable} from "mobx";



 class ObservableTodoList {
    @observable.shallow list = [];

    // constructor(todos) {
    //     todos.forEach(this.addTodo);
    // }

    @action addTodo = (obj) => {
        this.list.push(obj);
    }

    @action removeTodo = (todo) => {
        this.list.splice(this.list.indexOf(todo), 1);
    };

    @computed get getTodos() {
        return this.list;
    }

    // @computed get openTodos() {
    //     return this.list.filter(todo => !todo.isDone);
    // }
}

export const TodoList= new ObservableTodoList();