import "@nationalarchives/frontend/nationalarchives/all.scss";
import "@nationalarchives/frontend/nationalarchives/font-awesome.scss";
import "../src/nationalarchives/all.scss";
import { a11yConfig } from "./storybook-config";
import { customViewports } from "./viewports";

document.documentElement.classList.add(
  "tna-template",
  "tna-template--light-theme",
  "tna-template--yellow-accent",
);
if (window.self !== window.top) {
  document.documentElement.classList.add("tna-template--padded");
}
document.body.classList.add("tna-template__body");

export const parameters = {
  actions: {},
  viewport: { viewports: customViewports },
  options: { showPanel: true },
  a11y: {
    config: a11yConfig,
  },
  backgrounds: {
    values: [],
    grid: {
      cellSize: 16,
      cellAmount: 4,
    },
  },
  controls: {
    expanded: true,
  },
};
