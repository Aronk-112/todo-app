<script setup>
import TodoForm from './components/TodoForm.vue';
import TodoList from './components/TodoList.vue';

import { useTodoStore } from './stores/TodoStore';

const todoStore = useTodoStore()
</script>

<template>

  <header class="title-header">
    <h1>Todo App</h1>
  </header>

  <main>
    <TodoForm />
    <TodoList />
  </main>

</template>

<style>
.title-header {
  text-align: center;
  padding: 1rem 0;
  font-size: 2rem;
}
</style>