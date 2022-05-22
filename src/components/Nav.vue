<template>
    <div class="nav">
        <span v-for="(title, index) in titles" :key="title"
            @click="$emit('onSelection', index)">
            {{ title }}
        </span>
    </div>
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
        width: 60%;
        margin: 0 auto 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .nav span {
        text-decoration: none;
        width: auto;
        background-color: #053742;
        color: #e8f0f2;
        padding: 5px;
        border: 1px solid #CCCCCC;
        border-radius: 8px;
    }

    .nav span:hover {
        color: #008080;
        cursor: pointer;
    }
</style>