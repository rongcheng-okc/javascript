/**
 * 观察者模式
 */
class Subscribe {
  constructor() {
    this.subs = [];

  }
  addSubscribe = (sub) => {
    if (!this.subs.includes(sub)) {
      this.subs.push(sub);
    }
  }
  notify = () => {
    this.subs.forEach(item => {
      item.update();
    });
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }
  update = () => {
    console.log(this.name);
  }
}

let subscribe = new Subscribe();

subscribe.addSubscribe(new Observer('rc1'));
subscribe.addSubscribe(new Observer('rc2'));

subscribe.notify();