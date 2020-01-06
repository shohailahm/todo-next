import {action, observable} from "mobx";

export default class TodoItem {
    id = Date.now();

    @observable text = '';
    @observable isDone = false;

    constructor(text) {
        this.text = text;
    }

    @action toggleIsDone = () => {
        this.isDone = !this.isDone
    }

    @action updateText = (text) => {
        this.text = text;
    }
}