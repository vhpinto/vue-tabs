import Nav from "../components/Nav.vue";

export default {
  title: 'Tabs/Nav',
  component: Nav
};

const Template = (args) => ({
  components: { Nav },
  setup() {
    return { args };
  },
  template: '<Nav v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  titles: ['Story title'],
};