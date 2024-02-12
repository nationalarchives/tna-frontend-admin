import Button from "./template.njk";

const argTypes = {
  text: { control: "text" },
};

export default {
  title: "Components/Button",
  argTypes,
};

const Template = ({ text }) =>
  Button({
    params: {
      text,
    },
  });

export const Standard = Template.bind({});
Standard.args = {
  text: "My button",
};
