import { Bespoke } from "./components/bespoke/bespoke.mjs";
import { Button } from "./components/button/button.mjs";

const initAll = (options) => {
  options = typeof options !== "undefined" ? options : {};
  const $scope =
    options.scope instanceof HTMLElement ? options.scope : document;

  const $bespoke = $scope.querySelector('[data-module="tna-bespoke"]');
  if ($bespoke) {
    new Bespoke($bespoke).init();
  }

  const $button = $scope.querySelector('[data-module="tna-button"]');
  if ($button) {
    new Button($button).init();
  }
};

export { initAll };
