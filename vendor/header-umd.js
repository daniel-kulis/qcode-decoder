(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define('qrcode', [], factory);
  else if (typeof exports === 'object')
    module.exports = factory();
  else root.qrcode = factory();
}(this, function () {
