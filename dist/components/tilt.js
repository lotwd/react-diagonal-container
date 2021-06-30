"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Tilt = _ref => {
  let {
    flip,
    magnitude,
    flattenTop,
    flattenBottom,
    containerTopBackgroundColor,
    containerBottomBackgroundColor,
    containerBackground,
    spacingAfter,
    background,
    children
  } = _ref;
  const rootBackgroundColor = containerTopBackgroundColor && containerBottomBackgroundColor ? "linear-gradient(0deg, ".concat(flattenBottom ? background : containerBottomBackgroundColor, " 50%, ").concat(flattenTop ? background : containerTopBackgroundColor, " 50%)") : flattenTop && flattenBottom ? background : flattenTop || flattenBottom ? "linear-gradient(0deg, ".concat(flattenBottom ? background : containerBackground, " 0%, ").concat(flattenBottom ? background : containerBackground, " 50%, ").concat(flattenTop ? background : containerBackground, " 50%, ").concat(flattenTop ? background : containerBackground, " 0%)") : containerBackground ? containerBackground : "transparent";
  const flipClass = flip ? " flip" : "";
  const magClass = magnitude ? " " + magnitude : "";
  const cropTop = flattenTop ? " cropTop" : "";
  const cropBottom = flattenBottom ? " cropBottom" : "";
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      background: rootBackgroundColor
    },
    className: "root" + cropTop + cropBottom
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      background: background
    },
    className: "content-container" + flipClass + magClass
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "content" + flipClass + magClass
  }, children))), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: containerBottomBackgroundColor ? containerBottomBackgroundColor : containerBackground,
      height: spacingAfter,
      color: "white"
    }
  }));
};

var _default = Tilt;
exports.default = _default;