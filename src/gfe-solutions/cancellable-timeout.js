function setCancellableTimeout(callback, delay, ...args) {
  const timer = setTimeout(callback, delay, ...args);

  return function () {
    clearTimeout(timer);
  };
}

let i = 0;
// t = 0:
const cancel = setCancellableTimeout(() => {
  i++;
  console.log(i);
}, 100);
// t = 50:
setTimeout(cancel, 100);
// t = 100: i is still 0 because cancel() was called.
