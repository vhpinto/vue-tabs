import Nav from "../components/Nav.vue";

export default {
  title: 'Nav',
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
  titles: ['Botão 1'],
};