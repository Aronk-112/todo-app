<script setup>
import { ref } from 'vue'
import { useTodoStore } from '../stores/TodoStore.js'

const newTodo = ref(null)
const todoStore = useTodoStore()

function handleSubmit() {
    if (!newTodo.value) {
        console.log("Can not add an empty todo.");
        return
    }

    todoStore.addTodo(newTodo.value, false, todoStore.todos.length)
    newTodo.value = null
}
</script>

<template>
    <form @submit.prevent="handleSubmit">
        <input class="todo-input" type="text" placeholder="What's on your agenda?" v-model="newTodo">
        <button class="add-btn" type="submit">Add Todo</button>
    </form>
</template>

<style>
form {
    max-width: fit-content;
    margin: 0 auto 1rem auto;

    display: flex;
    flex-direction: column;

    gap: 0.25rem;
}

.todo-input {
    padding: 0.25rem 0.5rem;
    border: none;
    border-radius: 0.25rem;
}

.todo-input:focus {
    outline: none;
}

.add-btn {
    border: 1.5px solid crimson;
    border-radius: 0.25rem;
    background-color: crimson;
    color: white;
    padding: 0.25rem 0.5rem;
    cursor: pointer;
    user-select: none;
    font-weight: bold;
}

.add-btn:hover {
    background-color: rgb(243, 53, 91);
    border: 1.5px solid rgb(243, 53, 91);
}

.add-btn:active {
    background-color: rgb(255, 105, 135);
    border: 1.5px solid rgb(255, 105, 135);
}
</style>