'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.connectDb = undefined;

require('dotenv/config');

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _Comment = require('./Comment');

var _Comment2 = _interopRequireDefault(_Comment);

var _BlogPost = require('./BlogPost');

var _BlogPost2 = _interopRequireDefault(_BlogPost);

var _User = require('./User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var connectDb = function connectDb() {
    return _mongoose2.default.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
};

var models = { Comment: _Comment2.default, BlogPost: _BlogPost2.default, User: _User2.default };

exports.connectDb = connectDb;
exports.default = models;
//# sourceMappingURL=index.js.map