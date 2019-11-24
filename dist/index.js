"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("./index.css");

var serviceWorker = _interopRequireWildcard(require("./serviceWorker"));

var _timer = _interopRequireDefault(require("./timer"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CountdownTimer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CountdownTimer, _React$Component);

  function CountdownTimer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CountdownTimer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CountdownTimer)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      days: "",
      hours: "",
      mins: "",
      secs: "",
      flag: false,
      msg: ""
    };

    _this.startCountdown = function () {
      if (_this.state.days === "" || _this.state.hours === "" || _this.state.mins === "" || _this.state.secs === "") {
        _this.setState({
          msg: "Please provide all the values to start the Timer"
        });
      } else {
        _this.setState({
          flag: true
        });
      }
    };

    _this.resetTimer = function () {
      _this.setState({
        flag: false,
        days: "",
        hours: "",
        mins: "",
        secs: ""
      });
    };

    _this.setFieldValue = function (event) {
      var field = event.target.name;

      _this.setState(_defineProperty({}, field, event.target.value));
    };

    return _this;
  }

  _createClass(CountdownTimer, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          days = _this$state.days,
          hours = _this$state.hours,
          mins = _this$state.mins,
          secs = _this$state.secs,
          flag = _this$state.flag,
          msg = _this$state.msg;
      return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", {
        className: "App-header"
      }, _react["default"].createElement("header", null, flag ? _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_timer["default"], {
        days: days,
        hours: hours,
        mins: mins,
        secs: secs
      }), _react["default"].createElement("p", null, _react["default"].createElement("button", {
        type: "button",
        onClick: this.resetTimer
      }, "Reset Timer"))) : _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("table", null, _react["default"].createElement("tr", null, _react["default"].createElement("td", null, "Days:"), _react["default"].createElement("td", null, _react["default"].createElement("input", {
        name: "days",
        type: "text",
        placeholder: "Enter Days countdown",
        onChange: this.setFieldValue,
        value: days
      }))), _react["default"].createElement("tr", null, _react["default"].createElement("td", null, "Hours:"), _react["default"].createElement("td", null, _react["default"].createElement("input", {
        name: "hours",
        type: "text",
        placeholder: "Enter between 1-24",
        onChange: this.setFieldValue,
        value: hours
      }))), _react["default"].createElement("tr", null, _react["default"].createElement("td", null, "Minutes:"), _react["default"].createElement("td", null, _react["default"].createElement("input", {
        name: "mins",
        type: "text",
        placeholder: "Enter between 1-60",
        onChange: this.setFieldValue,
        value: mins
      }))), _react["default"].createElement("tr", null, _react["default"].createElement("td", null, "Seconds:"), _react["default"].createElement("td", null, _react["default"].createElement("input", {
        name: "secs",
        placeholder: "Enter between 1-60",
        onChange: this.setFieldValue,
        value: secs
      })))), _react["default"].createElement("p", null, _react["default"].createElement("button", {
        type: "button",
        onClick: this.startCountdown
      }, "Start Countdown ")), _react["default"].createElement("p", null, msg)))));
    }
  }]);

  return CountdownTimer;
}(_react["default"].Component);

var _default = CountdownTimer; // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

exports["default"] = _default;
serviceWorker.unregister();