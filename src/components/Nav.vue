<template>
        <button v-for="(title, index) in titles" :key="title"
        class="nav"
        @click="$emit('onSelection', index)">
        {{ title }}
        </button>
</template>

<script setup lang="ts">
    export interface NavProps {
        titles: string[] 
        selection?: number 
    }
    export interface NavEvents {
        (e: 'onSelection', val: number): void 
    }
    defineProps<NavProps>()
    defineEmits<NavEvents>()
</script>

<style scoped>
    .nav {
        margin-bottom: 10px;
        padding: 0;
        display: inline;
        width: 80px;
        text-align: center;
        padding: 10px 20px;
        margin-right: 10px;
        background-color: #ddd;
        border-radius: 5px;
    }
</style>