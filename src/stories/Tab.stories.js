import Tab from "../components/Tab.vue";

export default {
  title: 'Tab',
  component: Tab,
};

const Template = (args) => ({
  components: { Tab },
  setup() {
    return { args };
  },
  template: '<Tab v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  text: "Text #1",
};