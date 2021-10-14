export const domUtil = {
  toNumber(str) {
    return parseInt(str, 10);
  },

  getSize(el) {
    let style = window.getComputedStyle(el);
    return {
      width: this.toNumber(style.width),
      height: this.toNumber(style.height)
    };
  },

  bindEvent(el, eventName, handler) {
    let fn = function (evt) {
      handler.call(this, evt);
    }
    el.addEventListener(eventName, fn, false);
    return {
      destroy() {
        el.removeEventListener(eventName, fn);
      }
    };
  }
};
