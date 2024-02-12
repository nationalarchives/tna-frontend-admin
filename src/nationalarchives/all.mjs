import { Button } from "./components/button/button.mjs";

const initAll = (options) => {
  options = typeof options !== "undefined" ? options : {};
  const $scope =
    options.scope instanceof HTMLElement ? options.scope : document;

  const $button = $scope.querySelector('[data-module="tna-button"]');
  if ($button) {
    new Button($button).init();
  }
};

export { initAll };
