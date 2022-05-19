<script lang="ts" setup>
import Tabs from "./components/Tabs.vue";

const tabs  = {
        titles: [
            "Tab 1 title",
            "Tab 2 title",
            "Tab 3 title",
            "Tab 4 title"
        ],
        texts: [
            "Tab 1 content",
            "Tab 2 content",
            "Tab 3 content",
            "Tab 4 content"
        ],
    }
</script>

<template>
    <Tabs :titles=tabs.titles :texts="tabs.texts"/>
</template>