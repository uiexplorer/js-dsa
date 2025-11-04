function functionLength(fn) {
  return fn.length;
}

function foo() {}
function bar(a) {}
function baz(a, b) {}

functionLength(foo); // 0
functionLength(baz); // 2
functionLength(bar); // 1
