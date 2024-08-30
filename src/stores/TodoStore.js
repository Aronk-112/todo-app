import { defineStore } from "pinia";

export const useTodoStore = defineStore('todoStore', {
    state: () => {
        return {
            todos: JSON.parse(localStorage.getItem('todos')) ?? []
        }
    },
    actions: {
        addTodo(body, isDone, id) {
            this.todos = [{ body, isDone, id }, ...this.todos]
            localStorage.setItem('todos', JSON.stringify(this.todos))
        },
        deleteTodo(index) {

            this.todos = this.todos.filter(todo => {
                console.log(`Index: ${index}`);
                console.log(`Todo ID: ${todo.id}`);

                return todo.id !== index
            })
            localStorage.setItem('todos', JSON.stringify(this.todos))
        }
    }
})
