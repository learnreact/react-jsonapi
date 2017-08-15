(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
	typeof define === 'function' && define.amd ? define(['react'], factory) :
	(global.ReactJSONAPI = factory(global.React));
}(this, (function (React) { 'use strict';

React = React && 'default' in React ? React['default'] : React;

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();









var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Formatter = function Formatter(_ref) {
  var obj = _ref.obj;
  return React.createElement(
    "pre",
    null,
    JSON.stringify(obj, null, 2)
  );
};

var withResponse = function withResponse(Composed) {
  var FetchContextProvider = function (_Component) {
    inherits(FetchContextProvider, _Component);

    function FetchContextProvider() {
      classCallCheck(this, FetchContextProvider);
      return possibleConstructorReturn(this, (FetchContextProvider.__proto__ || Object.getPrototypeOf(FetchContextProvider)).apply(this, arguments));
    }

    createClass(FetchContextProvider, [{
      key: "render",
      value: function render() {
        return React.createElement(Composed, this.context);
      }
    }]);
    return FetchContextProvider;
  }(Component);

  FetchContextProvider.contextTypes = {
    response: PropTypes.object
  };

  return FetchContextProvider;
};

var Response = withResponse(function (_ref2) {
  var response = _ref2.response;
  return React.createElement(Formatter, { obj: response });
});

// TODO: JSONAPI
// const Idx = ({ idx }) =>
//   createElement(
//     withResponse(({ response }) => <Formatter obj={response[idx]} />)
//   );
// const Links = () => <Idx idx="links" />;
// const Data = () => <Idx idx="data" />;
// const Included = () => <Idx idx="included" />;
// const Meta = () => <Idx idx="meta" />;

var index = {
  Fetch: Fetch,
  Formatter: Formatter,
  // Idx,
  Response: Response,
  withResponse: withResponse
};

return index;

})));
