function nullable(subRequirement) {
  const check = (required, props, key, ...rest) => {
    if (props[key] === null) {
      return null;
    }
    const sub = required ? subRequirement.isRequired : subRequirement;
    return sub(props, key, ...rest);
  };
  const fn = check.bind(null, false);
  fn.isRequired = check.bind(null, true);
  return fn;
}

Object.defineProperty(exports, '__esModule', { value: true });
exports.default = nullable;

module.exports = Object.assign(exports.default, exports);
exports.default.default = module.exports;
