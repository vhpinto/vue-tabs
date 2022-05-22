<template>
    <div className="tabs">
        <Nav
            :titles="props.titles"
            :selection="currentButton"
            @on-selection="select"
        ></Nav>
        <Tab
            :text="props.texts[currentButton]"
        ></Tab>
    </div>
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
.tabs {
    height: auto;
    width: auto;
    max-width: 1000px;
  }
</style>