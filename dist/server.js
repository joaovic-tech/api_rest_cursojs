"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _app = require('./app'); var _app2 = _interopRequireDefault(_app);

_app2.default.listen(process.env.APP_PORT, () => {
  console.log(`api_rest: ${process.env.APP_URL_DEV ? process.env.APP_URL_DEV : process.env.APP_URL}`);
});
