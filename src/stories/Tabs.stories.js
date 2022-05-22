import Tabs from "../components/Tabs.vue";

export default {
  title: "Tabs/Tabs",
  component: Tabs
};

const Template = (args) => ({
  components: { Tabs },
  setup() {
    return { args };
  },
  template: '<Tabs v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
    titles: [
      "Stories Tab 1 title",
      "Stories Tab 2 title",
      "Stories Tab 3 title",
      "Stories Tab 4 title"
    ],
    texts: [
      "Stories Tab 1 text",
      "Stories Tab 2 text",
      "Stories Tab 3 text",
      "Stories Tab 4 text"
    ],
};