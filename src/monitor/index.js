import { injectJsError } from "./lib/jsError";
import { injectXHR } from "./lib/xhr";
import { blankScreen } from "./lib/blankScreen";
import { timing } from "./lib/timing";
import { longTask } from "./lib/longTask";
import { pv } from "./lib/pv";

const getDefaultConfig = () => ({});
export default class Monitor {
  constructor(config = {}) {
    const defConfig = getDefaultConfig();
    this.config = Object.assign({}, defConfig, config);
  }
  init() {
    injectJsError();
    injectXHR();
    blankScreen();
    timing();
    longTask();
    pv();
  }
  onReport() {

  }
}
