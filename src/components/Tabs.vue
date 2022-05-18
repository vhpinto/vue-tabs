<template>
        <Nav
            class="tabs"
            :titles="tabTitles"
            :selection="currentButton"
            @on-selection="select"
        />
        <Tab
            :text="texts[currentButton]"
        />
</template>


<script setup lang="ts">
import { ref } from 'vue'
import Tab, { type TabProps } from './Tab.vue'
import Nav, { type NavProps} from './Nav.vue'
const tabTitles  = ["Tab1", "Tab2", "Tab3", "Tab4"]
const texts = ["Texto da Tab1", "Texto da Tab2", "Texto da Tab3", "Texto da Tab4"]
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

.tabs__header {
    margin-bottom: 10px;
    list-style: none;
    padding: 0;
    display: flex;
}

.tabs__header li {
    width: 80px;
    text-align: center;
    padding: 10px 20px;
    margin-right: 10px;
    background-color: #ddd;
    border-radius: 5px;
}

.tabs__header li.selected {
    background-color: #0984e3;
    color: white;
}
</style>