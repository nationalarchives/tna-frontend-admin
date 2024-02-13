export class Bespoke {
  constructor($module) {
    this.$module = $module;
  }

  init() {
    if (!this.$module) {
      return;
    }
  }
}
