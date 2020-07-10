"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require("dotenv/config");

var _cors = _interopRequireDefault(require("cors"));

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _models = require("./models");

var _index = _interopRequireDefault(require("./routes/index"));

var _api = _interopRequireDefault(require("./routes/api"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var app = (0, _express["default"])();
var whitelist = ['http://localhost:3000', 'https://mickywagner.github.io/blog_rest_api/', 'https://blog-admin-2020.netlify.app/'];
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use((0, _cors["default"])({
  origin: function origin(_origin, callback) {
    if (!_origin) return callback(null, true);

    if (whitelist.indexOf(_origin) === -1) {
      var message = "The CORS policy for this origin doesn't ' +\n                  'allow access from the particular origin.";
      return callback(new Error(message), false);
    }

    return callback(null, true);
  },
  credentials: true
}));
app.use((0, _cookieParser["default"])());

_mongoose["default"].set('useFindAndModify', false);

app.use('/', _index["default"]);
app.use('/api', _api["default"]);
(0, _models.connectDb)().then( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          app.listen(process.env.PORT, function () {
            console.log("App listening on port ".concat(process.env.PORT));
          });

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));