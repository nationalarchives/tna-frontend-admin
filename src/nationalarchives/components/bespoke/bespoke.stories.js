import Bespoke from "./template.njk";

const argTypes = {
  text: { control: "text" },
};

export default {
  title: "Components/Bespoke",
  argTypes,
};

const Template = ({ text }) =>
  Bespoke({
    params: {
      text,
    },
  });

export const Standard = Template.bind({});
Standard.args = {
  text: "My bespoke element",
};
