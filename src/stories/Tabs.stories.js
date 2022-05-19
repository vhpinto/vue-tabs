import Tabs from "../components/Tabs.vue";

export default {
  title: "Tabs",
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
    titles: ["Tab1", "Tab2", "Tab3", "Tab4"],
    texts: ["Texto da Tab1", "Texto da Tab2", "Texto da Tab3", "Texto da Tab4"],
};