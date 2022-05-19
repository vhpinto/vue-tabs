<template>
        <Nav
            class="tabs"
            :titles="props.titles"
            :selection="currentButton"
            @on-selection="select"
        />
        <Tab
            :text="props.texts[currentButton]"
        />
</template>


<script setup lang="ts">
import { ref } from 'vue'
import Tab from './Tab.vue'
import Nav from './Nav.vue'

    const props = defineProps<{
        titles?: string[],
        texts?: string[],
    }>();

const currentButton =  ref(0)
function select(buttonIndex: number) {
    currentButton.value = buttonIndex
}
</script>

<style scoped>    
    div {
        display: flex;
        flex-direction: column;
        max-width: fit-content;
      }
</style>

<style scoped>
.tabs {
    max-width: 400px;
    margin: 0 auto;
    align-self: center
}
</style>