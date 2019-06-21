/**
 * 订阅发布模式
 */
let o = (function() {
  let subs = {};
  function addSubscribe(sub, fn) {
    if (!subs.sub) {
      subs.sub = [fn];
    } else {
      subs.sub.push(fn);
    }
  }

  function publish() {
    for (let item in subs) {
      subs[item].forEach(fn => {
        fn();
      });
    }
  }

  return {
    addSubscribe,
    publish
  }
})();