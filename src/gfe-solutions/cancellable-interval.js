function setCancellableInterval(callback, delay, ...args) {
  const interval = setInterval(callback, delay, ...args);

  return function () {
    clearInterval(interval);
  };
}

let i = 0;
// t = 0:
const cancel = setCancellableInterval(() => {
  i++;
  console.log(i);
}, 300);
// t = 300: i is 1
// t = 600: i is 2
// t = 900: i is 2
setTimeout(cancel, 1000);
// t = 1200: i is still 2 because cancel() was called and the interval callback has stopped running.
