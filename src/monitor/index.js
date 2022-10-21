import { injectJsError } from "./lib/jsError";
import { injectXHR } from "./lib/xhr";
import { blankScreen } from "./lib/blankScreen";
import { timing } from "./lib/timing";
import { longTask } from "./lib/longTask";
import { pv } from "./lib/pv";
import SendTracker from "./lib/tracker";

const getDefaultConfig = () => ({
  onReport(e) {
    console.debug(e);
  }
});
export default class Monitor {
  constructor(config = {}) {
    const defConfig = getDefaultConfig();
    this.config = Object.assign({}, defConfig, config);
    this.tracker = new SendTracker(config.onReport);
    this.init();
  }
  init() {
    injectJsError(this.tracker);
    injectXHR(this.tracker);
    blankScreen(this.tracker);
    timing(this.tracker);
    longTask(this.tracker);
    pv(this.tracker);
  }
}
