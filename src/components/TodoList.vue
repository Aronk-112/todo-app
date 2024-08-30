<script setup>
import { useTodoStore } from '../stores/TodoStore';

const todoStore = useTodoStore()

const handleDelete = (index) => {
    todoStore.deleteTodo(index)
}
</script>

<template>
    <section :class="{done: todo.isDone}" class="todo-item" v-for="(todo, index) in todoStore.todos" :key="index">
        <p>{{ todo.body }}</p>
        <div class="action-buttons">
            <input class="todo-check" type="checkbox" v-model="todo.isDone" :id="index">
            <i class="fa-solid fa-trash delete-btn" @click="handleDelete(todo.id)"></i>
        </div>
    </section>
</template>

<style>
.todo-item {
    background-color: #333;
    max-width: 420px;

    display: flex;
    justify-content: space-between;

    padding: 0.5rem 1rem;
    margin: 0 auto 0.5rem auto;

    border-radius: 0.5rem;
    font-size: 1.25rem;

    border: 1.5px solid #333;

    transition: all 150ms ease-in-out;
}

.done {
    border: 1.5px solid crimson;
}

.done > p {
    text-decoration: line-through;
}

.todo-check {
    transform: scale(1.25);
    cursor: pointer;
}

.action-buttons {
    display: flex;
    gap: 1rem;
}

.delete-btn {
    cursor: pointer;
    color: #efefef;
    transition: all 100ms ease-in-out;
}
.delete-btn:hover {
    color: crimson;
}
.delete-btn:active {
    color: rgb(249, 54, 93);
}
</style>