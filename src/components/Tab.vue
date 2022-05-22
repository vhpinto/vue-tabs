<template>
    <h2 class="tab"> {{ text }} </h2>
</template>

<script setup lang="ts">
    export interface TabProps {
        text: string
    }
    defineProps<TabProps>()
</script>

<style scoped>
.tab {
    width: 80%;
    height: auto;
    min-height: 400px;
    background: #053742;
    margin: 0 auto 1.5rem;
    padding: 2rem 1rem;
    color: #e8f0f2;
    border-radius: 2rem;
  }
</style>