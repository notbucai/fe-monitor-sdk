const userAgent = require("user-agent");

function getExtraData() {
  return {
    title: document.title,
    url: location.href,
    timestamp: Date.now(),
    userAgent: userAgent.parse(navigator.userAgent).name,
  };
}

class SendTracker {
  constructor(report) {
    // 上报的路径
    this.report = report;
  }
  send(data = {}) {
    let extraData = getExtraData();
    let log = { ...data, ...extraData };
    this.report && this.report(log);
  }
}

export default SendTracker;
