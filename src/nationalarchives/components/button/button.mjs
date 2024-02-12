export class Button {
  constructor($module) {
    this.$module = $module;
  }

  init() {
    if (!this.$module) {
      return;
    }

    this.$module.addEventListener("click", (e) => {
      e.preventDefault();
      alert("You clicked me!");
    });
  }
}
