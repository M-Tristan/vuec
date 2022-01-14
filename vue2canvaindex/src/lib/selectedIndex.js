import _ from "lodash";
const selectedIndex = {
  selectedset: new Set(),
  event: null,
  init() {
    this.selectedset.clear();
    this.event = null;
  },
  clear: function () {
    this.selectedset.clear();
    this.updated();
  },
  delete(id) {
    this.selectedset.delete(id);
    this.updated();
  },
  add(id) {
    this.selectedset.add(id);
    this.updated();
  },
  has(id) {
    return this.selectedset.has(id);
  },
  print() {
    console.log(this.selectedset);
  },
  debouncePrint: _.debounce(function () {
    this.print();
  }, 1),
  debounceEmit: _.debounce(function () {
    if (this.event == null) {
      return;
    }
    let datalist = [];
    this.selectedset.forEach((item) => {
      datalist.push(item);
    });
    setTimeout(() => {
      this.event(datalist);
    });
  }, 1),
  onUpdate(func) {
    this.event = func;
  },
  updated() {
    this.debounceEmit();
  },
};

export default selectedIndex;
