<template>
    <div class="tab__content">
        <h2>{{text}}</h2>
    </div>
</template>

<script setup lang="ts">
    export interface TabProps {
        text: string
    }
    defineProps<TabProps>()
</script>

<style scoped>
.tab__content {
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 3px 5px 5px rgba(0,0,0,0.5);
  min-width: 300px;
}
</style>