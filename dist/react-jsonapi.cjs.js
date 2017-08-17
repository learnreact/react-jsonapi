'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var lens = function lens(subject, _lens) {
  return _lens ? subject[_lens] : subject;
};

var Idx = function Idx(_ref, _ref2) {
  var idx = _ref.idx,
      children = _ref.children;
  var json = _ref2.json;
  return children ? typeof children === "function" ? React.Children.only(children(lens(json, idx))) : React.Children.only(children) : React.createElement(
    "pre",
    null,
    React.createElement(
      "code",
      null,
      JSON.stringify(lens(json, idx), null, 2)
    )
  );
};

Idx.contextTypes = {
  state: PropTypes.object,
  json: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

var JSON = function JSON(props) {
  return React.createElement(Idx, props);
};
var Data = function Data(props) {
  return React.createElement(Idx, _extends({ idx: "data" }, props));
};
var Included = function Included(props) {
  return React.createElement(Idx, _extends({ idx: "included" }, props));
};
var Links = function Links(props) {
  return React.createElement(Idx, _extends({ idx: "links" }, props));
};
var Meta = function Meta(props) {
  return React.createElement(Idx, _extends({ idx: "meta" }, props));
};
var Errors = function Errors(props) {
  return React.createElement(Idx, _extends({ idx: "errors" }, props));
};

exports.Idx = Idx;
exports.JSON = JSON;
exports.Data = Data;
exports.Included = Included;
exports.Links = Links;
exports.Meta = Meta;
exports.Errors = Errors;
