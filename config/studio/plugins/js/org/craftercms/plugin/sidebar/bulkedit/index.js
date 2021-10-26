var e$3 = craftercms.libs.React && Object.prototype.hasOwnProperty.call(craftercms.libs.React, 'default') ? craftercms.libs.React['default'] : craftercms.libs.React;
var { forwardRef, useContext, createContext, useRef, useLayoutEffect, createElement, Children, isValidElement, cloneElement } = craftercms.libs.React;
var e__default = craftercms.libs.React && Object.prototype.hasOwnProperty.call(craftercms.libs.React, 'default') ? craftercms.libs.React['default'] : craftercms.libs.React;
var { FormControl: FormControl$1, InputLabel: InputLabel$1, Select: Select$1, MenuItem: MenuItem$1, styled: styled$3, TextField: TextField$1, Button: Button$1, Dialog, DialogTitle, DialogContent, Box, DialogActions, Paper: Paper$1, Popper: Popper$1, Typography: Typography$2, Drawer, List: List$2, ListItem, Divider, ListItemIcon: ListItemIcon$1, ListItemText, CssBaseline, Snackbar, Alert, Toolbar: Toolbar$2, IconButton: IconButton$1, ListItemButton, Stack } = craftercms.libs.MaterialUI;
var { useEventCallback: useEventCallback$1, ownerWindow: ownerWindow$1, useForkRef: useForkRef$1, createSvgIcon: createSvgIcon$2, capitalize: capitalize$1, ownerDocument: ownerDocument$1, unstable_useId, debounce: debounce$2 } = craftercms.libs.MaterialUI;
var _utils = craftercms.libs.MaterialUI && Object.prototype.hasOwnProperty.call(craftercms.libs.MaterialUI, 'default') ? craftercms.libs.MaterialUI['default'] : craftercms.libs.MaterialUI;
var { Subject } = CrafterCMSNext.rxjs;
var ReactDOM = craftercms.libs.ReactDOM && Object.prototype.hasOwnProperty.call(craftercms.libs.ReactDOM, 'default') ? craftercms.libs.ReactDOM['default'] : craftercms.libs.ReactDOM;

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends$1() {
  _extends$1 = Object.assign || function (target) {
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

  return _extends$1.apply(this, arguments);
}

function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose$1(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray$1(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
}

function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function getAugmentedNamespace(n) {
	if (n.__esModule) return n;
	var a = Object.defineProperty({}, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var interopRequireDefault = createCommonjsModule(function (module) {
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var createSvgIcon$1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _utils.createSvgIcon;
  }
});
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

var reactJsxRuntime_production_min = createCommonjsModule(function (module, exports) {
var g=60103;exports.Fragment=60107;if("function"===typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element");exports.Fragment=h("react.fragment");}var m=e__default.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,k){var b,d={},e=null,l=null;void 0!==k&&(e=""+k);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(l=a.ref);for(b in a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q;exports.jsxs=q;
});

var jsxRuntime = createCommonjsModule(function (module) {

{
  module.exports = reactJsxRuntime_production_min;
}
});

var require$$0 = createSvgIcon$1;

var Close = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createSvgIcon = interopRequireDefault(require$$0);



var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, jsxRuntime.jsx)("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), 'Close');

exports.default = _default;
});

var CloseIcon = /*@__PURE__*/getDefaultExportFromCjs(Close);

var AutoAwesomeMotionOutlined = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createSvgIcon = interopRequireDefault(require$$0);



var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, jsxRuntime.jsx)("path", {
  d: "M14 2H4c-1.1 0-2 .9-2 2v10h2V4h10V2zm4 4H8c-1.1 0-2 .9-2 2v10h2V8h10V6zm2 4h-8c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm0 10h-8v-8h8v8z"
}), 'AutoAwesomeMotionOutlined');

exports.default = _default;
});

var AutoAwesomeMotionOutlinedIcon = /*@__PURE__*/getDefaultExportFromCjs(AutoAwesomeMotionOutlined);

var KeyboardArrowRight$1 = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createSvgIcon = interopRequireDefault(require$$0);



var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, jsxRuntime.jsx)("path", {
  d: "M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
}), 'KeyboardArrowRight');

exports.default = _default;
});

var KeyboardArrowRightIcon = /*@__PURE__*/getDefaultExportFromCjs(KeyboardArrowRight$1);

var FindReplace = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createSvgIcon = interopRequireDefault(require$$0);



var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, jsxRuntime.jsx)("path", {
  d: "M11 6c1.38 0 2.63.56 3.54 1.46L12 10h6V4l-2.05 2.05C14.68 4.78 12.93 4 11 4c-3.53 0-6.43 2.61-6.92 6H6.1c.46-2.28 2.48-4 4.9-4zm5.64 9.14c.66-.9 1.12-1.97 1.28-3.14H15.9c-.46 2.28-2.48 4-4.9 4-1.38 0-2.63-.56-3.54-1.46L10 12H4v6l2.05-2.05C7.32 17.22 9.07 18 11 18c1.55 0 2.98-.51 4.14-1.36L20 21.49 21.49 20l-4.85-4.86z"
}), 'FindReplace');

exports.default = _default;
});

var FindReplaceIcon = /*@__PURE__*/getDefaultExportFromCjs(FindReplace);

var FilterList = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createSvgIcon = interopRequireDefault(require$$0);



var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, jsxRuntime.jsx)("path", {
  d: "M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"
}), 'FilterList');

exports.default = _default;
});

var FilterListIcon = /*@__PURE__*/getDefaultExportFromCjs(FilterList);

var Save = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createSvgIcon = interopRequireDefault(require$$0);



var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, jsxRuntime.jsx)("path", {
  d: "M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"
}), 'Save');

exports.default = _default;
});

var SaveIcon = /*@__PURE__*/getDefaultExportFromCjs(Save);

var ClearAll = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createSvgIcon = interopRequireDefault(require$$0);



var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, jsxRuntime.jsx)("path", {
  d: "M5 13h14v-2H5v2zm-2 4h14v-2H3v2zM7 7v2h14V7H7z"
}), 'ClearAll');

exports.default = _default;
});

var ClearAllIcon = /*@__PURE__*/getDefaultExportFromCjs(ClearAll);

var Menu$2 = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createSvgIcon = interopRequireDefault(require$$0);



var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, jsxRuntime.jsx)("path", {
  d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
}), 'Menu');

exports.default = _default;
});

var MenuIcon = /*@__PURE__*/getDefaultExportFromCjs(Menu$2);

/*
 * Copyright (C) 2007-2021 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
var CookieHelper = {
  get: function get(name) {
    var value = '; ' + document.cookie;
    var parts = value.split('; ' + name + '=');
    if (parts.length >= 2) return parts.pop().split(';').shift();
  }
};

/*
 * Copyright (C) 2007-2021 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
var HttpHelper = {
  get: function get(url) {
    return new Promise(function (resolve, reject) {
      CrafterCMSNext.util.ajax.get(url).subscribe(function (response) {
        resolve(response);
      });
    });
  },
  post: function post(url, body, headers) {
    return new Promise(function (resolve, reject) {
      CrafterCMSNext.util.ajax.post(url, body, headers).subscribe(function (response) {
        resolve(response);
      });
    });
  }
};

var API_GET_CONTENT_TYPE = '/studio/api/1/services/api/1/content/get-content-types.json';
var API_GET_CONFIGURATION = '/studio/api/2/configuration/get_configuration';
var API_SEARCH = '/studio/api/2/search/search.json';
var API_GET_CONTENT = '/studio/api/1/services/api/1/content/get-content.json';
var API_WRITE_CONTENT = '/studio/api/1/services/api/1/content/write-content.json';
var API_ME = '/studio/api/2/users/me.json';
var StudioAPI = {
  origin: function origin() {
    return window.location.origin;
  },
  xsrfToken: function xsrfToken() {
    return CookieHelper.get('XSRF-TOKEN');
  },
  siteId: function siteId() {
    var url = new URL(window.location.href);

    if (url.searchParams.has('site')) {
      return url.searchParams.get('site');
    }

    return CookieHelper.get('crafterSite');
  },
  getContentTypes: function getContentTypes() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var url, res, data;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              url = "".concat(StudioAPI.origin()).concat(API_GET_CONTENT_TYPE, "?site=").concat(StudioAPI.siteId());
              _context.next = 3;
              return HttpHelper.get(url);

            case 3:
              res = _context.sent;

              if (!(res.status === 200)) {
                _context.next = 7;
                break;
              }

              data = res.response;
              return _context.abrupt("return", data.map(function (ct) {
                return {
                  name: ct.name,
                  label: ct.label
                };
              }));

            case 7:
              return _context.abrupt("return", []);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  getContentTypeConfig: function getContentTypeConfig(contentType) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var path, url, res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              path = "/content-types".concat(contentType, "/form-definition.xml");
              url = "".concat(StudioAPI.origin()).concat(API_GET_CONFIGURATION, "?module=studio&path=").concat(path, "&siteId=").concat(StudioAPI.siteId());
              _context2.next = 4;
              return HttpHelper.get(url);

            case 4:
              res = _context2.sent;

              if (!(res.status === 200 && res.response && res.response.content)) {
                _context2.next = 7;
                break;
              }

              return _context2.abrupt("return", res.response.content);

            case 7:
              return _context2.abrupt("return", '');

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  searchByContentType: function searchByContentType(ct) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var _body;

      var url, body, res;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              url = "".concat(StudioAPI.origin()).concat(API_SEARCH, "?siteId=").concat(StudioAPI.siteId());
              body = (_body = {
                query: '',
                keywords: '',
                offset: 0,
                limit: 100,
                sortBy: ''
              }, _defineProperty(_body, "sortBy", '_score'), _defineProperty(_body, "sortOrder", 'desc'), _defineProperty(_body, "filters", {
                'content-type': ct
              }), _body);
              _context3.next = 4;
              return HttpHelper.post(url, body);

            case 4:
              res = _context3.sent;

              if (!(res.status === 200)) {
                _context3.next = 7;
                break;
              }

              return _context3.abrupt("return", res.response.result.items);

            case 7:
              return _context3.abrupt("return", []);

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  getContent: function getContent(path) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      var url, res;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              url = "".concat(StudioAPI.origin()).concat(API_GET_CONTENT, "?edit=false&site_id=").concat(StudioAPI.siteId(), "&path=").concat(path);
              _context4.next = 3;
              return HttpHelper.get(url);

            case 3:
              res = _context4.sent;

              if (!(res.status === 200)) {
                _context4.next = 6;
                break;
              }

              return _context4.abrupt("return", res.response.content);

            case 6:
              return _context4.abrupt("return", null);

            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  },
  writeContent: function writeContent(path, content, contentType) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      var fileName, url, res;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              fileName = path.split('/').pop();
              url = "".concat(StudioAPI.origin()).concat(API_WRITE_CONTENT, "?site=").concat(StudioAPI.siteId(), "&phase=onSave&path=").concat(path, "&fileName=").concat(fileName, "&contentType=").concat(contentType, "&unlock=true");
              _context5.next = 4;
              return HttpHelper.post(url, content);

            case 4:
              res = _context5.sent;

              if (!(res.status === 200)) {
                _context5.next = 7;
                break;
              }

              return _context5.abrupt("return", res.response);

            case 7:
              return _context5.abrupt("return", null);

            case 8:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }))();
  },
  getMe: function getMe() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
      var url, res;
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              url = "".concat(StudioAPI.origin()).concat(API_ME);
              _context6.next = 3;
              return HttpHelper.get(url);

            case 3:
              res = _context6.sent;

              if (!(res.status === 200)) {
                _context6.next = 6;
                break;
              }

              return _context6.abrupt("return", res.response);

            case 6:
              return _context6.abrupt("return", null);

            case 7:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }))();
  }
};

/*
 * Copyright (C) 2007-2021 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
var contentTypeSub = new Subject('');
var findReplaceSub = new Subject({
  findText: '',
  replaceText: '',
  action: ''
});

function ContentTypeSelect() {
  var _React$useState = e__default.useState(''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      contentType = _React$useState2[0],
      setContentType = _React$useState2[1];

  var _React$useState3 = e__default.useState([]),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      contentTypes = _React$useState4[0],
      setContentTypes = _React$useState4[1];

  e__default.useEffect(function () {
    _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var data;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return StudioAPI.getContentTypes();

            case 2:
              data = _context.sent;
              setContentTypes(data);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }, []);
  e__default.useEffect(function () {
    _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (contentType) {
                contentTypeSub.next(contentType);
              }

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }, [contentType]);

  var handleChange = function handleChange(event) {
    setContentType(event.target.value);
  };

  return /*#__PURE__*/e__default.createElement(FormControl$1, {
    fullWidth: true
  }, /*#__PURE__*/e__default.createElement(InputLabel$1, {
    id: "select-content-type"
  }, "Content Type"), /*#__PURE__*/e__default.createElement(Select$1, {
    labelId: "select-content-type",
    id: "select-content-type-id",
    value: contentType,
    onChange: handleChange,
    label: "Content Type"
  }, /*#__PURE__*/e__default.createElement(MenuItem$1, {
    value: ""
  }, /*#__PURE__*/e__default.createElement("em", null, "None")), contentTypes.map(function (ct) {
    return /*#__PURE__*/e__default.createElement(MenuItem$1, {
      key: ct.name,
      value: ct.name
    }, ct.label);
  })));
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

function toVal(mix) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k=0; k < mix.length; k++) {
				if (mix[k]) {
					if (y = toVal(mix[k])) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += ' ');
					str += k;
				}
			}
		}
	}

	return str;
}

function l$2 () {
	var i=0, tmp, x, str='';
	while (i < arguments.length) {
		if (tmp = arguments[i++]) {
			if (x = toVal(tmp)) {
				str && (str += ' ');
				str += x;
			}
		}
	}
	return str;
}

var clsx_m = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': l$2
});

var shims = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findInArray = findInArray;
exports.isFunction = isFunction;
exports.isNum = isNum;
exports.int = int;
exports.dontSetMe = dontSetMe;

// @credits https://gist.github.com/rogozhnikoff/a43cfed27c41e4e68cdc
function findInArray(array
/*: Array<any> | TouchList*/
, callback
/*: Function*/
)
/*: any*/
{
  for (var i = 0, length = array.length; i < length; i++) {
    if (callback.apply(callback, [array[i], i, array])) return array[i];
  }
}

function isFunction(func
/*: any*/
)
/*: boolean %checks*/
{
  // $FlowIgnore[method-unbinding]
  return typeof func === 'function' || Object.prototype.toString.call(func) === '[object Function]';
}

function isNum(num
/*: any*/
)
/*: boolean %checks*/
{
  return typeof num === 'number' && !isNaN(num);
}

function int(a
/*: string*/
)
/*: number*/
{
  return parseInt(a, 10);
}

function dontSetMe(props
/*: Object*/
, propName
/*: string*/
, componentName
/*: string*/
)
/*: ?Error*/
{
  if (props[propName]) {
    return new Error("Invalid prop ".concat(propName, " passed to ").concat(componentName, " - do not set this, set it on the child."));
  }
}
});

var getPrefix_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPrefix = getPrefix;
exports.browserPrefixToKey = browserPrefixToKey;
exports.browserPrefixToStyle = browserPrefixToStyle;
exports.default = void 0;
var prefixes = ['Moz', 'Webkit', 'O', 'ms'];

function getPrefix()
/*: string*/
{
  var _window$document, _window$document$docu;

  var prop
  /*: string*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'transform';
  // Ensure we're running in an environment where there is actually a global
  // `window` obj
  if (typeof window === 'undefined') return ''; // If we're in a pseudo-browser server-side environment, this access
  // path may not exist, so bail out if it doesn't.

  var style = (_window$document = window.document) === null || _window$document === void 0 ? void 0 : (_window$document$docu = _window$document.documentElement) === null || _window$document$docu === void 0 ? void 0 : _window$document$docu.style;
  if (!style) return '';
  if (prop in style) return '';

  for (var i = 0; i < prefixes.length; i++) {
    if (browserPrefixToKey(prop, prefixes[i]) in style) return prefixes[i];
  }

  return '';
}

function browserPrefixToKey(prop
/*: string*/
, prefix
/*: string*/
)
/*: string*/
{
  return prefix ? "".concat(prefix).concat(kebabToTitleCase(prop)) : prop;
}

function browserPrefixToStyle(prop
/*: string*/
, prefix
/*: string*/
)
/*: string*/
{
  return prefix ? "-".concat(prefix.toLowerCase(), "-").concat(prop) : prop;
}

function kebabToTitleCase(str
/*: string*/
)
/*: string*/
{
  var out = '';
  var shouldCapitalize = true;

  for (var i = 0; i < str.length; i++) {
    if (shouldCapitalize) {
      out += str[i].toUpperCase();
      shouldCapitalize = false;
    } else if (str[i] === '-') {
      shouldCapitalize = true;
    } else {
      out += str[i];
    }
  }

  return out;
} // Default export is the prefix itself, like 'Moz', 'Webkit', etc
// Note that you may have to re-test for certain things; for instance, Chrome 50
// can handle unprefixed `transform`, but not unprefixed `user-select`


var _default = (getPrefix()
/*: string*/
);

exports.default = _default;
});

var domFns = createCommonjsModule(function (module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matchesSelector = matchesSelector;
exports.matchesSelectorAndParentsTo = matchesSelectorAndParentsTo;
exports.addEvent = addEvent;
exports.removeEvent = removeEvent;
exports.outerHeight = outerHeight;
exports.outerWidth = outerWidth;
exports.innerHeight = innerHeight;
exports.innerWidth = innerWidth;
exports.offsetXYFromParent = offsetXYFromParent;
exports.createCSSTransform = createCSSTransform;
exports.createSVGTransform = createSVGTransform;
exports.getTranslation = getTranslation;
exports.getTouch = getTouch;
exports.getTouchIdentifier = getTouchIdentifier;
exports.addUserSelectStyles = addUserSelectStyles;
exports.removeUserSelectStyles = removeUserSelectStyles;
exports.addClassName = addClassName;
exports.removeClassName = removeClassName;



var _getPrefix = _interopRequireWildcard(getPrefix_1);

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var matchesSelectorFunc = '';

function matchesSelector(el
/*: Node*/
, selector
/*: string*/
)
/*: boolean*/
{
  if (!matchesSelectorFunc) {
    matchesSelectorFunc = (0, shims.findInArray)(['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'], function (method) {
      // $FlowIgnore: Doesn't think elements are indexable
      return (0, shims.isFunction)(el[method]);
    });
  } // Might not be found entirely (not an Element?) - in that case, bail
  // $FlowIgnore: Doesn't think elements are indexable


  if (!(0, shims.isFunction)(el[matchesSelectorFunc])) return false; // $FlowIgnore: Doesn't think elements are indexable

  return el[matchesSelectorFunc](selector);
} // Works up the tree to the draggable itself attempting to match selector.


function matchesSelectorAndParentsTo(el
/*: Node*/
, selector
/*: string*/
, baseNode
/*: Node*/
)
/*: boolean*/
{
  var node = el;

  do {
    if (matchesSelector(node, selector)) return true;
    if (node === baseNode) return false;
    node = node.parentNode;
  } while (node);

  return false;
}

function addEvent(el
/*: ?Node*/
, event
/*: string*/
, handler
/*: Function*/
, inputOptions
/*: Object*/
)
/*: void*/
{
  if (!el) return;

  var options = _objectSpread({
    capture: true
  }, inputOptions); // $FlowIgnore[method-unbinding]


  if (el.addEventListener) {
    el.addEventListener(event, handler, options);
  } else if (el.attachEvent) {
    el.attachEvent('on' + event, handler);
  } else {
    // $FlowIgnore: Doesn't think elements are indexable
    el['on' + event] = handler;
  }
}

function removeEvent(el
/*: ?Node*/
, event
/*: string*/
, handler
/*: Function*/
, inputOptions
/*: Object*/
)
/*: void*/
{
  if (!el) return;

  var options = _objectSpread({
    capture: true
  }, inputOptions); // $FlowIgnore[method-unbinding]


  if (el.removeEventListener) {
    el.removeEventListener(event, handler, options);
  } else if (el.detachEvent) {
    el.detachEvent('on' + event, handler);
  } else {
    // $FlowIgnore: Doesn't think elements are indexable
    el['on' + event] = null;
  }
}

function outerHeight(node
/*: HTMLElement*/
)
/*: number*/
{
  // This is deliberately excluding margin for our calculations, since we are using
  // offsetTop which is including margin. See getBoundPosition
  var height = node.clientHeight;
  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  height += (0, shims.int)(computedStyle.borderTopWidth);
  height += (0, shims.int)(computedStyle.borderBottomWidth);
  return height;
}

function outerWidth(node
/*: HTMLElement*/
)
/*: number*/
{
  // This is deliberately excluding margin for our calculations, since we are using
  // offsetLeft which is including margin. See getBoundPosition
  var width = node.clientWidth;
  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  width += (0, shims.int)(computedStyle.borderLeftWidth);
  width += (0, shims.int)(computedStyle.borderRightWidth);
  return width;
}

function innerHeight(node
/*: HTMLElement*/
)
/*: number*/
{
  var height = node.clientHeight;
  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  height -= (0, shims.int)(computedStyle.paddingTop);
  height -= (0, shims.int)(computedStyle.paddingBottom);
  return height;
}

function innerWidth(node
/*: HTMLElement*/
)
/*: number*/
{
  var width = node.clientWidth;
  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  width -= (0, shims.int)(computedStyle.paddingLeft);
  width -= (0, shims.int)(computedStyle.paddingRight);
  return width;
}
/*:: interface EventWithOffset {
  clientX: number, clientY: number
}*/


// Get from offsetParent
function offsetXYFromParent(evt
/*: EventWithOffset*/
, offsetParent
/*: HTMLElement*/
, scale
/*: number*/
)
/*: ControlPosition*/
{
  var isBody = offsetParent === offsetParent.ownerDocument.body;
  var offsetParentRect = isBody ? {
    left: 0,
    top: 0
  } : offsetParent.getBoundingClientRect();
  var x = (evt.clientX + offsetParent.scrollLeft - offsetParentRect.left) / scale;
  var y = (evt.clientY + offsetParent.scrollTop - offsetParentRect.top) / scale;
  return {
    x: x,
    y: y
  };
}

function createCSSTransform(controlPos
/*: ControlPosition*/
, positionOffset
/*: PositionOffsetControlPosition*/
)
/*: Object*/
{
  var translation = getTranslation(controlPos, positionOffset, 'px');
  return _defineProperty({}, (0, _getPrefix.browserPrefixToKey)('transform', _getPrefix.default), translation);
}

function createSVGTransform(controlPos
/*: ControlPosition*/
, positionOffset
/*: PositionOffsetControlPosition*/
)
/*: string*/
{
  var translation = getTranslation(controlPos, positionOffset, '');
  return translation;
}

function getTranslation(_ref2, positionOffset
/*: PositionOffsetControlPosition*/
, unitSuffix
/*: string*/
)
/*: string*/
{
  var x = _ref2.x,
      y = _ref2.y;
  var translation = "translate(".concat(x).concat(unitSuffix, ",").concat(y).concat(unitSuffix, ")");

  if (positionOffset) {
    var defaultX = "".concat(typeof positionOffset.x === 'string' ? positionOffset.x : positionOffset.x + unitSuffix);
    var defaultY = "".concat(typeof positionOffset.y === 'string' ? positionOffset.y : positionOffset.y + unitSuffix);
    translation = "translate(".concat(defaultX, ", ").concat(defaultY, ")") + translation;
  }

  return translation;
}

function getTouch(e
/*: MouseTouchEvent*/
, identifier
/*: number*/
)
/*: ?{clientX: number, clientY: number}*/
{
  return e.targetTouches && (0, shims.findInArray)(e.targetTouches, function (t) {
    return identifier === t.identifier;
  }) || e.changedTouches && (0, shims.findInArray)(e.changedTouches, function (t) {
    return identifier === t.identifier;
  });
}

function getTouchIdentifier(e
/*: MouseTouchEvent*/
)
/*: ?number*/
{
  if (e.targetTouches && e.targetTouches[0]) return e.targetTouches[0].identifier;
  if (e.changedTouches && e.changedTouches[0]) return e.changedTouches[0].identifier;
} // User-select Hacks:
//
// Useful for preventing blue highlights all over everything when dragging.
// Note we're passing `document` b/c we could be iframed


function addUserSelectStyles(doc
/*: ?Document*/
) {
  if (!doc) return;
  var styleEl = doc.getElementById('react-draggable-style-el');

  if (!styleEl) {
    styleEl = doc.createElement('style');
    styleEl.type = 'text/css';
    styleEl.id = 'react-draggable-style-el';
    styleEl.innerHTML = '.react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n';
    styleEl.innerHTML += '.react-draggable-transparent-selection *::selection {all: inherit;}\n';
    doc.getElementsByTagName('head')[0].appendChild(styleEl);
  }

  if (doc.body) addClassName(doc.body, 'react-draggable-transparent-selection');
}

function removeUserSelectStyles(doc
/*: ?Document*/
) {
  if (!doc) return;

  try {
    if (doc.body) removeClassName(doc.body, 'react-draggable-transparent-selection'); // $FlowIgnore: IE

    if (doc.selection) {
      // $FlowIgnore: IE
      doc.selection.empty();
    } else {
      // Remove selection caused by scroll, unless it's a focused input
      // (we use doc.defaultView in case we're in an iframe)
      var selection = (doc.defaultView || window).getSelection();

      if (selection && selection.type !== 'Caret') {
        selection.removeAllRanges();
      }
    }
  } catch (e) {// probably IE
  }
}

function addClassName(el
/*: HTMLElement*/
, className
/*: string*/
) {
  if (el.classList) {
    el.classList.add(className);
  } else {
    if (!el.className.match(new RegExp("(?:^|\\s)".concat(className, "(?!\\S)")))) {
      el.className += " ".concat(className);
    }
  }
}

function removeClassName(el
/*: HTMLElement*/
, className
/*: string*/
) {
  if (el.classList) {
    el.classList.remove(className);
  } else {
    el.className = el.className.replace(new RegExp("(?:^|\\s)".concat(className, "(?!\\S)"), 'g'), '');
  }
}
});

var positionFns = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBoundPosition = getBoundPosition;
exports.snapToGrid = snapToGrid;
exports.canDragX = canDragX;
exports.canDragY = canDragY;
exports.getControlPosition = getControlPosition;
exports.createCoreData = createCoreData;
exports.createDraggableData = createDraggableData;





function getBoundPosition(draggable
/*: Draggable*/
, x
/*: number*/
, y
/*: number*/
)
/*: [number, number]*/
{
  // If no bounds, short-circuit and move on
  if (!draggable.props.bounds) return [x, y]; // Clone new bounds

  var bounds = draggable.props.bounds;
  bounds = typeof bounds === 'string' ? bounds : cloneBounds(bounds);
  var node = findDOMNode(draggable);

  if (typeof bounds === 'string') {
    var ownerDocument = node.ownerDocument;
    var ownerWindow = ownerDocument.defaultView;
    var boundNode;

    if (bounds === 'parent') {
      boundNode = node.parentNode;
    } else {
      boundNode = ownerDocument.querySelector(bounds);
    }

    if (!(boundNode instanceof ownerWindow.HTMLElement)) {
      throw new Error('Bounds selector "' + bounds + '" could not find an element.');
    }

    var boundNodeEl
    /*: HTMLElement*/
    = boundNode; // for Flow, can't seem to refine correctly

    var nodeStyle = ownerWindow.getComputedStyle(node);
    var boundNodeStyle = ownerWindow.getComputedStyle(boundNodeEl); // Compute bounds. This is a pain with padding and offsets but this gets it exactly right.

    bounds = {
      left: -node.offsetLeft + (0, shims.int)(boundNodeStyle.paddingLeft) + (0, shims.int)(nodeStyle.marginLeft),
      top: -node.offsetTop + (0, shims.int)(boundNodeStyle.paddingTop) + (0, shims.int)(nodeStyle.marginTop),
      right: (0, domFns.innerWidth)(boundNodeEl) - (0, domFns.outerWidth)(node) - node.offsetLeft + (0, shims.int)(boundNodeStyle.paddingRight) - (0, shims.int)(nodeStyle.marginRight),
      bottom: (0, domFns.innerHeight)(boundNodeEl) - (0, domFns.outerHeight)(node) - node.offsetTop + (0, shims.int)(boundNodeStyle.paddingBottom) - (0, shims.int)(nodeStyle.marginBottom)
    };
  } // Keep x and y below right and bottom limits...


  if ((0, shims.isNum)(bounds.right)) x = Math.min(x, bounds.right);
  if ((0, shims.isNum)(bounds.bottom)) y = Math.min(y, bounds.bottom); // But above left and top limits.

  if ((0, shims.isNum)(bounds.left)) x = Math.max(x, bounds.left);
  if ((0, shims.isNum)(bounds.top)) y = Math.max(y, bounds.top);
  return [x, y];
}

function snapToGrid(grid
/*: [number, number]*/
, pendingX
/*: number*/
, pendingY
/*: number*/
)
/*: [number, number]*/
{
  var x = Math.round(pendingX / grid[0]) * grid[0];
  var y = Math.round(pendingY / grid[1]) * grid[1];
  return [x, y];
}

function canDragX(draggable
/*: Draggable*/
)
/*: boolean*/
{
  return draggable.props.axis === 'both' || draggable.props.axis === 'x';
}

function canDragY(draggable
/*: Draggable*/
)
/*: boolean*/
{
  return draggable.props.axis === 'both' || draggable.props.axis === 'y';
} // Get {x, y} positions from event.


function getControlPosition(e
/*: MouseTouchEvent*/
, touchIdentifier
/*: ?number*/
, draggableCore
/*: DraggableCore*/
)
/*: ?ControlPosition*/
{
  var touchObj = typeof touchIdentifier === 'number' ? (0, domFns.getTouch)(e, touchIdentifier) : null;
  if (typeof touchIdentifier === 'number' && !touchObj) return null; // not the right touch

  var node = findDOMNode(draggableCore); // User can provide an offsetParent if desired.

  var offsetParent = draggableCore.props.offsetParent || node.offsetParent || node.ownerDocument.body;
  return (0, domFns.offsetXYFromParent)(touchObj || e, offsetParent, draggableCore.props.scale);
} // Create an data object exposed by <DraggableCore>'s events


function createCoreData(draggable
/*: DraggableCore*/
, x
/*: number*/
, y
/*: number*/
)
/*: DraggableData*/
{
  var state = draggable.state;
  var isStart = !(0, shims.isNum)(state.lastX);
  var node = findDOMNode(draggable);

  if (isStart) {
    // If this is our first move, use the x and y as last coords.
    return {
      node: node,
      deltaX: 0,
      deltaY: 0,
      lastX: x,
      lastY: y,
      x: x,
      y: y
    };
  } else {
    // Otherwise calculate proper values.
    return {
      node: node,
      deltaX: x - state.lastX,
      deltaY: y - state.lastY,
      lastX: state.lastX,
      lastY: state.lastY,
      x: x,
      y: y
    };
  }
} // Create an data exposed by <Draggable>'s events


function createDraggableData(draggable
/*: Draggable*/
, coreData
/*: DraggableData*/
)
/*: DraggableData*/
{
  var scale = draggable.props.scale;
  return {
    node: coreData.node,
    x: draggable.state.x + coreData.deltaX / scale,
    y: draggable.state.y + coreData.deltaY / scale,
    deltaX: coreData.deltaX / scale,
    deltaY: coreData.deltaY / scale,
    lastX: draggable.state.x,
    lastY: draggable.state.y
  };
} // A lot faster than stringify/parse


function cloneBounds(bounds
/*: Bounds*/
)
/*: Bounds*/
{
  return {
    left: bounds.left,
    top: bounds.top,
    right: bounds.right,
    bottom: bounds.bottom
  };
}

function findDOMNode(draggable
/*: Draggable | DraggableCore*/
)
/*: HTMLElement*/
{
  var node = draggable.findDOMNode();

  if (!node) {
    throw new Error('<DraggableCore>: Unmounted during event!');
  } // $FlowIgnore we can't assert on HTMLElement due to tests... FIXME


  return node;
}
});

var log_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = log;

/*eslint no-console:0*/
function log() {
}
});

var DraggableCore_1$1 = createCommonjsModule(function (module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(e__default);

var _propTypes = _interopRequireDefault(propTypes);

var _reactDom = _interopRequireDefault(ReactDOM);







var _log = _interopRequireDefault(log_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Simple abstraction for dragging events names.
var eventsFor = {
  touch: {
    start: 'touchstart',
    move: 'touchmove',
    stop: 'touchend'
  },
  mouse: {
    start: 'mousedown',
    move: 'mousemove',
    stop: 'mouseup'
  }
}; // Default to mouse events.

var dragEventFor = eventsFor.mouse;
/*:: type DraggableCoreState = {
  dragging: boolean,
  lastX: number,
  lastY: number,
  touchIdentifier: ?number
};*/

/*:: export type DraggableData = {
  node: HTMLElement,
  x: number, y: number,
  deltaX: number, deltaY: number,
  lastX: number, lastY: number,
};*/

/*:: export type DraggableEventHandler = (e: MouseEvent, data: DraggableData) => void | false;*/

/*:: export type ControlPosition = {x: number, y: number};*/

/*:: export type PositionOffsetControlPosition = {x: number|string, y: number|string};*/

/*:: export type DraggableCoreDefaultProps = {
  allowAnyClick: boolean,
  disabled: boolean,
  enableUserSelectHack: boolean,
  onStart: DraggableEventHandler,
  onDrag: DraggableEventHandler,
  onStop: DraggableEventHandler,
  onMouseDown: (e: MouseEvent) => void,
  scale: number,
};*/

/*:: export type DraggableCoreProps = {
  ...DraggableCoreDefaultProps,
  cancel: string,
  children: ReactElement<any>,
  offsetParent: HTMLElement,
  grid: [number, number],
  handle: string,
  nodeRef?: ?React.ElementRef<any>,
};*/

//
// Define <DraggableCore>.
//
// <DraggableCore> is for advanced usage of <Draggable>. It maintains minimal internal state so it can
// work well with libraries that require more control over the element.
//
var DraggableCore = /*#__PURE__*/function (_React$Component) {
  _inherits(DraggableCore, _React$Component);

  var _super = _createSuper(DraggableCore);

  function DraggableCore() {
    var _this;

    _classCallCheck(this, DraggableCore);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      dragging: false,
      // Used while dragging to determine deltas.
      lastX: NaN,
      lastY: NaN,
      touchIdentifier: null
    });

    _defineProperty(_assertThisInitialized(_this), "mounted", false);

    _defineProperty(_assertThisInitialized(_this), "handleDragStart", function (e) {
      // Make it possible to attach event handlers on top of this one.
      _this.props.onMouseDown(e); // Only accept left-clicks.


      if (!_this.props.allowAnyClick && typeof e.button === 'number' && e.button !== 0) return false; // Get nodes. Be sure to grab relative document (could be iframed)

      var thisNode = _this.findDOMNode();

      if (!thisNode || !thisNode.ownerDocument || !thisNode.ownerDocument.body) {
        throw new Error('<DraggableCore> not mounted on DragStart!');
      }

      var ownerDocument = thisNode.ownerDocument; // Short circuit if handle or cancel prop was provided and selector doesn't match.

      if (_this.props.disabled || !(e.target instanceof ownerDocument.defaultView.Node) || _this.props.handle && !(0, domFns.matchesSelectorAndParentsTo)(e.target, _this.props.handle, thisNode) || _this.props.cancel && (0, domFns.matchesSelectorAndParentsTo)(e.target, _this.props.cancel, thisNode)) {
        return;
      } // Prevent scrolling on mobile devices, like ipad/iphone.
      // Important that this is after handle/cancel.


      if (e.type === 'touchstart') e.preventDefault(); // Set touch identifier in component state if this is a touch event. This allows us to
      // distinguish between individual touches on multitouch screens by identifying which
      // touchpoint was set to this element.

      var touchIdentifier = (0, domFns.getTouchIdentifier)(e);

      _this.setState({
        touchIdentifier: touchIdentifier
      }); // Get the current drag point from the event. This is used as the offset.


      var position = (0, positionFns.getControlPosition)(e, touchIdentifier, _assertThisInitialized(_this));
      if (position == null) return; // not possible but satisfies flow

      var x = position.x,
          y = position.y; // Create an event object with all the data parents need to make a decision here.

      var coreEvent = (0, positionFns.createCoreData)(_assertThisInitialized(_this), x, y);
      (0, _log.default)('DraggableCore: handleDragStart: %j', coreEvent); // Call event handler. If it returns explicit false, cancel.

      (0, _log.default)('calling', _this.props.onStart);

      var shouldUpdate = _this.props.onStart(e, coreEvent);

      if (shouldUpdate === false || _this.mounted === false) return; // Add a style to the body to disable user-select. This prevents text from
      // being selected all over the page.

      if (_this.props.enableUserSelectHack) (0, domFns.addUserSelectStyles)(ownerDocument); // Initiate dragging. Set the current x and y as offsets
      // so we know how much we've moved during the drag. This allows us
      // to drag elements around even if they have been moved, without issue.

      _this.setState({
        dragging: true,
        lastX: x,
        lastY: y
      }); // Add events to the document directly so we catch when the user's mouse/touch moves outside of
      // this element. We use different events depending on whether or not we have detected that this
      // is a touch-capable device.


      (0, domFns.addEvent)(ownerDocument, dragEventFor.move, _this.handleDrag);
      (0, domFns.addEvent)(ownerDocument, dragEventFor.stop, _this.handleDragStop);
    });

    _defineProperty(_assertThisInitialized(_this), "handleDrag", function (e) {
      // Get the current drag point from the event. This is used as the offset.
      var position = (0, positionFns.getControlPosition)(e, _this.state.touchIdentifier, _assertThisInitialized(_this));
      if (position == null) return;
      var x = position.x,
          y = position.y; // Snap to grid if prop has been provided

      if (Array.isArray(_this.props.grid)) {
        var deltaX = x - _this.state.lastX,
            deltaY = y - _this.state.lastY;

        var _snapToGrid = (0, positionFns.snapToGrid)(_this.props.grid, deltaX, deltaY);

        var _snapToGrid2 = _slicedToArray(_snapToGrid, 2);

        deltaX = _snapToGrid2[0];
        deltaY = _snapToGrid2[1];
        if (!deltaX && !deltaY) return; // skip useless drag

        x = _this.state.lastX + deltaX, y = _this.state.lastY + deltaY;
      }

      var coreEvent = (0, positionFns.createCoreData)(_assertThisInitialized(_this), x, y);
      (0, _log.default)('DraggableCore: handleDrag: %j', coreEvent); // Call event handler. If it returns explicit false, trigger end.

      var shouldUpdate = _this.props.onDrag(e, coreEvent);

      if (shouldUpdate === false || _this.mounted === false) {
        try {
          // $FlowIgnore
          _this.handleDragStop(new MouseEvent('mouseup'));
        } catch (err) {
          // Old browsers
          var event = ((document.createEvent('MouseEvents')
          /*: any*/
          )
          /*: MouseTouchEvent*/
          ); // I see why this insanity was deprecated
          // $FlowIgnore

          event.initMouseEvent('mouseup', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

          _this.handleDragStop(event);
        }

        return;
      }

      _this.setState({
        lastX: x,
        lastY: y
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDragStop", function (e) {
      if (!_this.state.dragging) return;
      var position = (0, positionFns.getControlPosition)(e, _this.state.touchIdentifier, _assertThisInitialized(_this));
      if (position == null) return;
      var x = position.x,
          y = position.y;
      var coreEvent = (0, positionFns.createCoreData)(_assertThisInitialized(_this), x, y); // Call event handler

      var shouldContinue = _this.props.onStop(e, coreEvent);

      if (shouldContinue === false || _this.mounted === false) return false;

      var thisNode = _this.findDOMNode();

      if (thisNode) {
        // Remove user-select hack
        if (_this.props.enableUserSelectHack) (0, domFns.removeUserSelectStyles)(thisNode.ownerDocument);
      }

      (0, _log.default)('DraggableCore: handleDragStop: %j', coreEvent); // Reset the el.

      _this.setState({
        dragging: false,
        lastX: NaN,
        lastY: NaN
      });

      if (thisNode) {
        // Remove event handlers
        (0, _log.default)('DraggableCore: Removing handlers');
        (0, domFns.removeEvent)(thisNode.ownerDocument, dragEventFor.move, _this.handleDrag);
        (0, domFns.removeEvent)(thisNode.ownerDocument, dragEventFor.stop, _this.handleDragStop);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseDown", function (e) {
      dragEventFor = eventsFor.mouse; // on touchscreen laptops we could switch back to mouse

      return _this.handleDragStart(e);
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseUp", function (e) {
      dragEventFor = eventsFor.mouse;
      return _this.handleDragStop(e);
    });

    _defineProperty(_assertThisInitialized(_this), "onTouchStart", function (e) {
      // We're on a touch device now, so change the event handlers
      dragEventFor = eventsFor.touch;
      return _this.handleDragStart(e);
    });

    _defineProperty(_assertThisInitialized(_this), "onTouchEnd", function (e) {
      // We're on a touch device now, so change the event handlers
      dragEventFor = eventsFor.touch;
      return _this.handleDragStop(e);
    });

    return _this;
  }

  _createClass(DraggableCore, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mounted = true; // Touch handlers must be added with {passive: false} to be cancelable.
      // https://developers.google.com/web/updates/2017/01/scrolling-intervention

      var thisNode = this.findDOMNode();

      if (thisNode) {
        (0, domFns.addEvent)(thisNode, eventsFor.touch.start, this.onTouchStart, {
          passive: false
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mounted = false; // Remove any leftover event handlers. Remove both touch and mouse handlers in case
      // some browser quirk caused a touch event to fire during a mouse move, or vice versa.

      var thisNode = this.findDOMNode();

      if (thisNode) {
        var ownerDocument = thisNode.ownerDocument;
        (0, domFns.removeEvent)(ownerDocument, eventsFor.mouse.move, this.handleDrag);
        (0, domFns.removeEvent)(ownerDocument, eventsFor.touch.move, this.handleDrag);
        (0, domFns.removeEvent)(ownerDocument, eventsFor.mouse.stop, this.handleDragStop);
        (0, domFns.removeEvent)(ownerDocument, eventsFor.touch.stop, this.handleDragStop);
        (0, domFns.removeEvent)(thisNode, eventsFor.touch.start, this.onTouchStart, {
          passive: false
        });
        if (this.props.enableUserSelectHack) (0, domFns.removeUserSelectStyles)(ownerDocument);
      }
    } // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
    // the underlying DOM node ourselves. See the README for more information.

  }, {
    key: "findDOMNode",
    value: function findDOMNode()
    /*: ?HTMLElement*/
    {
      var _this$props$nodeRef$c, _this$props, _this$props$nodeRef;

      return (_this$props$nodeRef$c = (_this$props = this.props) === null || _this$props === void 0 ? void 0 : (_this$props$nodeRef = _this$props.nodeRef) === null || _this$props$nodeRef === void 0 ? void 0 : _this$props$nodeRef.current) !== null && _this$props$nodeRef$c !== void 0 ? _this$props$nodeRef$c : _reactDom.default.findDOMNode(this);
    }
  }, {
    key: "render",
    value: function render()
    /*: React.Element<any>*/
    {
      // Reuse the child provided
      // This makes it flexible to use whatever element is wanted (div, ul, etc)
      return /*#__PURE__*/React.cloneElement(React.Children.only(this.props.children), {
        // Note: mouseMove handler is attached to document so it will still function
        // when the user drags quickly and leaves the bounds of the element.
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
        // onTouchStart is added on `componentDidMount` so they can be added with
        // {passive: false}, which allows it to cancel. See
        // https://developers.google.com/web/updates/2017/01/scrolling-intervention
        onTouchEnd: this.onTouchEnd
      });
    }
  }]);

  return DraggableCore;
}(React.Component);

exports.default = DraggableCore;

_defineProperty(DraggableCore, "displayName", 'DraggableCore');

_defineProperty(DraggableCore, "propTypes", {
  /**
   * `allowAnyClick` allows dragging using any mouse button.
   * By default, we only accept the left button.
   *
   * Defaults to `false`.
   */
  allowAnyClick: _propTypes.default.bool,

  /**
   * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
   * with the exception of `onMouseDown`, will not fire.
   */
  disabled: _propTypes.default.bool,

  /**
   * By default, we add 'user-select:none' attributes to the document body
   * to prevent ugly text selection during drag. If this is causing problems
   * for your app, set this to `false`.
   */
  enableUserSelectHack: _propTypes.default.bool,

  /**
   * `offsetParent`, if set, uses the passed DOM node to compute drag offsets
   * instead of using the parent node.
   */
  offsetParent: function offsetParent(props
  /*: DraggableCoreProps*/
  , propName
  /*: $Keys<DraggableCoreProps>*/
  ) {
    if (props[propName] && props[propName].nodeType !== 1) {
      throw new Error('Draggable\'s offsetParent must be a DOM Node.');
    }
  },

  /**
   * `grid` specifies the x and y that dragging should snap to.
   */
  grid: _propTypes.default.arrayOf(_propTypes.default.number),

  /**
   * `handle` specifies a selector to be used as the handle that initiates drag.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *         return (
   *            <Draggable handle=".handle">
   *              <div>
   *                  <div className="handle">Click me to drag</div>
   *                  <div>This is some other content</div>
   *              </div>
   *           </Draggable>
   *         );
   *       }
   *   });
   * ```
   */
  handle: _propTypes.default.string,

  /**
   * `cancel` specifies a selector to be used to prevent drag initialization.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *           return(
   *               <Draggable cancel=".cancel">
   *                   <div>
   *                     <div className="cancel">You can't drag from here</div>
   *                     <div>Dragging here works fine</div>
   *                   </div>
   *               </Draggable>
   *           );
   *       }
   *   });
   * ```
   */
  cancel: _propTypes.default.string,

  /* If running in React Strict mode, ReactDOM.findDOMNode() is deprecated.
   * Unfortunately, in order for <Draggable> to work properly, we need raw access
   * to the underlying DOM node. If you want to avoid the warning, pass a `nodeRef`
   * as in this example:
   *
   * function MyComponent() {
   *   const nodeRef = React.useRef(null);
   *   return (
   *     <Draggable nodeRef={nodeRef}>
   *       <div ref={nodeRef}>Example Target</div>
   *     </Draggable>
   *   );
   * }
   *
   * This can be used for arbitrarily nested components, so long as the ref ends up
   * pointing to the actual child DOM node and not a custom component.
   */
  nodeRef: _propTypes.default.object,

  /**
   * Called when dragging starts.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onStart: _propTypes.default.func,

  /**
   * Called while dragging.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onDrag: _propTypes.default.func,

  /**
   * Called when dragging stops.
   * If this function returns the boolean false, the drag will remain active.
   */
  onStop: _propTypes.default.func,

  /**
   * A workaround option which can be passed if onMouseDown needs to be accessed,
   * since it'll always be blocked (as there is internal use of onMouseDown)
   */
  onMouseDown: _propTypes.default.func,

  /**
   * `scale`, if set, applies scaling while dragging an element
   */
  scale: _propTypes.default.number,

  /**
   * These properties should be defined on the child, not here.
   */
  className: shims.dontSetMe,
  style: shims.dontSetMe,
  transform: shims.dontSetMe
});

_defineProperty(DraggableCore, "defaultProps", {
  allowAnyClick: false,
  // by default only accept left click
  disabled: false,
  enableUserSelectHack: true,
  onStart: function onStart() {},
  onDrag: function onDrag() {},
  onStop: function onStop() {},
  onMouseDown: function onMouseDown() {},
  scale: 1
});
});

var require$$3 = /*@__PURE__*/getAugmentedNamespace(clsx_m);

var Draggable_1 = createCommonjsModule(function (module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "DraggableCore", {
  enumerable: true,
  get: function get() {
    return _DraggableCore.default;
  }
});
exports.default = void 0;

var React = _interopRequireWildcard(e__default);

var _propTypes = _interopRequireDefault(propTypes);

var _reactDom = _interopRequireDefault(ReactDOM);

var _clsx2 = _interopRequireDefault(require$$3);







var _DraggableCore = _interopRequireDefault(DraggableCore_1$1);

var _log = _interopRequireDefault(log_1);

var _excluded = ["axis", "bounds", "children", "defaultPosition", "defaultClassName", "defaultClassNameDragging", "defaultClassNameDragged", "position", "positionOffset", "scale"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
// Define <Draggable>
//
var Draggable = /*#__PURE__*/function (_React$Component) {
  _inherits(Draggable, _React$Component);

  var _super = _createSuper(Draggable);

  function Draggable(props
  /*: DraggableProps*/
  ) {
    var _this;

    _classCallCheck(this, Draggable);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onDragStart", function (e, coreData) {
      (0, _log.default)('Draggable: onDragStart: %j', coreData); // Short-circuit if user's callback killed it.

      var shouldStart = _this.props.onStart(e, (0, positionFns.createDraggableData)(_assertThisInitialized(_this), coreData)); // Kills start event on core as well, so move handlers are never bound.


      if (shouldStart === false) return false;

      _this.setState({
        dragging: true,
        dragged: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onDrag", function (e, coreData) {
      if (!_this.state.dragging) return false;
      (0, _log.default)('Draggable: onDrag: %j', coreData);
      var uiData = (0, positionFns.createDraggableData)(_assertThisInitialized(_this), coreData);
      var newState
      /*: $Shape<DraggableState>*/
      = {
        x: uiData.x,
        y: uiData.y
      }; // Keep within bounds.

      if (_this.props.bounds) {
        // Save original x and y.
        var x = newState.x,
            y = newState.y; // Add slack to the values used to calculate bound position. This will ensure that if
        // we start removing slack, the element won't react to it right away until it's been
        // completely removed.

        newState.x += _this.state.slackX;
        newState.y += _this.state.slackY; // Get bound position. This will ceil/floor the x and y within the boundaries.

        var _getBoundPosition = (0, positionFns.getBoundPosition)(_assertThisInitialized(_this), newState.x, newState.y),
            _getBoundPosition2 = _slicedToArray(_getBoundPosition, 2),
            newStateX = _getBoundPosition2[0],
            newStateY = _getBoundPosition2[1];

        newState.x = newStateX;
        newState.y = newStateY; // Recalculate slack by noting how much was shaved by the boundPosition handler.

        newState.slackX = _this.state.slackX + (x - newState.x);
        newState.slackY = _this.state.slackY + (y - newState.y); // Update the event we fire to reflect what really happened after bounds took effect.

        uiData.x = newState.x;
        uiData.y = newState.y;
        uiData.deltaX = newState.x - _this.state.x;
        uiData.deltaY = newState.y - _this.state.y;
      } // Short-circuit if user's callback killed it.


      var shouldUpdate = _this.props.onDrag(e, uiData);

      if (shouldUpdate === false) return false;

      _this.setState(newState);
    });

    _defineProperty(_assertThisInitialized(_this), "onDragStop", function (e, coreData) {
      if (!_this.state.dragging) return false; // Short-circuit if user's callback killed it.

      var shouldContinue = _this.props.onStop(e, (0, positionFns.createDraggableData)(_assertThisInitialized(_this), coreData));

      if (shouldContinue === false) return false;
      (0, _log.default)('Draggable: onDragStop: %j', coreData);
      var newState
      /*: $Shape<DraggableState>*/
      = {
        dragging: false,
        slackX: 0,
        slackY: 0
      }; // If this is a controlled component, the result of this operation will be to
      // revert back to the old position. We expect a handler on `onDragStop`, at the least.

      var controlled = Boolean(_this.props.position);

      if (controlled) {
        var _this$props$position = _this.props.position,
            x = _this$props$position.x,
            y = _this$props$position.y;
        newState.x = x;
        newState.y = y;
      }

      _this.setState(newState);
    });

    _this.state = {
      // Whether or not we are currently dragging.
      dragging: false,
      // Whether or not we have been dragged before.
      dragged: false,
      // Current transform x and y.
      x: props.position ? props.position.x : props.defaultPosition.x,
      y: props.position ? props.position.y : props.defaultPosition.y,
      prevPropsPosition: _objectSpread({}, props.position),
      // Used for compensating for out-of-bounds drags
      slackX: 0,
      slackY: 0,
      // Can only determine if SVG after mounting
      isElementSVG: false
    };

    if (props.position && !(props.onDrag || props.onStop)) {
      // eslint-disable-next-line no-console
      console.warn('A `position` was applied to this <Draggable>, without drag handlers. This will make this ' + 'component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the ' + '`position` of this element.');
    }

    return _this;
  }

  _createClass(Draggable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Check to see if the element passed is an instanceof SVGElement
      if (typeof window.SVGElement !== 'undefined' && this.findDOMNode() instanceof window.SVGElement) {
        this.setState({
          isElementSVG: true
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.setState({
        dragging: false
      }); // prevents invariant if unmounted while dragging
    } // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
    // the underlying DOM node ourselves. See the README for more information.

  }, {
    key: "findDOMNode",
    value: function findDOMNode()
    /*: ?HTMLElement*/
    {
      var _this$props$nodeRef$c, _this$props, _this$props$nodeRef;

      return (_this$props$nodeRef$c = (_this$props = this.props) === null || _this$props === void 0 ? void 0 : (_this$props$nodeRef = _this$props.nodeRef) === null || _this$props$nodeRef === void 0 ? void 0 : _this$props$nodeRef.current) !== null && _this$props$nodeRef$c !== void 0 ? _this$props$nodeRef$c : _reactDom.default.findDOMNode(this);
    }
  }, {
    key: "render",
    value: function render()
    /*: ReactElement<any>*/
    {
      var _clsx;

      var _this$props2 = this.props;
          _this$props2.axis;
          _this$props2.bounds;
          var children = _this$props2.children,
          defaultPosition = _this$props2.defaultPosition,
          defaultClassName = _this$props2.defaultClassName,
          defaultClassNameDragging = _this$props2.defaultClassNameDragging,
          defaultClassNameDragged = _this$props2.defaultClassNameDragged,
          position = _this$props2.position,
          positionOffset = _this$props2.positionOffset;
          _this$props2.scale;
          var draggableCoreProps = _objectWithoutProperties(_this$props2, _excluded);

      var style = {};
      var svgTransform = null; // If this is controlled, we don't want to move it - unless it's dragging.

      var controlled = Boolean(position);
      var draggable = !controlled || this.state.dragging;
      var validPosition = position || defaultPosition;
      var transformOpts = {
        // Set left if horizontal drag is enabled
        x: (0, positionFns.canDragX)(this) && draggable ? this.state.x : validPosition.x,
        // Set top if vertical drag is enabled
        y: (0, positionFns.canDragY)(this) && draggable ? this.state.y : validPosition.y
      }; // If this element was SVG, we use the `transform` attribute.

      if (this.state.isElementSVG) {
        svgTransform = (0, domFns.createSVGTransform)(transformOpts, positionOffset);
      } else {
        // Add a CSS transform to move the element around. This allows us to move the element around
        // without worrying about whether or not it is relatively or absolutely positioned.
        // If the item you are dragging already has a transform set, wrap it in a <span> so <Draggable>
        // has a clean slate.
        style = (0, domFns.createCSSTransform)(transformOpts, positionOffset);
      } // Mark with class while dragging


      var className = (0, _clsx2.default)(children.props.className || '', defaultClassName, (_clsx = {}, _defineProperty(_clsx, defaultClassNameDragging, this.state.dragging), _defineProperty(_clsx, defaultClassNameDragged, this.state.dragged), _clsx)); // Reuse the child provided
      // This makes it flexible to use whatever element is wanted (div, ul, etc)

      return /*#__PURE__*/React.createElement(_DraggableCore.default, _extends({}, draggableCoreProps, {
        onStart: this.onDragStart,
        onDrag: this.onDrag,
        onStop: this.onDragStop
      }), /*#__PURE__*/React.cloneElement(React.Children.only(children), {
        className: className,
        style: _objectSpread(_objectSpread({}, children.props.style), style),
        transform: svgTransform
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: // React 16.3+
    // Arity (props, state)
    function getDerivedStateFromProps(_ref, _ref2)
    /*: ?$Shape<DraggableState>*/
    {
      var position = _ref.position;
      var prevPropsPosition = _ref2.prevPropsPosition;

      // Set x/y if a new position is provided in props that is different than the previous.
      if (position && (!prevPropsPosition || position.x !== prevPropsPosition.x || position.y !== prevPropsPosition.y)) {
        (0, _log.default)('Draggable: getDerivedStateFromProps %j', {
          position: position,
          prevPropsPosition: prevPropsPosition
        });
        return {
          x: position.x,
          y: position.y,
          prevPropsPosition: _objectSpread({}, position)
        };
      }

      return null;
    }
  }]);

  return Draggable;
}(React.Component);

exports.default = Draggable;

_defineProperty(Draggable, "displayName", 'Draggable');

_defineProperty(Draggable, "propTypes", _objectSpread(_objectSpread({}, _DraggableCore.default.propTypes), {}, {
  /**
   * `axis` determines which axis the draggable can move.
   *
   *  Note that all callbacks will still return data as normal. This only
   *  controls flushing to the DOM.
   *
   * 'both' allows movement horizontally and vertically.
   * 'x' limits movement to horizontal axis.
   * 'y' limits movement to vertical axis.
   * 'none' limits all movement.
   *
   * Defaults to 'both'.
   */
  axis: _propTypes.default.oneOf(['both', 'x', 'y', 'none']),

  /**
   * `bounds` determines the range of movement available to the element.
   * Available values are:
   *
   * 'parent' restricts movement within the Draggable's parent node.
   *
   * Alternatively, pass an object with the following properties, all of which are optional:
   *
   * {left: LEFT_BOUND, right: RIGHT_BOUND, bottom: BOTTOM_BOUND, top: TOP_BOUND}
   *
   * All values are in px.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *         return (
   *            <Draggable bounds={{right: 300, bottom: 300}}>
   *              <div>Content</div>
   *           </Draggable>
   *         );
   *       }
   *   });
   * ```
   */
  bounds: _propTypes.default.oneOfType([_propTypes.default.shape({
    left: _propTypes.default.number,
    right: _propTypes.default.number,
    top: _propTypes.default.number,
    bottom: _propTypes.default.number
  }), _propTypes.default.string, _propTypes.default.oneOf([false])]),
  defaultClassName: _propTypes.default.string,
  defaultClassNameDragging: _propTypes.default.string,
  defaultClassNameDragged: _propTypes.default.string,

  /**
   * `defaultPosition` specifies the x and y that the dragged item should start at
   *
   * Example:
   *
   * ```jsx
   *      let App = React.createClass({
   *          render: function () {
   *              return (
   *                  <Draggable defaultPosition={{x: 25, y: 25}}>
   *                      <div>I start with transformX: 25px and transformY: 25px;</div>
   *                  </Draggable>
   *              );
   *          }
   *      });
   * ```
   */
  defaultPosition: _propTypes.default.shape({
    x: _propTypes.default.number,
    y: _propTypes.default.number
  }),
  positionOffset: _propTypes.default.shape({
    x: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
    y: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
  }),

  /**
   * `position`, if present, defines the current position of the element.
   *
   *  This is similar to how form elements in React work - if no `position` is supplied, the component
   *  is uncontrolled.
   *
   * Example:
   *
   * ```jsx
   *      let App = React.createClass({
   *          render: function () {
   *              return (
   *                  <Draggable position={{x: 25, y: 25}}>
   *                      <div>I start with transformX: 25px and transformY: 25px;</div>
   *                  </Draggable>
   *              );
   *          }
   *      });
   * ```
   */
  position: _propTypes.default.shape({
    x: _propTypes.default.number,
    y: _propTypes.default.number
  }),

  /**
   * These properties should be defined on the child, not here.
   */
  className: shims.dontSetMe,
  style: shims.dontSetMe,
  transform: shims.dontSetMe
}));

_defineProperty(Draggable, "defaultProps", _objectSpread(_objectSpread({}, _DraggableCore.default.defaultProps), {}, {
  axis: 'both',
  bounds: false,
  defaultClassName: 'react-draggable',
  defaultClassNameDragging: 'react-draggable-dragging',
  defaultClassNameDragged: 'react-draggable-dragged',
  defaultPosition: {
    x: 0,
    y: 0
  },
  scale: 1
}));
});

var Draggable = Draggable_1.default,
    DraggableCore = Draggable_1.DraggableCore; // Previous versions of this lib exported <Draggable> as the root export. As to no-// them, or TypeScript, we export *both* as the root and as 'default'.
// See https://github.com/mzabriskie/react-draggable/pull/254
// and https://github.com/mzabriskie/react-draggable/issues/266


var cjs = Draggable;
var _default = Draggable;
var DraggableCore_1 = DraggableCore;
cjs.default = _default;
cjs.DraggableCore = DraggableCore_1;

/*
 * Copyright (C) 2007-2021 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
var ActionHelper = {
  FIND: 'find',
  REPLACE: 'replace'
};

var StyledTextField$1 = styled$3(TextField$1)(function (_ref) {
  var theme = _ref.theme;
  return {
    marginBottom: theme.spacing(2)
  };
});
var StyledButton$1 = styled$3(Button$1)(function (_ref2) {
  _ref2.theme;
  return {
    margin: '5px',
    "float": 'right'
  };
});

function PaperComponent$1(props) {
  return /*#__PURE__*/e__default.createElement(cjs, {
    handle: "#draggable-findnreplace-dialog-title",
    cancel: '[class*="MuiDialogContent-root"]'
  }, /*#__PURE__*/e__default.createElement(Paper$1, props));
}

function FindAndReplaceDialog(_ref3) {
  var isOpen = _ref3.isOpen,
      handleClose = _ref3.handleClose;

  var _React$useState = e__default.useState(''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      findText = _React$useState2[0],
      setFindText = _React$useState2[1];

  var _React$useState3 = e__default.useState(''),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      replaceText = _React$useState4[0],
      setReplaceText = _React$useState4[1];

  var _React$useState5 = e__default.useState(''),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      action = _React$useState6[0],
      setAction = _React$useState6[1];

  e__default.useEffect(function () {
    findReplaceSub.next({
      findText: findText,
      replaceText: replaceText,
      action: action
    });
  }, [findText, replaceText, action]);

  var isButtonsDisable = function isButtonsDisable(text) {
    return !text;
  };

  var handleFindClick = function handleFindClick() {
    setAction(ActionHelper.FIND);
  };

  var handleReplaceAllClick = function handleReplaceAllClick() {
    setAction(ActionHelper.REPLACE);
    handleClose();
  };

  return /*#__PURE__*/e__default.createElement("div", null, /*#__PURE__*/e__default.createElement(Dialog, {
    maxWidth: "md",
    "aria-labelledby": "draggable-findnreplace-dialog-title",
    PaperComponent: PaperComponent$1,
    open: isOpen,
    onClose: handleClose
  }, /*#__PURE__*/e__default.createElement(DialogTitle, {
    style: {
      cursor: 'move'
    },
    id: "draggable-findnreplace-dialog-title"
  }, "Find and replace"), /*#__PURE__*/e__default.createElement(DialogContent, null, /*#__PURE__*/e__default.createElement(Box, {
    component: "form",
    noValidate: true,
    autoComplete: "off",
    sx: {
      padding: '16px'
    }
  }, /*#__PURE__*/e__default.createElement(StyledTextField$1, {
    fullWidth: true,
    id: "find",
    label: "Find",
    placeholder: "Enter keywords",
    value: findText,
    onChange: function onChange(e) {
      return setFindText(e.target.value);
    }
  }), /*#__PURE__*/e__default.createElement(StyledTextField$1, {
    fullWidth: true,
    id: "replace",
    label: "Replace with",
    placeholder: "Enter replace words",
    value: replaceText,
    onChange: function onChange(e) {
      return setReplaceText(e.target.value);
    }
  }))), /*#__PURE__*/e__default.createElement(DialogActions, null, /*#__PURE__*/e__default.createElement(Box, null, /*#__PURE__*/e__default.createElement(StyledButton$1, {
    variant: "outlined",
    onClick: handleClose
  }, "Done"), /*#__PURE__*/e__default.createElement(StyledButton$1, {
    variant: "outlined",
    disabled: isButtonsDisable(findText),
    onClick: handleReplaceAllClick
  }, "Replace All"), /*#__PURE__*/e__default.createElement(StyledButton$1, {
    variant: "outlined",
    disabled: isButtonsDisable(findText),
    onClick: handleFindClick
  }, "Find")))));
}

var StyledTextField = styled$3(TextField$1)(function (_ref) {
  var theme = _ref.theme;
  return {
    marginBottom: theme.spacing(2)
  };
});
var StyledButton = styled$3(Button$1)(function (_ref2) {
  _ref2.theme;
  return {
    margin: '5px',
    "float": 'right'
  };
});

function PaperComponent(props) {
  return /*#__PURE__*/e__default.createElement(cjs, {
    handle: "#draggable-filter-dialog-title",
    cancel: '[class*="MuiDialogContent-root"]'
  }, /*#__PURE__*/e__default.createElement(Paper$1, props));
}

function FilterDialog(_ref3) {
  var isOpen = _ref3.isOpen,
      handleClose = _ref3.handleClose;

  var _React$useState = e__default.useState(''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      keyword = _React$useState2[0],
      setKeyword = _React$useState2[1];

  var handleApplyFilter = function handleApplyFilter() {
    console.log('apply filter');
  };

  return /*#__PURE__*/e__default.createElement("div", null, /*#__PURE__*/e__default.createElement(Dialog, {
    maxWidth: "md",
    "aria-labelledby": "draggable-filter-dialog-title",
    PaperComponent: PaperComponent,
    open: isOpen,
    onClose: handleClose
  }, /*#__PURE__*/e__default.createElement(DialogTitle, {
    style: {
      cursor: 'move'
    },
    id: "draggable-filter-dialog-title"
  }, "Apply Filter"), /*#__PURE__*/e__default.createElement(DialogContent, null, /*#__PURE__*/e__default.createElement(Box, {
    component: "form",
    noValidate: true,
    autoComplete: "off",
    sx: {
      padding: '16px'
    }
  }, /*#__PURE__*/e__default.createElement(StyledTextField, {
    fullWidth: true,
    id: "search",
    label: "keyword",
    placeholder: "Search with keyword",
    value: keyword,
    onChange: function onChange(e) {
      return setKeyword(e.target.value);
    }
  }))), /*#__PURE__*/e__default.createElement(DialogActions, null, /*#__PURE__*/e__default.createElement(Box, null, /*#__PURE__*/e__default.createElement(StyledButton, {
    variant: "outlined",
    onClick: handleClose
  }, "Cancel"), /*#__PURE__*/e__default.createElement(StyledButton, {
    variant: "outlined",
    onClick: handleApplyFilter
  }, "Apply Filter")))));
}

function defaultEqualityCheck(a, b) {
  return a === b;
}

function areArgumentsShallowlyEqual(equalityCheck, prev, next) {
  if (prev === null || next === null || prev.length !== next.length) {
    return false;
  }

  // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.
  var length = prev.length;
  for (var i = 0; i < length; i++) {
    if (!equalityCheck(prev[i], next[i])) {
      return false;
    }
  }

  return true;
}

function defaultMemoize(func) {
  var equalityCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityCheck;

  var lastArgs = null;
  var lastResult = null;
  // we reference arguments instead of spreading them for performance reasons
  return function () {
    if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) {
      // apply arguments instead of spreading for performance.
      lastResult = func.apply(null, arguments);
    }

    lastArgs = arguments;
    return lastResult;
  };
}

function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

  if (!dependencies.every(function (dep) {
    return typeof dep === 'function';
  })) {
    var dependencyTypes = dependencies.map(function (dep) {
      return typeof dep;
    }).join(', ');
    throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
  }

  return dependencies;
}

function createSelectorCreator(memoize) {
  for (var _len = arguments.length, memoizeOptions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    memoizeOptions[_key - 1] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }

    var recomputations = 0;
    var resultFunc = funcs.pop();
    var dependencies = getDependencies(funcs);

    var memoizedResultFunc = memoize.apply(undefined, [function () {
      recomputations++;
      // apply arguments instead of spreading for performance.
      return resultFunc.apply(null, arguments);
    }].concat(memoizeOptions));

    // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.
    var selector = memoize(function () {
      var params = [];
      var length = dependencies.length;

      for (var i = 0; i < length; i++) {
        // apply arguments instead of spreading and mutate a local list of params for performance.
        params.push(dependencies[i].apply(null, arguments));
      }

      // apply arguments instead of spreading for performance.
      return memoizedResultFunc.apply(null, params);
    });

    selector.resultFunc = resultFunc;
    selector.dependencies = dependencies;
    selector.recomputations = function () {
      return recomputations;
    };
    selector.resetRecomputations = function () {
      return recomputations = 0;
    };
    return selector;
  };
}

var createSelector = createSelectorCreator(defaultMemoize);

function chainPropTypes(propType1, propType2) {
  {
    return () => null;
  }
}

function _extends() {
  _extends = Object.assign || function (target) {
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

  return _extends.apply(this, arguments);
}

function isPlainObject(item) {
  return item !== null && typeof item === 'object' && // TS thinks `item is possibly null` even though this was our first guard.
  // @ts-expect-error
  item.constructor === Object;
}
function deepmerge(target, source, options = {
  clone: true
}) {
  const output = options.clone ? _extends({}, target) : target;

  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach(key => {
      // Avoid prototype pollution
      if (key === '__proto__') {
        return;
      }

      if (isPlainObject(source[key]) && key in target && isPlainObject(target[key])) {
        // Since `output` is a clone of `target` and we have narrowed `target` in this block we can cast to the same type.
        output[key] = deepmerge(target[key], source[key], options);
      } else {
        output[key] = source[key];
      }
    });
  }

  return output;
}

/**
 * WARNING: Don't import this directly.
 * Use `MuiError` from `@mui/utils/macros/MuiError.macro` instead.
 * @param {number} code
 */
function formatMuiErrorMessage(code) {
  // Apply babel-plugin-transform-template-literals in loose mode
  // loose mode is safe iff we're concatenating primitives
  // see https://babeljs.io/docs/en/babel-plugin-transform-template-literals#loose

  /* eslint-disable prefer-template */
  let url = 'https://mui.com/production-error/?code=' + code;

  for (let i = 1; i < arguments.length; i += 1) {
    // rest params over-transpile for this case
    // eslint-disable-next-line prefer-rest-params
    url += '&args[]=' + encodeURIComponent(arguments[i]);
  }

  return 'Minified MUI error #' + code + '; visit ' + url + ' for the full message.';
  /* eslint-enable prefer-template */
}

/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$1=60103,c$2=60106,d$2=60107,e$2=60108,f$1=60114,g$2=60109,h$1=60110,k$3=60112,l$1=60113,m$2=60120,n$2=60115,p$2=60116,q$2=60121,r$2=60122,u=60117,v$1=60129,w$2=60131;
if("function"===typeof Symbol&&Symbol.for){var x$3=Symbol.for;b$1=x$3("react.element");c$2=x$3("react.portal");d$2=x$3("react.fragment");e$2=x$3("react.strict_mode");f$1=x$3("react.profiler");g$2=x$3("react.provider");h$1=x$3("react.context");k$3=x$3("react.forward_ref");l$1=x$3("react.suspense");m$2=x$3("react.suspense_list");n$2=x$3("react.memo");p$2=x$3("react.lazy");q$2=x$3("react.block");r$2=x$3("react.server.block");u=x$3("react.fundamental");v$1=x$3("react.debug_trace_mode");w$2=x$3("react.legacy_hidden");}
function y$3(a){if("object"===typeof a&&null!==a){var t=a.$$typeof;switch(t){case b$1:switch(a=a.type,a){case d$2:case f$1:case e$2:case l$1:case m$2:return a;default:switch(a=a&&a.$$typeof,a){case h$1:case k$3:case p$2:case n$2:case g$2:return a;default:return t}}case c$2:return t}}}var z$3=g$2,A$3=b$1,B$2=k$3,C$1=d$2,D$2=p$2,E$1=n$2,F$2=c$2,G$1=f$1,H$2=e$2,I$2=l$1;var ContextConsumer$1=h$1;var ContextProvider$1=z$3;var Element$2=A$3;var ForwardRef$1=B$2;var Fragment$1=C$1;var Lazy$1=D$2;var Memo$1=E$1;var Portal$3=F$2;var Profiler$1=G$1;var StrictMode$1=H$2;
var Suspense$1=I$2;var isAsyncMode$1=function(){return !1};var isConcurrentMode$1=function(){return !1};var isContextConsumer$1=function(a){return y$3(a)===h$1};var isContextProvider$1=function(a){return y$3(a)===g$2};var isElement$2=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===b$1};var isForwardRef$1=function(a){return y$3(a)===k$3};var isFragment$1=function(a){return y$3(a)===d$2};var isLazy$1=function(a){return y$3(a)===p$2};var isMemo$1=function(a){return y$3(a)===n$2};
var isPortal$1=function(a){return y$3(a)===c$2};var isProfiler$1=function(a){return y$3(a)===f$1};var isStrictMode$1=function(a){return y$3(a)===e$2};var isSuspense$1=function(a){return y$3(a)===l$1};var isValidElementType$1=function(a){return "string"===typeof a||"function"===typeof a||a===d$2||a===f$1||a===v$1||a===e$2||a===l$1||a===m$2||a===w$2||"object"===typeof a&&null!==a&&(a.$$typeof===p$2||a.$$typeof===n$2||a.$$typeof===g$2||a.$$typeof===h$1||a.$$typeof===k$3||a.$$typeof===u||a.$$typeof===q$2||a[0]===r$2)?!0:!1};
var typeOf$1=y$3;

var reactIs_production_min$1 = {
	ContextConsumer: ContextConsumer$1,
	ContextProvider: ContextProvider$1,
	Element: Element$2,
	ForwardRef: ForwardRef$1,
	Fragment: Fragment$1,
	Lazy: Lazy$1,
	Memo: Memo$1,
	Portal: Portal$3,
	Profiler: Profiler$1,
	StrictMode: StrictMode$1,
	Suspense: Suspense$1,
	isAsyncMode: isAsyncMode$1,
	isConcurrentMode: isConcurrentMode$1,
	isContextConsumer: isContextConsumer$1,
	isContextProvider: isContextProvider$1,
	isElement: isElement$2,
	isForwardRef: isForwardRef$1,
	isFragment: isFragment$1,
	isLazy: isLazy$1,
	isMemo: isMemo$1,
	isPortal: isPortal$1,
	isProfiler: isProfiler$1,
	isStrictMode: isStrictMode$1,
	isSuspense: isSuspense$1,
	isValidElementType: isValidElementType$1,
	typeOf: typeOf$1
};

createCommonjsModule(function (module) {

{
  module.exports = reactIs_production_min$1;
}
});

// It should to be noted that this function isn't equivalent to `text-transform: capitalize`.
//
// A strict capitalization should uppercase the first letter of each word in the sentence.
// We only handle the first word.
function capitalize(string) {
  if (typeof string !== 'string') {
    throw new Error(formatMuiErrorMessage(7));
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Safe chained function.
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 */
function createChainedFunction(...funcs) {
  return funcs.reduce((acc, func) => {
    if (func == null) {
      return acc;
    }

    return function chainedFunction(...args) {
      acc.apply(this, args);
      func.apply(this, args);
    };
  }, () => {});
}

// Corresponds to 10 frames at 60 Hz.
// A few bytes payload overhead when lodash/debounce is ~3 kB and debounce ~300 B.
function debounce$1(func, wait = 166) {
  let timeout;

  function debounced(...args) {
    const later = () => {
      func.apply(this, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }

  debounced.clear = () => {
    clearTimeout(timeout);
  };

  return debounced;
}

function isMuiElement(element, muiNames) {
  return /*#__PURE__*/e__default.isValidElement(element) && muiNames.indexOf(element.type.muiName) !== -1;
}

function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

function ownerWindow(node) {
  const doc = ownerDocument(node);
  return doc.defaultView || window;
}

/**
 * TODO v5: consider making it private
 *
 * passes {value} to {ref}
 *
 * WARNING: Be sure to only call this inside a callback that is passed as a ref.
 * Otherwise, make sure to cleanup the previous {ref} if it changes. See
 * https://github.com/mui-org/material-ui/issues/13539
 *
 * Useful if you want to expose the ref of an inner component to the public API
 * while still using it inside the component.
 * @param ref A ref callback or ref object. If anything falsy, this is a no-op.
 */
function setRef(ref, value) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}

const useEnhancedEffect = typeof window !== 'undefined' ? e__default.useLayoutEffect : e__default.useEffect;
var useEnhancedEffect$1 = useEnhancedEffect;

function useId(idOverride) {
  const [defaultId, setDefaultId] = e__default.useState(idOverride);
  const id = idOverride || defaultId;
  e__default.useEffect(() => {
    if (defaultId == null) {
      // Fallback to this default id when possible.
      // Use the random value for client-side rendering only.
      // We can't use it server-side.
      setDefaultId(`mui-${Math.round(Math.random() * 1e9)}`);
    }
  }, [defaultId]);
  return id;
}

/* eslint-disable react-hooks/rules-of-hooks, react-hooks/exhaustive-deps */
function useControlled({
  controlled,
  default: defaultProp,
  name,
  state = 'value'
}) {
  // isControlled is ignored in the hook dependency lists as it should never change.
  const {
    current: isControlled
  } = e__default.useRef(controlled !== undefined);
  const [valueState, setValue] = e__default.useState(defaultProp);
  const value = isControlled ? controlled : valueState;

  const setValueIfUncontrolled = e__default.useCallback(newValue => {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);
  return [value, setValueIfUncontrolled];
}

/**
 * https://github.com/facebook/react/issues/14099#issuecomment-440013892
 */

function useEventCallback(fn) {
  const ref = e__default.useRef(fn);
  useEnhancedEffect$1(() => {
    ref.current = fn;
  });
  return e__default.useCallback((...args) => // @ts-expect-error hide `this`
  // tslint:disable-next-line:ban-comma-operator
  (0, ref.current)(...args), []);
}

function useForkRef(refA, refB) {
  /**
   * This will create a new function if the ref props change and are defined.
   * This means react will call the old forkRef with `null` and the new forkRef
   * with the ref. Cleanup naturally emerges from this behavior.
   */
  return e__default.useMemo(() => {
    if (refA == null && refB == null) {
      return null;
    }

    return refValue => {
      setRef(refA, refValue);
      setRef(refB, refValue);
    };
  }, [refA, refB]);
}

// based on https://github.com/WICG/focus-visible/blob/v4.1.5/src/focus-visible.js
let hadKeyboardEvent = true;
let hadFocusVisibleRecently = false;
let hadFocusVisibleRecentlyTimeout = null;
const inputTypesWhitelist = {
  text: true,
  search: true,
  url: true,
  tel: true,
  email: true,
  password: true,
  number: true,
  date: true,
  month: true,
  week: true,
  time: true,
  datetime: true,
  'datetime-local': true
};
/**
 * Computes whether the given element should automatically trigger the
 * `focus-visible` class being added, i.e. whether it should always match
 * `:focus-visible` when focused.
 * @param {Element} node
 * @returns {boolean}
 */

function focusTriggersKeyboardModality(node) {
  const {
    type,
    tagName
  } = node;

  if (tagName === 'INPUT' && inputTypesWhitelist[type] && !node.readOnly) {
    return true;
  }

  if (tagName === 'TEXTAREA' && !node.readOnly) {
    return true;
  }

  if (node.isContentEditable) {
    return true;
  }

  return false;
}
/**
 * Keep track of our keyboard modality state with `hadKeyboardEvent`.
 * If the most recent user interaction was via the keyboard;
 * and the key press did not include a meta, alt/option, or control key;
 * then the modality is keyboard. Otherwise, the modality is not keyboard.
 * @param {KeyboardEvent} event
 */


function handleKeyDown(event) {
  if (event.metaKey || event.altKey || event.ctrlKey) {
    return;
  }

  hadKeyboardEvent = true;
}
/**
 * If at any point a user clicks with a pointing device, ensure that we change
 * the modality away from keyboard.
 * This avoids the situation where a user presses a key on an already focused
 * element, and then clicks on a different element, focusing it with a
 * pointing device, while we still think we're in keyboard modality.
 */


function handlePointerDown() {
  hadKeyboardEvent = false;
}

function handleVisibilityChange() {
  if (this.visibilityState === 'hidden') {
    // If the tab becomes active again, the browser will handle calling focus
    // on the element (Safari actually calls it twice).
    // If this tab change caused a blur on an element with focus-visible,
    // re-apply the class when the user switches back to the tab.
    if (hadFocusVisibleRecently) {
      hadKeyboardEvent = true;
    }
  }
}

function prepare(doc) {
  doc.addEventListener('keydown', handleKeyDown, true);
  doc.addEventListener('mousedown', handlePointerDown, true);
  doc.addEventListener('pointerdown', handlePointerDown, true);
  doc.addEventListener('touchstart', handlePointerDown, true);
  doc.addEventListener('visibilitychange', handleVisibilityChange, true);
}

function isFocusVisible(event) {
  const {
    target
  } = event;

  try {
    return target.matches(':focus-visible');
  } catch (error) {// Browsers not implementing :focus-visible will throw a SyntaxError.
    // We use our own heuristic for those browsers.
    // Rethrow might be better if it's not the expected error but do we really
    // want to crash if focus-visible malfunctioned?
  } // No need for validFocusTarget check. The user does that by attaching it to
  // focusable events only.


  return hadKeyboardEvent || focusTriggersKeyboardModality(target);
}

function useIsFocusVisible() {
  const ref = e__default.useCallback(node => {
    if (node != null) {
      prepare(node.ownerDocument);
    }
  }, []);
  const isFocusVisibleRef = e__default.useRef(false);
  /**
   * Should be called if a blur event is fired
   */

  function handleBlurVisible() {
    // checking against potential state variable does not suffice if we focus and blur synchronously.
    // React wouldn't have time to trigger a re-render so `focusVisible` would be stale.
    // Ideally we would adjust `isFocusVisible(event)` to look at `relatedTarget` for blur events.
    // This doesn't work in IE11 due to https://github.com/facebook/react/issues/3751
    // TODO: check again if React releases their internal changes to focus event handling (https://github.com/facebook/react/pull/19186).
    if (isFocusVisibleRef.current) {
      // To detect a tab/window switch, we look for a blur event followed
      // rapidly by a visibility change.
      // If we don't see a visibility change within 100ms, it's probably a
      // regular focus change.
      hadFocusVisibleRecently = true;
      window.clearTimeout(hadFocusVisibleRecentlyTimeout);
      hadFocusVisibleRecentlyTimeout = window.setTimeout(() => {
        hadFocusVisibleRecently = false;
      }, 100);
      isFocusVisibleRef.current = false;
      return true;
    }

    return false;
  }
  /**
   * Should be called if a blur event is fired
   */


  function handleFocusVisible(event) {
    if (isFocusVisible(event)) {
      isFocusVisibleRef.current = true;
      return true;
    }

    return false;
  }

  return {
    isFocusVisibleRef,
    onFocus: handleFocusVisible,
    onBlur: handleBlurVisible,
    ref
  };
}

// A change of the browser zoom change the scrollbar size.
// Credit https://github.com/twbs/bootstrap/blob/488fd8afc535ca3a6ad4dc581f5e89217b6a36ac/js/src/util/scrollbar.js#L14-L18
function getScrollbarSize(doc) {
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
  const documentWidth = doc.documentElement.clientWidth;
  return Math.abs(window.innerWidth - documentWidth);
}

const usePreviousProps = value => {
  const ref = e__default.useRef({});
  e__default.useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

var usePreviousProps$1 = usePreviousProps;

const ThemeContext$1 = /*#__PURE__*/e__default.createContext(null);

var ThemeContext$2 = ThemeContext$1;

function useTheme$3() {
  const theme = e__default.useContext(ThemeContext$2);

  return theme;
}

const hasSymbol = typeof Symbol === 'function' && Symbol.for;
var nested = hasSymbol ? Symbol.for('mui.nested') : '__THEME_NESTED__';

/**
 * This is the list of the style rule name we use as drop in replacement for the built-in
 * pseudo classes (:checked, :disabled, :focused, etc.).
 *
 * Why do they exist in the first place?
 * These classes are used at a specificity of 2.
 * It allows them to override previously defined styles as well as
 * being untouched by simple user overrides.
 */

const stateClasses = ['checked', 'disabled', 'error', 'focused', 'focusVisible', 'required', 'expanded', 'selected']; // Returns a function which generates unique class names based on counters.
// When new generator function is created, rule counter is reset.
// We need to reset the rule counter for SSR for each request.
//
// It's inspired by
// https://github.com/cssinjs/jss/blob/4e6a05dd3f7b6572fdd3ab216861d9e446c20331/src/utils/createGenerateClassName.js

function createGenerateClassName(options = {}) {
  const {
    disableGlobal = false,
    productionPrefix = 'jss',
    seed = ''
  } = options;
  const seedPrefix = seed === '' ? '' : `${seed}-`;
  let ruleCounter = 0;

  const getNextCounterId = () => {
    ruleCounter += 1;

    return ruleCounter;
  };

  return (rule, styleSheet) => {
    const name = styleSheet.options.name; // Is a global static MUI style?

    if (name && name.indexOf('Mui') === 0 && !styleSheet.options.link && !disableGlobal) {
      // We can use a shorthand class name, we never use the keys to style the components.
      if (stateClasses.indexOf(rule.key) !== -1) {
        return `Mui-${rule.key}`;
      }

      const prefix = `${seedPrefix}${name}-${rule.key}`;

      if (!styleSheet.options.theme[nested] || seed !== '') {
        return prefix;
      }

      return `${prefix}-${getNextCounterId()}`;
    }

    {
      return `${seedPrefix}${productionPrefix}${getNextCounterId()}`;
    }
  };
}

function createStyles(styles) {
  return styles;
}

/* eslint-disable no-restricted-syntax */
function getThemeProps$1(params) {
  const {
    theme,
    name,
    props
  } = params;

  if (!theme || !theme.components || !theme.components[name] || !theme.components[name].defaultProps) {
    return props;
  }

  const output = _extends({}, props); // Resolve default props, code borrow from React source.
  // https://github.com/facebook/react/blob/15a8f031838a553e41c0b66eb1bcf1da8448104d/packages/react/src/ReactElement.js#L221


  const defaultProps = theme.components[name].defaultProps;
  let propName;

  for (propName in defaultProps) {
    if (output[propName] === undefined) {
      output[propName] = defaultProps[propName];
    }
  }

  return output;
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isBrowser$1 = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && (typeof document === "undefined" ? "undefined" : _typeof(document)) === 'object' && document.nodeType === 9;

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var plainObjectConstrurctor = {}.constructor;
function cloneStyle(style) {
  if (style == null || typeof style !== 'object') return style;
  if (Array.isArray(style)) return style.map(cloneStyle);
  if (style.constructor !== plainObjectConstrurctor) return style;
  var newStyle = {};

  for (var name in style) {
    newStyle[name] = cloneStyle(style[name]);
  }

  return newStyle;
}

/**
 * Create a rule instance.
 */

function createRule(name, decl, options) {
  if (name === void 0) {
    name = 'unnamed';
  }

  var jss = options.jss;
  var declCopy = cloneStyle(decl);
  var rule = jss.plugins.onCreateRule(name, declCopy, options);
  if (rule) return rule; // It is an at-rule and it has no instance.

  if (name[0] === '@') ;

  return null;
}

var join = function join(value, by) {
  var result = '';

  for (var i = 0; i < value.length; i++) {
    // Remove !important from the value, it will be readded later.
    if (value[i] === '!important') break;
    if (result) result += by;
    result += value[i];
  }

  return result;
};
/**
 * Converts JSS array value to a CSS string.
 *
 * `margin: [['5px', '10px']]` > `margin: 5px 10px;`
 * `border: ['1px', '2px']` > `border: 1px, 2px;`
 * `margin: [['5px', '10px'], '!important']` > `margin: 5px 10px !important;`
 * `color: ['red', !important]` > `color: red !important;`
 */


var toCssValue = function toCssValue(value, ignoreImportant) {
  if (ignoreImportant === void 0) {
    ignoreImportant = false;
  }

  if (!Array.isArray(value)) return value;
  var cssValue = ''; // Support space separated values via `[['5px', '10px']]`.

  if (Array.isArray(value[0])) {
    for (var i = 0; i < value.length; i++) {
      if (value[i] === '!important') break;
      if (cssValue) cssValue += ', ';
      cssValue += join(value[i], ' ');
    }
  } else cssValue = join(value, ', '); // Add !important, because it was ignored.


  if (!ignoreImportant && value[value.length - 1] === '!important') {
    cssValue += ' !important';
  }

  return cssValue;
};

function getWhitespaceSymbols(options) {
  if (options && options.format === false) {
    return {
      linebreak: '',
      space: ''
    };
  }

  return {
    linebreak: '\n',
    space: ' '
  };
}

/**
 * Indent a string.
 * http://jsperf.com/array-join-vs-for
 */

function indentStr(str, indent) {
  var result = '';

  for (var index = 0; index < indent; index++) {
    result += '  ';
  }

  return result + str;
}
/**
 * Converts a Rule to CSS string.
 */


function toCss(selector, style, options) {
  if (options === void 0) {
    options = {};
  }

  var result = '';
  if (!style) return result;
  var _options = options,
      _options$indent = _options.indent,
      indent = _options$indent === void 0 ? 0 : _options$indent;
  var fallbacks = style.fallbacks;

  if (options.format === false) {
    indent = -Infinity;
  }

  var _getWhitespaceSymbols = getWhitespaceSymbols(options),
      linebreak = _getWhitespaceSymbols.linebreak,
      space = _getWhitespaceSymbols.space;

  if (selector) indent++; // Apply fallbacks first.

  if (fallbacks) {
    // Array syntax {fallbacks: [{prop: value}]}
    if (Array.isArray(fallbacks)) {
      for (var index = 0; index < fallbacks.length; index++) {
        var fallback = fallbacks[index];

        for (var prop in fallback) {
          var value = fallback[prop];

          if (value != null) {
            if (result) result += linebreak;
            result += indentStr(prop + ":" + space + toCssValue(value) + ";", indent);
          }
        }
      }
    } else {
      // Object syntax {fallbacks: {prop: value}}
      for (var _prop in fallbacks) {
        var _value = fallbacks[_prop];

        if (_value != null) {
          if (result) result += linebreak;
          result += indentStr(_prop + ":" + space + toCssValue(_value) + ";", indent);
        }
      }
    }
  }

  for (var _prop2 in style) {
    var _value2 = style[_prop2];

    if (_value2 != null && _prop2 !== 'fallbacks') {
      if (result) result += linebreak;
      result += indentStr(_prop2 + ":" + space + toCssValue(_value2) + ";", indent);
    }
  } // Allow empty style in this case, because properties will be added dynamically.


  if (!result && !options.allowEmpty) return result; // When rule is being stringified before selector was defined.

  if (!selector) return result;
  indent--;
  if (result) result = "" + linebreak + result + linebreak;
  return indentStr("" + selector + space + "{" + result, indent) + indentStr('}', indent);
}

var escapeRegex = /([[\].#*$><+~=|^:(),"'`\s])/g;
var nativeEscape = typeof CSS !== 'undefined' && CSS.escape;
var escape = (function (str) {
  return nativeEscape ? nativeEscape(str) : str.replace(escapeRegex, '\\$1');
});

var BaseStyleRule =
/*#__PURE__*/
function () {
  function BaseStyleRule(key, style, options) {
    this.type = 'style';
    this.isProcessed = false;
    var sheet = options.sheet,
        Renderer = options.Renderer;
    this.key = key;
    this.options = options;
    this.style = style;
    if (sheet) this.renderer = sheet.renderer;else if (Renderer) this.renderer = new Renderer();
  }
  /**
   * Get or set a style property.
   */


  var _proto = BaseStyleRule.prototype;

  _proto.prop = function prop(name, value, options) {
    // It's a getter.
    if (value === undefined) return this.style[name]; // Don't do anything if the value has not changed.

    var force = options ? options.force : false;
    if (!force && this.style[name] === value) return this;
    var newValue = value;

    if (!options || options.process !== false) {
      newValue = this.options.jss.plugins.onChangeValue(value, name, this);
    }

    var isEmpty = newValue == null || newValue === false;
    var isDefined = name in this.style; // Value is empty and wasn't defined before.

    if (isEmpty && !isDefined && !force) return this; // We are going to remove this value.

    var remove = isEmpty && isDefined;
    if (remove) delete this.style[name];else this.style[name] = newValue; // Renderable is defined if StyleSheet option `link` is true.

    if (this.renderable && this.renderer) {
      if (remove) this.renderer.removeProperty(this.renderable, name);else this.renderer.setProperty(this.renderable, name, newValue);
      return this;
    }

    var sheet = this.options.sheet;

    if (sheet && sheet.attached) ;

    return this;
  };

  return BaseStyleRule;
}();
var StyleRule =
/*#__PURE__*/
function (_BaseStyleRule) {
  _inheritsLoose(StyleRule, _BaseStyleRule);

  function StyleRule(key, style, options) {
    var _this;

    _this = _BaseStyleRule.call(this, key, style, options) || this;
    var selector = options.selector,
        scoped = options.scoped,
        sheet = options.sheet,
        generateId = options.generateId;

    if (selector) {
      _this.selectorText = selector;
    } else if (scoped !== false) {
      _this.id = generateId(_assertThisInitialized(_assertThisInitialized(_this)), sheet);
      _this.selectorText = "." + escape(_this.id);
    }

    return _this;
  }
  /**
   * Set selector string.
   * Attention: use this with caution. Most browsers didn't implement
   * selectorText setter, so this may result in rerendering of entire Style Sheet.
   */


  var _proto2 = StyleRule.prototype;

  /**
   * Apply rule to an element inline.
   */
  _proto2.applyTo = function applyTo(renderable) {
    var renderer = this.renderer;

    if (renderer) {
      var json = this.toJSON();

      for (var prop in json) {
        renderer.setProperty(renderable, prop, json[prop]);
      }
    }

    return this;
  }
  /**
   * Returns JSON representation of the rule.
   * Fallbacks are not supported.
   * Useful for inline styles.
   */
  ;

  _proto2.toJSON = function toJSON() {
    var json = {};

    for (var prop in this.style) {
      var value = this.style[prop];
      if (typeof value !== 'object') json[prop] = value;else if (Array.isArray(value)) json[prop] = toCssValue(value);
    }

    return json;
  }
  /**
   * Generates a CSS string.
   */
  ;

  _proto2.toString = function toString(options) {
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;
    var opts = link ? _extends({}, options, {
      allowEmpty: true
    }) : options;
    return toCss(this.selectorText, this.style, opts);
  };

  _createClass(StyleRule, [{
    key: "selector",
    set: function set(selector) {
      if (selector === this.selectorText) return;
      this.selectorText = selector;
      var renderer = this.renderer,
          renderable = this.renderable;
      if (!renderable || !renderer) return;
      var hasChanged = renderer.setSelector(renderable, selector); // If selector setter is not implemented, rerender the rule.

      if (!hasChanged) {
        renderer.replaceRule(renderable, this);
      }
    }
    /**
     * Get selector string.
     */
    ,
    get: function get() {
      return this.selectorText;
    }
  }]);

  return StyleRule;
}(BaseStyleRule);
var pluginStyleRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    if (key[0] === '@' || options.parent && options.parent.type === 'keyframes') {
      return null;
    }

    return new StyleRule(key, style, options);
  }
};

var defaultToStringOptions = {
  indent: 1,
  children: true
};
var atRegExp = /@([\w-]+)/;
/**
 * Conditional rule for @media, @supports
 */

var ConditionalRule =
/*#__PURE__*/
function () {
  function ConditionalRule(key, styles, options) {
    this.type = 'conditional';
    this.isProcessed = false;
    this.key = key;
    var atMatch = key.match(atRegExp);
    this.at = atMatch ? atMatch[1] : 'unknown'; // Key might contain a unique suffix in case the `name` passed by user was duplicate.

    this.query = options.name || "@" + this.at;
    this.options = options;
    this.rules = new RuleList(_extends({}, options, {
      parent: this
    }));

    for (var name in styles) {
      this.rules.add(name, styles[name]);
    }

    this.rules.process();
  }
  /**
   * Get a rule.
   */


  var _proto = ConditionalRule.prototype;

  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  }
  /**
   * Create and register rule, run plugins.
   */
  ;

  _proto.addRule = function addRule(name, style, options) {
    var rule = this.rules.add(name, style, options);
    if (!rule) return null;
    this.options.jss.plugins.onProcessRule(rule);
    return rule;
  }
  /**
   * Replace rule, run plugins.
   */
  ;

  _proto.replaceRule = function replaceRule(name, style, options) {
    var newRule = this.rules.replace(name, style, options);
    if (newRule) this.options.jss.plugins.onProcessRule(newRule);
    return newRule;
  }
  /**
   * Generates a CSS string.
   */
  ;

  _proto.toString = function toString(options) {
    if (options === void 0) {
      options = defaultToStringOptions;
    }

    var _getWhitespaceSymbols = getWhitespaceSymbols(options),
        linebreak = _getWhitespaceSymbols.linebreak;

    if (options.indent == null) options.indent = defaultToStringOptions.indent;
    if (options.children == null) options.children = defaultToStringOptions.children;

    if (options.children === false) {
      return this.query + " {}";
    }

    var children = this.rules.toString(options);
    return children ? this.query + " {" + linebreak + children + linebreak + "}" : '';
  };

  return ConditionalRule;
}();
var keyRegExp = /@media|@supports\s+/;
var pluginConditionalRule = {
  onCreateRule: function onCreateRule(key, styles, options) {
    return keyRegExp.test(key) ? new ConditionalRule(key, styles, options) : null;
  }
};

var defaultToStringOptions$1 = {
  indent: 1,
  children: true
};
var nameRegExp = /@keyframes\s+([\w-]+)/;
/**
 * Rule for @keyframes
 */

var KeyframesRule =
/*#__PURE__*/
function () {
  function KeyframesRule(key, frames, options) {
    this.type = 'keyframes';
    this.at = '@keyframes';
    this.isProcessed = false;
    var nameMatch = key.match(nameRegExp);

    if (nameMatch && nameMatch[1]) {
      this.name = nameMatch[1];
    } else {
      this.name = 'noname';
    }

    this.key = this.type + "-" + this.name;
    this.options = options;
    var scoped = options.scoped,
        sheet = options.sheet,
        generateId = options.generateId;
    this.id = scoped === false ? this.name : escape(generateId(this, sheet));
    this.rules = new RuleList(_extends({}, options, {
      parent: this
    }));

    for (var name in frames) {
      this.rules.add(name, frames[name], _extends({}, options, {
        parent: this
      }));
    }

    this.rules.process();
  }
  /**
   * Generates a CSS string.
   */


  var _proto = KeyframesRule.prototype;

  _proto.toString = function toString(options) {
    if (options === void 0) {
      options = defaultToStringOptions$1;
    }

    var _getWhitespaceSymbols = getWhitespaceSymbols(options),
        linebreak = _getWhitespaceSymbols.linebreak;

    if (options.indent == null) options.indent = defaultToStringOptions$1.indent;
    if (options.children == null) options.children = defaultToStringOptions$1.children;

    if (options.children === false) {
      return this.at + " " + this.id + " {}";
    }

    var children = this.rules.toString(options);
    if (children) children = "" + linebreak + children + linebreak;
    return this.at + " " + this.id + " {" + children + "}";
  };

  return KeyframesRule;
}();
var keyRegExp$1 = /@keyframes\s+/;
var refRegExp$1 = /\$([\w-]+)/g;

var findReferencedKeyframe = function findReferencedKeyframe(val, keyframes) {
  if (typeof val === 'string') {
    return val.replace(refRegExp$1, function (match, name) {
      if (name in keyframes) {
        return keyframes[name];
      }
      return match;
    });
  }

  return val;
};
/**
 * Replace the reference for a animation name.
 */


var replaceRef = function replaceRef(style, prop, keyframes) {
  var value = style[prop];
  var refKeyframe = findReferencedKeyframe(value, keyframes);

  if (refKeyframe !== value) {
    style[prop] = refKeyframe;
  }
};

var pluginKeyframesRule = {
  onCreateRule: function onCreateRule(key, frames, options) {
    return typeof key === 'string' && keyRegExp$1.test(key) ? new KeyframesRule(key, frames, options) : null;
  },
  // Animation name ref replacer.
  onProcessStyle: function onProcessStyle(style, rule, sheet) {
    if (rule.type !== 'style' || !sheet) return style;
    if ('animation-name' in style) replaceRef(style, 'animation-name', sheet.keyframes);
    if ('animation' in style) replaceRef(style, 'animation', sheet.keyframes);
    return style;
  },
  onChangeValue: function onChangeValue(val, prop, rule) {
    var sheet = rule.options.sheet;

    if (!sheet) {
      return val;
    }

    switch (prop) {
      case 'animation':
        return findReferencedKeyframe(val, sheet.keyframes);

      case 'animation-name':
        return findReferencedKeyframe(val, sheet.keyframes);

      default:
        return val;
    }
  }
};

var KeyframeRule =
/*#__PURE__*/
function (_BaseStyleRule) {
  _inheritsLoose(KeyframeRule, _BaseStyleRule);

  function KeyframeRule() {
    return _BaseStyleRule.apply(this, arguments) || this;
  }

  var _proto = KeyframeRule.prototype;

  /**
   * Generates a CSS string.
   */
  _proto.toString = function toString(options) {
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;
    var opts = link ? _extends({}, options, {
      allowEmpty: true
    }) : options;
    return toCss(this.key, this.style, opts);
  };

  return KeyframeRule;
}(BaseStyleRule);
var pluginKeyframeRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    if (options.parent && options.parent.type === 'keyframes') {
      return new KeyframeRule(key, style, options);
    }

    return null;
  }
};

var FontFaceRule =
/*#__PURE__*/
function () {
  function FontFaceRule(key, style, options) {
    this.type = 'font-face';
    this.at = '@font-face';
    this.isProcessed = false;
    this.key = key;
    this.style = style;
    this.options = options;
  }
  /**
   * Generates a CSS string.
   */


  var _proto = FontFaceRule.prototype;

  _proto.toString = function toString(options) {
    var _getWhitespaceSymbols = getWhitespaceSymbols(options),
        linebreak = _getWhitespaceSymbols.linebreak;

    if (Array.isArray(this.style)) {
      var str = '';

      for (var index = 0; index < this.style.length; index++) {
        str += toCss(this.at, this.style[index]);
        if (this.style[index + 1]) str += linebreak;
      }

      return str;
    }

    return toCss(this.at, this.style, options);
  };

  return FontFaceRule;
}();
var keyRegExp$2 = /@font-face/;
var pluginFontFaceRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    return keyRegExp$2.test(key) ? new FontFaceRule(key, style, options) : null;
  }
};

var ViewportRule =
/*#__PURE__*/
function () {
  function ViewportRule(key, style, options) {
    this.type = 'viewport';
    this.at = '@viewport';
    this.isProcessed = false;
    this.key = key;
    this.style = style;
    this.options = options;
  }
  /**
   * Generates a CSS string.
   */


  var _proto = ViewportRule.prototype;

  _proto.toString = function toString(options) {
    return toCss(this.key, this.style, options);
  };

  return ViewportRule;
}();
var pluginViewportRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    return key === '@viewport' || key === '@-ms-viewport' ? new ViewportRule(key, style, options) : null;
  }
};

var SimpleRule =
/*#__PURE__*/
function () {
  function SimpleRule(key, value, options) {
    this.type = 'simple';
    this.isProcessed = false;
    this.key = key;
    this.value = value;
    this.options = options;
  }
  /**
   * Generates a CSS string.
   */
  // eslint-disable-next-line no-unused-vars


  var _proto = SimpleRule.prototype;

  _proto.toString = function toString(options) {
    if (Array.isArray(this.value)) {
      var str = '';

      for (var index = 0; index < this.value.length; index++) {
        str += this.key + " " + this.value[index] + ";";
        if (this.value[index + 1]) str += '\n';
      }

      return str;
    }

    return this.key + " " + this.value + ";";
  };

  return SimpleRule;
}();
var keysMap = {
  '@charset': true,
  '@import': true,
  '@namespace': true
};
var pluginSimpleRule = {
  onCreateRule: function onCreateRule(key, value, options) {
    return key in keysMap ? new SimpleRule(key, value, options) : null;
  }
};

var plugins$1 = [pluginStyleRule, pluginConditionalRule, pluginKeyframesRule, pluginKeyframeRule, pluginFontFaceRule, pluginViewportRule, pluginSimpleRule];

var defaultUpdateOptions = {
  process: true
};
var forceUpdateOptions = {
  force: true,
  process: true
  /**
   * Contains rules objects and allows adding/removing etc.
   * Is used for e.g. by `StyleSheet` or `ConditionalRule`.
   */

};

var RuleList =
/*#__PURE__*/
function () {
  // Rules registry for access by .get() method.
  // It contains the same rule registered by name and by selector.
  // Original styles object.
  // Used to ensure correct rules order.
  function RuleList(options) {
    this.map = {};
    this.raw = {};
    this.index = [];
    this.counter = 0;
    this.options = options;
    this.classes = options.classes;
    this.keyframes = options.keyframes;
  }
  /**
   * Create and register rule.
   *
   * Will not render after Style Sheet was rendered the first time.
   */


  var _proto = RuleList.prototype;

  _proto.add = function add(name, decl, ruleOptions) {
    var _this$options = this.options,
        parent = _this$options.parent,
        sheet = _this$options.sheet,
        jss = _this$options.jss,
        Renderer = _this$options.Renderer,
        generateId = _this$options.generateId,
        scoped = _this$options.scoped;

    var options = _extends({
      classes: this.classes,
      parent: parent,
      sheet: sheet,
      jss: jss,
      Renderer: Renderer,
      generateId: generateId,
      scoped: scoped,
      name: name,
      keyframes: this.keyframes,
      selector: undefined
    }, ruleOptions); // When user uses .createStyleSheet(), duplicate names are not possible, but
    // `sheet.addRule()` opens the door for any duplicate rule name. When this happens
    // we need to make the key unique within this RuleList instance scope.


    var key = name;

    if (name in this.raw) {
      key = name + "-d" + this.counter++;
    } // We need to save the original decl before creating the rule
    // because cache plugin needs to use it as a key to return a cached rule.


    this.raw[key] = decl;

    if (key in this.classes) {
      // E.g. rules inside of @media container
      options.selector = "." + escape(this.classes[key]);
    }

    var rule = createRule(key, decl, options);
    if (!rule) return null;
    this.register(rule);
    var index = options.index === undefined ? this.index.length : options.index;
    this.index.splice(index, 0, rule);
    return rule;
  }
  /**
   * Replace rule.
   * Create a new rule and remove old one instead of overwriting
   * because we want to invoke onCreateRule hook to make plugins work.
   */
  ;

  _proto.replace = function replace(name, decl, ruleOptions) {
    var oldRule = this.get(name);
    var oldIndex = this.index.indexOf(oldRule);

    if (oldRule) {
      this.remove(oldRule);
    }

    var options = ruleOptions;
    if (oldIndex !== -1) options = _extends({}, ruleOptions, {
      index: oldIndex
    });
    return this.add(name, decl, options);
  }
  /**
   * Get a rule by name or selector.
   */
  ;

  _proto.get = function get(nameOrSelector) {
    return this.map[nameOrSelector];
  }
  /**
   * Delete a rule.
   */
  ;

  _proto.remove = function remove(rule) {
    this.unregister(rule);
    delete this.raw[rule.key];
    this.index.splice(this.index.indexOf(rule), 1);
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.index.indexOf(rule);
  }
  /**
   * Run `onProcessRule()` plugins on every rule.
   */
  ;

  _proto.process = function process() {
    var plugins = this.options.jss.plugins; // We need to clone array because if we modify the index somewhere else during a loop
    // we end up with very hard-to-track-down side effects.

    this.index.slice(0).forEach(plugins.onProcessRule, plugins);
  }
  /**
   * Register a rule in `.map`, `.classes` and `.keyframes` maps.
   */
  ;

  _proto.register = function register(rule) {
    this.map[rule.key] = rule;

    if (rule instanceof StyleRule) {
      this.map[rule.selector] = rule;
      if (rule.id) this.classes[rule.key] = rule.id;
    } else if (rule instanceof KeyframesRule && this.keyframes) {
      this.keyframes[rule.name] = rule.id;
    }
  }
  /**
   * Unregister a rule.
   */
  ;

  _proto.unregister = function unregister(rule) {
    delete this.map[rule.key];

    if (rule instanceof StyleRule) {
      delete this.map[rule.selector];
      delete this.classes[rule.key];
    } else if (rule instanceof KeyframesRule) {
      delete this.keyframes[rule.name];
    }
  }
  /**
   * Update the function values with a new data.
   */
  ;

  _proto.update = function update() {
    var name;
    var data;
    var options;

    if (typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'string') {
      name = arguments.length <= 0 ? undefined : arguments[0];
      data = arguments.length <= 1 ? undefined : arguments[1];
      options = arguments.length <= 2 ? undefined : arguments[2];
    } else {
      data = arguments.length <= 0 ? undefined : arguments[0];
      options = arguments.length <= 1 ? undefined : arguments[1];
      name = null;
    }

    if (name) {
      this.updateOne(this.get(name), data, options);
    } else {
      for (var index = 0; index < this.index.length; index++) {
        this.updateOne(this.index[index], data, options);
      }
    }
  }
  /**
   * Execute plugins, update rule props.
   */
  ;

  _proto.updateOne = function updateOne(rule, data, options) {
    if (options === void 0) {
      options = defaultUpdateOptions;
    }

    var _this$options2 = this.options,
        plugins = _this$options2.jss.plugins,
        sheet = _this$options2.sheet; // It is a rules container like for e.g. ConditionalRule.

    if (rule.rules instanceof RuleList) {
      rule.rules.update(data, options);
      return;
    }

    var style = rule.style;
    plugins.onUpdate(data, rule, sheet, options); // We rely on a new `style` ref in case it was mutated during onUpdate hook.

    if (options.process && style && style !== rule.style) {
      // We need to run the plugins in case new `style` relies on syntax plugins.
      plugins.onProcessStyle(rule.style, rule, sheet); // Update and add props.

      for (var prop in rule.style) {
        var nextValue = rule.style[prop];
        var prevValue = style[prop]; // We need to use `force: true` because `rule.style` has been updated during onUpdate hook, so `rule.prop()` will not update the CSSOM rule.
        // We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.

        if (nextValue !== prevValue) {
          rule.prop(prop, nextValue, forceUpdateOptions);
        }
      } // Remove props.


      for (var _prop in style) {
        var _nextValue = rule.style[_prop];
        var _prevValue = style[_prop]; // We need to use `force: true` because `rule.style` has been updated during onUpdate hook, so `rule.prop()` will not update the CSSOM rule.
        // We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.

        if (_nextValue == null && _nextValue !== _prevValue) {
          rule.prop(_prop, null, forceUpdateOptions);
        }
      }
    }
  }
  /**
   * Convert rules to a CSS string.
   */
  ;

  _proto.toString = function toString(options) {
    var str = '';
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;

    var _getWhitespaceSymbols = getWhitespaceSymbols(options),
        linebreak = _getWhitespaceSymbols.linebreak;

    for (var index = 0; index < this.index.length; index++) {
      var rule = this.index[index];
      var css = rule.toString(options); // No need to render an empty rule.

      if (!css && !link) continue;
      if (str) str += linebreak;
      str += css;
    }

    return str;
  };

  return RuleList;
}();

var StyleSheet$1 =
/*#__PURE__*/
function () {
  function StyleSheet(styles, options) {
    this.attached = false;
    this.deployed = false;
    this.classes = {};
    this.keyframes = {};
    this.options = _extends({}, options, {
      sheet: this,
      parent: this,
      classes: this.classes,
      keyframes: this.keyframes
    });

    if (options.Renderer) {
      this.renderer = new options.Renderer(this);
    }

    this.rules = new RuleList(this.options);

    for (var name in styles) {
      this.rules.add(name, styles[name]);
    }

    this.rules.process();
  }
  /**
   * Attach renderable to the render tree.
   */


  var _proto = StyleSheet.prototype;

  _proto.attach = function attach() {
    if (this.attached) return this;
    if (this.renderer) this.renderer.attach();
    this.attached = true; // Order is important, because we can't use insertRule API if style element is not attached.

    if (!this.deployed) this.deploy();
    return this;
  }
  /**
   * Remove renderable from render tree.
   */
  ;

  _proto.detach = function detach() {
    if (!this.attached) return this;
    if (this.renderer) this.renderer.detach();
    this.attached = false;
    return this;
  }
  /**
   * Add a rule to the current stylesheet.
   * Will insert a rule also after the stylesheet has been rendered first time.
   */
  ;

  _proto.addRule = function addRule(name, decl, options) {
    var queue = this.queue; // Plugins can create rules.
    // In order to preserve the right order, we need to queue all `.addRule` calls,
    // which happen after the first `rules.add()` call.

    if (this.attached && !queue) this.queue = [];
    var rule = this.rules.add(name, decl, options);
    if (!rule) return null;
    this.options.jss.plugins.onProcessRule(rule);

    if (this.attached) {
      if (!this.deployed) return rule; // Don't insert rule directly if there is no stringified version yet.
      // It will be inserted all together when .attach is called.

      if (queue) queue.push(rule);else {
        this.insertRule(rule);

        if (this.queue) {
          this.queue.forEach(this.insertRule, this);
          this.queue = undefined;
        }
      }
      return rule;
    } // We can't add rules to a detached style node.
    // We will redeploy the sheet once user will attach it.


    this.deployed = false;
    return rule;
  }
  /**
   * Replace a rule in the current stylesheet.
   */
  ;

  _proto.replaceRule = function replaceRule(nameOrSelector, decl, options) {
    var oldRule = this.rules.get(nameOrSelector);
    if (!oldRule) return this.addRule(nameOrSelector, decl, options);
    var newRule = this.rules.replace(nameOrSelector, decl, options);

    if (newRule) {
      this.options.jss.plugins.onProcessRule(newRule);
    }

    if (this.attached) {
      if (!this.deployed) return newRule; // Don't replace / delete rule directly if there is no stringified version yet.
      // It will be inserted all together when .attach is called.

      if (this.renderer) {
        if (!newRule) {
          this.renderer.deleteRule(oldRule);
        } else if (oldRule.renderable) {
          this.renderer.replaceRule(oldRule.renderable, newRule);
        }
      }

      return newRule;
    } // We can't replace rules to a detached style node.
    // We will redeploy the sheet once user will attach it.


    this.deployed = false;
    return newRule;
  }
  /**
   * Insert rule into the StyleSheet
   */
  ;

  _proto.insertRule = function insertRule(rule) {
    if (this.renderer) {
      this.renderer.insertRule(rule);
    }
  }
  /**
   * Create and add rules.
   * Will render also after Style Sheet was rendered the first time.
   */
  ;

  _proto.addRules = function addRules(styles, options) {
    var added = [];

    for (var name in styles) {
      var rule = this.addRule(name, styles[name], options);
      if (rule) added.push(rule);
    }

    return added;
  }
  /**
   * Get a rule by name or selector.
   */
  ;

  _proto.getRule = function getRule(nameOrSelector) {
    return this.rules.get(nameOrSelector);
  }
  /**
   * Delete a rule by name.
   * Returns `true`: if rule has been deleted from the DOM.
   */
  ;

  _proto.deleteRule = function deleteRule(name) {
    var rule = typeof name === 'object' ? name : this.rules.get(name);

    if (!rule || // Style sheet was created without link: true and attached, in this case we
    // won't be able to remove the CSS rule from the DOM.
    this.attached && !rule.renderable) {
      return false;
    }

    this.rules.remove(rule);

    if (this.attached && rule.renderable && this.renderer) {
      return this.renderer.deleteRule(rule.renderable);
    }

    return true;
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  }
  /**
   * Deploy pure CSS string to a renderable.
   */
  ;

  _proto.deploy = function deploy() {
    if (this.renderer) this.renderer.deploy();
    this.deployed = true;
    return this;
  }
  /**
   * Update the function values with a new data.
   */
  ;

  _proto.update = function update() {
    var _this$rules;

    (_this$rules = this.rules).update.apply(_this$rules, arguments);

    return this;
  }
  /**
   * Updates a single rule.
   */
  ;

  _proto.updateOne = function updateOne(rule, data, options) {
    this.rules.updateOne(rule, data, options);
    return this;
  }
  /**
   * Convert rules to a CSS string.
   */
  ;

  _proto.toString = function toString(options) {
    return this.rules.toString(options);
  };

  return StyleSheet;
}();

var PluginsRegistry =
/*#__PURE__*/
function () {
  function PluginsRegistry() {
    this.plugins = {
      internal: [],
      external: []
    };
    this.registry = {};
  }

  var _proto = PluginsRegistry.prototype;

  /**
   * Call `onCreateRule` hooks and return an object if returned by a hook.
   */
  _proto.onCreateRule = function onCreateRule(name, decl, options) {
    for (var i = 0; i < this.registry.onCreateRule.length; i++) {
      var rule = this.registry.onCreateRule[i](name, decl, options);
      if (rule) return rule;
    }

    return null;
  }
  /**
   * Call `onProcessRule` hooks.
   */
  ;

  _proto.onProcessRule = function onProcessRule(rule) {
    if (rule.isProcessed) return;
    var sheet = rule.options.sheet;

    for (var i = 0; i < this.registry.onProcessRule.length; i++) {
      this.registry.onProcessRule[i](rule, sheet);
    }

    if (rule.style) this.onProcessStyle(rule.style, rule, sheet);
    rule.isProcessed = true;
  }
  /**
   * Call `onProcessStyle` hooks.
   */
  ;

  _proto.onProcessStyle = function onProcessStyle(style, rule, sheet) {
    for (var i = 0; i < this.registry.onProcessStyle.length; i++) {
      rule.style = this.registry.onProcessStyle[i](rule.style, rule, sheet);
    }
  }
  /**
   * Call `onProcessSheet` hooks.
   */
  ;

  _proto.onProcessSheet = function onProcessSheet(sheet) {
    for (var i = 0; i < this.registry.onProcessSheet.length; i++) {
      this.registry.onProcessSheet[i](sheet);
    }
  }
  /**
   * Call `onUpdate` hooks.
   */
  ;

  _proto.onUpdate = function onUpdate(data, rule, sheet, options) {
    for (var i = 0; i < this.registry.onUpdate.length; i++) {
      this.registry.onUpdate[i](data, rule, sheet, options);
    }
  }
  /**
   * Call `onChangeValue` hooks.
   */
  ;

  _proto.onChangeValue = function onChangeValue(value, prop, rule) {
    var processedValue = value;

    for (var i = 0; i < this.registry.onChangeValue.length; i++) {
      processedValue = this.registry.onChangeValue[i](processedValue, prop, rule);
    }

    return processedValue;
  }
  /**
   * Register a plugin.
   */
  ;

  _proto.use = function use(newPlugin, options) {
    if (options === void 0) {
      options = {
        queue: 'external'
      };
    }

    var plugins = this.plugins[options.queue]; // Avoids applying same plugin twice, at least based on ref.

    if (plugins.indexOf(newPlugin) !== -1) {
      return;
    }

    plugins.push(newPlugin);
    this.registry = [].concat(this.plugins.external, this.plugins.internal).reduce(function (registry, plugin) {
      for (var name in plugin) {
        if (name in registry) {
          registry[name].push(plugin[name]);
        }
      }

      return registry;
    }, {
      onCreateRule: [],
      onProcessRule: [],
      onProcessStyle: [],
      onProcessSheet: [],
      onChangeValue: [],
      onUpdate: []
    });
  };

  return PluginsRegistry;
}();

/**
 * Sheets registry to access all instances in one place.
 */

var SheetsRegistry =
/*#__PURE__*/
function () {
  function SheetsRegistry() {
    this.registry = [];
  }

  var _proto = SheetsRegistry.prototype;

  /**
   * Register a Style Sheet.
   */
  _proto.add = function add(sheet) {
    var registry = this.registry;
    var index = sheet.options.index;
    if (registry.indexOf(sheet) !== -1) return;

    if (registry.length === 0 || index >= this.index) {
      registry.push(sheet);
      return;
    } // Find a position.


    for (var i = 0; i < registry.length; i++) {
      if (registry[i].options.index > index) {
        registry.splice(i, 0, sheet);
        return;
      }
    }
  }
  /**
   * Reset the registry.
   */
  ;

  _proto.reset = function reset() {
    this.registry = [];
  }
  /**
   * Remove a Style Sheet.
   */
  ;

  _proto.remove = function remove(sheet) {
    var index = this.registry.indexOf(sheet);
    this.registry.splice(index, 1);
  }
  /**
   * Convert all attached sheets to a CSS string.
   */
  ;

  _proto.toString = function toString(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        attached = _ref.attached,
        options = _objectWithoutPropertiesLoose(_ref, ["attached"]);

    var _getWhitespaceSymbols = getWhitespaceSymbols(options),
        linebreak = _getWhitespaceSymbols.linebreak;

    var css = '';

    for (var i = 0; i < this.registry.length; i++) {
      var sheet = this.registry[i];

      if (attached != null && sheet.attached !== attached) {
        continue;
      }

      if (css) css += linebreak;
      css += sheet.toString(options);
    }

    return css;
  };

  _createClass(SheetsRegistry, [{
    key: "index",

    /**
     * Current highest index number.
     */
    get: function get() {
      return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index;
    }
  }]);

  return SheetsRegistry;
}();

/**
 * This is a global sheets registry. Only DomRenderer will add sheets to it.
 * On the server one should use an own SheetsRegistry instance and add the
 * sheets to it, because you need to make sure to create a new registry for
 * each request in order to not leak sheets across requests.
 */

var sheets = new SheetsRegistry();

/* eslint-disable */

/**
 * Now that `globalThis` is available on most platforms
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis#browser_compatibility)
 * we check for `globalThis` first. `globalThis` is necessary for jss
 * to run in Agoric's secure version of JavaScript (SES). Under SES,
 * `globalThis` exists, but `window`, `self`, and `Function('return
 * this')()` are all undefined for security reasons.
 *
 * https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
 */
var globalThis$1 = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' && window.Math === Math ? window : typeof self !== 'undefined' && self.Math === Math ? self : Function('return this')();

var ns = '2f1acc6c3a606b082e5eef5e54414ffb';
if (globalThis$1[ns] == null) globalThis$1[ns] = 0; // Bundle may contain multiple JSS versions at the same time. In order to identify
// the current version with just one short number and use it for classes generation
// we use a counter. Also it is more accurate, because user can manually reevaluate
// the module.

var moduleId = globalThis$1[ns]++;
/**
 * Returns a function which generates unique class names based on counters.
 * When new generator function is created, rule counter is reseted.
 * We need to reset the rule counter for SSR for each request.
 */

var createGenerateId = function createGenerateId(options) {
  if (options === void 0) {
    options = {};
  }

  var ruleCounter = 0;

  var generateId = function generateId(rule, sheet) {
    ruleCounter += 1;

    var jssId = '';
    var prefix = '';

    if (sheet) {
      if (sheet.options.classNamePrefix) {
        prefix = sheet.options.classNamePrefix;
      }

      if (sheet.options.jss.id != null) {
        jssId = String(sheet.options.jss.id);
      }
    }

    if (options.minify) {
      // Using "c" because a number can't be the first char in a class name.
      return "" + (prefix || 'c') + moduleId + jssId + ruleCounter;
    }

    return prefix + rule.key + "-" + moduleId + (jssId ? "-" + jssId : '') + "-" + ruleCounter;
  };

  return generateId;
};

/**
 * Cache the value from the first time a function is called.
 */

var memoize$2 = function memoize(fn) {
  var value;
  return function () {
    if (!value) value = fn();
    return value;
  };
};
/**
 * Get a style property value.
 */


var getPropertyValue = function getPropertyValue(cssRule, prop) {
  try {
    // Support CSSTOM.
    if (cssRule.attributeStyleMap) {
      return cssRule.attributeStyleMap.get(prop);
    }

    return cssRule.style.getPropertyValue(prop);
  } catch (err) {
    // IE may throw if property is unknown.
    return '';
  }
};
/**
 * Set a style property.
 */


var setProperty = function setProperty(cssRule, prop, value) {
  try {
    var cssValue = value;

    if (Array.isArray(value)) {
      cssValue = toCssValue(value, true);

      if (value[value.length - 1] === '!important') {
        cssRule.style.setProperty(prop, cssValue, 'important');
        return true;
      }
    } // Support CSSTOM.


    if (cssRule.attributeStyleMap) {
      cssRule.attributeStyleMap.set(prop, cssValue);
    } else {
      cssRule.style.setProperty(prop, cssValue);
    }
  } catch (err) {
    // IE may throw if property is unknown.
    return false;
  }

  return true;
};
/**
 * Remove a style property.
 */


var removeProperty = function removeProperty(cssRule, prop) {
  try {
    // Support CSSTOM.
    if (cssRule.attributeStyleMap) {
      cssRule.attributeStyleMap.delete(prop);
    } else {
      cssRule.style.removeProperty(prop);
    }
  } catch (err) {
  }
};
/**
 * Set the selector.
 */


var setSelector = function setSelector(cssRule, selectorText) {
  cssRule.selectorText = selectorText; // Return false if setter was not successful.
  // Currently works in chrome only.

  return cssRule.selectorText === selectorText;
};
/**
 * Gets the `head` element upon the first call and caches it.
 * We assume it can't be null.
 */


var getHead = memoize$2(function () {
  return document.querySelector('head');
});
/**
 * Find attached sheet with an index higher than the passed one.
 */

function findHigherSheet(registry, options) {
  for (var i = 0; i < registry.length; i++) {
    var sheet = registry[i];

    if (sheet.attached && sheet.options.index > options.index && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }

  return null;
}
/**
 * Find attached sheet with the highest index.
 */


function findHighestSheet(registry, options) {
  for (var i = registry.length - 1; i >= 0; i--) {
    var sheet = registry[i];

    if (sheet.attached && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }

  return null;
}
/**
 * Find a comment with "jss" inside.
 */


function findCommentNode(text) {
  var head = getHead();

  for (var i = 0; i < head.childNodes.length; i++) {
    var node = head.childNodes[i];

    if (node.nodeType === 8 && node.nodeValue.trim() === text) {
      return node;
    }
  }

  return null;
}
/**
 * Find a node before which we can insert the sheet.
 */


function findPrevNode(options) {
  var registry = sheets.registry;

  if (registry.length > 0) {
    // Try to insert before the next higher sheet.
    var sheet = findHigherSheet(registry, options);

    if (sheet && sheet.renderer) {
      return {
        parent: sheet.renderer.element.parentNode,
        node: sheet.renderer.element
      };
    } // Otherwise insert after the last attached.


    sheet = findHighestSheet(registry, options);

    if (sheet && sheet.renderer) {
      return {
        parent: sheet.renderer.element.parentNode,
        node: sheet.renderer.element.nextSibling
      };
    }
  } // Try to find a comment placeholder if registry is empty.


  var insertionPoint = options.insertionPoint;

  if (insertionPoint && typeof insertionPoint === 'string') {
    var comment = findCommentNode(insertionPoint);

    if (comment) {
      return {
        parent: comment.parentNode,
        node: comment.nextSibling
      };
    } // If user specifies an insertion point and it can't be found in the document -
  }

  return false;
}
/**
 * Insert style element into the DOM.
 */


function insertStyle(style, options) {
  var insertionPoint = options.insertionPoint;
  var nextNode = findPrevNode(options);

  if (nextNode !== false && nextNode.parent) {
    nextNode.parent.insertBefore(style, nextNode.node);
    return;
  } // Works with iframes and any node types.


  if (insertionPoint && typeof insertionPoint.nodeType === 'number') {
    var insertionPointElement = insertionPoint;
    var parentNode = insertionPointElement.parentNode;
    if (parentNode) parentNode.insertBefore(style, insertionPointElement.nextSibling);
    return;
  }

  getHead().appendChild(style);
}
/**
 * Read jss nonce setting from the page if the user has set it.
 */


var getNonce = memoize$2(function () {
  var node = document.querySelector('meta[property="csp-nonce"]');
  return node ? node.getAttribute('content') : null;
});

var _insertRule = function insertRule(container, rule, index) {
  try {
    if ('insertRule' in container) {
      container.insertRule(rule, index);
    } // Keyframes rule.
    else if ('appendRule' in container) {
        container.appendRule(rule);
      }
  } catch (err) {
    return false;
  }

  return container.cssRules[index];
};

var getValidRuleInsertionIndex = function getValidRuleInsertionIndex(container, index) {
  var maxIndex = container.cssRules.length; // In case previous insertion fails, passed index might be wrong

  if (index === undefined || index > maxIndex) {
    // eslint-disable-next-line no-param-reassign
    return maxIndex;
  }

  return index;
};

var createStyle = function createStyle() {
  var el = document.createElement('style'); // Without it, IE will have a broken source order specificity if we
  // insert rules after we insert the style tag.
  // It seems to kick-off the source order specificity algorithm.

  el.textContent = '\n';
  return el;
};

var DomRenderer =
/*#__PURE__*/
function () {
  // Will be empty if link: true option is not set, because
  // it is only for use together with insertRule API.
  function DomRenderer(sheet) {
    this.getPropertyValue = getPropertyValue;
    this.setProperty = setProperty;
    this.removeProperty = removeProperty;
    this.setSelector = setSelector;
    this.hasInsertedRules = false;
    this.cssRules = [];
    // There is no sheet when the renderer is used from a standalone StyleRule.
    if (sheet) sheets.add(sheet);
    this.sheet = sheet;

    var _ref = this.sheet ? this.sheet.options : {},
        media = _ref.media,
        meta = _ref.meta,
        element = _ref.element;

    this.element = element || createStyle();
    this.element.setAttribute('data-jss', '');
    if (media) this.element.setAttribute('media', media);
    if (meta) this.element.setAttribute('data-meta', meta);
    var nonce = getNonce();
    if (nonce) this.element.setAttribute('nonce', nonce);
  }
  /**
   * Insert style element into render tree.
   */


  var _proto = DomRenderer.prototype;

  _proto.attach = function attach() {
    // In the case the element node is external and it is already in the DOM.
    if (this.element.parentNode || !this.sheet) return;
    insertStyle(this.element, this.sheet.options); // When rules are inserted using `insertRule` API, after `sheet.detach().attach()`
    // most browsers create a new CSSStyleSheet, except of all IEs.

    var deployed = Boolean(this.sheet && this.sheet.deployed);

    if (this.hasInsertedRules && deployed) {
      this.hasInsertedRules = false;
      this.deploy();
    }
  }
  /**
   * Remove style element from render tree.
   */
  ;

  _proto.detach = function detach() {
    if (!this.sheet) return;
    var parentNode = this.element.parentNode;
    if (parentNode) parentNode.removeChild(this.element); // In the most browsers, rules inserted using insertRule() API will be lost when style element is removed.
    // Though IE will keep them and we need a consistent behavior.

    if (this.sheet.options.link) {
      this.cssRules = [];
      this.element.textContent = '\n';
    }
  }
  /**
   * Inject CSS string into element.
   */
  ;

  _proto.deploy = function deploy() {
    var sheet = this.sheet;
    if (!sheet) return;

    if (sheet.options.link) {
      this.insertRules(sheet.rules);
      return;
    }

    this.element.textContent = "\n" + sheet.toString() + "\n";
  }
  /**
   * Insert RuleList into an element.
   */
  ;

  _proto.insertRules = function insertRules(rules, nativeParent) {
    for (var i = 0; i < rules.index.length; i++) {
      this.insertRule(rules.index[i], i, nativeParent);
    }
  }
  /**
   * Insert a rule into element.
   */
  ;

  _proto.insertRule = function insertRule(rule, index, nativeParent) {
    if (nativeParent === void 0) {
      nativeParent = this.element.sheet;
    }

    if (rule.rules) {
      var parent = rule;
      var latestNativeParent = nativeParent;

      if (rule.type === 'conditional' || rule.type === 'keyframes') {
        var _insertionIndex = getValidRuleInsertionIndex(nativeParent, index); // We need to render the container without children first.


        latestNativeParent = _insertRule(nativeParent, parent.toString({
          children: false
        }), _insertionIndex);

        if (latestNativeParent === false) {
          return false;
        }

        this.refCssRule(rule, _insertionIndex, latestNativeParent);
      }

      this.insertRules(parent.rules, latestNativeParent);
      return latestNativeParent;
    }

    var ruleStr = rule.toString();
    if (!ruleStr) return false;
    var insertionIndex = getValidRuleInsertionIndex(nativeParent, index);

    var nativeRule = _insertRule(nativeParent, ruleStr, insertionIndex);

    if (nativeRule === false) {
      return false;
    }

    this.hasInsertedRules = true;
    this.refCssRule(rule, insertionIndex, nativeRule);
    return nativeRule;
  };

  _proto.refCssRule = function refCssRule(rule, index, cssRule) {
    rule.renderable = cssRule; // We only want to reference the top level rules, deleteRule API doesn't support removing nested rules
    // like rules inside media queries or keyframes

    if (rule.options.parent instanceof StyleSheet$1) {
      this.cssRules[index] = cssRule;
    }
  }
  /**
   * Delete a rule.
   */
  ;

  _proto.deleteRule = function deleteRule(cssRule) {
    var sheet = this.element.sheet;
    var index = this.indexOf(cssRule);
    if (index === -1) return false;
    sheet.deleteRule(index);
    this.cssRules.splice(index, 1);
    return true;
  }
  /**
   * Get index of a CSS Rule.
   */
  ;

  _proto.indexOf = function indexOf(cssRule) {
    return this.cssRules.indexOf(cssRule);
  }
  /**
   * Generate a new CSS rule and replace the existing one.
   */
  ;

  _proto.replaceRule = function replaceRule(cssRule, rule) {
    var index = this.indexOf(cssRule);
    if (index === -1) return false;
    this.element.sheet.deleteRule(index);
    this.cssRules.splice(index, 1);
    return this.insertRule(rule, index);
  }
  /**
   * Get all rules elements.
   */
  ;

  _proto.getRules = function getRules() {
    return this.element.sheet.cssRules;
  };

  return DomRenderer;
}();

var instanceCounter = 0;

var Jss =
/*#__PURE__*/
function () {
  function Jss(options) {
    this.id = instanceCounter++;
    this.version = "10.8.1";
    this.plugins = new PluginsRegistry();
    this.options = {
      id: {
        minify: false
      },
      createGenerateId: createGenerateId,
      Renderer: isBrowser$1 ? DomRenderer : null,
      plugins: []
    };
    this.generateId = createGenerateId({
      minify: false
    });

    for (var i = 0; i < plugins$1.length; i++) {
      this.plugins.use(plugins$1[i], {
        queue: 'internal'
      });
    }

    this.setup(options);
  }
  /**
   * Prepares various options, applies plugins.
   * Should not be used twice on the same instance, because there is no plugins
   * deduplication logic.
   */


  var _proto = Jss.prototype;

  _proto.setup = function setup(options) {
    if (options === void 0) {
      options = {};
    }

    if (options.createGenerateId) {
      this.options.createGenerateId = options.createGenerateId;
    }

    if (options.id) {
      this.options.id = _extends({}, this.options.id, options.id);
    }

    if (options.createGenerateId || options.id) {
      this.generateId = this.options.createGenerateId(this.options.id);
    }

    if (options.insertionPoint != null) this.options.insertionPoint = options.insertionPoint;

    if ('Renderer' in options) {
      this.options.Renderer = options.Renderer;
    } // eslint-disable-next-line prefer-spread


    if (options.plugins) this.use.apply(this, options.plugins);
    return this;
  }
  /**
   * Create a Style Sheet.
   */
  ;

  _proto.createStyleSheet = function createStyleSheet(styles, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        index = _options.index;

    if (typeof index !== 'number') {
      index = sheets.index === 0 ? 0 : sheets.index + 1;
    }

    var sheet = new StyleSheet$1(styles, _extends({}, options, {
      jss: this,
      generateId: options.generateId || this.generateId,
      insertionPoint: this.options.insertionPoint,
      Renderer: this.options.Renderer,
      index: index
    }));
    this.plugins.onProcessSheet(sheet);
    return sheet;
  }
  /**
   * Detach the Style Sheet and remove it from the registry.
   */
  ;

  _proto.removeStyleSheet = function removeStyleSheet(sheet) {
    sheet.detach();
    sheets.remove(sheet);
    return this;
  }
  /**
   * Create a rule without a Style Sheet.
   * [Deprecated] will be removed in the next major version.
   */
  ;

  _proto.createRule = function createRule$1(name, style, options) {
    if (style === void 0) {
      style = {};
    }

    if (options === void 0) {
      options = {};
    }

    // Enable rule without name for inline styles.
    if (typeof name === 'object') {
      return this.createRule(undefined, name, style);
    }

    var ruleOptions = _extends({}, options, {
      name: name,
      jss: this,
      Renderer: this.options.Renderer
    });

    if (!ruleOptions.generateId) ruleOptions.generateId = this.generateId;
    if (!ruleOptions.classes) ruleOptions.classes = {};
    if (!ruleOptions.keyframes) ruleOptions.keyframes = {};

    var rule = createRule(name, style, ruleOptions);

    if (rule) this.plugins.onProcessRule(rule);
    return rule;
  }
  /**
   * Register plugin. Passed function will be invoked with a rule instance.
   */
  ;

  _proto.use = function use() {
    var _this = this;

    for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
      plugins[_key] = arguments[_key];
    }

    plugins.forEach(function (plugin) {
      _this.plugins.use(plugin);
    });
    return this;
  };

  return Jss;
}();

var createJss = function createJss(options) {
  return new Jss(options);
};

/**
* Export a constant indicating if this browser has CSSTOM support.
* https://developers.google.com/web/updates/2018/03/cssom
*/
var hasCSSTOMSupport = typeof CSS === 'object' && CSS != null && 'number' in CSS;

/**
 * Extracts a styles object with only props that contain function values.
 */
function getDynamicStyles(styles) {
  var to = null;

  for (var key in styles) {
    var value = styles[key];
    var type = typeof value;

    if (type === 'function') {
      if (!to) to = {};
      to[key] = value;
    } else if (type === 'object' && value !== null && !Array.isArray(value)) {
      var extracted = getDynamicStyles(value);

      if (extracted) {
        if (!to) to = {};
        to[key] = extracted;
      }
    }
  }

  return to;
}

/**
 * A better abstraction over CSS.
 *
 * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
 * @website https://github.com/cssinjs/jss
 * @license MIT
 */
createJss();

var now = Date.now();
var fnValuesNs = "fnValues" + now;
var fnRuleNs = "fnStyle" + ++now;

var functionPlugin = function functionPlugin() {
  return {
    onCreateRule: function onCreateRule(name, decl, options) {
      if (typeof decl !== 'function') return null;
      var rule = createRule(name, {}, options);
      rule[fnRuleNs] = decl;
      return rule;
    },
    onProcessStyle: function onProcessStyle(style, rule) {
      // We need to extract function values from the declaration, so that we can keep core unaware of them.
      // We need to do that only once.
      // We don't need to extract functions on each style update, since this can happen only once.
      // We don't support function values inside of function rules.
      if (fnValuesNs in rule || fnRuleNs in rule) return style;
      var fnValues = {};

      for (var prop in style) {
        var value = style[prop];
        if (typeof value !== 'function') continue;
        delete style[prop];
        fnValues[prop] = value;
      }

      rule[fnValuesNs] = fnValues;
      return style;
    },
    onUpdate: function onUpdate(data, rule, sheet, options) {
      var styleRule = rule;
      var fnRule = styleRule[fnRuleNs]; // If we have a style function, the entire rule is dynamic and style object
      // will be returned from that function.

      if (fnRule) {
        // Empty object will remove all currently defined props
        // in case function rule returns a falsy value.
        styleRule.style = fnRule(data) || {};
      }

      var fnValues = styleRule[fnValuesNs]; // If we have a fn values map, it is a rule with function values.

      if (fnValues) {
        for (var _prop in fnValues) {
          styleRule.prop(_prop, fnValues[_prop](data), options);
        }
      }
    }
  };
};

var functions = functionPlugin;

var at$1 = '@global';
var atPrefix = '@global ';

var GlobalContainerRule =
/*#__PURE__*/
function () {
  function GlobalContainerRule(key, styles, options) {
    this.type = 'global';
    this.at = at$1;
    this.isProcessed = false;
    this.key = key;
    this.options = options;
    this.rules = new RuleList(_extends({}, options, {
      parent: this
    }));

    for (var selector in styles) {
      this.rules.add(selector, styles[selector]);
    }

    this.rules.process();
  }
  /**
   * Get a rule.
   */


  var _proto = GlobalContainerRule.prototype;

  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  }
  /**
   * Create and register rule, run plugins.
   */
  ;

  _proto.addRule = function addRule(name, style, options) {
    var rule = this.rules.add(name, style, options);
    if (rule) this.options.jss.plugins.onProcessRule(rule);
    return rule;
  }
  /**
   * Replace rule, run plugins.
   */
  ;

  _proto.replaceRule = function replaceRule(name, style, options) {
    var newRule = this.rules.replace(name, style, options);
    if (newRule) this.options.jss.plugins.onProcessRule(newRule);
    return newRule;
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  }
  /**
   * Generates a CSS string.
   */
  ;

  _proto.toString = function toString() {
    return this.rules.toString();
  };

  return GlobalContainerRule;
}();

var GlobalPrefixedRule =
/*#__PURE__*/
function () {
  function GlobalPrefixedRule(key, style, options) {
    this.type = 'global';
    this.at = at$1;
    this.isProcessed = false;
    this.key = key;
    this.options = options;
    var selector = key.substr(atPrefix.length);
    this.rule = options.jss.createRule(selector, style, _extends({}, options, {
      parent: this
    }));
  }

  var _proto2 = GlobalPrefixedRule.prototype;

  _proto2.toString = function toString(options) {
    return this.rule ? this.rule.toString(options) : '';
  };

  return GlobalPrefixedRule;
}();

var separatorRegExp$1 = /\s*,\s*/g;

function addScope(selector, scope) {
  var parts = selector.split(separatorRegExp$1);
  var scoped = '';

  for (var i = 0; i < parts.length; i++) {
    scoped += scope + " " + parts[i].trim();
    if (parts[i + 1]) scoped += ', ';
  }

  return scoped;
}

function handleNestedGlobalContainerRule(rule, sheet) {
  var options = rule.options,
      style = rule.style;
  var rules = style ? style[at$1] : null;
  if (!rules) return;

  for (var name in rules) {
    sheet.addRule(name, rules[name], _extends({}, options, {
      selector: addScope(name, rule.selector)
    }));
  }

  delete style[at$1];
}

function handlePrefixedGlobalRule(rule, sheet) {
  var options = rule.options,
      style = rule.style;

  for (var prop in style) {
    if (prop[0] !== '@' || prop.substr(0, at$1.length) !== at$1) continue;
    var selector = addScope(prop.substr(at$1.length), rule.selector);
    sheet.addRule(selector, style[prop], _extends({}, options, {
      selector: selector
    }));
    delete style[prop];
  }
}
/**
 * Convert nested rules to separate, remove them from original styles.
 */


function jssGlobal() {
  function onCreateRule(name, styles, options) {
    if (!name) return null;

    if (name === at$1) {
      return new GlobalContainerRule(name, styles, options);
    }

    if (name[0] === '@' && name.substr(0, atPrefix.length) === atPrefix) {
      return new GlobalPrefixedRule(name, styles, options);
    }

    var parent = options.parent;

    if (parent) {
      if (parent.type === 'global' || parent.options.parent && parent.options.parent.type === 'global') {
        options.scoped = false;
      }
    }

    if (!options.selector && options.scoped === false) {
      options.selector = name;
    }

    return null;
  }

  function onProcessRule(rule, sheet) {
    if (rule.type !== 'style' || !sheet) return;
    handleNestedGlobalContainerRule(rule, sheet);
    handlePrefixedGlobalRule(rule, sheet);
  }

  return {
    onCreateRule: onCreateRule,
    onProcessRule: onProcessRule
  };
}

var separatorRegExp = /\s*,\s*/g;
var parentRegExp = /&/g;
var refRegExp = /\$([\w-]+)/g;
/**
 * Convert nested rules to separate, remove them from original styles.
 */

function jssNested() {
  // Get a function to be used for $ref replacement.
  function getReplaceRef(container, sheet) {
    return function (match, key) {
      var rule = container.getRule(key) || sheet && sheet.getRule(key);

      if (rule) {
        return rule.selector;
      }
      return key;
    };
  }

  function replaceParentRefs(nestedProp, parentProp) {
    var parentSelectors = parentProp.split(separatorRegExp);
    var nestedSelectors = nestedProp.split(separatorRegExp);
    var result = '';

    for (var i = 0; i < parentSelectors.length; i++) {
      var parent = parentSelectors[i];

      for (var j = 0; j < nestedSelectors.length; j++) {
        var nested = nestedSelectors[j];
        if (result) result += ', '; // Replace all & by the parent or prefix & with the parent.

        result += nested.indexOf('&') !== -1 ? nested.replace(parentRegExp, parent) : parent + " " + nested;
      }
    }

    return result;
  }

  function getOptions(rule, container, prevOptions) {
    // Options has been already created, now we only increase index.
    if (prevOptions) return _extends({}, prevOptions, {
      index: prevOptions.index + 1
    });
    var nestingLevel = rule.options.nestingLevel;
    nestingLevel = nestingLevel === undefined ? 1 : nestingLevel + 1;

    var options = _extends({}, rule.options, {
      nestingLevel: nestingLevel,
      index: container.indexOf(rule) + 1 // We don't need the parent name to be set options for chlid.

    });

    delete options.name;
    return options;
  }

  function onProcessStyle(style, rule, sheet) {
    if (rule.type !== 'style') return style;
    var styleRule = rule;
    var container = styleRule.options.parent;
    var options;
    var replaceRef;

    for (var prop in style) {
      var isNested = prop.indexOf('&') !== -1;
      var isNestedConditional = prop[0] === '@';
      if (!isNested && !isNestedConditional) continue;
      options = getOptions(styleRule, container, options);

      if (isNested) {
        var selector = replaceParentRefs(prop, styleRule.selector); // Lazily create the ref replacer function just once for
        // all nested rules within the sheet.

        if (!replaceRef) replaceRef = getReplaceRef(container, sheet); // Replace all $refs.

        selector = selector.replace(refRegExp, replaceRef);
        var name = styleRule.key + "-" + prop;
        container.replaceRule(name, style[prop], _extends({}, options, {
          selector: selector
        }));
      } else if (isNestedConditional) {
        // Place conditional right after the parent rule to ensure right ordering.
        container.addRule(prop, {}, options).addRule(styleRule.key, style[prop], {
          selector: styleRule.selector
        });
      }

      delete style[prop];
    }

    return style;
  }

  return {
    onProcessStyle: onProcessStyle
  };
}

/* eslint-disable no-var, prefer-template */
var uppercasePattern = /[A-Z]/g;
var msPattern = /^ms-/;
var cache$2 = {};

function toHyphenLower(match) {
  return '-' + match.toLowerCase()
}

function hyphenateStyleName(name) {
  if (cache$2.hasOwnProperty(name)) {
    return cache$2[name]
  }

  var hName = name.replace(uppercasePattern, toHyphenLower);
  return (cache$2[name] = msPattern.test(hName) ? '-' + hName : hName)
}

/**
 * Convert camel cased property names to dash separated.
 */

function convertCase(style) {
  var converted = {};

  for (var prop in style) {
    var key = prop.indexOf('--') === 0 ? prop : hyphenateStyleName(prop);
    converted[key] = style[prop];
  }

  if (style.fallbacks) {
    if (Array.isArray(style.fallbacks)) converted.fallbacks = style.fallbacks.map(convertCase);else converted.fallbacks = convertCase(style.fallbacks);
  }

  return converted;
}
/**
 * Allow camel cased property names by converting them back to dasherized.
 */


function camelCase() {
  function onProcessStyle(style) {
    if (Array.isArray(style)) {
      // Handle rules like @font-face, which can have multiple styles in an array
      for (var index = 0; index < style.length; index++) {
        style[index] = convertCase(style[index]);
      }

      return style;
    }

    return convertCase(style);
  }

  function onChangeValue(value, prop, rule) {
    if (prop.indexOf('--') === 0) {
      return value;
    }

    var hyphenatedProp = hyphenateStyleName(prop); // There was no camel case in place

    if (prop === hyphenatedProp) return value;
    rule.prop(hyphenatedProp, value); // Core will ignore that property value we set the proper one above.

    return null;
  }

  return {
    onProcessStyle: onProcessStyle,
    onChangeValue: onChangeValue
  };
}

var px = hasCSSTOMSupport && CSS ? CSS.px : 'px';
var ms = hasCSSTOMSupport && CSS ? CSS.ms : 'ms';
var percent = hasCSSTOMSupport && CSS ? CSS.percent : '%';
/**
 * Generated jss-plugin-default-unit CSS property units
 */

var defaultUnits = {
  // Animation properties
  'animation-delay': ms,
  'animation-duration': ms,
  // Background properties
  'background-position': px,
  'background-position-x': px,
  'background-position-y': px,
  'background-size': px,
  // Border Properties
  border: px,
  'border-bottom': px,
  'border-bottom-left-radius': px,
  'border-bottom-right-radius': px,
  'border-bottom-width': px,
  'border-left': px,
  'border-left-width': px,
  'border-radius': px,
  'border-right': px,
  'border-right-width': px,
  'border-top': px,
  'border-top-left-radius': px,
  'border-top-right-radius': px,
  'border-top-width': px,
  'border-width': px,
  'border-block': px,
  'border-block-end': px,
  'border-block-end-width': px,
  'border-block-start': px,
  'border-block-start-width': px,
  'border-block-width': px,
  'border-inline': px,
  'border-inline-end': px,
  'border-inline-end-width': px,
  'border-inline-start': px,
  'border-inline-start-width': px,
  'border-inline-width': px,
  'border-start-start-radius': px,
  'border-start-end-radius': px,
  'border-end-start-radius': px,
  'border-end-end-radius': px,
  // Margin properties
  margin: px,
  'margin-bottom': px,
  'margin-left': px,
  'margin-right': px,
  'margin-top': px,
  'margin-block': px,
  'margin-block-end': px,
  'margin-block-start': px,
  'margin-inline': px,
  'margin-inline-end': px,
  'margin-inline-start': px,
  // Padding properties
  padding: px,
  'padding-bottom': px,
  'padding-left': px,
  'padding-right': px,
  'padding-top': px,
  'padding-block': px,
  'padding-block-end': px,
  'padding-block-start': px,
  'padding-inline': px,
  'padding-inline-end': px,
  'padding-inline-start': px,
  // Mask properties
  'mask-position-x': px,
  'mask-position-y': px,
  'mask-size': px,
  // Width and height properties
  height: px,
  width: px,
  'min-height': px,
  'max-height': px,
  'min-width': px,
  'max-width': px,
  // Position properties
  bottom: px,
  left: px,
  top: px,
  right: px,
  inset: px,
  'inset-block': px,
  'inset-block-end': px,
  'inset-block-start': px,
  'inset-inline': px,
  'inset-inline-end': px,
  'inset-inline-start': px,
  // Shadow properties
  'box-shadow': px,
  'text-shadow': px,
  // Column properties
  'column-gap': px,
  'column-rule': px,
  'column-rule-width': px,
  'column-width': px,
  // Font and text properties
  'font-size': px,
  'font-size-delta': px,
  'letter-spacing': px,
  'text-decoration-thickness': px,
  'text-indent': px,
  'text-stroke': px,
  'text-stroke-width': px,
  'word-spacing': px,
  // Motion properties
  motion: px,
  'motion-offset': px,
  // Outline properties
  outline: px,
  'outline-offset': px,
  'outline-width': px,
  // Perspective properties
  perspective: px,
  'perspective-origin-x': percent,
  'perspective-origin-y': percent,
  // Transform properties
  'transform-origin': percent,
  'transform-origin-x': percent,
  'transform-origin-y': percent,
  'transform-origin-z': percent,
  // Transition properties
  'transition-delay': ms,
  'transition-duration': ms,
  // Alignment properties
  'vertical-align': px,
  'flex-basis': px,
  // Some random properties
  'shape-margin': px,
  size: px,
  gap: px,
  // Grid properties
  grid: px,
  'grid-gap': px,
  'row-gap': px,
  'grid-row-gap': px,
  'grid-column-gap': px,
  'grid-template-rows': px,
  'grid-template-columns': px,
  'grid-auto-rows': px,
  'grid-auto-columns': px,
  // Not existing properties.
  // Used to avoid issues with jss-plugin-expand integration.
  'box-shadow-x': px,
  'box-shadow-y': px,
  'box-shadow-blur': px,
  'box-shadow-spread': px,
  'font-line-height': px,
  'text-shadow-x': px,
  'text-shadow-y': px,
  'text-shadow-blur': px
};

/**
 * Clones the object and adds a camel cased property version.
 */

function addCamelCasedVersion(obj) {
  var regExp = /(-[a-z])/g;

  var replace = function replace(str) {
    return str[1].toUpperCase();
  };

  var newObj = {};

  for (var key in obj) {
    newObj[key] = obj[key];
    newObj[key.replace(regExp, replace)] = obj[key];
  }

  return newObj;
}

var units = addCamelCasedVersion(defaultUnits);
/**
 * Recursive deep style passing function
 */

function iterate(prop, value, options) {
  if (value == null) return value;

  if (Array.isArray(value)) {
    for (var i = 0; i < value.length; i++) {
      value[i] = iterate(prop, value[i], options);
    }
  } else if (typeof value === 'object') {
    if (prop === 'fallbacks') {
      for (var innerProp in value) {
        value[innerProp] = iterate(innerProp, value[innerProp], options);
      }
    } else {
      for (var _innerProp in value) {
        value[_innerProp] = iterate(prop + "-" + _innerProp, value[_innerProp], options);
      }
    } // eslint-disable-next-line no-restricted-globals

  } else if (typeof value === 'number' && isNaN(value) === false) {
    var unit = options[prop] || units[prop]; // Add the unit if available, except for the special case of 0px.

    if (unit && !(value === 0 && unit === px)) {
      return typeof unit === 'function' ? unit(value).toString() : "" + value + unit;
    }

    return value.toString();
  }

  return value;
}
/**
 * Add unit to numeric values.
 */


function defaultUnit(options) {
  if (options === void 0) {
    options = {};
  }

  var camelCasedOptions = addCamelCasedVersion(options);

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;

    for (var prop in style) {
      style[prop] = iterate(prop, style[prop], camelCasedOptions);
    }

    return style;
  }

  function onChangeValue(value, prop) {
    return iterate(prop, value, camelCasedOptions);
  }

  return {
    onProcessStyle: onProcessStyle,
    onChangeValue: onChangeValue
  };
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

// Export javascript style and css style vendor prefixes.
var js = '';
var css$1 = '';
var vendor = '';
var browser = '';
var isTouch = isBrowser$1 && 'ontouchstart' in document.documentElement; // We should not do anything if required serverside.

if (isBrowser$1) {
  // Order matters. We need to check Webkit the last one because
  // other vendors use to add Webkit prefixes to some properties
  var jsCssMap = {
    Moz: '-moz-',
    ms: '-ms-',
    O: '-o-',
    Webkit: '-webkit-'
  };

  var _document$createEleme = document.createElement('p'),
      style$2 = _document$createEleme.style;

  var testProp = 'Transform';

  for (var key in jsCssMap) {
    if (key + testProp in style$2) {
      js = key;
      css$1 = jsCssMap[key];
      break;
    }
  } // Correctly detect the Edge browser.


  if (js === 'Webkit' && 'msHyphens' in style$2) {
    js = 'ms';
    css$1 = jsCssMap.ms;
    browser = 'edge';
  } // Correctly detect the Safari browser.


  if (js === 'Webkit' && '-apple-trailing-word' in style$2) {
    vendor = 'apple';
  }
}
/**
 * Vendor prefix string for the current browser.
 *
 * @type {{js: String, css: String, vendor: String, browser: String}}
 * @api public
 */


var prefix = {
  js: js,
  css: css$1,
  vendor: vendor,
  browser: browser,
  isTouch: isTouch
};

/**
 * Test if a keyframe at-rule should be prefixed or not
 *
 * @param {String} vendor prefix string for the current browser.
 * @return {String}
 * @api public
 */

function supportedKeyframes(key) {
  // Keyframes is already prefixed. e.g. key = '@-webkit-keyframes a'
  if (key[1] === '-') return key; // No need to prefix IE/Edge. Older browsers will ignore unsupported rules.
  // https://caniuse.com/#search=keyframes

  if (prefix.js === 'ms') return key;
  return "@" + prefix.css + "keyframes" + key.substr(10);
}

// https://caniuse.com/#search=appearance

var appearence = {
  noPrefill: ['appearance'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'appearance') return false;
    if (prefix.js === 'ms') return "-webkit-" + prop;
    return prefix.css + prop;
  }
};

// https://caniuse.com/#search=color-adjust

var colorAdjust = {
  noPrefill: ['color-adjust'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'color-adjust') return false;
    if (prefix.js === 'Webkit') return prefix.css + "print-" + prop;
    return prop;
  }
};

var regExp = /[-\s]+(.)?/g;
/**
 * Replaces the letter with the capital letter
 *
 * @param {String} match
 * @param {String} c
 * @return {String}
 * @api private
 */

function toUpper(match, c) {
  return c ? c.toUpperCase() : '';
}
/**
 * Convert dash separated strings to camel-cased.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */


function camelize(str) {
  return str.replace(regExp, toUpper);
}

/**
 * Convert dash separated strings to pascal cased.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

function pascalize(str) {
  return camelize("-" + str);
}

// but we can use a longhand property instead.
// https://caniuse.com/#search=mask

var mask = {
  noPrefill: ['mask'],
  supportedProperty: function supportedProperty(prop, style) {
    if (!/^mask/.test(prop)) return false;

    if (prefix.js === 'Webkit') {
      var longhand = 'mask-image';

      if (camelize(longhand) in style) {
        return prop;
      }

      if (prefix.js + pascalize(longhand) in style) {
        return prefix.css + prop;
      }
    }

    return prop;
  }
};

// https://caniuse.com/#search=text-orientation

var textOrientation = {
  noPrefill: ['text-orientation'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'text-orientation') return false;

    if (prefix.vendor === 'apple' && !prefix.isTouch) {
      return prefix.css + prop;
    }

    return prop;
  }
};

// https://caniuse.com/#search=transform

var transform$1 = {
  noPrefill: ['transform'],
  supportedProperty: function supportedProperty(prop, style, options) {
    if (prop !== 'transform') return false;

    if (options.transform) {
      return prop;
    }

    return prefix.css + prop;
  }
};

// https://caniuse.com/#search=transition

var transition = {
  noPrefill: ['transition'],
  supportedProperty: function supportedProperty(prop, style, options) {
    if (prop !== 'transition') return false;

    if (options.transition) {
      return prop;
    }

    return prefix.css + prop;
  }
};

// https://caniuse.com/#search=writing-mode

var writingMode = {
  noPrefill: ['writing-mode'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'writing-mode') return false;

    if (prefix.js === 'Webkit' || prefix.js === 'ms' && prefix.browser !== 'edge') {
      return prefix.css + prop;
    }

    return prop;
  }
};

// https://caniuse.com/#search=user-select

var userSelect = {
  noPrefill: ['user-select'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'user-select') return false;

    if (prefix.js === 'Moz' || prefix.js === 'ms' || prefix.vendor === 'apple') {
      return prefix.css + prop;
    }

    return prop;
  }
};

// https://caniuse.com/#search=multicolumn
// https://github.com/postcss/autoprefixer/issues/491
// https://github.com/postcss/autoprefixer/issues/177

var breakPropsOld = {
  supportedProperty: function supportedProperty(prop, style) {
    if (!/^break-/.test(prop)) return false;

    if (prefix.js === 'Webkit') {
      var jsProp = "WebkitColumn" + pascalize(prop);
      return jsProp in style ? prefix.css + "column-" + prop : false;
    }

    if (prefix.js === 'Moz') {
      var _jsProp = "page" + pascalize(prop);

      return _jsProp in style ? "page-" + prop : false;
    }

    return false;
  }
};

// See https://github.com/postcss/autoprefixer/issues/324.

var inlineLogicalOld = {
  supportedProperty: function supportedProperty(prop, style) {
    if (!/^(border|margin|padding)-inline/.test(prop)) return false;
    if (prefix.js === 'Moz') return prop;
    var newProp = prop.replace('-inline', '');
    return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
  }
};

// Camelization is required because we can't test using.
// CSS syntax for e.g. in FF.

var unprefixed = {
  supportedProperty: function supportedProperty(prop, style) {
    return camelize(prop) in style ? prop : false;
  }
};

var prefixed = {
  supportedProperty: function supportedProperty(prop, style) {
    var pascalized = pascalize(prop); // Return custom CSS variable without prefixing.

    if (prop[0] === '-') return prop; // Return already prefixed value without prefixing.

    if (prop[0] === '-' && prop[1] === '-') return prop;
    if (prefix.js + pascalized in style) return prefix.css + prop; // Try webkit fallback.

    if (prefix.js !== 'Webkit' && "Webkit" + pascalized in style) return "-webkit-" + prop;
    return false;
  }
};

// https://caniuse.com/#search=scroll-snap

var scrollSnap = {
  supportedProperty: function supportedProperty(prop) {
    if (prop.substring(0, 11) !== 'scroll-snap') return false;

    if (prefix.js === 'ms') {
      return "" + prefix.css + prop;
    }

    return prop;
  }
};

// https://caniuse.com/#search=overscroll-behavior

var overscrollBehavior = {
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'overscroll-behavior') return false;

    if (prefix.js === 'ms') {
      return prefix.css + "scroll-chaining";
    }

    return prop;
  }
};

var propMap = {
  'flex-grow': 'flex-positive',
  'flex-shrink': 'flex-negative',
  'flex-basis': 'flex-preferred-size',
  'justify-content': 'flex-pack',
  order: 'flex-order',
  'align-items': 'flex-align',
  'align-content': 'flex-line-pack' // 'align-self' is handled by 'align-self' plugin.

}; // Support old flex spec from 2012.

var flex2012 = {
  supportedProperty: function supportedProperty(prop, style) {
    var newProp = propMap[prop];
    if (!newProp) return false;
    return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
  }
};

var propMap$1 = {
  flex: 'box-flex',
  'flex-grow': 'box-flex',
  'flex-direction': ['box-orient', 'box-direction'],
  order: 'box-ordinal-group',
  'align-items': 'box-align',
  'flex-flow': ['box-orient', 'box-direction'],
  'justify-content': 'box-pack'
};
var propKeys = Object.keys(propMap$1);

var prefixCss = function prefixCss(p) {
  return prefix.css + p;
}; // Support old flex spec from 2009.


var flex2009 = {
  supportedProperty: function supportedProperty(prop, style, _ref) {
    var multiple = _ref.multiple;

    if (propKeys.indexOf(prop) > -1) {
      var newProp = propMap$1[prop];

      if (!Array.isArray(newProp)) {
        return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
      }

      if (!multiple) return false;

      for (var i = 0; i < newProp.length; i++) {
        if (!(prefix.js + pascalize(newProp[0]) in style)) {
          return false;
        }
      }

      return newProp.map(prefixCss);
    }

    return false;
  }
};

// plugins = [
//   ...plugins,
//    breakPropsOld,
//    inlineLogicalOld,
//    unprefixed,
//    prefixed,
//    scrollSnap,
//    flex2012,
//    flex2009
// ]
// Plugins without 'noPrefill' value, going last.
// 'flex-*' plugins should be at the bottom.
// 'flex2009' going after 'flex2012'.
// 'prefixed' going after 'unprefixed'

var plugins = [appearence, colorAdjust, mask, textOrientation, transform$1, transition, writingMode, userSelect, breakPropsOld, inlineLogicalOld, unprefixed, prefixed, scrollSnap, overscrollBehavior, flex2012, flex2009];
var propertyDetectors = plugins.filter(function (p) {
  return p.supportedProperty;
}).map(function (p) {
  return p.supportedProperty;
});
var noPrefill = plugins.filter(function (p) {
  return p.noPrefill;
}).reduce(function (a, p) {
  a.push.apply(a, _toConsumableArray(p.noPrefill));
  return a;
}, []);

var el$1;
var cache = {};

if (isBrowser$1) {
  el$1 = document.createElement('p'); // We test every property on vendor prefix requirement.
  // Once tested, result is cached. It gives us up to 70% perf boost.
  // http://jsperf.com/element-style-object-access-vs-plain-object
  //
  // Prefill cache with known css properties to reduce amount of
  // properties we need to feature test at runtime.
  // http://davidwalsh.name/vendor-prefix

  var computed = window.getComputedStyle(document.documentElement, '');

  for (var key$1 in computed) {
    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(key$1)) cache[computed[key$1]] = computed[key$1];
  } // Properties that cannot be correctly detected using the
  // cache prefill method.


  noPrefill.forEach(function (x) {
    return delete cache[x];
  });
}
/**
 * Test if a property is supported, returns supported property with vendor
 * prefix if required. Returns `false` if not supported.
 *
 * @param {String} prop dash separated
 * @param {Object} [options]
 * @return {String|Boolean}
 * @api public
 */


function supportedProperty(prop, options) {
  if (options === void 0) {
    options = {};
  }

  // For server-side rendering.
  if (!el$1) return prop; // Remove cache for benchmark tests or return property from the cache.

  if (cache[prop] != null) {
    return cache[prop];
  } // Check if 'transition' or 'transform' natively supported in browser.


  if (prop === 'transition' || prop === 'transform') {
    options[prop] = prop in el$1.style;
  } // Find a plugin for current prefix property.


  for (var i = 0; i < propertyDetectors.length; i++) {
    cache[prop] = propertyDetectors[i](prop, el$1.style, options); // Break loop, if value found.

    if (cache[prop]) break;
  } // Reset styles for current property.
  // Firefox can even throw an error for invalid properties, e.g., "0".


  try {
    el$1.style[prop] = '';
  } catch (err) {
    return false;
  }

  return cache[prop];
}

var cache$1 = {};
var transitionProperties = {
  transition: 1,
  'transition-property': 1,
  '-webkit-transition': 1,
  '-webkit-transition-property': 1
};
var transPropsRegExp = /(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g;
var el$1$1;
/**
 * Returns prefixed value transition/transform if needed.
 *
 * @param {String} match
 * @param {String} p1
 * @param {String} p2
 * @return {String}
 * @api private
 */

function prefixTransitionCallback(match, p1, p2) {
  if (p1 === 'var') return 'var';
  if (p1 === 'all') return 'all';
  if (p2 === 'all') return ', all';
  var prefixedValue = p1 ? supportedProperty(p1) : ", " + supportedProperty(p2);
  if (!prefixedValue) return p1 || p2;
  return prefixedValue;
}

if (isBrowser$1) el$1$1 = document.createElement('p');
/**
 * Returns prefixed value if needed. Returns `false` if value is not supported.
 *
 * @param {String} property
 * @param {String} value
 * @return {String|Boolean}
 * @api public
 */

function supportedValue(property, value) {
  // For server-side rendering.
  var prefixedValue = value;
  if (!el$1$1 || property === 'content') return value; // It is a string or a number as a string like '1'.
  // We want only prefixable values here.
  // eslint-disable-next-line no-restricted-globals

  if (typeof prefixedValue !== 'string' || !isNaN(parseInt(prefixedValue, 10))) {
    return prefixedValue;
  } // Create cache key for current value.


  var cacheKey = property + prefixedValue; // Remove cache for benchmark tests or return value from cache.

  if (cache$1[cacheKey] != null) {
    return cache$1[cacheKey];
  } // IE can even throw an error in some cases, for e.g. style.content = 'bar'.


  try {
    // Test value as it is.
    el$1$1.style[property] = prefixedValue;
  } catch (err) {
    // Return false if value not supported.
    cache$1[cacheKey] = false;
    return false;
  } // If 'transition' or 'transition-property' property.


  if (transitionProperties[property]) {
    prefixedValue = prefixedValue.replace(transPropsRegExp, prefixTransitionCallback);
  } else if (el$1$1.style[property] === '') {
    // Value with a vendor prefix.
    prefixedValue = prefix.css + prefixedValue; // Hardcode test to convert "flex" to "-ms-flexbox" for IE10.

    if (prefixedValue === '-ms-flex') el$1$1.style[property] = '-ms-flexbox'; // Test prefixed value.

    el$1$1.style[property] = prefixedValue; // Return false if value not supported.

    if (el$1$1.style[property] === '') {
      cache$1[cacheKey] = false;
      return false;
    }
  } // Reset styles for current property.


  el$1$1.style[property] = ''; // Write current value to cache.

  cache$1[cacheKey] = prefixedValue;
  return cache$1[cacheKey];
}

/**
 * Add vendor prefix to a property name when needed.
 */

function jssVendorPrefixer() {
  function onProcessRule(rule) {
    if (rule.type === 'keyframes') {
      var atRule = rule;
      atRule.at = supportedKeyframes(atRule.at);
    }
  }

  function prefixStyle(style) {
    for (var prop in style) {
      var value = style[prop];

      if (prop === 'fallbacks' && Array.isArray(value)) {
        style[prop] = value.map(prefixStyle);
        continue;
      }

      var changeProp = false;
      var supportedProp = supportedProperty(prop);
      if (supportedProp && supportedProp !== prop) changeProp = true;
      var changeValue = false;
      var supportedValue$1 = supportedValue(supportedProp, toCssValue(value));
      if (supportedValue$1 && supportedValue$1 !== value) changeValue = true;

      if (changeProp || changeValue) {
        if (changeProp) delete style[prop];
        style[supportedProp || prop] = supportedValue$1 || value;
      }
    }

    return style;
  }

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;
    return prefixStyle(style);
  }

  function onChangeValue(value, prop) {
    return supportedValue(prop, toCssValue(value)) || value;
  }

  return {
    onProcessRule: onProcessRule,
    onProcessStyle: onProcessStyle,
    onChangeValue: onChangeValue
  };
}

/**
 * Sort props by length.
 */
function jssPropsSort() {
  var sort = function sort(prop0, prop1) {
    if (prop0.length === prop1.length) {
      return prop0 > prop1 ? 1 : -1;
    }

    return prop0.length - prop1.length;
  };

  return {
    onProcessStyle: function onProcessStyle(style, rule) {
      if (rule.type !== 'style') return style;
      var newStyle = {};
      var props = Object.keys(style).sort(sort);

      for (var i = 0; i < props.length; i++) {
        newStyle[props[i]] = style[props[i]];
      }

      return newStyle;
    }
  };
}

function jssPreset() {
  return {
    plugins: [functions(), jssGlobal(), jssNested(), camelCase(), defaultUnit(), // Disable the vendor prefixer server-side, it does nothing.
    // This way, we can get a performance boost.
    // In the documentation, we are using `autoprefixer` to solve this problem.
    typeof window === 'undefined' ? null : jssVendorPrefixer(), jssPropsSort()]
  };
}

function mergeClasses(options = {}) {
  const {
    baseClasses,
    newClasses,
    Component
  } = options;

  if (!newClasses) {
    return baseClasses;
  }

  const nextClasses = _extends({}, baseClasses);

  Object.keys(newClasses).forEach(key => {

    if (newClasses[key]) {
      nextClasses[key] = `${baseClasses[key]} ${newClasses[key]}`;
    }
  });
  return nextClasses;
}

// Used https://github.com/thinkloop/multi-key-cache as inspiration
const multiKeyStore = {
  set: (cache, key1, key2, value) => {
    let subCache = cache.get(key1);

    if (!subCache) {
      subCache = new Map();
      cache.set(key1, subCache);
    }

    subCache.set(key2, value);
  },
  get: (cache, key1, key2) => {
    const subCache = cache.get(key1);
    return subCache ? subCache.get(key2) : undefined;
  },
  delete: (cache, key1, key2) => {
    const subCache = cache.get(key1);
    subCache.delete(key2);
  }
};
var multiKeyStore$1 = multiKeyStore;

const jss = createJss(jssPreset()); // Use a singleton or the provided one by the context.
//
// The counter-based approach doesn't tolerate any mistake.
// It's much safer to use the same counter everywhere.

const generateClassName = createGenerateClassName(); // Exported for test purposes

const sheetsManager = new Map();
const defaultOptions = {
  disableGeneration: false,
  generateClassName,
  jss,
  sheetsCache: null,
  sheetsManager,
  sheetsRegistry: null
};
const StylesContext = /*#__PURE__*/e__default.createContext(defaultOptions);

/* eslint-disable import/prefer-default-export */
// Global index counter to preserve source order.
// We create the style sheet during the creation of the component,
// children are handled after the parents, so the order of style elements would be parent->child.
// It is a problem though when a parent passes a className
// which needs to override any child's styles.
// StyleSheet of the child has a higher specificity, because of the source order.
// So our solution is to render sheets them in the reverse order child->sheet, so
// that parent has a higher specificity.
let indexCounter = -1e9;
function increment() {
  indexCounter += 1;

  return indexCounter;
}

const _excluded$V = ["variant"];

function isEmpty$4(string) {
  return string.length === 0;
}
/**
 * Generates string classKey based on the properties provided. It starts with the
 * variant if defined, and then it appends all other properties in alphabetical order.
 * @param {object} props - the properties for which the classKey should be created
 */


function propsToClassKey$1(props) {
  const {
    variant
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$V);

  let classKey = variant || '';
  Object.keys(other).sort().forEach(key => {
    if (key === 'color') {
      classKey += isEmpty$4(classKey) ? props[key] : capitalize(props[key]);
    } else {
      classKey += `${isEmpty$4(classKey) ? key : capitalize(key)}${capitalize(props[key].toString())}`;
    }
  });
  return classKey;
}

// We use the same empty object to ref count the styles that don't need a theme object.
const noopTheme = {};
var noopTheme$1 = noopTheme;

function getStylesCreator(stylesOrCreator) {
  const themingEnabled = typeof stylesOrCreator === 'function';

  return {
    create: (theme, name) => {
      let styles;

      try {
        styles = themingEnabled ? stylesOrCreator(theme) : stylesOrCreator;
      } catch (err) {

        throw err;
      }

      if (!name || !theme.components || !theme.components[name] || !theme.components[name].styleOverrides && !theme.components[name].variants) {
        return styles;
      }

      const overrides = theme.components[name].styleOverrides || {};
      const variants = theme.components[name].variants || [];

      const stylesWithOverrides = _extends({}, styles);

      Object.keys(overrides).forEach(key => {

        stylesWithOverrides[key] = deepmerge(stylesWithOverrides[key] || {}, overrides[key]);
      });
      variants.forEach(definition => {
        const classKey = propsToClassKey$1(definition.props);
        stylesWithOverrides[classKey] = deepmerge(stylesWithOverrides[classKey] || {}, definition.style);
      });
      return stylesWithOverrides;
    },
    options: {}
  };
}

const _excluded$U = ["name", "classNamePrefix", "Component", "defaultTheme"];

function getClasses({
  state,
  stylesOptions
}, classes, Component) {
  if (stylesOptions.disableGeneration) {
    return classes || {};
  }

  if (!state.cacheClasses) {
    state.cacheClasses = {
      // Cache for the finalized classes value.
      value: null,
      // Cache for the last used classes prop pointer.
      lastProp: null,
      // Cache for the last used rendered classes pointer.
      lastJSS: {}
    };
  } // Tracks if either the rendered classes or classes prop has changed,
  // requiring the generation of a new finalized classes object.


  let generate = false;

  if (state.classes !== state.cacheClasses.lastJSS) {
    state.cacheClasses.lastJSS = state.classes;
    generate = true;
  }

  if (classes !== state.cacheClasses.lastProp) {
    state.cacheClasses.lastProp = classes;
    generate = true;
  }

  if (generate) {
    state.cacheClasses.value = mergeClasses({
      baseClasses: state.cacheClasses.lastJSS,
      newClasses: classes,
      Component
    });
  }

  return state.cacheClasses.value;
}

function attach({
  state,
  theme,
  stylesOptions,
  stylesCreator,
  name
}, props) {
  if (stylesOptions.disableGeneration) {
    return;
  }

  let sheetManager = multiKeyStore$1.get(stylesOptions.sheetsManager, stylesCreator, theme);

  if (!sheetManager) {
    sheetManager = {
      refs: 0,
      staticSheet: null,
      dynamicStyles: null
    };
    multiKeyStore$1.set(stylesOptions.sheetsManager, stylesCreator, theme, sheetManager);
  }

  const options = _extends({}, stylesCreator.options, stylesOptions, {
    theme,
    flip: typeof stylesOptions.flip === 'boolean' ? stylesOptions.flip : theme.direction === 'rtl'
  });

  options.generateId = options.serverGenerateClassName || options.generateClassName;
  const sheetsRegistry = stylesOptions.sheetsRegistry;

  if (sheetManager.refs === 0) {
    let staticSheet;

    if (stylesOptions.sheetsCache) {
      staticSheet = multiKeyStore$1.get(stylesOptions.sheetsCache, stylesCreator, theme);
    }

    const styles = stylesCreator.create(theme, name);

    if (!staticSheet) {
      staticSheet = stylesOptions.jss.createStyleSheet(styles, _extends({
        link: false
      }, options));
      staticSheet.attach();

      if (stylesOptions.sheetsCache) {
        multiKeyStore$1.set(stylesOptions.sheetsCache, stylesCreator, theme, staticSheet);
      }
    }

    if (sheetsRegistry) {
      sheetsRegistry.add(staticSheet);
    }

    sheetManager.staticSheet = staticSheet;
    sheetManager.dynamicStyles = getDynamicStyles(styles);
  }

  if (sheetManager.dynamicStyles) {
    const dynamicSheet = stylesOptions.jss.createStyleSheet(sheetManager.dynamicStyles, _extends({
      link: true
    }, options));
    dynamicSheet.update(props);
    dynamicSheet.attach();
    state.dynamicSheet = dynamicSheet;
    state.classes = mergeClasses({
      baseClasses: sheetManager.staticSheet.classes,
      newClasses: dynamicSheet.classes
    });

    if (sheetsRegistry) {
      sheetsRegistry.add(dynamicSheet);
    }
  } else {
    state.classes = sheetManager.staticSheet.classes;
  }

  sheetManager.refs += 1;
}

function update({
  state
}, props) {
  if (state.dynamicSheet) {
    state.dynamicSheet.update(props);
  }
}

function detach({
  state,
  theme,
  stylesOptions,
  stylesCreator
}) {
  if (stylesOptions.disableGeneration) {
    return;
  }

  const sheetManager = multiKeyStore$1.get(stylesOptions.sheetsManager, stylesCreator, theme);
  sheetManager.refs -= 1;
  const sheetsRegistry = stylesOptions.sheetsRegistry;

  if (sheetManager.refs === 0) {
    multiKeyStore$1.delete(stylesOptions.sheetsManager, stylesCreator, theme);
    stylesOptions.jss.removeStyleSheet(sheetManager.staticSheet);

    if (sheetsRegistry) {
      sheetsRegistry.remove(sheetManager.staticSheet);
    }
  }

  if (state.dynamicSheet) {
    stylesOptions.jss.removeStyleSheet(state.dynamicSheet);

    if (sheetsRegistry) {
      sheetsRegistry.remove(state.dynamicSheet);
    }
  }
}

function useSynchronousEffect(func, values) {
  const key = e__default.useRef([]);
  let output; // Store "generation" key. Just returns a new object every time

  const currentKey = e__default.useMemo(() => ({}), values); // eslint-disable-line react-hooks/exhaustive-deps
  // "the first render", or "memo dropped the value"

  if (key.current !== currentKey) {
    key.current = currentKey;
    output = func();
  }

  e__default.useEffect(() => () => {
    if (output) {
      output();
    }
  }, [currentKey] // eslint-disable-line react-hooks/exhaustive-deps
  );
}

function makeStyles(stylesOrCreator, options = {}) {
  const {
    // alias for classNamePrefix, if provided will listen to theme (required for theme.components[name].styleOverrides)
    name,
    // Help with debuggability.
    classNamePrefix: classNamePrefixOption,
    Component,
    defaultTheme = noopTheme$1
  } = options,
        stylesOptions2 = _objectWithoutPropertiesLoose(options, _excluded$U);

  const stylesCreator = getStylesCreator(stylesOrCreator);
  const classNamePrefix = name || classNamePrefixOption || 'makeStyles';
  stylesCreator.options = {
    index: increment(),
    name,
    meta: classNamePrefix,
    classNamePrefix
  };

  const useStyles = (props = {}) => {
    const theme = useTheme$3() || defaultTheme;

    const stylesOptions = _extends({}, e__default.useContext(StylesContext), stylesOptions2);

    const instance = e__default.useRef();
    const shouldUpdate = e__default.useRef();
    useSynchronousEffect(() => {
      const current = {
        name,
        state: {},
        stylesCreator,
        stylesOptions,
        theme
      };
      attach(current, props);
      shouldUpdate.current = false;
      instance.current = current;
      return () => {
        detach(current);
      };
    }, [theme, stylesCreator]);
    e__default.useEffect(() => {
      if (shouldUpdate.current) {
        update(instance.current, props);
      }

      shouldUpdate.current = true;
    });
    const classes = getClasses(instance.current, props.classes, Component);

    return classes;
  };

  return useStyles;
}

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c$1=b?Symbol.for("react.element"):60103,d$1=b?Symbol.for("react.portal"):60106,e$1=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g$1=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k$2=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m$1=b?Symbol.for("react.concurrent_mode"):60111,n$1=b?Symbol.for("react.forward_ref"):60112,p$1=b?Symbol.for("react.suspense"):60113,q$1=b?
Symbol.for("react.suspense_list"):60120,r$1=b?Symbol.for("react.memo"):60115,t$1=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w$1=b?Symbol.for("react.fundamental"):60117,x$2=b?Symbol.for("react.responder"):60118,y$2=b?Symbol.for("react.scope"):60119;
function z$2(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c$1:switch(a=a.type,a){case l:case m$1:case e$1:case g$1:case f:case p$1:return a;default:switch(a=a&&a.$$typeof,a){case k$2:case n$1:case t$1:case r$1:case h:return a;default:return u}}case d$1:return u}}}function A$2(a){return z$2(a)===m$1}var AsyncMode=l;var ConcurrentMode=m$1;var ContextConsumer=k$2;var ContextProvider=h;var Element$1=c$1;var ForwardRef=n$1;var Fragment=e$1;var Lazy=t$1;var Memo=r$1;var Portal$2=d$1;
var Profiler=g$1;var StrictMode=f;var Suspense=p$1;var isAsyncMode=function(a){return A$2(a)||z$2(a)===l};var isConcurrentMode=A$2;var isContextConsumer=function(a){return z$2(a)===k$2};var isContextProvider=function(a){return z$2(a)===h};var isElement$1=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c$1};var isForwardRef=function(a){return z$2(a)===n$1};var isFragment=function(a){return z$2(a)===e$1};var isLazy=function(a){return z$2(a)===t$1};
var isMemo=function(a){return z$2(a)===r$1};var isPortal=function(a){return z$2(a)===d$1};var isProfiler=function(a){return z$2(a)===g$1};var isStrictMode=function(a){return z$2(a)===f};var isSuspense=function(a){return z$2(a)===p$1};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e$1||a===m$1||a===g$1||a===f||a===p$1||a===q$1||"object"===typeof a&&null!==a&&(a.$$typeof===t$1||a.$$typeof===r$1||a.$$typeof===h||a.$$typeof===k$2||a.$$typeof===n$1||a.$$typeof===w$1||a.$$typeof===x$2||a.$$typeof===y$2||a.$$typeof===v)};var typeOf=z$2;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element$1,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal$2,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement$1,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs = createCommonjsModule(function (module) {

{
  module.exports = reactIs_production_min;
}
});

var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

createCommonjsModule(function (module) {
function _extends() {
  module.exports = _extends = Object.assign || function (target) {
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

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

function memoize$1(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var isPropValid = /* #__PURE__ */memoize$1(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  tag.setAttribute('data-s', '');
  return tag;
}

var StyleSheet = /*#__PURE__*/function () {
  function StyleSheet(options) {
    var _this = this;

    this._insertTag = function (tag) {
      var before;

      if (_this.tags.length === 0) {
        before = _this.prepend ? _this.container.firstChild : _this.before;
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }

      _this.container.insertBefore(tag, before);

      _this.tags.push(tag);
    };

    this.isSpeedy = options.speedy === undefined ? "production" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }

    var tag = this.tags[this.tags.length - 1];

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode && tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };

  return StyleSheet;
}();

var e="-ms-";var r="-moz-";var a="-webkit-";var c="comm";var n="rule";var t="decl";var i="@import";var p="@keyframes";var k$1=Math.abs;var d=String.fromCharCode;function m(e,r){return (((r<<2^z$1(e,0))<<2^z$1(e,1))<<2^z$1(e,2))<<2^z$1(e,3)}function g(e){return e.trim()}function x$1(e,r){return (e=r.exec(e))?e[0]:e}function y$1(e,r,a){return e.replace(r,a)}function j$1(e,r){return e.indexOf(r)}function z$1(e,r){return e.charCodeAt(r)|0}function C(e,r,a){return e.slice(r,a)}function A$1(e){return e.length}function M$1(e){return e.length}function O$1(e,r){return r.push(e),e}function S(e,r){return e.map(r).join("")}var q=1;var B$1=1;var D$1=0;var E=0;var F$1=0;var G="";function H$1(e,r,a,c,n,t,s){return {value:e,root:r,parent:a,type:c,props:n,children:t,line:q,column:B$1,length:s,return:""}}function I$1(e,r,a){return H$1(e,r.root,r.parent,a,r.props,r.children,0)}function J(){return F$1}function K(){F$1=E>0?z$1(G,--E):0;if(B$1--,F$1===10)B$1=1,q--;return F$1}function L$1(){F$1=E<D$1?z$1(G,E++):0;if(B$1++,F$1===10)B$1=1,q++;return F$1}function N$1(){return z$1(G,E)}function P$1(){return E}function Q(e,r){return C(G,e,r)}function R$1(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function T(e){return q=B$1=1,D$1=A$1(G=e),E=0,[]}function U(e){return G="",e}function V$1(e){return g(Q(E-1,_$3(e===91?e+2:e===40?e+1:e)))}function X(e){while(F$1=N$1())if(F$1<33)L$1();else break;return R$1(e)>2||R$1(F$1)>3?"":" "}function Z(e,r){while(--r&&L$1())if(F$1<48||F$1>102||F$1>57&&F$1<65||F$1>70&&F$1<97)break;return Q(e,P$1()+(r<6&&N$1()==32&&L$1()==32))}function _$3(e){while(L$1())switch(F$1){case e:return E;case 34:case 39:return _$3(e===34||e===39?e:F$1);case 40:if(e===41)_$3(e);break;case 92:L$1();break}return E}function ee(e,r){while(L$1())if(e+F$1===47+10)break;else if(e+F$1===42+42&&N$1()===47)break;return "/*"+Q(r,E-1)+"*"+d(e===47?e:L$1())}function re(e){while(!R$1(N$1()))L$1();return Q(e,E)}function ae(e){return U(ce("",null,null,null,[""],e=T(e),0,[0],e))}function ce(e,r,a,c,n,t,s,u,i){var f=0;var o=0;var l=s;var v=0;var h=0;var p=0;var b=1;var w=1;var $=1;var k=0;var m="";var g=n;var x=t;var j=c;var z=m;while(w)switch(p=k,k=L$1()){case 34:case 39:case 91:case 40:z+=V$1(k);break;case 9:case 10:case 13:case 32:z+=X(p);break;case 92:z+=Z(P$1()-1,7);continue;case 47:switch(N$1()){case 42:case 47:O$1(te(ee(L$1(),P$1()),r,a),i);break;default:z+="/";}break;case 123*b:u[f++]=A$1(z)*$;case 125*b:case 59:case 0:switch(k){case 0:case 125:w=0;case 59+o:if(h>0&&A$1(z)-l)O$1(h>32?se(z+";",c,a,l-1):se(y$1(z," ","")+";",c,a,l-2),i);break;case 59:z+=";";default:O$1(j=ne(z,r,a,f,o,n,u,m,g=[],x=[],l),t);if(k===123)if(o===0)ce(z,r,j,j,g,t,l,u,x);else switch(v){case 100:case 109:case 115:ce(e,j,j,c&&O$1(ne(e,j,j,0,0,n,u,m,n,g=[],l),x),n,x,l,u,c?g:x);break;default:ce(z,j,j,j,[""],x,l,u,x);}}f=o=h=0,b=$=1,m=z="",l=s;break;case 58:l=1+A$1(z),h=p;default:if(b<1)if(k==123)--b;else if(k==125&&b++==0&&K()==125)continue;switch(z+=d(k),k*b){case 38:$=o>0?1:(z+="\f",-1);break;case 44:u[f++]=(A$1(z)-1)*$,$=1;break;case 64:if(N$1()===45)z+=V$1(L$1());v=N$1(),o=A$1(m=z+=re(P$1())),k++;break;case 45:if(p===45&&A$1(z)==2)b=0;}}return t}function ne(e,r,a,c,t,s,u,i,f,o,l){var v=t-1;var h=t===0?s:[""];var p=M$1(h);for(var b=0,w=0,$=0;b<c;++b)for(var d=0,m=C(e,v+1,v=k$1(w=u[b])),x=e;d<p;++d)if(x=g(w>0?h[d]+" "+m:y$1(m,/&\f/g,h[d])))f[$++]=x;return H$1(e,r,a,t===0?n:i,f,o,l)}function te(e,r,a){return H$1(e,r,a,c,d(J()),C(e,2,-2),0)}function se(e,r,a,c){return H$1(e,r,a,t,C(e,0,c),C(e,c+1,-1),c)}function ue$1(c,n){switch(m(c,n)){case 5103:return a+"print-"+c+c;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return a+c+c;case 5349:case 4246:case 4810:case 6968:case 2756:return a+c+r+c+e+c+c;case 6828:case 4268:return a+c+e+c+c;case 6165:return a+c+e+"flex-"+c+c;case 5187:return a+c+y$1(c,/(\w+).+(:[^]+)/,a+"box-$1$2"+e+"flex-$1$2")+c;case 5443:return a+c+e+"flex-item-"+y$1(c,/flex-|-self/,"")+c;case 4675:return a+c+e+"flex-line-pack"+y$1(c,/align-content|flex-|-self/,"")+c;case 5548:return a+c+e+y$1(c,"shrink","negative")+c;case 5292:return a+c+e+y$1(c,"basis","preferred-size")+c;case 6060:return a+"box-"+y$1(c,"-grow","")+a+c+e+y$1(c,"grow","positive")+c;case 4554:return a+y$1(c,/([^-])(transform)/g,"$1"+a+"$2")+c;case 6187:return y$1(y$1(y$1(c,/(zoom-|grab)/,a+"$1"),/(image-set)/,a+"$1"),c,"")+c;case 5495:case 3959:return y$1(c,/(image-set\([^]*)/,a+"$1"+"$`$1");case 4968:return y$1(y$1(c,/(.+:)(flex-)?(.*)/,a+"box-pack:$3"+e+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+a+c+c;case 4095:case 3583:case 4068:case 2532:return y$1(c,/(.+)-inline(.+)/,a+"$1$2")+c;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(A$1(c)-1-n>6)switch(z$1(c,n+1)){case 109:if(z$1(c,n+4)!==45)break;case 102:return y$1(c,/(.+:)(.+)-([^]+)/,"$1"+a+"$2-$3"+"$1"+r+(z$1(c,n+3)==108?"$3":"$2-$3"))+c;case 115:return ~j$1(c,"stretch")?ue$1(y$1(c,"stretch","fill-available"),n)+c:c}break;case 4949:if(z$1(c,n+1)!==115)break;case 6444:switch(z$1(c,A$1(c)-3-(~j$1(c,"!important")&&10))){case 107:return y$1(c,":",":"+a)+c;case 101:return y$1(c,/(.+:)([^;!]+)(;|!.+)?/,"$1"+a+(z$1(c,14)===45?"inline-":"")+"box$3"+"$1"+a+"$2$3"+"$1"+e+"$2box$3")+c}break;case 5936:switch(z$1(c,n+11)){case 114:return a+c+e+y$1(c,/[svh]\w+-[tblr]{2}/,"tb")+c;case 108:return a+c+e+y$1(c,/[svh]\w+-[tblr]{2}/,"tb-rl")+c;case 45:return a+c+e+y$1(c,/[svh]\w+-[tblr]{2}/,"lr")+c}return a+c+e+c+c}return c}function ie(e,r){var a="";var c=M$1(e);for(var n=0;n<c;n++)a+=r(e[n],n,e,r)||"";return a}function fe$1(e,r,a,s){switch(e.type){case i:case t:return e.return=e.return||e.value;case c:return "";case n:e.value=e.props.join(",");}return A$1(a=ie(e.children,s))?e.return=e.value+"{"+a+"}":""}function oe(e){var r=M$1(e);return function(a,c,n,t){var s="";for(var u=0;u<r;u++)s+=e[u](a,c,n,t)||"";return s}}function le(e){return function(r){if(!r.root)if(r=r.return)e(r);}}function ve$1(c,s,u,i){if(!c.return)switch(c.type){case t:c.return=ue$1(c.value,c.length);break;case p:return ie([I$1(y$1(c.value,"@","@"+a),c,"")],i);case n:if(c.length)return S(c.props,(function(n){switch(x$1(n,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ie([I$1(y$1(n,/:(read-\w+)/,":"+r+"$1"),c,"")],i);case"::placeholder":return ie([I$1(y$1(n,/:(plac\w+)/,":"+a+"input-$1"),c,""),I$1(y$1(n,/:(plac\w+)/,":"+r+"$1"),c,""),I$1(y$1(n,/:(plac\w+)/,e+"input-$1"),c,"")],i)}return ""}))}}

var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
  var previous = 0;
  var character = 0;

  while (true) {
    previous = character;
    character = N$1(); // &\f

    if (previous === 38 && character === 12) {
      points[index] = 1;
    }

    if (R$1(character)) {
      break;
    }

    L$1();
  }

  return Q(begin, E);
};

var toRules = function toRules(parsed, points) {
  // pretend we've started with a comma
  var index = -1;
  var character = 44;

  do {
    switch (R$1(character)) {
      case 0:
        // &\f
        if (character === 38 && N$1() === 12) {
          // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
          // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
          // and when it should just concatenate the outer and inner selectors
          // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
          points[index] = 1;
        }

        parsed[index] += identifierWithPointTracking(E - 1, points, index);
        break;

      case 2:
        parsed[index] += V$1(character);
        break;

      case 4:
        // comma
        if (character === 44) {
          // colon
          parsed[++index] = N$1() === 58 ? '&\f' : '';
          points[index] = parsed[index].length;
          break;
        }

      // fallthrough

      default:
        parsed[index] += d(character);
    }
  } while (character = L$1());

  return parsed;
};

var getRules = function getRules(value, points) {
  return U(toRules(T(value), points));
}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11


var fixedElements = /* #__PURE__ */new WeakMap();
var compat = function compat(element) {
  if (element.type !== 'rule' || !element.parent || // .length indicates if this rule contains pseudo or not
  !element.length) {
    return;
  }

  var value = element.value,
      parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;

  while (parent.type !== 'rule') {
    parent = parent.parent;
    if (!parent) return;
  } // short-circuit for the simplest case


  if (element.props.length === 1 && value.charCodeAt(0) !== 58
  /* colon */
  && !fixedElements.get(parent)) {
    return;
  } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
  // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"


  if (isImplicitRule) {
    return;
  }

  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;

  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel(element) {
  if (element.type === 'decl') {
    var value = element.value;

    if ( // charcode for l
    value.charCodeAt(0) === 108 && // charcode for b
    value.charCodeAt(2) === 98) {
      // this ignores label
      element["return"] = '';
      element.value = '';
    }
  }
};

var defaultStylisPlugins = [ve$1];

var createCache = function createCache(options) {
  var key = options.key;

  if ( key === 'css') {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
    // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
    // note this very very intentionally targets all style elements regardless of the key to ensure
    // that creating a cache works inside of render of a React component

    Array.prototype.forEach.call(ssrStyles, function (node) {
      // we want to only move elements which have a space in the data-emotion attribute value
      // because that indicates that it is an Emotion 11 server-side rendered style elements
      // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
      // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
      // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
      // will not result in the Emotion 10 styles being destroyed
      var dataEmotionAttribute = node.getAttribute('data-emotion');

      if (dataEmotionAttribute.indexOf(' ') === -1) {
        return;
      }
      document.head.appendChild(node);
      node.setAttribute('data-s', '');
    });
  }

  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;

  var inserted = {}; // $FlowFixMe

  var container;
  var nodesToHydrate = [];

  {
    container = options.container || document.head;
    Array.prototype.forEach.call( // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node) {
      var attrib = node.getAttribute("data-emotion").split(' '); // $FlowFixMe

      for (var i = 1; i < attrib.length; i++) {
        inserted[attrib[i]] = true;
      }

      nodesToHydrate.push(node);
    });
  }

  var _insert;

  var omnipresentPlugins = [compat, removeLabel];

  {
    var currentSheet;
    var finalizingPlugins = [fe$1, le(function (rule) {
      currentSheet.insert(rule);
    })];
    var serializer = oe(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));

    var stylis = function stylis(styles) {
      return ie(ae(styles), serializer);
    };

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;

      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);

      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  }

  var cache = {
    key: key,
    sheet: new StyleSheet({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};

var isBrowser = "object" !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false ) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }

  if (cache.inserted[serialized.name] === undefined) {
    var current = serialized;

    do {
      cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);

      current = current.next;
    } while (current !== undefined);
  }
};

/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = /* #__PURE__ */memoize$1(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result);
        }

        break;
      }
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];
  return cached !== undefined ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "production" !== 'production') {
          throw new Error('Component selectors can only be used in conjunction with @emotion/babel-plugin.');
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);

    if (stringMode) {

      styles += strings[i];
    }
  }


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = murmur2(styles) + identifierName;

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};

var EmotionCacheContext = /* #__PURE__ */createContext( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? /* #__PURE__ */createCache({
  key: 'css'
}) : null);

EmotionCacheContext.Provider;

var withEmotionCache = function withEmotionCache(func) {
  // $FlowFixMe
  return /*#__PURE__*/forwardRef(function (props, ref) {
    // the cache will never be null in the browser
    var cache = useContext(EmotionCacheContext);
    return func(props, cache, ref);
  });
};

var ThemeContext = /* #__PURE__ */createContext({});

// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag

var Global = /* #__PURE__ */withEmotionCache(function (props, cache) {

  var styles = props.styles;
  var serialized = serializeStyles([styles], undefined, useContext(ThemeContext));
  // but it is based on a constant that will never change at runtime
  // it's effectively like having two implementations and switching them out
  // so it's not actually breaking anything


  var sheetRef = useRef();
  useLayoutEffect(function () {
    var key = cache.key + "-global";
    var sheet = new StyleSheet({
      key: key,
      nonce: cache.sheet.nonce,
      container: cache.sheet.container,
      speedy: cache.sheet.isSpeedy
    });
    var rehydrating = false; // $FlowFixMe

    var node = document.querySelector("style[data-emotion=\"" + key + " " + serialized.name + "\"]");

    if (cache.sheet.tags.length) {
      sheet.before = cache.sheet.tags[0];
    }

    if (node !== null) {
      rehydrating = true; // clear the hash so this node won't be recognizable as rehydratable by other <Global/>s

      node.setAttribute('data-emotion', key);
      sheet.hydrate([node]);
    }

    sheetRef.current = [sheet, rehydrating];
    return function () {
      sheet.flush();
    };
  }, [cache]);
  useLayoutEffect(function () {
    var sheetRefCurrent = sheetRef.current;
    var sheet = sheetRefCurrent[0],
        rehydrating = sheetRefCurrent[1];

    if (rehydrating) {
      sheetRefCurrent[1] = false;
      return;
    }

    if (serialized.next !== undefined) {
      // insert keyframes
      insertStyles(cache, serialized.next, true);
    }

    if (sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
      sheet.before = element;
      sheet.flush();
    }

    cache.insert("", serialized, sheet, false);
  }, [cache, serialized.name]);
  return null;
});

function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return serializeStyles(args);
}

var keyframes = function keyframes() {
  var insertable = css.apply(void 0, arguments);
  var name = "animation-" + insertable.name; // $FlowFixMe

  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};

var testOmitPropsOnStringTag = isPropValid;

var testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
  return key !== 'theme';
};

var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
  return typeof tag === 'string' && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};
var composeShouldForwardProps = function composeShouldForwardProps(tag, options, isReal) {
  var shouldForwardProp;

  if (options) {
    var optionsShouldForwardProp = options.shouldForwardProp;
    shouldForwardProp = tag.__emotion_forwardProp && optionsShouldForwardProp ? function (propName) {
      return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
    } : optionsShouldForwardProp;
  }

  if (typeof shouldForwardProp !== 'function' && isReal) {
    shouldForwardProp = tag.__emotion_forwardProp;
  }

  return shouldForwardProp;
};

var createStyled$1 = function createStyled(tag, options) {

  var isReal = tag.__emotion_real === tag;
  var baseTag = isReal && tag.__emotion_base || tag;
  var identifierName;
  var targetClassName;

  if (options !== undefined) {
    identifierName = options.label;
    targetClassName = options.target;
  }

  var shouldForwardProp = composeShouldForwardProps(tag, options, isReal);
  var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp('as');
  return function () {
    var args = arguments;
    var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];

    if (identifierName !== undefined) {
      styles.push("label:" + identifierName + ";");
    }

    if (args[0] == null || args[0].raw === undefined) {
      styles.push.apply(styles, args);
    } else {

      styles.push(args[0][0]);
      var len = args.length;
      var i = 1;

      for (; i < len; i++) {

        styles.push(args[i], args[0][i]);
      }
    } // $FlowFixMe: we need to cast StatelessFunctionalComponent to our PrivateStyledComponent class


    var Styled = withEmotionCache(function (props, cache, ref) {
      var finalTag = shouldUseAs && props.as || baseTag;
      var className = '';
      var classInterpolations = [];
      var mergedProps = props;

      if (props.theme == null) {
        mergedProps = {};

        for (var key in props) {
          mergedProps[key] = props[key];
        }

        mergedProps.theme = useContext(ThemeContext);
      }

      if (typeof props.className === 'string') {
        className = getRegisteredStyles(cache.registered, classInterpolations, props.className);
      } else if (props.className != null) {
        className = props.className + " ";
      }

      var serialized = serializeStyles(styles.concat(classInterpolations), cache.registered, mergedProps);
      insertStyles(cache, serialized, typeof finalTag === 'string');
      className += cache.key + "-" + serialized.name;

      if (targetClassName !== undefined) {
        className += " " + targetClassName;
      }

      var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? getDefaultShouldForwardProp(finalTag) : defaultShouldForwardProp;
      var newProps = {};

      for (var _key in props) {
        if (shouldUseAs && _key === 'as') continue;

        if ( // $FlowFixMe
        finalShouldForwardProp(_key)) {
          newProps[_key] = props[_key];
        }
      }

      newProps.className = className;
      newProps.ref = ref;
      var ele = /*#__PURE__*/createElement(finalTag, newProps);

      return ele;
    });
    Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";
    Styled.defaultProps = tag.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles;
    Styled.__emotion_forwardProp = shouldForwardProp;
    Object.defineProperty(Styled, 'toString', {
      value: function value() {
        if (targetClassName === undefined && "production" !== 'production') {
          return 'NO_COMPONENT_SELECTOR';
        } // $FlowFixMe: coerce undefined to string


        return "." + targetClassName;
      }
    });

    Styled.withComponent = function (nextTag, nextOptions) {
      return createStyled(nextTag, _extends({}, options, nextOptions, {
        shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
      })).apply(void 0, styles);
    };

    return Styled;
  };
};

var tags = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

var newStyled = createStyled$1.bind();
tags.forEach(function (tagName) {
  // $FlowFixMe: we can ignore this because its exposed type is defined by the CreateStyled type
  newStyled[tagName] = newStyled(tagName);
});

var emStyled = newStyled;

function isEmpty$3(obj) {
  return obj === undefined || obj === null || Object.keys(obj).length === 0;
}

function GlobalStyles$1(props) {
  const {
    styles,
    defaultTheme = {}
  } = props;
  const globalStyles = typeof styles === 'function' ? themeInput => styles(isEmpty$3(themeInput) ? defaultTheme : themeInput) : styles;
  return /*#__PURE__*/jsxRuntime.jsx(Global, {
    styles: globalStyles
  });
}

/** @license MUI v5.0.1
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function styled$2(tag, options) {
  const stylesFactory = emStyled(tag, options);

  return stylesFactory;
}

function merge(acc, item) {
  if (!item) {
    return acc;
  }

  return deepmerge(acc, item, {
    clone: false // No need to clone deep, it's way faster.

  });
}

// For instance with the first breakpoint xs: [xs, sm[.

const values$1 = {
  xs: 0,
  // phone
  sm: 600,
  // tablets
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536 // large screens

};
const defaultBreakpoints = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ['xs', 'sm', 'md', 'lg', 'xl'],
  up: key => `@media (min-width:${values$1[key]}px)`
};
function handleBreakpoints(props, propValue, styleFromPropValue) {
  const theme = props.theme || {};

  if (Array.isArray(propValue)) {
    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    return propValue.reduce((acc, item, index) => {
      acc[themeBreakpoints.up(themeBreakpoints.keys[index])] = styleFromPropValue(propValue[index]);
      return acc;
    }, {});
  }

  if (typeof propValue === 'object') {
    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    return Object.keys(propValue).reduce((acc, breakpoint) => {
      // key is breakpoint
      if (Object.keys(themeBreakpoints.values || values$1).indexOf(breakpoint) !== -1) {
        const mediaKey = themeBreakpoints.up(breakpoint);
        acc[mediaKey] = styleFromPropValue(propValue[breakpoint], breakpoint);
      } else {
        const cssKey = breakpoint;
        acc[cssKey] = propValue[cssKey];
      }

      return acc;
    }, {});
  }

  const output = styleFromPropValue(propValue);
  return output;
}

function createEmptyBreakpointObject(breakpointsInput = {}) {
  var _breakpointsInput$key;

  const breakpointsInOrder = breakpointsInput == null ? void 0 : (_breakpointsInput$key = breakpointsInput.keys) == null ? void 0 : _breakpointsInput$key.reduce((acc, key) => {
    const breakpointStyleKey = breakpointsInput.up(key);
    acc[breakpointStyleKey] = {};
    return acc;
  }, {});
  return breakpointsInOrder || {};
}
function removeUnusedBreakpoints(breakpointKeys, style) {
  return breakpointKeys.reduce((acc, key) => {
    const breakpointOutput = acc[key];
    const isBreakpointUnused = Object.keys(breakpointOutput).length === 0;

    if (isBreakpointUnused) {
      delete acc[key];
    }

    return acc;
  }, style);
}

function getPath(obj, path) {
  if (!path || typeof path !== 'string') {
    return null;
  }

  return path.split('.').reduce((acc, item) => acc && acc[item] ? acc[item] : null, obj);
}

function getValue$1(themeMapping, transform, propValueFinal, userValue = propValueFinal) {
  let value;

  if (typeof themeMapping === 'function') {
    value = themeMapping(propValueFinal);
  } else if (Array.isArray(themeMapping)) {
    value = themeMapping[propValueFinal] || userValue;
  } else {
    value = getPath(themeMapping, propValueFinal) || userValue;
  }

  if (transform) {
    value = transform(value);
  }

  return value;
}

function style$1(options) {
  const {
    prop,
    cssProperty = options.prop,
    themeKey,
    transform
  } = options;

  const fn = props => {
    if (props[prop] == null) {
      return null;
    }

    const propValue = props[prop];
    const theme = props.theme;
    const themeMapping = getPath(theme, themeKey) || {};

    const styleFromPropValue = propValueFinal => {
      let value = getValue$1(themeMapping, transform, propValueFinal);

      if (propValueFinal === value && typeof propValueFinal === 'string') {
        // Haven't found value
        value = getValue$1(themeMapping, transform, `${prop}${propValueFinal === 'default' ? '' : capitalize(propValueFinal)}`, propValueFinal);
      }

      if (cssProperty === false) {
        return value;
      }

      return {
        [cssProperty]: value
      };
    };

    return handleBreakpoints(props, propValue, styleFromPropValue);
  };

  fn.propTypes = {};
  fn.filterProps = [prop];
  return fn;
}

function compose(...styles) {
  const handlers = styles.reduce((acc, style) => {
    style.filterProps.forEach(prop => {
      acc[prop] = style;
    });
    return acc;
  }, {});

  const fn = props => {
    return Object.keys(props).reduce((acc, prop) => {
      if (handlers[prop]) {
        return merge(acc, handlers[prop](props));
      }

      return acc;
    }, {});
  };

  fn.propTypes = {};
  fn.filterProps = styles.reduce((acc, style) => acc.concat(style.filterProps), []);
  return fn;
}

function memoize(fn) {
  const cache = {};
  return arg => {
    if (cache[arg] === undefined) {
      cache[arg] = fn(arg);
    }

    return cache[arg];
  };
}

const properties = {
  m: 'margin',
  p: 'padding'
};
const directions = {
  t: 'Top',
  r: 'Right',
  b: 'Bottom',
  l: 'Left',
  x: ['Left', 'Right'],
  y: ['Top', 'Bottom']
};
const aliases = {
  marginX: 'mx',
  marginY: 'my',
  paddingX: 'px',
  paddingY: 'py'
}; // memoize() impact:
// From 300,000 ops/sec
// To 350,000 ops/sec

const getCssProperties = memoize(prop => {
  // It's not a shorthand notation.
  if (prop.length > 2) {
    if (aliases[prop]) {
      prop = aliases[prop];
    } else {
      return [prop];
    }
  }

  const [a, b] = prop.split('');
  const property = properties[a];
  const direction = directions[b] || '';
  return Array.isArray(direction) ? direction.map(dir => property + dir) : [property + direction];
});
const marginKeys = ['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY', 'marginInline', 'marginInlineStart', 'marginInlineEnd', 'marginBlock', 'marginBlockStart', 'marginBlockEnd'];
const paddingKeys = ['p', 'pt', 'pr', 'pb', 'pl', 'px', 'py', 'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'paddingX', 'paddingY', 'paddingInline', 'paddingInlineStart', 'paddingInlineEnd', 'paddingBlock', 'paddingBlockStart', 'paddingBlockEnd'];
const spacingKeys = [...marginKeys, ...paddingKeys];
function createUnaryUnit(theme, themeKey, defaultValue, propName) {
  const themeSpacing = getPath(theme, themeKey) || defaultValue;

  if (typeof themeSpacing === 'number') {
    return abs => {
      if (typeof abs === 'string') {
        return abs;
      }

      return themeSpacing * abs;
    };
  }

  if (Array.isArray(themeSpacing)) {
    return abs => {
      if (typeof abs === 'string') {
        return abs;
      }

      return themeSpacing[abs];
    };
  }

  if (typeof themeSpacing === 'function') {
    return themeSpacing;
  }

  return () => undefined;
}
function createUnarySpacing(theme) {
  return createUnaryUnit(theme, 'spacing', 8);
}
function getValue(transformer, propValue) {
  if (typeof propValue === 'string' || propValue == null) {
    return propValue;
  }

  const abs = Math.abs(propValue);
  const transformed = transformer(abs);

  if (propValue >= 0) {
    return transformed;
  }

  if (typeof transformed === 'number') {
    return -transformed;
  }

  return `-${transformed}`;
}
function getStyleFromPropValue(cssProperties, transformer) {
  return propValue => cssProperties.reduce((acc, cssProperty) => {
    acc[cssProperty] = getValue(transformer, propValue);
    return acc;
  }, {});
}

function resolveCssProperty(props, keys, prop, transformer) {
  // Using a hash computation over an array iteration could be faster, but with only 28 items,
  // it's doesn't worth the bundle size.
  if (keys.indexOf(prop) === -1) {
    return null;
  }

  const cssProperties = getCssProperties(prop);
  const styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
  const propValue = props[prop];
  return handleBreakpoints(props, propValue, styleFromPropValue);
}

function style(props, keys) {
  const transformer = createUnarySpacing(props.theme);
  return Object.keys(props).map(prop => resolveCssProperty(props, keys, prop, transformer)).reduce(merge, {});
}

function spacing(props) {
  return style(props, spacingKeys);
}

spacing.propTypes = {};
spacing.filterProps = spacingKeys;

function getBorder(value) {
  if (typeof value !== 'number') {
    return value;
  }

  return `${value}px solid`;
}

const border = style$1({
  prop: 'border',
  themeKey: 'borders',
  transform: getBorder
});
const borderTop = style$1({
  prop: 'borderTop',
  themeKey: 'borders',
  transform: getBorder
});
const borderRight = style$1({
  prop: 'borderRight',
  themeKey: 'borders',
  transform: getBorder
});
const borderBottom = style$1({
  prop: 'borderBottom',
  themeKey: 'borders',
  transform: getBorder
});
const borderLeft = style$1({
  prop: 'borderLeft',
  themeKey: 'borders',
  transform: getBorder
});
const borderColor = style$1({
  prop: 'borderColor',
  themeKey: 'palette'
});
const borderTopColor = style$1({
  prop: 'borderTopColor',
  themeKey: 'palette'
});
const borderRightColor = style$1({
  prop: 'borderRightColor',
  themeKey: 'palette'
});
const borderBottomColor = style$1({
  prop: 'borderBottomColor',
  themeKey: 'palette'
});
const borderLeftColor = style$1({
  prop: 'borderLeftColor',
  themeKey: 'palette'
});
const borderRadius = props => {
  if (props.borderRadius !== undefined && props.borderRadius !== null) {
    const transformer = createUnaryUnit(props.theme, 'shape.borderRadius', 4);

    const styleFromPropValue = propValue => ({
      borderRadius: getValue(transformer, propValue)
    });

    return handleBreakpoints(props, props.borderRadius, styleFromPropValue);
  }

  return null;
};
borderRadius.propTypes = {};
borderRadius.filterProps = ['borderRadius'];
const borders = compose(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor, borderRadius);
var borders$1 = borders;

const displayPrint = style$1({
  prop: 'displayPrint',
  cssProperty: false,
  transform: value => ({
    '@media print': {
      display: value
    }
  })
});
const displayRaw = style$1({
  prop: 'display'
});
const overflow = style$1({
  prop: 'overflow'
});
const textOverflow = style$1({
  prop: 'textOverflow'
});
const visibility = style$1({
  prop: 'visibility'
});
const whiteSpace = style$1({
  prop: 'whiteSpace'
});
var display = compose(displayPrint, displayRaw, overflow, textOverflow, visibility, whiteSpace);

const flexBasis = style$1({
  prop: 'flexBasis'
});
const flexDirection = style$1({
  prop: 'flexDirection'
});
const flexWrap = style$1({
  prop: 'flexWrap'
});
const justifyContent = style$1({
  prop: 'justifyContent'
});
const alignItems = style$1({
  prop: 'alignItems'
});
const alignContent = style$1({
  prop: 'alignContent'
});
const order$1 = style$1({
  prop: 'order'
});
const flex = style$1({
  prop: 'flex'
});
const flexGrow = style$1({
  prop: 'flexGrow'
});
const flexShrink = style$1({
  prop: 'flexShrink'
});
const alignSelf = style$1({
  prop: 'alignSelf'
});
const justifyItems = style$1({
  prop: 'justifyItems'
});
const justifySelf = style$1({
  prop: 'justifySelf'
});
const flexbox = compose(flexBasis, flexDirection, flexWrap, justifyContent, alignItems, alignContent, order$1, flex, flexGrow, flexShrink, alignSelf, justifyItems, justifySelf);
var flexbox$1 = flexbox;

const gap = props => {
  if (props.gap !== undefined && props.gap !== null) {
    const transformer = createUnaryUnit(props.theme, 'spacing', 8);

    const styleFromPropValue = propValue => ({
      gap: getValue(transformer, propValue)
    });

    return handleBreakpoints(props, props.gap, styleFromPropValue);
  }

  return null;
};
gap.propTypes = {};
gap.filterProps = ['gap'];
const columnGap = props => {
  if (props.columnGap !== undefined && props.columnGap !== null) {
    const transformer = createUnaryUnit(props.theme, 'spacing', 8);

    const styleFromPropValue = propValue => ({
      columnGap: getValue(transformer, propValue)
    });

    return handleBreakpoints(props, props.columnGap, styleFromPropValue);
  }

  return null;
};
columnGap.propTypes = {};
columnGap.filterProps = ['columnGap'];
const rowGap = props => {
  if (props.rowGap !== undefined && props.rowGap !== null) {
    const transformer = createUnaryUnit(props.theme, 'spacing', 8);

    const styleFromPropValue = propValue => ({
      rowGap: getValue(transformer, propValue)
    });

    return handleBreakpoints(props, props.rowGap, styleFromPropValue);
  }

  return null;
};
rowGap.propTypes = {};
rowGap.filterProps = ['rowGap'];
const gridColumn = style$1({
  prop: 'gridColumn'
});
const gridRow = style$1({
  prop: 'gridRow'
});
const gridAutoFlow = style$1({
  prop: 'gridAutoFlow'
});
const gridAutoColumns = style$1({
  prop: 'gridAutoColumns'
});
const gridAutoRows = style$1({
  prop: 'gridAutoRows'
});
const gridTemplateColumns = style$1({
  prop: 'gridTemplateColumns'
});
const gridTemplateRows = style$1({
  prop: 'gridTemplateRows'
});
const gridTemplateAreas = style$1({
  prop: 'gridTemplateAreas'
});
const gridArea = style$1({
  prop: 'gridArea'
});
const grid = compose(gap, columnGap, rowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);
var grid$1 = grid;

const color = style$1({
  prop: 'color',
  themeKey: 'palette'
});
const bgcolor = style$1({
  prop: 'bgcolor',
  cssProperty: 'backgroundColor',
  themeKey: 'palette'
});
const backgroundColor = style$1({
  prop: 'backgroundColor',
  themeKey: 'palette'
});
const palette = compose(color, bgcolor, backgroundColor);
var palette$1 = palette;

const position = style$1({
  prop: 'position'
});
const zIndex$2 = style$1({
  prop: 'zIndex',
  themeKey: 'zIndex'
});
const top$1 = style$1({
  prop: 'top'
});
const right$1 = style$1({
  prop: 'right'
});
const bottom$1 = style$1({
  prop: 'bottom'
});
const left$1 = style$1({
  prop: 'left'
});
var positions = compose(position, zIndex$2, top$1, right$1, bottom$1, left$1);

const boxShadow = style$1({
  prop: 'boxShadow',
  themeKey: 'shadows'
});
var shadows$2 = boxShadow;

function transform(value) {
  return value <= 1 && value !== 0 ? `${value * 100}%` : value;
}

const width = style$1({
  prop: 'width',
  transform
});
const maxWidth = props => {
  if (props.maxWidth !== undefined && props.maxWidth !== null) {
    const styleFromPropValue = propValue => {
      var _props$theme, _props$theme$breakpoi, _props$theme$breakpoi2;

      const breakpoint = ((_props$theme = props.theme) == null ? void 0 : (_props$theme$breakpoi = _props$theme.breakpoints) == null ? void 0 : (_props$theme$breakpoi2 = _props$theme$breakpoi.values) == null ? void 0 : _props$theme$breakpoi2[propValue]) || values$1[propValue];
      return {
        maxWidth: breakpoint || transform(propValue)
      };
    };

    return handleBreakpoints(props, props.maxWidth, styleFromPropValue);
  }

  return null;
};
maxWidth.filterProps = ['maxWidth'];
const minWidth = style$1({
  prop: 'minWidth',
  transform
});
const height = style$1({
  prop: 'height',
  transform
});
const maxHeight = style$1({
  prop: 'maxHeight',
  transform
});
const minHeight = style$1({
  prop: 'minHeight',
  transform
});
style$1({
  prop: 'size',
  cssProperty: 'width',
  transform
});
style$1({
  prop: 'size',
  cssProperty: 'height',
  transform
});
const boxSizing = style$1({
  prop: 'boxSizing'
});
const sizing = compose(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);
var sizing$1 = sizing;

const fontFamily = style$1({
  prop: 'fontFamily',
  themeKey: 'typography'
});
const fontSize = style$1({
  prop: 'fontSize',
  themeKey: 'typography'
});
const fontStyle = style$1({
  prop: 'fontStyle',
  themeKey: 'typography'
});
const fontWeight = style$1({
  prop: 'fontWeight',
  themeKey: 'typography'
});
const letterSpacing = style$1({
  prop: 'letterSpacing'
});
const lineHeight = style$1({
  prop: 'lineHeight'
});
const textAlign = style$1({
  prop: 'textAlign'
});
const typographyVariant = style$1({
  prop: 'typography',
  cssProperty: false,
  themeKey: 'typography'
});
const typography = compose(typographyVariant, fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, textAlign);
var typography$1 = typography;

const filterPropsMapping = {
  borders: borders$1.filterProps,
  display: display.filterProps,
  flexbox: flexbox$1.filterProps,
  grid: grid$1.filterProps,
  positions: positions.filterProps,
  palette: palette$1.filterProps,
  shadows: shadows$2.filterProps,
  sizing: sizing$1.filterProps,
  spacing: spacing.filterProps,
  typography: typography$1.filterProps
};
const styleFunctionMapping = {
  borders: borders$1,
  display,
  flexbox: flexbox$1,
  grid: grid$1,
  positions,
  palette: palette$1,
  shadows: shadows$2,
  sizing: sizing$1,
  spacing,
  typography: typography$1
};
const propToStyleFunction = Object.keys(filterPropsMapping).reduce((acc, styleFnName) => {
  filterPropsMapping[styleFnName].forEach(propName => {
    acc[propName] = styleFunctionMapping[styleFnName];
  });
  return acc;
}, {});

function getThemeValue(prop, value, theme) {
  const inputProps = {
    [prop]: value,
    theme
  };
  const styleFunction = propToStyleFunction[prop];
  return styleFunction ? styleFunction(inputProps) : {
    [prop]: value
  };
}

function objectsHaveSameKeys(...objects) {
  const allKeys = objects.reduce((keys, object) => keys.concat(Object.keys(object)), []);
  const union = new Set(allKeys);
  return objects.every(object => union.size === Object.keys(object).length);
}

function callIfFn(maybeFn, arg) {
  return typeof maybeFn === 'function' ? maybeFn(arg) : maybeFn;
}

function styleFunctionSx(props) {
  const {
    sx: styles,
    theme = {}
  } = props || {};

  if (!styles) {
    return null;
  }

  if (typeof styles === 'function') {
    return styles(theme);
  }

  if (typeof styles !== 'object') {
    // value
    return styles;
  }

  const emptyBreakpoints = createEmptyBreakpointObject(theme.breakpoints);
  const breakpointsKeys = Object.keys(emptyBreakpoints);
  let css = emptyBreakpoints;
  Object.keys(styles).forEach(styleKey => {
    const value = callIfFn(styles[styleKey], theme);

    if (typeof value === 'object') {
      if (propToStyleFunction[styleKey]) {
        css = merge(css, getThemeValue(styleKey, value, theme));
      } else {
        const breakpointsValues = handleBreakpoints({
          theme
        }, value, x => ({
          [styleKey]: x
        }));

        if (objectsHaveSameKeys(breakpointsValues, value)) {
          css[styleKey] = styleFunctionSx({
            sx: value,
            theme
          });
        } else {
          css = merge(css, breakpointsValues);
        }
      }
    } else {
      css = merge(css, getThemeValue(styleKey, value, theme));
    }
  });
  return removeUnusedBreakpoints(breakpointsKeys, css);
}

styleFunctionSx.filterProps = ['sx'];

const _excluded$T = ["sx"];

const splitProps = props => {
  const result = {
    systemProps: {},
    otherProps: {}
  };
  Object.keys(props).forEach(prop => {
    if (propToStyleFunction[prop]) {
      result.systemProps[prop] = props[prop];
    } else {
      result.otherProps[prop] = props[prop];
    }
  });
  return result;
};

function extendSxProp(props) {
  const {
    sx: inSx
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$T);

  const {
    systemProps,
    otherProps
  } = splitProps(other);
  return _extends({}, otherProps, {
    sx: _extends({}, systemProps, inSx)
  });
}

const _excluded$S = ["values", "unit", "step"];

function createBreakpoints(breakpoints) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values = {
      xs: 0,
      // phone
      sm: 600,
      // tablets
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536 // large screens

    },
    unit = 'px',
    step = 5
  } = breakpoints,
        other = _objectWithoutPropertiesLoose(breakpoints, _excluded$S);

  const keys = Object.keys(values);

  function up(key) {
    const value = typeof values[key] === 'number' ? values[key] : key;
    return `@media (min-width:${value}${unit})`;
  }

  function down(key) {
    const value = typeof values[key] === 'number' ? values[key] : key;
    return `@media (max-width:${value - step / 100}${unit})`;
  }

  function between(start, end) {
    const endIndex = keys.indexOf(end);
    return `@media (min-width:${typeof values[start] === 'number' ? values[start] : start}${unit}) and ` + `(max-width:${(endIndex !== -1 && typeof values[keys[endIndex]] === 'number' ? values[keys[endIndex]] : end) - step / 100}${unit})`;
  }

  function only(key) {
    if (keys.indexOf(key) + 1 < keys.length) {
      return between(key, keys[keys.indexOf(key) + 1]);
    }

    return up(key);
  }

  return _extends({
    keys,
    values,
    up,
    down,
    between,
    only,
    unit
  }, other);
}

const shape = {
  borderRadius: 4
};
var shape$1 = shape;

/* tslint:enable:unified-signatures */
function createSpacing(spacingInput = 8) {
  // Already transformed.
  if (spacingInput.mui) {
    return spacingInput;
  } // Material Design layouts are visually balanced. Most measurements align to an 8dp grid, which aligns both spacing and the overall layout.
  // Smaller components, such as icons, can align to a 4dp grid.
  // https://material.io/design/layout/understanding-layout.html#usage


  const transform = createUnarySpacing({
    spacing: spacingInput
  });

  const spacing = (...argsInput) => {

    const args = argsInput.length === 0 ? [1] : argsInput;
    return args.map(argument => {
      const output = transform(argument);
      return typeof output === 'number' ? `${output}px` : output;
    }).join(' ');
  };

  spacing.mui = true;
  return spacing;
}

const _excluded$R = ["breakpoints", "palette", "spacing", "shape"];

function createTheme$1(options = {}, ...args) {
  const {
    breakpoints: breakpointsInput = {},
    palette: paletteInput = {},
    spacing: spacingInput,
    shape: shapeInput = {}
  } = options,
        other = _objectWithoutPropertiesLoose(options, _excluded$R);

  const breakpoints = createBreakpoints(breakpointsInput);
  const spacing = createSpacing(spacingInput);
  let muiTheme = deepmerge({
    breakpoints,
    direction: 'ltr',
    components: {},
    // Inject component definitions.
    palette: _extends({
      mode: 'light'
    }, paletteInput),
    spacing,
    shape: _extends({}, shape$1, shapeInput)
  }, other);
  muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
  return muiTheme;
}

function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}

function useTheme$2(defaultTheme = null) {
  const contextTheme = useTheme$3();
  return !contextTheme || isObjectEmpty(contextTheme) ? defaultTheme : contextTheme;
}

const systemDefaultTheme$1 = createTheme$1();

function useTheme$1(defaultTheme = systemDefaultTheme$1) {
  return useTheme$2(defaultTheme);
}

const _excluded$Q = ["variant"];

function isEmpty$2(string) {
  return string.length === 0;
}
/**
 * Generates string classKey based on the properties provided. It starts with the
 * variant if defined, and then it appends all other properties in alphabetical order.
 * @param {object} props - the properties for which the classKey should be created.
 */


function propsToClassKey(props) {
  const {
    variant
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$Q);

  let classKey = variant || '';
  Object.keys(other).sort().forEach(key => {
    if (key === 'color') {
      classKey += isEmpty$2(classKey) ? props[key] : capitalize(props[key]);
    } else {
      classKey += `${isEmpty$2(classKey) ? key : capitalize(key)}${capitalize(props[key].toString())}`;
    }
  });
  return classKey;
}

const _excluded$P = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"],
      _excluded2$4 = ["theme"],
      _excluded3 = ["theme"];

function isEmpty$1(obj) {
  return Object.keys(obj).length === 0;
}

const getStyleOverrides = (name, theme) => {
  if (theme.components && theme.components[name] && theme.components[name].styleOverrides) {
    return theme.components[name].styleOverrides;
  }

  return null;
};

const getVariantStyles = (name, theme) => {
  let variants = [];

  if (theme && theme.components && theme.components[name] && theme.components[name].variants) {
    variants = theme.components[name].variants;
  }

  const variantsStyles = {};
  variants.forEach(definition => {
    const key = propsToClassKey(definition.props);
    variantsStyles[key] = definition.style;
  });
  return variantsStyles;
};

const variantsResolver = (props, styles, theme, name) => {
  var _theme$components, _theme$components$nam;

  const {
    ownerState = {}
  } = props;
  const variantsStyles = [];
  const themeVariants = theme == null ? void 0 : (_theme$components = theme.components) == null ? void 0 : (_theme$components$nam = _theme$components[name]) == null ? void 0 : _theme$components$nam.variants;

  if (themeVariants) {
    themeVariants.forEach(themeVariant => {
      let isMatch = true;
      Object.keys(themeVariant.props).forEach(key => {
        if (ownerState[key] !== themeVariant.props[key] && props[key] !== themeVariant.props[key]) {
          isMatch = false;
        }
      });

      if (isMatch) {
        variantsStyles.push(styles[propsToClassKey(themeVariant.props)]);
      }
    });
  }

  return variantsStyles;
};

function shouldForwardProp(prop) {
  return prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as';
}
const systemDefaultTheme = createTheme$1();

function createStyled(input = {}) {
  const {
    defaultTheme = systemDefaultTheme,
    rootShouldForwardProp = shouldForwardProp,
    slotShouldForwardProp = shouldForwardProp
  } = input;
  return (tag, inputOptions = {}) => {
    const {
      name: componentName,
      slot: componentSlot,
      skipVariantsResolver: inputSkipVariantsResolver,
      skipSx: inputSkipSx,
      overridesResolver
    } = inputOptions,
          options = _objectWithoutPropertiesLoose(inputOptions, _excluded$P); // if skipVariantsResolver option is defined, take the value, otherwise, true for root and false for other slots.


    const skipVariantsResolver = inputSkipVariantsResolver !== undefined ? inputSkipVariantsResolver : componentSlot && componentSlot !== 'Root' || false;
    const skipSx = inputSkipSx || false;
    let label;

    let shouldForwardPropOption = shouldForwardProp;

    if (componentSlot === 'Root') {
      shouldForwardPropOption = rootShouldForwardProp;
    } else if (componentSlot) {
      // any other slot specified
      shouldForwardPropOption = slotShouldForwardProp;
    }

    const defaultStyledResolver = styled$2(tag, _extends({
      shouldForwardProp: shouldForwardPropOption,
      label
    }, options));

    const muiStyledResolver = (styleArg, ...expressions) => {
      const expressionsWithDefaultTheme = expressions ? expressions.map(stylesArg => {
        return typeof stylesArg === 'function' ? _ref => {
          let {
            theme: themeInput
          } = _ref,
              other = _objectWithoutPropertiesLoose(_ref, _excluded2$4);

          return stylesArg(_extends({
            theme: isEmpty$1(themeInput) ? defaultTheme : themeInput
          }, other));
        } : stylesArg;
      }) : [];
      let transformedStyleArg = styleArg;

      if (componentName && overridesResolver) {
        expressionsWithDefaultTheme.push(props => {
          const theme = isEmpty$1(props.theme) ? defaultTheme : props.theme;
          const styleOverrides = getStyleOverrides(componentName, theme);

          if (styleOverrides) {
            return overridesResolver(props, styleOverrides);
          }

          return null;
        });
      }

      if (componentName && !skipVariantsResolver) {
        expressionsWithDefaultTheme.push(props => {
          const theme = isEmpty$1(props.theme) ? defaultTheme : props.theme;
          return variantsResolver(props, getVariantStyles(componentName, theme), theme, componentName);
        });
      }

      if (!skipSx) {
        expressionsWithDefaultTheme.push(props => {
          const theme = isEmpty$1(props.theme) ? defaultTheme : props.theme;
          return styleFunctionSx(_extends({}, props, {
            theme
          }));
        });
      }

      const numOfCustomFnsApplied = expressionsWithDefaultTheme.length - expressions.length;

      if (Array.isArray(styleArg) && numOfCustomFnsApplied > 0) {
        const placeholders = new Array(numOfCustomFnsApplied).fill(''); // If the type is array, than we need to add placeholders in the template for the overrides, variants and the sx styles.

        transformedStyleArg = [...styleArg, ...placeholders];
        transformedStyleArg.raw = [...styleArg.raw, ...placeholders];
      } else if (typeof styleArg === 'function') {
        // If the type is function, we need to define the default theme.
        transformedStyleArg = _ref2 => {
          let {
            theme: themeInput
          } = _ref2,
              other = _objectWithoutPropertiesLoose(_ref2, _excluded3);

          return styleArg(_extends({
            theme: isEmpty$1(themeInput) ? defaultTheme : themeInput
          }, other));
        };
      }

      const Component = defaultStyledResolver(transformedStyleArg, ...expressionsWithDefaultTheme);

      return Component;
    };

    return muiStyledResolver;
  };
}

/* eslint-disable no-restricted-syntax */
function getThemeProps(params) {
  const {
    theme,
    name,
    props
  } = params;

  if (!theme || !theme.components || !theme.components[name] || !theme.components[name].defaultProps) {
    return props;
  }

  const output = _extends({}, props); // Resolve default props, code borrow from React source.
  // https://github.com/facebook/react/blob/15a8f031838a553e41c0b66eb1bcf1da8448104d/packages/react/src/ReactElement.js#L221


  const defaultProps = theme.components[name].defaultProps;
  let propName;

  for (propName in defaultProps) {
    if (output[propName] === undefined) {
      output[propName] = defaultProps[propName];
    }
  }

  return output;
}

function useThemeProps$1({
  props,
  name,
  defaultTheme
}) {
  const theme = useTheme$1(defaultTheme);
  const mergedProps = getThemeProps({
    theme,
    name,
    props
  });
  return mergedProps;
}

/**
 * Returns a number whose value is limited to the given range.
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */
function clamp(value, min = 0, max = 1) {

  return Math.min(Math.max(min, value), max);
}
/**
 * Converts a color from CSS hex format to CSS rgb format.
 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 * @returns {string} A CSS rgb color string
 */


function hexToRgb(color) {
  color = color.substr(1);
  const re = new RegExp(`.{1,${color.length >= 6 ? 2 : 1}}`, 'g');
  let colors = color.match(re);

  if (colors && colors[0].length === 1) {
    colors = colors.map(n => n + n);
  }

  return colors ? `rgb${colors.length === 4 ? 'a' : ''}(${colors.map((n, index) => {
    return index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1000) / 1000;
  }).join(', ')})` : '';
}
/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {object} - A MUI color object: {type: string, values: number[]}
 */


function decomposeColor(color) {
  // Idempotent
  if (color.type) {
    return color;
  }

  if (color.charAt(0) === '#') {
    return decomposeColor(hexToRgb(color));
  }

  const marker = color.indexOf('(');
  const type = color.substring(0, marker);

  if (['rgb', 'rgba', 'hsl', 'hsla', 'color'].indexOf(type) === -1) {
    throw new Error(formatMuiErrorMessage(9, color));
  }

  let values = color.substring(marker + 1, color.length - 1);
  let colorSpace;

  if (type === 'color') {
    values = values.split(' ');
    colorSpace = values.shift();

    if (values.length === 4 && values[3].charAt(0) === '/') {
      values[3] = values[3].substr(1);
    }

    if (['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].indexOf(colorSpace) === -1) {
      throw new Error(formatMuiErrorMessage(10, colorSpace));
    }
  } else {
    values = values.split(',');
  }

  values = values.map(value => parseFloat(value));
  return {
    type,
    values,
    colorSpace
  };
}
/**
 * Converts a color object with type and values to a string.
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */

function recomposeColor(color) {
  const {
    type,
    colorSpace
  } = color;
  let {
    values
  } = color;

  if (type.indexOf('rgb') !== -1) {
    // Only convert the first 3 values to int (i.e. not alpha)
    values = values.map((n, i) => i < 3 ? parseInt(n, 10) : n);
  } else if (type.indexOf('hsl') !== -1) {
    values[1] = `${values[1]}%`;
    values[2] = `${values[2]}%`;
  }

  if (type.indexOf('color') !== -1) {
    values = `${colorSpace} ${values.join(' ')}`;
  } else {
    values = `${values.join(', ')}`;
  }

  return `${type}(${values})`;
}
/**
 * Converts a color from hsl format to rgb format.
 * @param {string} color - HSL color values
 * @returns {string} rgb color values
 */

function hslToRgb(color) {
  color = decomposeColor(color);
  const {
    values
  } = color;
  const h = values[0];
  const s = values[1] / 100;
  const l = values[2] / 100;
  const a = s * Math.min(l, 1 - l);

  const f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);

  let type = 'rgb';
  const rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];

  if (color.type === 'hsla') {
    type += 'a';
    rgb.push(values[3]);
  }

  return recomposeColor({
    type,
    values: rgb
  });
}
/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */

function getLuminance(color) {
  color = decomposeColor(color);
  let rgb = color.type === 'hsl' ? decomposeColor(hslToRgb(color)).values : color.values;
  rgb = rgb.map(val => {
    if (color.type !== 'color') {
      val /= 255; // normalized
    }

    return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
  }); // Truncate at 3 digits

  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}
/**
 * Calculates the contrast ratio between two colors.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} A contrast ratio value in the range 0 - 21.
 */

function getContrastRatio(foreground, background) {
  const lumA = getLuminance(foreground);
  const lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}
/**
 * Sets the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} value - value to set the alpha channel to in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function alpha(color, value) {
  color = decomposeColor(color);
  value = clamp(value);

  if (color.type === 'rgb' || color.type === 'hsl') {
    color.type += 'a';
  }

  if (color.type === 'color') {
    color.values[3] = `/${value}`;
  } else {
    color.values[3] = value;
  }

  return recomposeColor(color);
}
/**
 * Darkens a color.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function darken(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] *= 1 - coefficient;
  } else if (color.type.indexOf('rgb') !== -1 || color.type.indexOf('color') !== -1) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] *= 1 - coefficient;
    }
  }

  return recomposeColor(color);
}
/**
 * Lightens a color.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function lighten(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] += (100 - color.values[2]) * coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] += (255 - color.values[i]) * coefficient;
    }
  } else if (color.type.indexOf('color') !== -1) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] += (1 - color.values[i]) * coefficient;
    }
  }

  return recomposeColor(color);
}

function composeClasses(slots, getUtilityClass, classes) {
  const output = {};
  Object.keys(slots).forEach( // `Objet.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
  // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
  slot => {
    output[slot] = slots[slot].reduce((acc, key) => {
      if (key) {
        if (classes && classes[key]) {
          acc.push(classes[key]);
        }

        acc.push(getUtilityClass(key));
      }

      return acc;
    }, []).join(' ');
  });
  return output;
}

/**
 * Determines if a given element is a DOM element name (i.e. not a React component).
 */
function isHostComponent(element) {
  return typeof element === 'string';
}

const globalStateClassesMapping = {
  active: 'Mui-active',
  checked: 'Mui-checked',
  completed: 'Mui-completed',
  disabled: 'Mui-disabled',
  error: 'Mui-error',
  expanded: 'Mui-expanded',
  focused: 'Mui-focused',
  focusVisible: 'Mui-focusVisible',
  required: 'Mui-required',
  selected: 'Mui-selected'
};
function generateUtilityClass(componentName, slot) {
  const globalStateClass = globalStateClassesMapping[slot];
  return globalStateClass || `${componentName}-${slot}`;
}

function generateUtilityClasses(componentName, slots) {
  const result = {};
  slots.forEach(slot => {
    result[slot] = generateUtilityClass(componentName, slot);
  });
  return result;
}

function getBackdropUtilityClass(slot) {
  return generateUtilityClass('MuiBackdrop', slot);
}
generateUtilityClasses('MuiBackdrop', ['root', 'invisible']);

const _excluded$O = ["classes", "className", "invisible", "component", "components", "componentsProps", "theme"];

const useUtilityClasses$y = ownerState => {
  const {
    classes,
    invisible
  } = ownerState;
  const slots = {
    root: ['root', invisible && 'invisible']
  };
  return composeClasses(slots, getBackdropUtilityClass, classes);
};

const BackdropUnstyled = /*#__PURE__*/e__default.forwardRef(function BackdropUnstyled(props, ref) {
  const {
    classes: classesProp,
    className,
    invisible = false,
    component = 'div',
    components = {},
    componentsProps = {},

    /* eslint-disable react/prop-types */
    theme
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$O);

  const ownerState = _extends({}, props, {
    classes: classesProp,
    invisible
  });

  const classes = useUtilityClasses$y(ownerState);
  const Root = components.Root || component;
  const rootProps = componentsProps.root || {};
  return /*#__PURE__*/jsxRuntime.jsx(Root, _extends({
    "aria-hidden": true
  }, rootProps, !isHostComponent(Root) && {
    as: component,
    ownerState: _extends({}, ownerState, rootProps.ownerState),
    theme
  }, {
    ref: ref
  }, other, {
    className: l$2(classes.root, rootProps.className, className)
  }));
});
var BackdropUnstyled$1 = BackdropUnstyled;

function getBadgeUtilityClass(slot) {
  return generateUtilityClass('MuiBadge', slot);
}
const badgeUnstyledClasses = generateUtilityClasses('MuiBadge', ['root', 'badge', 'dot', 'standard', 'anchorOriginTopLeftCircular', 'anchorOriginTopLeftRectangular', 'anchorOriginTopRightCircular', 'anchorOriginTopRightRectangular', 'anchorOriginBottomLeftCircular', 'anchorOriginBottomLeftRectangular', 'anchorOriginBottomRightCircular', 'anchorOriginBottomRightRectangular', 'invisible']);
var badgeUnstyledClasses$1 = badgeUnstyledClasses;

const _excluded$N = ["anchorOrigin", "classes", "badgeContent", "component", "children", "className", "components", "componentsProps", "invisible", "max", "overlap", "showZero", "variant", "theme"];

const useUtilityClasses$x = ownerState => {
  const {
    variant,
    anchorOrigin,
    overlap,
    invisible,
    classes
  } = ownerState;
  const slots = {
    root: ['root'],
    badge: ['badge', variant, `anchorOrigin${capitalize(anchorOrigin.vertical)}${capitalize(anchorOrigin.horizontal)}${capitalize(overlap)}`, invisible && 'invisible']
  };
  return composeClasses(slots, getBadgeUtilityClass, classes);
};

const BadgeUnstyled = /*#__PURE__*/e__default.forwardRef(function BadgeUnstyled(props, ref) {
  const {
    anchorOrigin: anchorOriginProp = {
      vertical: 'top',
      horizontal: 'right'
    },
    classes: classesProp,
    badgeContent: badgeContentProp,
    component = 'span',
    children,
    className,
    components = {},
    componentsProps = {},
    invisible: invisibleProp,
    max: maxProp = 99,
    overlap: overlapProp = 'rectangular',
    showZero = false,
    variant: variantProp = 'standard',

    /* eslint-disable react/prop-types */
    theme
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$N);

  const prevProps = usePreviousProps$1({
    anchorOrigin: anchorOriginProp,
    badgeContent: badgeContentProp,
    max: maxProp,
    overlap: overlapProp,
    variant: variantProp
  });
  let invisible = invisibleProp;

  if (invisibleProp == null && (badgeContentProp === 0 && !showZero || badgeContentProp == null && variantProp !== 'dot')) {
    invisible = true;
  }

  const {
    anchorOrigin = anchorOriginProp,
    badgeContent,
    max = maxProp,
    overlap = overlapProp,
    variant = variantProp
  } = invisible ? prevProps : props;

  const ownerState = _extends({}, props, {
    anchorOrigin,
    badgeContent,
    classes: classesProp,
    invisible,
    max,
    overlap,
    variant
  });

  let displayValue = '';

  if (variant !== 'dot') {
    displayValue = badgeContent > max ? `${max}+` : badgeContent;
  }

  const classes = useUtilityClasses$x(ownerState);
  const Root = components.Root || component;
  const rootProps = componentsProps.root || {};
  const Badge = components.Badge || 'span';
  const badgeProps = componentsProps.badge || {};
  return /*#__PURE__*/jsxRuntime.jsxs(Root, _extends({}, rootProps, !isHostComponent(Root) && {
    as: component,
    ownerState: _extends({}, ownerState, rootProps.ownerState),
    theme
  }, {
    ref: ref
  }, other, {
    className: l$2(classes.root, rootProps.className, className),
    children: [children, /*#__PURE__*/jsxRuntime.jsx(Badge, _extends({}, badgeProps, !isHostComponent(Badge) && {
      ownerState: _extends({}, ownerState, badgeProps.ownerState),
      theme
    }, {
      className: l$2(classes.badge, badgeProps.className),
      children: displayValue
    }))]
  }));
});
var BadgeUnstyled$1 = BadgeUnstyled;

/**
 * Appends the ownerState object to the props, merging with the existing one if necessary.
 *
 * @param elementType Type of the element that owns the `existingProps`. If the element is a DOM node, `ownerState` are not applied.
 * @param existingProps Props of the element.
 * @param ownerState
 */

function appendOwnerState(elementType, existingProps, ownerState) {
  if (isHostComponent(elementType)) {
    return existingProps;
  }

  return _extends({}, existingProps, {
    ownerState: _extends({}, existingProps.ownerState, ownerState)
  });
}

function getContainer$1(container) {
  return typeof container === 'function' ? container() : container;
}
/**
 * Portals provide a first-class way to render children into a DOM node
 * that exists outside the DOM hierarchy of the parent component.
 */


const Portal = /*#__PURE__*/e__default.forwardRef(function Portal(props, ref) {
  const {
    children,
    container,
    disablePortal = false
  } = props;
  const [mountNode, setMountNode] = e__default.useState(null);
  const handleRef = useForkRef( /*#__PURE__*/e__default.isValidElement(children) ? children.ref : null, ref);
  useEnhancedEffect$1(() => {
    if (!disablePortal) {
      setMountNode(getContainer$1(container) || document.body);
    }
  }, [container, disablePortal]);
  useEnhancedEffect$1(() => {
    if (mountNode && !disablePortal) {
      setRef(ref, mountNode);
      return () => {
        setRef(ref, null);
      };
    }

    return undefined;
  }, [ref, mountNode, disablePortal]);

  if (disablePortal) {
    if ( /*#__PURE__*/e__default.isValidElement(children)) {
      return /*#__PURE__*/e__default.cloneElement(children, {
        ref: handleRef
      });
    }

    return children;
  }

  return mountNode ? /*#__PURE__*/ReactDOM.createPortal(children, mountNode) : mountNode;
});

var Portal$1 = Portal;

// Is a vertical scrollbar displayed?
function isOverflowing(container) {
  const doc = ownerDocument(container);

  if (doc.body === container) {
    return ownerWindow(container).innerWidth > doc.documentElement.clientWidth;
  }

  return container.scrollHeight > container.clientHeight;
}

function ariaHidden(element, show) {
  if (show) {
    element.setAttribute('aria-hidden', 'true');
  } else {
    element.removeAttribute('aria-hidden');
  }
}

function getPaddingRight(element) {
  return parseInt(ownerWindow(element).getComputedStyle(element).paddingRight, 10) || 0;
}

function ariaHiddenSiblings(container, mountElement, currentElement, elementsToExclude = [], show) {
  const blacklist = [mountElement, currentElement, ...elementsToExclude];
  const blacklistTagNames = ['TEMPLATE', 'SCRIPT', 'STYLE'];
  [].forEach.call(container.children, element => {
    if (blacklist.indexOf(element) === -1 && blacklistTagNames.indexOf(element.tagName) === -1) {
      ariaHidden(element, show);
    }
  });
}

function findIndexOf(items, callback) {
  let idx = -1;
  items.some((item, index) => {
    if (callback(item)) {
      idx = index;
      return true;
    }

    return false;
  });
  return idx;
}

function handleContainer(containerInfo, props) {
  const restoreStyle = [];
  const container = containerInfo.container;

  if (!props.disableScrollLock) {
    if (isOverflowing(container)) {
      // Compute the size before applying overflow hidden to avoid any scroll jumps.
      const scrollbarSize = getScrollbarSize(ownerDocument(container));
      restoreStyle.push({
        value: container.style.paddingRight,
        property: 'padding-right',
        el: container
      }); // Use computed style, here to get the real padding to add our scrollbar width.

      container.style.paddingRight = `${getPaddingRight(container) + scrollbarSize}px`; // .mui-fixed is a global helper.

      const fixedElements = ownerDocument(container).querySelectorAll('.mui-fixed');
      [].forEach.call(fixedElements, element => {
        restoreStyle.push({
          value: element.style.paddingRight,
          property: 'padding-right',
          el: element
        });
        element.style.paddingRight = `${getPaddingRight(element) + scrollbarSize}px`;
      });
    } // Improve Gatsby support
    // https://css-tricks.com/snippets/css/force-vertical-scrollbar/


    const parent = container.parentElement;
    const containerWindow = ownerWindow(container);
    const scrollContainer = (parent == null ? void 0 : parent.nodeName) === 'HTML' && containerWindow.getComputedStyle(parent).overflowY === 'scroll' ? parent : container; // Block the scroll even if no scrollbar is visible to account for mobile keyboard
    // screensize shrink.

    restoreStyle.push({
      value: scrollContainer.style.overflow,
      property: 'overflow',
      el: scrollContainer
    }, {
      value: scrollContainer.style.overflowX,
      property: 'overflow-x',
      el: scrollContainer
    }, {
      value: scrollContainer.style.overflowY,
      property: 'overflow-y',
      el: scrollContainer
    });
    scrollContainer.style.overflow = 'hidden';
  }

  const restore = () => {
    restoreStyle.forEach(({
      value,
      el,
      property
    }) => {
      if (value) {
        el.style.setProperty(property, value);
      } else {
        el.style.removeProperty(property);
      }
    });
  };

  return restore;
}

function getHiddenSiblings(container) {
  const hiddenSiblings = [];
  [].forEach.call(container.children, element => {
    if (element.getAttribute('aria-hidden') === 'true') {
      hiddenSiblings.push(element);
    }
  });
  return hiddenSiblings;
}

/**
 * @ignore - do not document.
 *
 * Proper state management for containers and the modals in those containers.
 * Simplified, but inspired by react-overlay's ModalManager class.
 * Used by the Modal to ensure proper styling of containers.
 */
class ModalManager {
  constructor() {
    this.containers = void 0;
    this.modals = void 0;
    this.modals = [];
    this.containers = [];
  }

  add(modal, container) {
    let modalIndex = this.modals.indexOf(modal);

    if (modalIndex !== -1) {
      return modalIndex;
    }

    modalIndex = this.modals.length;
    this.modals.push(modal); // If the modal we are adding is already in the DOM.

    if (modal.modalRef) {
      ariaHidden(modal.modalRef, false);
    }

    const hiddenSiblings = getHiddenSiblings(container);
    ariaHiddenSiblings(container, modal.mount, modal.modalRef, hiddenSiblings, true);
    const containerIndex = findIndexOf(this.containers, item => item.container === container);

    if (containerIndex !== -1) {
      this.containers[containerIndex].modals.push(modal);
      return modalIndex;
    }

    this.containers.push({
      modals: [modal],
      container,
      restore: null,
      hiddenSiblings
    });
    return modalIndex;
  }

  mount(modal, props) {
    const containerIndex = findIndexOf(this.containers, item => item.modals.indexOf(modal) !== -1);
    const containerInfo = this.containers[containerIndex];

    if (!containerInfo.restore) {
      containerInfo.restore = handleContainer(containerInfo, props);
    }
  }

  remove(modal) {
    const modalIndex = this.modals.indexOf(modal);

    if (modalIndex === -1) {
      return modalIndex;
    }

    const containerIndex = findIndexOf(this.containers, item => item.modals.indexOf(modal) !== -1);
    const containerInfo = this.containers[containerIndex];
    containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);
    this.modals.splice(modalIndex, 1); // If that was the last modal in a container, clean up the container.

    if (containerInfo.modals.length === 0) {
      // The modal might be closed before it had the chance to be mounted in the DOM.
      if (containerInfo.restore) {
        containerInfo.restore();
      }

      if (modal.modalRef) {
        // In case the modal wasn't in the DOM yet.
        ariaHidden(modal.modalRef, true);
      }

      ariaHiddenSiblings(containerInfo.container, modal.mount, modal.modalRef, containerInfo.hiddenSiblings, false);
      this.containers.splice(containerIndex, 1);
    } else {
      // Otherwise make sure the next top modal is visible to a screen reader.
      const nextTop = containerInfo.modals[containerInfo.modals.length - 1]; // as soon as a modal is adding its modalRef is undefined. it can't set
      // aria-hidden because the dom element doesn't exist either
      // when modal was unmounted before modalRef gets null

      if (nextTop.modalRef) {
        ariaHidden(nextTop.modalRef, false);
      }
    }

    return modalIndex;
  }

  isTopModal(modal) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === modal;
  }

}

/* eslint-disable @typescript-eslint/naming-convention, consistent-return, jsx-a11y/no-noninteractive-tabindex */
const candidatesSelector = ['input', 'select', 'textarea', 'a[href]', 'button', '[tabindex]', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])'].join(',');

function getTabIndex(node) {
  const tabindexAttr = parseInt(node.getAttribute('tabindex'), 10);

  if (!Number.isNaN(tabindexAttr)) {
    return tabindexAttr;
  } // Browsers do not return `tabIndex` correctly for contentEditable nodes;
  // https://bugs.chromium.org/p/chromium/issues/detail?id=661108&q=contenteditable%20tabindex&can=2
  // so if they don't have a tabindex attribute specifically set, assume it's 0.
  // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
  //  `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
  //  yet they are still part of the regular tab order; in FF, they get a default
  //  `tabIndex` of 0; since Chrome still puts those elements in the regular tab
  //  order, consider their tab index to be 0.


  if (node.contentEditable === 'true' || (node.nodeName === 'AUDIO' || node.nodeName === 'VIDEO' || node.nodeName === 'DETAILS') && node.getAttribute('tabindex') === null) {
    return 0;
  }

  return node.tabIndex;
}

function isNonTabbableRadio(node) {
  if (node.tagName !== 'INPUT' || node.type !== 'radio') {
    return false;
  }

  if (!node.name) {
    return false;
  }

  const getRadio = selector => node.ownerDocument.querySelector(`input[type="radio"]${selector}`);

  let roving = getRadio(`[name="${node.name}"]:checked`);

  if (!roving) {
    roving = getRadio(`[name="${node.name}"]`);
  }

  return roving !== node;
}

function isNodeMatchingSelectorFocusable(node) {
  if (node.disabled || node.tagName === 'INPUT' && node.type === 'hidden' || isNonTabbableRadio(node)) {
    return false;
  }

  return true;
}

function defaultGetTabbable(root) {
  const regularTabNodes = [];
  const orderedTabNodes = [];
  Array.from(root.querySelectorAll(candidatesSelector)).forEach((node, i) => {
    const nodeTabIndex = getTabIndex(node);

    if (nodeTabIndex === -1 || !isNodeMatchingSelectorFocusable(node)) {
      return;
    }

    if (nodeTabIndex === 0) {
      regularTabNodes.push(node);
    } else {
      orderedTabNodes.push({
        documentOrder: i,
        tabIndex: nodeTabIndex,
        node
      });
    }
  });
  return orderedTabNodes.sort((a, b) => a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex).map(a => a.node).concat(regularTabNodes);
}

function defaultIsEnabled() {
  return true;
}
/**
 * Utility component that locks focus inside the component.
 */


function Unstable_TrapFocus(props) {
  const {
    children,
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableRestoreFocus = false,
    getTabbable = defaultGetTabbable,
    isEnabled = defaultIsEnabled,
    open
  } = props;
  const ignoreNextEnforceFocus = e__default.useRef();
  const sentinelStart = e__default.useRef(null);
  const sentinelEnd = e__default.useRef(null);
  const nodeToRestore = e__default.useRef(null);
  const reactFocusEventTarget = e__default.useRef(null); // This variable is useful when disableAutoFocus is true.
  // It waits for the active element to move into the component to activate.

  const activated = e__default.useRef(false);
  const rootRef = e__default.useRef(null);
  const handleRef = useForkRef(children.ref, rootRef);
  const lastKeydown = e__default.useRef(null);
  e__default.useEffect(() => {
    // We might render an empty child.
    if (!open || !rootRef.current) {
      return;
    }

    activated.current = !disableAutoFocus;
  }, [disableAutoFocus, open]);
  e__default.useEffect(() => {
    // We might render an empty child.
    if (!open || !rootRef.current) {
      return;
    }

    const doc = ownerDocument(rootRef.current);

    if (!rootRef.current.contains(doc.activeElement)) {
      if (!rootRef.current.hasAttribute('tabIndex')) {

        rootRef.current.setAttribute('tabIndex', -1);
      }

      if (activated.current) {
        rootRef.current.focus();
      }
    }

    return () => {
      // restoreLastFocus()
      if (!disableRestoreFocus) {
        // In IE11 it is possible for document.activeElement to be null resulting
        // in nodeToRestore.current being null.
        // Not all elements in IE11 have a focus method.
        // Once IE11 support is dropped the focus() call can be unconditional.
        if (nodeToRestore.current && nodeToRestore.current.focus) {
          ignoreNextEnforceFocus.current = true;
          nodeToRestore.current.focus();
        }

        nodeToRestore.current = null;
      }
    }; // Missing `disableRestoreFocus` which is fine.
    // We don't support changing that prop on an open TrapFocus
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);
  e__default.useEffect(() => {
    // We might render an empty child.
    if (!open || !rootRef.current) {
      return;
    }

    const doc = ownerDocument(rootRef.current);

    const contain = nativeEvent => {
      const {
        current: rootElement
      } = rootRef; // Cleanup functions are executed lazily in React 17.
      // Contain can be called between the component being unmounted and its cleanup function being run.

      if (rootElement === null) {
        return;
      }

      if (!doc.hasFocus() || disableEnforceFocus || !isEnabled() || ignoreNextEnforceFocus.current) {
        ignoreNextEnforceFocus.current = false;
        return;
      }

      if (!rootElement.contains(doc.activeElement)) {
        // if the focus event is not coming from inside the children's react tree, reset the refs
        if (nativeEvent && reactFocusEventTarget.current !== nativeEvent.target || doc.activeElement !== reactFocusEventTarget.current) {
          reactFocusEventTarget.current = null;
        } else if (reactFocusEventTarget.current !== null) {
          return;
        }

        if (!activated.current) {
          return;
        }

        let tabbable = [];

        if (doc.activeElement === sentinelStart.current || doc.activeElement === sentinelEnd.current) {
          tabbable = getTabbable(rootRef.current);
        }

        if (tabbable.length > 0) {
          var _lastKeydown$current, _lastKeydown$current2;

          const isShiftTab = Boolean(((_lastKeydown$current = lastKeydown.current) == null ? void 0 : _lastKeydown$current.shiftKey) && ((_lastKeydown$current2 = lastKeydown.current) == null ? void 0 : _lastKeydown$current2.key) === 'Tab');
          const focusNext = tabbable[0];
          const focusPrevious = tabbable[tabbable.length - 1];

          if (isShiftTab) {
            focusPrevious.focus();
          } else {
            focusNext.focus();
          }
        } else {
          rootElement.focus();
        }
      }
    };

    const loopFocus = nativeEvent => {
      lastKeydown.current = nativeEvent;

      if (disableEnforceFocus || !isEnabled() || nativeEvent.key !== 'Tab') {
        return;
      } // Make sure the next tab starts from the right place.
      // doc.activeElement referes to the origin.


      if (doc.activeElement === rootRef.current && nativeEvent.shiftKey) {
        // We need to ignore the next contain as
        // it will try to move the focus back to the rootRef element.
        ignoreNextEnforceFocus.current = true;
        sentinelEnd.current.focus();
      }
    };

    doc.addEventListener('focusin', contain);
    doc.addEventListener('keydown', loopFocus, true); // With Edge, Safari and Firefox, no focus related events are fired when the focused area stops being a focused area.
    // e.g. https://bugzilla.mozilla.org/show_bug.cgi?id=559561.
    // Instead, we can look if the active element was restored on the BODY element.
    //
    // The whatwg spec defines how the browser should behave but does not explicitly mention any events:
    // https://html.spec.whatwg.org/multipage/interaction.html#focus-fixup-rule.

    const interval = setInterval(() => {
      if (doc.activeElement.tagName === 'BODY') {
        contain();
      }
    }, 50);
    return () => {
      clearInterval(interval);
      doc.removeEventListener('focusin', contain);
      doc.removeEventListener('keydown', loopFocus, true);
    };
  }, [disableAutoFocus, disableEnforceFocus, disableRestoreFocus, isEnabled, open, getTabbable]);

  const onFocus = event => {
    if (nodeToRestore.current === null) {
      nodeToRestore.current = event.relatedTarget;
    }

    activated.current = true;
    reactFocusEventTarget.current = event.target;
    const childrenPropsHandler = children.props.onFocus;

    if (childrenPropsHandler) {
      childrenPropsHandler(event);
    }
  };

  const handleFocusSentinel = event => {
    if (nodeToRestore.current === null) {
      nodeToRestore.current = event.relatedTarget;
    }

    activated.current = true;
  };

  return /*#__PURE__*/jsxRuntime.jsxs(e__default.Fragment, {
    children: [/*#__PURE__*/jsxRuntime.jsx("div", {
      tabIndex: 0,
      onFocus: handleFocusSentinel,
      ref: sentinelStart,
      "data-test": "sentinelStart"
    }), /*#__PURE__*/e__default.cloneElement(children, {
      ref: handleRef,
      onFocus
    }), /*#__PURE__*/jsxRuntime.jsx("div", {
      tabIndex: 0,
      onFocus: handleFocusSentinel,
      ref: sentinelEnd,
      "data-test": "sentinelEnd"
    })]
  });
}

function getModalUtilityClass(slot) {
  return generateUtilityClass('MuiModal', slot);
}
generateUtilityClasses('MuiModal', ['root', 'hidden']);

const _excluded$M = ["BackdropComponent", "BackdropProps", "children", "classes", "className", "closeAfterTransition", "component", "components", "componentsProps", "container", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onKeyDown", "open", "theme", "onTransitionEnter", "onTransitionExited"];

const useUtilityClasses$w = ownerState => {
  const {
    open,
    exited,
    classes
  } = ownerState;
  const slots = {
    root: ['root', !open && exited && 'hidden']
  };
  return composeClasses(slots, getModalUtilityClass, classes);
};

function getContainer(container) {
  return typeof container === 'function' ? container() : container;
}

function getHasTransition(props) {
  return props.children ? props.children.props.hasOwnProperty('in') : false;
} // A modal manager used to track and manage the state of open Modals.
// Modals don't open on the server so this won't conflict with concurrent requests.


const defaultManager = new ModalManager();
/**
 * Modal is a lower-level construct that is leveraged by the following components:
 *
 * - [Dialog](/api/dialog/)
 * - [Drawer](/api/drawer/)
 * - [Menu](/api/menu/)
 * - [Popover](/api/popover/)
 *
 * If you are creating a modal dialog, you probably want to use the [Dialog](/api/dialog/) component
 * rather than directly using Modal.
 *
 * This component shares many concepts with [react-overlays](https://react-bootstrap.github.io/react-overlays/#modals).
 */

const ModalUnstyled = /*#__PURE__*/e__default.forwardRef(function ModalUnstyled(props, ref) {
  const {
    BackdropComponent,
    BackdropProps,
    children,
    classes: classesProp,
    className,
    closeAfterTransition = false,
    component = 'div',
    components = {},
    componentsProps = {},
    container,
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableEscapeKeyDown = false,
    disablePortal = false,
    disableRestoreFocus = false,
    disableScrollLock = false,
    hideBackdrop = false,
    keepMounted = false,
    // private
    // eslint-disable-next-line react/prop-types
    manager = defaultManager,
    onBackdropClick,
    onClose,
    onKeyDown,
    open,

    /* eslint-disable react/prop-types */
    theme,
    onTransitionEnter,
    onTransitionExited
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$M);

  const [exited, setExited] = e__default.useState(true);
  const modal = e__default.useRef({});
  const mountNodeRef = e__default.useRef(null);
  const modalRef = e__default.useRef(null);
  const handleRef = useForkRef(modalRef, ref);
  const hasTransition = getHasTransition(props);

  const getDoc = () => ownerDocument(mountNodeRef.current);

  const getModal = () => {
    modal.current.modalRef = modalRef.current;
    modal.current.mountNode = mountNodeRef.current;
    return modal.current;
  };

  const handleMounted = () => {
    manager.mount(getModal(), {
      disableScrollLock
    }); // Fix a bug on Chrome where the scroll isn't initially 0.

    modalRef.current.scrollTop = 0;
  };

  const handleOpen = useEventCallback(() => {
    const resolvedContainer = getContainer(container) || getDoc().body;
    manager.add(getModal(), resolvedContainer); // The element was already mounted.

    if (modalRef.current) {
      handleMounted();
    }
  });
  const isTopModal = e__default.useCallback(() => manager.isTopModal(getModal()), [manager]);
  const handlePortalRef = useEventCallback(node => {
    mountNodeRef.current = node;

    if (!node) {
      return;
    }

    if (open && isTopModal()) {
      handleMounted();
    } else {
      ariaHidden(modalRef.current, true);
    }
  });
  const handleClose = e__default.useCallback(() => {
    manager.remove(getModal());
  }, [manager]);
  e__default.useEffect(() => {
    return () => {
      handleClose();
    };
  }, [handleClose]);
  e__default.useEffect(() => {
    if (open) {
      handleOpen();
    } else if (!hasTransition || !closeAfterTransition) {
      handleClose();
    }
  }, [open, handleClose, hasTransition, closeAfterTransition, handleOpen]);

  const ownerState = _extends({}, props, {
    classes: classesProp,
    closeAfterTransition,
    disableAutoFocus,
    disableEnforceFocus,
    disableEscapeKeyDown,
    disablePortal,
    disableRestoreFocus,
    disableScrollLock,
    exited,
    hideBackdrop,
    keepMounted
  });

  const classes = useUtilityClasses$w(ownerState);

  if (!keepMounted && !open && (!hasTransition || exited)) {
    return null;
  }

  const handleEnter = () => {
    setExited(false);

    if (onTransitionEnter) {
      onTransitionEnter();
    }
  };

  const handleExited = () => {
    setExited(true);

    if (onTransitionExited) {
      onTransitionExited();
    }

    if (closeAfterTransition) {
      handleClose();
    }
  };

  const handleBackdropClick = event => {
    if (event.target !== event.currentTarget) {
      return;
    }

    if (onBackdropClick) {
      onBackdropClick(event);
    }

    if (onClose) {
      onClose(event, 'backdropClick');
    }
  };

  const handleKeyDown = event => {
    if (onKeyDown) {
      onKeyDown(event);
    } // The handler doesn't take event.defaultPrevented into account:
    //
    // event.preventDefault() is meant to stop default behaviors like
    // clicking a checkbox to check it, hitting a button to submit a form,
    // and hitting left arrow to move the cursor in a text input etc.
    // Only special HTML elements have these default behaviors.


    if (event.key !== 'Escape' || !isTopModal()) {
      return;
    }

    if (!disableEscapeKeyDown) {
      // Swallow the event, in case someone is listening for the escape key on the body.
      event.stopPropagation();

      if (onClose) {
        onClose(event, 'escapeKeyDown');
      }
    }
  };

  const childProps = {};

  if (children.props.tabIndex === undefined) {
    childProps.tabIndex = '-1';
  } // It's a Transition like component


  if (hasTransition) {
    childProps.onEnter = createChainedFunction(handleEnter, children.props.onEnter);
    childProps.onExited = createChainedFunction(handleExited, children.props.onExited);
  }

  const Root = components.Root || component;
  const rootProps = componentsProps.root || {};
  return /*#__PURE__*/jsxRuntime.jsx(Portal$1, {
    ref: handlePortalRef,
    container: container,
    disablePortal: disablePortal,
    children: /*#__PURE__*/jsxRuntime.jsxs(Root, _extends({
      role: "presentation"
    }, rootProps, !isHostComponent(Root) && {
      as: component,
      ownerState: _extends({}, ownerState, rootProps.ownerState),
      theme
    }, other, {
      ref: handleRef,
      onKeyDown: handleKeyDown,
      className: l$2(classes.root, rootProps.className, className),
      children: [!hideBackdrop && BackdropComponent ? /*#__PURE__*/jsxRuntime.jsx(BackdropComponent, _extends({
        open: open,
        onClick: handleBackdropClick
      }, BackdropProps)) : null, /*#__PURE__*/jsxRuntime.jsx(Unstable_TrapFocus, {
        disableEnforceFocus: disableEnforceFocus,
        disableAutoFocus: disableAutoFocus,
        disableRestoreFocus: disableRestoreFocus,
        isEnabled: isTopModal,
        open: open,
        children: /*#__PURE__*/e__default.cloneElement(children, childProps)
      })]
    }))
  });
});
var ModalUnstyled$1 = ModalUnstyled;

function NoSsr(props) {
  const {
    children,
    defer = false,
    fallback = null
  } = props;
  const [mountedState, setMountedState] = e__default.useState(false);
  useEnhancedEffect$1(() => {
    if (!defer) {
      setMountedState(true);
    }
  }, [defer]);
  e__default.useEffect(() => {
    if (defer) {
      setMountedState(true);
    }
  }, [defer]); // We need the Fragment here to force react-docgen to recognise NoSsr as a component.

  return /*#__PURE__*/jsxRuntime.jsx(e__default.Fragment, {
    children: mountedState ? children : fallback
  });
}

function createMixins(breakpoints, spacing, mixins) {
  return _extends({
    toolbar: {
      minHeight: 56,
      [`${breakpoints.up('xs')} and (orientation: landscape)`]: {
        minHeight: 48
      },
      [breakpoints.up('sm')]: {
        minHeight: 64
      }
    }
  }, mixins);
}

const common = {
  black: '#000',
  white: '#fff'
};
var common$1 = common;

const grey = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#f5f5f5',
  A200: '#eeeeee',
  A400: '#bdbdbd',
  A700: '#616161'
};
var grey$1 = grey;

const purple = {
  50: '#f3e5f5',
  100: '#e1bee7',
  200: '#ce93d8',
  300: '#ba68c8',
  400: '#ab47bc',
  500: '#9c27b0',
  600: '#8e24aa',
  700: '#7b1fa2',
  800: '#6a1b9a',
  900: '#4a148c',
  A100: '#ea80fc',
  A200: '#e040fb',
  A400: '#d500f9',
  A700: '#aa00ff'
};
var purple$1 = purple;

const red = {
  50: '#ffebee',
  100: '#ffcdd2',
  200: '#ef9a9a',
  300: '#e57373',
  400: '#ef5350',
  500: '#f44336',
  600: '#e53935',
  700: '#d32f2f',
  800: '#c62828',
  900: '#b71c1c',
  A100: '#ff8a80',
  A200: '#ff5252',
  A400: '#ff1744',
  A700: '#d50000'
};
var red$1 = red;

const orange = {
  50: '#fff3e0',
  100: '#ffe0b2',
  200: '#ffcc80',
  300: '#ffb74d',
  400: '#ffa726',
  500: '#ff9800',
  600: '#fb8c00',
  700: '#f57c00',
  800: '#ef6c00',
  900: '#e65100',
  A100: '#ffd180',
  A200: '#ffab40',
  A400: '#ff9100',
  A700: '#ff6d00'
};
var orange$1 = orange;

const blue = {
  50: '#e3f2fd',
  100: '#bbdefb',
  200: '#90caf9',
  300: '#64b5f6',
  400: '#42a5f5',
  500: '#2196f3',
  600: '#1e88e5',
  700: '#1976d2',
  800: '#1565c0',
  900: '#0d47a1',
  A100: '#82b1ff',
  A200: '#448aff',
  A400: '#2979ff',
  A700: '#2962ff'
};
var blue$1 = blue;

const lightBlue = {
  50: '#e1f5fe',
  100: '#b3e5fc',
  200: '#81d4fa',
  300: '#4fc3f7',
  400: '#29b6f6',
  500: '#03a9f4',
  600: '#039be5',
  700: '#0288d1',
  800: '#0277bd',
  900: '#01579b',
  A100: '#80d8ff',
  A200: '#40c4ff',
  A400: '#00b0ff',
  A700: '#0091ea'
};
var lightBlue$1 = lightBlue;

const green = {
  50: '#e8f5e9',
  100: '#c8e6c9',
  200: '#a5d6a7',
  300: '#81c784',
  400: '#66bb6a',
  500: '#4caf50',
  600: '#43a047',
  700: '#388e3c',
  800: '#2e7d32',
  900: '#1b5e20',
  A100: '#b9f6ca',
  A200: '#69f0ae',
  A400: '#00e676',
  A700: '#00c853'
};
var green$1 = green;

const _excluded$L = ["mode", "contrastThreshold", "tonalOffset"];
const light = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: 'rgba(0, 0, 0, 0.87)',
    // Secondary text.
    secondary: 'rgba(0, 0, 0, 0.6)',
    // Disabled text have even lower visual prominence.
    disabled: 'rgba(0, 0, 0, 0.38)'
  },
  // The color used to divide different elements.
  divider: 'rgba(0, 0, 0, 0.12)',
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: common$1.white,
    default: common$1.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: 'rgba(0, 0, 0, 0.54)',
    // The color of an hovered action.
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: 'rgba(0, 0, 0, 0.26)',
    // The background color of a disabled action.
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
};
const dark = {
  text: {
    primary: common$1.white,
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)'
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: '#121212',
    default: '#121212'
  },
  action: {
    active: common$1.white,
    hover: 'rgba(255, 255, 255, 0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(255, 255, 255, 0.16)',
    selectedOpacity: 0.16,
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(255, 255, 255, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};

function addLightOrDark(intent, direction, shade, tonalOffset) {
  const tonalOffsetLight = tonalOffset.light || tonalOffset;
  const tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;

  if (!intent[direction]) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === 'light') {
      intent.light = lighten(intent.main, tonalOffsetLight);
    } else if (direction === 'dark') {
      intent.dark = darken(intent.main, tonalOffsetDark);
    }
  }
}

function getDefaultPrimary(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: blue$1[200],
      light: blue$1[50],
      dark: blue$1[400]
    };
  }

  return {
    main: blue$1[700],
    light: blue$1[400],
    dark: blue$1[800]
  };
}

function getDefaultSecondary(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: purple$1[200],
      light: purple$1[50],
      dark: purple$1[400]
    };
  }

  return {
    main: purple$1[500],
    light: purple$1[300],
    dark: purple$1[700]
  };
}

function getDefaultError(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: red$1[500],
      light: red$1[300],
      dark: red$1[700]
    };
  }

  return {
    main: red$1[700],
    light: red$1[400],
    dark: red$1[800]
  };
}

function getDefaultInfo(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: lightBlue$1[400],
      light: lightBlue$1[300],
      dark: lightBlue$1[700]
    };
  }

  return {
    main: lightBlue$1[700],
    light: lightBlue$1[500],
    dark: lightBlue$1[900]
  };
}

function getDefaultSuccess(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: green$1[400],
      light: green$1[300],
      dark: green$1[700]
    };
  }

  return {
    main: green$1[800],
    light: green$1[500],
    dark: green$1[900]
  };
}

function getDefaultWarning(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: orange$1[400],
      light: orange$1[300],
      dark: orange$1[700]
    };
  }

  return {
    main: '#ED6C02',
    // closest to orange[800] that pass 3:1.
    light: orange$1[500],
    dark: orange$1[900]
  };
}

function createPalette(palette) {
  const {
    mode = 'light',
    contrastThreshold = 3,
    tonalOffset = 0.2
  } = palette,
        other = _objectWithoutPropertiesLoose(palette, _excluded$L);

  const primary = palette.primary || getDefaultPrimary(mode);
  const secondary = palette.secondary || getDefaultSecondary(mode);
  const error = palette.error || getDefaultError(mode);
  const info = palette.info || getDefaultInfo(mode);
  const success = palette.success || getDefaultSuccess(mode);
  const warning = palette.warning || getDefaultWarning(mode); // Use the same logic as
  // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
  // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54

  function getContrastText(background) {
    const contrastText = getContrastRatio(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;

    return contrastText;
  }

  const augmentColor = ({
    color,
    name,
    mainShade = 500,
    lightShade = 300,
    darkShade = 700
  }) => {
    color = _extends({}, color);

    if (!color.main && color[mainShade]) {
      color.main = color[mainShade];
    }

    if (!color.hasOwnProperty('main')) {
      throw new Error(formatMuiErrorMessage(11, name ? ` (${name})` : '', mainShade));
    }

    if (typeof color.main !== 'string') {
      throw new Error(formatMuiErrorMessage(12, name ? ` (${name})` : '', JSON.stringify(color.main)));
    }

    addLightOrDark(color, 'light', lightShade, tonalOffset);
    addLightOrDark(color, 'dark', darkShade, tonalOffset);

    if (!color.contrastText) {
      color.contrastText = getContrastText(color.main);
    }

    return color;
  };

  const modes = {
    dark,
    light
  };

  const paletteOutput = deepmerge(_extends({
    // A collection of common colors.
    common: common$1,
    // The palette mode, can be light or dark.
    mode,
    // The colors used to represent primary interface elements for a user.
    primary: augmentColor({
      color: primary,
      name: 'primary'
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: augmentColor({
      color: secondary,
      name: 'secondary',
      mainShade: 'A400',
      lightShade: 'A200',
      darkShade: 'A700'
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: augmentColor({
      color: error,
      name: 'error'
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: augmentColor({
      color: warning,
      name: 'warning'
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: augmentColor({
      color: info,
      name: 'info'
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: augmentColor({
      color: success,
      name: 'success'
    }),
    // The grey colors.
    grey: grey$1,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText,
    // Generate a rich color object.
    augmentColor,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset
  }, modes[mode]), other);
  return paletteOutput;
}

const _excluded$K = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];

function round$2(value) {
  return Math.round(value * 1e5) / 1e5;
}

const caseAllCaps = {
  textTransform: 'uppercase'
};
const defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
/**
 * @see @link{https://material.io/design/typography/the-type-system.html}
 * @see @link{https://material.io/design/typography/understanding-typography.html}
 */

function createTypography(palette, typography) {
  const _ref = typeof typography === 'function' ? typography(palette) : typography,
        {
    fontFamily = defaultFontFamily,
    // The default font size of the Material Specification.
    fontSize = 14,
    // px
    fontWeightLight = 300,
    fontWeightRegular = 400,
    fontWeightMedium = 500,
    fontWeightBold = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize = 16,
    // Apply the CSS properties to all the variants.
    allVariants,
    pxToRem: pxToRem2
  } = _ref,
        other = _objectWithoutPropertiesLoose(_ref, _excluded$K);

  const coef = fontSize / 14;

  const pxToRem = pxToRem2 || (size => `${size / htmlFontSize * coef}rem`);

  const buildVariant = (fontWeight, size, lineHeight, letterSpacing, casing) => _extends({
    fontFamily,
    fontWeight,
    fontSize: pxToRem(size),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight
  }, fontFamily === defaultFontFamily ? {
    letterSpacing: `${round$2(letterSpacing / size)}em`
  } : {}, casing, allVariants);

  const variants = {
    h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
    h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
    h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
    h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
    h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps)
  };
  return deepmerge(_extends({
    htmlFontSize,
    pxToRem,
    fontFamily,
    fontSize,
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightBold
  }, variants), other, {
    clone: false // No need to clone deep

  });
}

const shadowKeyUmbraOpacity = 0.2;
const shadowKeyPenumbraOpacity = 0.14;
const shadowAmbientShadowOpacity = 0.12;

function createShadow(...px) {
  return [`${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,${shadowKeyUmbraOpacity})`, `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,${shadowKeyPenumbraOpacity})`, `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,0,0,${shadowAmbientShadowOpacity})`].join(',');
} // Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss


const shadows = ['none', createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
var shadows$1 = shadows;

const _excluded$J = ["duration", "easing", "delay"];
// Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
// to learn the context in which each easing should be used.
const easing = {
  // This is the most common easing curve.
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
}; // Follow https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
// to learn when use what timing

const duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};

function formatMs(milliseconds) {
  return `${Math.round(milliseconds)}ms`;
}

function getAutoHeightDuration(height) {
  if (!height) {
    return 0;
  }

  const constant = height / 36; // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10

  return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
}

function createTransitions(inputTransitions) {
  const mergedEasing = _extends({}, easing, inputTransitions.easing);

  const mergedDuration = _extends({}, duration, inputTransitions.duration);

  const create = (props = ['all'], options = {}) => {
    const {
      duration: durationOption = mergedDuration.standard,
      easing: easingOption = mergedEasing.easeInOut,
      delay = 0
    } = options;
          _objectWithoutPropertiesLoose(options, _excluded$J);

    return (Array.isArray(props) ? props : [props]).map(animatedProp => `${animatedProp} ${typeof durationOption === 'string' ? durationOption : formatMs(durationOption)} ${easingOption} ${typeof delay === 'string' ? delay : formatMs(delay)}`).join(',');
  };

  return _extends({
    getAutoHeightDuration,
    create
  }, inputTransitions, {
    easing: mergedEasing,
    duration: mergedDuration
  });
}

// We need to centralize the zIndex definitions as they work
// like global values in the browser.
const zIndex = {
  mobileStepper: 1000,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
var zIndex$1 = zIndex;

const _excluded$I = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];

function createTheme(options = {}, ...args) {
  const {
    mixins: mixinsInput = {},
    palette: paletteInput = {},
    transitions: transitionsInput = {},
    typography: typographyInput = {}
  } = options,
        other = _objectWithoutPropertiesLoose(options, _excluded$I);

  const palette = createPalette(paletteInput);
  const systemTheme = createTheme$1(options);
  let muiTheme = deepmerge(systemTheme, {
    mixins: createMixins(systemTheme.breakpoints, systemTheme.spacing, mixinsInput),
    palette,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: shadows$1.slice(),
    typography: createTypography(palette, typographyInput),
    transitions: createTransitions(transitionsInput),
    zIndex: _extends({}, zIndex$1)
  });
  muiTheme = deepmerge(muiTheme, other);
  muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);

  return muiTheme;
}

const defaultTheme = createTheme();
var defaultTheme$1 = defaultTheme;

function useTheme() {
  const theme = useTheme$1(defaultTheme$1);

  return theme;
}

function useThemeProps({
  props,
  name
}) {
  return useThemeProps$1({
    props,
    name,
    defaultTheme: defaultTheme$1
  });
}

const rootShouldForwardProp = prop => shouldForwardProp(prop) && prop !== 'classes';
const slotShouldForwardProp = shouldForwardProp;
const styled = createStyled({
  defaultTheme: defaultTheme$1,
  rootShouldForwardProp
});
var styled$1 = styled;

const _excluded$H = ["components", "componentsProps", "color", "invisible", "badgeContent", "showZero", "variant"];
const badgeClasses = _extends({}, badgeUnstyledClasses$1, generateUtilityClasses('MuiBadge', ['colorError', 'colorInfo', 'colorPrimary', 'colorSecondary', 'colorSuccess', 'colorWarning']));
const RADIUS_STANDARD = 10;
const RADIUS_DOT = 4;

const extendUtilityClasses$2 = ownerState => {
  const {
    color,
    classes = {}
  } = ownerState;
  return _extends({}, classes, {
    badge: l$2(classes.badge, color !== 'default' && [getBadgeUtilityClass(`color${capitalize(color)}`), classes[`color${capitalize(color)}`]])
  });
};

const BadgeRoot = styled$1('span', {
  name: 'MuiBadge',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({
  position: 'relative',
  display: 'inline-flex',
  // For correct alignment with the text.
  verticalAlign: 'middle',
  flexShrink: 0
});
const BadgeBadge = styled$1('span', {
  name: 'MuiBadge',
  slot: 'Badge',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.badge, styles[ownerState.variant], styles[`anchorOrigin${capitalize(ownerState.anchorOrigin.vertical)}${capitalize(ownerState.anchorOrigin.horizontal)}${capitalize(ownerState.overlap)}`], ownerState.color !== 'default' && styles[`color${capitalize(ownerState.color)}`], ownerState.invisible && styles.invisible];
  }
})(({
  theme,
  ownerState
}) => _extends({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  boxSizing: 'border-box',
  fontFamily: theme.typography.fontFamily,
  fontWeight: theme.typography.fontWeightMedium,
  fontSize: theme.typography.pxToRem(12),
  minWidth: RADIUS_STANDARD * 2,
  lineHeight: 1,
  padding: '0 6px',
  height: RADIUS_STANDARD * 2,
  borderRadius: RADIUS_STANDARD,
  zIndex: 1,
  // Render the badge on top of potential ripples.
  transition: theme.transitions.create('transform', {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.enteringScreen
  })
}, ownerState.color !== 'default' && {
  backgroundColor: theme.palette[ownerState.color].main,
  color: theme.palette[ownerState.color].contrastText
}, ownerState.variant === 'dot' && {
  borderRadius: RADIUS_DOT,
  height: RADIUS_DOT * 2,
  minWidth: RADIUS_DOT * 2,
  padding: 0
}, ownerState.anchorOrigin.vertical === 'top' && ownerState.anchorOrigin.horizontal === 'right' && ownerState.overlap === 'rectangular' && {
  top: 0,
  right: 0,
  transform: 'scale(1) translate(50%, -50%)',
  transformOrigin: '100% 0%',
  [`&.${badgeClasses.invisible}`]: {
    transform: 'scale(0) translate(50%, -50%)'
  }
}, ownerState.anchorOrigin.vertical === 'bottom' && ownerState.anchorOrigin.horizontal === 'right' && ownerState.overlap === 'rectangular' && {
  bottom: 0,
  right: 0,
  transform: 'scale(1) translate(50%, 50%)',
  transformOrigin: '100% 100%',
  [`&.${badgeClasses.invisible}`]: {
    transform: 'scale(0) translate(50%, 50%)'
  }
}, ownerState.anchorOrigin.vertical === 'top' && ownerState.anchorOrigin.horizontal === 'left' && ownerState.overlap === 'rectangular' && {
  top: 0,
  left: 0,
  transform: 'scale(1) translate(-50%, -50%)',
  transformOrigin: '0% 0%',
  [`&.${badgeClasses.invisible}`]: {
    transform: 'scale(0) translate(-50%, -50%)'
  }
}, ownerState.anchorOrigin.vertical === 'bottom' && ownerState.anchorOrigin.horizontal === 'left' && ownerState.overlap === 'rectangular' && {
  bottom: 0,
  left: 0,
  transform: 'scale(1) translate(-50%, 50%)',
  transformOrigin: '0% 100%',
  [`&.${badgeClasses.invisible}`]: {
    transform: 'scale(0) translate(-50%, 50%)'
  }
}, ownerState.anchorOrigin.vertical === 'top' && ownerState.anchorOrigin.horizontal === 'right' && ownerState.overlap === 'circular' && {
  top: '14%',
  right: '14%',
  transform: 'scale(1) translate(50%, -50%)',
  transformOrigin: '100% 0%',
  [`&.${badgeClasses.invisible}`]: {
    transform: 'scale(0) translate(50%, -50%)'
  }
}, ownerState.anchorOrigin.vertical === 'bottom' && ownerState.anchorOrigin.horizontal === 'right' && ownerState.overlap === 'circular' && {
  bottom: '14%',
  right: '14%',
  transform: 'scale(1) translate(50%, 50%)',
  transformOrigin: '100% 100%',
  [`&.${badgeClasses.invisible}`]: {
    transform: 'scale(0) translate(50%, 50%)'
  }
}, ownerState.anchorOrigin.vertical === 'top' && ownerState.anchorOrigin.horizontal === 'left' && ownerState.overlap === 'circular' && {
  top: '14%',
  left: '14%',
  transform: 'scale(1) translate(-50%, -50%)',
  transformOrigin: '0% 0%',
  [`&.${badgeClasses.invisible}`]: {
    transform: 'scale(0) translate(-50%, -50%)'
  }
}, ownerState.anchorOrigin.vertical === 'bottom' && ownerState.anchorOrigin.horizontal === 'left' && ownerState.overlap === 'circular' && {
  bottom: '14%',
  left: '14%',
  transform: 'scale(1) translate(-50%, 50%)',
  transformOrigin: '0% 100%',
  [`&.${badgeClasses.invisible}`]: {
    transform: 'scale(0) translate(-50%, 50%)'
  }
}, ownerState.invisible && {
  transition: theme.transitions.create('transform', {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.leavingScreen
  })
}));
const Badge = /*#__PURE__*/e__default.forwardRef(function Badge(inProps, ref) {
  var _componentsProps$root, _componentsProps$badg;

  const props = useThemeProps({
    props: inProps,
    name: 'MuiBadge'
  });

  const {
    components = {},
    componentsProps = {},
    color: colorProp = 'default',
    invisible: invisibleProp,
    badgeContent: badgeContentProp,
    showZero = false,
    variant: variantProp = 'standard'
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$H);

  const prevProps = usePreviousProps$1({
    color: colorProp
  });
  let invisible = invisibleProp;

  if (invisibleProp == null && (badgeContentProp === 0 && !showZero || badgeContentProp == null && variantProp !== 'dot')) {
    invisible = true;
  }

  const {
    color = colorProp
  } = invisible ? prevProps : props;

  const ownerState = _extends({}, props, {
    invisible,
    color
  });

  const classes = extendUtilityClasses$2(ownerState);
  return /*#__PURE__*/jsxRuntime.jsx(BadgeUnstyled$1, _extends({
    invisible: invisibleProp,
    badgeContent: badgeContentProp,
    showZero: showZero,
    variant: variantProp
  }, other, {
    components: _extends({
      Root: BadgeRoot,
      Badge: BadgeBadge
    }, components),
    componentsProps: {
      root: _extends({}, componentsProps.root, (!components.Root || !isHostComponent(components.Root)) && {
        ownerState: _extends({}, (_componentsProps$root = componentsProps.root) == null ? void 0 : _componentsProps$root.ownerState, {
          color
        })
      }),
      badge: _extends({}, componentsProps.badge, (!components.Thumb || !isHostComponent(components.Thumb)) && {
        ownerState: _extends({}, (_componentsProps$badg = componentsProps.badge) == null ? void 0 : _componentsProps$badg.ownerState, {
          color
        })
      })
    },
    classes: classes,
    ref: ref
  }));
});
var w = Badge;

var config = {
  disabled: false
};

var TransitionGroupContext = e__default.createContext(null);

var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [ReactDOM.findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : ReactDOM.findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children;
        _this$props.in;
        _this$props.mountOnEnter;
        _this$props.unmountOnExit;
        _this$props.appear;
        _this$props.enter;
        _this$props.exit;
        _this$props.timeout;
        _this$props.addEndListener;
        _this$props.onEnter;
        _this$props.onEntering;
        _this$props.onEntered;
        _this$props.onExit;
        _this$props.onExiting;
        _this$props.onExited;
        _this$props.nodeRef;
        var childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      e__default.createElement(TransitionGroupContext.Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : e__default.cloneElement(e__default.Children.only(children), childProps))
    );
  };

  return Transition;
}(e__default.Component);

Transition.contextType = TransitionGroupContext;
Transition.propTypes = {}; // Name the function so it is clearer in the documentation

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
var Transition$1 = Transition;

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */

function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && isValidElement(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */

function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return cloneElement(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!isValidElement(child)) return;
    var hasPrev = (key in prevChildMapping);
    var hasNext = (key in nextChildMapping);
    var prevChild = prevChildMapping[key];
    var isLeaving = isValidElement(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = cloneElement(child, {
        in: false
      });
    } else if (hasNext && hasPrev && isValidElement(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}

var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
};
/**
 * The `<TransitionGroup>` component manages a set of transition components
 * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
 * components, `<TransitionGroup>` is a state machine for managing the mounting
 * and unmounting of components over time.
 *
 * Consider the example below. As items are removed or added to the TodoList the
 * `in` prop is toggled automatically by the `<TransitionGroup>`.
 *
 * Note that `<TransitionGroup>`  does not define any animation behavior!
 * Exactly _how_ a list item animates is up to the individual transition
 * component. This means you can mix and match animations across different list
 * items.
 */

var TransitionGroup = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(_assertThisInitialized(_this)); // Initial children should all be entering, dependent on appear


    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  } // node is `undefined` when user provided `nodeRef` prop
  ;

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = getChildMapping(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = _extends({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return /*#__PURE__*/e__default.createElement(TransitionGroupContext.Provider, {
        value: contextValue
      }, children);
    }

    return /*#__PURE__*/e__default.createElement(TransitionGroupContext.Provider, {
      value: contextValue
    }, /*#__PURE__*/e__default.createElement(Component, props, children));
  };

  return TransitionGroup;
}(e__default.Component);

TransitionGroup.propTypes = {};
TransitionGroup.defaultProps = defaultProps;
var TransitionGroup$1 = TransitionGroup;

function Ripple(props) {
  const {
    className,
    classes,
    pulsate = false,
    rippleX,
    rippleY,
    rippleSize,
    in: inProp,
    onExited,
    timeout
  } = props;
  const [leaving, setLeaving] = e__default.useState(false);
  const rippleClassName = l$2(className, classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate);
  const rippleStyles = {
    width: rippleSize,
    height: rippleSize,
    top: -(rippleSize / 2) + rippleY,
    left: -(rippleSize / 2) + rippleX
  };
  const childClassName = l$2(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);

  if (!inProp && !leaving) {
    setLeaving(true);
  }

  e__default.useEffect(() => {
    if (!inProp && onExited != null) {
      // react-transition-group#onExited
      const timeoutId = setTimeout(onExited, timeout);
      return () => {
        clearTimeout(timeoutId);
      };
    }

    return undefined;
  }, [onExited, inProp, timeout]);
  return /*#__PURE__*/jsxRuntime.jsx("span", {
    className: rippleClassName,
    style: rippleStyles,
    children: /*#__PURE__*/jsxRuntime.jsx("span", {
      className: childClassName
    })
  });
}

const touchRippleClasses = generateUtilityClasses('MuiTouchRipple', ['root', 'ripple', 'rippleVisible', 'ripplePulsate', 'child', 'childLeaving', 'childPulsate']);
var touchRippleClasses$1 = touchRippleClasses;

const _excluded$G = ["center", "classes", "className"];

let _$2 = t => t,
    _t$2,
    _t2$1,
    _t3$1,
    _t4$1;
const DURATION = 550;
const DELAY_RIPPLE = 80;
const enterKeyframe = keyframes(_t$2 || (_t$2 = _$2`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`));
const exitKeyframe = keyframes(_t2$1 || (_t2$1 = _$2`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`));
const pulsateKeyframe = keyframes(_t3$1 || (_t3$1 = _$2`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`));
const TouchRippleRoot = styled$1('span', {
  name: 'MuiTouchRipple',
  slot: 'Root',
  skipSx: true
})({
  overflow: 'hidden',
  pointerEvents: 'none',
  position: 'absolute',
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: 'inherit'
}); // This `styled()` function invokes keyframes. `styled-components` only supports keyframes
// in string templates. Do not convert these styles in JS object as it will break.

const TouchRippleRipple = styled$1(Ripple, {
  name: 'MuiTouchRipple',
  slot: 'Ripple'
})(_t4$1 || (_t4$1 = _$2`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), touchRippleClasses$1.rippleVisible, enterKeyframe, DURATION, ({
  theme
}) => theme.transitions.easing.easeInOut, touchRippleClasses$1.ripplePulsate, ({
  theme
}) => theme.transitions.duration.shorter, touchRippleClasses$1.child, touchRippleClasses$1.childLeaving, exitKeyframe, DURATION, ({
  theme
}) => theme.transitions.easing.easeInOut, touchRippleClasses$1.childPulsate, pulsateKeyframe, ({
  theme
}) => theme.transitions.easing.easeInOut);
/**
 * @ignore - internal component.
 *
 * TODO v5: Make private
 */

const TouchRipple = /*#__PURE__*/e__default.forwardRef(function TouchRipple(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiTouchRipple'
  });

  const {
    center: centerProp = false,
    classes = {},
    className
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$G);

  const [ripples, setRipples] = e__default.useState([]);
  const nextKey = e__default.useRef(0);
  const rippleCallback = e__default.useRef(null);
  e__default.useEffect(() => {
    if (rippleCallback.current) {
      rippleCallback.current();
      rippleCallback.current = null;
    }
  }, [ripples]); // Used to filter out mouse emulated events on mobile.

  const ignoringMouseDown = e__default.useRef(false); // We use a timer in order to only show the ripples for touch "click" like events.
  // We don't want to display the ripple for touch scroll events.

  const startTimer = e__default.useRef(null); // This is the hook called once the previous timeout is ready.

  const startTimerCommit = e__default.useRef(null);
  const container = e__default.useRef(null);
  e__default.useEffect(() => {
    return () => {
      clearTimeout(startTimer.current);
    };
  }, []);
  const startCommit = e__default.useCallback(params => {
    const {
      pulsate,
      rippleX,
      rippleY,
      rippleSize,
      cb
    } = params;
    setRipples(oldRipples => [...oldRipples, /*#__PURE__*/jsxRuntime.jsx(TouchRippleRipple, {
      classes: {
        ripple: l$2(classes.ripple, touchRippleClasses$1.ripple),
        rippleVisible: l$2(classes.rippleVisible, touchRippleClasses$1.rippleVisible),
        ripplePulsate: l$2(classes.ripplePulsate, touchRippleClasses$1.ripplePulsate),
        child: l$2(classes.child, touchRippleClasses$1.child),
        childLeaving: l$2(classes.childLeaving, touchRippleClasses$1.childLeaving),
        childPulsate: l$2(classes.childPulsate, touchRippleClasses$1.childPulsate)
      },
      timeout: DURATION,
      pulsate: pulsate,
      rippleX: rippleX,
      rippleY: rippleY,
      rippleSize: rippleSize
    }, nextKey.current)]);
    nextKey.current += 1;
    rippleCallback.current = cb;
  }, [classes]);
  const start = e__default.useCallback((event = {}, options = {}, cb) => {
    const {
      pulsate = false,
      center = centerProp || options.pulsate,
      fakeElement = false // For test purposes

    } = options;

    if (event.type === 'mousedown' && ignoringMouseDown.current) {
      ignoringMouseDown.current = false;
      return;
    }

    if (event.type === 'touchstart') {
      ignoringMouseDown.current = true;
    }

    const element = fakeElement ? null : container.current;
    const rect = element ? element.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    }; // Get the size of the ripple

    let rippleX;
    let rippleY;
    let rippleSize;

    if (center || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
      rippleX = Math.round(rect.width / 2);
      rippleY = Math.round(rect.height / 2);
    } else {
      const {
        clientX,
        clientY
      } = event.touches ? event.touches[0] : event;
      rippleX = Math.round(clientX - rect.left);
      rippleY = Math.round(clientY - rect.top);
    }

    if (center) {
      rippleSize = Math.sqrt((2 * rect.width ** 2 + rect.height ** 2) / 3); // For some reason the animation is broken on Mobile Chrome if the size is even.

      if (rippleSize % 2 === 0) {
        rippleSize += 1;
      }
    } else {
      const sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
      const sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
      rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2);
    } // Touche devices


    if (event.touches) {
      // check that this isn't another touchstart due to multitouch
      // otherwise we will only clear a single timer when unmounting while two
      // are running
      if (startTimerCommit.current === null) {
        // Prepare the ripple effect.
        startTimerCommit.current = () => {
          startCommit({
            pulsate,
            rippleX,
            rippleY,
            rippleSize,
            cb
          });
        }; // Delay the execution of the ripple effect.


        startTimer.current = setTimeout(() => {
          if (startTimerCommit.current) {
            startTimerCommit.current();
            startTimerCommit.current = null;
          }
        }, DELAY_RIPPLE); // We have to make a tradeoff with this value.
      }
    } else {
      startCommit({
        pulsate,
        rippleX,
        rippleY,
        rippleSize,
        cb
      });
    }
  }, [centerProp, startCommit]);
  const pulsate = e__default.useCallback(() => {
    start({}, {
      pulsate: true
    });
  }, [start]);
  const stop = e__default.useCallback((event, cb) => {
    clearTimeout(startTimer.current); // The touch interaction occurs too quickly.
    // We still want to show ripple effect.

    if (event.type === 'touchend' && startTimerCommit.current) {
      startTimerCommit.current();
      startTimerCommit.current = null;
      startTimer.current = setTimeout(() => {
        stop(event, cb);
      });
      return;
    }

    startTimerCommit.current = null;
    setRipples(oldRipples => {
      if (oldRipples.length > 0) {
        return oldRipples.slice(1);
      }

      return oldRipples;
    });
    rippleCallback.current = cb;
  }, []);
  e__default.useImperativeHandle(ref, () => ({
    pulsate,
    start,
    stop
  }), [pulsate, start, stop]);
  return /*#__PURE__*/jsxRuntime.jsx(TouchRippleRoot, _extends({
    className: l$2(classes.root, touchRippleClasses$1.root, className),
    ref: container
  }, other, {
    children: /*#__PURE__*/jsxRuntime.jsx(TransitionGroup$1, {
      component: null,
      exit: true,
      children: ripples
    })
  }));
});
var TouchRipple$1 = TouchRipple;

function getButtonBaseUtilityClass(slot) {
  return generateUtilityClass('MuiButtonBase', slot);
}
const buttonBaseClasses = generateUtilityClasses('MuiButtonBase', ['root', 'disabled', 'focusVisible']);
var buttonBaseClasses$1 = buttonBaseClasses;

const _excluded$F = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "type"];

const useUtilityClasses$v = ownerState => {
  const {
    disabled,
    focusVisible,
    focusVisibleClassName,
    classes
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', focusVisible && 'focusVisible']
  };
  const composedClasses = composeClasses(slots, getButtonBaseUtilityClass, classes);

  if (focusVisible && focusVisibleClassName) {
    composedClasses.root += ` ${focusVisibleClassName}`;
  }

  return composedClasses;
};

const ButtonBaseRoot = styled$1('button', {
  name: 'MuiButtonBase',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  boxSizing: 'border-box',
  WebkitTapHighlightColor: 'transparent',
  backgroundColor: 'transparent',
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: 'pointer',
  userSelect: 'none',
  verticalAlign: 'middle',
  MozAppearance: 'none',
  // Reset
  WebkitAppearance: 'none',
  // Reset
  textDecoration: 'none',
  // So we take precedent over the style of a native <a /> element.
  color: 'inherit',
  '&::-moz-focus-inner': {
    borderStyle: 'none' // Remove Firefox dotted outline.

  },
  [`&.${buttonBaseClasses$1.disabled}`]: {
    pointerEvents: 'none',
    // Disable link interactions
    cursor: 'default'
  },
  '@media print': {
    colorAdjust: 'exact'
  }
});
/**
 * `ButtonBase` contains as few styles as possible.
 * It aims to be a simple building block for creating a button.
 * It contains a load of style reset and some focus/ripple logic.
 */

const ButtonBase = /*#__PURE__*/e__default.forwardRef(function ButtonBase(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiButtonBase'
  });

  const {
    action,
    centerRipple = false,
    children,
    className,
    component = 'button',
    disabled = false,
    disableRipple = false,
    disableTouchRipple = false,
    focusRipple = false,
    LinkComponent = 'a',
    onBlur,
    onClick,
    onContextMenu,
    onDragLeave,
    onFocus,
    onFocusVisible,
    onKeyDown,
    onKeyUp,
    onMouseDown,
    onMouseLeave,
    onMouseUp,
    onTouchEnd,
    onTouchMove,
    onTouchStart,
    tabIndex = 0,
    TouchRippleProps,
    type
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$F);

  const buttonRef = e__default.useRef(null);
  const rippleRef = e__default.useRef(null);
  const {
    isFocusVisibleRef,
    onFocus: handleFocusVisible,
    onBlur: handleBlurVisible,
    ref: focusVisibleRef
  } = useIsFocusVisible();
  const [focusVisible, setFocusVisible] = e__default.useState(false);

  if (disabled && focusVisible) {
    setFocusVisible(false);
  }

  e__default.useImperativeHandle(action, () => ({
    focusVisible: () => {
      setFocusVisible(true);
      buttonRef.current.focus();
    }
  }), []);
  e__default.useEffect(() => {
    if (focusVisible && focusRipple && !disableRipple) {
      rippleRef.current.pulsate();
    }
  }, [disableRipple, focusRipple, focusVisible]);

  function useRippleHandler(rippleAction, eventCallback, skipRippleAction = disableTouchRipple) {
    return useEventCallback(event => {
      if (eventCallback) {
        eventCallback(event);
      }

      const ignore = skipRippleAction;

      if (!ignore && rippleRef.current) {
        rippleRef.current[rippleAction](event);
      }

      return true;
    });
  }

  const handleMouseDown = useRippleHandler('start', onMouseDown);
  const handleContextMenu = useRippleHandler('stop', onContextMenu);
  const handleDragLeave = useRippleHandler('stop', onDragLeave);
  const handleMouseUp = useRippleHandler('stop', onMouseUp);
  const handleMouseLeave = useRippleHandler('stop', event => {
    if (focusVisible) {
      event.preventDefault();
    }

    if (onMouseLeave) {
      onMouseLeave(event);
    }
  });
  const handleTouchStart = useRippleHandler('start', onTouchStart);
  const handleTouchEnd = useRippleHandler('stop', onTouchEnd);
  const handleTouchMove = useRippleHandler('stop', onTouchMove);
  const handleBlur = useRippleHandler('stop', event => {
    handleBlurVisible(event);

    if (isFocusVisibleRef.current === false) {
      setFocusVisible(false);
    }

    if (onBlur) {
      onBlur(event);
    }
  }, false);
  const handleFocus = useEventCallback(event => {
    // Fix for https://github.com/facebook/react/issues/7769
    if (!buttonRef.current) {
      buttonRef.current = event.currentTarget;
    }

    handleFocusVisible(event);

    if (isFocusVisibleRef.current === true) {
      setFocusVisible(true);

      if (onFocusVisible) {
        onFocusVisible(event);
      }
    }

    if (onFocus) {
      onFocus(event);
    }
  });

  const isNonNativeButton = () => {
    const button = buttonRef.current;
    return component && component !== 'button' && !(button.tagName === 'A' && button.href);
  };
  /**
   * IE11 shim for https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/repeat
   */


  const keydownRef = e__default.useRef(false);
  const handleKeyDown = useEventCallback(event => {
    // Check if key is already down to avoid repeats being counted as multiple activations
    if (focusRipple && !keydownRef.current && focusVisible && rippleRef.current && event.key === ' ') {
      keydownRef.current = true;
      rippleRef.current.stop(event, () => {
        rippleRef.current.start(event);
      });
    }

    if (event.target === event.currentTarget && isNonNativeButton() && event.key === ' ') {
      event.preventDefault();
    }

    if (onKeyDown) {
      onKeyDown(event);
    } // Keyboard accessibility for non interactive elements


    if (event.target === event.currentTarget && isNonNativeButton() && event.key === 'Enter' && !disabled) {
      event.preventDefault();

      if (onClick) {
        onClick(event);
      }
    }
  });
  const handleKeyUp = useEventCallback(event => {
    // calling preventDefault in keyUp on a <button> will not dispatch a click event if Space is pressed
    // https://codesandbox.io/s/button-keyup-preventdefault-dn7f0
    if (focusRipple && event.key === ' ' && rippleRef.current && focusVisible && !event.defaultPrevented) {
      keydownRef.current = false;
      rippleRef.current.stop(event, () => {
        rippleRef.current.pulsate(event);
      });
    }

    if (onKeyUp) {
      onKeyUp(event);
    } // Keyboard accessibility for non interactive elements


    if (onClick && event.target === event.currentTarget && isNonNativeButton() && event.key === ' ' && !event.defaultPrevented) {
      onClick(event);
    }
  });
  let ComponentProp = component;

  if (ComponentProp === 'button' && (other.href || other.to)) {
    ComponentProp = LinkComponent;
  }

  const buttonProps = {};

  if (ComponentProp === 'button') {
    buttonProps.type = type === undefined ? 'button' : type;
    buttonProps.disabled = disabled;
  } else {
    if (!other.href && !other.to) {
      buttonProps.role = 'button';
    }

    if (disabled) {
      buttonProps['aria-disabled'] = disabled;
    }
  }

  const handleOwnRef = useForkRef(focusVisibleRef, buttonRef);
  const handleRef = useForkRef(ref, handleOwnRef);
  const [mountedState, setMountedState] = e__default.useState(false);
  e__default.useEffect(() => {
    setMountedState(true);
  }, []);
  const enableTouchRipple = mountedState && !disableRipple && !disabled;

  const ownerState = _extends({}, props, {
    centerRipple,
    component,
    disabled,
    disableRipple,
    disableTouchRipple,
    focusRipple,
    tabIndex,
    focusVisible
  });

  const classes = useUtilityClasses$v(ownerState);
  return /*#__PURE__*/jsxRuntime.jsxs(ButtonBaseRoot, _extends({
    as: ComponentProp,
    className: l$2(classes.root, className),
    ownerState: ownerState,
    onBlur: handleBlur,
    onClick: onClick,
    onContextMenu: handleContextMenu,
    onFocus: handleFocus,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    onMouseDown: handleMouseDown,
    onMouseLeave: handleMouseLeave,
    onMouseUp: handleMouseUp,
    onDragLeave: handleDragLeave,
    onTouchEnd: handleTouchEnd,
    onTouchMove: handleTouchMove,
    onTouchStart: handleTouchStart,
    ref: handleRef,
    tabIndex: disabled ? -1 : tabIndex,
    type: type
  }, buttonProps, other, {
    children: [children, enableTouchRipple ?
    /*#__PURE__*/

    /* TouchRipple is only needed client-side, x2 boost on the server. */
    jsxRuntime.jsx(TouchRipple$1, _extends({
      ref: rippleRef,
      center: centerRipple
    }, TouchRippleProps)) : null]
  }));
});
var ButtonBase$1 = ButtonBase;

function getIconButtonUtilityClass(slot) {
  return generateUtilityClass('MuiIconButton', slot);
}
const iconButtonClasses = generateUtilityClasses('MuiIconButton', ['root', 'disabled', 'colorInherit', 'colorPrimary', 'colorSecondary', 'edgeStart', 'edgeEnd', 'sizeSmall', 'sizeMedium', 'sizeLarge']);
var iconButtonClasses$1 = iconButtonClasses;

const _excluded$E = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"];

const useUtilityClasses$u = ownerState => {
  const {
    classes,
    disabled,
    color,
    edge,
    size
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', color !== 'default' && `color${capitalize(color)}`, edge && `edge${capitalize(edge)}`, `size${capitalize(size)}`]
  };
  return composeClasses(slots, getIconButtonUtilityClass, classes);
};

const IconButtonRoot = styled$1(ButtonBase$1, {
  name: 'MuiIconButton',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.color !== 'default' && styles[`color${capitalize(ownerState.color)}`], ownerState.edge && styles[`edge${capitalize(ownerState.edge)}`], styles[`size${capitalize(ownerState.size)}`]];
  }
})(({
  theme,
  ownerState
}) => _extends({
  textAlign: 'center',
  flex: '0 0 auto',
  fontSize: theme.typography.pxToRem(24),
  padding: 8,
  borderRadius: '50%',
  overflow: 'visible',
  // Explicitly set the default value to solve a bug on IE11.
  color: theme.palette.action.active,
  transition: theme.transitions.create('background-color', {
    duration: theme.transitions.duration.shortest
  }),
  '&:hover': {
    backgroundColor: alpha(theme.palette.action.active, theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: 'transparent'
    }
  }
}, ownerState.edge === 'start' && {
  marginLeft: ownerState.size === 'small' ? -3 : -12
}, ownerState.edge === 'end' && {
  marginRight: ownerState.size === 'small' ? -3 : -12
}), ({
  theme,
  ownerState
}) => _extends({}, ownerState.color === 'inherit' && {
  color: 'inherit'
}, ownerState.color !== 'inherit' && ownerState.color !== 'default' && {
  color: theme.palette[ownerState.color].main,
  '&:hover': {
    backgroundColor: alpha(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: 'transparent'
    }
  }
}, ownerState.size === 'small' && {
  padding: 5,
  fontSize: theme.typography.pxToRem(18)
}, ownerState.size === 'large' && {
  padding: 12,
  fontSize: theme.typography.pxToRem(28)
}, {
  [`&.${iconButtonClasses$1.disabled}`]: {
    backgroundColor: 'transparent',
    color: theme.palette.action.disabled
  }
}));
/**
 * Refer to the [Icons](/components/icons/) section of the documentation
 * regarding the available icon options.
 */

const IconButton = /*#__PURE__*/e__default.forwardRef(function IconButton(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiIconButton'
  });

  const {
    edge = false,
    children,
    className,
    color = 'default',
    disabled = false,
    disableFocusRipple = false,
    size = 'medium'
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$E);

  const ownerState = _extends({}, props, {
    edge,
    color,
    disabled,
    disableFocusRipple,
    size
  });

  const classes = useUtilityClasses$u(ownerState);
  return /*#__PURE__*/jsxRuntime.jsx(IconButtonRoot, _extends({
    className: l$2(classes.root, className),
    centerRipple: true,
    focusRipple: !disableFocusRipple,
    disabled: disabled,
    ref: ref,
    ownerState: ownerState
  }, other, {
    children: children
  }));
});
var O = IconButton;

const reflow = node => node.scrollTop;
function getTransitionProps(props, options) {
  var _style$transitionDura, _style$transitionTimi;

  const {
    timeout,
    easing,
    style = {}
  } = props;
  return {
    duration: (_style$transitionDura = style.transitionDuration) != null ? _style$transitionDura : typeof timeout === 'number' ? timeout : timeout[options.mode] || 0,
    easing: (_style$transitionTimi = style.transitionTimingFunction) != null ? _style$transitionTimi : typeof easing === 'object' ? easing[options.mode] : easing,
    delay: style.transitionDelay
  };
}

const _excluded$D = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];

function getScale(value) {
  return `scale(${value}, ${value ** 2})`;
}

const styles$2 = {
  entering: {
    opacity: 1,
    transform: getScale(1)
  },
  entered: {
    opacity: 1,
    transform: 'none'
  }
};
/**
 * The Grow transition is used by the [Tooltip](/components/tooltips/) and
 * [Popover](/components/popover/) components.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

const Grow = /*#__PURE__*/e__default.forwardRef(function Grow(props, ref) {
  const {
    addEndListener,
    appear = true,
    children,
    easing,
    in: inProp,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    style,
    timeout = 'auto',
    // eslint-disable-next-line react/prop-types
    TransitionComponent = Transition$1
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$D);

  const timer = e__default.useRef();
  const autoTimeout = e__default.useRef();
  const theme = useTheme();
  const nodeRef = e__default.useRef(null);
  const foreignRef = useForkRef(children.ref, ref);
  const handleRef = useForkRef(nodeRef, foreignRef);

  const normalizedTransitionCallback = callback => maybeIsAppearing => {
    if (callback) {
      const node = nodeRef.current; // onEnterXxx and onExitXxx callbacks have a different arguments.length value.

      if (maybeIsAppearing === undefined) {
        callback(node);
      } else {
        callback(node, maybeIsAppearing);
      }
    }
  };

  const handleEntering = normalizedTransitionCallback(onEntering);
  const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
    reflow(node); // So the animation always start from the start.

    const {
      duration: transitionDuration,
      delay,
      easing: transitionTimingFunction
    } = getTransitionProps({
      style,
      timeout,
      easing
    }, {
      mode: 'enter'
    });
    let duration;

    if (timeout === 'auto') {
      duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
      autoTimeout.current = duration;
    } else {
      duration = transitionDuration;
    }

    node.style.transition = [theme.transitions.create('opacity', {
      duration,
      delay
    }), theme.transitions.create('transform', {
      duration: duration * 0.666,
      delay,
      easing: transitionTimingFunction
    })].join(',');

    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  const handleEntered = normalizedTransitionCallback(onEntered);
  const handleExiting = normalizedTransitionCallback(onExiting);
  const handleExit = normalizedTransitionCallback(node => {
    const {
      duration: transitionDuration,
      delay,
      easing: transitionTimingFunction
    } = getTransitionProps({
      style,
      timeout,
      easing
    }, {
      mode: 'exit'
    });
    let duration;

    if (timeout === 'auto') {
      duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
      autoTimeout.current = duration;
    } else {
      duration = transitionDuration;
    }

    node.style.transition = [theme.transitions.create('opacity', {
      duration,
      delay
    }), theme.transitions.create('transform', {
      duration: duration * 0.666,
      delay: delay || duration * 0.333,
      easing: transitionTimingFunction
    })].join(',');
    node.style.opacity = '0';
    node.style.transform = getScale(0.75);

    if (onExit) {
      onExit(node);
    }
  });
  const handleExited = normalizedTransitionCallback(onExited);

  const handleAddEndListener = next => {
    if (timeout === 'auto') {
      timer.current = setTimeout(next, autoTimeout.current || 0);
    }

    if (addEndListener) {
      // Old call signature before `react-transition-group` implemented `nodeRef`
      addEndListener(nodeRef.current, next);
    }
  };

  e__default.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);
  return /*#__PURE__*/jsxRuntime.jsx(TransitionComponent, _extends({
    appear: appear,
    in: inProp,
    nodeRef: nodeRef,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    timeout: timeout === 'auto' ? null : timeout
  }, other, {
    children: (state, childProps) => {
      return /*#__PURE__*/e__default.cloneElement(children, _extends({
        style: _extends({
          opacity: 0,
          transform: getScale(0.75),
          visibility: state === 'exited' && !inProp ? 'hidden' : undefined
        }, styles$2[state], style, children.props.style),
        ref: handleRef
      }, childProps));
    }
  }));
});
Grow.muiSupportAuto = true;
var x = Grow;

var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect$2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


var applyStyles$1 = {
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect$2,
  requires: ['computeStyles']
};

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

// import { isHTMLElement } from './instanceOf';
function getBoundingClientRect(element, // eslint-disable-next-line unused-imports/no-unused-vars
includeScale) {

  var rect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1; // FIXME:
  // `offsetWidth` returns an integer while `getBoundingClientRect`
  // returns a float. This results in `scaleX` or `scaleY` being
  // non-1 when it should be for elements that aren't a full pixel in
  // width or height.
  // if (isHTMLElement(element) && includeScale) {
  //   const offsetHeight = element.offsetHeight;
  //   const offsetWidth = element.offsetWidth;
  //   // Do not attempt to divide by 0, otherwise we get `Infinity` as scale
  //   // Fallback to 1 in case both values are `0`
  //   if (offsetWidth > 0) {
  //     scaleX = rect.width / offsetWidth || 1;
  //   }
  //   if (offsetHeight > 0) {
  //     scaleY = rect.height / offsetHeight || 1;
  //   }
  // }

  return {
    width: rect.width / scaleX,
    height: rect.height / scaleY,
    top: rect.top / scaleY,
    right: rect.right / scaleX,
    bottom: rect.bottom / scaleY,
    left: rect.left / scaleX,
    x: rect.left / scaleX,
    y: rect.top / scaleY
  };
}

// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}

function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
  var isIE = navigator.userAgent.indexOf('Trident') !== -1;

  if (isIE && isHTMLElement(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = getComputedStyle(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = getParentNode(element);

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

var max = Math.max;
var min = Math.min;
var round$1 = Math.round;

function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}

function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect$1(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (!contains(state.elements.popper, arrowElement)) {

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


var arrow$1 = {
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect$1,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};

function getVariation(placement) {
  return placement.split('-')[1];
}

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round$1(round$1(x * dpr) / dpr) || 0,
    y: round$1(round$1(y * dpr) / dpr) || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      variation = _ref2.variation,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets;

  var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets,
      _ref3$x = _ref3.x,
      x = _ref3$x === void 0 ? 0 : _ref3$x,
      _ref3$y = _ref3.y,
      y = _ref3$y === void 0 ? 0 : _ref3$y;

  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = top;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);

      if (getComputedStyle(offsetParent).position !== 'static' && position === 'absolute') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom; // $FlowFixMe[prop-missing]

      y -= offsetParent[heightProp] - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right; // $FlowFixMe[prop-missing]

      x -= offsetParent[widthProp] - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref4) {
  var state = _ref4.state,
      options = _ref4.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var computeStyles$1 = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
};

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


var eventListeners = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
};

var hash$1 = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash$1[matched];
  });
}

var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}

// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle(body || html).direction === 'rtl') {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}

/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}

function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;
    }
  }

  return offsets;
}

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


var flip$1 = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};

function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


var hide$1 = {
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
};

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var offset$1 = {
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
};

function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var popperOffsets$1 = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
};

function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis || checkAltAxis) {
    var mainSide = mainAxis === 'y' ? top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min$1 = popperOffsets[mainAxis] + overflow[mainSide];
    var max$1 = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;

    if (checkMainAxis) {
      var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
      popperOffsets[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset;
    }

    if (checkAltAxis) {
      var _mainSide = mainAxis === 'x' ? top : left;

      var _altSide = mainAxis === 'x' ? bottom : right;

      var _offset = popperOffsets[altAxis];

      var _min = _offset + overflow[_mainSide];

      var _max = _offset - overflow[_altSide];

      var _preventedOffset = within(tether ? min(_min, tetherMin) : _min, _offset, tether ? max(_max, tetherMax) : _max);

      popperOffsets[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var preventOverflow$1 = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
};

function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = rect.width / element.offsetWidth || 1;
  var scaleY = rect.height / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(setOptionsAction) {
        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });

        for (var index = 0; index < state.orderedModifiers.length; index++) {

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}

var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

const _excluded$C = ["anchorEl", "children", "disablePortal", "modifiers", "open", "placement", "popperOptions", "popperRef", "TransitionProps"],
      _excluded2$3 = ["anchorEl", "children", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition"];

function flipPlacement(placement, theme) {
  const direction = theme && theme.direction || 'ltr';

  if (direction === 'ltr') {
    return placement;
  }

  switch (placement) {
    case 'bottom-end':
      return 'bottom-start';

    case 'bottom-start':
      return 'bottom-end';

    case 'top-end':
      return 'top-start';

    case 'top-start':
      return 'top-end';

    default:
      return placement;
  }
}

function resolveAnchorEl$1(anchorEl) {
  return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
}

const defaultPopperOptions = {};
/* eslint-disable react/prop-types */

const PopperTooltip = /*#__PURE__*/e__default.forwardRef(function PopperTooltip(props, ref) {
  const {
    anchorEl,
    children,
    disablePortal,
    modifiers,
    open,
    placement: initialPlacement,
    popperOptions,
    popperRef: popperRefProp,
    TransitionProps
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$C);

  const tooltipRef = e__default.useRef(null);
  const ownRef = useForkRef(tooltipRef, ref);
  const popperRef = e__default.useRef(null);
  const handlePopperRef = useForkRef(popperRef, popperRefProp);
  const handlePopperRefRef = e__default.useRef(handlePopperRef);
  useEnhancedEffect$1(() => {
    handlePopperRefRef.current = handlePopperRef;
  }, [handlePopperRef]);
  e__default.useImperativeHandle(popperRefProp, () => popperRef.current, []);
  const theme = useTheme$2();
  const rtlPlacement = flipPlacement(initialPlacement, theme);
  /**
   * placement initialized from prop but can change during lifetime if modifiers.flip.
   * modifiers.flip is essentially a flip for controlled/uncontrolled behavior
   */

  const [placement, setPlacement] = e__default.useState(rtlPlacement);
  e__default.useEffect(() => {
    if (popperRef.current) {
      popperRef.current.forceUpdate();
    }
  });
  useEnhancedEffect$1(() => {
    if (!anchorEl || !open) {
      return undefined;
    }

    const handlePopperUpdate = data => {
      setPlacement(data.placement);
    };

    resolveAnchorEl$1(anchorEl);

    let popperModifiers = [{
      name: 'preventOverflow',
      options: {
        altBoundary: disablePortal
      }
    }, {
      name: 'flip',
      options: {
        altBoundary: disablePortal
      }
    }, {
      name: 'onUpdate',
      enabled: true,
      phase: 'afterWrite',
      fn: ({
        state
      }) => {
        handlePopperUpdate(state);
      }
    }];

    if (modifiers != null) {
      popperModifiers = popperModifiers.concat(modifiers);
    }

    if (popperOptions && popperOptions.modifiers != null) {
      popperModifiers = popperModifiers.concat(popperOptions.modifiers);
    }

    const popper = createPopper(resolveAnchorEl$1(anchorEl), tooltipRef.current, _extends({
      placement: rtlPlacement
    }, popperOptions, {
      modifiers: popperModifiers
    }));
    handlePopperRefRef.current(popper);
    return () => {
      popper.destroy();
      handlePopperRefRef.current(null);
    };
  }, [anchorEl, disablePortal, modifiers, open, popperOptions, rtlPlacement]);
  const childProps = {
    placement
  };

  if (TransitionProps !== null) {
    childProps.TransitionProps = TransitionProps;
  }

  return /*#__PURE__*/jsxRuntime.jsx("div", _extends({
    ref: ownRef,
    role: "tooltip"
  }, other, {
    children: typeof children === 'function' ? children(childProps) : children
  }));
});
/* eslint-enable react/prop-types */

/**
 * Poppers rely on the 3rd party library [Popper.js](https://popper.js.org/docs/v2/) for positioning.
 */

const Popper = /*#__PURE__*/e__default.forwardRef(function Popper(props, ref) {
  const {
    anchorEl,
    children,
    container: containerProp,
    disablePortal = false,
    keepMounted = false,
    modifiers,
    open,
    placement = 'bottom',
    popperOptions = defaultPopperOptions,
    popperRef,
    style,
    transition = false
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded2$3);

  const [exited, setExited] = e__default.useState(true);

  const handleEnter = () => {
    setExited(false);
  };

  const handleExited = () => {
    setExited(true);
  };

  if (!keepMounted && !open && (!transition || exited)) {
    return null;
  } // If the container prop is provided, use that
  // If the anchorEl prop is provided, use its parent body element as the container
  // If neither are provided let the Modal take care of choosing the container


  const container = containerProp || (anchorEl ? ownerDocument(resolveAnchorEl$1(anchorEl)).body : undefined);
  return /*#__PURE__*/jsxRuntime.jsx(Portal$1, {
    disablePortal: disablePortal,
    container: container,
    children: /*#__PURE__*/jsxRuntime.jsx(PopperTooltip, _extends({
      anchorEl: anchorEl,
      disablePortal: disablePortal,
      modifiers: modifiers,
      ref: ref,
      open: transition ? !exited : open,
      placement: placement,
      popperOptions: popperOptions,
      popperRef: popperRef
    }, other, {
      style: _extends({
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: 'fixed',
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: !open && keepMounted && !transition ? 'none' : null
      }, style),
      TransitionProps: transition ? {
        in: open,
        onEnter: handleEnter,
        onExited: handleExited
      } : null,
      children: children
    }))
  });
});
var M = Popper;

function getTooltipUtilityClass(slot) {
  return generateUtilityClass('MuiTooltip', slot);
}
const tooltipClasses = generateUtilityClasses('MuiTooltip', ['popper', 'popperInteractive', 'popperArrow', 'popperClose', 'tooltip', 'tooltipArrow', 'touch', 'tooltipPlacementLeft', 'tooltipPlacementRight', 'tooltipPlacementTop', 'tooltipPlacementBottom', 'arrow']);
var tooltipClasses$1 = tooltipClasses;

const _excluded$B = ["arrow", "children", "classes", "components", "componentsProps", "describeChild", "disableFocusListener", "disableHoverListener", "disableInteractive", "disableTouchListener", "enterDelay", "enterNextDelay", "enterTouchDelay", "followCursor", "id", "leaveDelay", "leaveTouchDelay", "onClose", "onOpen", "open", "placement", "PopperComponent", "PopperProps", "title", "TransitionComponent", "TransitionProps"];

function round(value) {
  return Math.round(value * 1e5) / 1e5;
}

const useUtilityClasses$t = ownerState => {
  const {
    classes,
    disableInteractive,
    arrow,
    touch,
    placement
  } = ownerState;
  const slots = {
    popper: ['popper', !disableInteractive && 'popperInteractive', arrow && 'popperArrow'],
    tooltip: ['tooltip', arrow && 'tooltipArrow', touch && 'touch', `tooltipPlacement${capitalize(placement.split('-')[0])}`],
    arrow: ['arrow']
  };
  return composeClasses(slots, getTooltipUtilityClass, classes);
};

const TooltipPopper = styled$1(M, {
  name: 'MuiTooltip',
  slot: 'Popper',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.popper, !ownerState.disableInteractive && styles.popperInteractive, ownerState.arrow && styles.popperArrow, !ownerState.open && styles.popperClose];
  }
})(({
  theme,
  ownerState,
  open
}) => _extends({
  zIndex: theme.zIndex.tooltip,
  pointerEvents: 'none'
}, !ownerState.disableInteractive && {
  pointerEvents: 'auto'
}, !open && {
  pointerEvents: 'none'
}, ownerState.arrow && {
  [`&[data-popper-placement*="bottom"] .${tooltipClasses$1.arrow}`]: {
    top: 0,
    marginTop: '-0.71em',
    '&::before': {
      transformOrigin: '0 100%'
    }
  },
  [`&[data-popper-placement*="top"] .${tooltipClasses$1.arrow}`]: {
    bottom: 0,
    marginBottom: '-0.71em',
    '&::before': {
      transformOrigin: '100% 0'
    }
  },
  [`&[data-popper-placement*="right"] .${tooltipClasses$1.arrow}`]: _extends({}, !ownerState.isRtl ? {
    left: 0,
    marginLeft: '-0.71em'
  } : {
    right: 0,
    marginRight: '-0.71em'
  }, {
    height: '1em',
    width: '0.71em',
    '&::before': {
      transformOrigin: '100% 100%'
    }
  }),
  [`&[data-popper-placement*="left"] .${tooltipClasses$1.arrow}`]: _extends({}, !ownerState.isRtl ? {
    right: 0,
    marginRight: '-0.71em'
  } : {
    left: 0,
    marginLeft: '-0.71em'
  }, {
    height: '1em',
    width: '0.71em',
    '&::before': {
      transformOrigin: '0 0'
    }
  })
}));
const TooltipTooltip = styled$1('div', {
  name: 'MuiTooltip',
  slot: 'Tooltip',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.tooltip, ownerState.touch && styles.touch, ownerState.arrow && styles.tooltipArrow, styles[`tooltipPlacement${capitalize(ownerState.placement.split('-')[0])}`]];
  }
})(({
  theme,
  ownerState
}) => _extends({
  backgroundColor: alpha(theme.palette.grey[700], 0.92),
  borderRadius: theme.shape.borderRadius,
  color: theme.palette.common.white,
  fontFamily: theme.typography.fontFamily,
  padding: '4px 8px',
  fontSize: theme.typography.pxToRem(11),
  maxWidth: 300,
  margin: 2,
  wordWrap: 'break-word',
  fontWeight: theme.typography.fontWeightMedium
}, ownerState.arrow && {
  position: 'relative',
  margin: 0
}, ownerState.touch && {
  padding: '8px 16px',
  fontSize: theme.typography.pxToRem(14),
  lineHeight: `${round(16 / 14)}em`,
  fontWeight: theme.typography.fontWeightRegular
}, {
  [`.${tooltipClasses$1.popper}[data-popper-placement*="left"] &`]: _extends({
    transformOrigin: 'right center'
  }, !ownerState.isRtl ? _extends({
    marginRight: '14px'
  }, ownerState.touch && {
    marginRight: '24px'
  }) : _extends({
    marginLeft: '14px'
  }, ownerState.touch && {
    marginLeft: '24px'
  })),
  [`.${tooltipClasses$1.popper}[data-popper-placement*="right"] &`]: _extends({
    transformOrigin: 'left center'
  }, !ownerState.isRtl ? _extends({
    marginLeft: '14px'
  }, ownerState.touch && {
    marginLeft: '24px'
  }) : _extends({
    marginRight: '14px'
  }, ownerState.touch && {
    marginRight: '24px'
  })),
  [`.${tooltipClasses$1.popper}[data-popper-placement*="top"] &`]: _extends({
    transformOrigin: 'center bottom',
    marginBottom: '14px'
  }, ownerState.touch && {
    marginBottom: '24px'
  }),
  [`.${tooltipClasses$1.popper}[data-popper-placement*="bottom"] &`]: _extends({
    transformOrigin: 'center top',
    marginTop: '14px'
  }, ownerState.touch && {
    marginTop: '24px'
  })
}));
const TooltipArrow = styled$1('span', {
  name: 'MuiTooltip',
  slot: 'Arrow',
  overridesResolver: (props, styles) => styles.arrow
})(({
  theme
}) => ({
  overflow: 'hidden',
  position: 'absolute',
  width: '1em',
  height: '0.71em'
  /* = width / sqrt(2) = (length of the hypotenuse) */
  ,
  boxSizing: 'border-box',
  color: alpha(theme.palette.grey[700], 0.9),
  '&::before': {
    content: '""',
    margin: 'auto',
    display: 'block',
    width: '100%',
    height: '100%',
    backgroundColor: 'currentColor',
    transform: 'rotate(45deg)'
  }
}));
let hystersisOpen = false;
let hystersisTimer = null;

function composeEventHandler(handler, eventHandler) {
  return event => {
    if (eventHandler) {
      eventHandler(event);
    }

    handler(event);
  };
} // TODO (v6) Remove PopperComponent, PopperProps, TransitionComponent and TransitionProps.


const Tooltip = /*#__PURE__*/e__default.forwardRef(function Tooltip(inProps, ref) {
  var _components$Popper, _ref, _components$Tooltip, _components$Arrow, _componentsProps$popp;

  const props = useThemeProps({
    props: inProps,
    name: 'MuiTooltip'
  });

  const {
    arrow = false,
    children,
    components = {},
    componentsProps = {},
    describeChild = false,
    disableFocusListener = false,
    disableHoverListener = false,
    disableInteractive: disableInteractiveProp = false,
    disableTouchListener = false,
    enterDelay = 100,
    enterNextDelay = 0,
    enterTouchDelay = 700,
    followCursor = false,
    id: idProp,
    leaveDelay = 0,
    leaveTouchDelay = 1500,
    onClose,
    onOpen,
    open: openProp,
    placement = 'bottom',
    PopperComponent: PopperComponentProp,
    PopperProps = {},
    title,
    TransitionComponent: TransitionComponentProp = x,
    TransitionProps
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$B);

  const theme = useTheme();
  const isRtl = theme.direction === 'rtl';
  const [childNode, setChildNode] = e__default.useState();
  const [arrowRef, setArrowRef] = e__default.useState(null);
  const ignoreNonTouchEvents = e__default.useRef(false);
  const disableInteractive = disableInteractiveProp || followCursor;
  const closeTimer = e__default.useRef();
  const enterTimer = e__default.useRef();
  const leaveTimer = e__default.useRef();
  const touchTimer = e__default.useRef();
  const [openState, setOpenState] = useControlled({
    controlled: openProp,
    default: false,
    name: 'Tooltip',
    state: 'open'
  });
  let open = openState;

  const id = useId(idProp);
  const prevUserSelect = e__default.useRef();
  const stopTouchInteraction = e__default.useCallback(() => {
    if (prevUserSelect.current !== undefined) {
      document.body.style.WebkitUserSelect = prevUserSelect.current;
      prevUserSelect.current = undefined;
    }

    clearTimeout(touchTimer.current);
  }, []);
  e__default.useEffect(() => {
    return () => {
      clearTimeout(closeTimer.current);
      clearTimeout(enterTimer.current);
      clearTimeout(leaveTimer.current);
      stopTouchInteraction();
    };
  }, [stopTouchInteraction]);

  const handleOpen = event => {
    clearTimeout(hystersisTimer);
    hystersisOpen = true; // The mouseover event will trigger for every nested element in the tooltip.
    // We can skip rerendering when the tooltip is already open.
    // We are using the mouseover event instead of the mouseenter event to fix a hide/show issue.

    setOpenState(true);

    if (onOpen && !open) {
      onOpen(event);
    }
  };

  const handleClose = useEventCallback(
  /**
   * @param {React.SyntheticEvent | Event} event
   */
  event => {
    clearTimeout(hystersisTimer);
    hystersisTimer = setTimeout(() => {
      hystersisOpen = false;
    }, 800 + leaveDelay);
    setOpenState(false);

    if (onClose && open) {
      onClose(event);
    }

    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      ignoreNonTouchEvents.current = false;
    }, theme.transitions.duration.shortest);
  });

  const handleEnter = event => {
    if (ignoreNonTouchEvents.current && event.type !== 'touchstart') {
      return;
    } // Remove the title ahead of time.
    // We don't want to wait for the next render commit.
    // We would risk displaying two tooltips at the same time (native + this one).


    if (childNode) {
      childNode.removeAttribute('title');
    }

    clearTimeout(enterTimer.current);
    clearTimeout(leaveTimer.current);

    if (enterDelay || hystersisOpen && enterNextDelay) {
      enterTimer.current = setTimeout(() => {
        handleOpen(event);
      }, hystersisOpen ? enterNextDelay : enterDelay);
    } else {
      handleOpen(event);
    }
  };

  const handleLeave = event => {
    clearTimeout(enterTimer.current);
    clearTimeout(leaveTimer.current);
    leaveTimer.current = setTimeout(() => {
      handleClose(event);
    }, leaveDelay);
  };

  const {
    isFocusVisibleRef,
    onBlur: handleBlurVisible,
    onFocus: handleFocusVisible,
    ref: focusVisibleRef
  } = useIsFocusVisible(); // We don't necessarily care about the focusVisible state (which is safe to access via ref anyway).
  // We just need to re-render the Tooltip if the focus-visible state changes.

  const [, setChildIsFocusVisible] = e__default.useState(false);

  const handleBlur = event => {
    handleBlurVisible(event);

    if (isFocusVisibleRef.current === false) {
      setChildIsFocusVisible(false);
      handleLeave(event);
    }
  };

  const handleFocus = event => {
    // Workaround for https://github.com/facebook/react/issues/7769
    // The autoFocus of React might trigger the event before the componentDidMount.
    // We need to account for this eventuality.
    if (!childNode) {
      setChildNode(event.currentTarget);
    }

    handleFocusVisible(event);

    if (isFocusVisibleRef.current === true) {
      setChildIsFocusVisible(true);
      handleEnter(event);
    }
  };

  const detectTouchStart = event => {
    ignoreNonTouchEvents.current = true;
    const childrenProps = children.props;

    if (childrenProps.onTouchStart) {
      childrenProps.onTouchStart(event);
    }
  };

  const handleMouseOver = handleEnter;
  const handleMouseLeave = handleLeave;

  const handleTouchStart = event => {
    detectTouchStart(event);
    clearTimeout(leaveTimer.current);
    clearTimeout(closeTimer.current);
    stopTouchInteraction();
    prevUserSelect.current = document.body.style.WebkitUserSelect; // Prevent iOS text selection on long-tap.

    document.body.style.WebkitUserSelect = 'none';
    touchTimer.current = setTimeout(() => {
      document.body.style.WebkitUserSelect = prevUserSelect.current;
      handleEnter(event);
    }, enterTouchDelay);
  };

  const handleTouchEnd = event => {
    if (children.props.onTouchEnd) {
      children.props.onTouchEnd(event);
    }

    stopTouchInteraction();
    clearTimeout(leaveTimer.current);
    leaveTimer.current = setTimeout(() => {
      handleClose(event);
    }, leaveTouchDelay);
  };

  e__default.useEffect(() => {
    if (!open) {
      return undefined;
    }
    /**
     * @param {KeyboardEvent} nativeEvent
     */


    function handleKeyDown(nativeEvent) {
      // IE11, Edge (prior to using Bink?) use 'Esc'
      if (nativeEvent.key === 'Escape' || nativeEvent.key === 'Esc') {
        handleClose(nativeEvent);
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleClose, open]);
  const handleUseRef = useForkRef(setChildNode, ref);
  const handleFocusRef = useForkRef(focusVisibleRef, handleUseRef);
  const handleRef = useForkRef(children.ref, handleFocusRef); // There is no point in displaying an empty tooltip.

  if (title === '') {
    open = false;
  }

  const positionRef = e__default.useRef({
    x: 0,
    y: 0
  });
  const popperRef = e__default.useRef();

  const handleMouseMove = event => {
    const childrenProps = children.props;

    if (childrenProps.onMouseMove) {
      childrenProps.onMouseMove(event);
    }

    positionRef.current = {
      x: event.clientX,
      y: event.clientY
    };

    if (popperRef.current) {
      popperRef.current.update();
    }
  };

  const nameOrDescProps = {};
  const titleIsString = typeof title === 'string';

  if (describeChild) {
    nameOrDescProps.title = !open && titleIsString && !disableHoverListener ? title : null;
    nameOrDescProps['aria-describedby'] = open ? id : null;
  } else {
    nameOrDescProps['aria-label'] = titleIsString ? title : null;
    nameOrDescProps['aria-labelledby'] = open && !titleIsString ? id : null;
  }

  const childrenProps = _extends({}, nameOrDescProps, other, children.props, {
    className: l$2(other.className, children.props.className),
    onTouchStart: detectTouchStart,
    ref: handleRef
  }, followCursor ? {
    onMouseMove: handleMouseMove
  } : {});

  const interactiveWrapperListeners = {};

  if (!disableTouchListener) {
    childrenProps.onTouchStart = handleTouchStart;
    childrenProps.onTouchEnd = handleTouchEnd;
  }

  if (!disableHoverListener) {
    childrenProps.onMouseOver = composeEventHandler(handleMouseOver, childrenProps.onMouseOver);
    childrenProps.onMouseLeave = composeEventHandler(handleMouseLeave, childrenProps.onMouseLeave);

    if (!disableInteractive) {
      interactiveWrapperListeners.onMouseOver = handleMouseOver;
      interactiveWrapperListeners.onMouseLeave = handleMouseLeave;
    }
  }

  if (!disableFocusListener) {
    childrenProps.onFocus = composeEventHandler(handleFocus, childrenProps.onFocus);
    childrenProps.onBlur = composeEventHandler(handleBlur, childrenProps.onBlur);

    if (!disableInteractive) {
      interactiveWrapperListeners.onFocus = handleFocus;
      interactiveWrapperListeners.onBlur = handleBlur;
    }
  }

  const popperOptions = e__default.useMemo(() => {
    var _PopperProps$popperOp;

    let tooltipModifiers = [{
      name: 'arrow',
      enabled: Boolean(arrowRef),
      options: {
        element: arrowRef,
        padding: 4
      }
    }];

    if ((_PopperProps$popperOp = PopperProps.popperOptions) != null && _PopperProps$popperOp.modifiers) {
      tooltipModifiers = tooltipModifiers.concat(PopperProps.popperOptions.modifiers);
    }

    return _extends({}, PopperProps.popperOptions, {
      modifiers: tooltipModifiers
    });
  }, [arrowRef, PopperProps]);

  const ownerState = _extends({}, props, {
    isRtl,
    arrow,
    disableInteractive,
    placement,
    PopperComponentProp,
    touch: ignoreNonTouchEvents.current
  });

  const classes = useUtilityClasses$t(ownerState);
  const PopperComponent = (_components$Popper = components.Popper) != null ? _components$Popper : TooltipPopper;
  const TransitionComponent = (_ref = TransitionComponentProp != null ? TransitionComponentProp : components.Transition) != null ? _ref : x;
  const TooltipComponent = (_components$Tooltip = components.Tooltip) != null ? _components$Tooltip : TooltipTooltip;
  const ArrowComponent = (_components$Arrow = components.Arrow) != null ? _components$Arrow : TooltipArrow;
  const popperProps = appendOwnerState(PopperComponent, _extends({}, PopperProps, componentsProps.popper), ownerState);
  const transitionProps = appendOwnerState(TransitionComponent, _extends({}, TransitionProps, componentsProps.transition), ownerState);
  const tooltipProps = appendOwnerState(TooltipComponent, _extends({}, componentsProps.tooltip), ownerState);
  const tooltipArrowProps = appendOwnerState(ArrowComponent, _extends({}, componentsProps.arrow), ownerState);
  return /*#__PURE__*/jsxRuntime.jsxs(e__default.Fragment, {
    children: [/*#__PURE__*/e__default.cloneElement(children, childrenProps), /*#__PURE__*/jsxRuntime.jsx(PopperComponent, _extends({
      as: PopperComponentProp != null ? PopperComponentProp : M,
      placement: placement,
      anchorEl: followCursor ? {
        getBoundingClientRect: () => ({
          top: positionRef.current.y,
          left: positionRef.current.x,
          right: positionRef.current.x,
          bottom: positionRef.current.y,
          width: 0,
          height: 0
        })
      } : childNode,
      popperRef: popperRef,
      open: childNode ? open : false,
      id: id,
      transition: true
    }, interactiveWrapperListeners, popperProps, {
      className: l$2(classes.popper, (_componentsProps$popp = componentsProps.popper) == null ? void 0 : _componentsProps$popp.className),
      popperOptions: popperOptions,
      children: ({
        TransitionProps: TransitionPropsInner
      }) => {
        var _componentsProps$tool, _componentsProps$arro;

        return /*#__PURE__*/jsxRuntime.jsx(TransitionComponent, _extends({
          timeout: theme.transitions.duration.shorter
        }, TransitionPropsInner, transitionProps, {
          children: /*#__PURE__*/jsxRuntime.jsxs(TooltipComponent, _extends({}, tooltipProps, {
            className: l$2(classes.tooltip, (_componentsProps$tool = componentsProps.tooltip) == null ? void 0 : _componentsProps$tool.className),
            children: [title, arrow ? /*#__PURE__*/jsxRuntime.jsx(ArrowComponent, _extends({}, tooltipArrowProps, {
              className: l$2(classes.arrow, (_componentsProps$arro = componentsProps.arrow) == null ? void 0 : _componentsProps$arro.className),
              ref: setArrowRef
            })) : null]
          }))
        }));
      }
    }))]
  });
});
var y = Tooltip;

function mapEventPropToEvent(eventProp) {
  return eventProp.substring(2).toLowerCase();
}

function clickedRootScrollbar(event, doc) {
  return doc.documentElement.clientWidth < event.clientX || doc.documentElement.clientHeight < event.clientY;
}

/**
 * Listen for click events that occur somewhere in the document, outside of the element itself.
 * For instance, if you need to hide a menu when people click anywhere else on your page.
 *
 * Demos:
 *
 * - [Click Away Listener](https://mui.com/components/click-away-listener/)
 * - [Menus](https://mui.com/components/menus/)
 *
 * API:
 *
 * - [ClickAwayListener API](https://mui.com/api/click-away-listener/)
 */
function ClickAwayListener(props) {
  const {
    children,
    disableReactTree = false,
    mouseEvent = 'onClick',
    onClickAway,
    touchEvent = 'onTouchEnd'
  } = props;
  const movedRef = e__default.useRef(false);
  const nodeRef = e__default.useRef(null);
  const activatedRef = e__default.useRef(false);
  const syntheticEventRef = e__default.useRef(false);
  e__default.useEffect(() => {
    // Ensure that this component is not "activated" synchronously.
    // https://github.com/facebook/react/issues/20074
    setTimeout(() => {
      activatedRef.current = true;
    }, 0);
    return () => {
      activatedRef.current = false;
    };
  }, []);
  const handleRef = useForkRef( // @ts-expect-error TODO upstream fix
  children.ref, nodeRef); // The handler doesn't take event.defaultPrevented into account:
  //
  // event.preventDefault() is meant to stop default behaviors like
  // clicking a checkbox to check it, hitting a button to submit a form,
  // and hitting left arrow to move the cursor in a text input etc.
  // Only special HTML elements have these default behaviors.

  const handleClickAway = useEventCallback(event => {
    // Given developers can stop the propagation of the synthetic event,
    // we can only be confident with a positive value.
    const insideReactTree = syntheticEventRef.current;
    syntheticEventRef.current = false;
    const doc = ownerDocument(nodeRef.current); // 1. IE11 support, which trigger the handleClickAway even after the unbind
    // 2. The child might render null.
    // 3. Behave like a blur listener.

    if (!activatedRef.current || !nodeRef.current || 'clientX' in event && clickedRootScrollbar(event, doc)) {
      return;
    } // Do not act if user performed touchmove


    if (movedRef.current) {
      movedRef.current = false;
      return;
    }

    let insideDOM; // If not enough, can use https://github.com/DieterHolvoet/event-propagation-path/blob/master/propagationPath.js

    if (event.composedPath) {
      insideDOM = event.composedPath().indexOf(nodeRef.current) > -1;
    } else {
      insideDOM = !doc.documentElement.contains( // @ts-expect-error returns `false` as intended when not dispatched from a Node
      event.target) || nodeRef.current.contains( // @ts-expect-error returns `false` as intended when not dispatched from a Node
      event.target);
    }

    if (!insideDOM && (disableReactTree || !insideReactTree)) {
      onClickAway(event);
    }
  }); // Keep track of mouse/touch events that bubbled up through the portal.

  const createHandleSynthetic = handlerName => event => {
    syntheticEventRef.current = true;
    const childrenPropsHandler = children.props[handlerName];

    if (childrenPropsHandler) {
      childrenPropsHandler(event);
    }
  };

  const childrenProps = {
    ref: handleRef
  };

  if (touchEvent !== false) {
    childrenProps[touchEvent] = createHandleSynthetic(touchEvent);
  }

  e__default.useEffect(() => {
    if (touchEvent !== false) {
      const mappedTouchEvent = mapEventPropToEvent(touchEvent);
      const doc = ownerDocument(nodeRef.current);

      const handleTouchMove = () => {
        movedRef.current = true;
      };

      doc.addEventListener(mappedTouchEvent, handleClickAway);
      doc.addEventListener('touchmove', handleTouchMove);
      return () => {
        doc.removeEventListener(mappedTouchEvent, handleClickAway);
        doc.removeEventListener('touchmove', handleTouchMove);
      };
    }

    return undefined;
  }, [handleClickAway, touchEvent]);

  if (mouseEvent !== false) {
    childrenProps[mouseEvent] = createHandleSynthetic(mouseEvent);
  }

  e__default.useEffect(() => {
    if (mouseEvent !== false) {
      const mappedMouseEvent = mapEventPropToEvent(mouseEvent);
      const doc = ownerDocument(nodeRef.current);
      doc.addEventListener(mappedMouseEvent, handleClickAway);
      return () => {
        doc.removeEventListener(mappedMouseEvent, handleClickAway);
      };
    }

    return undefined;
  }, [handleClickAway, mouseEvent]);
  return /*#__PURE__*/jsxRuntime.jsx(e__default.Fragment, {
    children: /*#__PURE__*/e__default.cloneElement(children, childrenProps)
  });
}

function getPaperUtilityClass(slot) {
  return generateUtilityClass('MuiPaper', slot);
}
generateUtilityClasses('MuiPaper', ['root', 'rounded', 'outlined', 'elevation', 'elevation0', 'elevation1', 'elevation2', 'elevation3', 'elevation4', 'elevation5', 'elevation6', 'elevation7', 'elevation8', 'elevation9', 'elevation10', 'elevation11', 'elevation12', 'elevation13', 'elevation14', 'elevation15', 'elevation16', 'elevation17', 'elevation18', 'elevation19', 'elevation20', 'elevation21', 'elevation22', 'elevation23', 'elevation24']);

const _excluded$A = ["className", "component", "elevation", "square", "variant"];

const getOverlayAlpha = elevation => {
  let alphaValue;

  if (elevation < 1) {
    alphaValue = 5.11916 * elevation ** 2;
  } else {
    alphaValue = 4.5 * Math.log(elevation + 1) + 2;
  }

  return (alphaValue / 100).toFixed(2);
};

const useUtilityClasses$s = ownerState => {
  const {
    square,
    elevation,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ['root', variant, !square && 'rounded', variant === 'elevation' && `elevation${elevation}`]
  };
  return composeClasses(slots, getPaperUtilityClass, classes);
};

const PaperRoot = styled$1('div', {
  name: 'MuiPaper',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant], !ownerState.square && styles.rounded, ownerState.variant === 'elevation' && styles[`elevation${ownerState.elevation}`]];
  }
})(({
  theme,
  ownerState
}) => _extends({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  transition: theme.transitions.create('box-shadow')
}, !ownerState.square && {
  borderRadius: theme.shape.borderRadius
}, ownerState.variant === 'outlined' && {
  border: `1px solid ${theme.palette.divider}`
}, ownerState.variant === 'elevation' && _extends({
  boxShadow: theme.shadows[ownerState.elevation]
}, theme.palette.mode === 'dark' && {
  backgroundImage: `linear-gradient(${alpha('#fff', getOverlayAlpha(ownerState.elevation))}, ${alpha('#fff', getOverlayAlpha(ownerState.elevation))})`
})));
const Paper = /*#__PURE__*/e__default.forwardRef(function Paper(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiPaper'
  });

  const {
    className,
    component = 'div',
    elevation = 1,
    square = false,
    variant = 'elevation'
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$A);

  const ownerState = _extends({}, props, {
    component,
    elevation,
    square,
    variant
  });

  const classes = useUtilityClasses$s(ownerState);

  return /*#__PURE__*/jsxRuntime.jsx(PaperRoot, _extends({
    as: component,
    ownerState: ownerState,
    className: l$2(classes.root, className),
    ref: ref
  }, other));
});
var k = Paper;

function formControlState({
  props,
  states,
  muiFormControl
}) {
  return states.reduce((acc, state) => {
    acc[state] = props[state];

    if (muiFormControl) {
      if (typeof props[state] === 'undefined') {
        acc[state] = muiFormControl[state];
      }
    }

    return acc;
  }, {});
}

/**
 * @ignore - internal component.
 */

const FormControlContext = /*#__PURE__*/e__default.createContext();

var FormControlContext$1 = FormControlContext;

function useFormControl() {
  return e__default.useContext(FormControlContext$1);
}

const _excluded$z = ["onChange", "maxRows", "minRows", "style", "value"];

function getStyleValue(computedStyle, property) {
  return parseInt(computedStyle[property], 10) || 0;
}

const styles$1 = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: 'hidden',
    // Remove from the content flow
    position: 'absolute',
    // Ignore the scrollbar width
    overflow: 'hidden',
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: 'translateZ(0)'
  }
};
const TextareaAutosize = /*#__PURE__*/e__default.forwardRef(function TextareaAutosize(props, ref) {
  const {
    onChange,
    maxRows,
    minRows = 1,
    style,
    value
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$z);

  const {
    current: isControlled
  } = e__default.useRef(value != null);
  const inputRef = e__default.useRef(null);
  const handleRef = useForkRef(ref, inputRef);
  const shadowRef = e__default.useRef(null);
  const renders = e__default.useRef(0);
  const [state, setState] = e__default.useState({});
  const syncHeight = e__default.useCallback(() => {
    const input = inputRef.current;
    const containerWindow = ownerWindow(input);
    const computedStyle = containerWindow.getComputedStyle(input); // If input's width is shrunk and it's not visible, don't sync height.

    if (computedStyle.width === '0px') {
      return;
    }

    const inputShallow = shadowRef.current;
    inputShallow.style.width = computedStyle.width;
    inputShallow.value = input.value || props.placeholder || 'x';

    if (inputShallow.value.slice(-1) === '\n') {
      // Certain fonts which overflow the line height will cause the textarea
      // to report a different scrollHeight depending on whether the last line
      // is empty. Make it non-empty to avoid this issue.
      inputShallow.value += ' ';
    }

    const boxSizing = computedStyle['box-sizing'];
    const padding = getStyleValue(computedStyle, 'padding-bottom') + getStyleValue(computedStyle, 'padding-top');
    const border = getStyleValue(computedStyle, 'border-bottom-width') + getStyleValue(computedStyle, 'border-top-width'); // The height of the inner content

    const innerHeight = inputShallow.scrollHeight; // Measure height of a textarea with a single row

    inputShallow.value = 'x';
    const singleRowHeight = inputShallow.scrollHeight; // The height of the outer content

    let outerHeight = innerHeight;

    if (minRows) {
      outerHeight = Math.max(Number(minRows) * singleRowHeight, outerHeight);
    }

    if (maxRows) {
      outerHeight = Math.min(Number(maxRows) * singleRowHeight, outerHeight);
    }

    outerHeight = Math.max(outerHeight, singleRowHeight); // Take the box sizing into account for applying this value as a style.

    const outerHeightStyle = outerHeight + (boxSizing === 'border-box' ? padding + border : 0);
    const overflow = Math.abs(outerHeight - innerHeight) <= 1;
    setState(prevState => {
      // Need a large enough difference to update the height.
      // This prevents infinite rendering loop.
      if (renders.current < 20 && (outerHeightStyle > 0 && Math.abs((prevState.outerHeightStyle || 0) - outerHeightStyle) > 1 || prevState.overflow !== overflow)) {
        renders.current += 1;
        return {
          overflow,
          outerHeightStyle
        };
      }

      return prevState;
    });
  }, [maxRows, minRows, props.placeholder]);
  e__default.useEffect(() => {
    const handleResize = debounce$1(() => {
      renders.current = 0;
      syncHeight();
    });
    const containerWindow = ownerWindow(inputRef.current);
    containerWindow.addEventListener('resize', handleResize);
    let resizeObserver;

    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(inputRef.current);
    }

    return () => {
      handleResize.clear();
      containerWindow.removeEventListener('resize', handleResize);

      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [syncHeight]);
  useEnhancedEffect$1(() => {
    syncHeight();
  });
  e__default.useEffect(() => {
    renders.current = 0;
  }, [value]);

  const handleChange = event => {
    renders.current = 0;

    if (!isControlled) {
      syncHeight();
    }

    if (onChange) {
      onChange(event);
    }
  };

  return /*#__PURE__*/jsxRuntime.jsxs(e__default.Fragment, {
    children: [/*#__PURE__*/jsxRuntime.jsx("textarea", _extends({
      value: value,
      onChange: handleChange,
      ref: handleRef // Apply the rows prop to get a "correct" first SSR paint
      ,
      rows: minRows,
      style: _extends({
        height: state.outerHeightStyle,
        // Need a large enough difference to allow scrolling.
        // This prevents infinite rendering loop.
        overflow: state.overflow ? 'hidden' : null
      }, style)
    }, other)), /*#__PURE__*/jsxRuntime.jsx("textarea", {
      "aria-hidden": true,
      className: props.className,
      readOnly: true,
      ref: shadowRef,
      tabIndex: -1,
      style: _extends({}, styles$1.shadow, style, {
        padding: 0
      })
    })]
  });
});
var TextareaAutosize$1 = TextareaAutosize;

function GlobalStyles(props) {
  return /*#__PURE__*/jsxRuntime.jsx(GlobalStyles$1, _extends({}, props, {
    defaultTheme: defaultTheme$1
  }));
}

// Supports determination of isControlled().
// Controlled input accepts its current value as a prop.
//
// @see https://facebook.github.io/react/docs/forms.html#controlled-components
// @param value
// @returns {boolean} true if string (including '') or number (including zero)
function hasValue(value) {
  return value != null && !(Array.isArray(value) && value.length === 0);
} // Determine if field is empty or filled.
// Response determines if label is presented above field or as placeholder.
//
// @param obj
// @param SSR
// @returns {boolean} False when not present or empty string.
//                    True when any number or string with length.

function isFilled(obj, SSR = false) {
  return obj && (hasValue(obj.value) && obj.value !== '' || SSR && hasValue(obj.defaultValue) && obj.defaultValue !== '');
} // Determine if an Input is adorned on start.
// It's corresponding to the left with LTR.
//
// @param obj
// @returns {boolean} False when no adornments.
//                    True when adorned at the start.

function isAdornedStart(obj) {
  return obj.startAdornment;
}

function getInputBaseUtilityClass(slot) {
  return generateUtilityClass('MuiInputBase', slot);
}
const inputBaseClasses = generateUtilityClasses('MuiInputBase', ['root', 'formControl', 'focused', 'disabled', 'adornedStart', 'adornedEnd', 'error', 'sizeSmall', 'multiline', 'colorSecondary', 'fullWidth', 'hiddenLabel', 'input', 'inputSizeSmall', 'inputMultiline', 'inputTypeSearch', 'inputAdornedStart', 'inputAdornedEnd', 'inputHiddenLabel']);
var inputBaseClasses$1 = inputBaseClasses;

const _excluded$y = ["aria-describedby", "autoComplete", "autoFocus", "className", "color", "components", "componentsProps", "defaultValue", "disabled", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "startAdornment", "type", "value"];
const rootOverridesResolver = (props, styles) => {
  const {
    ownerState
  } = props;
  return [styles.root, ownerState.formControl && styles.formControl, ownerState.startAdornment && styles.adornedStart, ownerState.endAdornment && styles.adornedEnd, ownerState.error && styles.error, ownerState.size === 'small' && styles.sizeSmall, ownerState.multiline && styles.multiline, ownerState.color && styles[`color${capitalize(ownerState.color)}`], ownerState.fullWidth && styles.fullWidth, ownerState.hiddenLabel && styles.hiddenLabel];
};
const inputOverridesResolver = (props, styles) => {
  const {
    ownerState
  } = props;
  return [styles.input, ownerState.size === 'small' && styles.inputSizeSmall, ownerState.multiline && styles.inputMultiline, ownerState.type === 'search' && styles.inputTypeSearch, ownerState.startAdornment && styles.inputAdornedStart, ownerState.endAdornment && styles.inputAdornedEnd, ownerState.hiddenLabel && styles.inputHiddenLabel];
};

const useUtilityClasses$r = ownerState => {
  const {
    classes,
    color,
    disabled,
    error,
    endAdornment,
    focused,
    formControl,
    fullWidth,
    hiddenLabel,
    multiline,
    size,
    startAdornment,
    type
  } = ownerState;
  const slots = {
    root: ['root', `color${capitalize(color)}`, disabled && 'disabled', error && 'error', fullWidth && 'fullWidth', focused && 'focused', formControl && 'formControl', size === 'small' && 'sizeSmall', multiline && 'multiline', startAdornment && 'adornedStart', endAdornment && 'adornedEnd', hiddenLabel && 'hiddenLabel'],
    input: ['input', disabled && 'disabled', type === 'search' && 'inputTypeSearch', multiline && 'inputMultiline', size === 'small' && 'inputSizeSmall', hiddenLabel && 'inputHiddenLabel', startAdornment && 'inputAdornedStart', endAdornment && 'inputAdornedEnd']
  };
  return composeClasses(slots, getInputBaseUtilityClass, classes);
};

const InputBaseRoot = styled$1('div', {
  name: 'MuiInputBase',
  slot: 'Root',
  overridesResolver: rootOverridesResolver
})(({
  theme,
  ownerState
}) => _extends({}, theme.typography.body1, {
  color: theme.palette.text.primary,
  lineHeight: '1.4375em',
  // 23px
  boxSizing: 'border-box',
  // Prevent padding issue with fullWidth.
  position: 'relative',
  cursor: 'text',
  display: 'inline-flex',
  alignItems: 'center',
  [`&.${inputBaseClasses$1.disabled}`]: {
    color: theme.palette.text.disabled,
    cursor: 'default'
  }
}, ownerState.multiline && _extends({
  padding: '4px 0 5px'
}, ownerState.size === 'small' && {
  paddingTop: 1
}), ownerState.fullWidth && {
  width: '100%'
}));
const InputBaseComponent = styled$1('input', {
  name: 'MuiInputBase',
  slot: 'Input',
  overridesResolver: inputOverridesResolver
})(({
  theme,
  ownerState
}) => {
  const light = theme.palette.mode === 'light';
  const placeholder = {
    color: 'currentColor',
    opacity: light ? 0.42 : 0.5,
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shorter
    })
  };
  const placeholderHidden = {
    opacity: '0 !important'
  };
  const placeholderVisible = {
    opacity: light ? 0.42 : 0.5
  };
  return _extends({
    font: 'inherit',
    letterSpacing: 'inherit',
    color: 'currentColor',
    padding: '4px 0 5px',
    border: 0,
    boxSizing: 'content-box',
    background: 'none',
    height: '1.4375em',
    // Reset 23pxthe native input line-height
    margin: 0,
    // Reset for Safari
    WebkitTapHighlightColor: 'transparent',
    display: 'block',
    // Make the flex item shrink with Firefox
    minWidth: 0,
    width: '100%',
    // Fix IE11 width issue
    animationName: 'mui-auto-fill-cancel',
    animationDuration: '10ms',
    '&::-webkit-input-placeholder': placeholder,
    '&::-moz-placeholder': placeholder,
    // Firefox 19+
    '&:-ms-input-placeholder': placeholder,
    // IE11
    '&::-ms-input-placeholder': placeholder,
    // Edge
    '&:focus': {
      outline: 0
    },
    // Reset Firefox invalid required input style
    '&:invalid': {
      boxShadow: 'none'
    },
    '&::-webkit-search-decoration': {
      // Remove the padding when type=search.
      WebkitAppearance: 'none'
    },
    // Show and hide the placeholder logic
    [`label[data-shrink=false] + .${inputBaseClasses$1.formControl} &`]: {
      '&::-webkit-input-placeholder': placeholderHidden,
      '&::-moz-placeholder': placeholderHidden,
      // Firefox 19+
      '&:-ms-input-placeholder': placeholderHidden,
      // IE11
      '&::-ms-input-placeholder': placeholderHidden,
      // Edge
      '&:focus::-webkit-input-placeholder': placeholderVisible,
      '&:focus::-moz-placeholder': placeholderVisible,
      // Firefox 19+
      '&:focus:-ms-input-placeholder': placeholderVisible,
      // IE11
      '&:focus::-ms-input-placeholder': placeholderVisible // Edge

    },
    [`&.${inputBaseClasses$1.disabled}`]: {
      opacity: 1,
      // Reset iOS opacity
      WebkitTextFillColor: theme.palette.text.disabled // Fix opacity Safari bug

    },
    '&:-webkit-autofill': {
      animationDuration: '5000s',
      animationName: 'mui-auto-fill'
    }
  }, ownerState.size === 'small' && {
    paddingTop: 1
  }, ownerState.multiline && {
    height: 'auto',
    resize: 'none',
    padding: 0,
    paddingTop: 0
  }, ownerState.type === 'search' && {
    // Improve type search style.
    MozAppearance: 'textfield',
    WebkitAppearance: 'textfield'
  });
});

const inputGlobalStyles = /*#__PURE__*/jsxRuntime.jsx(GlobalStyles, {
  styles: {
    '@keyframes mui-auto-fill': {
      from: {
        display: 'block'
      }
    },
    '@keyframes mui-auto-fill-cancel': {
      from: {
        display: 'block'
      }
    }
  }
});
/**
 * `InputBase` contains as few styles as possible.
 * It aims to be a simple building block for creating an input.
 * It contains a load of style reset and some state logic.
 */


const InputBase = /*#__PURE__*/e__default.forwardRef(function InputBase(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiInputBase'
  });

  const {
    'aria-describedby': ariaDescribedby,
    autoComplete,
    autoFocus,
    className,
    components = {},
    componentsProps = {},
    defaultValue,
    disabled,
    endAdornment,
    fullWidth = false,
    id,
    inputComponent = 'input',
    inputProps: inputPropsProp = {},
    inputRef: inputRefProp,
    maxRows,
    minRows,
    multiline = false,
    name,
    onBlur,
    onChange,
    onClick,
    onFocus,
    onKeyDown,
    onKeyUp,
    placeholder,
    readOnly,
    renderSuffix,
    rows,
    startAdornment,
    type = 'text',
    value: valueProp
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$y);

  const theme = useTheme();
  const value = inputPropsProp.value != null ? inputPropsProp.value : valueProp;
  const {
    current: isControlled
  } = e__default.useRef(value != null);
  const inputRef = e__default.useRef();
  const handleInputRefWarning = e__default.useCallback(instance => {
  }, []);
  const handleInputPropsRefProp = useForkRef(inputPropsProp.ref, handleInputRefWarning);
  const handleInputRefProp = useForkRef(inputRefProp, handleInputPropsRefProp);
  const handleInputRef = useForkRef(inputRef, handleInputRefProp);
  const [focused, setFocused] = e__default.useState(false);
  const muiFormControl = useFormControl();

  const fcs = formControlState({
    props,
    muiFormControl,
    states: ['color', 'disabled', 'error', 'hiddenLabel', 'size', 'required', 'filled']
  });
  fcs.focused = muiFormControl ? muiFormControl.focused : focused; // The blur won't fire when the disabled state is set on a focused input.
  // We need to book keep the focused state manually.

  e__default.useEffect(() => {
    if (!muiFormControl && disabled && focused) {
      setFocused(false);

      if (onBlur) {
        onBlur();
      }
    }
  }, [muiFormControl, disabled, focused, onBlur]);
  const onFilled = muiFormControl && muiFormControl.onFilled;
  const onEmpty = muiFormControl && muiFormControl.onEmpty;
  const checkDirty = e__default.useCallback(obj => {
    if (isFilled(obj)) {
      if (onFilled) {
        onFilled();
      }
    } else if (onEmpty) {
      onEmpty();
    }
  }, [onFilled, onEmpty]);
  useEnhancedEffect$1(() => {
    if (isControlled) {
      checkDirty({
        value
      });
    }
  }, [value, checkDirty, isControlled]);

  const handleFocus = event => {
    // Fix a bug with IE11 where the focus/blur events are triggered
    // while the component is disabled.
    if (fcs.disabled) {
      event.stopPropagation();
      return;
    }

    if (onFocus) {
      onFocus(event);
    }

    if (inputPropsProp.onFocus) {
      inputPropsProp.onFocus(event);
    }

    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    } else {
      setFocused(true);
    }
  };

  const handleBlur = event => {
    if (onBlur) {
      onBlur(event);
    }

    if (inputPropsProp.onBlur) {
      inputPropsProp.onBlur(event);
    }

    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    } else {
      setFocused(false);
    }
  };

  const handleChange = (event, ...args) => {
    if (!isControlled) {
      const element = event.target || inputRef.current;

      if (element == null) {
        throw new Error(formatMuiErrorMessage(1));
      }

      checkDirty({
        value: element.value
      });
    }

    if (inputPropsProp.onChange) {
      inputPropsProp.onChange(event, ...args);
    } // Perform in the willUpdate


    if (onChange) {
      onChange(event, ...args);
    }
  }; // Check the input state on mount, in case it was filled by the user
  // or auto filled by the browser before the hydration (for SSR).


  e__default.useEffect(() => {
    checkDirty(inputRef.current); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = event => {
    if (inputRef.current && event.currentTarget === event.target) {
      inputRef.current.focus();
    }

    if (onClick) {
      onClick(event);
    }
  };

  let InputComponent = inputComponent;
  let inputProps = inputPropsProp;

  if (multiline && InputComponent === 'input') {
    if (rows) {

      inputProps = _extends({
        type: undefined,
        minRows: rows,
        maxRows: rows
      }, inputProps);
    } else {
      inputProps = _extends({
        type: undefined,
        maxRows,
        minRows
      }, inputProps);
    }

    InputComponent = TextareaAutosize$1;
  }

  const handleAutoFill = event => {
    // Provide a fake value as Chrome might not let you access it for security reasons.
    checkDirty(event.animationName === 'mui-auto-fill-cancel' ? inputRef.current : {
      value: 'x'
    });
  };

  e__default.useEffect(() => {
    if (muiFormControl) {
      muiFormControl.setAdornedStart(Boolean(startAdornment));
    }
  }, [muiFormControl, startAdornment]);

  const ownerState = _extends({}, props, {
    color: fcs.color || 'primary',
    disabled: fcs.disabled,
    endAdornment,
    error: fcs.error,
    focused: fcs.focused,
    formControl: muiFormControl,
    fullWidth,
    hiddenLabel: fcs.hiddenLabel,
    multiline,
    size: fcs.size,
    startAdornment,
    type
  });

  const classes = useUtilityClasses$r(ownerState);
  const Root = components.Root || InputBaseRoot;
  const rootProps = componentsProps.root || {};
  const Input = components.Input || InputBaseComponent;
  inputProps = _extends({}, inputProps, componentsProps.input);
  return /*#__PURE__*/jsxRuntime.jsxs(e__default.Fragment, {
    children: [inputGlobalStyles, /*#__PURE__*/jsxRuntime.jsxs(Root, _extends({}, rootProps, !isHostComponent(Root) && {
      ownerState: _extends({}, ownerState, rootProps.ownerState),
      theme
    }, {
      ref: ref,
      onClick: handleClick
    }, other, {
      className: l$2(classes.root, rootProps.className, className),
      children: [startAdornment, /*#__PURE__*/jsxRuntime.jsx(FormControlContext$1.Provider, {
        value: null,
        children: /*#__PURE__*/jsxRuntime.jsx(Input, _extends({
          ownerState: ownerState,
          "aria-invalid": fcs.error,
          "aria-describedby": ariaDescribedby,
          autoComplete: autoComplete,
          autoFocus: autoFocus,
          defaultValue: defaultValue,
          disabled: fcs.disabled,
          id: id,
          onAnimationStart: handleAutoFill,
          name: name,
          placeholder: placeholder,
          readOnly: readOnly,
          required: fcs.required,
          rows: rows,
          value: value,
          onKeyDown: onKeyDown,
          onKeyUp: onKeyUp,
          type: type
        }, inputProps, !isHostComponent(Input) && {
          as: InputComponent,
          ownerState: _extends({}, ownerState, inputProps.ownerState),
          theme
        }, {
          ref: handleInputRef,
          className: l$2(classes.input, inputProps.className, inputPropsProp.className),
          onBlur: handleBlur,
          onChange: handleChange,
          onFocus: handleFocus
        }))
      }), endAdornment, renderSuffix ? renderSuffix(_extends({}, fcs, {
        startAdornment
      })) : null]
    }))]
  });
});
var R = InputBase;

function getInputUtilityClass(slot) {
  return generateUtilityClass('MuiInput', slot);
}
const inputClasses = generateUtilityClasses('MuiInput', ['root', 'formControl', 'focused', 'disabled', 'colorSecondary', 'underline', 'error', 'sizeSmall', 'multiline', 'fullWidth', 'input', 'inputSizeSmall', 'inputMultiline', 'inputTypeSearch']);
var inputClasses$1 = inputClasses;

const _excluded$x = ["disableUnderline", "components", "componentsProps", "fullWidth", "inputComponent", "multiline", "type"];

const useUtilityClasses$q = ownerState => {
  const {
    classes,
    disableUnderline
  } = ownerState;
  const slots = {
    root: ['root', !disableUnderline && 'underline'],
    input: ['input']
  };
  const composedClasses = composeClasses(slots, getInputUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};

const InputRoot = styled$1(InputBaseRoot, {
  shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === 'classes',
  name: 'MuiInput',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [...rootOverridesResolver(props, styles), !ownerState.disableUnderline && styles.underline];
  }
})(({
  theme,
  ownerState
}) => {
  const light = theme.palette.mode === 'light';
  const bottomLineColor = light ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)';
  return _extends({
    position: 'relative'
  }, ownerState.formControl && {
    'label + &': {
      marginTop: 16
    }
  }, !ownerState.disableUnderline && {
    '&:after': {
      borderBottom: `2px solid ${theme.palette[ownerState.color].main}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '""',
      position: 'absolute',
      right: 0,
      transform: 'scaleX(0)',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
      }),
      pointerEvents: 'none' // Transparent to the hover style.

    },
    [`&.${inputClasses$1.focused}:after`]: {
      transform: 'scaleX(1)'
    },
    [`&.${inputClasses$1.error}:after`]: {
      borderBottomColor: theme.palette.error.main,
      transform: 'scaleX(1)' // error is always underlined in red

    },
    '&:before': {
      borderBottom: `1px solid ${bottomLineColor}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '"\\00a0"',
      position: 'absolute',
      right: 0,
      transition: theme.transitions.create('border-bottom-color', {
        duration: theme.transitions.duration.shorter
      }),
      pointerEvents: 'none' // Transparent to the hover style.

    },
    [`&:hover:not(.${inputClasses$1.disabled}):before`]: {
      borderBottom: `2px solid ${theme.palette.text.primary}`,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        borderBottom: `1px solid ${bottomLineColor}`
      }
    },
    [`&.${inputClasses$1.disabled}:before`]: {
      borderBottomStyle: 'dotted'
    }
  });
});
const InputInput = styled$1(InputBaseComponent, {
  name: 'MuiInput',
  slot: 'Input',
  overridesResolver: inputOverridesResolver
})({});
const Input = /*#__PURE__*/e__default.forwardRef(function Input(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiInput'
  });

  const {
    disableUnderline,
    components = {},
    componentsProps: componentsPropsProp,
    fullWidth = false,
    inputComponent = 'input',
    multiline = false,
    type = 'text'
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$x);

  const classes = useUtilityClasses$q(props);
  const ownerState = {
    disableUnderline
  };
  const inputComponentsProps = {
    root: {
      ownerState
    }
  };
  const componentsProps = componentsPropsProp ? deepmerge(componentsPropsProp, inputComponentsProps) : inputComponentsProps;
  return /*#__PURE__*/jsxRuntime.jsx(R, _extends({
    components: _extends({
      Root: InputRoot,
      Input: InputInput
    }, components),
    componentsProps: componentsProps,
    fullWidth: fullWidth,
    inputComponent: inputComponent,
    multiline: multiline,
    ref: ref,
    type: type
  }, other, {
    classes: classes
  }));
});
Input.muiName = 'Input';
var Input$1 = Input;

function getFilledInputUtilityClass(slot) {
  return generateUtilityClass('MuiFilledInput', slot);
}
const filledInputClasses = generateUtilityClasses('MuiFilledInput', ['root', 'colorSecondary', 'underline', 'focused', 'disabled', 'adornedStart', 'adornedEnd', 'error', 'sizeSmall', 'multiline', 'hiddenLabel', 'input', 'inputSizeSmall', 'inputHiddenLabel', 'inputMultiline', 'inputAdornedStart', 'inputAdornedEnd']);
var filledInputClasses$1 = filledInputClasses;

const _excluded$w = ["disableUnderline", "components", "componentsProps", "fullWidth", "hiddenLabel", "inputComponent", "multiline", "type"];

const useUtilityClasses$p = ownerState => {
  const {
    classes,
    disableUnderline
  } = ownerState;
  const slots = {
    root: ['root', !disableUnderline && 'underline'],
    input: ['input']
  };
  const composedClasses = composeClasses(slots, getFilledInputUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};

const FilledInputRoot = styled$1(InputBaseRoot, {
  shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === 'classes',
  name: 'MuiFilledInput',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [...rootOverridesResolver(props, styles), !ownerState.disableUnderline && styles.underline];
  }
})(({
  theme,
  ownerState
}) => {
  const light = theme.palette.mode === 'light';
  const bottomLineColor = light ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)';
  const backgroundColor = light ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.09)';
  return _extends({
    position: 'relative',
    backgroundColor,
    borderTopLeftRadius: theme.shape.borderRadius,
    borderTopRightRadius: theme.shape.borderRadius,
    transition: theme.transitions.create('background-color', {
      duration: theme.transitions.duration.shorter,
      easing: theme.transitions.easing.easeOut
    }),
    '&:hover': {
      backgroundColor: light ? 'rgba(0, 0, 0, 0.09)' : 'rgba(255, 255, 255, 0.13)',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor
      }
    },
    [`&.${filledInputClasses$1.focused}`]: {
      backgroundColor
    },
    [`&.${filledInputClasses$1.disabled}`]: {
      backgroundColor: light ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)'
    }
  }, !ownerState.disableUnderline && {
    '&:after': {
      borderBottom: `2px solid ${theme.palette[ownerState.color].main}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '""',
      position: 'absolute',
      right: 0,
      transform: 'scaleX(0)',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
      }),
      pointerEvents: 'none' // Transparent to the hover style.

    },
    [`&.${filledInputClasses$1.focused}:after`]: {
      transform: 'scaleX(1)'
    },
    [`&.${filledInputClasses$1.error}:after`]: {
      borderBottomColor: theme.palette.error.main,
      transform: 'scaleX(1)' // error is always underlined in red

    },
    '&:before': {
      borderBottom: `1px solid ${bottomLineColor}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '"\\00a0"',
      position: 'absolute',
      right: 0,
      transition: theme.transitions.create('border-bottom-color', {
        duration: theme.transitions.duration.shorter
      }),
      pointerEvents: 'none' // Transparent to the hover style.

    },
    [`&:hover:not(.${filledInputClasses$1.disabled}):before`]: {
      borderBottom: `1px solid ${theme.palette.text.primary}`
    },
    [`&.${filledInputClasses$1.disabled}:before`]: {
      borderBottomStyle: 'dotted'
    }
  }, ownerState.startAdornment && {
    paddingLeft: 12
  }, ownerState.endAdornment && {
    paddingRight: 12
  }, ownerState.multiline && _extends({
    padding: '25px 12px 8px'
  }, ownerState.size === 'small' && {
    paddingTop: 21,
    paddingBottom: 4
  }, ownerState.hiddenLabel && {
    paddingTop: 16,
    paddingBottom: 17
  }));
});
const FilledInputInput = styled$1(InputBaseComponent, {
  name: 'MuiFilledInput',
  slot: 'Input',
  overridesResolver: inputOverridesResolver
})(({
  theme,
  ownerState
}) => _extends({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12,
  '&:-webkit-autofill': {
    WebkitBoxShadow: theme.palette.mode === 'light' ? null : '0 0 0 100px #266798 inset',
    WebkitTextFillColor: theme.palette.mode === 'light' ? null : '#fff',
    caretColor: theme.palette.mode === 'light' ? null : '#fff',
    borderTopLeftRadius: 'inherit',
    borderTopRightRadius: 'inherit'
  }
}, ownerState.size === 'small' && {
  paddingTop: 21,
  paddingBottom: 4
}, ownerState.hiddenLabel && {
  paddingTop: 16,
  paddingBottom: 17
}, ownerState.multiline && {
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0
}, ownerState.startAdornment && {
  paddingLeft: 0
}, ownerState.endAdornment && {
  paddingRight: 0
}, ownerState.hiddenLabel && ownerState.size === 'small' && {
  paddingTop: 8,
  paddingBottom: 9
}));
const FilledInput = /*#__PURE__*/e__default.forwardRef(function FilledInput(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiFilledInput'
  });

  const {
    components = {},
    componentsProps: componentsPropsProp,
    fullWidth = false,
    // declare here to prevent spreading to DOM
    inputComponent = 'input',
    multiline = false,
    type = 'text'
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$w);

  const ownerState = _extends({}, props, {
    fullWidth,
    inputComponent,
    multiline,
    type
  });

  const classes = useUtilityClasses$p(props);
  const filledInputComponentsProps = {
    root: {
      ownerState
    },
    input: {
      ownerState
    }
  };
  const componentsProps = componentsPropsProp ? deepmerge(componentsPropsProp, filledInputComponentsProps) : filledInputComponentsProps;
  return /*#__PURE__*/jsxRuntime.jsx(R, _extends({
    components: _extends({
      Root: FilledInputRoot,
      Input: FilledInputInput
    }, components),
    componentsProps: componentsProps,
    fullWidth: fullWidth,
    inputComponent: inputComponent,
    multiline: multiline,
    ref: ref,
    type: type
  }, other, {
    classes: classes
  }));
});
FilledInput.muiName = 'Input';
var FilledInput$1 = FilledInput;

const _excluded$v = ["children", "classes", "className", "label", "notched"];
const NotchedOutlineRoot$1 = styled$1('fieldset')({
  textAlign: 'left',
  position: 'absolute',
  bottom: 0,
  right: 0,
  top: -5,
  left: 0,
  margin: 0,
  padding: '0 8px',
  pointerEvents: 'none',
  borderRadius: 'inherit',
  borderStyle: 'solid',
  borderWidth: 1,
  overflow: 'hidden',
  minWidth: '0%'
});
const NotchedOutlineLegend = styled$1('legend', {
  skipSx: true
})(({
  ownerState,
  theme
}) => _extends({}, ownerState.label === undefined && {
  padding: 0,
  lineHeight: '11px',
  // sync with `height` in `legend` styles
  transition: theme.transitions.create('width', {
    duration: 150,
    easing: theme.transitions.easing.easeOut
  })
}, ownerState.label !== undefined && _extends({
  display: 'block',
  width: 'auto',
  padding: 0,
  height: 11,
  // sync with `lineHeight` in `legend` styles
  fontSize: '0.75em',
  visibility: 'hidden',
  maxWidth: 0.01,
  transition: theme.transitions.create('max-width', {
    duration: 50,
    easing: theme.transitions.easing.easeOut
  }),
  '& > span': {
    paddingLeft: 5,
    paddingRight: 5,
    display: 'inline-block'
  }
}, ownerState.notched && {
  maxWidth: '100%',
  transition: theme.transitions.create('max-width', {
    duration: 100,
    easing: theme.transitions.easing.easeOut,
    delay: 50
  })
})));
/**
 * @ignore - internal component.
 */

function NotchedOutline(props) {
  const {
    className,
    label,
    notched
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$v);

  const ownerState = _extends({}, props, {
    notched,
    label
  });

  return /*#__PURE__*/jsxRuntime.jsx(NotchedOutlineRoot$1, _extends({
    "aria-hidden": true,
    className: className,
    ownerState: ownerState
  }, other, {
    children: /*#__PURE__*/jsxRuntime.jsx(NotchedOutlineLegend, {
      ownerState: ownerState,
      children: label ? /*#__PURE__*/jsxRuntime.jsx("span", {
        children: label
      }) :
      /*#__PURE__*/
      // notranslate needed while Google Translate will not fix zero-width space issue
      // eslint-disable-next-line react/no-danger
      jsxRuntime.jsx("span", {
        className: "notranslate",
        dangerouslySetInnerHTML: {
          __html: '&#8203;'
        }
      })
    })
  }));
}

function getOutlinedInputUtilityClass(slot) {
  return generateUtilityClass('MuiOutlinedInput', slot);
}
const outlinedInputClasses = generateUtilityClasses('MuiOutlinedInput', ['root', 'colorSecondary', 'focused', 'disabled', 'adornedStart', 'adornedEnd', 'error', 'sizeSmall', 'multiline', 'notchedOutline', 'input', 'inputSizeSmall', 'inputMultiline', 'inputAdornedStart', 'inputAdornedEnd']);
var outlinedInputClasses$1 = outlinedInputClasses;

const _excluded$u = ["components", "fullWidth", "inputComponent", "label", "multiline", "notched", "type"];

const useUtilityClasses$o = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root'],
    notchedOutline: ['notchedOutline'],
    input: ['input']
  };
  const composedClasses = composeClasses(slots, getOutlinedInputUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};

const OutlinedInputRoot = styled$1(InputBaseRoot, {
  shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === 'classes',
  name: 'MuiOutlinedInput',
  slot: 'Root',
  overridesResolver: rootOverridesResolver
})(({
  theme,
  ownerState
}) => {
  const borderColor = theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)';
  return _extends({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    [`&:hover .${outlinedInputClasses$1.notchedOutline}`]: {
      borderColor: theme.palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      [`&:hover .${outlinedInputClasses$1.notchedOutline}`]: {
        borderColor
      }
    },
    [`&.${outlinedInputClasses$1.focused} .${outlinedInputClasses$1.notchedOutline}`]: {
      borderColor: theme.palette[ownerState.color].main,
      borderWidth: 2
    },
    [`&.${outlinedInputClasses$1.error} .${outlinedInputClasses$1.notchedOutline}`]: {
      borderColor: theme.palette.error.main
    },
    [`&.${outlinedInputClasses$1.disabled} .${outlinedInputClasses$1.notchedOutline}`]: {
      borderColor: theme.palette.action.disabled
    }
  }, ownerState.startAdornment && {
    paddingLeft: 14
  }, ownerState.endAdornment && {
    paddingRight: 14
  }, ownerState.multiline && _extends({
    padding: '16.5px 14px'
  }, ownerState.size === 'small' && {
    padding: '8.5px 14px'
  }));
});
const NotchedOutlineRoot = styled$1(NotchedOutline, {
  name: 'MuiOutlinedInput',
  slot: 'NotchedOutline',
  overridesResolver: (props, styles) => styles.notchedOutline
})(({
  theme
}) => ({
  borderColor: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'
}));
const OutlinedInputInput = styled$1(InputBaseComponent, {
  name: 'MuiOutlinedInput',
  slot: 'Input',
  overridesResolver: inputOverridesResolver
})(({
  theme,
  ownerState
}) => _extends({
  padding: '16.5px 14px',
  '&:-webkit-autofill': {
    WebkitBoxShadow: theme.palette.mode === 'light' ? null : '0 0 0 100px #266798 inset',
    WebkitTextFillColor: theme.palette.mode === 'light' ? null : '#fff',
    caretColor: theme.palette.mode === 'light' ? null : '#fff',
    borderRadius: 'inherit'
  }
}, ownerState.size === 'small' && {
  padding: '8.5px 14px'
}, ownerState.multiline && {
  padding: 0
}, ownerState.startAdornment && {
  paddingLeft: 0
}, ownerState.endAdornment && {
  paddingRight: 0
}));
const OutlinedInput = /*#__PURE__*/e__default.forwardRef(function OutlinedInput(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiOutlinedInput'
  });

  const {
    components = {},
    fullWidth = false,
    inputComponent = 'input',
    label,
    multiline = false,
    notched,
    type = 'text'
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$u);

  const classes = useUtilityClasses$o(props);
  return /*#__PURE__*/jsxRuntime.jsx(R, _extends({
    components: _extends({
      Root: OutlinedInputRoot,
      Input: OutlinedInputInput
    }, components),
    renderSuffix: state => /*#__PURE__*/jsxRuntime.jsx(NotchedOutlineRoot, {
      className: classes.notchedOutline,
      label: label,
      notched: typeof notched !== 'undefined' ? notched : Boolean(state.startAdornment || state.filled || state.focused)
    }),
    fullWidth: fullWidth,
    inputComponent: inputComponent,
    multiline: multiline,
    ref: ref,
    type: type
  }, other, {
    classes: _extends({}, classes, {
      notchedOutline: null
    })
  }));
});
OutlinedInput.muiName = 'Input';
var OutlinedInput$1 = OutlinedInput;

function getFormLabelUtilityClasses(slot) {
  return generateUtilityClass('MuiFormLabel', slot);
}
const formLabelClasses = generateUtilityClasses('MuiFormLabel', ['root', 'colorSecondary', 'focused', 'disabled', 'error', 'filled', 'required', 'asterisk']);
var formLabelClasses$1 = formLabelClasses;

const _excluded$t = ["children", "className", "color", "component", "disabled", "error", "filled", "focused", "required"];

const useUtilityClasses$n = ownerState => {
  const {
    classes,
    color,
    focused,
    disabled,
    error,
    filled,
    required
  } = ownerState;
  const slots = {
    root: ['root', `color${capitalize(color)}`, disabled && 'disabled', error && 'error', filled && 'filled', focused && 'focused', required && 'required'],
    asterisk: ['asterisk', error && 'error']
  };
  return composeClasses(slots, getFormLabelUtilityClasses, classes);
};

const FormLabelRoot = styled$1('label', {
  name: 'MuiFormLabel',
  slot: 'Root',
  overridesResolver: ({
    ownerState
  }, styles) => {
    return _extends({}, styles.root, ownerState.color === 'secondary' && styles.colorSecondary, ownerState.filled && styles.filled);
  }
})(({
  theme,
  ownerState
}) => _extends({
  color: theme.palette.text.secondary
}, theme.typography.body1, {
  lineHeight: '1.4375em',
  padding: 0,
  position: 'relative',
  [`&.${formLabelClasses$1.focused}`]: {
    color: theme.palette[ownerState.color].main
  },
  [`&.${formLabelClasses$1.disabled}`]: {
    color: theme.palette.text.disabled
  },
  [`&.${formLabelClasses$1.error}`]: {
    color: theme.palette.error.main
  }
}));
const AsteriskComponent = styled$1('span', {
  name: 'MuiFormLabel',
  slot: 'Asterisk',
  overridesResolver: (props, styles) => styles.asterisk
})(({
  theme
}) => ({
  [`&.${formLabelClasses$1.error}`]: {
    color: theme.palette.error.main
  }
}));
const FormLabel = /*#__PURE__*/e__default.forwardRef(function FormLabel(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiFormLabel'
  });

  const {
    children,
    className,
    component = 'label'
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$t);

  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ['color', 'required', 'focused', 'disabled', 'error', 'filled']
  });

  const ownerState = _extends({}, props, {
    color: fcs.color || 'primary',
    component,
    disabled: fcs.disabled,
    error: fcs.error,
    filled: fcs.filled,
    focused: fcs.focused,
    required: fcs.required
  });

  const classes = useUtilityClasses$n(ownerState);
  return /*#__PURE__*/jsxRuntime.jsxs(FormLabelRoot, _extends({
    as: component,
    ownerState: ownerState,
    className: l$2(classes.root, className),
    ref: ref
  }, other, {
    children: [children, fcs.required && /*#__PURE__*/jsxRuntime.jsxs(AsteriskComponent, {
      ownerState: ownerState,
      "aria-hidden": true,
      className: classes.asterisk,
      children: ["\u2009", '*']
    })]
  }));
});
var FormLabel$1 = FormLabel;

function getInputLabelUtilityClasses(slot) {
  return generateUtilityClass('MuiInputLabel', slot);
}
generateUtilityClasses('MuiInputLabel', ['root', 'focused', 'disabled', 'error', 'required', 'asterisk', 'formControl', 'sizeSmall', 'shrink', 'animated', 'standard', 'filled', 'outlined']);

const _excluded$s = ["disableAnimation", "margin", "shrink", "variant"];

const useUtilityClasses$m = ownerState => {
  const {
    classes,
    formControl,
    size,
    shrink,
    disableAnimation,
    variant,
    required
  } = ownerState;
  const slots = {
    root: ['root', formControl && 'formControl', !disableAnimation && 'animated', shrink && 'shrink', size === 'small' && 'sizeSmall', variant],
    asterisk: [required && 'asterisk']
  };
  const composedClasses = composeClasses(slots, getInputLabelUtilityClasses, classes);
  return _extends({}, classes, composedClasses);
};

const InputLabelRoot = styled$1(FormLabel$1, {
  shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === 'classes',
  name: 'MuiInputLabel',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${formLabelClasses$1.asterisk}`]: styles.asterisk
    }, styles.root, ownerState.formControl && styles.formControl, ownerState.size === 'small' && styles.sizeSmall, ownerState.shrink && styles.shrink, !ownerState.disableAnimation && styles.animated, styles[ownerState.variant]];
  }
})(({
  theme,
  ownerState
}) => _extends({
  display: 'block',
  transformOrigin: 'top left',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  maxWidth: '100%'
}, ownerState.formControl && {
  position: 'absolute',
  left: 0,
  top: 0,
  // slight alteration to spec spacing to match visual spec result
  transform: 'translate(0, 20px) scale(1)'
}, ownerState.size === 'small' && {
  // Compensation for the `Input.inputSizeSmall` style.
  transform: 'translate(0, 17px) scale(1)'
}, ownerState.shrink && {
  transform: 'translate(0, -1.5px) scale(0.75)',
  transformOrigin: 'top left',
  maxWidth: '133%'
}, !ownerState.disableAnimation && {
  transition: theme.transitions.create(['color', 'transform', 'max-width'], {
    duration: theme.transitions.duration.shorter,
    easing: theme.transitions.easing.easeOut
  })
}, ownerState.variant === 'filled' && _extends({
  // Chrome's autofill feature gives the input field a yellow background.
  // Since the input field is behind the label in the HTML tree,
  // the input field is drawn last and hides the label with an opaque background color.
  // zIndex: 1 will raise the label above opaque background-colors of input.
  zIndex: 1,
  pointerEvents: 'none',
  transform: 'translate(12px, 16px) scale(1)',
  maxWidth: 'calc(100% - 24px)'
}, ownerState.size === 'small' && {
  transform: 'translate(12px, 13px) scale(1)'
}, ownerState.shrink && _extends({
  transform: 'translate(12px, 7px) scale(0.75)',
  maxWidth: 'calc(133% - 24px)'
}, ownerState.size === 'small' && {
  transform: 'translate(12px, 4px) scale(0.75)'
})), ownerState.variant === 'outlined' && _extends({
  // see comment above on filled.zIndex
  zIndex: 1,
  pointerEvents: 'none',
  transform: 'translate(14px, 16px) scale(1)',
  maxWidth: 'calc(100% - 24px)'
}, ownerState.size === 'small' && {
  transform: 'translate(14px, 9px) scale(1)'
}, ownerState.shrink && {
  maxWidth: 'calc(133% - 24px)',
  transform: 'translate(14px, -9px) scale(0.75)'
})));
const InputLabel = /*#__PURE__*/e__default.forwardRef(function InputLabel(inProps, ref) {
  const props = useThemeProps({
    name: 'MuiInputLabel',
    props: inProps
  });

  const {
    disableAnimation = false,
    shrink: shrinkProp
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$s);

  const muiFormControl = useFormControl();
  let shrink = shrinkProp;

  if (typeof shrink === 'undefined' && muiFormControl) {
    shrink = muiFormControl.filled || muiFormControl.focused || muiFormControl.adornedStart;
  }

  const fcs = formControlState({
    props,
    muiFormControl,
    states: ['size', 'variant', 'required']
  });

  const ownerState = _extends({}, props, {
    disableAnimation,
    formControl: muiFormControl,
    shrink,
    size: fcs.size,
    variant: fcs.variant,
    required: fcs.required
  });

  const classes = useUtilityClasses$m(ownerState);
  return /*#__PURE__*/jsxRuntime.jsx(InputLabelRoot, _extends({
    "data-shrink": shrink,
    ownerState: ownerState,
    ref: ref
  }, other, {
    classes: classes
  }));
});
var _$1 = InputLabel;

function getFormControlUtilityClasses(slot) {
  return generateUtilityClass('MuiFormControl', slot);
}
generateUtilityClasses('MuiFormControl', ['root', 'marginNone', 'marginNormal', 'marginDense', 'fullWidth', 'disabled']);

const _excluded$r = ["children", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"];

const useUtilityClasses$l = ownerState => {
  const {
    classes,
    margin,
    fullWidth
  } = ownerState;
  const slots = {
    root: ['root', margin !== 'none' && `margin${capitalize(margin)}`, fullWidth && 'fullWidth']
  };
  return composeClasses(slots, getFormControlUtilityClasses, classes);
};

const FormControlRoot = styled$1('div', {
  name: 'MuiFormControl',
  slot: 'Root',
  overridesResolver: ({
    ownerState
  }, styles) => {
    return _extends({}, styles.root, styles[`margin${capitalize(ownerState.margin)}`], ownerState.fullWidth && styles.fullWidth);
  }
})(({
  ownerState
}) => _extends({
  display: 'inline-flex',
  flexDirection: 'column',
  position: 'relative',
  // Reset fieldset default style.
  minWidth: 0,
  padding: 0,
  margin: 0,
  border: 0,
  verticalAlign: 'top'
}, ownerState.margin === 'normal' && {
  marginTop: 16,
  marginBottom: 8
}, ownerState.margin === 'dense' && {
  marginTop: 8,
  marginBottom: 4
}, ownerState.fullWidth && {
  width: '100%'
}));
/**
 * Provides context such as filled/focused/error/required for form inputs.
 * Relying on the context provides high flexibility and ensures that the state always stays
 * consistent across the children of the `FormControl`.
 * This context is used by the following components:
 *
 *  - FormLabel
 *  - FormHelperText
 *  - Input
 *  - InputLabel
 *
 * You can find one composition example below and more going to [the demos](/components/text-fields/#components).
 *
 * ```jsx
 * <FormControl>
 *   <InputLabel htmlFor="my-input">Email address</InputLabel>
 *   <Input id="my-input" aria-describedby="my-helper-text" />
 *   <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
 * </FormControl>
 * ```
 *
 * ⚠️ Only one `InputBase` can be used within a FormControl because it create visual inconsistencies.
 * For instance, only one input can be focused at the same time, the state shouldn't be shared.
 */

const FormControl = /*#__PURE__*/e__default.forwardRef(function FormControl(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiFormControl'
  });

  const {
    children,
    className,
    color = 'primary',
    component = 'div',
    disabled = false,
    error = false,
    focused: visuallyFocused,
    fullWidth = false,
    hiddenLabel = false,
    margin = 'none',
    required = false,
    size = 'medium',
    variant = 'outlined'
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$r);

  const ownerState = _extends({}, props, {
    color,
    component,
    disabled,
    error,
    fullWidth,
    hiddenLabel,
    margin,
    required,
    size,
    variant
  });

  const classes = useUtilityClasses$l(ownerState);
  const [adornedStart, setAdornedStart] = e__default.useState(() => {
    // We need to iterate through the children and find the Input in order
    // to fully support server-side rendering.
    let initialAdornedStart = false;

    if (children) {
      e__default.Children.forEach(children, child => {
        if (!isMuiElement(child, ['Input', 'Select'])) {
          return;
        }

        const input = isMuiElement(child, ['Select']) ? child.props.input : child;

        if (input && isAdornedStart(input.props)) {
          initialAdornedStart = true;
        }
      });
    }

    return initialAdornedStart;
  });
  const [filled, setFilled] = e__default.useState(() => {
    // We need to iterate through the children and find the Input in order
    // to fully support server-side rendering.
    let initialFilled = false;

    if (children) {
      e__default.Children.forEach(children, child => {
        if (!isMuiElement(child, ['Input', 'Select'])) {
          return;
        }

        if (isFilled(child.props, true)) {
          initialFilled = true;
        }
      });
    }

    return initialFilled;
  });
  const [focusedState, setFocused] = e__default.useState(false);

  if (disabled && focusedState) {
    setFocused(false);
  }

  const focused = visuallyFocused !== undefined && !disabled ? visuallyFocused : focusedState;
  let registerEffect;

  const onFilled = e__default.useCallback(() => {
    setFilled(true);
  }, []);
  const onEmpty = e__default.useCallback(() => {
    setFilled(false);
  }, []);
  const childContext = {
    adornedStart,
    setAdornedStart,
    color,
    disabled,
    error,
    filled,
    focused,
    fullWidth,
    hiddenLabel,
    size,
    onBlur: () => {
      setFocused(false);
    },
    onEmpty,
    onFilled,
    onFocus: () => {
      setFocused(true);
    },
    registerEffect,
    required,
    variant
  };
  return /*#__PURE__*/jsxRuntime.jsx(FormControlContext$1.Provider, {
    value: childContext,
    children: /*#__PURE__*/jsxRuntime.jsx(FormControlRoot, _extends({
      as: component,
      ownerState: ownerState,
      className: l$2(classes.root, className),
      ref: ref
    }, other, {
      children: children
    }))
  });
});
var N = FormControl;

function getFormHelperTextUtilityClasses(slot) {
  return generateUtilityClass('MuiFormHelperText', slot);
}
const formHelperTextClasses = generateUtilityClasses('MuiFormHelperText', ['root', 'error', 'disabled', 'sizeSmall', 'sizeMedium', 'contained', 'focused', 'filled', 'required']);
var formHelperTextClasses$1 = formHelperTextClasses;

const _excluded$q = ["children", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"];

const useUtilityClasses$k = ownerState => {
  const {
    classes,
    contained,
    size,
    disabled,
    error,
    filled,
    focused,
    required
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', error && 'error', size && `size${capitalize(size)}`, contained && 'contained', focused && 'focused', filled && 'filled', required && 'required']
  };
  return composeClasses(slots, getFormHelperTextUtilityClasses, classes);
};

const FormHelperTextRoot = styled$1('p', {
  name: 'MuiFormHelperText',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.size && styles[`size${capitalize(ownerState.size)}`], ownerState.contained && styles.contained, ownerState.filled && styles.filled];
  }
})(({
  theme,
  ownerState
}) => _extends({
  color: theme.palette.text.secondary
}, theme.typography.caption, {
  textAlign: 'left',
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${formHelperTextClasses$1.disabled}`]: {
    color: theme.palette.text.disabled
  },
  [`&.${formHelperTextClasses$1.error}`]: {
    color: theme.palette.error.main
  }
}, ownerState.size === 'small' && {
  marginTop: 4
}, ownerState.contained && {
  marginLeft: 14,
  marginRight: 14
}));
const FormHelperText = /*#__PURE__*/e__default.forwardRef(function FormHelperText(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiFormHelperText'
  });

  const {
    children,
    className,
    component = 'p'
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$q);

  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ['variant', 'size', 'disabled', 'error', 'filled', 'focused', 'required']
  });

  const ownerState = _extends({}, props, {
    component,
    contained: fcs.variant === 'filled' || fcs.variant === 'outlined',
    variant: fcs.variant,
    size: fcs.size,
    disabled: fcs.disabled,
    error: fcs.error,
    filled: fcs.filled,
    focused: fcs.focused,
    required: fcs.required
  });

  const classes = useUtilityClasses$k(ownerState);
  return /*#__PURE__*/jsxRuntime.jsx(FormHelperTextRoot, _extends({
    as: component,
    ownerState: ownerState,
    className: l$2(classes.root, className),
    ref: ref
  }, other, {
    children: children === ' ' ?
    /*#__PURE__*/
    // notranslate needed while Google Translate will not fix zero-width space issue
    // eslint-disable-next-line react/no-danger
    jsxRuntime.jsx("span", {
      className: "notranslate",
      dangerouslySetInnerHTML: {
        __html: '&#8203;'
      }
    }) : children
  }));
});
var FormHelperText$1 = FormHelperText;

/**
 * @ignore - internal component.
 */

const ListContext = /*#__PURE__*/e__default.createContext({});

var ListContext$1 = ListContext;

function getListUtilityClass(slot) {
  return generateUtilityClass('MuiList', slot);
}
generateUtilityClasses('MuiList', ['root', 'padding', 'dense', 'subheader']);

const _excluded$p = ["children", "className", "component", "dense", "disablePadding", "subheader"];

const useUtilityClasses$j = ownerState => {
  const {
    classes,
    disablePadding,
    dense,
    subheader
  } = ownerState;
  const slots = {
    root: ['root', !disablePadding && 'padding', dense && 'dense', subheader && 'subheader']
  };
  return composeClasses(slots, getListUtilityClass, classes);
};

const ListRoot = styled$1('ul', {
  name: 'MuiList',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, !ownerState.disablePadding && styles.padding, ownerState.dense && styles.dense, ownerState.subheader && styles.subheader];
  }
})(({
  ownerState
}) => _extends({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  position: 'relative'
}, !ownerState.disablePadding && {
  paddingTop: 8,
  paddingBottom: 8
}, ownerState.subheader && {
  paddingTop: 0
}));
const List = /*#__PURE__*/e__default.forwardRef(function List(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiList'
  });

  const {
    children,
    className,
    component = 'ul',
    dense = false,
    disablePadding = false,
    subheader
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$p);

  const context = e__default.useMemo(() => ({
    dense
  }), [dense]);

  const ownerState = _extends({}, props, {
    component,
    dense,
    disablePadding
  });

  const classes = useUtilityClasses$j(ownerState);
  return /*#__PURE__*/jsxRuntime.jsx(ListContext$1.Provider, {
    value: context,
    children: /*#__PURE__*/jsxRuntime.jsxs(ListRoot, _extends({
      as: component,
      className: l$2(classes.root, className),
      ref: ref,
      ownerState: ownerState
    }, other, {
      children: [subheader, children]
    }))
  });
});
var List$1 = List;

const _excluded$o = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];

function nextItem(list, item, disableListWrap) {
  if (list === item) {
    return list.firstChild;
  }

  if (item && item.nextElementSibling) {
    return item.nextElementSibling;
  }

  return disableListWrap ? null : list.firstChild;
}

function previousItem(list, item, disableListWrap) {
  if (list === item) {
    return disableListWrap ? list.firstChild : list.lastChild;
  }

  if (item && item.previousElementSibling) {
    return item.previousElementSibling;
  }

  return disableListWrap ? null : list.lastChild;
}

function textCriteriaMatches(nextFocus, textCriteria) {
  if (textCriteria === undefined) {
    return true;
  }

  let text = nextFocus.innerText;

  if (text === undefined) {
    // jsdom doesn't support innerText
    text = nextFocus.textContent;
  }

  text = text.trim().toLowerCase();

  if (text.length === 0) {
    return false;
  }

  if (textCriteria.repeating) {
    return text[0] === textCriteria.keys[0];
  }

  return text.indexOf(textCriteria.keys.join('')) === 0;
}

function moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, traversalFunction, textCriteria) {
  let wrappedOnce = false;
  let nextFocus = traversalFunction(list, currentFocus, currentFocus ? disableListWrap : false);

  while (nextFocus) {
    // Prevent infinite loop.
    if (nextFocus === list.firstChild) {
      if (wrappedOnce) {
        return false;
      }

      wrappedOnce = true;
    } // Same logic as useAutocomplete.js


    const nextFocusDisabled = disabledItemsFocusable ? false : nextFocus.disabled || nextFocus.getAttribute('aria-disabled') === 'true';

    if (!nextFocus.hasAttribute('tabindex') || !textCriteriaMatches(nextFocus, textCriteria) || nextFocusDisabled) {
      // Move to the next element.
      nextFocus = traversalFunction(list, nextFocus, disableListWrap);
    } else {
      nextFocus.focus();
      return true;
    }
  }

  return false;
}
/**
 * A permanently displayed menu following https://www.w3.org/TR/wai-aria-practices/#menubutton.
 * It's exposed to help customization of the [`Menu`](/api/menu/) component if you
 * use it separately you need to move focus into the component manually. Once
 * the focus is placed inside the component it is fully keyboard accessible.
 */


const MenuList = /*#__PURE__*/e__default.forwardRef(function MenuList(props, ref) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions,
    autoFocus = false,
    autoFocusItem = false,
    children,
    className,
    disabledItemsFocusable = false,
    disableListWrap = false,
    onKeyDown,
    variant = 'selectedMenu'
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$o);

  const listRef = e__default.useRef(null);
  const textCriteriaRef = e__default.useRef({
    keys: [],
    repeating: true,
    previousKeyMatched: true,
    lastTime: null
  });
  useEnhancedEffect$1(() => {
    if (autoFocus) {
      listRef.current.focus();
    }
  }, [autoFocus]);
  e__default.useImperativeHandle(actions, () => ({
    adjustStyleForScrollbar: (containerElement, theme) => {
      // Let's ignore that piece of logic if users are already overriding the width
      // of the menu.
      const noExplicitWidth = !listRef.current.style.width;

      if (containerElement.clientHeight < listRef.current.clientHeight && noExplicitWidth) {
        const scrollbarSize = `${getScrollbarSize(ownerDocument(containerElement))}px`;
        listRef.current.style[theme.direction === 'rtl' ? 'paddingLeft' : 'paddingRight'] = scrollbarSize;
        listRef.current.style.width = `calc(100% + ${scrollbarSize})`;
      }

      return listRef.current;
    }
  }), []);

  const handleKeyDown = event => {
    const list = listRef.current;
    const key = event.key;
    /**
     * @type {Element} - will always be defined since we are in a keydown handler
     * attached to an element. A keydown event is either dispatched to the activeElement
     * or document.body or document.documentElement. Only the first case will
     * trigger this specific handler.
     */

    const currentFocus = ownerDocument(list).activeElement;

    if (key === 'ArrowDown') {
      // Prevent scroll of the page
      event.preventDefault();
      moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, nextItem);
    } else if (key === 'ArrowUp') {
      event.preventDefault();
      moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, previousItem);
    } else if (key === 'Home') {
      event.preventDefault();
      moveFocus(list, null, disableListWrap, disabledItemsFocusable, nextItem);
    } else if (key === 'End') {
      event.preventDefault();
      moveFocus(list, null, disableListWrap, disabledItemsFocusable, previousItem);
    } else if (key.length === 1) {
      const criteria = textCriteriaRef.current;
      const lowerKey = key.toLowerCase();
      const currTime = performance.now();

      if (criteria.keys.length > 0) {
        // Reset
        if (currTime - criteria.lastTime > 500) {
          criteria.keys = [];
          criteria.repeating = true;
          criteria.previousKeyMatched = true;
        } else if (criteria.repeating && lowerKey !== criteria.keys[0]) {
          criteria.repeating = false;
        }
      }

      criteria.lastTime = currTime;
      criteria.keys.push(lowerKey);
      const keepFocusOnCurrent = currentFocus && !criteria.repeating && textCriteriaMatches(currentFocus, criteria);

      if (criteria.previousKeyMatched && (keepFocusOnCurrent || moveFocus(list, currentFocus, false, disabledItemsFocusable, nextItem, criteria))) {
        event.preventDefault();
      } else {
        criteria.previousKeyMatched = false;
      }
    }

    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  const handleRef = useForkRef(listRef, ref);
  /**
   * the index of the item should receive focus
   * in a `variant="selectedMenu"` it's the first `selected` item
   * otherwise it's the very first item.
   */

  let activeItemIndex = -1; // since we inject focus related props into children we have to do a lookahead
  // to check if there is a `selected` item. We're looking for the last `selected`
  // item and use the first valid item as a fallback

  e__default.Children.forEach(children, (child, index) => {
    if (! /*#__PURE__*/e__default.isValidElement(child)) {
      return;
    }

    if (!child.props.disabled) {
      if (variant === 'selectedMenu' && child.props.selected) {
        activeItemIndex = index;
      } else if (activeItemIndex === -1) {
        activeItemIndex = index;
      }
    }
  });
  const items = e__default.Children.map(children, (child, index) => {
    if (index === activeItemIndex) {
      const newChildProps = {};

      if (autoFocusItem) {
        newChildProps.autoFocus = true;
      }

      if (child.props.tabIndex === undefined && variant === 'selectedMenu') {
        newChildProps.tabIndex = 0;
      }

      return /*#__PURE__*/e__default.cloneElement(child, newChildProps);
    }

    return child;
  });
  return /*#__PURE__*/jsxRuntime.jsx(List$1, _extends({
    role: "menu",
    ref: handleRef,
    className: className,
    onKeyDown: handleKeyDown,
    tabIndex: autoFocus ? 0 : -1
  }, other, {
    children: items
  }));
});
var j = MenuList;

const _excluded$n = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
const styles = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
};
const defaultTimeout = {
  enter: duration.enteringScreen,
  exit: duration.leavingScreen
};
/**
 * The Fade transition is used by the [Modal](/components/modal/) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

const Fade = /*#__PURE__*/e__default.forwardRef(function Fade(props, ref) {
  const {
    addEndListener,
    appear = true,
    children,
    easing,
    in: inProp,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    style,
    timeout = defaultTimeout,
    // eslint-disable-next-line react/prop-types
    TransitionComponent = Transition$1
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$n);

  const theme = useTheme();
  const nodeRef = e__default.useRef(null);
  const foreignRef = useForkRef(children.ref, ref);
  const handleRef = useForkRef(nodeRef, foreignRef);

  const normalizedTransitionCallback = callback => maybeIsAppearing => {
    if (callback) {
      const node = nodeRef.current; // onEnterXxx and onExitXxx callbacks have a different arguments.length value.

      if (maybeIsAppearing === undefined) {
        callback(node);
      } else {
        callback(node, maybeIsAppearing);
      }
    }
  };

  const handleEntering = normalizedTransitionCallback(onEntering);
  const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
    reflow(node); // So the animation always start from the start.

    const transitionProps = getTransitionProps({
      style,
      timeout,
      easing
    }, {
      mode: 'enter'
    });
    node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
    node.style.transition = theme.transitions.create('opacity', transitionProps);

    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  const handleEntered = normalizedTransitionCallback(onEntered);
  const handleExiting = normalizedTransitionCallback(onExiting);
  const handleExit = normalizedTransitionCallback(node => {
    const transitionProps = getTransitionProps({
      style,
      timeout,
      easing
    }, {
      mode: 'exit'
    });
    node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
    node.style.transition = theme.transitions.create('opacity', transitionProps);

    if (onExit) {
      onExit(node);
    }
  });
  const handleExited = normalizedTransitionCallback(onExited);

  const handleAddEndListener = next => {
    if (addEndListener) {
      // Old call signature before `react-transition-group` implemented `nodeRef`
      addEndListener(nodeRef.current, next);
    }
  };

  return /*#__PURE__*/jsxRuntime.jsx(TransitionComponent, _extends({
    appear: appear,
    in: inProp,
    nodeRef: nodeRef ,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    timeout: timeout
  }, other, {
    children: (state, childProps) => {
      return /*#__PURE__*/e__default.cloneElement(children, _extends({
        style: _extends({
          opacity: 0,
          visibility: state === 'exited' && !inProp ? 'hidden' : undefined
        }, styles[state], style, children.props.style),
        ref: handleRef
      }, childProps));
    }
  }));
});
var Fade$1 = Fade;

const _excluded$m = ["children", "components", "componentsProps", "className", "invisible", "open", "transitionDuration", "TransitionComponent"];

const extendUtilityClasses$1 = ownerState => {
  const {
    classes
  } = ownerState;
  return classes;
};

const BackdropRoot = styled$1('div', {
  name: 'MuiBackdrop',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.invisible && styles.invisible];
  }
})(({
  ownerState
}) => _extends({
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  WebkitTapHighlightColor: 'transparent'
}, ownerState.invisible && {
  backgroundColor: 'transparent'
}));
const Backdrop = /*#__PURE__*/e__default.forwardRef(function Backdrop(inProps, ref) {
  var _componentsProps$root;

  const props = useThemeProps({
    props: inProps,
    name: 'MuiBackdrop'
  });

  const {
    children,
    components = {},
    componentsProps = {},
    className,
    invisible = false,
    open,
    transitionDuration,
    // eslint-disable-next-line react/prop-types
    TransitionComponent = Fade$1
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$m);

  const ownerState = _extends({}, props, {
    invisible
  });

  const classes = extendUtilityClasses$1(ownerState);
  return /*#__PURE__*/jsxRuntime.jsx(TransitionComponent, _extends({
    in: open,
    timeout: transitionDuration
  }, other, {
    children: /*#__PURE__*/jsxRuntime.jsx(BackdropUnstyled$1, {
      className: className,
      invisible: invisible,
      components: _extends({
        Root: BackdropRoot
      }, components),
      componentsProps: {
        root: _extends({}, componentsProps.root, (!components.Root || !isHostComponent(components.Root)) && {
          ownerState: _extends({}, (_componentsProps$root = componentsProps.root) == null ? void 0 : _componentsProps$root.ownerState)
        })
      },
      classes: classes,
      ref: ref,
      children: children
    })
  }));
});
var Backdrop$1 = Backdrop;

const _excluded$l = ["BackdropComponent", "closeAfterTransition", "children", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted"];

const extendUtilityClasses = ownerState => {
  return ownerState.classes;
};

const ModalRoot = styled$1('div', {
  name: 'MuiModal',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, !ownerState.open && ownerState.exited && styles.hidden];
  }
})(({
  theme,
  ownerState
}) => _extends({
  position: 'fixed',
  zIndex: theme.zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !ownerState.open && ownerState.exited && {
  visibility: 'hidden'
}));
const ModalBackdrop = styled$1(Backdrop$1, {
  name: 'MuiModal',
  slot: 'Backdrop',
  overridesResolver: (props, styles) => {
    return styles.backdrop;
  }
})({
  zIndex: -1
});
/**
 * Modal is a lower-level construct that is leveraged by the following components:
 *
 * - [Dialog](/api/dialog/)
 * - [Drawer](/api/drawer/)
 * - [Menu](/api/menu/)
 * - [Popover](/api/popover/)
 *
 * If you are creating a modal dialog, you probably want to use the [Dialog](/api/dialog/) component
 * rather than directly using Modal.
 *
 * This component shares many concepts with [react-overlays](https://react-bootstrap.github.io/react-overlays/#modals).
 */

const Modal = /*#__PURE__*/e__default.forwardRef(function Modal(inProps, ref) {
  var _componentsProps$root;

  const props = useThemeProps({
    name: 'MuiModal',
    props: inProps
  });

  const {
    BackdropComponent = ModalBackdrop,
    closeAfterTransition = false,
    children,
    components = {},
    componentsProps = {},
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableEscapeKeyDown = false,
    disablePortal = false,
    disableRestoreFocus = false,
    disableScrollLock = false,
    hideBackdrop = false,
    keepMounted = false
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$l);

  const [exited, setExited] = e__default.useState(true);
  const commonProps = {
    closeAfterTransition,
    disableAutoFocus,
    disableEnforceFocus,
    disableEscapeKeyDown,
    disablePortal,
    disableRestoreFocus,
    disableScrollLock,
    hideBackdrop,
    keepMounted
  };

  const ownerState = _extends({}, props, commonProps, {
    exited
  });

  const classes = extendUtilityClasses(ownerState);
  return /*#__PURE__*/jsxRuntime.jsx(ModalUnstyled$1, _extends({
    components: _extends({
      Root: ModalRoot
    }, components),
    componentsProps: {
      root: _extends({}, componentsProps.root, (!components.Root || !isHostComponent(components.Root)) && {
        ownerState: _extends({}, (_componentsProps$root = componentsProps.root) == null ? void 0 : _componentsProps$root.ownerState)
      })
    },
    BackdropComponent: BackdropComponent,
    onTransitionEnter: () => setExited(false),
    onTransitionExited: () => setExited(true),
    ref: ref
  }, other, {
    classes: classes
  }, commonProps, {
    children: children
  }));
});
var Modal$1 = Modal;

function getPopoverUtilityClass(slot) {
  return generateUtilityClass('MuiPopover', slot);
}
generateUtilityClasses('MuiPopover', ['root', 'paper']);

const _excluded$k = ["onEntering"],
      _excluded2$2 = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps"];
function getOffsetTop(rect, vertical) {
  let offset = 0;

  if (typeof vertical === 'number') {
    offset = vertical;
  } else if (vertical === 'center') {
    offset = rect.height / 2;
  } else if (vertical === 'bottom') {
    offset = rect.height;
  }

  return offset;
}
function getOffsetLeft(rect, horizontal) {
  let offset = 0;

  if (typeof horizontal === 'number') {
    offset = horizontal;
  } else if (horizontal === 'center') {
    offset = rect.width / 2;
  } else if (horizontal === 'right') {
    offset = rect.width;
  }

  return offset;
}

function getTransformOriginValue(transformOrigin) {
  return [transformOrigin.horizontal, transformOrigin.vertical].map(n => typeof n === 'number' ? `${n}px` : n).join(' ');
}

function resolveAnchorEl(anchorEl) {
  return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
}

const useUtilityClasses$i = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root'],
    paper: ['paper']
  };
  return composeClasses(slots, getPopoverUtilityClass, classes);
};

const PopoverRoot = styled$1(Modal$1, {
  name: 'MuiPopover',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({});
const PopoverPaper = styled$1(k, {
  name: 'MuiPopover',
  slot: 'Paper',
  overridesResolver: (props, styles) => styles.paper
})({
  position: 'absolute',
  overflowY: 'auto',
  overflowX: 'hidden',
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: 'calc(100% - 32px)',
  maxHeight: 'calc(100% - 32px)',
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
});
const Popover = /*#__PURE__*/e__default.forwardRef(function Popover(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiPopover'
  });

  const {
    action,
    anchorEl,
    anchorOrigin = {
      vertical: 'top',
      horizontal: 'left'
    },
    anchorPosition,
    anchorReference = 'anchorEl',
    children,
    className,
    container: containerProp,
    elevation = 8,
    marginThreshold = 16,
    open,
    PaperProps = {},
    transformOrigin = {
      vertical: 'top',
      horizontal: 'left'
    },
    TransitionComponent = x,
    transitionDuration: transitionDurationProp = 'auto',
    TransitionProps: {
      onEntering
    } = {}
  } = props,
        TransitionProps = _objectWithoutPropertiesLoose(props.TransitionProps, _excluded$k),
        other = _objectWithoutPropertiesLoose(props, _excluded2$2);

  const paperRef = e__default.useRef();
  const handlePaperRef = useForkRef(paperRef, PaperProps.ref);

  const ownerState = _extends({}, props, {
    anchorOrigin,
    anchorReference,
    elevation,
    marginThreshold,
    PaperProps,
    transformOrigin,
    TransitionComponent,
    transitionDuration: transitionDurationProp,
    TransitionProps
  });

  const classes = useUtilityClasses$i(ownerState); // Returns the top/left offset of the position
  // to attach to on the anchor element (or body if none is provided)

  const getAnchorOffset = e__default.useCallback(() => {
    if (anchorReference === 'anchorPosition') {

      return anchorPosition;
    }

    const resolvedAnchorEl = resolveAnchorEl(anchorEl); // If an anchor element wasn't provided, just use the parent body element of this Popover

    const anchorElement = resolvedAnchorEl && resolvedAnchorEl.nodeType === 1 ? resolvedAnchorEl : ownerDocument(paperRef.current).body;
    const anchorRect = anchorElement.getBoundingClientRect();

    return {
      top: anchorRect.top + getOffsetTop(anchorRect, anchorOrigin.vertical),
      left: anchorRect.left + getOffsetLeft(anchorRect, anchorOrigin.horizontal)
    };
  }, [anchorEl, anchorOrigin.horizontal, anchorOrigin.vertical, anchorPosition, anchorReference]); // Returns the base transform origin using the element

  const getTransformOrigin = e__default.useCallback(elemRect => {
    return {
      vertical: getOffsetTop(elemRect, transformOrigin.vertical),
      horizontal: getOffsetLeft(elemRect, transformOrigin.horizontal)
    };
  }, [transformOrigin.horizontal, transformOrigin.vertical]);
  const getPositioningStyle = e__default.useCallback(element => {
    const elemRect = {
      width: element.offsetWidth,
      height: element.offsetHeight
    }; // Get the transform origin point on the element itself

    const elemTransformOrigin = getTransformOrigin(elemRect);

    if (anchorReference === 'none') {
      return {
        top: null,
        left: null,
        transformOrigin: getTransformOriginValue(elemTransformOrigin)
      };
    } // Get the offset of the anchoring element


    const anchorOffset = getAnchorOffset(); // Calculate element positioning

    let top = anchorOffset.top - elemTransformOrigin.vertical;
    let left = anchorOffset.left - elemTransformOrigin.horizontal;
    const bottom = top + elemRect.height;
    const right = left + elemRect.width; // Use the parent window of the anchorEl if provided

    const containerWindow = ownerWindow(resolveAnchorEl(anchorEl)); // Window thresholds taking required margin into account

    const heightThreshold = containerWindow.innerHeight - marginThreshold;
    const widthThreshold = containerWindow.innerWidth - marginThreshold; // Check if the vertical axis needs shifting

    if (top < marginThreshold) {
      const diff = top - marginThreshold;
      top -= diff;
      elemTransformOrigin.vertical += diff;
    } else if (bottom > heightThreshold) {
      const diff = bottom - heightThreshold;
      top -= diff;
      elemTransformOrigin.vertical += diff;
    }


    if (left < marginThreshold) {
      const diff = left - marginThreshold;
      left -= diff;
      elemTransformOrigin.horizontal += diff;
    } else if (right > widthThreshold) {
      const diff = right - widthThreshold;
      left -= diff;
      elemTransformOrigin.horizontal += diff;
    }

    return {
      top: `${Math.round(top)}px`,
      left: `${Math.round(left)}px`,
      transformOrigin: getTransformOriginValue(elemTransformOrigin)
    };
  }, [anchorEl, anchorReference, getAnchorOffset, getTransformOrigin, marginThreshold]);
  const setPositioningStyles = e__default.useCallback(() => {
    const element = paperRef.current;

    if (!element) {
      return;
    }

    const positioning = getPositioningStyle(element);

    if (positioning.top !== null) {
      element.style.top = positioning.top;
    }

    if (positioning.left !== null) {
      element.style.left = positioning.left;
    }

    element.style.transformOrigin = positioning.transformOrigin;
  }, [getPositioningStyle]);

  const handleEntering = (element, isAppearing) => {
    if (onEntering) {
      onEntering(element, isAppearing);
    }

    setPositioningStyles();
  };

  e__default.useEffect(() => {
    if (open) {
      setPositioningStyles();
    }
  });
  e__default.useImperativeHandle(action, () => open ? {
    updatePosition: () => {
      setPositioningStyles();
    }
  } : null, [open, setPositioningStyles]);
  e__default.useEffect(() => {
    if (!open) {
      return undefined;
    }

    const handleResize = debounce$1(() => {
      setPositioningStyles();
    });
    const containerWindow = ownerWindow(anchorEl);
    containerWindow.addEventListener('resize', handleResize);
    return () => {
      handleResize.clear();
      containerWindow.removeEventListener('resize', handleResize);
    };
  }, [anchorEl, open, setPositioningStyles]);
  let transitionDuration = transitionDurationProp;

  if (transitionDurationProp === 'auto' && !TransitionComponent.muiSupportAuto) {
    transitionDuration = undefined;
  } // If the container prop is provided, use that
  // If the anchorEl prop is provided, use its parent body element as the container
  // If neither are provided let the Modal take care of choosing the container


  const container = containerProp || (anchorEl ? ownerDocument(resolveAnchorEl(anchorEl)).body : undefined);
  return /*#__PURE__*/jsxRuntime.jsx(PopoverRoot, _extends({
    BackdropProps: {
      invisible: true
    },
    className: l$2(classes.root, className),
    container: container,
    open: open,
    ref: ref,
    ownerState: ownerState
  }, other, {
    children: /*#__PURE__*/jsxRuntime.jsx(TransitionComponent, _extends({
      appear: true,
      in: open,
      onEntering: handleEntering,
      timeout: transitionDuration
    }, TransitionProps, {
      children: /*#__PURE__*/jsxRuntime.jsx(PopoverPaper, _extends({
        elevation: elevation
      }, PaperProps, {
        ref: handlePaperRef,
        className: l$2(classes.paper, PaperProps.className),
        children: children
      }))
    }))
  }));
});
var Popover$1 = Popover;

function getMenuUtilityClass(slot) {
  return generateUtilityClass('MuiMenu', slot);
}
generateUtilityClasses('MuiMenu', ['root', 'paper', 'list']);

const _excluded$j = ["onEntering"],
      _excluded2$1 = ["autoFocus", "children", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant"];
const RTL_ORIGIN = {
  vertical: 'top',
  horizontal: 'right'
};
const LTR_ORIGIN = {
  vertical: 'top',
  horizontal: 'left'
};

const useUtilityClasses$h = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root'],
    paper: ['paper'],
    list: ['list']
  };
  return composeClasses(slots, getMenuUtilityClass, classes);
};

const MenuRoot = styled$1(Popover$1, {
  shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === 'classes',
  name: 'MuiMenu',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({});
const MenuPaper = styled$1(k, {
  name: 'MuiMenu',
  slot: 'Paper',
  overridesResolver: (props, styles) => styles.paper
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tapable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: 'calc(100% - 96px)',
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: 'touch'
});
const MenuMenuList = styled$1(j, {
  name: 'MuiMenu',
  slot: 'List',
  overridesResolver: (props, styles) => styles.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
});
const Menu = /*#__PURE__*/e__default.forwardRef(function Menu(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiMenu'
  });

  const {
    autoFocus = true,
    children,
    disableAutoFocusItem = false,
    MenuListProps = {},
    onClose,
    open,
    PaperProps = {},
    PopoverClasses,
    transitionDuration = 'auto',
    TransitionProps: {
      onEntering
    } = {},
    variant = 'selectedMenu'
  } = props,
        TransitionProps = _objectWithoutPropertiesLoose(props.TransitionProps, _excluded$j),
        other = _objectWithoutPropertiesLoose(props, _excluded2$1);

  const theme = useTheme();
  const isRtl = theme.direction === 'rtl';

  const ownerState = _extends({}, props, {
    autoFocus,
    disableAutoFocusItem,
    MenuListProps,
    onEntering,
    PaperProps,
    transitionDuration,
    TransitionProps,
    variant
  });

  const classes = useUtilityClasses$h(ownerState);
  const autoFocusItem = autoFocus && !disableAutoFocusItem && open;
  const menuListActionsRef = e__default.useRef(null);

  const handleEntering = (element, isAppearing) => {
    if (menuListActionsRef.current) {
      menuListActionsRef.current.adjustStyleForScrollbar(element, theme);
    }

    if (onEntering) {
      onEntering(element, isAppearing);
    }
  };

  const handleListKeyDown = event => {
    if (event.key === 'Tab') {
      event.preventDefault();

      if (onClose) {
        onClose(event, 'tabKeyDown');
      }
    }
  };
  /**
   * the index of the item should receive focus
   * in a `variant="selectedMenu"` it's the first `selected` item
   * otherwise it's the very first item.
   */


  let activeItemIndex = -1; // since we inject focus related props into children we have to do a lookahead
  // to check if there is a `selected` item. We're looking for the last `selected`
  // item and use the first valid item as a fallback

  e__default.Children.map(children, (child, index) => {
    if (! /*#__PURE__*/e__default.isValidElement(child)) {
      return;
    }

    if (!child.props.disabled) {
      if (variant === 'selectedMenu' && child.props.selected) {
        activeItemIndex = index;
      } else if (activeItemIndex === -1) {
        activeItemIndex = index;
      }
    }
  });
  return /*#__PURE__*/jsxRuntime.jsx(MenuRoot, _extends({
    classes: PopoverClasses,
    onClose: onClose,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: isRtl ? 'right' : 'left'
    },
    transformOrigin: isRtl ? RTL_ORIGIN : LTR_ORIGIN,
    PaperProps: _extends({
      component: MenuPaper
    }, PaperProps, {
      classes: _extends({}, PaperProps.classes, {
        root: classes.paper
      })
    }),
    className: classes.root,
    open: open,
    ref: ref,
    transitionDuration: transitionDuration,
    TransitionProps: _extends({
      onEntering: handleEntering
    }, TransitionProps),
    ownerState: ownerState
  }, other, {
    children: /*#__PURE__*/jsxRuntime.jsx(MenuMenuList, _extends({
      onKeyDown: handleListKeyDown,
      actions: menuListActionsRef,
      autoFocus: autoFocus && (activeItemIndex === -1 || disableAutoFocusItem),
      autoFocusItem: autoFocusItem,
      variant: variant
    }, MenuListProps, {
      className: l$2(classes.list, MenuListProps.className),
      children: children
    }))
  }));
});
var Menu$1 = Menu;

function getNativeSelectUtilityClasses(slot) {
  return generateUtilityClass('MuiNativeSelect', slot);
}
const nativeSelectClasses = generateUtilityClasses('MuiNativeSelect', ['root', 'select', 'filled', 'outlined', 'standard', 'disabled', 'icon', 'iconOpen', 'iconFilled', 'iconOutlined', 'iconStandard', 'nativeInput']);

const _excluded$i = ["className", "disabled", "IconComponent", "inputRef", "variant"];

const useUtilityClasses$g = ownerState => {
  const {
    classes,
    variant,
    disabled,
    open
  } = ownerState;
  const slots = {
    select: ['select', variant, disabled && 'disabled'],
    icon: ['icon', `icon${capitalize(variant)}`, open && 'iconOpen', disabled && 'disabled']
  };
  return composeClasses(slots, getNativeSelectUtilityClasses, classes);
};

const nativeSelectSelectStyles = ({
  ownerState,
  theme
}) => _extends({
  MozAppearance: 'none',
  // Reset
  WebkitAppearance: 'none',
  // Reset
  // When interacting quickly, the text can end up selected.
  // Native select can't be selected either.
  userSelect: 'none',
  borderRadius: 0,
  // Reset
  cursor: 'pointer',
  '&:focus': {
    // Show that it's not an text input
    backgroundColor: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)',
    borderRadius: 0 // Reset Chrome style

  },
  // Remove IE11 arrow
  '&::-ms-expand': {
    display: 'none'
  },
  [`&.${nativeSelectClasses.disabled}`]: {
    cursor: 'default'
  },
  '&[multiple]': {
    height: 'auto'
  },
  '&:not([multiple]) option, &:not([multiple]) optgroup': {
    backgroundColor: theme.palette.background.paper
  },
  // Bump specificity to allow extending custom inputs
  '&&&': {
    paddingRight: 24,
    minWidth: 16 // So it doesn't collapse.

  }
}, ownerState.variant === 'filled' && {
  '&&&': {
    paddingRight: 32
  }
}, ownerState.variant === 'outlined' && {
  borderRadius: theme.shape.borderRadius,
  '&:focus': {
    borderRadius: theme.shape.borderRadius // Reset the reset for Chrome style

  },
  '&&&': {
    paddingRight: 32
  }
});
const NativeSelectSelect = styled$1('select', {
  name: 'MuiNativeSelect',
  slot: 'Select',
  shouldForwardProp: rootShouldForwardProp,
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.select, styles[ownerState.variant]];
  }
})(nativeSelectSelectStyles);
const nativeSelectIconStyles = ({
  ownerState,
  theme
}) => _extends({
  // We use a position absolute over a flexbox in order to forward the pointer events
  // to the input and to support wrapping tags..
  position: 'absolute',
  right: 0,
  top: 'calc(50% - .5em)',
  // Center vertically, height is 1em
  pointerEvents: 'none',
  // Don't block pointer events on the select under the icon.
  color: theme.palette.action.active,
  [`&.${nativeSelectClasses.disabled}`]: {
    color: theme.palette.action.disabled
  }
}, ownerState.open && {
  transform: 'rotate(180deg)'
}, ownerState.variant === 'filled' && {
  right: 7
}, ownerState.variant === 'outlined' && {
  right: 7
});
const NativeSelectIcon = styled$1('svg', {
  name: 'MuiNativeSelect',
  slot: 'Icon',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.icon, ownerState.variant && styles[`icon${capitalize(ownerState.variant)}`], ownerState.open && styles.iconOpen];
  }
})(nativeSelectIconStyles);
/**
 * @ignore - internal component.
 */

const NativeSelectInput = /*#__PURE__*/e__default.forwardRef(function NativeSelectInput(props, ref) {
  const {
    className,
    disabled,
    IconComponent,
    inputRef,
    variant = 'standard'
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$i);

  const ownerState = _extends({}, props, {
    disabled,
    variant
  });

  const classes = useUtilityClasses$g(ownerState);
  return /*#__PURE__*/jsxRuntime.jsxs(e__default.Fragment, {
    children: [/*#__PURE__*/jsxRuntime.jsx(NativeSelectSelect, _extends({
      ownerState: ownerState,
      className: l$2(classes.select, className),
      disabled: disabled,
      ref: inputRef || ref
    }, other)), props.multiple ? null : /*#__PURE__*/jsxRuntime.jsx(NativeSelectIcon, {
      as: IconComponent,
      ownerState: ownerState,
      className: classes.icon
    })]
  });
});
var NativeSelectInput$1 = NativeSelectInput;

function getSelectUtilityClasses(slot) {
  return generateUtilityClass('MuiSelect', slot);
}
const selectClasses = generateUtilityClasses('MuiSelect', ['root', 'select', 'filled', 'outlined', 'standard', 'disabled', 'focused', 'icon', 'iconOpen', 'iconFilled', 'iconOutlined', 'iconStandard', 'nativeInput']);

const _excluded$h = ["aria-describedby", "aria-label", "autoFocus", "autoWidth", "children", "className", "defaultValue", "disabled", "displayEmpty", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"];
const SelectSelect = styled$1('div', {
  name: 'MuiSelect',
  slot: 'Select',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [// Win specificity over the input base
    {
      [`&.${selectClasses.select}`]: styles.select
    }, {
      [`&.${selectClasses.select}`]: styles[ownerState.variant]
    }];
  }
})(nativeSelectSelectStyles, {
  // Win specificity over the input base
  [`&.${selectClasses.select}`]: {
    height: 'auto',
    // Resets for multiple select with chips
    minHeight: '1.4375em',
    // Required for select\text-field height consistency
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
  }
});
const SelectIcon = styled$1('svg', {
  name: 'MuiSelect',
  slot: 'Icon',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.icon, ownerState.variant && styles[`icon${capitalize(ownerState.variant)}`], ownerState.open && styles.iconOpen];
  }
})(nativeSelectIconStyles);
const SelectNativeInput = styled$1('input', {
  shouldForwardProp: prop => slotShouldForwardProp(prop) && prop !== 'classes',
  name: 'MuiSelect',
  slot: 'NativeInput',
  overridesResolver: (props, styles) => styles.nativeInput
})({
  bottom: 0,
  left: 0,
  position: 'absolute',
  opacity: 0,
  pointerEvents: 'none',
  width: '100%',
  boxSizing: 'border-box'
});

function areEqualValues(a, b) {
  if (typeof b === 'object' && b !== null) {
    return a === b;
  } // The value could be a number, the DOM will stringify it anyway.


  return String(a) === String(b);
}

function isEmpty(display) {
  return display == null || typeof display === 'string' && !display.trim();
}

const useUtilityClasses$f = ownerState => {
  const {
    classes,
    variant,
    disabled,
    open
  } = ownerState;
  const slots = {
    select: ['select', variant, disabled && 'disabled'],
    icon: ['icon', `icon${capitalize(variant)}`, open && 'iconOpen', disabled && 'disabled'],
    nativeInput: ['nativeInput']
  };
  return composeClasses(slots, getSelectUtilityClasses, classes);
};
/**
 * @ignore - internal component.
 */


const SelectInput = /*#__PURE__*/e__default.forwardRef(function SelectInput(props, ref) {
  const {
    'aria-describedby': ariaDescribedby,
    'aria-label': ariaLabel,
    autoFocus,
    autoWidth,
    children,
    className,
    defaultValue,
    disabled,
    displayEmpty,
    IconComponent,
    inputRef: inputRefProp,
    labelId,
    MenuProps = {},
    multiple,
    name,
    onBlur,
    onChange,
    onClose,
    onFocus,
    onOpen,
    open: openProp,
    readOnly,
    renderValue,
    SelectDisplayProps = {},
    tabIndex: tabIndexProp,
    value: valueProp,
    variant = 'standard'
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$h);

  const [value, setValueState] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: 'Select'
  });
  const inputRef = e__default.useRef(null);
  const displayRef = e__default.useRef(null);
  const [displayNode, setDisplayNode] = e__default.useState(null);
  const {
    current: isOpenControlled
  } = e__default.useRef(openProp != null);
  const [menuMinWidthState, setMenuMinWidthState] = e__default.useState();
  const [openState, setOpenState] = e__default.useState(false);
  const handleRef = useForkRef(ref, inputRefProp);
  const handleDisplayRef = e__default.useCallback(node => {
    displayRef.current = node;

    if (node) {
      setDisplayNode(node);
    }
  }, []);
  e__default.useImperativeHandle(handleRef, () => ({
    focus: () => {
      displayRef.current.focus();
    },
    node: inputRef.current,
    value
  }), [value]);
  e__default.useEffect(() => {
    if (autoFocus) {
      displayRef.current.focus();
    }
  }, [autoFocus]);
  e__default.useEffect(() => {
    const label = ownerDocument(displayRef.current).getElementById(labelId);

    if (label) {
      const handler = () => {
        if (getSelection().isCollapsed) {
          displayRef.current.focus();
        }
      };

      label.addEventListener('click', handler);
      return () => {
        label.removeEventListener('click', handler);
      };
    }

    return undefined;
  }, [labelId]);

  const update = (open, event) => {
    if (open) {
      if (onOpen) {
        onOpen(event);
      }
    } else if (onClose) {
      onClose(event);
    }

    if (!isOpenControlled) {
      setMenuMinWidthState(autoWidth ? null : displayNode.clientWidth);
      setOpenState(open);
    }
  };

  const handleMouseDown = event => {
    // Ignore everything but left-click
    if (event.button !== 0) {
      return;
    } // Hijack the default focus behavior.


    event.preventDefault();
    displayRef.current.focus();
    update(true, event);
  };

  const handleClose = event => {
    update(false, event);
  };

  const childrenArray = e__default.Children.toArray(children); // Support autofill.

  const handleChange = event => {
    const index = childrenArray.map(child => child.props.value).indexOf(event.target.value);

    if (index === -1) {
      return;
    }

    const child = childrenArray[index];
    setValueState(child.props.value);

    if (onChange) {
      onChange(event, child);
    }
  };

  const handleItemClick = child => event => {
    let newValue; // We use the tabindex attribute to signal the available options.

    if (!event.currentTarget.hasAttribute('tabindex')) {
      return;
    }

    if (multiple) {
      newValue = Array.isArray(value) ? value.slice() : [];
      const itemIndex = value.indexOf(child.props.value);

      if (itemIndex === -1) {
        newValue.push(child.props.value);
      } else {
        newValue.splice(itemIndex, 1);
      }
    } else {
      newValue = child.props.value;
    }

    if (child.props.onClick) {
      child.props.onClick(event);
    }

    if (value !== newValue) {
      setValueState(newValue);

      if (onChange) {
        // Redefine target to allow name and value to be read.
        // This allows seamless integration with the most popular form libraries.
        // https://github.com/mui-org/material-ui/issues/13485#issuecomment-676048492
        // Clone the event to not override `target` of the original event.
        const nativeEvent = event.nativeEvent || event;
        const clonedEvent = new nativeEvent.constructor(nativeEvent.type, nativeEvent);
        Object.defineProperty(clonedEvent, 'target', {
          writable: true,
          value: {
            value: newValue,
            name
          }
        });
        onChange(clonedEvent, child);
      }
    }

    if (!multiple) {
      update(false, event);
    }
  };

  const handleKeyDown = event => {
    if (!readOnly) {
      const validKeys = [' ', 'ArrowUp', 'ArrowDown', // The native select doesn't respond to enter on MacOS, but it's recommended by
      // https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox-collapsible.html
      'Enter'];

      if (validKeys.indexOf(event.key) !== -1) {
        event.preventDefault();
        update(true, event);
      }
    }
  };

  const open = displayNode !== null && (isOpenControlled ? openProp : openState);

  const handleBlur = event => {
    // if open event.stopImmediatePropagation
    if (!open && onBlur) {
      // Preact support, target is read only property on a native event.
      Object.defineProperty(event, 'target', {
        writable: true,
        value: {
          value,
          name
        }
      });
      onBlur(event);
    }
  };

  delete other['aria-invalid'];
  let display;
  let displaySingle;
  const displayMultiple = [];
  let computeDisplay = false;

  if (isFilled({
    value
  }) || displayEmpty) {
    if (renderValue) {
      display = renderValue(value);
    } else {
      computeDisplay = true;
    }
  }

  const items = childrenArray.map(child => {
    if (! /*#__PURE__*/e__default.isValidElement(child)) {
      return null;
    }

    let selected;

    if (multiple) {
      if (!Array.isArray(value)) {
        throw new Error(formatMuiErrorMessage(2));
      }

      selected = value.some(v => areEqualValues(v, child.props.value));

      if (selected && computeDisplay) {
        displayMultiple.push(child.props.children);
      }
    } else {
      selected = areEqualValues(value, child.props.value);

      if (selected && computeDisplay) {
        displaySingle = child.props.children;
      }
    }

    return /*#__PURE__*/e__default.cloneElement(child, {
      'aria-selected': selected ? 'true' : undefined,
      onClick: handleItemClick(child),
      onKeyUp: event => {
        if (event.key === ' ') {
          // otherwise our MenuItems dispatches a click event
          // it's not behavior of the native <option> and causes
          // the select to close immediately since we open on space keydown
          event.preventDefault();
        }

        if (child.props.onKeyUp) {
          child.props.onKeyUp(event);
        }
      },
      role: 'option',
      selected,
      value: undefined,
      // The value is most likely not a valid HTML attribute.
      'data-value': child.props.value // Instead, we provide it as a data attribute.

    });
  });

  if (computeDisplay) {
    display = multiple ? displayMultiple.join(', ') : displaySingle;
  } // Avoid performing a layout computation in the render method.


  let menuMinWidth = menuMinWidthState;

  if (!autoWidth && isOpenControlled && displayNode) {
    menuMinWidth = displayNode.clientWidth;
  }

  let tabIndex;

  if (typeof tabIndexProp !== 'undefined') {
    tabIndex = tabIndexProp;
  } else {
    tabIndex = disabled ? null : 0;
  }

  const buttonId = SelectDisplayProps.id || (name ? `mui-component-select-${name}` : undefined);

  const ownerState = _extends({}, props, {
    variant,
    value,
    open
  });

  const classes = useUtilityClasses$f(ownerState);
  return /*#__PURE__*/jsxRuntime.jsxs(e__default.Fragment, {
    children: [/*#__PURE__*/jsxRuntime.jsx(SelectSelect, _extends({
      ref: handleDisplayRef,
      tabIndex: tabIndex,
      role: "button",
      "aria-disabled": disabled ? 'true' : undefined,
      "aria-expanded": open ? 'true' : 'false',
      "aria-haspopup": "listbox",
      "aria-label": ariaLabel,
      "aria-labelledby": [labelId, buttonId].filter(Boolean).join(' ') || undefined,
      "aria-describedby": ariaDescribedby,
      onKeyDown: handleKeyDown,
      onMouseDown: disabled || readOnly ? null : handleMouseDown,
      onBlur: handleBlur,
      onFocus: onFocus
    }, SelectDisplayProps, {
      ownerState: ownerState,
      className: l$2(classes.select, className, SelectDisplayProps.className) // The id is required for proper a11y
      ,
      id: buttonId,
      children: isEmpty(display) ?
      /*#__PURE__*/
      // notranslate needed while Google Translate will not fix zero-width space issue
      // eslint-disable-next-line react/no-danger
      jsxRuntime.jsx("span", {
        className: "notranslate",
        dangerouslySetInnerHTML: {
          __html: '&#8203;'
        }
      }) : display
    })), /*#__PURE__*/jsxRuntime.jsx(SelectNativeInput, _extends({
      value: Array.isArray(value) ? value.join(',') : value,
      name: name,
      ref: inputRef,
      "aria-hidden": true,
      onChange: handleChange,
      tabIndex: -1,
      disabled: disabled,
      className: classes.nativeInput,
      autoFocus: autoFocus,
      ownerState: ownerState
    }, other)), /*#__PURE__*/jsxRuntime.jsx(SelectIcon, {
      as: IconComponent,
      className: classes.icon,
      ownerState: ownerState
    }), /*#__PURE__*/jsxRuntime.jsx(Menu$1, _extends({
      id: `menu-${name || ''}`,
      anchorEl: displayNode,
      open: open,
      onClose: handleClose,
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center'
      },
      transformOrigin: {
        vertical: 'top',
        horizontal: 'center'
      }
    }, MenuProps, {
      MenuListProps: _extends({
        'aria-labelledby': labelId,
        role: 'listbox',
        disableListWrap: true
      }, MenuProps.MenuListProps),
      PaperProps: _extends({}, MenuProps.PaperProps, {
        style: _extends({
          minWidth: menuMinWidth
        }, MenuProps.PaperProps != null ? MenuProps.PaperProps.style : null)
      }),
      children: items
    }))]
  });
});
var SelectInput$1 = SelectInput;

function getSvgIconUtilityClass(slot) {
  return generateUtilityClass('MuiSvgIcon', slot);
}
generateUtilityClasses('MuiSvgIcon', ['root', 'colorPrimary', 'colorSecondary', 'colorAction', 'colorError', 'colorDisabled', 'fontSizeInherit', 'fontSizeSmall', 'fontSizeMedium', 'fontSizeLarge']);

const _excluded$g = ["children", "className", "color", "component", "fontSize", "htmlColor", "titleAccess", "viewBox"];

const useUtilityClasses$e = ownerState => {
  const {
    color,
    fontSize,
    classes
  } = ownerState;
  const slots = {
    root: ['root', color !== 'inherit' && `color${capitalize(color)}`, `fontSize${capitalize(fontSize)}`]
  };
  return composeClasses(slots, getSvgIconUtilityClass, classes);
};

const SvgIconRoot = styled$1('svg', {
  name: 'MuiSvgIcon',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.color !== 'inherit' && styles[`color${capitalize(ownerState.color)}`], styles[`fontSize${capitalize(ownerState.fontSize)}`]];
  }
})(({
  theme,
  ownerState
}) => {
  var _theme$palette$ownerS, _theme$palette$ownerS2;

  return {
    userSelect: 'none',
    width: '1em',
    height: '1em',
    display: 'inline-block',
    fill: 'currentColor',
    flexShrink: 0,
    transition: theme.transitions.create('fill', {
      duration: theme.transitions.duration.shorter
    }),
    fontSize: {
      inherit: 'inherit',
      small: theme.typography.pxToRem(20),
      medium: theme.typography.pxToRem(24),
      large: theme.typography.pxToRem(35)
    }[ownerState.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (_theme$palette$ownerS = (_theme$palette$ownerS2 = theme.palette[ownerState.color]) == null ? void 0 : _theme$palette$ownerS2.main) != null ? _theme$palette$ownerS : {
      action: theme.palette.action.active,
      disabled: theme.palette.action.disabled,
      inherit: undefined
    }[ownerState.color]
  };
});
const SvgIcon = /*#__PURE__*/e__default.forwardRef(function SvgIcon(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiSvgIcon'
  });

  const {
    children,
    className,
    color = 'inherit',
    component = 'svg',
    fontSize = 'medium',
    htmlColor,
    titleAccess,
    viewBox = '0 0 24 24'
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$g);

  const ownerState = _extends({}, props, {
    color,
    component,
    fontSize,
    viewBox
  });

  const classes = useUtilityClasses$e(ownerState);
  return /*#__PURE__*/jsxRuntime.jsxs(SvgIconRoot, _extends({
    as: component,
    className: l$2(classes.root, className),
    ownerState: ownerState,
    focusable: "false",
    viewBox: viewBox,
    color: htmlColor,
    "aria-hidden": titleAccess ? undefined : true,
    role: titleAccess ? 'img' : undefined,
    ref: ref
  }, other, {
    children: [children, titleAccess ? /*#__PURE__*/jsxRuntime.jsx("title", {
      children: titleAccess
    }) : null]
  }));
});
SvgIcon.muiName = 'SvgIcon';
var SvgIcon$1 = SvgIcon;

function createSvgIcon(path, displayName) {
  const Component = (props, ref) => /*#__PURE__*/jsxRuntime.jsx(SvgIcon$1, _extends({
    "data-testid": `${displayName}Icon`,
    ref: ref
  }, props, {
    children: path
  }));

  Component.muiName = SvgIcon$1.muiName;
  return /*#__PURE__*/e__default.memo( /*#__PURE__*/e__default.forwardRef(Component));
}

var ArrowDropDownIcon = createSvgIcon( /*#__PURE__*/jsxRuntime.jsx("path", {
  d: "M7 10l5 5 5-5z"
}), 'ArrowDropDown');

var _Input, _FilledInput;

const _excluded$f = ["autoWidth", "children", "classes", "className", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"],
      _excluded2 = ["root"];

const useUtilityClasses$d = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return composeClasses(slots, getSelectUtilityClasses, classes);
};

const Select = /*#__PURE__*/e__default.forwardRef(function Select(inProps, ref) {
  const props = useThemeProps({
    name: 'MuiSelect',
    props: inProps
  });

  const {
    autoWidth = false,
    children,
    classes: classesProp = {},
    className,
    displayEmpty = false,
    IconComponent = ArrowDropDownIcon,
    id,
    input,
    inputProps,
    label,
    labelId,
    MenuProps,
    multiple = false,
    native = false,
    onClose,
    onOpen,
    open,
    renderValue,
    SelectDisplayProps,
    variant: variantProps = 'outlined'
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$f);

  const inputComponent = native ? NativeSelectInput$1 : SelectInput$1;
  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ['variant']
  });
  const variant = fcs.variant || variantProps;
  const InputComponent = input || {
    standard: _Input || (_Input = /*#__PURE__*/jsxRuntime.jsx(Input$1, {})),
    outlined: /*#__PURE__*/jsxRuntime.jsx(OutlinedInput$1, {
      label: label
    }),
    filled: _FilledInput || (_FilledInput = /*#__PURE__*/jsxRuntime.jsx(FilledInput$1, {}))
  }[variant];

  const ownerState = _extends({}, props, {
    classes: classesProp
  });

  const classes = useUtilityClasses$d(ownerState);

  const otherClasses = _objectWithoutPropertiesLoose(classesProp, _excluded2);

  const inputComponentRef = useForkRef(ref, InputComponent.ref);
  return /*#__PURE__*/e__default.cloneElement(InputComponent, _extends({
    // Most of the logic is implemented in `SelectInput`.
    // The `Select` component is a simple API wrapper to expose something better to play with.
    inputComponent,
    inputProps: _extends({
      children,
      IconComponent,
      variant,
      type: undefined,
      // We render a select. We can ignore the type provided by the `Input`.
      multiple
    }, native ? {
      id
    } : {
      autoWidth,
      displayEmpty,
      labelId,
      MenuProps,
      onClose,
      onOpen,
      open,
      renderValue,
      SelectDisplayProps: _extends({
        id
      }, SelectDisplayProps)
    }, inputProps, {
      classes: inputProps ? deepmerge(otherClasses, inputProps.classes) : otherClasses
    }, input ? input.props.inputProps : {})
  }, multiple && native && variant === 'outlined' ? {
    notched: true
  } : {}, {
    ref: inputComponentRef,
    className: l$2(classes.root, InputComponent.props.className, className)
  }, other));
});
Select.muiName = 'Select';
var F = Select;

function getTextFieldUtilityClass(slot) {
  return generateUtilityClass('MuiTextField', slot);
}
generateUtilityClasses('MuiTextField', ['root']);

const _excluded$e = ["autoComplete", "autoFocus", "children", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant"];
const variantComponent = {
  standard: Input$1,
  filled: FilledInput$1,
  outlined: OutlinedInput$1
};

const useUtilityClasses$c = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return composeClasses(slots, getTextFieldUtilityClass, classes);
};

const TextFieldRoot = styled$1(N, {
  name: 'MuiTextField',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({});
/**
 * The `TextField` is a convenience wrapper for the most common cases (80%).
 * It cannot be all things to all people, otherwise the API would grow out of control.
 *
 * ## Advanced Configuration
 *
 * It's important to understand that the text field is a simple abstraction
 * on top of the following components:
 *
 * - [FormControl](/api/form-control/)
 * - [InputLabel](/api/input-label/)
 * - [FilledInput](/api/filled-input/)
 * - [OutlinedInput](/api/outlined-input/)
 * - [Input](/api/input/)
 * - [FormHelperText](/api/form-helper-text/)
 *
 * If you wish to alter the props applied to the `input` element, you can do so as follows:
 *
 * ```jsx
 * const inputProps = {
 *   step: 300,
 * };
 *
 * return <TextField id="time" type="time" inputProps={inputProps} />;
 * ```
 *
 * For advanced cases, please look at the source of TextField by clicking on the
 * "Edit this page" button above. Consider either:
 *
 * - using the upper case props for passing values directly to the components
 * - using the underlying components directly as shown in the demos
 */

const TextField = /*#__PURE__*/e__default.forwardRef(function TextField(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiTextField'
  });

  const {
    autoComplete,
    autoFocus = false,
    children,
    className,
    color = 'primary',
    defaultValue,
    disabled = false,
    error = false,
    FormHelperTextProps,
    fullWidth = false,
    helperText,
    id,
    InputLabelProps,
    inputProps,
    InputProps,
    inputRef,
    label,
    maxRows,
    minRows,
    multiline = false,
    name,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    required = false,
    rows,
    select = false,
    SelectProps,
    type,
    value,
    variant = 'outlined'
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$e);

  const ownerState = _extends({}, props, {
    autoFocus,
    color,
    disabled,
    error,
    fullWidth,
    multiline,
    required,
    select,
    variant
  });

  const classes = useUtilityClasses$c(ownerState);

  const InputMore = {};

  if (variant === 'outlined') {
    if (InputLabelProps && typeof InputLabelProps.shrink !== 'undefined') {
      InputMore.notched = InputLabelProps.shrink;
    }

    if (label) {
      var _InputLabelProps$requ;

      const displayRequired = (_InputLabelProps$requ = InputLabelProps == null ? void 0 : InputLabelProps.required) != null ? _InputLabelProps$requ : required;
      InputMore.label = /*#__PURE__*/jsxRuntime.jsxs(e__default.Fragment, {
        children: [label, displayRequired && '\u00a0*']
      });
    }
  }

  if (select) {
    // unset defaults from textbox inputs
    if (!SelectProps || !SelectProps.native) {
      InputMore.id = undefined;
    }

    InputMore['aria-describedby'] = undefined;
  }

  const helperTextId = helperText && id ? `${id}-helper-text` : undefined;
  const inputLabelId = label && id ? `${id}-label` : undefined;
  const InputComponent = variantComponent[variant];

  const InputElement = /*#__PURE__*/jsxRuntime.jsx(InputComponent, _extends({
    "aria-describedby": helperTextId,
    autoComplete: autoComplete,
    autoFocus: autoFocus,
    defaultValue: defaultValue,
    fullWidth: fullWidth,
    multiline: multiline,
    name: name,
    rows: rows,
    maxRows: maxRows,
    minRows: minRows,
    type: type,
    value: value,
    id: id,
    inputRef: inputRef,
    onBlur: onBlur,
    onChange: onChange,
    onFocus: onFocus,
    placeholder: placeholder,
    inputProps: inputProps
  }, InputMore, InputProps));

  return /*#__PURE__*/jsxRuntime.jsxs(TextFieldRoot, _extends({
    className: l$2(classes.root, className),
    disabled: disabled,
    error: error,
    fullWidth: fullWidth,
    ref: ref,
    required: required,
    color: color,
    variant: variant,
    ownerState: ownerState
  }, other, {
    children: [label && /*#__PURE__*/jsxRuntime.jsx(_$1, _extends({
      htmlFor: id,
      id: inputLabelId
    }, InputLabelProps, {
      children: label
    })), select ? /*#__PURE__*/jsxRuntime.jsx(F, _extends({
      "aria-describedby": helperTextId,
      id: id,
      labelId: inputLabelId,
      value: value,
      input: InputElement
    }, SelectProps, {
      children: children
    })) : InputElement, helperText && /*#__PURE__*/jsxRuntime.jsx(FormHelperText$1, _extends({
      id: helperTextId
    }, FormHelperTextProps, {
      children: helperText
    }))]
  }));
});
var P = TextField;

function getSwitchBaseUtilityClass(slot) {
  return generateUtilityClass('PrivateSwitchBase', slot);
}
generateUtilityClasses('PrivateSwitchBase', ['root', 'checked', 'disabled', 'input', 'edgeStart', 'edgeEnd']);

const _excluded$d = ["autoFocus", "checked", "checkedIcon", "className", "defaultChecked", "disabled", "disableFocusRipple", "edge", "icon", "id", "inputProps", "inputRef", "name", "onBlur", "onChange", "onFocus", "readOnly", "required", "tabIndex", "type", "value"];

const useUtilityClasses$b = ownerState => {
  const {
    classes,
    checked,
    disabled,
    edge
  } = ownerState;
  const slots = {
    root: ['root', checked && 'checked', disabled && 'disabled', edge && `edge${capitalize(edge)}`],
    input: ['input']
  };
  return composeClasses(slots, getSwitchBaseUtilityClass, classes);
};

const SwitchBaseRoot = styled$1(ButtonBase$1, {
  skipSx: true
})(({
  ownerState
}) => _extends({
  padding: 9,
  borderRadius: '50%'
}, ownerState.edge === 'start' && {
  marginLeft: ownerState.size === 'small' ? -3 : -12
}, ownerState.edge === 'end' && {
  marginRight: ownerState.size === 'small' ? -3 : -12
}));
const SwitchBaseInput = styled$1('input', {
  skipSx: true
})({
  cursor: 'inherit',
  position: 'absolute',
  opacity: 0,
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  margin: 0,
  padding: 0,
  zIndex: 1
});
/**
 * @ignore - internal component.
 */

const SwitchBase = /*#__PURE__*/e__default.forwardRef(function SwitchBase(props, ref) {
  const {
    autoFocus,
    checked: checkedProp,
    checkedIcon,
    className,
    defaultChecked,
    disabled: disabledProp,
    disableFocusRipple = false,
    edge = false,
    icon,
    id,
    inputProps,
    inputRef,
    name,
    onBlur,
    onChange,
    onFocus,
    readOnly,
    required,
    tabIndex,
    type,
    value
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$d);

  const [checked, setCheckedState] = useControlled({
    controlled: checkedProp,
    default: Boolean(defaultChecked),
    name: 'SwitchBase',
    state: 'checked'
  });
  const muiFormControl = useFormControl();

  const handleFocus = event => {
    if (onFocus) {
      onFocus(event);
    }

    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    }
  };

  const handleBlur = event => {
    if (onBlur) {
      onBlur(event);
    }

    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    }
  };

  const handleInputChange = event => {
    // Workaround for https://github.com/facebook/react/issues/9023
    if (event.nativeEvent.defaultPrevented) {
      return;
    }

    const newChecked = event.target.checked;
    setCheckedState(newChecked);

    if (onChange) {
      // TODO v6: remove the second argument.
      onChange(event, newChecked);
    }
  };

  let disabled = disabledProp;

  if (muiFormControl) {
    if (typeof disabled === 'undefined') {
      disabled = muiFormControl.disabled;
    }
  }

  const hasLabelFor = type === 'checkbox' || type === 'radio';

  const ownerState = _extends({}, props, {
    checked,
    disabled,
    disableFocusRipple,
    edge
  });

  const classes = useUtilityClasses$b(ownerState);
  return /*#__PURE__*/jsxRuntime.jsxs(SwitchBaseRoot, _extends({
    component: "span",
    className: l$2(classes.root, className),
    centerRipple: true,
    focusRipple: !disableFocusRipple,
    disabled: disabled,
    tabIndex: null,
    role: undefined,
    onFocus: handleFocus,
    onBlur: handleBlur,
    ownerState: ownerState,
    ref: ref
  }, other, {
    children: [/*#__PURE__*/jsxRuntime.jsx(SwitchBaseInput, _extends({
      autoFocus: autoFocus,
      checked: checkedProp,
      defaultChecked: defaultChecked,
      className: classes.input,
      disabled: disabled,
      id: hasLabelFor && id,
      name: name,
      onChange: handleInputChange,
      readOnly: readOnly,
      ref: inputRef,
      required: required,
      ownerState: ownerState,
      tabIndex: tabIndex,
      type: type
    }, type === 'checkbox' && value === undefined ? {} : {
      value
    }, inputProps)), checked ? checkedIcon : icon]
  }));
}); // NB: If changed, please update Checkbox, Switch and Radio
var SwitchBase$1 = SwitchBase;

var CheckBoxOutlineBlankIcon = createSvgIcon( /*#__PURE__*/jsxRuntime.jsx("path", {
  d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
}), 'CheckBoxOutlineBlank');

var CheckBoxIcon = createSvgIcon( /*#__PURE__*/jsxRuntime.jsx("path", {
  d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}), 'CheckBox');

var IndeterminateCheckBoxIcon = createSvgIcon( /*#__PURE__*/jsxRuntime.jsx("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
}), 'IndeterminateCheckBox');

function getCheckboxUtilityClass(slot) {
  return generateUtilityClass('MuiCheckbox', slot);
}
const checkboxClasses = generateUtilityClasses('MuiCheckbox', ['root', 'checked', 'disabled', 'indeterminate', 'colorPrimary', 'colorSecondary']);
var checkboxClasses$1 = checkboxClasses;

const _excluded$c = ["checkedIcon", "color", "icon", "indeterminate", "indeterminateIcon", "inputProps", "size"];

const useUtilityClasses$a = ownerState => {
  const {
    classes,
    indeterminate,
    color
  } = ownerState;
  const slots = {
    root: ['root', indeterminate && 'indeterminate', `color${capitalize(color)}`]
  };
  const composedClasses = composeClasses(slots, getCheckboxUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};

const CheckboxRoot = styled$1(SwitchBase$1, {
  shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === 'classes',
  name: 'MuiCheckbox',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.indeterminate && styles.indeterminate, ownerState.color !== 'default' && styles[`color${capitalize(ownerState.color)}`]];
  }
})(({
  theme,
  ownerState
}) => _extends({
  color: theme.palette.text.secondary
}, !ownerState.disableRipple && {
  '&:hover': {
    backgroundColor: alpha(ownerState.color === 'default' ? theme.palette.action.active : theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: 'transparent'
    }
  }
}, ownerState.color !== 'default' && {
  [`&.${checkboxClasses$1.checked}, &.${checkboxClasses$1.indeterminate}`]: {
    color: theme.palette[ownerState.color].main
  },
  [`&.${checkboxClasses$1.disabled}`]: {
    color: theme.palette.action.disabled
  }
}));

const defaultCheckedIcon = /*#__PURE__*/jsxRuntime.jsx(CheckBoxIcon, {});

const defaultIcon = /*#__PURE__*/jsxRuntime.jsx(CheckBoxOutlineBlankIcon, {});

const defaultIndeterminateIcon = /*#__PURE__*/jsxRuntime.jsx(IndeterminateCheckBoxIcon, {});

const Checkbox = /*#__PURE__*/e__default.forwardRef(function Checkbox(inProps, ref) {
  var _icon$props$fontSize, _indeterminateIcon$pr;

  const props = useThemeProps({
    props: inProps,
    name: 'MuiCheckbox'
  });

  const {
    checkedIcon = defaultCheckedIcon,
    color = 'primary',
    icon: iconProp = defaultIcon,
    indeterminate = false,
    indeterminateIcon: indeterminateIconProp = defaultIndeterminateIcon,
    inputProps,
    size = 'medium'
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$c);

  const icon = indeterminate ? indeterminateIconProp : iconProp;
  const indeterminateIcon = indeterminate ? indeterminateIconProp : checkedIcon;

  const ownerState = _extends({}, props, {
    color,
    indeterminate,
    size
  });

  const classes = useUtilityClasses$a(ownerState);
  return /*#__PURE__*/jsxRuntime.jsx(CheckboxRoot, _extends({
    type: "checkbox",
    inputProps: _extends({
      'data-indeterminate': indeterminate
    }, inputProps),
    icon: /*#__PURE__*/e__default.cloneElement(icon, {
      fontSize: (_icon$props$fontSize = icon.props.fontSize) != null ? _icon$props$fontSize : size
    }),
    checkedIcon: /*#__PURE__*/e__default.cloneElement(indeterminateIcon, {
      fontSize: (_indeterminateIcon$pr = indeterminateIcon.props.fontSize) != null ? _indeterminateIcon$pr : size
    }),
    ownerState: ownerState,
    ref: ref
  }, other, {
    classes: classes
  }));
});
var L = Checkbox;

const dividerClasses = generateUtilityClasses('MuiDivider', ['root', 'absolute', 'fullWidth', 'inset', 'middle', 'flexItem', 'light', 'vertical', 'withChildren', 'withChildrenVertical', 'textAlignRight', 'textAlignLeft', 'wrapper', 'wrapperVertical']);
var dividerClasses$1 = dividerClasses;

function getListItemIconUtilityClass(slot) {
  return generateUtilityClass('MuiListItemIcon', slot);
}
const listItemIconClasses = generateUtilityClasses('MuiListItemIcon', ['root', 'alignItemsFlexStart']);
var listItemIconClasses$1 = listItemIconClasses;

const _excluded$b = ["className"];

const useUtilityClasses$9 = ownerState => {
  const {
    alignItems,
    classes
  } = ownerState;
  const slots = {
    root: ['root', alignItems === 'flex-start' && 'alignItemsFlexStart']
  };
  return composeClasses(slots, getListItemIconUtilityClass, classes);
};

const ListItemIconRoot = styled$1('div', {
  name: 'MuiListItemIcon',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.alignItems === 'flex-start' && styles.alignItemsFlexStart];
  }
})(({
  theme,
  ownerState
}) => _extends({
  minWidth: 56,
  color: theme.palette.action.active,
  flexShrink: 0,
  display: 'inline-flex'
}, ownerState.alignItems === 'flex-start' && {
  marginTop: 8
}));
/**
 * A simple wrapper to apply `List` styles to an `Icon` or `SvgIcon`.
 */

const ListItemIcon = /*#__PURE__*/e__default.forwardRef(function ListItemIcon(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiListItemIcon'
  });

  const {
    className
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$b);

  const context = e__default.useContext(ListContext$1);

  const ownerState = _extends({}, props, {
    alignItems: context.alignItems
  });

  const classes = useUtilityClasses$9(ownerState);
  return /*#__PURE__*/jsxRuntime.jsx(ListItemIconRoot, _extends({
    className: l$2(classes.root, className),
    ownerState: ownerState,
    ref: ref
  }, other));
});
var D = ListItemIcon;

function getTypographyUtilityClass(slot) {
  return generateUtilityClass('MuiTypography', slot);
}
generateUtilityClasses('MuiTypography', ['root', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'inherit', 'button', 'caption', 'overline', 'alignLeft', 'alignRight', 'alignCenter', 'alignJustify', 'noWrap', 'gutterBottom', 'paragraph']);

const _excluded$a = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"];

const useUtilityClasses$8 = ownerState => {
  const {
    align,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ['root', variant, ownerState.align !== 'inherit' && `align${capitalize(align)}`, gutterBottom && 'gutterBottom', noWrap && 'noWrap', paragraph && 'paragraph']
  };
  return composeClasses(slots, getTypographyUtilityClass, classes);
};

const TypographyRoot = styled$1('span', {
  name: 'MuiTypography',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.variant && styles[ownerState.variant], ownerState.align !== 'inherit' && styles[`align${capitalize(ownerState.align)}`], ownerState.noWrap && styles.noWrap, ownerState.gutterBottom && styles.gutterBottom, ownerState.paragraph && styles.paragraph];
  }
})(({
  theme,
  ownerState
}) => _extends({
  margin: 0
}, ownerState.variant && theme.typography[ownerState.variant], ownerState.align !== 'inherit' && {
  textAlign: ownerState.align
}, ownerState.noWrap && {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
}, ownerState.gutterBottom && {
  marginBottom: '0.35em'
}, ownerState.paragraph && {
  marginBottom: 16
}));
const defaultVariantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  inherit: 'p'
}; // TODO v6: deprecate these color values in v5.x and remove the transformation in v6

const colorTransformations = {
  primary: 'primary.main',
  textPrimary: 'text.primary',
  secondary: 'secondary.main',
  textSecondary: 'text.secondary',
  error: 'error.main'
};

const transformDeprecatedColors = color => {
  return colorTransformations[color] || color;
};

const Typography = /*#__PURE__*/e__default.forwardRef(function Typography(inProps, ref) {
  const themeProps = useThemeProps({
    props: inProps,
    name: 'MuiTypography'
  });
  const color = transformDeprecatedColors(themeProps.color);
  const props = extendSxProp(_extends({}, themeProps, {
    color
  }));

  const {
    align = 'inherit',
    className,
    component,
    gutterBottom = false,
    noWrap = false,
    paragraph = false,
    variant = 'body1',
    variantMapping = defaultVariantMapping
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$a);

  const ownerState = _extends({}, props, {
    align,
    color,
    className,
    component,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    variantMapping
  });

  const Component = component || (paragraph ? 'p' : variantMapping[variant] || defaultVariantMapping[variant]) || 'span';
  const classes = useUtilityClasses$8(ownerState);
  return /*#__PURE__*/jsxRuntime.jsx(TypographyRoot, _extends({
    as: Component,
    ref: ref,
    ownerState: ownerState,
    className: l$2(classes.root, className)
  }, other));
});
var Typography$1 = Typography;

const listItemTextClasses = generateUtilityClasses('MuiListItemText', ['root', 'multiline', 'dense', 'inset', 'primary', 'secondary']);
var listItemTextClasses$1 = listItemTextClasses;

function getMenuItemUtilityClass(slot) {
  return generateUtilityClass('MuiMenuItem', slot);
}
const menuItemClasses = generateUtilityClasses('MuiMenuItem', ['root', 'focusVisible', 'dense', 'disabled', 'divider', 'gutters', 'selected']);
var menuItemClasses$1 = menuItemClasses;

const _excluded$9 = ["autoFocus", "component", "dense", "divider", "disableGutters", "focusVisibleClassName", "role", "tabIndex"];
const overridesResolver = (props, styles) => {
  const {
    ownerState
  } = props;
  return [styles.root, ownerState.dense && styles.dense, ownerState.divider && styles.divider, !ownerState.disableGutters && styles.gutters];
};

const useUtilityClasses$7 = ownerState => {
  const {
    disabled,
    dense,
    divider,
    disableGutters,
    selected,
    classes
  } = ownerState;
  const slots = {
    root: ['root', dense && 'dense', disabled && 'disabled', !disableGutters && 'gutters', divider && 'divider', selected && 'selected']
  };
  const composedClasses = composeClasses(slots, getMenuItemUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};

const MenuItemRoot = styled$1(ButtonBase$1, {
  shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === 'classes',
  name: 'MuiMenuItem',
  slot: 'Root',
  overridesResolver
})(({
  theme,
  ownerState
}) => _extends({}, theme.typography.body1, {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  position: 'relative',
  textDecoration: 'none',
  minHeight: 48,
  paddingTop: 6,
  paddingBottom: 6,
  boxSizing: 'border-box',
  whiteSpace: 'nowrap'
}, !ownerState.disableGutters && {
  paddingLeft: 16,
  paddingRight: 16
}, ownerState.divider && {
  borderBottom: `1px solid ${theme.palette.divider}`,
  backgroundClip: 'padding-box'
}, {
  '&:hover': {
    textDecoration: 'none',
    backgroundColor: theme.palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: 'transparent'
    }
  },
  [`&.${menuItemClasses$1.selected}`]: {
    backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    [`&.${menuItemClasses$1.focusVisible}`]: {
      backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
    }
  },
  [`&.${menuItemClasses$1.selected}:hover`]: {
    backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity)
    }
  },
  [`&.${menuItemClasses$1.focusVisible}`]: {
    backgroundColor: theme.palette.action.focus
  },
  [`&.${menuItemClasses$1.disabled}`]: {
    opacity: theme.palette.action.disabledOpacity
  },
  [`& + .${dividerClasses$1.root}`]: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  [`& + .${dividerClasses$1.inset}`]: {
    marginLeft: 52
  },
  [`& .${listItemTextClasses$1.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${listItemTextClasses$1.inset}`]: {
    paddingLeft: 36
  },
  [`& .${listItemIconClasses$1.root}`]: {
    minWidth: 36
  }
}, !ownerState.dense && {
  [theme.breakpoints.up('sm')]: {
    minHeight: 'auto'
  }
}, ownerState.dense && _extends({
  minHeight: 36
}, theme.typography.body2, {
  [`& .${listItemIconClasses$1.root} svg`]: {
    fontSize: '1.25rem'
  }
})));
const MenuItem = /*#__PURE__*/e__default.forwardRef(function MenuItem(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiMenuItem'
  });

  const {
    autoFocus = false,
    component = 'li',
    dense = false,
    divider = false,
    disableGutters = false,
    focusVisibleClassName,
    role = 'menuitem',
    tabIndex: tabIndexProp
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$9);

  const context = e__default.useContext(ListContext$1);
  const childContext = {
    dense: dense || context.dense || false,
    disableGutters
  };
  const menuItemRef = e__default.useRef(null);
  useEnhancedEffect$1(() => {
    if (autoFocus) {
      if (menuItemRef.current) {
        menuItemRef.current.focus();
      }
    }
  }, [autoFocus]);

  const ownerState = _extends({}, props, {
    dense: childContext.dense,
    divider,
    disableGutters
  });

  const classes = useUtilityClasses$7(props);
  const handleRef = useForkRef(menuItemRef, ref);
  let tabIndex;

  if (!props.disabled) {
    tabIndex = tabIndexProp !== undefined ? tabIndexProp : -1;
  }

  return /*#__PURE__*/jsxRuntime.jsx(ListContext$1.Provider, {
    value: childContext,
    children: /*#__PURE__*/jsxRuntime.jsx(MenuItemRoot, _extends({
      ref: handleRef,
      role: role,
      tabIndex: tabIndex,
      component: component,
      focusVisibleClassName: l$2(classes.focusVisible, focusVisibleClassName)
    }, other, {
      ownerState: ownerState,
      classes: classes
    }))
  });
});
var I = MenuItem;

function getSwitchUtilityClass(slot) {
  return generateUtilityClass('MuiSwitch', slot);
}
const switchClasses = generateUtilityClasses('MuiSwitch', ['root', 'edgeStart', 'edgeEnd', 'switchBase', 'colorPrimary', 'colorSecondary', 'sizeSmall', 'sizeMedium', 'checked', 'disabled', 'input', 'thumb', 'track']);
var switchClasses$1 = switchClasses;

const _excluded$8 = ["className", "color", "edge", "size", "sx"];

const useUtilityClasses$6 = ownerState => {
  const {
    classes,
    edge,
    size,
    color,
    checked,
    disabled
  } = ownerState;
  const slots = {
    root: ['root', edge && `edge${capitalize(edge)}`, `size${capitalize(size)}`],
    switchBase: ['switchBase', `color${capitalize(color)}`, checked && 'checked', disabled && 'disabled'],
    thumb: ['thumb'],
    track: ['track'],
    input: ['input']
  };
  const composedClasses = composeClasses(slots, getSwitchUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};

const SwitchRoot = styled$1('span', {
  name: 'MuiSwitch',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.edge && styles[`edge${capitalize(ownerState.edge)}`], styles[`size${capitalize(ownerState.size)}`]];
  }
})(({
  ownerState
}) => _extends({
  display: 'inline-flex',
  width: 34 + 12 * 2,
  height: 14 + 12 * 2,
  overflow: 'hidden',
  padding: 12,
  boxSizing: 'border-box',
  position: 'relative',
  flexShrink: 0,
  zIndex: 0,
  // Reset the stacking context.
  verticalAlign: 'middle',
  // For correct alignment with the text.
  '@media print': {
    colorAdjust: 'exact'
  }
}, ownerState.edge === 'start' && {
  marginLeft: -8
}, ownerState.edge === 'end' && {
  marginRight: -8
}, ownerState.size === 'small' && {
  width: 40,
  height: 24,
  padding: 7,
  [`& .${switchClasses$1.thumb}`]: {
    width: 16,
    height: 16
  },
  [`& .${switchClasses$1.switchBase}`]: {
    padding: 4,
    [`&.${switchClasses$1.checked}`]: {
      transform: 'translateX(16px)'
    }
  }
}));
const SwitchSwitchBase = styled$1(SwitchBase$1, {
  name: 'MuiSwitch',
  slot: 'SwitchBase',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.switchBase, {
      [`& .${switchClasses$1.input}`]: styles.input
    }, ownerState.color !== 'default' && styles[`color${capitalize(ownerState.color)}`]];
  }
})(({
  theme
}) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 1,
  // Render above the focus ripple.
  color: theme.palette.mode === 'light' ? theme.palette.common.white : theme.palette.grey[300],
  transition: theme.transitions.create(['left', 'transform'], {
    duration: theme.transitions.duration.shortest
  }),
  [`&.${switchClasses$1.checked}`]: {
    transform: 'translateX(20px)'
  },
  [`&.${switchClasses$1.disabled}`]: {
    color: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600]
  },
  [`&.${switchClasses$1.checked} + .${switchClasses$1.track}`]: {
    opacity: 0.5
  },
  [`&.${switchClasses$1.disabled} + .${switchClasses$1.track}`]: {
    opacity: theme.palette.mode === 'light' ? 0.12 : 0.2
  },
  [`& .${switchClasses$1.input}`]: {
    left: '-100%',
    width: '300%'
  }
}), ({
  theme,
  ownerState
}) => _extends({
  '&:hover': {
    backgroundColor: alpha(theme.palette.action.active, theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: 'transparent'
    }
  }
}, ownerState.color !== 'default' && {
  [`&.${switchClasses$1.checked}`]: {
    color: theme.palette[ownerState.color].main,
    '&:hover': {
      backgroundColor: alpha(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    },
    [`&.${switchClasses$1.disabled}`]: {
      color: theme.palette.mode === 'light' ? lighten(theme.palette[ownerState.color].main, 0.62) : darken(theme.palette[ownerState.color].main, 0.55)
    }
  },
  [`&.${switchClasses$1.checked} + .${switchClasses$1.track}`]: {
    backgroundColor: theme.palette[ownerState.color].main
  }
}));
const SwitchTrack = styled$1('span', {
  name: 'MuiSwitch',
  slot: 'Track',
  overridesResolver: (props, styles) => styles.track
})(({
  theme
}) => ({
  height: '100%',
  width: '100%',
  borderRadius: 14 / 2,
  zIndex: -1,
  transition: theme.transitions.create(['opacity', 'background-color'], {
    duration: theme.transitions.duration.shortest
  }),
  backgroundColor: theme.palette.mode === 'light' ? theme.palette.common.black : theme.palette.common.white,
  opacity: theme.palette.mode === 'light' ? 0.38 : 0.3
}));
const SwitchThumb = styled$1('span', {
  name: 'MuiSwitch',
  slot: 'Thumb',
  overridesResolver: (props, styles) => styles.thumb
})(({
  theme
}) => ({
  boxShadow: theme.shadows[1],
  backgroundColor: 'currentColor',
  width: 20,
  height: 20,
  borderRadius: '50%'
}));
const Switch = /*#__PURE__*/e__default.forwardRef(function Switch(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiSwitch'
  });

  const {
    className,
    color = 'primary',
    edge = false,
    size = 'medium',
    sx
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$8);

  const ownerState = _extends({}, props, {
    color,
    edge,
    size
  });

  const classes = useUtilityClasses$6(ownerState);

  const icon = /*#__PURE__*/jsxRuntime.jsx(SwitchThumb, {
    className: classes.thumb,
    ownerState: ownerState
  });

  return /*#__PURE__*/jsxRuntime.jsxs(SwitchRoot, {
    className: l$2(classes.root, className),
    sx: sx,
    ownerState: ownerState,
    children: [/*#__PURE__*/jsxRuntime.jsx(SwitchSwitchBase, _extends({
      type: "checkbox",
      icon: icon,
      checkedIcon: icon,
      ref: ref,
      ownerState: ownerState
    }, other, {
      classes: _extends({}, classes, {
        root: classes.switchBase
      })
    })), /*#__PURE__*/jsxRuntime.jsx(SwitchTrack, {
      className: classes.track,
      ownerState: ownerState
    })]
  });
});
var H = Switch;

function getButtonUtilityClass(slot) {
  return generateUtilityClass('MuiButton', slot);
}
const buttonClasses = generateUtilityClasses('MuiButton', ['root', 'text', 'textInherit', 'textPrimary', 'textSecondary', 'outlined', 'outlinedInherit', 'outlinedPrimary', 'outlinedSecondary', 'contained', 'containedInherit', 'containedPrimary', 'containedSecondary', 'disableElevation', 'focusVisible', 'disabled', 'colorInherit', 'textSizeSmall', 'textSizeMedium', 'textSizeLarge', 'outlinedSizeSmall', 'outlinedSizeMedium', 'outlinedSizeLarge', 'containedSizeSmall', 'containedSizeMedium', 'containedSizeLarge', 'sizeMedium', 'sizeSmall', 'sizeLarge', 'fullWidth', 'startIcon', 'endIcon', 'iconSizeSmall', 'iconSizeMedium', 'iconSizeLarge']);
var buttonClasses$1 = buttonClasses;

const _excluded$7 = ["children", "color", "component", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"];

const useUtilityClasses$5 = ownerState => {
  const {
    color,
    disableElevation,
    fullWidth,
    size,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ['root', variant, `${variant}${capitalize(color)}`, `size${capitalize(size)}`, `${variant}Size${capitalize(size)}`, color === 'inherit' && 'colorInherit', disableElevation && 'disableElevation', fullWidth && 'fullWidth'],
    label: ['label'],
    startIcon: ['startIcon', `iconSize${capitalize(size)}`],
    endIcon: ['endIcon', `iconSize${capitalize(size)}`]
  };
  const composedClasses = composeClasses(slots, getButtonUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};

const commonIconStyles = ownerState => _extends({}, ownerState.size === 'small' && {
  '& > *:nth-of-type(1)': {
    fontSize: 18
  }
}, ownerState.size === 'medium' && {
  '& > *:nth-of-type(1)': {
    fontSize: 20
  }
}, ownerState.size === 'large' && {
  '& > *:nth-of-type(1)': {
    fontSize: 22
  }
});

const ButtonRoot = styled$1(ButtonBase$1, {
  shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === 'classes',
  name: 'MuiButton',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant], styles[`${ownerState.variant}${capitalize(ownerState.color)}`], styles[`size${capitalize(ownerState.size)}`], styles[`${ownerState.variant}Size${capitalize(ownerState.size)}`], ownerState.color === 'inherit' && styles.colorInherit, ownerState.disableElevation && styles.disableElevation, ownerState.fullWidth && styles.fullWidth];
  }
})(({
  theme,
  ownerState
}) => _extends({}, theme.typography.button, {
  minWidth: 64,
  padding: '6px 16px',
  borderRadius: theme.shape.borderRadius,
  transition: theme.transitions.create(['background-color', 'box-shadow', 'border-color', 'color'], {
    duration: theme.transitions.duration.short
  }),
  '&:hover': _extends({
    textDecoration: 'none',
    backgroundColor: alpha(theme.palette.text.primary, theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: 'transparent'
    }
  }, ownerState.variant === 'text' && ownerState.color !== 'inherit' && {
    backgroundColor: alpha(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: 'transparent'
    }
  }, ownerState.variant === 'outlined' && ownerState.color !== 'inherit' && {
    border: `1px solid ${theme.palette[ownerState.color].main}`,
    backgroundColor: alpha(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: 'transparent'
    }
  }, ownerState.variant === 'contained' && {
    backgroundColor: theme.palette.grey.A100,
    boxShadow: theme.shadows[4],
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      boxShadow: theme.shadows[2],
      backgroundColor: theme.palette.grey[300]
    }
  }, ownerState.variant === 'contained' && ownerState.color !== 'inherit' && {
    backgroundColor: theme.palette[ownerState.color].dark,
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: theme.palette[ownerState.color].main
    }
  }),
  '&:active': _extends({}, ownerState.variant === 'contained' && {
    boxShadow: theme.shadows[8]
  }),
  [`&.${buttonClasses$1.focusVisible}`]: _extends({}, ownerState.variant === 'contained' && {
    boxShadow: theme.shadows[6]
  }),
  [`&.${buttonClasses$1.disabled}`]: _extends({
    color: theme.palette.action.disabled
  }, ownerState.variant === 'outlined' && {
    border: `1px solid ${theme.palette.action.disabledBackground}`
  }, ownerState.variant === 'outlined' && ownerState.color === 'secondary' && {
    border: `1px solid ${theme.palette.action.disabled}`
  }, ownerState.variant === 'contained' && {
    color: theme.palette.action.disabled,
    boxShadow: theme.shadows[0],
    backgroundColor: theme.palette.action.disabledBackground
  })
}, ownerState.variant === 'text' && {
  padding: '6px 8px'
}, ownerState.variant === 'text' && ownerState.color !== 'inherit' && {
  color: theme.palette[ownerState.color].main
}, ownerState.variant === 'outlined' && {
  padding: '5px 15px',
  border: `1px solid ${theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'}`
}, ownerState.variant === 'outlined' && ownerState.color !== 'inherit' && {
  color: theme.palette[ownerState.color].main,
  border: `1px solid ${alpha(theme.palette[ownerState.color].main, 0.5)}`
}, ownerState.variant === 'contained' && {
  color: theme.palette.getContrastText(theme.palette.grey[300]),
  backgroundColor: theme.palette.grey[300],
  boxShadow: theme.shadows[2]
}, ownerState.variant === 'contained' && ownerState.color !== 'inherit' && {
  color: theme.palette[ownerState.color].contrastText,
  backgroundColor: theme.palette[ownerState.color].main
}, ownerState.color === 'inherit' && {
  color: 'inherit',
  borderColor: 'currentColor'
}, ownerState.size === 'small' && ownerState.variant === 'text' && {
  padding: '4px 5px',
  fontSize: theme.typography.pxToRem(13)
}, ownerState.size === 'large' && ownerState.variant === 'text' && {
  padding: '8px 11px',
  fontSize: theme.typography.pxToRem(15)
}, ownerState.size === 'small' && ownerState.variant === 'outlined' && {
  padding: '3px 9px',
  fontSize: theme.typography.pxToRem(13)
}, ownerState.size === 'large' && ownerState.variant === 'outlined' && {
  padding: '7px 21px',
  fontSize: theme.typography.pxToRem(15)
}, ownerState.size === 'small' && ownerState.variant === 'contained' && {
  padding: '4px 10px',
  fontSize: theme.typography.pxToRem(13)
}, ownerState.size === 'large' && ownerState.variant === 'contained' && {
  padding: '8px 22px',
  fontSize: theme.typography.pxToRem(15)
}, ownerState.fullWidth && {
  width: '100%'
}), ({
  ownerState
}) => ownerState.disableElevation && {
  boxShadow: 'none',
  '&:hover': {
    boxShadow: 'none'
  },
  [`&.${buttonClasses$1.focusVisible}`]: {
    boxShadow: 'none'
  },
  '&:active': {
    boxShadow: 'none'
  },
  [`&.${buttonClasses$1.disabled}`]: {
    boxShadow: 'none'
  }
});
const ButtonStartIcon = styled$1('span', {
  name: 'MuiButton',
  slot: 'StartIcon',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.startIcon, styles[`iconSize${capitalize(ownerState.size)}`]];
  }
})(({
  ownerState
}) => _extends({
  display: 'inherit',
  marginRight: 8,
  marginLeft: -4
}, ownerState.size === 'small' && {
  marginLeft: -2
}, commonIconStyles(ownerState)));
const ButtonEndIcon = styled$1('span', {
  name: 'MuiButton',
  slot: 'EndIcon',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.endIcon, styles[`iconSize${capitalize(ownerState.size)}`]];
  }
})(({
  ownerState
}) => _extends({
  display: 'inherit',
  marginRight: -4,
  marginLeft: 8
}, ownerState.size === 'small' && {
  marginRight: -2
}, commonIconStyles(ownerState)));
const Button = /*#__PURE__*/e__default.forwardRef(function Button(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiButton'
  });

  const {
    children,
    color = 'primary',
    component = 'button',
    disabled = false,
    disableElevation = false,
    disableFocusRipple = false,
    endIcon: endIconProp,
    focusVisibleClassName,
    fullWidth = false,
    size = 'medium',
    startIcon: startIconProp,
    type,
    variant = 'text'
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$7);

  const ownerState = _extends({}, props, {
    color,
    component,
    disabled,
    disableElevation,
    disableFocusRipple,
    fullWidth,
    size,
    type,
    variant
  });

  const classes = useUtilityClasses$5(ownerState);

  const startIcon = startIconProp && /*#__PURE__*/jsxRuntime.jsx(ButtonStartIcon, {
    className: classes.startIcon,
    ownerState: ownerState,
    children: startIconProp
  });

  const endIcon = endIconProp && /*#__PURE__*/jsxRuntime.jsx(ButtonEndIcon, {
    className: classes.endIcon,
    ownerState: ownerState,
    children: endIconProp
  });

  return /*#__PURE__*/jsxRuntime.jsxs(ButtonRoot, _extends({
    ownerState: ownerState,
    component: component,
    disabled: disabled,
    focusRipple: !disableFocusRipple,
    focusVisibleClassName: l$2(classes.focusVisible, focusVisibleClassName),
    ref: ref,
    type: type
  }, other, {
    classes: classes,
    children: [startIcon, children, endIcon]
  }));
});
var z = Button;

function getFormControlLabelUtilityClasses(slot) {
  return generateUtilityClass('MuiFormControlLabel', slot);
}
const formControlLabelClasses = generateUtilityClasses('MuiFormControlLabel', ['root', 'labelPlacementStart', 'labelPlacementTop', 'labelPlacementBottom', 'disabled', 'label']);
var formControlLabelClasses$1 = formControlLabelClasses;

const _excluded$6 = ["checked", "className", "componentsProps", "control", "disabled", "disableTypography", "inputRef", "label", "labelPlacement", "name", "onChange", "value"];

const useUtilityClasses$4 = ownerState => {
  const {
    classes,
    disabled,
    labelPlacement
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', `labelPlacement${capitalize(labelPlacement)}`],
    label: ['label', disabled && 'disabled']
  };
  return composeClasses(slots, getFormControlLabelUtilityClasses, classes);
};

const FormControlLabelRoot = styled$1('label', {
  name: 'MuiFormControlLabel',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${formControlLabelClasses$1.label}`]: styles.label
    }, styles.root, styles[`labelPlacement${capitalize(ownerState.labelPlacement)}`]];
  }
})(({
  theme,
  ownerState
}) => _extends({
  display: 'inline-flex',
  alignItems: 'center',
  cursor: 'pointer',
  // For correct alignment with the text.
  verticalAlign: 'middle',
  WebkitTapHighlightColor: 'transparent',
  marginLeft: -11,
  marginRight: 16,
  // used for row presentation of radio/checkbox
  [`&.${formControlLabelClasses$1.disabled}`]: {
    cursor: 'default'
  }
}, ownerState.labelPlacement === 'start' && {
  flexDirection: 'row-reverse',
  marginLeft: 16,
  // used for row presentation of radio/checkbox
  marginRight: -11
}, ownerState.labelPlacement === 'top' && {
  flexDirection: 'column-reverse',
  marginLeft: 16
}, ownerState.labelPlacement === 'bottom' && {
  flexDirection: 'column',
  marginLeft: 16
}, {
  [`& .${formControlLabelClasses$1.label}`]: {
    [`&.${formControlLabelClasses$1.disabled}`]: {
      color: theme.palette.text.disabled
    }
  }
}));
/**
 * Drop-in replacement of the `Radio`, `Switch` and `Checkbox` component.
 * Use this component if you want to display an extra label.
 */

const FormControlLabel = /*#__PURE__*/e__default.forwardRef(function FormControlLabel(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiFormControlLabel'
  });

  const {
    className,
    componentsProps = {},
    control,
    disabled: disabledProp,
    disableTypography,
    label,
    labelPlacement = 'end'
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$6);

  const muiFormControl = useFormControl();
  let disabled = disabledProp;

  if (typeof disabled === 'undefined' && typeof control.props.disabled !== 'undefined') {
    disabled = control.props.disabled;
  }

  if (typeof disabled === 'undefined' && muiFormControl) {
    disabled = muiFormControl.disabled;
  }

  const controlProps = {
    disabled
  };
  ['checked', 'name', 'onChange', 'value', 'inputRef'].forEach(key => {
    if (typeof control.props[key] === 'undefined' && typeof props[key] !== 'undefined') {
      controlProps[key] = props[key];
    }
  });

  const ownerState = _extends({}, props, {
    disabled,
    label,
    labelPlacement
  });

  const classes = useUtilityClasses$4(ownerState);
  return /*#__PURE__*/jsxRuntime.jsxs(FormControlLabelRoot, _extends({
    className: l$2(classes.root, className),
    ownerState: ownerState,
    ref: ref
  }, other, {
    children: [/*#__PURE__*/e__default.cloneElement(control, controlProps), label.type === Typography$1 || disableTypography ? label : /*#__PURE__*/jsxRuntime.jsx(Typography$1, _extends({
      component: "span",
      className: classes.label
    }, componentsProps.typography, {
      children: label
    }))]
  }));
});
var A = FormControlLabel;

function getCircularProgressUtilityClass(slot) {
  return generateUtilityClass('MuiCircularProgress', slot);
}
generateUtilityClasses('MuiCircularProgress', ['root', 'determinate', 'indeterminate', 'colorPrimary', 'colorSecondary', 'svg', 'circle', 'circleDeterminate', 'circleIndeterminate', 'circleDisableShrink']);

const _excluded$5 = ["className", "color", "disableShrink", "size", "style", "thickness", "value", "variant"];

let _ = t => t,
    _t$1,
    _t2,
    _t3,
    _t4;
const SIZE = 44;
const circularRotateKeyframe = keyframes(_t$1 || (_t$1 = _`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`));
const circularDashKeyframe = keyframes(_t2 || (_t2 = _`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`));

const useUtilityClasses$3 = ownerState => {
  const {
    classes,
    variant,
    color,
    disableShrink
  } = ownerState;
  const slots = {
    root: ['root', variant, `color${capitalize(color)}`],
    svg: ['svg'],
    circle: ['circle', `circle${capitalize(variant)}`, disableShrink && 'circleDisableShrink']
  };
  return composeClasses(slots, getCircularProgressUtilityClass, classes);
};

const CircularProgressRoot = styled$1('span', {
  name: 'MuiCircularProgress',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant], styles[`color${capitalize(ownerState.color)}`]];
  }
})(({
  ownerState,
  theme
}) => _extends({
  display: 'inline-block'
}, ownerState.variant === 'determinate' && {
  transition: theme.transitions.create('transform')
}, ownerState.color !== 'inherit' && {
  color: theme.palette[ownerState.color].main
}), ({
  ownerState
}) => ownerState.variant === 'indeterminate' && css(_t3 || (_t3 = _`
      animation: ${0} 1.4s linear infinite;
    `), circularRotateKeyframe));
const CircularProgressSVG = styled$1('svg', {
  name: 'MuiCircularProgress',
  slot: 'Svg',
  overridesResolver: (props, styles) => styles.svg
})({
  display: 'block' // Keeps the progress centered

});
const CircularProgressCircle = styled$1('circle', {
  name: 'MuiCircularProgress',
  slot: 'Circle',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.circle, styles[`circle${capitalize(ownerState.variant)}`], ownerState.disableShrink && styles.circleDisableShrink];
  }
})(({
  ownerState,
  theme
}) => _extends({
  stroke: 'currentColor'
}, ownerState.variant === 'determinate' && {
  transition: theme.transitions.create('stroke-dashoffset')
}, ownerState.variant === 'indeterminate' && {
  // Some default value that looks fine waiting for the animation to kicks in.
  strokeDasharray: '80px, 200px',
  strokeDashoffset: 0 // Add the unit to fix a Edge 16 and below bug.

}), ({
  ownerState
}) => ownerState.variant === 'indeterminate' && !ownerState.disableShrink && css(_t4 || (_t4 = _`
      animation: ${0} 1.4s ease-in-out infinite;
    `), circularDashKeyframe));
/**
 * ## ARIA
 *
 * If the progress bar is describing the loading progress of a particular region of a page,
 * you should use `aria-describedby` to point to the progress bar, and set the `aria-busy`
 * attribute to `true` on that region until it has finished loading.
 */

const CircularProgress = /*#__PURE__*/e__default.forwardRef(function CircularProgress(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiCircularProgress'
  });

  const {
    className,
    color = 'primary',
    disableShrink = false,
    size = 40,
    style,
    thickness = 3.6,
    value = 0,
    variant = 'indeterminate'
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$5);

  const ownerState = _extends({}, props, {
    color,
    disableShrink,
    size,
    thickness,
    value,
    variant
  });

  const classes = useUtilityClasses$3(ownerState);
  const circleStyle = {};
  const rootStyle = {};
  const rootProps = {};

  if (variant === 'determinate') {
    const circumference = 2 * Math.PI * ((SIZE - thickness) / 2);
    circleStyle.strokeDasharray = circumference.toFixed(3);
    rootProps['aria-valuenow'] = Math.round(value);
    circleStyle.strokeDashoffset = `${((100 - value) / 100 * circumference).toFixed(3)}px`;
    rootStyle.transform = 'rotate(-90deg)';
  }

  return /*#__PURE__*/jsxRuntime.jsx(CircularProgressRoot, _extends({
    className: l$2(classes.root, className),
    style: _extends({
      width: size,
      height: size
    }, rootStyle, style),
    ownerState: ownerState,
    ref: ref,
    role: "progressbar"
  }, rootProps, other, {
    children: /*#__PURE__*/jsxRuntime.jsx(CircularProgressSVG, {
      className: classes.svg,
      ownerState: ownerState,
      viewBox: `${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}`,
      children: /*#__PURE__*/jsxRuntime.jsx(CircularProgressCircle, {
        className: classes.circle,
        style: circleStyle,
        ownerState: ownerState,
        cx: SIZE,
        cy: SIZE,
        r: (SIZE - thickness) / 2,
        fill: "none",
        strokeWidth: thickness
      })
    })
  }));
});
var V = CircularProgress;

/**
 * @ignore - internal component.
 */

const TableContext = /*#__PURE__*/e__default.createContext();

var TableContext$1 = TableContext;

/**
 * @ignore - internal component.
 */

const Tablelvl2Context = /*#__PURE__*/e__default.createContext();

var Tablelvl2Context$1 = Tablelvl2Context;

function getTableCellUtilityClass(slot) {
  return generateUtilityClass('MuiTableCell', slot);
}
const tableCellClasses = generateUtilityClasses('MuiTableCell', ['root', 'head', 'body', 'footer', 'sizeSmall', 'sizeMedium', 'paddingCheckbox', 'paddingNone', 'alignLeft', 'alignCenter', 'alignRight', 'alignJustify', 'stickyHeader']);
var tableCellClasses$1 = tableCellClasses;

const _excluded$4 = ["align", "className", "component", "padding", "scope", "size", "sortDirection", "variant"];

const useUtilityClasses$2 = ownerState => {
  const {
    classes,
    variant,
    align,
    padding,
    size,
    stickyHeader
  } = ownerState;
  const slots = {
    root: ['root', variant, stickyHeader && 'stickyHeader', align !== 'inherit' && `align${capitalize(align)}`, padding !== 'normal' && `padding${capitalize(padding)}`, `size${capitalize(size)}`]
  };
  return composeClasses(slots, getTableCellUtilityClass, classes);
};

const TableCellRoot = styled$1('td', {
  name: 'MuiTableCell',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant], styles[`size${capitalize(ownerState.size)}`], ownerState.padding !== 'normal' && styles[`padding${capitalize(ownerState.padding)}`], ownerState.align !== 'inherit' && styles[`align${capitalize(ownerState.align)}`], ownerState.stickyHeader && styles.stickyHeader];
  }
})(({
  theme,
  ownerState
}) => _extends({}, theme.typography.body2, {
  display: 'table-cell',
  verticalAlign: 'inherit',
  // Workaround for a rendering bug with spanned columns in Chrome 62.0.
  // Removes the alpha (sets it to 1), and lightens or darkens the theme color.
  borderBottom: `1px solid
    ${theme.palette.mode === 'light' ? lighten(alpha(theme.palette.divider, 1), 0.88) : darken(alpha(theme.palette.divider, 1), 0.68)}`,
  textAlign: 'left',
  padding: 16
}, ownerState.variant === 'head' && {
  color: theme.palette.text.primary,
  lineHeight: theme.typography.pxToRem(24),
  fontWeight: theme.typography.fontWeightMedium
}, ownerState.variant === 'body' && {
  color: theme.palette.text.primary
}, ownerState.variant === 'footer' && {
  color: theme.palette.text.secondary,
  lineHeight: theme.typography.pxToRem(21),
  fontSize: theme.typography.pxToRem(12)
}, ownerState.size === 'small' && {
  padding: '6px 16px',
  [`&.${tableCellClasses$1.paddingCheckbox}`]: {
    width: 24,
    // prevent the checkbox column from growing
    padding: '0 12px 0 16px',
    '& > *': {
      padding: 0
    }
  }
}, ownerState.padding === 'checkbox' && {
  width: 48,
  // prevent the checkbox column from growing
  padding: '0 0 0 4px'
}, ownerState.padding === 'none' && {
  padding: 0
}, ownerState.align === 'left' && {
  textAlign: 'left'
}, ownerState.align === 'center' && {
  textAlign: 'center'
}, ownerState.align === 'right' && {
  textAlign: 'right',
  flexDirection: 'row-reverse'
}, ownerState.align === 'justify' && {
  textAlign: 'justify'
}, ownerState.stickyHeader && {
  position: 'sticky',
  top: 0,
  zIndex: 2,
  backgroundColor: theme.palette.background.default
}));
/**
 * The component renders a `<th>` element when the parent context is a header
 * or otherwise a `<td>` element.
 */

const TableCell = /*#__PURE__*/e__default.forwardRef(function TableCell(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiTableCell'
  });

  const {
    align = 'inherit',
    className,
    component: componentProp,
    padding: paddingProp,
    scope: scopeProp,
    size: sizeProp,
    sortDirection,
    variant: variantProp
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$4);

  const table = e__default.useContext(TableContext$1);
  const tablelvl2 = e__default.useContext(Tablelvl2Context$1);
  const isHeadCell = tablelvl2 && tablelvl2.variant === 'head';
  let component;

  if (componentProp) {
    component = componentProp;
  } else {
    component = isHeadCell ? 'th' : 'td';
  }

  let scope = scopeProp;

  if (!scope && isHeadCell) {
    scope = 'col';
  }

  const variant = variantProp || tablelvl2 && tablelvl2.variant;

  const ownerState = _extends({}, props, {
    align,
    component,
    padding: paddingProp || (table && table.padding ? table.padding : 'normal'),
    size: sizeProp || (table && table.size ? table.size : 'medium'),
    sortDirection,
    stickyHeader: variant === 'head' && table && table.stickyHeader,
    variant
  });

  const classes = useUtilityClasses$2(ownerState);
  let ariaSort = null;

  if (sortDirection) {
    ariaSort = sortDirection === 'asc' ? 'ascending' : 'descending';
  }

  return /*#__PURE__*/jsxRuntime.jsx(TableCellRoot, _extends({
    as: component,
    ref: ref,
    className: l$2(classes.root, className),
    "aria-sort": ariaSort,
    scope: scope,
    ownerState: ownerState
  }, other));
});
var TableCell$1 = TableCell;

function getToolbarUtilityClass(slot) {
  return generateUtilityClass('MuiToolbar', slot);
}
generateUtilityClasses('MuiToolbar', ['root', 'gutters', 'regular', 'dense']);

const _excluded$3 = ["className", "component", "disableGutters", "variant"];

const useUtilityClasses$1 = ownerState => {
  const {
    classes,
    disableGutters,
    variant
  } = ownerState;
  const slots = {
    root: ['root', !disableGutters && 'gutters', variant]
  };
  return composeClasses(slots, getToolbarUtilityClass, classes);
};

const ToolbarRoot = styled$1('div', {
  name: 'MuiToolbar',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, !ownerState.disableGutters && styles.gutters, styles[ownerState.variant]];
  }
})(({
  theme,
  ownerState
}) => _extends({
  position: 'relative',
  display: 'flex',
  alignItems: 'center'
}, !ownerState.disableGutters && {
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3)
  }
}, ownerState.variant === 'dense' && {
  minHeight: 48
}), ({
  theme,
  ownerState
}) => ownerState.variant === 'regular' && theme.mixins.toolbar);
const Toolbar = /*#__PURE__*/e__default.forwardRef(function Toolbar(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiToolbar'
  });

  const {
    className,
    component = 'div',
    disableGutters = false,
    variant = 'regular'
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$3);

  const ownerState = _extends({}, props, {
    component,
    disableGutters,
    variant
  });

  const classes = useUtilityClasses$1(ownerState);
  return /*#__PURE__*/jsxRuntime.jsx(ToolbarRoot, _extends({
    as: component,
    className: l$2(classes.root, className),
    ref: ref,
    ownerState: ownerState
  }, other));
});
var Toolbar$1 = Toolbar;

var KeyboardArrowLeft = createSvgIcon( /*#__PURE__*/jsxRuntime.jsx("path", {
  d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
}), 'KeyboardArrowLeft');

var KeyboardArrowRight = createSvgIcon( /*#__PURE__*/jsxRuntime.jsx("path", {
  d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
}), 'KeyboardArrowRight');

var LastPageIcon = createSvgIcon( /*#__PURE__*/jsxRuntime.jsx("path", {
  d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
}), 'LastPage');

var FirstPageIcon = createSvgIcon( /*#__PURE__*/jsxRuntime.jsx("path", {
  d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
}), 'FirstPage');

var _LastPageIcon, _FirstPageIcon, _KeyboardArrowRight, _KeyboardArrowLeft, _KeyboardArrowLeft2, _KeyboardArrowRight2, _FirstPageIcon2, _LastPageIcon2;

const _excluded$2 = ["backIconButtonProps", "count", "getItemAriaLabel", "nextIconButtonProps", "onPageChange", "page", "rowsPerPage", "showFirstButton", "showLastButton"];
const TablePaginationActions = /*#__PURE__*/e__default.forwardRef(function TablePaginationActions(props, ref) {
  const {
    backIconButtonProps,
    count,
    getItemAriaLabel,
    nextIconButtonProps,
    onPageChange,
    page,
    rowsPerPage,
    showFirstButton,
    showLastButton
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$2);

  const theme = useTheme();

  const handleFirstPageButtonClick = event => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = event => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = event => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = event => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return /*#__PURE__*/jsxRuntime.jsxs("div", _extends({
    ref: ref
  }, other, {
    children: [showFirstButton && /*#__PURE__*/jsxRuntime.jsx(O, {
      onClick: handleFirstPageButtonClick,
      disabled: page === 0,
      "aria-label": getItemAriaLabel('first', page),
      title: getItemAriaLabel('first', page),
      children: theme.direction === 'rtl' ? _LastPageIcon || (_LastPageIcon = /*#__PURE__*/jsxRuntime.jsx(LastPageIcon, {})) : _FirstPageIcon || (_FirstPageIcon = /*#__PURE__*/jsxRuntime.jsx(FirstPageIcon, {}))
    }), /*#__PURE__*/jsxRuntime.jsx(O, _extends({
      onClick: handleBackButtonClick,
      disabled: page === 0,
      color: "inherit",
      "aria-label": getItemAriaLabel('previous', page),
      title: getItemAriaLabel('previous', page)
    }, backIconButtonProps, {
      children: theme.direction === 'rtl' ? _KeyboardArrowRight || (_KeyboardArrowRight = /*#__PURE__*/jsxRuntime.jsx(KeyboardArrowRight, {})) : _KeyboardArrowLeft || (_KeyboardArrowLeft = /*#__PURE__*/jsxRuntime.jsx(KeyboardArrowLeft, {}))
    })), /*#__PURE__*/jsxRuntime.jsx(O, _extends({
      onClick: handleNextButtonClick,
      disabled: count !== -1 ? page >= Math.ceil(count / rowsPerPage) - 1 : false,
      color: "inherit",
      "aria-label": getItemAriaLabel('next', page),
      title: getItemAriaLabel('next', page)
    }, nextIconButtonProps, {
      children: theme.direction === 'rtl' ? _KeyboardArrowLeft2 || (_KeyboardArrowLeft2 = /*#__PURE__*/jsxRuntime.jsx(KeyboardArrowLeft, {})) : _KeyboardArrowRight2 || (_KeyboardArrowRight2 = /*#__PURE__*/jsxRuntime.jsx(KeyboardArrowRight, {}))
    })), showLastButton && /*#__PURE__*/jsxRuntime.jsx(O, {
      onClick: handleLastPageButtonClick,
      disabled: page >= Math.ceil(count / rowsPerPage) - 1,
      "aria-label": getItemAriaLabel('last', page),
      title: getItemAriaLabel('last', page),
      children: theme.direction === 'rtl' ? _FirstPageIcon2 || (_FirstPageIcon2 = /*#__PURE__*/jsxRuntime.jsx(FirstPageIcon, {})) : _LastPageIcon2 || (_LastPageIcon2 = /*#__PURE__*/jsxRuntime.jsx(LastPageIcon, {}))
    })]
  }));
});
var TablePaginationActions$1 = TablePaginationActions;

function getTablePaginationUtilityClass(slot) {
  return generateUtilityClass('MuiTablePagination', slot);
}
const tablePaginationClasses = generateUtilityClasses('MuiTablePagination', ['root', 'toolbar', 'spacer', 'selectLabel', 'selectRoot', 'select', 'selectIcon', 'input', 'menuItem', 'displayedRows', 'actions']);
var tablePaginationClasses$1 = tablePaginationClasses;

var _InputBase;

const _excluded$1 = ["ActionsComponent", "backIconButtonProps", "className", "colSpan", "component", "count", "getItemAriaLabel", "labelDisplayedRows", "labelRowsPerPage", "nextIconButtonProps", "onPageChange", "onRowsPerPageChange", "page", "rowsPerPage", "rowsPerPageOptions", "SelectProps", "showFirstButton", "showLastButton"];
const TablePaginationRoot = styled$1(TableCell$1, {
  name: 'MuiTablePagination',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => ({
  overflow: 'auto',
  color: theme.palette.text.primary,
  fontSize: theme.typography.pxToRem(14),
  // Increase the specificity to override TableCell.
  '&:last-child': {
    padding: 0
  }
}));
const TablePaginationToolbar = styled$1(Toolbar$1, {
  name: 'MuiTablePagination',
  slot: 'Toolbar',
  overridesResolver: (props, styles) => _extends({
    [`& .${tablePaginationClasses$1.actions}`]: styles.actions
  }, styles.toolbar)
})(({
  theme
}) => ({
  minHeight: 52,
  paddingRight: 2,
  [`${theme.breakpoints.up('xs')} and (orientation: landscape)`]: {
    minHeight: 52
  },
  [theme.breakpoints.up('sm')]: {
    minHeight: 52,
    paddingRight: 2
  },
  [`& .${tablePaginationClasses$1.actions}`]: {
    flexShrink: 0,
    marginLeft: 20
  }
}));
const TablePaginationSpacer = styled$1('div', {
  name: 'MuiTablePagination',
  slot: 'Spacer',
  overridesResolver: (props, styles) => styles.spacer
})({
  flex: '1 1 100%'
});
const TablePaginationSelectLabel = styled$1('p', {
  name: 'MuiTablePagination',
  slot: 'SelectLabel',
  overridesResolver: (props, styles) => styles.selectLabel
})(({
  theme
}) => _extends({}, theme.typography.body2, {
  flexShrink: 0
}));
const TablePaginationSelect = styled$1(F, {
  name: 'MuiTablePagination',
  slot: 'Select',
  overridesResolver: (props, styles) => _extends({
    [`& .${tablePaginationClasses$1.selectIcon}`]: styles.selectIcon,
    [`& .${tablePaginationClasses$1.select}`]: styles.select
  }, styles.input, styles.selectRoot)
})({
  color: 'inherit',
  fontSize: 'inherit',
  flexShrink: 0,
  marginRight: 32,
  marginLeft: 8,
  [`& .${tablePaginationClasses$1.select}`]: {
    paddingLeft: 8,
    paddingRight: 24,
    textAlign: 'right',
    textAlignLast: 'right' // Align <select> on Chrome.

  }
});
const TablePaginationMenuItem = styled$1(I, {
  name: 'MuiTablePagination',
  slot: 'MenuItem',
  overridesResolver: (props, styles) => styles.menuItem
})({});
const TablePaginationDisplayedRows = styled$1('p', {
  name: 'MuiTablePagination',
  slot: 'DisplayedRows',
  overridesResolver: (props, styles) => styles.displayedRows
})(({
  theme
}) => _extends({}, theme.typography.body2, {
  flexShrink: 0
}));

function defaultLabelDisplayedRows({
  from,
  to,
  count
}) {
  return `${from}-${to} of ${count !== -1 ? count : `more than ${to}`}`;
}

function defaultGetAriaLabel(type) {
  return `Go to ${type} page`;
}

const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root'],
    toolbar: ['toolbar'],
    spacer: ['spacer'],
    selectLabel: ['selectLabel'],
    select: ['select'],
    input: ['input'],
    selectIcon: ['selectIcon'],
    menuItem: ['menuItem'],
    displayedRows: ['displayedRows'],
    actions: ['actions']
  };
  return composeClasses(slots, getTablePaginationUtilityClass, classes);
};
/**
 * A `TableCell` based component for placing inside `TableFooter` for pagination.
 */


const TablePagination = /*#__PURE__*/e__default.forwardRef(function TablePagination(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: 'MuiTablePagination'
  });

  const {
    ActionsComponent = TablePaginationActions$1,
    backIconButtonProps,
    className,
    colSpan: colSpanProp,
    component = TableCell$1,
    count,
    getItemAriaLabel = defaultGetAriaLabel,
    labelDisplayedRows = defaultLabelDisplayedRows,
    labelRowsPerPage = 'Rows per page:',
    nextIconButtonProps,
    onPageChange,
    onRowsPerPageChange,
    page,
    rowsPerPage,
    rowsPerPageOptions = [10, 25, 50, 100],
    SelectProps = {},
    showFirstButton = false,
    showLastButton = false
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded$1);

  const ownerState = props;
  const classes = useUtilityClasses(ownerState);
  const MenuItemComponent = SelectProps.native ? 'option' : TablePaginationMenuItem;
  let colSpan;

  if (component === TableCell$1 || component === 'td') {
    colSpan = colSpanProp || 1000; // col-span over everything
  }

  const selectId = useId(SelectProps.id);
  const labelId = useId(SelectProps.labelId);

  const getLabelDisplayedRowsTo = () => {
    if (count === -1) {
      return (page + 1) * rowsPerPage;
    }

    return rowsPerPage === -1 ? count : Math.min(count, (page + 1) * rowsPerPage);
  };

  return /*#__PURE__*/jsxRuntime.jsx(TablePaginationRoot, _extends({
    colSpan: colSpan,
    ref: ref,
    as: component,
    ownerState: ownerState,
    className: l$2(classes.root, className)
  }, other, {
    children: /*#__PURE__*/jsxRuntime.jsxs(TablePaginationToolbar, {
      className: classes.toolbar,
      children: [/*#__PURE__*/jsxRuntime.jsx(TablePaginationSpacer, {
        className: classes.spacer
      }), rowsPerPageOptions.length > 1 && /*#__PURE__*/jsxRuntime.jsx(TablePaginationSelectLabel, {
        className: classes.selectLabel,
        id: labelId,
        children: labelRowsPerPage
      }), rowsPerPageOptions.length > 1 && /*#__PURE__*/jsxRuntime.jsx(TablePaginationSelect, _extends({
        variant: "standard",
        input: _InputBase || (_InputBase = /*#__PURE__*/jsxRuntime.jsx(R, {})),
        value: rowsPerPage,
        onChange: onRowsPerPageChange,
        id: selectId,
        labelId: labelId
      }, SelectProps, {
        classes: _extends({}, SelectProps.classes, {
          // TODO v5 remove `classes.input`
          root: l$2(classes.input, classes.selectRoot, (SelectProps.classes || {}).root),
          select: l$2(classes.select, (SelectProps.classes || {}).select),
          // TODO v5 remove `selectIcon`
          icon: l$2(classes.selectIcon, (SelectProps.classes || {}).icon)
        }),
        children: rowsPerPageOptions.map(rowsPerPageOption => /*#__PURE__*/createElement(MenuItemComponent, _extends({}, !isHostComponent(MenuItemComponent) && {
          ownerState
        }, {
          className: classes.menuItem,
          key: rowsPerPageOption.label ? rowsPerPageOption.label : rowsPerPageOption,
          value: rowsPerPageOption.value ? rowsPerPageOption.value : rowsPerPageOption
        }), rowsPerPageOption.label ? rowsPerPageOption.label : rowsPerPageOption))
      })), /*#__PURE__*/jsxRuntime.jsx(TablePaginationDisplayedRows, {
        className: classes.displayedRows,
        children: labelDisplayedRows({
          from: count === 0 ? 0 : page * rowsPerPage + 1,
          to: getLabelDisplayedRowsTo(),
          count: count === -1 ? -1 : count,
          page
        })
      }), /*#__PURE__*/jsxRuntime.jsx(ActionsComponent, {
        className: classes.actions,
        backIconButtonProps: backIconButtonProps,
        count: count,
        nextIconButtonProps: nextIconButtonProps,
        onPageChange: onPageChange,
        page: page,
        rowsPerPage: rowsPerPage,
        showFirstButton: showFirstButton,
        showLastButton: showLastButton,
        getItemAriaLabel: getItemAriaLabel
      })]
    })
  }));
});
var B = TablePagination;

const arSD = {
  components: {
    MuiBreadcrumbs: {
      defaultProps: {
        expandText: 'إظهر العنوان'
      }
    },
    MuiTablePagination: {
      defaultProps: {
        getItemAriaLabel: type => {
          if (type === 'first') {
            return 'إذهب الى الصفحة الأولى';
          }

          if (type === 'last') {
            return 'إذهب الي الصفحة الأخيرة';
          }

          if (type === 'next') {
            return 'إذهب الى الصفحة التالية';
          } // if (type === 'previous') {


          return 'إذهب الى الصفحة السابقة';
        },
        labelRowsPerPage: 'عدد الصفوف في الصفحة:',
        labelDisplayedRows: ({
          from,
          to,
          count
        }) => `${from}-${to} من ${count !== -1 ? count : ` أكثر من${to}`}`
      }
    },
    MuiRating: {
      defaultProps: {
        getLabelText: value => `${value} ${value !== 1 ? 'نجوم' : 'نجمة'}`,
        emptyLabelText: 'فارغ'
      }
    },
    MuiAutocomplete: {
      defaultProps: {
        clearText: 'مسح',
        closeText: 'إغلاق',
        loadingText: 'يتم التحميل…',
        noOptionsText: 'لا يوجد خيارات',
        openText: 'فتح'
      }
    },
    MuiAlert: {
      defaultProps: {
        closeText: 'إغلاق'
      }
    },
    MuiPagination: {
      defaultProps: {
        'aria-label': 'التنقل عبر الصفحات',
        getItemAriaLabel: (type, page, selected) => {
          if (type === 'page') {
            return `${selected ? '' : 'إذهب إلى '} صفحة ${page}`;
          }

          if (type === 'first') {
            return 'إذهب الى الصفحة الأولى';
          }

          if (type === 'last') {
            return 'إذهب الي الصفحة الأخيرة';
          }

          if (type === 'next') {
            return 'إذهب الى الصفحة التالية';
          } // if (type === 'previous') {


          return 'إذهب الى الصفحة السابقة';
        }
      }
    }
  }
};
const bgBG = {
  components: {
    MuiBreadcrumbs: {
      defaultProps: {
        expandText: 'Показване на пътя'
      }
    },
    MuiTablePagination: {
      defaultProps: {
        getItemAriaLabel: type => {
          if (type === 'first') {
            return 'Отиди на първата страница';
          }

          if (type === 'last') {
            return 'Отиди на последната страница';
          }

          if (type === 'next') {
            return 'Отиди на следващата страница';
          } // if (type === 'previous') {


          return 'Отиди на предишната страница';
        },
        labelRowsPerPage: 'Редове на страница:' // labelDisplayedRows: ({ from, to, count }) =>
        //   `${from}-${to} от ${count !== -1 ? count : `more than ${to}`}`,

      }
    },
    MuiRating: {
      defaultProps: {
        getLabelText: value => `${value} Звезд${value !== 1 ? 'и' : 'а'}`,
        emptyLabelText: 'Изчисти'
      }
    },
    MuiAutocomplete: {
      defaultProps: {
        clearText: 'Изчисти',
        closeText: 'Затвори',
        loadingText: 'Зареждане…',
        noOptionsText: 'Няма налични опции',
        openText: 'Отвори'
      }
    },
    MuiAlert: {
      defaultProps: {
        closeText: 'Затвори'
      }
    },
    MuiPagination: {
      defaultProps: {
        'aria-label': 'Пагинация',
        getItemAriaLabel: (type, page, selected) => {
          if (type === 'page') {
            return `${selected ? '' : 'Към '}страница ${page}`;
          }

          if (type === 'first') {
            return 'Отиди на първата страница';
          }

          if (type === 'last') {
            return 'Отиди на последната страница';
          }

          if (type === 'next') {
            return 'Отиди на следващата страница';
          } // if (type === 'previous') {


          return 'Отиди на предишната страница';
        }
      }
    }
  }
};
const csCZ = {
  components: {
    MuiBreadcrumbs: {
      defaultProps: {
        expandText: 'Ukázat cestu'
      }
    },
    MuiTablePagination: {
      defaultProps: {
        getItemAriaLabel: type => {
          if (type === 'first') {
            return 'Jít na první stránku';
          }

          if (type === 'last') {
            return 'Jít na poslední stránku';
          }

          if (type === 'next') {
            return 'Jít na další stránku';
          } // if (type === 'previous') {


          return 'Jít na předchozí stránku';
        },
        labelRowsPerPage: 'Řádků na stránce:',
        labelDisplayedRows: ({
          from,
          to,
          count
        }) => `${from}-${to} z ${count !== -1 ? count : `více než ${to}`}`
      }
    },
    MuiRating: {
      defaultProps: {
        getLabelText: value => {
          if (value === 1) {
            return `${value} hvězdička`;
          }

          if (value >= 2 && value <= 4) {
            return `${value} hvězdičky`;
          }

          return `${value} hvězdiček`;
        },
        emptyLabelText: 'Prázdné'
      }
    },
    MuiAutocomplete: {
      defaultProps: {
        clearText: 'Vymazat',
        closeText: 'Zavřít',
        loadingText: 'Načítání…',
        noOptionsText: 'Žádné možnosti',
        openText: 'Otevřít'
      }
    },
    MuiAlert: {
      defaultProps: {
        closeText: 'Zavřít'
      }
    },
    MuiPagination: {
      defaultProps: {
        'aria-label': 'Navigace stránkováním',
        getItemAriaLabel: (type, page, selected) => {
          if (type === 'page') {
            return `${selected ? '' : 'Jít na '}${page} stránku`;
          }

          if (type === 'first') {
            return 'Jít na první stránku';
          }

          if (type === 'last') {
            return 'Jít na poslední stránku';
          }

          if (type === 'next') {
            return 'Jít na další stránku';
          } // if (type === 'previous') {


          return 'Jít na předchozí stránku';
        }
      }
    }
  }
};
const deDE = {
  components: {
    MuiBreadcrumbs: {
      defaultProps: {
        expandText: 'Pfad anzeigen'
      }
    },
    MuiTablePagination: {
      defaultProps: {
        getItemAriaLabel: type => {
          if (type === 'first') {
            return 'Zur ersten Seite';
          }

          if (type === 'last') {
            return 'Zur letzten Seite';
          }

          if (type === 'next') {
            return 'Zur nächsten Seite';
          } // if (type === 'previous') {


          return 'Zur vorherigen Seite';
        },
        labelRowsPerPage: 'Zeilen pro Seite:',
        labelDisplayedRows: ({
          from,
          to,
          count
        }) => `${from}-${to} von ${count !== -1 ? count : `mehr als ${to}`}`
      }
    },
    MuiRating: {
      defaultProps: {
        getLabelText: value => `${value} ${value !== 1 ? 'Sterne' : 'Stern'}`,
        emptyLabelText: 'Keine Wertung'
      }
    },
    MuiAutocomplete: {
      defaultProps: {
        clearText: 'Leeren',
        closeText: 'Schließen',
        loadingText: 'Wird geladen…',
        noOptionsText: 'Keine Optionen',
        openText: 'Öffnen'
      }
    },
    MuiAlert: {
      defaultProps: {
        closeText: 'Schließen'
      }
    },
    MuiPagination: {
      defaultProps: {
        'aria-label': 'Navigation via Seitennummerierung',
        getItemAriaLabel: (type, page, selected) => {
          if (type === 'page') {
            return `${selected ? '' : 'Gehe zu '}Seite ${page}`;
          }

          if (type === 'first') {
            return 'Zur ersten Seite';
          }

          if (type === 'last') {
            return 'Zur letzten Seite';
          }

          if (type === 'next') {
            return 'Zur nächsten Seite';
          } // if (type === 'previous') {


          return 'Zur vorherigen Seite';
        }
      }
    }
  }
};

const enUS = {
  /*
  components: {
    MuiBreadcrumbs: { defaultProps: {
      expandText: 'Show path',
    }},
    MuiTablePagination: { defaultProps: { 
      getItemAriaLabel: (type) => {
        if (type === 'first') {
          return 'Go to first page';
        }
        if (type === 'last') {
          return 'Go to last page';
        }
        if (type === 'next') {
          return 'Go to next page';
        }
        // if (type === 'previous') {
        return 'Go to previous page';
      },
      labelRowsPerPage: 'Rows per page:',
      labelDisplayedRows: ({ from, to, count }) =>
  `${from}-${to} of ${count !== -1 ? count : `more than ${to}`}`,
    }},
    MuiRating: { defaultProps: { 
      getLabelText: value => `${value} Star${value !== 1 ? 's' : ''}`,
      emptyLabelText: 'Empty',
    }},
    MuiAutocomplete: { defaultProps: { 
      clearText: 'Clear',
      closeText: 'Close',
      loadingText: 'Loading…',
      noOptionsText: 'No options',
      openText: 'Open',
    }},
    MuiAlert: { defaultProps: { 
      closeText: 'Close',
    }},
    MuiPagination: {  defaultProps: { 
      'aria-label': 'Pagination navigation',
      getItemAriaLabel: (type, page, selected) => {
        if (type === 'page') {
          return `${selected ? '' : 'Go to '}page ${page}`;
        }
        if (type === 'first') {
          return 'Go to first page';
        }
        if (type === 'last') {
          return 'Go to last page';
        }
        if (type === 'next') {
          return 'Go to next page';
        }
        // if (type === 'previous') {
        return 'Go to previous page';
      },
    },
  },
  */
};
const esES = {
  components: {
    MuiBreadcrumbs: {
      defaultProps: {
        expandText: 'Mostrar ruta'
      }
    },
    MuiTablePagination: {
      defaultProps: {
        getItemAriaLabel: type => {
          if (type === 'first') {
            return 'Ir a la primera página';
          }

          if (type === 'last') {
            return 'Ir a la última página';
          }

          if (type === 'next') {
            return 'Ir a la página siguiente';
          } // if (type === 'previous') {


          return 'Ir a la página anterior';
        },
        labelRowsPerPage: 'Filas por página:',
        labelDisplayedRows: ({
          from,
          to,
          count
        }) => `${from}-${to} de ${count !== -1 ? count : `más de ${to}`}`
      }
    },
    MuiRating: {
      defaultProps: {
        getLabelText: value => `${value} Estrella${value !== 1 ? 's' : ''}`,
        emptyLabelText: 'Vacío'
      }
    },
    MuiAutocomplete: {
      defaultProps: {
        clearText: 'Limpiar',
        closeText: 'Cerrar',
        loadingText: 'Cargando…',
        noOptionsText: 'Sin opciones',
        openText: 'Abierto'
      }
    },
    MuiAlert: {
      defaultProps: {
        closeText: 'Cerrar'
      }
    },
    MuiPagination: {
      defaultProps: {
        'aria-label': 'Paginador',
        getItemAriaLabel: (type, page, selected) => {
          if (type === 'page') {
            return `${selected ? '' : 'Ir a la '}página ${page}`;
          }

          if (type === 'first') {
            return 'Ir a la primera página';
          }

          if (type === 'last') {
            return 'Ir a la última página';
          }

          if (type === 'next') {
            return 'Ir a la página siguiente';
          } // if (type === 'previous') {


          return 'Ir a la página anterior';
        }
      }
    }
  }
};
const faIR = {
  components: {
    // MuiBreadcrumbs: {
    //   defaultProps: {
    //     expandText: 'Show path',
    //   },
    // },
    MuiBreadcrumbs: {
      defaultProps: {
        expandText: 'نمایش مسیر'
      }
    },
    MuiTablePagination: {
      defaultProps: {
        getItemAriaLabel: type => {
          if (type === 'first') {
            return 'رفتن به اولین صفحه';
          }

          if (type === 'last') {
            return 'رفتن به آخرین صفحه';
          }

          if (type === 'next') {
            return 'رفتن به صفحه‌ی بعدی';
          } // if (type === 'previous') {


          return 'رفتن به صفحه‌ی قبلی';
        },
        labelRowsPerPage: 'تعداد سطرهای هر صفحه:' // labelDisplayedRows: ({ from, to, count }) =>
        //   `${from}-${to} از ${count !== -1 ? count : `more than ${to}`}`,

      }
    },
    MuiRating: {
      defaultProps: {
        getLabelText: value => `${value} ستاره`,
        emptyLabelText: 'خالی'
      }
    },
    MuiAutocomplete: {
      defaultProps: {
        clearText: 'پاک‌کردن',
        closeText: 'بستن',
        loadingText: 'در حال بارگذاری…',
        noOptionsText: 'بی‌نتیجه',
        openText: 'بازکردن'
      }
    },
    MuiAlert: {
      defaultProps: {
        closeText: 'بستن'
      }
    },
    MuiPagination: {
      defaultProps: {
        'aria-label': 'ناوبری صفحه',
        getItemAriaLabel: (type, page, selected) => {
          if (type === 'page') {
            return `${selected ? '' : 'رفتن به '}صفحهٔ ${page}`;
          }

          if (type === 'first') {
            return 'رفتن به اولین صفحه';
          }

          if (type === 'last') {
            return 'رفتن به آخرین صفحه';
          }

          if (type === 'next') {
            return 'رفتن به صفحه‌ی بعدی';
          } // if (type === 'previous') {


          return 'رفتن به صفحه‌ی قبلی';
        }
      }
    }
  }
};
const frFR = {
  components: {
    MuiBreadcrumbs: {
      defaultProps: {
        expandText: 'Montrer le chemin'
      }
    },
    MuiTablePagination: {
      defaultProps: {
        getItemAriaLabel: type => {
          if (type === 'first') {
            return 'Aller à la première page';
          }

          if (type === 'last') {
            return 'Aller à la dernière page';
          }

          if (type === 'next') {
            return 'Aller à la page suivante';
          } // if (type === 'previous') {


          return 'Aller à la page précédente';
        },
        labelRowsPerPage: 'Lignes par page :',
        labelDisplayedRows: ({
          from,
          to,
          count
        }) => `${from}-${to} sur ${count !== -1 ? count : `plus que ${to}`}`
      }
    },
    MuiRating: {
      defaultProps: {
        getLabelText: value => `${value} Etoile${value !== 1 ? 's' : ''}`,
        emptyLabelText: 'Vide'
      }
    },
    MuiAutocomplete: {
      defaultProps: {
        clearText: 'Vider',
        closeText: 'Fermer',
        loadingText: 'Chargement…',
        noOptionsText: 'Pas de résultats',
        openText: 'Ouvrir'
      }
    },
    MuiAlert: {
      defaultProps: {
        closeText: 'Fermer'
      }
    },
    MuiPagination: {
      defaultProps: {
        'aria-label': 'navigation de pagination',
        getItemAriaLabel: (type, page, selected) => {
          if (type === 'page') {
            return `${selected ? '' : 'Aller à la '}page ${page}`;
          }

          if (type === 'first') {
            return 'Aller à la première page';
          }

          if (type === 'last') {
            return 'Aller à la dernière page';
          }

          if (type === 'next') {
            return 'Aller à la page suivante';
          } // if (type === 'previous') {


          return 'Aller à la page précédente';
        }
      }
    }
  }
};
const itIT = {
  components: {
    MuiBreadcrumbs: {
      defaultProps: {
        expandText: 'Visualizza percorso'
      }
    },
    MuiTablePagination: {
      defaultProps: {
        getItemAriaLabel: type => {
          if (type === 'first') {
            return 'Vai alla prima pagina';
          }

          if (type === 'last') {
            return "Vai all'ultima pagina";
          }

          if (type === 'next') {
            return 'Vai alla pagina successiva';
          } // if (type === 'previous') {


          return 'Vai alla pagina precedente';
        },
        labelRowsPerPage: 'Righe per pagina:' // labelDisplayedRows: ({ from, to, count }) =>
        //   `${from}-${to} di ${count !== -1 ? count : `more than ${to}`}`,

      }
    },
    MuiRating: {
      defaultProps: {
        getLabelText: value => `${value} Stell${value !== 1 ? 'e' : 'a'}`,
        emptyLabelText: 'Vuoto'
      }
    },
    MuiAutocomplete: {
      defaultProps: {
        clearText: 'Svuota',
        closeText: 'Chiudi',
        loadingText: 'Caricamento in corso…',
        noOptionsText: 'Nessuna opzione',
        openText: 'Apri'
      }
    },
    MuiAlert: {
      defaultProps: {
        closeText: 'Chiudi'
      }
    },
    MuiPagination: {
      defaultProps: {
        'aria-label': 'Navigazione impaginata',
        getItemAriaLabel: (type, page, selected) => {
          if (type === 'page') {
            return `${selected ? '' : 'Vai alla '}pagina ${page}`;
          }

          if (type === 'first') {
            return 'Vai alla prima pagina';
          }

          if (type === 'last') {
            return "Vai all'ultima pagina";
          }

          if (type === 'next') {
            return 'Vai alla pagina successiva';
          } // if (type === 'previous') {


          return 'Vai alla pagina precedente';
        }
      }
    }
  }
};
const jaJP = {
  components: {
    MuiBreadcrumbs: {
      defaultProps: {
        expandText: 'すべて表示'
      }
    },
    MuiTablePagination: {
      defaultProps: {
        getItemAriaLabel: type => {
          if (type === 'first') {
            return '最初のページへ';
          }

          if (type === 'last') {
            return '最後のページへ';
          }

          if (type === 'next') {
            return '次のページへ';
          } // if (type === 'previous') {


          return '前のページへ';
        },
        labelRowsPerPage: 'ページあたりの行数:',
        labelDisplayedRows: ({
          from,
          to,
          count
        }) => `${from}～${to} / ${count !== -1 ? count : `${to}以上`}`
      }
    },
    MuiRating: {
      defaultProps: {
        getLabelText: value => `星${value}`,
        emptyLabelText: '星なし'
      }
    },
    MuiAutocomplete: {
      defaultProps: {
        clearText: 'クリア',
        closeText: '閉じる',
        loadingText: '読み込み中…',
        noOptionsText: 'データがありません',
        openText: '開く'
      }
    },
    MuiAlert: {
      defaultProps: {
        closeText: '閉じる'
      }
    },
    MuiPagination: {
      defaultProps: {
        'aria-label': 'ページ選択',
        getItemAriaLabel: (type, page, selected) => {
          if (type === 'page') {
            return `ページ${page}${selected ? '' : 'へ'}`;
          }

          if (type === 'first') {
            return '最初のページへ';
          }

          if (type === 'last') {
            return '最後のページへ';
          }

          if (type === 'next') {
            return '次のページへ';
          } // if (type === 'previous') {


          return '前のページへ';
        }
      }
    }
  }
};
const koKR = {
  components: {
    MuiBreadcrumbs: {
      defaultProps: {
        expandText: '경로 보기'
      }
    },
    MuiTablePagination: {
      defaultProps: {
        getItemAriaLabel: type => {
          if (type === 'first') {
            return '첫 번째 페이지로 이동';
          }

          if (type === 'last') {
            return '마지막 페이지로 이동';
          }

          if (type === 'next') {
            return '다음 페이지로 이동';
          } // if (type === 'previous') {


          return '이전 페이지로 이동';
        },
        labelRowsPerPage: '페이지 당 행:',
        labelDisplayedRows: ({
          from,
          to,
          count
        }) => `${from}-${to} / ${count !== -1 ? count : `${to}개 이상`}`
      }
    },
    MuiRating: {
      defaultProps: {
        getLabelText: value => `${value} 점`,
        emptyLabelText: '빈 텍스트'
      }
    },
    MuiAutocomplete: {
      defaultProps: {
        clearText: '지우기',
        closeText: '닫기',
        loadingText: '불러오는 중…',
        noOptionsText: '옵션 없음',
        openText: '열기'
      }
    },
    MuiAlert: {
      defaultProps: {
        closeText: '닫기'
      }
    },
    MuiPagination: {
      defaultProps: {
        'aria-label': '페이지네이션 네비게이션',
        getItemAriaLabel: (type, page, selected) => {
          if (type === 'page') {
            return `${page} 번째 페이지${selected ? '' : '로 이동'}`;
          }

          if (type === 'first') {
            return '첫 번째 페이지로 이동';
          }

          if (type === 'last') {
            return '마지막 페이지로 이동';
          }

          if (type === 'next') {
            return '다음 페이지로 이동';
          } // if (type === 'previous') {


          return '이전 페이지로 이동';
        }
      }
    }
  }
};
const nlNL = {
  components: {
    // MuiBreadcrumbs: {
    //   defaultProps: {
    //     expandText: 'Show path',
    //   },
    // },
    MuiTablePagination: {
      defaultProps: {
        // getItemAriaLabel: (type) => {
        //   if (type === 'first') {
        //     return 'Go to first page';
        //   }
        //   if (type === 'last') {
        //     return 'Go to last page';
        //   }
        //   if (type === 'next') {
        //     return 'Go to next page';
        //   }
        //   // if (type === 'previous') {
        //   return 'Go to previous page';
        // },
        labelRowsPerPage: 'Regels per pagina :' // labelDisplayedRows: ({ from, to, count }) =>
        //   `${from}-${to} van ${count !== -1 ? count : `more than ${to}`}`,

      }
    },
    MuiRating: {
      defaultProps: {
        getLabelText: value => `${value} Ster${value !== 1 ? 'ren' : ''}` // emptyLabelText: 'Empty',

      }
    },
    MuiAutocomplete: {
      defaultProps: {
        clearText: 'Wissen',
        closeText: 'Sluiten',
        loadingText: 'Laden…',
        noOptionsText: 'Geen opties',
        openText: 'Openen'
      }
    },
    MuiAlert: {
      defaultProps: {
        closeText: 'Sluiten'
      }
    } // MuiPagination: {
    //   defaultProps: {
    //     'aria-label': 'Pagination navigation',
    //     getItemAriaLabel: (type, page, selected) => {
    //       if (type === 'page') {
    //         return `${selected ? '' : 'Go to '}page ${page}`;
    //       }
    //       if (type === 'first') {
    //         return 'Go to first page';
    //       }
    //       if (type === 'last') {
    //         return 'Go to last page';
    //       }
    //       if (type === 'next') {
    //         return 'Go to next page';
    //       }
    //       // if (type === 'previous') {
    //       return 'Go to previous page';
    //     },
    //   },
    // },

  }
};
const plPL = {
  components: {
    MuiBreadcrumbs: {
      defaultProps: {
        expandText: 'Pokaż ścieżkę'
      }
    },
    MuiTablePagination: {
      defaultProps: {
        getItemAriaLabel: type => {
          if (type === 'first') {
            return 'Przejdź do pierwszej strony';
          }

          if (type === 'last') {
            return 'Przejdź do ostatniej strony';
          }

          if (type === 'next') {
            return 'Przejdź do następnej strony';
          } // if (type === 'previous') {


          return 'Przejdź do poprzedniej strony';
        },
        labelRowsPerPage: 'Wierszy na stronę:' // labelDisplayedRows: ({ from, to, count }) =>
        //   `${from}-${to} z ${count !== -1 ? count : `more than ${to}`}`,

      }
    },
    MuiRating: {
      defaultProps: {
        getLabelText: value => {
          let pluralForm = 'gwiazdek';
          const lastDigit = value % 10;

          if ((value < 10 || value > 20) && lastDigit > 1 && lastDigit < 5) {
            pluralForm = 'gwiazdki';
          } else if (value === 1) {
            pluralForm = 'gwiazdka';
          }

          return `${value} ${pluralForm}`;
        },
        emptyLabelText: 'Brak gwiazdek'
      }
    },
    MuiAutocomplete: {
      defaultProps: {
        clearText: 'Wyczyść',
        closeText: 'Zamknij',
        loadingText: 'Ładowanie…',
        noOptionsText: 'Brak opcji',
        openText: 'Otwórz'
      }
    },
    MuiAlert: {
      defaultProps: {
        closeText: 'Zamknij'
      }
    },
    MuiPagination: {
      defaultProps: {
        'aria-label': 'Nawigacja podziału na strony',
        getItemAriaLabel: (type, page, selected) => {
          if (type === 'page') {
            return selected ? `${page}. strona` : `Przejdź do ${page}. strony`;
          }

          if (type === 'first') {
            return 'Przejdź do pierwszej strony';
          }

          if (type === 'last') {
            return 'Przejdź do ostatniej strony';
          }

          if (type === 'next') {
            return 'Przejdź do następnej strony';
          } // if (type === 'previous') {


          return 'Przejdź do poprzedniej strony';
        }
      }
    }
  }
};
const ptBR = {
  components: {
    MuiBreadcrumbs: {
      defaultProps: {
        expandText: 'Mostrar caminho'
      }
    },
    MuiTablePagination: {
      defaultProps: {
        getItemAriaLabel: type => {
          if (type === 'first') {
            return 'Ir para a primeira página';
          }

          if (type === 'last') {
            return 'Ir para a última página';
          }

          if (type === 'next') {
            return 'Ir para a próxima página';
          } // if (type === 'previous') {


          return 'Ir para a página anterior';
        },
        labelRowsPerPage: 'Linhas por página:',
        labelDisplayedRows: ({
          from,
          to,
          count
        }) => `${from}-${to} de ${count !== -1 ? count : `mais de ${to}`}`
      }
    },
    MuiRating: {
      defaultProps: {
        getLabelText: value => `${value} Estrela${value !== 1 ? 's' : ''}`,
        emptyLabelText: 'Vazio'
      }
    },
    MuiAutocomplete: {
      defaultProps: {
        clearText: 'Limpar',
        closeText: 'Fechar',
        loadingText: 'Carregando…',
        noOptionsText: 'Sem opções',
        openText: 'Abrir'
      }
    },
    MuiAlert: {
      defaultProps: {
        closeText: 'Fechar'
      }
    },
    MuiPagination: {
      defaultProps: {
        'aria-label': 'Navegar pela paginação',
        getItemAriaLabel: (type, page, selected) => {
          if (type === 'page') {
            return `${selected ? '' : 'Ir para a '}página ${page}`;
          }

          if (type === 'first') {
            return 'Ir para a primeira página';
          }

          if (type === 'last') {
            return 'Ir para a última página';
          }

          if (type === 'next') {
            return 'Ir para a próxima página';
          } // if (type === 'previous') {


          return 'Ir para a página anterior';
        }
      }
    }
  }
};
const ruRU = {
  components: {
    MuiBreadcrumbs: {
      defaultProps: {
        expandText: 'Показать полный путь'
      }
    },
    MuiTablePagination: {
      defaultProps: {
        getItemAriaLabel: type => {
          if (type === 'first') {
            return 'Перейти на первую страницу';
          }

          if (type === 'last') {
            return 'Перейти на последнюю страницу';
          }

          if (type === 'next') {
            return 'Перейти на следующую страницу';
          } // if (type === 'previous') {


          return 'Перейти на предыдущую страницу';
        },
        labelRowsPerPage: 'Строк на странице:',
        labelDisplayedRows: ({
          from,
          to,
          count
        }) => `${from}-${to} из ${count !== -1 ? count : `более чем ${to}`}`
      }
    },
    MuiRating: {
      defaultProps: {
        getLabelText: value => {
          let pluralForm = 'Звёзд';
          const lastDigit = value % 10;

          if (lastDigit > 1 && lastDigit < 5) {
            pluralForm = 'Звезды';
          } else if (lastDigit === 1) {
            pluralForm = 'Звезда';
          }

          return `${value} ${pluralForm}`;
        },
        emptyLabelText: 'Рейтинг отсутствует'
      }
    },
    MuiAutocomplete: {
      defaultProps: {
        clearText: 'Очистить',
        closeText: 'Закрыть',
        loadingText: 'Загрузка…',
        noOptionsText: 'Нет доступных вариантов',
        openText: 'Открыть'
      }
    },
    MuiAlert: {
      defaultProps: {
        closeText: 'Закрыть'
      }
    },
    MuiPagination: {
      defaultProps: {
        'aria-label': 'Навигация по страницам',
        getItemAriaLabel: (type, page, selected) => {
          if (type === 'page') {
            if (selected) {
              return `${page} страница`;
            }

            return `Перейти на ${page} страницу`;
          }

          if (type === 'first') {
            return 'Перейти на первую страницу';
          }

          if (type === 'last') {
            return 'Перейти на последнюю страницу';
          }

          if (type === 'next') {
            return 'Перейти на следующую страницу';
          } // if (type === 'previous') {


          return 'Перейти на предыдущую страницу';
        }
      }
    }
  }
};
const skSK = {
  components: {
    MuiBreadcrumbs: {
      defaultProps: {
        expandText: 'Ukázať cestu '
      }
    },
    MuiTablePagination: {
      defaultProps: {
        getItemAriaLabel: type => {
          if (type === 'first') {
            return 'Ísť na prvú stránku';
          }

          if (type === 'last') {
            return 'Ísť na poslednú stránku';
          }

          if (type === 'next') {
            return 'Ísť na ďaľšiu stránku';
          } // if (type === 'previous') {


          return 'Ísť na predchádzajúcu stránku';
        },
        labelRowsPerPage: 'Riadkov na stránke:',
        labelDisplayedRows: ({
          from,
          to,
          count
        }) => `${from}-${to} z ${count !== -1 ? count : `viac ako ${to}`}`
      }
    },
    MuiRating: {
      defaultProps: {
        getLabelText: value => {
          if (value === 1) {
            return `${value} hviezdička`;
          }

          if (value >= 2 && value <= 4) {
            return `${value} hviezdičky`;
          }

          return `${value} hviezdičiek`;
        },
        emptyLabelText: 'Prázdne'
      }
    },
    MuiAutocomplete: {
      defaultProps: {
        clearText: 'Vymazať',
        closeText: 'Zavrieť',
        loadingText: 'Načítanie…',
        noOptionsText: 'Žiadne možnosti',
        openText: 'Otvoriť'
      }
    },
    MuiAlert: {
      defaultProps: {
        closeText: 'Zavrieť'
      }
    },
    MuiPagination: {
      defaultProps: {
        'aria-label': 'Navigácia stránkovanim',
        getItemAriaLabel: (type, page, selected) => {
          if (type === 'page') {
            return `${selected ? '' : 'Ísť na '}stránku ${page}`;
          }

          if (type === 'first') {
            return 'Ísť na prvú stránku';
          }

          if (type === 'last') {
            return 'Ísť na poslednú stránku';
          }

          if (type === 'next') {
            return 'Ísť na ďaľšiu stránku';
          } // if (type === 'previous') {


          return 'Ísť na predchádzajúcu stránku';
        }
      }
    }
  }
};
const trTR = {
  components: {
    MuiBreadcrumbs: {
      defaultProps: {
        expandText: 'Yolu göster'
      }
    },
    MuiTablePagination: {
      defaultProps: {
        getItemAriaLabel: type => {
          if (type === 'first') {
            return 'İlk sayfaya git';
          }

          if (type === 'last') {
            return 'Son sayfaya git';
          }

          if (type === 'next') {
            return 'Sonraki sayfaya git';
          } // if (type === 'previous') {


          return 'Önceki sayfaya git';
        },
        labelRowsPerPage: 'Sayfa başına satır:' // labelDisplayedRows: ({ from, to, count }) =>
        //   `${from}-${to} tanesinden ${count !== -1 ? count : `more than ${to}`}`,

      }
    },
    MuiRating: {
      defaultProps: {
        getLabelText: value => `${value} Yıldız`,
        emptyLabelText: 'Boş'
      }
    },
    MuiAutocomplete: {
      defaultProps: {
        clearText: 'Temizle',
        closeText: 'Kapat',
        loadingText: 'Yükleniyor…',
        noOptionsText: 'Seçenek yok',
        openText: 'Aç'
      }
    },
    MuiAlert: {
      defaultProps: {
        closeText: 'Kapat'
      }
    },
    MuiPagination: {
      defaultProps: {
        'aria-label': 'Sayfa navigasyonu',
        getItemAriaLabel: (type, page, selected) => {
          if (type === 'page') {
            return `${page}. ${selected ? 'sayfa' : 'sayfaya git'}`;
          }

          if (type === 'first') {
            return 'İlk sayfaya git';
          }

          if (type === 'last') {
            return 'Son sayfaya git';
          }

          if (type === 'next') {
            return 'Sonraki sayfaya git';
          } // if (type === 'previous') {


          return 'Önceki sayfaya git';
        }
      }
    }
  }
};
const ukUA = {
  components: {
    MuiBreadcrumbs: {
      defaultProps: {
        expandText: 'Показати шлях сторінок'
      }
    },
    MuiTablePagination: {
      defaultProps: {
        getItemAriaLabel: type => {
          if (type === 'first') {
            return 'Перейти на першу сторінку';
          }

          if (type === 'last') {
            return 'Перейти на останню сторінку';
          }

          if (type === 'next') {
            return 'Перейти на наступну сторінку';
          } // if (type === 'previous') {


          return 'Перейти на попередню сторінку';
        },
        labelRowsPerPage: 'Рядків на сторінці:',
        labelDisplayedRows: ({
          from,
          to,
          count
        }) => `${from}-${to} з ${count !== -1 ? count : `понад ${to}`}`
      }
    },
    MuiRating: {
      defaultProps: {
        getLabelText: value => {
          let pluralForm = 'Зірок';
          const lastDigit = value % 10;

          if (lastDigit > 1 && lastDigit < 5) {
            pluralForm = 'Зірки';
          } else if (lastDigit === 1) {
            pluralForm = 'Зірка';
          }

          return `${value} ${pluralForm}`;
        },
        emptyLabelText: 'Рейтинг відсутній'
      }
    },
    MuiAutocomplete: {
      defaultProps: {
        clearText: 'Очистити',
        closeText: 'Згорнути',
        loadingText: 'Завантаження…',
        noOptionsText: 'Немає варіантів',
        openText: 'Розгорнути'
      }
    },
    MuiAlert: {
      defaultProps: {
        closeText: 'Згорнути'
      }
    },
    MuiPagination: {
      defaultProps: {
        'aria-label': 'Навігація сторінками',
        getItemAriaLabel: (type, page, selected) => {
          if (type === 'page') {
            return `${selected ? '' : 'Перейти на '}сторінку ${page}`;
          }

          if (type === 'first') {
            return 'Перейти на першу сторінку';
          }

          if (type === 'last') {
            return 'Перейти на останню сторінку';
          }

          if (type === 'next') {
            return 'Перейти на наступну сторінку';
          } // if (type === 'previous') {


          return 'Перейти на попередню сторінку';
        }
      }
    }
  }
};
const viVN = {
  components: {
    // MuiBreadcrumbs: {
    //   defaultProps: {
    //     expandText: 'Show path',
    //   },
    // },
    MuiTablePagination: {
      defaultProps: {
        // getItemAriaLabel: (type) => {
        //   if (type === 'first') {
        //     return 'Go to first page';
        //   }
        //   if (type === 'last') {
        //     return 'Go to last page';
        //   }
        //   if (type === 'next') {
        //     return 'Go to next page';
        //   }
        //   // if (type === 'previous') {
        //   return 'Go to previous page';
        // },
        labelRowsPerPage: 'Số hàng mỗi trang:',
        labelDisplayedRows: ({
          from,
          to,
          count
        }) => `${from}-${to} trong ${count !== -1 ? count : `nhiều hơn ${to}`}`
      }
    },
    MuiRating: {
      defaultProps: {
        getLabelText: value => `${value} sao`,
        emptyLabelText: 'Trống'
      }
    },
    MuiAutocomplete: {
      defaultProps: {
        clearText: 'Xóa',
        closeText: 'Đóng',
        loadingText: 'Đang tải…',
        noOptionsText: 'Không có lựa chọn',
        openText: 'Mở'
      }
    },
    MuiAlert: {
      defaultProps: {
        closeText: 'Đóng'
      }
    } // MuiPagination: {
    //   defaultProps: {
    //     'aria-label': 'Pagination navigation',
    //     getItemAriaLabel: (type, page, selected) => {
    //       if (type === 'page') {
    //         return `${selected ? '' : 'Go to '}page ${page}`;
    //       }
    //       if (type === 'first') {
    //         return 'Go to first page';
    //       }
    //       if (type === 'last') {
    //         return 'Go to last page';
    //       }
    //       if (type === 'next') {
    //         return 'Go to next page';
    //       }
    //       // if (type === 'previous') {
    //       return 'Go to previous page';
    //     },
    //   },
    // },

  }
};
const zhCN = {
  components: {
    MuiBreadcrumbs: {
      defaultProps: {
        expandText: '展开'
      }
    },
    MuiTablePagination: {
      defaultProps: {
        getItemAriaLabel: type => {
          if (type === 'first') {
            return '第一页';
          }

          if (type === 'last') {
            return '最后一页';
          }

          if (type === 'next') {
            return '下一页';
          }

          return '上一页';
        },
        labelRowsPerPage: '每页行数:',
        labelDisplayedRows: ({
          from,
          to,
          count
        }) => `第 ${from} 条到第 ${to} 条，${count !== -1 ? `共 ${count} 条` : `至少 ${to} 条`}`
      }
    },
    MuiRating: {
      defaultProps: {
        getLabelText: value => `${value} 颗星`,
        emptyLabelText: '无标签'
      }
    },
    MuiAutocomplete: {
      defaultProps: {
        clearText: '清空',
        closeText: '关闭',
        loadingText: '加载中……',
        noOptionsText: '没有可用选项',
        openText: '打开'
      }
    },
    MuiAlert: {
      defaultProps: {
        closeText: '关闭'
      }
    }
  }
};

var ue;!function(e){e.resize="resize",e.debouncedResize="debouncedResize",e.componentError="componentError",e.unmount="unmount",e.cellModeChange="cellModeChange",e.cellClick="cellClick",e.cellDoubleClick="cellDoubleClick",e.cellMouseDown="cellMouseDown",e.cellMouseUp="cellMouseUp",e.cellKeyDown="cellKeyDown",e.cellFocusIn="cellFocusIn",e.cellFocusOut="cellFocusOut",e.cellDragStart="cellDragStart",e.cellDragEnter="cellDragEnter",e.cellDragOver="cellDragOver",e.cellDragEnd="cellDragEnd",e.editCellPropsChange="editCellPropsChange",e.cellEditCommit="cellEditCommit",e.cellEditStart="cellEditStart",e.cellEditStop="cellEditStop",e.rowEditStart="rowEditStart",e.rowEditStop="rowEditStop",e.rowEditCommit="rowEditCommit",e.cellNavigationKeyDown="cellNavigationKeyDown",e.rowClick="rowClick",e.rowDoubleClick="rowDoubleClick",e.editRowsModelChange="editRowsModelChange",e.columnHeaderBlur="columnHeaderBlur",e.columnHeaderFocus="columnHeaderFocus",e.columnHeaderNavigationKeyDown="columnHeaderNavigationKeyDown",e.columnHeaderKeyDown="columnHeaderKeyDown",e.columnHeaderClick="columnHeaderClick",e.columnHeaderDoubleClick="columnHeaderDoubleClick",e.columnHeaderOver="columnHeaderOver",e.columnHeaderOut="columnHeaderOut",e.columnHeaderEnter="columnHeaderEnter",e.columnHeaderLeave="columnHeaderLeave",e.columnHeaderDragStart="columnHeaderDragStart",e.columnHeaderDragOver="columnHeaderDragOver",e.columnHeaderDragEnter="columnHeaderDragEnter",e.columnHeaderDragEnd="columnHeaderDragEnd",e.selectionChange="selectionChange",e.headerSelectionCheckboxChange="headerSelectionCheckboxChange",e.rowSelectionCheckboxChange="rowSelectionCheckboxChange",e.pageChange="pageChange",e.pageSizeChange="pageSizeChange",e.rowsScroll="rowsScroll",e.rowsScrollEnd="rowsScrollEnd",e.columnSeparatorMouseDown="columnSeparatorMouseDown",e.columnResize="columnResize",e.columnWidthChange="columnWidthChange",e.columnResizeStart="columnResizeStart",e.columnResizeStop="columnResizeStop",e.columnOrderChange="columnOrderChange",e.rowsSet="rowsSet",e.columnsChange="columnsChange",e.sortModelChange="sortModelChange",e.filterModelChange="filterModelChange",e.stateChange="stateChange",e.columnVisibilityChange="columnVisibilityChange",e.viewportRowsChange="viewportRowsChange";}(ue||(ue={}));const de=e$3.createContext(void 0);function pe(){const t=e$3.useContext(de);if(void 0===t)throw new Error(["MUI: Could not find the data grid context.","It looks like you rendered your component outside of a DataGrid or DataGridPro parent component.","This can also happen if you are bundling multiple versions of the data grid."].join("\n"));return t}const me=e=>e.columns,fe=e=>e.columns.all,be=e=>e.columns.lookup,ge=createSelector(fe,be,((e,t)=>e.map((e=>t[e])))),he=createSelector(ge,(e=>e.filter((e=>null!=e.field&&!e.hide)))),Ce=createSelector(he,(e=>{const t=[];return {totalWidth:e.reduce(((e,r)=>(t.push(e),e+r.computedWidth)),0),positions:t}})),ve=createSelector(ge,(e=>e.filter((e=>e.filterable)))),we=createSelector(ve,(e=>e.map((e=>e.field)))),Oe=createSelector(he,(e=>e.length)),ye=createSelector(Ce,(e=>e.totalWidth));function Se(e,t){return e===t||e!=e&&t!=t}function Ee(e,t){for(var r=e.length;r--;)if(Se(e[r][0],t))return r;return -1}var xe=Array.prototype.splice;function ke(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var l=e[t];this.set(l[0],l[1]);}}ke.prototype.clear=function(){this.__data__=[],this.size=0;},ke.prototype.delete=function(e){var t=this.__data__,r=Ee(t,e);return !(r<0)&&(r==t.length-1?t.pop():xe.call(t,r,1),--this.size,!0)},ke.prototype.get=function(e){var t=this.__data__,r=Ee(t,e);return r<0?void 0:t[r][1]},ke.prototype.has=function(e){return Ee(this.__data__,e)>-1},ke.prototype.set=function(e,t){var r=this.__data__,l=Ee(r,e);return l<0?(++this.size,r.push([e,t])):r[l][1]=t,this};var Me="object"==typeof global&&global&&global.Object===Object&&global,Pe="object"==typeof self&&self&&self.Object===Object&&self,Re=Me||Pe||Function("return this")(),Le=Re.Symbol,Fe=Object.prototype,Ie=Fe.hasOwnProperty,je=Fe.toString,De=Le?Le.toStringTag:void 0;var Te=Object.prototype.toString;var He=Le?Le.toStringTag:void 0;function ze(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":He&&He in Object(e)?function(e){var t=Ie.call(e,De),r=e[De];try{e[De]=void 0;var l=!0;}catch(e){}var o=je.call(e);return l&&(t?e[De]=r:delete e[De]),o}(e):function(e){return Te.call(e)}(e)}function Ae(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function $e(e){if(!Ae(e))return !1;var t=ze(e);return "[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}var Ne,_e=Re["__core-js_shared__"],Ve=(Ne=/[^.]+$/.exec(_e&&_e.keys&&_e.keys.IE_PROTO||""))?"Symbol(src)_1."+Ne:"";var Be=Function.prototype.toString;function We(e){if(null!=e){try{return Be.call(e)}catch(e){}try{return e+""}catch(e){}}return ""}var Ge=/^\[object .+?Constructor\]$/,Ue=Function.prototype,Ke=Object.prototype,Ze=Ue.toString,qe=Ke.hasOwnProperty,Ye=RegExp("^"+Ze.call(qe).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Xe(e){return !(!Ae(e)||(t=e,Ve&&Ve in t))&&($e(e)?Ye:Ge).test(We(e));var t;}function Je(e,t){var r=function(e,t){return null==e?void 0:e[t]}(e,t);return Xe(r)?r:void 0}var Qe=Je(Re,"Map"),et=Je(Object,"create");var tt=Object.prototype.hasOwnProperty;var rt=Object.prototype.hasOwnProperty;function lt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var l=e[t];this.set(l[0],l[1]);}}function ot(e,t){var r,l,o=e.__data__;return ("string"==(l=typeof(r=t))||"number"==l||"symbol"==l||"boolean"==l?"__proto__"!==r:null===r)?o["string"==typeof t?"string":"hash"]:o.map}function nt(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var l=e[t];this.set(l[0],l[1]);}}lt.prototype.clear=function(){this.__data__=et?et(null):{},this.size=0;},lt.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},lt.prototype.get=function(e){var t=this.__data__;if(et){var r=t[e];return "__lodash_hash_undefined__"===r?void 0:r}return tt.call(t,e)?t[e]:void 0},lt.prototype.has=function(e){var t=this.__data__;return et?void 0!==t[e]:rt.call(t,e)},lt.prototype.set=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=et&&void 0===t?"__lodash_hash_undefined__":t,this},nt.prototype.clear=function(){this.size=0,this.__data__={hash:new lt,map:new(Qe||ke),string:new lt};},nt.prototype.delete=function(e){var t=ot(this,e).delete(e);return this.size-=t?1:0,t},nt.prototype.get=function(e){return ot(this,e).get(e)},nt.prototype.has=function(e){return ot(this,e).has(e)},nt.prototype.set=function(e,t){var r=ot(this,e),l=r.size;return r.set(e,t),this.size+=r.size==l?0:1,this};function at(e){var t=this.__data__=new ke(e);this.size=t.size;}at.prototype.clear=function(){this.__data__=new ke,this.size=0;},at.prototype.delete=function(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r},at.prototype.get=function(e){return this.__data__.get(e)},at.prototype.has=function(e){return this.__data__.has(e)},at.prototype.set=function(e,t){var r=this.__data__;if(r instanceof ke){var l=r.__data__;if(!Qe||l.length<199)return l.push([e,t]),this.size=++r.size,this;r=this.__data__=new nt(l);}return r.set(e,t),this.size=r.size,this};function it(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new nt;++t<r;)this.add(e[t]);}function st(e,t){for(var r=-1,l=null==e?0:e.length;++r<l;)if(t(e[r],r,e))return !0;return !1}it.prototype.add=it.prototype.push=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},it.prototype.has=function(e){return this.__data__.has(e)};function ct(e,t,r,l,o,n){var a=1&r,i=e.length,s=t.length;if(i!=s&&!(a&&s>i))return !1;var c=n.get(e);if(c&&n.get(t))return c==t;var u=-1,d=!0,p=2&r?new it:void 0;for(n.set(e,t),n.set(t,e);++u<i;){var m=e[u],f=t[u];if(l)var b=a?l(f,m,u,t,e,n):l(m,f,u,e,t,n);if(void 0!==b){if(b)continue;d=!1;break}if(p){if(!st(t,(function(e,t){if(a=t,!p.has(a)&&(m===e||o(m,e,r,l,n)))return p.push(t);var a;}))){d=!1;break}}else if(m!==f&&!o(m,f,r,l,n)){d=!1;break}}return n.delete(e),n.delete(t),d}var ut=Re.Uint8Array;function dt(e){var t=-1,r=Array(e.size);return e.forEach((function(e,l){r[++t]=[l,e];})),r}function pt(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e;})),r}var mt=Le?Le.prototype:void 0,ft=mt?mt.valueOf:void 0;var bt=Array.isArray;var gt=Object.prototype.propertyIsEnumerable,ht=Object.getOwnPropertySymbols,Ct=ht?function(e){return null==e?[]:(e=Object(e),function(e,t){for(var r=-1,l=null==e?0:e.length,o=0,n=[];++r<l;){var a=e[r];t(a,r,e)&&(n[o++]=a);}return n}(ht(e),(function(t){return gt.call(e,t)})))}:function(){return []};function vt(e){return null!=e&&"object"==typeof e}function wt(e){return vt(e)&&"[object Arguments]"==ze(e)}var Ot=Object.prototype,yt=Ot.hasOwnProperty,St=Ot.propertyIsEnumerable,Et=wt(function(){return arguments}())?wt:function(e){return vt(e)&&yt.call(e,"callee")&&!St.call(e,"callee")};var xt="object"==typeof exports&&exports&&!exports.nodeType&&exports,kt=xt&&"object"==typeof module&&module&&!module.nodeType&&module,Mt=kt&&kt.exports===xt?Re.Buffer:void 0,Pt=(Mt?Mt.isBuffer:void 0)||function(){return !1},Rt=/^(?:0|[1-9]\d*)$/;function Lt(e,t){var r=typeof e;return !!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&Rt.test(e))&&e>-1&&e%1==0&&e<t}function Ft(e){return "number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}var It={};It["[object Float32Array]"]=It["[object Float64Array]"]=It["[object Int8Array]"]=It["[object Int16Array]"]=It["[object Int32Array]"]=It["[object Uint8Array]"]=It["[object Uint8ClampedArray]"]=It["[object Uint16Array]"]=It["[object Uint32Array]"]=!0,It["[object Arguments]"]=It["[object Array]"]=It["[object ArrayBuffer]"]=It["[object Boolean]"]=It["[object DataView]"]=It["[object Date]"]=It["[object Error]"]=It["[object Function]"]=It["[object Map]"]=It["[object Number]"]=It["[object Object]"]=It["[object RegExp]"]=It["[object Set]"]=It["[object String]"]=It["[object WeakMap]"]=!1;var jt,Dt="object"==typeof exports&&exports&&!exports.nodeType&&exports,Tt=Dt&&"object"==typeof module&&module&&!module.nodeType&&module,Ht=Tt&&Tt.exports===Dt&&Me.process,zt=function(){try{return Ht&&Ht.binding&&Ht.binding("util")}catch(e){}}(),At=zt&&zt.isTypedArray,$t=At?(jt=At,function(e){return jt(e)}):function(e){return vt(e)&&Ft(e.length)&&!!It[ze(e)]},Nt=Object.prototype.hasOwnProperty;function _t(e,t){var r=bt(e),l=!r&&Et(e),o=!r&&!l&&Pt(e),n=!r&&!l&&!o&&$t(e),a=r||l||o||n,i=a?function(e,t){for(var r=-1,l=Array(e);++r<e;)l[r]=t(r);return l}(e.length,String):[],s=i.length;for(var c in e)!t&&!Nt.call(e,c)||a&&("length"==c||o&&("offset"==c||"parent"==c)||n&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||Lt(c,s))||i.push(c);return i}var Vt=Object.prototype;var Bt=function(e,t){return function(r){return e(t(r))}}(Object.keys,Object),Wt=Object.prototype.hasOwnProperty;function Gt(e){if(r=(t=e)&&t.constructor,t!==("function"==typeof r&&r.prototype||Vt))return Bt(e);var t,r,l=[];for(var o in Object(e))Wt.call(e,o)&&"constructor"!=o&&l.push(o);return l}function Ut(e){return null!=(t=e)&&Ft(t.length)&&!$e(t)?_t(e):Gt(e);var t;}function Kt(e){return function(e,t,r){var l=t(e);return bt(e)?l:function(e,t){for(var r=-1,l=t.length,o=e.length;++r<l;)e[o+r]=t[r];return e}(l,r(e))}(e,Ut,Ct)}var Zt=Object.prototype.hasOwnProperty;var qt=Je(Re,"DataView"),Yt=Je(Re,"Promise"),Xt=Je(Re,"Set"),Jt=Je(Re,"WeakMap"),Qt=We(qt),er=We(Qe),tr=We(Yt),rr=We(Xt),lr=We(Jt),or=ze;(qt&&"[object DataView]"!=or(new qt(new ArrayBuffer(1)))||Qe&&"[object Map]"!=or(new Qe)||Yt&&"[object Promise]"!=or(Yt.resolve())||Xt&&"[object Set]"!=or(new Xt)||Jt&&"[object WeakMap]"!=or(new Jt))&&(or=function(e){var t=ze(e),r="[object Object]"==t?e.constructor:void 0,l=r?We(r):"";if(l)switch(l){case Qt:return "[object DataView]";case er:return "[object Map]";case tr:return "[object Promise]";case rr:return "[object Set]";case lr:return "[object WeakMap]"}return t});var nr=or,ar="[object Object]",ir=Object.prototype.hasOwnProperty;function sr(e,t,r,l,o,n){var a=bt(e),i=bt(t),s=a?"[object Array]":nr(e),c=i?"[object Array]":nr(t),u=(s="[object Arguments]"==s?ar:s)==ar,d=(c="[object Arguments]"==c?ar:c)==ar,p=s==c;if(p&&Pt(e)){if(!Pt(t))return !1;a=!0,u=!1;}if(p&&!u)return n||(n=new at),a||$t(e)?ct(e,t,r,l,o,n):function(e,t,r,l,o,n,a){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return !1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return !(e.byteLength!=t.byteLength||!n(new ut(e),new ut(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Se(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var i=dt;case"[object Set]":var s=1&l;if(i||(i=pt),e.size!=t.size&&!s)return !1;var c=a.get(e);if(c)return c==t;l|=2,a.set(e,t);var u=ct(i(e),i(t),l,o,n,a);return a.delete(e),u;case"[object Symbol]":if(ft)return ft.call(e)==ft.call(t)}return !1}(e,t,s,r,l,o,n);if(!(1&r)){var m=u&&ir.call(e,"__wrapped__"),f=d&&ir.call(t,"__wrapped__");if(m||f){var b=m?e.value():e,g=f?t.value():t;return n||(n=new at),o(b,g,r,l,n)}}return !!p&&(n||(n=new at),function(e,t,r,l,o,n){var a=1&r,i=Kt(e),s=i.length;if(s!=Kt(t).length&&!a)return !1;for(var c=s;c--;){var u=i[c];if(!(a?u in t:Zt.call(t,u)))return !1}var d=n.get(e);if(d&&n.get(t))return d==t;var p=!0;n.set(e,t),n.set(t,e);for(var m=a;++c<s;){var f=e[u=i[c]],b=t[u];if(l)var g=a?l(b,f,u,t,e,n):l(f,b,u,e,t,n);if(!(void 0===g?f===b||o(f,b,r,l,n):g)){p=!1;break}m||(m="constructor"==u);}if(p&&!m){var h=e.constructor,C=t.constructor;h==C||!("constructor"in e)||!("constructor"in t)||"function"==typeof h&&h instanceof h&&"function"==typeof C&&C instanceof C||(p=!1);}return n.delete(e),n.delete(t),p}(e,t,r,l,o,n))}function cr(e,t,r,l,o){return e===t||(null==e||null==t||!vt(e)&&!vt(t)?e!=e&&t!=t:sr(e,t,r,l,cr,o))}function ur(e,t){return cr(e,t)}function dr(e){return "function"==typeof e}function pr(){try{const e="__some_random_key_you_are_not_going_to_use__";return window.localStorage.setItem(e,e),window.localStorage.removeItem(e),!0}catch(e){return !1}}function mr(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}function fr(t,r){const l=e$3.useRef(null);if(l.current)return l.current;const o=t.current.getLogger(r);return l.current=o,o}function br(t,r,l){const o=fr(t,"useGridApiMethod"),n=e$3.useRef(r),[a]=e$3.useState(Object.keys(r)),i=e$3.useCallback((()=>{t.current&&a.forEach((e=>{t.current.hasOwnProperty(e)||(o.debug(`Adding ${l}.${e} to apiRef`),t.current[e]=(...t)=>n.current[e](...t));}));}),[a,l,t,o]);e$3.useEffect((()=>{n.current=r;}),[r]),e$3.useEffect((()=>{i();}),[i]),i();}const gr=t=>{const r=fr(t,"useGridApi"),[,l]=e$3.useState();t.current.state||(r.info("Initialising state."),t.current.state={},t.current.forceUpdate=l);const o=e$3.useCallback((e=>{let r;r=dr(e)?e(t.current.state):e,t.current.state=r,l((()=>r)),t.current.publishEvent(ue.stateChange,r);}),[t]);return br(t,{setState:o},"GridStateApi"),t.current},hr=t=>{gr(t);const r=e$3.useCallback((()=>t.current.forceUpdate((()=>t.current.state))),[t]),l=e$3.useCallback((e=>{const r=e(t.current.state);if(t.current.state===r)return !1;const{ignoreSetState:l,postUpdate:o}=t.current.applyControlStateConstraint(r);return l||(t.current.state=r,t.current.publishEvent&&t.current.publishEvent(ue.stateChange,r)),o(),!l}),[t]);return [t.current.state,l,r]},Cr=(e,t)=>{const[r]=hr(e);return t(r)},vr=e=>e.rendering,wr=createSelector(vr,(e=>e.realScroll));function Or(e){return useEventCallback$1(e)}const yr="undefined"!=typeof window?e$3.useLayoutEffect:e$3.useEffect;function Sr(e,t,r){const l={};return Object.keys(e).forEach((o=>{l[o]=e[o].reduce(((e,l)=>(l&&(r&&r[l]&&e.push(r[l]),e.push(t(l))),e)),[]).join(" ");})),l}const Er={active:"Mui-active",checked:"Mui-checked",disabled:"Mui-disabled",error:"Mui-error",focused:"Mui-focused",focusVisible:"Mui-focusVisible",required:"Mui-required",expanded:"Mui-expanded",selected:"Mui-selected"};function xr(e,t){return Er[t]||`${e}-${t}`}function kr(e,t){const r={};return t.forEach((t=>{r[t]=xr(e,t);})),r}function Mr(e){return xr("MuiDataGrid",e)}const Pr=kr("MuiDataGrid",["actionsCell","autoHeight","booleanCell","cell--editable","cell--editing","cell--textCenter","cell--textLeft","cell--textRight","cell--withRenderer","cell","cellCheckbox","checkboxInput","columnHeader--alignCenter","columnHeader--alignLeft","columnHeader--alignRight","columnHeader--dragging","columnHeader--moving","columnHeader--numeric","columnHeader--sortable","columnHeader--sorted","columnHeader","columnHeaderCheckbox","columnHeaderDraggableContainer","columnHeaderDropZone","columnHeaderTitle","columnHeaderTitleContainer","columnHeaderWrapper","columnsContainer","columnSeparator--resizable","columnSeparator--resizing","columnSeparator","dataContainer","editBooleanCell","editInputCell","filterIcon","footerContainer","iconButtonContainer","iconSeparator","main","menuIcon","menuIconButton","menuOpen","overlay","renderingZone","root","root","row--editable","row--editing","row","rowCount","scrollArea--left","scrollArea--right","scrollArea","selectedRowCount","sortIcon","toolbarContainer","viewport","window","windowContainer","withBorder"]),Rr=e$3.createContext(void 0);const Lr=()=>{const t=e$3.useContext(Rr);if(!t)throw new Error("MUI: useGridRootProps should only be used inside the DataGrid/DataGridPro component.");return t};const Fr=e$3.memo((function({width:t,height:r}){const l=(e=>{const{classes:t}=e;return Sr({root:["cell"]},Mr,t)})({classes:Lr().classes});return t&&r?e$3.createElement("div",{style:{minWidth:t,maxWidth:t,lineHeight:r-1+"px",minHeight:r,maxHeight:r},className:l.root}):null}));var Ir;function jr(t,r,l,o){const n=e$3.useRef(null),a=e$3.useRef();if(a.current=l,!n.current&&a.current){const e=(e,t,r)=>{var l;t.defaultMuiPrevented||null===(l=a.current)||void 0===l||l.call(a,e,t,r);};n.current=t.current.subscribeEvent(r,e,o);}else !a.current&&n.current&&(n.current(),n.current=null);e$3.useEffect((()=>()=>{var e;null===(e=n.current)||void 0===e||e.call(n);}),[]);}!function(e){e.DataGrid="DataGrid",e.DataGridPro="DataGridPro";}(Ir||(Ir={}));const Dr={isFirst:!0};function Tr(e,t,r){jr(e,t,r,Dr);}const Hr=e$3.memo((function(t){const{scrollDirection:r}=t,l=e$3.useRef(null),o=pe(),n=e$3.useRef(),[a,i]=e$3.useState(!1),s=e$3.useRef({left:0,top:0}),c=Lr(),u=(e=>{const{scrollDirection:t,classes:r}=e;return Sr({root:["scrollArea",`scrollArea__${t}`]},Mr,r)})(Object.assign(Object.assign({},t),{classes:c.classes})),d=e$3.useCallback((e=>{s.current=e;}),[]),p=e$3.useCallback((e=>{let t;if("left"===r)t=e.clientX-l.current.getBoundingClientRect().right;else {if("right"!==r)throw new Error("MUI: Wrong drag direction");t=Math.max(1,e.clientX-l.current.getBoundingClientRect().left);}t=1.5*(t-1)+1,clearTimeout(n.current),n.current=setTimeout((()=>{o.current.scroll({left:s.current.left+t,top:s.current.top});}));}),[r,o]);e$3.useEffect((()=>()=>{clearTimeout(n.current);}),[]);const m=e$3.useCallback((()=>{i((e=>!e));}),[]);return jr(o,ue.rowsScroll,d),jr(o,ue.columnHeaderDragStart,m),jr(o,ue.columnHeaderDragEnd,m),a?e$3.createElement("div",{ref:l,className:u.root,onDragOver:p}):null})),zr=e=>e.rows,Ar=createSelector(zr,(e=>e.totalRowCount)),$r=createSelector(zr,(e=>e.idRowsLookup)),Nr=createSelector(zr,(e=>e.allRows));createSelector(zr,(e=>e.allRows.map((t=>e.idRowsLookup[t]))));const Vr=e=>e.sorting,Br=createSelector(Vr,Nr,((e,t)=>e.sortedRows.length?e.sortedRows:t)),Wr=createSelector(Br,$r,((e,t)=>{const r=new Map;return e.forEach((e=>{r.set(e,t[e]);})),r})),Gr=createSelector(Vr,(e=>e.sortModel)),Ur=createSelector(Gr,(e=>e.reduce(((t,r,l)=>(t[r.field]={sortDirection:r.sort,sortIndex:e.length>1?l+1:void 0},t)),{}))),Kr=e=>e.filter,Zr=createSelector(Kr,(e=>e.filterModel)),qr=createSelector(Kr,(e=>e.visibleRowsLookup)),Yr=createSelector(qr,Wr,((e,t)=>{const r=new Map;return t.forEach(((t,l)=>{!1!==e[l]&&r.set(l,t);})),r})),Xr=createSelector(Yr,(e=>[...e.entries()])),Jr=createSelector(Yr,(e=>[...e.keys()])),Qr=createSelector(Kr,Ar,((e,t)=>null==e.visibleRows?t:e.visibleRows.length)),el=createSelector(Zr,be,((e,t)=>{var r;return null===(r=e.items)||void 0===r?void 0:r.filter((e=>{var r,l;if(!e.columnField)return !1;const o=t[e.columnField];if(!(null==o?void 0:o.filterOperators)||0===(null===(r=null==o?void 0:o.filterOperators)||void 0===r?void 0:r.length))return !1;const n=o.filterOperators.find((t=>t.value===e.operatorValue));return !!n&&(!n.InputComponent||null!=e.value&&""!==(null===(l=e.value)||void 0===l?void 0:l.toString()))}))})),tl=createSelector(el,(e=>e.length)),rl=createSelector(el,(e=>e.reduce(((e,t)=>(e[t.columnField]?e[t.columnField].push(t):e[t.columnField]=[t],e)),{}))),ll=e=>e.focus,ol=createSelector(ll,(e=>e.cell)),nl=createSelector(ll,(e=>e.columnHeader)),al=e=>e.tabIndex,il=createSelector(al,(e=>e.cell)),sl=createSelector(al,(e=>e.columnHeader)),cl=e=>e.density,ul=createSelector(cl,(e=>e.value)),dl=createSelector(cl,(e=>e.rowHeight)),pl=createSelector(cl,(e=>e.headerHeight)),ml=e=>e.columnMenu;const fl=e$3.memo((function(t){const{direction:r,index:l}=t,o=pe(),n=Lr(),a=(e=>{const{classes:t}=e;return Sr({root:["iconButtonContainer"],icon:["sortIcon"]},Mr,t)})(Object.assign(Object.assign({},t),{classes:n.classes})),i=function(t,r,l){let o=t.ColumnUnsortedIcon;return "asc"===r?o=t.ColumnSortedAscendingIcon:"desc"===r&&(o=t.ColumnSortedDescendingIcon),o?e$3.createElement(o,{fontSize:"small",className:l}):null}(n.components,r,a.icon);if(!i)return null;const s=e$3.createElement(O,{tabIndex:-1,"aria-label":o.current.getLocaleText("columnHeaderSortIconLabel"),title:o.current.getLocaleText("columnHeaderSortIconLabel"),size:"small"},i);return e$3.createElement("div",{className:a.root},null!=l&&e$3.createElement(w,{badgeContent:l,color:"default"},s),null==l&&s)}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function bl(e,t){var r={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(r[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(l=Object.getOwnPropertySymbols(e);o<l.length;o++)t.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(e,l[o])&&(r[l[o]]=e[l[o]]);}return r}function gl(e,t,r,l){return new(r||(r=Promise))((function(o,n){function a(e){try{s(l.next(e));}catch(e){n(e);}}function i(e){try{s(l.throw(e));}catch(e){n(e);}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t);}))).then(a,i);}s((l=l.apply(e,t||[])).next());}))}function hl(e){return null!=e&&e.classList.contains(Pr.columnHeader)}function Cl(e){return e.replace(/["\\]/g,"\\$&")}function vl(e,t){return e.querySelector(`.${Pr.row}[data-id="${Cl(String(t))}"]`)}const wl=e$3.forwardRef((function(t,r){const{className:o}=t,n=bl(t,["className"]),a=(e=>{const{classes:t}=e;return Sr({root:["columnHeaderTitle"]},Mr,t)})({classes:Lr().classes});return e$3.createElement("div",Object.assign({ref:r,className:l$2(a.root,o)},n))}));function Ol(t){const{label:r,description:l,columnWidth:o}=t,n=e$3.useRef(null),[a,i]=e$3.useState("");return e$3.useEffect((()=>{if(!l&&n&&n.current){const t=(e=n.current).scrollHeight>e.clientHeight||e.scrollWidth>e.clientWidth;i(t?r:"");}var e;}),[n,o,l,r]),e$3.createElement(y,{title:l||a},e$3.createElement(wl,{ref:n},r))}const yl=e$3.memo((function(t){const{resizable:r,resizing:l,height:o}=t,n=bl(t,["resizable","resizing","height"]),a=Lr(),i=(e=>{const{resizable:t,resizing:r,classes:l}=e;return Sr({root:["columnSeparator",t&&"columnSeparator--resizable",r&&"columnSeparator--resizing"],icon:["iconSeparator"]},Mr,l)})(Object.assign(Object.assign({},t),{classes:a.classes})),s=e$3.useCallback((e=>{e.preventDefault(),e.stopPropagation();}),[]);return e$3.createElement("div",Object.assign({className:i.root,style:{minHeight:o,opacity:a.showColumnRightBorder?0:1}},n,{onClick:s}),e$3.createElement(a.components.ColumnResizeIcon,{className:i.icon}))})),Sl=e$3.memo((t=>{const{column:r,open:l,columnMenuId:o,columnMenuButtonId:n,iconButtonRef:a}=t,i=pe(),s=Lr(),c=(e=>{const{classes:t,open:r}=e;return Sr({root:["menuIcon",r&&"menuOpen"],button:["menuIconButton"]},Mr,t)})(Object.assign(Object.assign({},t),{classes:s.classes})),u=e$3.useCallback((e=>{e.preventDefault(),e.stopPropagation(),i.current.toggleColumnMenu(r.field);}),[i,r.field]);return e$3.createElement("div",{className:c.root},e$3.createElement(O,{ref:a,tabIndex:-1,className:c.button,"aria-label":i.current.getLocaleText("columnMenuLabel"),title:i.current.getLocaleText("columnMenuLabel"),size:"small",onClick:u,"aria-expanded":l?"true":void 0,"aria-haspopup":"true","aria-controls":o,id:n},e$3.createElement(s.components.ColumnMenuIcon,{fontSize:"small"})))})),El=e=>e.preferencePanel;var kl;!function(e){e.filters="filters",e.columns="columns";}(kl||(kl={}));function Ml(t){const{counter:r}=t,l=pe(),o=Lr(),n=(e=>{const{classes:t}=e;return Sr({container:["iconButtonContainer"],icon:["filterIcon"]},Mr,t)})(Object.assign(Object.assign({},t),{classes:o.classes})),a=e$3.useCallback((e=>{e.preventDefault(),e.stopPropagation();const{open:t,openedPanelValue:r}=El(l.current.state);t&&r===kl.filters?l.current.hideFilterPanel():l.current.showFilterPanel();}),[l]);if(!r)return null;const i=e$3.createElement(O,{onClick:a,color:"default","aria-label":l.current.getLocaleText("columnHeaderFiltersLabel"),size:"small",tabIndex:-1},e$3.createElement(o.components.ColumnFilteredIcon,{className:n.icon,fontSize:"small"}));return e$3.createElement(y,{title:l.current.getLocaleText("columnHeaderFiltersTooltipActive")(r),enterDelay:1e3},e$3.createElement("div",{className:n.container},r>1&&e$3.createElement(w,{badgeContent:r,color:"default"},i),1===r&&i))}const Pl=makeStyles((e=>({root:{zIndex:e.zIndex.modal,"& .MuiDataGrid-gridMenuList":{outline:0}}})),{name:"MuiGridMenu",defaultTheme:createTheme()}),Rl={"bottom-start":"top left","bottom-end":"top right"},Ll=t=>{const{open:r,target:l,onClickAway:o,children:n,position:a}=t,i=bl(t,["open","target","onClickAway","children","position"]),s=e$3.useRef(l),c=e$3.useRef(r),u=Pl();return e$3.useEffect((()=>{c.current&&s.current&&s.current.focus(),c.current=r,s.current=l;}),[r,l]),e$3.createElement(M,Object.assign({className:u.root,open:r,anchorEl:l,transition:!0,placement:a},i),(({TransitionProps:t,placement:r})=>e$3.createElement(ClickAwayListener,{onClickAway:o},e$3.createElement(x,Object.assign({},t,{style:{transformOrigin:Rl[r]}}),e$3.createElement(k,null,n)))))};function Fl({columnMenuId:t,columnMenuButtonId:r,ContentComponent:l,contentComponentProps:o,field:n,open:a,target:i}){const s=pe(),c=s.current.getColumn(n),u=e$3.useCallback((e=>{e.stopPropagation(),s.current.hideColumnMenu();}),[s]);return i?e$3.createElement(Ll,{placement:"bottom-"+("right"===c.align?"start":"end"),open:a,target:i,onClickAway:u},e$3.createElement(l,Object.assign({currentColumn:c,hideMenu:u,open:a,id:t,labelledby:r},o))):null}function Il(t){var r,o;const{column:n,columnMenuOpen:i,colIndex:s,headerHeight:c,isResizing:u,isLastColumn:d,sortDirection:p,sortIndex:m,filterItemsCounter:f,hasFocus:b,tabIndex:g,hasScrollX:h,hasScrollY:C,extendRowFullWidth:v}=t,w=pe(),O=Lr(),y=e$3.useRef(null),S=unstable_useId(),E=unstable_useId(),x=e$3.useRef(null);let k=null;n.renderHeader&&(k=n.renderHeader(w.current.getColumnHeaderParams(n.field)));const M=e$3.useCallback((e=>t=>w.current.publishEvent(e,w.current.getColumnHeaderParams(n.field),t)),[w,n.field]),P=e$3.useMemo((()=>({onClick:M(ue.columnHeaderClick),onDoubleClick:M(ue.columnHeaderDoubleClick),onMouseOver:M(ue.columnHeaderOver),onMouseOut:M(ue.columnHeaderOut),onMouseEnter:M(ue.columnHeaderEnter),onMouseLeave:M(ue.columnHeaderLeave),onKeyDown:M(ue.columnHeaderKeyDown),onFocus:M(ue.columnHeaderFocus),onBlur:M(ue.columnHeaderBlur)})),[M]),R=e$3.useMemo((()=>({onDragStart:M(ue.columnHeaderDragStart),onDragEnter:M(ue.columnHeaderDragEnter),onDragOver:M(ue.columnHeaderDragOver),onDragEnd:M(ue.columnHeaderDragEnd)})),[M]),L=e$3.useMemo((()=>({onMouseDown:M(ue.columnSeparatorMouseDown)})),[M]),F=d?!(d&&h&&!C)&&!v:O.showColumnRightBorder,I=(e=>{const{column:t,classes:r,isDragging:l,sortDirection:o,showRightBorder:n}=e,a=null!=o,i="number"===t.type;return Sr({root:["columnHeader","left"===t.headerAlign&&"columnHeader--alignLeft","center"===t.headerAlign&&"columnHeader--alignCenter","right"===t.headerAlign&&"columnHeader--alignRight",t.sortable&&"columnHeader--sortable",l&&"columnHeader--moving",a&&"columnHeader--sorted",i&&"columnHeader--numeric",n&&"withBorder"],draggableContainer:["columnHeaderDraggableContainer"],titleContainer:["columnHeaderTitleContainer"]},Mr,r)})(Object.assign(Object.assign({},t),{classes:O.classes,showRightBorder:F})),j=n.computedWidth;let D;null!=p&&(D={"aria-sort":"asc"===p?"ascending":"descending"});const T=!O.disableColumnMenu&&!n.disableColumnMenu&&e$3.createElement(Sl,{column:n,columnMenuId:S,columnMenuButtonId:E,open:i,iconButtonRef:x}),H=e$3.createElement(e$3.Fragment,null,!O.disableColumnFilter&&e$3.createElement(Ml,{counter:f}),n.sortable&&!n.hideSortIcons&&e$3.createElement(fl,{direction:p,index:m}));e$3.useLayoutEffect((()=>{const e=w.current.state.columnMenu;if(b&&!e.open){const e=y.current.querySelector('[tabindex="0"]');e?e.focus():y.current.focus();}}));const z="function"==typeof n.headerClassName?n.headerClassName({field:n.field,colDef:n}):n.headerClassName;return e$3.createElement("div",Object.assign({ref:y,className:l$2(I.root,z),key:n.field,"data-field":n.field,style:{width:j,minWidth:j,maxWidth:j},role:"columnheader",tabIndex:g,"aria-colindex":s+1},D,P),e$3.createElement("div",Object.assign({className:I.draggableContainer,draggable:!O.disableColumnReorder&&!n.disableReorder},R),e$3.createElement("div",{className:I.titleContainer},k||e$3.createElement(Ol,{label:null!==(r=n.headerName)&&void 0!==r?r:n.field,description:n.description,columnWidth:j}),H),T),e$3.createElement(yl,Object.assign({resizable:!O.disableColumnResize&&!!n.resizable,resizing:u,height:c},L)),e$3.createElement(Fl,{columnMenuId:S,columnMenuButtonId:E,field:n.field,open:i,target:x.current,ContentComponent:O.components.ColumnMenu,contentComponentProps:null===(o=O.componentsProps)||void 0===o?void 0:o.columnMenu}))}const jl=e=>e.containerSizes,Dl=e=>e.viewportSizes,Tl=e=>e.scrollBar,Hl=createSelector(jl,(e=>null==e?null:e.dataContainerSizes)),zl=createSelector(jl,(e=>null==e?0:e.dataContainerSizes.height));function Al(t){const{columns:r,dragCol:l,resizeCol:o}=t,n=pe(),a=Cr(n,Ur),i=Cr(n,rl),s=Cr(n,nl),c=Cr(n,vr).renderContext,u=Cr(n,sl),d=Cr(n,il),p=Cr(n,pl),m=Cr(n,ml),f=Cr(n,Tl),b=Lr(),g=r.map(((t,n)=>{const g=(h=n,null==c?h:h+c.firstColIdx);var h;const C=0===g,v=!(null===u&&null===d),w=null!==u&&u.field===t.field||C&&!v?0:-1,O=null!==s&&s.field===t.field,y=m.open&&m.field===t.field;return e$3.createElement(Il,Object.assign({key:t.field},a[t.field],{columnMenuOpen:y,filterItemsCounter:i[t.field]&&i[t.field].length,headerHeight:p,isDragging:t.field===l,column:t,colIndex:g,isResizing:o===t.field,isLastColumn:g===r.length-1,extendRowFullWidth:!b.disableExtendRowFullWidth,hasScrollX:f.hasScrollX,hasScrollY:f.hasScrollY,hasFocus:O,tabIndex:w}))}));return e$3.createElement(e$3.Fragment,null,g)}const $l=e=>e.scrollBar,Nl=e$3.forwardRef((function(t,r){var o;const[n,a]=e$3.useState(""),[i,s]=e$3.useState(""),c=pe(),u=Cr(c,he),d=Cr(c,jl),p=Cr(c,pl),m=Cr(c,vr).renderContext,{hasScrollX:f}=Cr(c,$l),b=(e=>{const{dragCol:t,classes:r}=e;return Sr({wrapper:["columnHeaderWrapper",t&&"columnHeaderDropZone"]},Mr,r)})({dragCol:n,classes:Lr().classes}),g=e$3.useMemo((()=>null==m?[]:u.slice(m.firstColIdx,m.lastColIdx+1)),[u,m]),h=e$3.useCallback((e=>s(e.field)),[]),C=e$3.useCallback((()=>s("")),[]),v=e$3.useCallback((e=>a(e.field)),[]),w=e$3.useCallback((()=>a("")),[]);return jr(c,ue.columnResizeStart,h),jr(c,ue.columnResizeStop,C),jr(c,ue.columnHeaderDragStart,v),jr(c,ue.columnHeaderDragEnd,w),e$3.createElement(e$3.Fragment,null,e$3.createElement(Hr,{scrollDirection:"left"}),e$3.createElement("div",{ref:r,className:l$2(b.wrapper,f&&"scroll"),"aria-rowindex":1,role:"row",style:{minWidth:null===(o=null==d?void 0:d.totalSizes)||void 0===o?void 0:o.width}},e$3.createElement(Fr,{width:null==m?void 0:m.leftEmptyWidth,height:p}),e$3.createElement(Al,{columns:g,dragCol:n,resizeCol:i}),e$3.createElement(Fr,{width:null==m?void 0:m.rightEmptyWidth,height:p})),e$3.createElement(Hr,{scrollDirection:"right"}))})),_l=e$3.forwardRef((function(t,r){const{className:o,style:n}=t,a=bl(t,["className","style"]),i=(e=>{const{classes:t}=e;return Sr({root:["columnsContainer"]},Mr,t)})({classes:Lr().classes}),s=pe(),c=Cr(s,pl);return e$3.createElement("div",Object.assign({ref:r,className:l$2(i.root,o)},a,{style:Object.assign({minHeight:c,maxHeight:c,lineHeight:`${c}px`},n)}))}));function Vl(t){const r=(e=>{const{classes:t}=e;return Sr({root:["main"]},Mr,t)})({classes:Lr().classes});return e$3.createElement("div",{className:r.root},t.children)}const Bl=e$3.forwardRef((function(t,r){const{className:o,size:n}=t,a=bl(t,["className","size"]),i=pe(),s=Lr(),c=Cr(i,pl),u=Cr(i,dl),d=Cr(i,zl),p=(e=>{const{classes:t}=e;return Sr({root:["windowContainer"],window:["window"]},Mr,t)})(Object.assign(Object.assign({},t),{classes:s.classes}));e$3.useEffect((()=>{i.current.resize();}),[i]);const m=e$3.useMemo((()=>{if(!s.autoHeight)return n.height;return c+(d<u?2*u:d)}),[s.autoHeight,d,c,u,n.height]);return e$3.createElement("div",{className:p.root,style:{width:n.width,height:m}},e$3.createElement("div",Object.assign({ref:r,className:l$2(p.window,o)},a,{style:{top:c,overflowY:s.autoHeight?"hidden":"auto"}})))}));function Wl(e,t){var r=function(e){var t=e.__resizeTriggers__,r=t.firstElementChild,l=t.lastElementChild,o=r.firstElementChild;l.scrollLeft=l.scrollWidth,l.scrollTop=l.scrollHeight,o.style.width=r.offsetWidth+1+"px",o.style.height=r.offsetHeight+1+"px",r.scrollLeft=r.scrollWidth,r.scrollTop=r.scrollHeight;},l=function(e){if(!(e.target.className.indexOf("contract-trigger")<0&&e.target.className.indexOf("expand-trigger")<0)){var l=this;r(this),this.__resizeRAF__&&t.cancelAnimationFrame(this.__resizeRAF__),this.__resizeRAF__=t.requestAnimationFrame((function(){(function(e){return e.offsetWidth!=e.__resizeLast__.width||e.offsetHeight!=e.__resizeLast__.height})(l)&&(l.__resizeLast__.width=l.offsetWidth,l.__resizeLast__.height=l.offsetHeight,l.__resizeListeners__.forEach((function(t){t.call(l,e);})));}));}},o=!1,n="",a="animationstart",i="Webkit Moz O ms".split(" "),s="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),c=document.createElement("fakeelement");if(void 0!==c.style.animationName&&(o=!0),!1===o)for(var u=0;u<i.length;u++)if(void 0!==c.style[i[u]+"AnimationName"]){n="-"+i[u].toLowerCase()+"-",a=s[u],o=!0;break}var d="resizeanim",p="@"+n+"keyframes "+"resizeanim { from { opacity: 0; } to { opacity: 0; } } ",m=n+"animation: 1ms "+"resizeanim; ";return {addResizeListener:function(o,n){if(!o.__resizeTriggers__){var i=o.ownerDocument,s=t.getComputedStyle(o);s&&"static"==s.position&&(o.style.position="relative"),function(t){if(!t.getElementById("muiDetectElementResize")){var r=(p||"")+".Mui-resizeTriggers { "+(m||"")+'visibility: hidden; opacity: 0; } .Mui-resizeTriggers, .Mui-resizeTriggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .Mui-resizeTriggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',l=t.head||t.getElementsByTagName("head")[0],o=t.createElement("style");o.id="muiDetectElementResize",o.type="text/css",null!=e&&o.setAttribute("nonce",e),o.styleSheet?o.styleSheet.cssText=r:o.appendChild(t.createTextNode(r)),l.appendChild(o);}}(i),o.__resizeLast__={},o.__resizeListeners__=[],(o.__resizeTriggers__=i.createElement("div")).className="Mui-resizeTriggers",o.__resizeTriggers__.innerHTML='<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>',o.appendChild(o.__resizeTriggers__),r(o),o.addEventListener("scroll",l,!0),a&&(o.__resizeTriggers__.__animationListener__=function(e){e.animationName==d&&r(o);},o.__resizeTriggers__.addEventListener(a,o.__resizeTriggers__.__animationListener__));}o.__resizeListeners__.push(n);},removeResizeListener:function(e,t){if(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1),!e.__resizeListeners__.length){e.removeEventListener("scroll",l,!0),e.__resizeTriggers__.__animationListener__&&(e.__resizeTriggers__.removeEventListener(a,e.__resizeTriggers__.__animationListener__),e.__resizeTriggers__.__animationListener__=null);try{e.__resizeTriggers__=!e.removeChild(e.__resizeTriggers__);}catch(e){}}}}}const Gl=e$3.forwardRef((function(t,r){const{children:l,defaultHeight:o=null,defaultWidth:n=null,disableHeight:a=!1,disableWidth:c=!1,nonce:u,onResize:d,style:p}=t,m=bl(t,["children","defaultHeight","defaultWidth","disableHeight","disableWidth","nonce","onResize","style"]),[f,b]=e$3.useState({height:o,width:n}),g=e$3.useRef(null),h=e$3.useRef(null),C=Or((()=>{if(h.current){const e=h.current.offsetHeight||0,t=h.current.offsetWidth||0,r=ownerWindow$1(h.current).getComputedStyle(h.current),l=parseInt(r.paddingLeft,10)||0,o=parseInt(r.paddingRight,10)||0,n=e-(parseInt(r.paddingTop,10)||0)-(parseInt(r.paddingBottom,10)||0),s=t-l-o;(!a&&f.height!==n||!c&&f.width!==s)&&(b({height:n,width:s}),d&&d({height:n,width:s}));}}));yr((()=>{var e;if(h.current=g.current.parentElement,!h)return;const t=ownerWindow$1(null!==(e=h.current)&&void 0!==e?e:void 0),r=Wl(u,t);return r.addResizeListener(h.current,C),C(),()=>{r.removeResizeListener(h.current,C);}}),[u,C]);const v={overflow:"visible"},w={};a||(v.height=0,w.height=f.height),c||(v.width=0,w.width=f.width);const O=useForkRef$1(g,r);return e$3.createElement("div",Object.assign({ref:O,style:Object.assign(Object.assign({},v),p)},m),null===f.height&&null===f.width?null:l(w))})),Ul=e=>e.editRows,Kl=e=>e.selection,Zl=createSelector(Kl,(e=>e.length)),ql=createSelector(Kl,$r,((e,t)=>new Map(e.map((e=>[e,t[e]]))))),Yl=createSelector(Kl,(e=>e.reduce(((e,t)=>(e[t]=t,e)),{})));function Xl(t){const{className:r}=t,o=bl(t,["className"]),n=pe(),a=Cr(n,Hl),i=(e=>{const{classes:t}=e;return Sr({root:["dataContainer"]},Mr,t)})({classes:Lr().classes}),s={minWidth:null==a?void 0:a.width,minHeight:null==a?void 0:a.height};return e$3.createElement("div",Object.assign({className:l$2(i.root,r),style:s},o))}const Jl=e$3.forwardRef((function(t,r){const{height:l,width:o,children:n}=t,a=(e=>{const{classes:t}=e;return Sr({root:["renderingZone"]},Mr,t)})({classes:Lr().classes});return e$3.createElement("div",{ref:r,className:a.root,style:{maxHeight:l,width:o}},n)}));function Ql(t){const{height:r,width:l,children:o}=t,n=(e=>{const{classes:t}=e;return Sr({root:["viewport"]},Mr,t)})({classes:Lr().classes});return e$3.createElement("div",{className:n.root,style:{minWidth:l,maxWidth:l,maxHeight:r}},o)}const eo=e$3.forwardRef((function(t,r){const l=pe(),o=Lr(),n=Cr(l,jl),a=Cr(l,Dl),i=Cr(l,Tl),s=Cr(l,he),c=Cr(l,vr),u=Cr(l,ol),d=Cr(l,il),p=Cr(l,Kl),m=Cr(l,Xr),f=Cr(l,dl),b=Cr(l,Ul),g=e$3.useMemo((()=>"function"==typeof o.isRowSelectable?p.filter((e=>o.isRowSelectable(l.current.getRowParams(e)))):p),[l,o.isRowSelectable,p]),h=e$3.useMemo((()=>g.reduce(((e,t)=>(e[t]=t,e)),{})),[g]);return e$3.createElement(Xl,null,e$3.createElement(Ql,Object.assign({},a),e$3.createElement(Jl,Object.assign({ref:r},(null==n?void 0:n.renderingZone)||{width:0,height:0}),(()=>{if(null==c.renderContext)return null;const t=m.slice(c.renderContext.firstRowIdx,c.renderContext.lastRowIdx),r=s.slice(c.renderContext.firstColIdx,c.renderContext.lastColIdx+1);return t.map((([t,l],n)=>{var a;return e$3.createElement(o.components.Row,Object.assign({key:t,id:t,row:l,selected:void 0!==h[t],index:c.renderContext.firstRowIdx+n,rowHeight:f,renderedColumns:r,firstColumnToRender:c.renderContext.firstColIdx,cellFocus:u,cellTabIndex:d,editRowsModel:b,scrollBarState:i,renderState:c},null===(a=o.componentsProps)||void 0===a?void 0:a.row))}))})())))}));function to(){var t,r,l;const o=pe(),n=Lr(),a=Cr(o,Ar),i=Cr(o,Qr),s=!n.loading&&0===a,c=!n.loading&&a>0&&0===i;return s?e$3.createElement(n.components.NoRowsOverlay,Object.assign({},null===(t=n.componentsProps)||void 0===t?void 0:t.noRowsOverlay)):c?e$3.createElement(n.components.NoResultsOverlay,Object.assign({},null===(r=n.componentsProps)||void 0===r?void 0:r.noResultsOverlay)):n.loading?e$3.createElement(n.components.LoadingOverlay,Object.assign({},null===(l=n.componentsProps)||void 0===l?void 0:l.loadingOverlay)):null}function ro(t){const{children:r}=t,l=pe(),o=Lr(),n=e$3.useRef(null),a=e$3.useRef(null),i=e$3.useRef(null),s=e$3.useRef(null);l.current.columnHeadersContainerElementRef=a,l.current.columnHeadersElementRef=n,l.current.windowRef=i,l.current.renderingZoneRef=s;const c=e$3.useCallback((e=>l.current.publishEvent(ue.resize,e)),[l]);return e$3.createElement(Vl,null,e$3.createElement(to,null),e$3.createElement(_l,{ref:a},e$3.createElement(Nl,{ref:n})),e$3.createElement(Gl,{nonce:o.nonce,disableHeight:o.autoHeight,onResize:c},(t=>e$3.createElement(Bl,{ref:i,size:t},e$3.createElement(eo,{ref:s})))),r)}class lo extends e$3.Component{static getDerivedStateFromError(e){return {hasError:!0,error:e}}componentDidCatch(e,t){this.props.api.current&&(this.logError(e),this.props.api.current.showError({error:e,errorInfo:t}));}logError(e,t){this.props.logger.error(`An unexpected error occurred. Error: ${e&&e.message}. `,e,t);}render(){var e;return this.props.hasError||(null===(e=this.state)||void 0===e?void 0:e.hasError)?this.props.render(this.props.componentProps||this.state):this.props.children}}function oo(t){const{children:r}=t,l=pe(),o=fr(l,"GridErrorHandler"),n=Lr(),[a]=hr(l);return e$3.createElement(lo,{hasError:null!=a.error,componentProps:a.error,api:l,logger:o,render:t=>{var r;return e$3.createElement(Vl,null,e$3.createElement(n.components.ErrorOverlay,Object.assign({},t,null===(r=n.componentsProps)||void 0===r?void 0:r.errorOverlay)))}},r)}function no(){var t;const r=pe(),l=Lr(),o=e$3.useRef(null);return r.current.footerRef=o,l.hideFooter?null:e$3.createElement("div",{ref:o},e$3.createElement(l.components.Footer,Object.assign({},null===(t=l.componentsProps)||void 0===t?void 0:t.footer)))}function ao(){var t;const r=pe(),l=Lr(),o=e$3.useRef(null);return r.current.headerRef=o,e$3.createElement("div",{ref:o},e$3.createElement(l.components.Header,Object.assign({},null===(t=l.componentsProps)||void 0===t?void 0:t.header)))}function io(t){const{item:r,applyValue:l,apiRef:o}=t,n=bl(t,["item","applyValue","apiRef"]),[a,i]=e$3.useState(r.value||""),s=e$3.useCallback((e=>{const t=e.target.value;i(t),l(Object.assign(Object.assign({},r),{value:t}));}),[l,r]);return e$3.useEffect((()=>{i(r.value||"");}),[r.value]),e$3.createElement(P,Object.assign({label:o.current.getLocaleText("filterPanelInputLabel"),value:a,onChange:s,variant:"standard",select:!0,SelectProps:{native:!0},InputLabelProps:{shrink:!0}},n),e$3.createElement("option",{value:""},o.current.getLocaleText("filterValueAny")),e$3.createElement("option",{value:"true"},o.current.getLocaleText("filterValueTrue")),e$3.createElement("option",{value:"false"},o.current.getLocaleText("filterValueFalse")))}const so=()=>[{value:"is",getApplyFilterFn:e=>{if(!e.value)return null;const t="true"===e.value;return ({value:e})=>Boolean(e)===t},InputComponent:io}],co=createSvgIcon$2(e$3.createElement("path",{d:"M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"}),"ArrowUpward"),uo=createSvgIcon$2(e$3.createElement("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward"),po=createSvgIcon$2(e$3.createElement("path",{d:"M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"}),"FilterList"),mo=createSvgIcon$2(e$3.createElement("path",{d:"M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39c.51-.66.04-1.61-.79-1.61H5.04c-.83 0-1.3.95-.79 1.61z"}),"FilterAlt");createSvgIcon$2(e$3.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");createSvgIcon$2(e$3.createElement("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu");createSvgIcon$2(e$3.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckCircle");const ho=createSvgIcon$2(e$3.createElement("path",{d:"M6 5H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm14 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-7 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z"}),"ColumnIcon"),Co=createSvgIcon$2(e$3.createElement("path",{d:"M11 19V5h2v14z"}),"Separator"),vo=createSvgIcon$2(e$3.createElement("path",{d:"M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"}),"ViewHeadline"),wo=createSvgIcon$2(e$3.createElement("path",{d:"M21,8H3V4h18V8z M21,10H3v4h18V10z M21,16H3v4h18V16z"}),"TableRows"),Oo=createSvgIcon$2(e$3.createElement("path",{d:"M4 18h17v-6H4v6zM4 5v6h17V5H4z"}),"ViewStream"),yo=createSvgIcon$2(e$3.createElement("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"TripleDotsVertical"),So=createSvgIcon$2(e$3.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),Eo=createSvgIcon$2(e$3.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add"),xo=createSvgIcon$2(e$3.createElement("path",{d:"M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"}),"Load"),ko=createSvgIcon$2(e$3.createElement("path",{d:"M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"Drag"),Mo=createSvgIcon$2(e$3.createElement("path",{d:"M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z"}),"SaveAlt"),Po=createSvgIcon$2(e$3.createElement("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check"),Ro=createSvgIcon$2(e$3.createElement("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreVert"),Lo=({valueOptions:t,valueFormatter:r,field:l},o)=>(t?["",...t]:[""]).map((t=>"object"==typeof t?e$3.createElement("option",{key:t.value,value:t.value},t.label):e$3.createElement("option",{key:t,value:t},r&&""!==t?r({value:t,field:l,api:o}):t)));function Io(t){var r;const{item:l,applyValue:o,type:n,apiRef:i}=t,s=bl(t,["item","applyValue","type","apiRef"]),c=e$3.useRef(),[u,d]=e$3.useState(null!==(r=l.value)&&void 0!==r?r:""),[p,m]=e$3.useState(!1),f=unstable_useId(),b="singleSelect"===n?{select:!0,SelectProps:{native:!0},children:Lo(i.current.getColumn(l.columnField),i.current)}:{},g=e$3.useCallback((e=>{let t=e.target.value;if("singleSelect"===n){const e=i.current.getColumn(l.columnField);t=e.valueOptions.map((e=>"object"==typeof e?e.value:e)).find((e=>String(e)===t));}clearTimeout(c.current),d(String(t)),"singleSelect"===n||""!==t?(m(!0),c.current=setTimeout((()=>{o(Object.assign(Object.assign({},l),{value:t})),m(!1);}),500)):m(!1);}),[i,o,l,n]);e$3.useEffect((()=>()=>{clearTimeout(c.current);}),[]),e$3.useEffect((()=>{var e;const t=null!==(e=l.value)&&void 0!==e?e:"";d(String(t));}),[l.value]);const h=p?{endAdornment:e$3.createElement(xo,null)}:s.InputProps;return e$3.createElement(P,Object.assign({id:f,label:i.current.getLocaleText("filterPanelInputLabel"),placeholder:i.current.getLocaleText("filterPanelInputPlaceholder"),value:u,onChange:g,type:n||"text",variant:"standard",InputProps:h,InputLabelProps:{shrink:!0}},b,s))}const jo=/(\d+)-(\d+)-(\d+)/,Do=/(\d+)-(\d+)-(\d+)T(\d+):(\d+)/;function To(e,t,r,l){if(!e.value)return null;const[o,n,a,i,s]=e.value.match(r?Do:jo).slice(1).map(Number),c=new Date(o,n-1,a,i||0,s||0).getTime();return ({value:e})=>{if(!e)return !1;const o=e instanceof Date?e:new Date(e.toString());if(l)return t(o.getTime(),c);const n=(e instanceof Date?new Date(o):o).setHours(r?o.getHours():0,r?o.getMinutes():0,0,0);return t(n,c)}}const Ho=e=>[{value:"is",getApplyFilterFn:t=>To(t,((e,t)=>e===t),e),InputComponent:Io,InputComponentProps:{type:e?"datetime-local":"date"}},{value:"not",getApplyFilterFn:t=>To(t,((e,t)=>e!==t),e),InputComponent:Io,InputComponentProps:{type:e?"datetime-local":"date"}},{value:"after",getApplyFilterFn:t=>To(t,((e,t)=>e>t),e),InputComponent:Io,InputComponentProps:{type:e?"datetime-local":"date"}},{value:"onOrAfter",getApplyFilterFn:t=>To(t,((e,t)=>e>=t),e),InputComponent:Io,InputComponentProps:{type:e?"datetime-local":"date"}},{value:"before",getApplyFilterFn:t=>To(t,((e,t)=>e<t),e,!e),InputComponent:Io,InputComponentProps:{type:e?"datetime-local":"date"}},{value:"onOrBefore",getApplyFilterFn:t=>To(t,((e,t)=>e<=t),e),InputComponent:Io,InputComponentProps:{type:e?"datetime-local":"date"}},{value:"isEmpty",getApplyFilterFn:()=>({value:e})=>null==e},{value:"isNotEmpty",getApplyFilterFn:()=>({value:e})=>null!=e}],zo=()=>[{label:"=",value:"=",getApplyFilterFn:e=>null==e.value||Number.isNaN(e.value)?null:({value:t})=>Number(t)===e.value,InputComponent:Io,InputComponentProps:{type:"number"}},{label:"!=",value:"!=",getApplyFilterFn:e=>null==e.value||Number.isNaN(e.value)?null:({value:t})=>Number(t)!==e.value,InputComponent:Io,InputComponentProps:{type:"number"}},{label:">",value:">",getApplyFilterFn:e=>null==e.value||Number.isNaN(e.value)?null:({value:t})=>Number(t)>e.value,InputComponent:Io,InputComponentProps:{type:"number"}},{label:">=",value:">=",getApplyFilterFn:e=>null==e.value||Number.isNaN(e.value)?null:({value:t})=>Number(t)>=e.value,InputComponent:Io,InputComponentProps:{type:"number"}},{label:"<",value:"<",getApplyFilterFn:e=>null==e.value||Number.isNaN(e.value)?null:({value:t})=>Number(t)<e.value,InputComponent:Io,InputComponentProps:{type:"number"}},{label:"<=",value:"<=",getApplyFilterFn:e=>null==e.value||Number.isNaN(e.value)?null:({value:t})=>Number(t)<=e.value,InputComponent:Io,InputComponentProps:{type:"number"}},{value:"isEmpty",getApplyFilterFn:()=>({value:e})=>null==e},{value:"isNotEmpty",getApplyFilterFn:()=>({value:e})=>null!=e}],Ao=()=>[{value:"is",getApplyFilterFn:e=>null==e.value||""===e.value?null:({value:t})=>"object"==typeof t?e.value===t.value:e.value===t,InputComponent:Io,InputComponentProps:{type:"singleSelect"}},{value:"not",getApplyFilterFn:e=>null==e.value||""===e.value?null:({value:t})=>"object"==typeof t?e.value!==t.value:e.value!==t,InputComponent:Io,InputComponentProps:{type:"singleSelect"}}],$o=()=>[{value:"contains",getApplyFilterFn:e=>{if(!e.value)return null;const t=new RegExp(mr(e.value),"i");return ({value:e})=>t.test(e&&e.toString()||"")},InputComponent:Io},{value:"equals",getApplyFilterFn:e=>{if(!e.value)return null;const t=new Intl.Collator(void 0,{sensitivity:"base",usage:"search"});return ({value:r})=>0===t.compare(e.value,r&&r.toString()||"")},InputComponent:Io},{value:"startsWith",getApplyFilterFn:e=>{if(!e.value)return null;const t=new RegExp(`^${mr(e.value)}.*$`,"i");return ({value:e})=>t.test(e&&e.toString()||"")},InputComponent:Io},{value:"endsWith",getApplyFilterFn:e=>{if(!e.value)return null;const t=new RegExp(`.*${mr(e.value)}$`,"i");return ({value:e})=>t.test(e&&e.toString()||"")},InputComponent:Io},{value:"isEmpty",getApplyFilterFn:()=>({value:e})=>""===e||null==e},{value:"isNotEmpty",getApplyFilterFn:()=>({value:e})=>""!==e&&null!=e}];function No(t){const{id:r,value:l,formattedValue:o,api:n,field:a,row:i,colDef:s,cellMode:c,isEditable:u,tabIndex:d,hasFocus:p,getValue:m}=t,f=bl(t,["id","value","formattedValue","api","field","row","colDef","cellMode","isEditable","tabIndex","hasFocus","getValue"]),b=e$3.useRef(),[g,h]=e$3.useState(l),C=(e=>{const{classes:t}=e;return Sr({root:["editInputCell"]},Mr,t)})({classes:Lr().classes}),v=e$3.useCallback((e=>{const t=e.target.value;h(t),n.setEditCellValue({id:r,field:a,value:t},e);}),[n,a,r]);return e$3.useEffect((()=>{h(l);}),[l]),yr((()=>{p&&b.current.focus();}),[p]),e$3.createElement(R,Object.assign({inputRef:b,className:C.root,fullWidth:!0,type:"number"===s.type?s.type:"text",value:g||"",onChange:v},f))}const _o=t=>e$3.createElement(No,Object.assign({},t)),Vo=(e,t)=>{const r=e.indexOf(t);return t&&-1!==r&&r+1!==e.length?e[r+1]:e[0]},Bo=(e,t)=>null==e&&null!=t?-1:null==t&&null!=e?1:null==e&&null==t?0:null,Wo=new Intl.Collator,Go=(e,t)=>{const r=Bo(e,t);return null!==r?r:Number(e)-Number(t)},Uo=(e,t)=>{const r=Bo(e,t);return null!==r?r:e>t?1:e<t?-1:0},Ko={width:100,minWidth:50,hide:!1,sortable:!0,resizable:!0,filterable:!0,sortComparator:(e,t)=>{const r=Bo(e,t);return null!==r?r:"string"==typeof e?Wo.compare(e.toString(),t.toString()):e-t},type:"string",align:"left",filterOperators:$o(),renderEditCell:_o},Zo=Object.assign(Object.assign({},Ko),{type:"number",align:"right",headerAlign:"right",sortComparator:Go,valueParser:e=>Number(e),valueFormatter:({value:e})=>e&&function(e){return "number"==typeof e}(e)&&e.toLocaleString()||e,filterOperators:zo()});function qo(t){const{id:r,value:l,formattedValue:o,api:n,field:a,row:i,colDef:s,cellMode:c,isEditable:u,tabIndex:d,hasFocus:p,getValue:m}=t,f=bl(t,["id","value","formattedValue","api","field","row","colDef","cellMode","isEditable","tabIndex","hasFocus","getValue"]),b=e$3.useRef(),[g,h]=e$3.useState(l),C=(e=>{const{classes:t}=e;return Sr({root:["editInputCell"]},Mr,t)})({classes:Lr().classes}),v=e$3.useCallback((e=>{const t=e.target.value;if(h(t),""===t)return void n.setEditCellValue({id:r,field:a,value:null},e);const[l,o]=t.split("T"),[i,s,c]=l.split("-"),u=new Date;if(u.setFullYear(Number(i)),u.setMonth(Number(s)-1),u.setDate(Number(c)),u.setHours(0,0,0,0),o){const[e,t]=o.split(":");u.setHours(Number(e),Number(t),0,0);}n.setEditCellValue({id:r,field:a,value:u},e);}),[n,a,r]),w="dateTime"===s.type;e$3.useEffect((()=>{h(l);}),[l]),yr((()=>{p&&b.current.focus();}),[p]);let O=g||"";if(g instanceof Date){const e=g.getTimezoneOffset();O=new Date(g.getTime()-60*e*1e3).toISOString().substr(0,w?16:10);}return e$3.createElement(R,Object.assign({inputRef:b,fullWidth:!0,className:C.root,type:w?"datetime-local":"date",value:O,onChange:v},f))}const Yo=t=>e$3.createElement(qo,Object.assign({},t));function Xo({value:e}){return e instanceof Date?e.toLocaleDateString():e}function Jo({value:e}){return e instanceof Date?e.toLocaleString():e}const Qo=Object.assign(Object.assign({},Ko),{type:"date",sortComparator:Uo,valueFormatter:Xo,filterOperators:Ho(),renderEditCell:Yo}),en=Object.assign(Object.assign({},Ko),{type:"dateTime",sortComparator:Uo,valueFormatter:Jo,filterOperators:Ho(!0),renderEditCell:Yo}),tn=e$3.memo((t=>{const{id:r,value:l,formattedValue:o,api:n,field:a,row:i,colDef:s,cellMode:c,isEditable:u,hasFocus:d,tabIndex:p,getValue:m}=t,f=bl(t,["id","value","formattedValue","api","field","row","colDef","cellMode","isEditable","hasFocus","tabIndex","getValue"]),b=Lr(),g=(e=>{const{classes:t}=e;return Sr({root:["booleanCell"]},Mr,t)})({classes:b.classes}),h=e$3.useMemo((()=>l?b.components.BooleanCellTrueIcon:b.components.BooleanCellFalseIcon),[b.components.BooleanCellFalseIcon,b.components.BooleanCellTrueIcon,l]);return e$3.createElement(h,Object.assign({fontSize:"small",className:g.root,titleAccess:n.getLocaleText(l?"booleanCellTrueLabel":"booleanCellFalseLabel"),"data-value":Boolean(l)},f))}));function rn(t){const{id:r,value:o,formattedValue:n,api:i,field:s,row:c,colDef:u,cellMode:d,isEditable:p,tabIndex:m,className:f,getValue:b,hasFocus:g}=t,h=bl(t,["id","value","formattedValue","api","field","row","colDef","cellMode","isEditable","tabIndex","className","getValue","hasFocus"]),C=e$3.useRef(null),v=unstable_useId(),[w,O]=e$3.useState(o),y=(e=>{const{classes:t}=e;return Sr({root:["editBooleanCell"]},Mr,t)})({classes:Lr().classes}),S=e$3.useCallback((e=>{const t=e.target.checked;O(t),i.setEditCellValue({id:r,field:s,value:t},e);}),[i,s,r]);return e$3.useEffect((()=>{O(o);}),[o]),yr((()=>{g&&C.current.focus();}),[g]),e$3.createElement("label",Object.assign({htmlFor:v,className:l$2(y.root,f)},h),e$3.createElement(L,{id:v,inputRef:C,checked:Boolean(w),onChange:S,size:"small"}))}const ln=Object.assign(Object.assign({},Ko),{type:"boolean",align:"center",headerAlign:"center",renderCell:t=>e$3.createElement(tn,Object.assign({},t)),renderEditCell:t=>e$3.createElement(rn,Object.assign({},t)),sortComparator:Go,valueFormatter:function({value:e,api:t}){return e?t.getLocaleText("booleanCellTrueLabel"):t.getLocaleText("booleanCellFalseLabel")},filterOperators:so()}),on=e=>"Escape"===e,nn=e=>"Enter"===e,an=e=>"Tab"===e,sn=e=>" "===e,cn=e=>0===e.indexOf("Arrow"),un=e=>"Home"===e||"End"===e,dn=e=>0===e.indexOf("Page"),pn=e=>"Delete"===e||"Backspace"===e,mn=/^(\p{L}|\p{M}\p{L}|\p{M}|\p{N}|\p{Z}|\p{S}|\p{P})$/iu,fn=e=>mn.test(e),bn=["Enter","Escape","Tab"],gn=["Enter","Tab"],hn=e=>gn.indexOf(e)>-1,Cn=e=>un(e)||cn(e)||dn(e)||sn(e),vn=e=>!!e.key,wn=e=>an(e)||on(e);var On,yn,Sn;!function(e){e.Cell="cell",e.Row="row";}(On||(On={})),function(e){e.Edit="edit",e.View="view";}(yn||(yn={})),function(e){e.Edit="edit",e.View="view";}(Sn||(Sn={}));const En=t=>"object"==typeof t?e$3.createElement(I,{key:t.value,value:t.value},t.label):e$3.createElement(I,{key:t,value:t},t);function xn(t){const{id:r,value:l,formattedValue:o,api:n,field:a,row:i,colDef:s,cellMode:c,isEditable:u,tabIndex:d,className:p,getValue:m,hasFocus:f}=t,b=bl(t,["id","value","formattedValue","api","field","row","colDef","cellMode","isEditable","tabIndex","className","getValue","hasFocus"]),g=e$3.useRef(),h=e$3.useRef(),C=Lr(),[v,w]=e$3.useState("cell"===C.editMode);let O=s.valueOptions;s.valueFormatter&&(O=s.valueOptions.map((e=>{if("object"==typeof e)return e;const t={field:a,api:n,value:e};return {value:e,label:String(s.valueFormatter(t))}})));return yr((()=>{f&&h.current.focus();}),[f]),e$3.createElement(F,Object.assign({ref:g,inputRef:h,value:l,onChange:e=>{w(!1),n.setEditCellValue({id:r,field:a,value:e.target.value},e),e.key||"cell"!==C.editMode||(n.commitCellChange({id:r,field:a},e),n.setCellMode(r,a,"view"));},open:v,onOpen:()=>{w(!0);},MenuProps:{onClose:(e,t)=>{C.editMode!==On.Row?("backdropClick"===t||on(e.key))&&n.setCellMode(r,a,"view"):w(!1);}},fullWidth:!0},b),O.map(En))}const kn=t=>e$3.createElement(xn,Object.assign({},t)),Mn=Object.assign(Object.assign({},Ko),{type:"singleSelect",renderEditCell:kn,filterOperators:Ao()}),Pn=t=>{const[r,l]=e$3.useState(!1),o=e$3.useRef(null),n=unstable_useId(),i=unstable_useId(),s=Lr(),{colDef:c,id:u,api:d,position:p="bottom-end"}=t;if(!(e=>"function"==typeof e.getActions)(c))throw new Error("MUI: Missing the `getActions` property in the `GridColDef`.");const m=()=>l(!1),f=c.getActions(d.getRowParams(u)),b=f.filter((e=>!e.props.showInMenu)),g=f.filter((e=>e.props.showInMenu));return e$3.createElement("div",{className:Pr.actionsCell},b.map(((t,r)=>e$3.cloneElement(t,{key:r}))),g.length>0&&e$3.createElement(O,{ref:o,id:i,"aria-label":d.getLocaleText("actionsCellMore"),"aria-controls":n,"aria-expanded":r?"true":void 0,"aria-haspopup":"true",size:"small",onClick:()=>l(!0)},e$3.createElement(s.components.MoreActionsIcon,{fontSize:"small"})),g.length>0&&e$3.createElement(Ll,{id:n,onClickAway:m,onClick:m,open:r,target:o.current,position:p,"aria-labelledby":i},e$3.createElement(j,{className:"MuiDataGrid-gridMenuList"},g.map(((t,r)=>e$3.cloneElement(t,{key:r}))))))},Rn=t=>e$3.createElement(Pn,Object.assign({},t)),Ln=Object.assign(Object.assign({},Ko),{sortable:!1,filterable:!1,width:100,align:"center",headerAlign:"center",headerName:"",disableColumnMenu:!0,disableExport:!0,renderCell:Rn}),In=()=>{const e={string:Ko,number:Zo,date:Qo,dateTime:en,boolean:ln,singleSelect:Mn,actions:Ln};return e.__default__=Ko,e},jn=(e,t)=>t?e[t]:e.__default__,Dn=e$3.forwardRef((function(t,r){var l;const{field:o,id:n,value:a,tabIndex:i,hasFocus:c}=t,u=pe(),d=Lr(),p=(e=>{const{classes:t}=e;return Sr({root:["checkboxInput"]},Mr,t)})({classes:d.classes}),m=e$3.useRef(null),f=useForkRef$1(m,r),b=u.current.getCellElement(n,o);e$3.useLayoutEffect((()=>{0===i&&b&&(b.tabIndex=-1);}),[b,i]),e$3.useLayoutEffect((()=>{if(c&&m.current){m.current.querySelector("input").focus();}}),[c]);const g=e$3.useCallback((e=>{sn(e.key)&&e.stopPropagation(),Cn(e.key)&&!e.shiftKey&&u.current.publishEvent(ue.cellNavigationKeyDown,t,e);}),[u,t]),h=!d.isRowSelectable||d.isRowSelectable(u.current.getRowParams(n));return e$3.createElement(d.components.Checkbox,Object.assign({ref:f,tabIndex:i,checked:!!a,onChange:e=>{const t={value:e.target.checked,id:n};u.current.publishEvent(ue.rowSelectionCheckboxChange,t,e);},onClick:e=>{e.stopPropagation();},className:p.root,color:"primary",inputProps:{"aria-label":"Select Row checkbox"},onKeyDown:g,disabled:!h},null===(l=d.componentsProps)||void 0===l?void 0:l.checkbox))})),Tn=e$3.memo(Dn),Hn=e=>e.pagination,zn=createSelector(Hn,(e=>e.page)),An=createSelector(Hn,(e=>e.pageSize)),$n=createSelector(Hn,Jr,((e,t)=>{const r=e.page*e.pageSize,l=r+e.pageSize;return t.slice(r,l)})),Nn=e$3.forwardRef((function(t,r){var l;const[,o]=e$3.useState(!1),n=pe(),a=Lr(),i=(e=>{const{classes:t}=e;return Sr({root:["checkboxInput"]},Mr,t)})({classes:a.classes}),s=Cr(n,sl),c=Cr(n,Kl),u=Cr(n,Jr),d=Cr(n,$n),p=e$3.useMemo((()=>"function"==typeof a.isRowSelectable?c.filter((e=>a.isRowSelectable(n.current.getRowParams(e)))):c),[n,a.isRowSelectable,c]),m=e$3.useMemo((()=>a.pagination&&a.checkboxSelectionVisibleOnly?d:u),[a.pagination,a.checkboxSelectionVisibleOnly,d,u]),f=e$3.useMemo((()=>p.filter((e=>m.includes(e))).length),[p,m]),b=f>0&&f<m.length,g=f>0,h=null!==s&&s.field===t.field?0:-1;e$3.useLayoutEffect((()=>{const e=n.current.getColumnHeaderElement(t.field);0===h&&e&&(e.tabIndex=-1);}),[h,n,t.field]);const C=e$3.useCallback((e=>{sn(e.key)&&e.stopPropagation(),Cn(e.key)&&!e.shiftKey&&n.current.publishEvent(ue.columnHeaderNavigationKeyDown,t,e);}),[n,t]),v=e$3.useCallback((()=>{o((e=>!e));}),[]);return e$3.useEffect((()=>n.current.subscribeEvent(ue.selectionChange,v)),[n,v]),e$3.createElement(a.components.Checkbox,Object.assign({ref:r,indeterminate:b,checked:g,onChange:e=>{const t={value:e.target.checked};n.current.publishEvent(ue.headerSelectionCheckboxChange,t);},className:i.root,color:"primary",inputProps:{"aria-label":"Select All Rows checkbox"},tabIndex:h,onKeyDown:C},null===(l=a.componentsProps)||void 0===l?void 0:l.checkbox))})),_n=Object.assign(Object.assign({},ln),{field:"__check__",type:"checkboxSelection",width:50,resizable:!1,sortable:!1,filterable:!1,disableColumnMenu:!0,disableReorder:!0,valueGetter:e=>void 0!==Yl(e.api.state)[e.id],renderHeader:t=>e$3.createElement(Nn,Object.assign({},t)),renderCell:t=>e$3.createElement(Tn,Object.assign({},t))}),Vn={client:"client",server:"server"};var Bn,Wn;function Gn(e,t,r="A row was provided without id in the rows prop:"){if(null==e)throw new Error(["MUI: The data grid component requires all rows to have a unique id property.",r,JSON.stringify(t)].join("\n"))}let Un;!function(e){e.And="and",e.Or="or";}(Bn||(Bn={})),function(e){e.Compact="compact",e.Standard="standard",e.Comfortable="comfortable";}(Wn||(Wn={}));const Kn=e$3.memo((function(t){const{align:r,children:o,colIndex:n,cellMode:a,field:i,formattedValue:s,hasFocus:c,height:p,isEditable:m,rowId:f,tabIndex:b,value:g,width:h,className:C,showRightBorder:v,extendRowFullWidth:w,row:O,onClick:y,onDoubleClick:S,onMouseDown:E,onMouseUp:x,onKeyDown:k,onDragEnter:M,onDragOver:P}=t,R=bl(t,["align","children","colIndex","cellMode","field","formattedValue","hasFocus","height","isEditable","rowId","tabIndex","value","width","className","showRightBorder","extendRowFullWidth","row","onClick","onDoubleClick","onMouseDown","onMouseUp","onKeyDown","onDragEnter","onDragOver"]),L=null==s?g:s,F=e$3.useRef(null),I=pe(),j=(e=>{const{align:t,showRightBorder:r,isEditable:l,classes:o}=e;return Sr({root:["cell",`cell--text${capitalize$1(t)}`,l&&"cell--editable",r&&"withBorder"]},Mr,o)})({align:r,showRightBorder:v,isEditable:m,classes:Lr().classes}),D=e$3.useCallback((e=>t=>{const r=I.current.getCellParams(f,i||"");I.current.publishEvent(e,r,t),x&&x(t);}),[I,i,x,f]),T=e$3.useCallback(((e,t)=>r=>{if(1===r.target.nodeType&&!r.currentTarget.contains(r.target))return;if(!I.current.getRow(f))return;const l=I.current.getCellParams(f,i||"");I.current.publishEvent(e,l,r),t&&t(r);}),[I,i,f]),H={minWidth:h,maxWidth:h,minHeight:p,maxHeight:p,lineHeight:p-1+"px"};return e$3.useLayoutEffect((()=>{if(!c||a===yn.Edit)return;const e=ownerDocument$1(I.current.rootElementRef.current);if(F.current&&!F.current.contains(e.activeElement)){const e=F.current.querySelector('[tabindex="0"]')||F.current;if(void 0===Un&&document.createElement("div").focus({get preventScroll(){return Un=!0,!1}}),Un)e.focus({preventScroll:!0});else {const t=I.current.getScrollPosition();e.focus(),I.current.scroll(t);}}})),e$3.createElement("div",Object.assign({ref:F,className:l$2(C,j.root),role:"cell","data-field":i,"data-colindex":n,"aria-colindex":n+1,style:H,tabIndex:"view"!==a&&m?-1:b,onClick:T(ue.cellClick,y),onDoubleClick:T(ue.cellDoubleClick,S),onMouseDown:T(ue.cellMouseDown,E),onMouseUp:D(ue.cellMouseUp),onKeyDown:T(ue.cellKeyDown,k),onDragEnter:T(ue.cellDragEnter,M),onDragOver:T(ue.cellDragOver,P)},R),null!=o?o:null==L?void 0:L.toString())})),qn=makeStyles((e=>{const t="light"===e.palette.mode?lighten(alpha(e.palette.divider,1),.88):darken(alpha(e.palette.divider,1),.68),r={root:Object.assign(Object.assign({flex:1,boxSizing:"border-box",position:"relative",border:`1px solid ${t}`,borderRadius:e.shape.borderRadius,color:e.palette.text.primary},e.typography.body2),{outline:"none",height:"100%",display:"flex",flexDirection:"column","@media print":{"& *::-webkit-scrollbar":{display:"none"}},[`&.${Pr.autoHeight}`]:{height:"auto"},[`& .${Pr.main}`]:{position:"relative",flexGrow:1,display:"flex",flexDirection:"column"},[`& .${Pr.overlay}`]:{display:"flex",position:"absolute",top:0,left:0,right:0,bottom:0,alignSelf:"center",alignItems:"center",justifyContent:"center",backgroundColor:alpha(e.palette.background.default,e.palette.action.disabledOpacity)},[`& .${Pr.columnsContainer}`]:{position:"absolute",top:0,left:0,right:0,overflow:"hidden",display:"flex",flexDirection:"column",borderBottom:`1px solid ${t}`},[`& .${Pr.scrollArea}`]:{position:"absolute",top:0,zIndex:101,width:20,bottom:0},[`& .${Pr["scrollArea--left"]}`]:{left:0},[`& .${Pr["scrollArea--right"]}`]:{right:0},[`& .${Pr.columnHeaderWrapper}`]:{display:"flex",width:"100%",alignItems:"center",overflow:"hidden"},[`& .${Pr.columnHeader}, & .${Pr.cell}`]:{WebkitTapHighlightColor:"transparent",lineHeight:null,padding:"0 10px",boxSizing:"border-box"},[`& .${Pr.columnHeader}:focus-within, & .${Pr.cell}:focus-within`]:{outline:`solid ${alpha(e.palette.primary.main,.5)} 1px`,outlineWidth:1,outlineOffset:-1},[`& .${Pr.columnHeader}:focus, & .${Pr.cell}:focus`]:{outline:`solid ${e.palette.primary.main} 1px`},[`& .${Pr.columnHeaderCheckbox}, & .${Pr.cellCheckbox}`]:{padding:0,justifyContent:"center",alignItems:"center"},[`& .${Pr.columnHeader}`]:{position:"relative",display:"flex",alignItems:"center"},[`& .${Pr["columnHeader--sorted"]} .${Pr.iconButtonContainer}`]:{visibility:"visible",width:"auto"},[`& .${Pr.columnHeader}:not(.${Pr["columnHeader--sorted"]}) .${Pr.sortIcon}`]:{opacity:0,transition:e.transitions.create(["opacity"],{duration:e.transitions.duration.shorter})},[`& .${Pr.columnHeader}:not(.${Pr["columnHeader--sorted"]}):hover .${Pr.sortIcon}`]:{opacity:.5},[`& .${Pr.columnHeaderTitleContainer}`]:{display:"flex",alignItems:"center",minWidth:0,flex:1,whiteSpace:"nowrap",overflow:"hidden",padding:"0 6px"},[`& .${Pr.iconButtonContainer}`]:{display:"flex",visibility:"hidden",width:0},[`& .${Pr.sortIcon}, & .${Pr.filterIcon}`]:{fontSize:"inherit"},[`& .${Pr["columnHeader--sortable"]}`]:{cursor:"pointer"},[`& .${Pr["columnHeader--alignCenter"]} .${Pr.columnHeaderTitleContainer}`]:{justifyContent:"center"},[`& .${Pr["columnHeader--alignRight"]} .${Pr.columnHeaderDraggableContainer}, & .${Pr["columnHeader--alignRight"]} .${Pr.columnHeaderTitleContainer}`]:{flexDirection:"row-reverse"},[`& .${Pr["columnHeader--alignCenter"]} .${Pr.menuIcon}, & .${Pr["columnHeader--alignRight"]} .${Pr.menuIcon}`]:{marginRight:"auto",marginLeft:-6},[`& .${Pr.columnHeaderTitle}`]:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",fontWeight:e.typography.fontWeightMedium},[`& .${Pr["columnHeader--moving"]}`]:{backgroundColor:e.palette.action.hover},[`& .${Pr.columnSeparator}`]:{position:"absolute",right:-12,zIndex:100,display:"flex",flexDirection:"column",justifyContent:"center",color:t},[`& .${Pr["columnSeparator--resizable"]}`]:{cursor:"col-resize",touchAction:"none","&:hover":{color:e.palette.text.primary,"@media (hover: none)":{color:t}},[`&.${Pr["columnSeparator--resizing"]}`]:{color:e.palette.text.primary}},[`& .${Pr.iconSeparator}`]:{color:"inherit"},[`& .${Pr.menuIcon}`]:{width:0,visibility:"hidden",fontSize:20,marginRight:-6,display:"flex",alignItems:"center"},[`& .${Pr.columnHeader}:hover`]:{[`& .${Pr.iconButtonContainer}`]:{visibility:"visible",width:"auto"},[`& .${Pr.menuIcon}`]:{width:"auto",visibility:"visible"}},[`.${Pr.menuOpen}`]:{visibility:"visible"},[`& .${Pr.columnHeaderWrapper}.scroll .${Pr.columnHeader}:last-child`]:{borderRight:"none"},[`& .${Pr.dataContainer}`]:{position:"relative",flexGrow:1,display:"flex",flexDirection:"column"},[`& .${Pr.window}`]:{position:"absolute",bottom:0,left:0,right:0,overflowX:"auto"},[`& .${Pr.viewport}`]:{position:"sticky",top:0,left:0,display:"flex",flexDirection:"column",overflow:"hidden"},[`& .${Pr.row}`]:{display:"flex",width:"fit-content","&:hover":{backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},"&.Mui-selected":{backgroundColor:alpha(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:alpha(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:alpha(e.palette.primary.main,e.palette.action.selectedOpacity)}}}},[`& .${Pr.cell}`]:{display:"block",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",borderBottom:`1px solid ${t}`},[`& .${Pr.cell}.${Pr["cell--editing"]}`]:{padding:1,display:"flex",boxShadow:e.shadows[2],backgroundColor:e.palette.background.paper,"&:focus-within":{outline:`solid ${e.palette.primary.main} 1px`,outlineOffset:"-1px"}},[`& .${Pr["row--editing"]}`]:{boxShadow:e.shadows[2]},[`& .${Pr["row--editing"]} .${Pr.cell}`]:{boxShadow:e.shadows[0],backgroundColor:e.palette.background.paper},[`& .${Pr.editInputCell}`]:Object.assign(Object.assign({},e.typography.body2),{padding:"1px 0","& input":{padding:"0 16px",height:"100%"}}),[`& .${Pr.editBooleanCell}`]:{display:"flex",height:"100%",width:"100%",alignItems:"center",justifyContent:"center"},[`& .${Pr.booleanCell}[data-value="true"]`]:{color:e.palette.text.secondary},[`& .${Pr.booleanCell}[data-value="false"]`]:{color:e.palette.text.disabled},[`& .${Pr.actionsCell}`]:{display:"inline-flex",alignItems:"center",gridGap:e.spacing(1)},[`& .${Pr.columnHeaderWrapper} .${Pr.cell}`]:{borderBottom:"none"},[`& .${Pr["cell--withRenderer"]}`]:{display:"flex",alignItems:"center"},[`& .${Pr.withBorder}`]:{borderRight:`1px solid ${t}`},[`& .${Pr["cell--textLeft"]}`]:{textAlign:"left"},[`& .${Pr["cell--textLeft"]}.${Pr["cell--withRenderer"]}, & .${Pr["cell--textLeft"]}.${Pr["cell--editing"]}`]:{justifyContent:"flex-start"},[`& .${Pr["cell--textRight"]}`]:{textAlign:"right"},[`& .${Pr["cell--textRight"]}.${Pr["cell--withRenderer"]}, & .${Pr["cell--textRight"]}.${Pr["cell--editing"]}`]:{justifyContent:"flex-end"},[`& .${Pr["cell--textCenter"]}`]:{textAlign:"center"},[`& .${Pr["cell--textCenter"]}.${Pr["cell--withRenderer"]}, & .${Pr["cell--textCenter"]}.${Pr["cell--editing"]}`]:{justifyContent:"center"},[`& .${Pr.rowCount}, & .${Pr.selectedRowCount}`]:{alignItems:"center",display:"flex",margin:e.spacing(0,2)},[`& .${Pr.footerContainer}`]:{display:"flex",justifyContent:"space-between",alignItems:"center",minHeight:52,[`& .${Pr.selectedRowCount}`]:{visibility:"hidden",width:0,height:0,[e.breakpoints.up("sm")]:{visibility:"visible",width:"auto",height:"auto"}}},[`& .${Pr.columnHeaderDropZone} .${Pr.columnHeaderDraggableContainer}`]:{cursor:"move"},[`& .${Pr.columnHeaderDraggableContainer}`]:{display:"flex",width:"100%"},[`& .${Pr["columnHeader--dragging"]}`]:{background:e.palette.background.paper,padding:"0 12px",borderRadius:e.shape.borderRadius,opacity:e.palette.action.disabledOpacity}})};if("dark"===e.palette.mode){const e="#202022",t="#585859",l="#838384";r.root=Object.assign(Object.assign({},r.root),{scrollbarColor:`${t} ${e}`,"& *::-webkit-scrollbar":{backgroundColor:e},"& *::-webkit-scrollbar-thumb":{borderRadius:8,backgroundColor:t,minHeight:24,border:`3px solid ${e}`},"& *::-webkit-scrollbar-thumb:focus":{backgroundColor:l},"& *::-webkit-scrollbar-thumb:active":{backgroundColor:l},"& *::-webkit-scrollbar-thumb:hover":{backgroundColor:l},"& *::-webkit-scrollbar-corner":{backgroundColor:e}});}return r}),{name:"MuiDataGrid",defaultTheme:createTheme()}),Yn=e$3.forwardRef((function(t,r){var o;const n=qn(),a=pe(),i=Lr(),{children:c,className:u}=t,d=bl(t,["children","className"]),p=Cr(a,Oe),m=Cr(a,Ar),f=e$3.useRef(null),b=useForkRef$1(f,r);return a.current.rootElementRef=f,e$3.createElement(NoSsr,null,e$3.createElement("div",Object.assign({ref:b,className:l$2(n.root,null===(o=i.classes)||void 0===o?void 0:o.root,i.className,u,Pr.root,{[Pr.autoHeight]:i.autoHeight}),role:"grid","aria-colcount":p,"aria-rowcount":m,"aria-multiselectable":!i.disableMultipleSelection,"aria-label":i["aria-label"],"aria-labelledby":i["aria-labelledby"],style:i.style},d),c))})),Xn=e$3.forwardRef((function(t,r){const{className:o}=t,n=bl(t,["className"]),a=(e=>{const{classes:t}=e;return Sr({root:["footerContainer"]},Mr,t)})({classes:Lr().classes});return e$3.createElement("div",Object.assign({ref:r,className:l$2(a.root,o)},n))})),Jn=e$3.forwardRef((function(t,r){const{className:o,style:n}=t,a=bl(t,["className","style"]),i=pe(),s=(e=>{const{classes:t}=e;return Sr({root:["overlay"]},Mr,t)})({classes:Lr().classes}),c=Cr(i,pl);return e$3.createElement("div",Object.assign({ref:r,className:l$2(s.root,o),style:Object.assign({top:c},n)},a))})),Qn=makeStyles({root:{display:"flex",alignItems:"center",padding:"4px 4px 0"}},{name:"MuiGridToolbarContainer",defaultTheme:createTheme()}),ea=e$3.forwardRef((function(t,r){const{className:o,children:n}=t,a=bl(t,["className","children"]),i=Qn();return n?e$3.createElement("div",Object.assign({ref:r,className:l$2(i.root,o)},a),n):null})),ta=t=>{const{onClick:r}=t,l=pe(),o=Lr(),n=e$3.useCallback((e=>{r(e),l.current.showPreferences(kl.columns);}),[l,r]);return o.disableColumnSelector?null:e$3.createElement(I,{onClick:n},l.current.getLocaleText("columnMenuShowColumns"))},ra=t=>{const{column:r,onClick:l}=t,o=pe(),n=Lr(),a=e$3.useCallback((e=>{l(e),o.current.showFilterPanel(null==r?void 0:r.field);}),[o,null==r?void 0:r.field,l]);return n.disableColumnFilter||!(null==r?void 0:r.filterable)?null:e$3.createElement(I,{onClick:a},o.current.getLocaleText("columnMenuFilter"))},la=e$3.forwardRef((function(t,r){const{hideMenu:o,currentColumn:n,open:a,id:i,labelledby:s,className:c,children:u}=t,d=bl(t,["hideMenu","currentColumn","open","id","labelledby","className","children"]),p=e$3.useCallback((e=>{an(e.key)&&e.preventDefault(),wn(e.key)&&o(e);}),[o]);return e$3.createElement(j,Object.assign({id:i,ref:r,className:l$2("MuiDataGrid-gridMenuList",c),"aria-labelledby":s,onKeyDown:p,autoFocus:a},d),u)})),oa=t=>{const{column:r,onClick:l}=t,o=pe(),n=Lr(),a=e$3.useRef(),i=e$3.useCallback((e=>{l(e),a.current=setTimeout((()=>{o.current.setColumnVisibility(null==r?void 0:r.field,!1);}),100);}),[o,null==r?void 0:r.field,l]);return e$3.useEffect((()=>()=>clearTimeout(a.current)),[]),n.disableColumnSelector?null:e$3.createElement(I,{onClick:i},o.current.getLocaleText("columnMenuHideColumn"))},na=t=>{const{column:r,onClick:l}=t,o=pe(),n=Cr(o,Gr),a=e$3.useMemo((()=>{if(!r)return null;const e=n.find((e=>e.field===r.field));return null==e?void 0:e.sort}),[r,n]),i=e$3.useCallback((e=>{l(e);const t=e.currentTarget.getAttribute("data-value")||null;o.current.sortColumn(r,t);}),[o,r,l]);return r&&r.sortable?e$3.createElement(e$3.Fragment,null,e$3.createElement(I,{onClick:i,disabled:null==a},o.current.getLocaleText("columnMenuUnsort")),e$3.createElement(I,{onClick:i,"data-value":"asc",disabled:"asc"===a},o.current.getLocaleText("columnMenuSortAsc")),e$3.createElement(I,{onClick:i,"data-value":"desc",disabled:"desc"===a},o.current.getLocaleText("columnMenuSortDesc"))):null},aa=e$3.forwardRef((function(t,r){const{hideMenu:l,currentColumn:o}=t;return e$3.createElement(la,Object.assign({ref:r},t),e$3.createElement(na,{onClick:l,column:o}),e$3.createElement(ra,{onClick:l,column:o}),e$3.createElement(oa,{onClick:l,column:o}),e$3.createElement(ta,{onClick:l,column:o}))})),ia=makeStyles((()=>({root:{display:"flex",flexDirection:"column",overflow:"auto",flex:"1 1",maxHeight:400}})),{name:"MuiGridPanelContent"});function sa(t){const r=ia(),{className:o}=t,n=bl(t,["className"]);return e$3.createElement("div",Object.assign({className:l$2(r.root,o)},n))}const ca=makeStyles((()=>({root:{padding:4,display:"flex",justifyContent:"space-between"}})),{name:"MuiGridPanelFooter"});function ua(t){const r=ca(),{className:o}=t,n=bl(t,["className"]);return e$3.createElement("div",Object.assign({className:l$2(r.root,o)},n))}const da=makeStyles((e=>({root:{padding:e.spacing(1)}})),{name:"MuiDataGridPanelHeader",defaultTheme:createTheme()});function pa(t){const r=da(),{className:o}=t,n=bl(t,["className"]);return e$3.createElement("div",Object.assign({className:l$2(r.root,o)},n))}const ma=makeStyles((()=>({root:{display:"flex",flexDirection:"column",flex:1,"&:focus":{outline:0}}})),{name:"MuiGridPanelWrapper"}),fa=()=>!0;function ba(t){const r=ma(),{className:o}=t,n=bl(t,["className"]);return e$3.createElement(Unstable_TrapFocus,{open:!0,disableEnforceFocus:!0,isEnabled:fa},e$3.createElement("div",Object.assign({tabIndex:-1,className:l$2(r.root,o)},n)))}let ga=!1;"undefined"!=typeof process&&void 0!==process.env.GRID_EXPERIMENTAL_ENABLED&&pr()&&window.localStorage.getItem("GRID_EXPERIMENTAL_ENABLED")?ga="true"===window.localStorage.getItem("GRID_EXPERIMENTAL_ENABLED"):"undefined"!=typeof process&&(ga="true"===process.env.GRID_EXPERIMENTAL_ENABLED);const ha=ga,Ca={noRowsLabel:"No rows",noResultsOverlayLabel:"No results found.",errorOverlayDefaultLabel:"An error occurred.",toolbarDensity:"Density",toolbarDensityLabel:"Density",toolbarDensityCompact:"Compact",toolbarDensityStandard:"Standard",toolbarDensityComfortable:"Comfortable",toolbarColumns:"Columns",toolbarColumnsLabel:"Select columns",toolbarFilters:"Filters",toolbarFiltersLabel:"Show filters",toolbarFiltersTooltipHide:"Hide filters",toolbarFiltersTooltipShow:"Show filters",toolbarFiltersTooltipActive:e=>1!==e?`${e} active filters`:`${e} active filter`,toolbarExport:"Export",toolbarExportLabel:"Export",toolbarExportCSV:"Download as CSV",toolbarExportPrint:"Print",columnsPanelTextFieldLabel:"Find column",columnsPanelTextFieldPlaceholder:"Column title",columnsPanelDragIconLabel:"Reorder column",columnsPanelShowAllButton:"Show all",columnsPanelHideAllButton:"Hide all",filterPanelAddFilter:"Add filter",filterPanelDeleteIconLabel:"Delete",filterPanelOperators:"Operators",filterPanelOperatorAnd:"And",filterPanelOperatorOr:"Or",filterPanelColumns:"Columns",filterPanelInputLabel:"Value",filterPanelInputPlaceholder:"Filter value",filterOperatorContains:"contains",filterOperatorEquals:"equals",filterOperatorStartsWith:"starts with",filterOperatorEndsWith:"ends with",filterOperatorIs:"is",filterOperatorNot:"is not",filterOperatorAfter:"is after",filterOperatorOnOrAfter:"is on or after",filterOperatorBefore:"is before",filterOperatorOnOrBefore:"is on or before",filterOperatorIsEmpty:"is empty",filterOperatorIsNotEmpty:"is not empty",filterValueAny:"any",filterValueTrue:"true",filterValueFalse:"false",columnMenuLabel:"Menu",columnMenuShowColumns:"Show columns",columnMenuFilter:"Filter",columnMenuHideColumn:"Hide",columnMenuUnsort:"Unsort",columnMenuSortAsc:"Sort by ASC",columnMenuSortDesc:"Sort by DESC",columnHeaderFiltersTooltipActive:e=>1!==e?`${e} active filters`:`${e} active filter`,columnHeaderFiltersLabel:"Show filters",columnHeaderSortIconLabel:"Sort",footerRowSelected:e=>1!==e?`${e.toLocaleString()} rows selected`:`${e.toLocaleString()} row selected`,footerTotalRows:"Total Rows:",footerTotalVisibleRows:(e,t)=>`${e.toLocaleString()} of ${t.toLocaleString()}`,checkboxSelectionHeaderName:"Checkbox selection",booleanCellTrueLabel:"true",booleanCellFalseLabel:"false",actionsCellMore:"more",MuiTablePagination:{}},va=makeStyles({container:{padding:"8px 0px 8px 8px"},column:{display:"flex",justifyContent:"space-between",padding:"1px 8px 1px 7px"},switch:{marginRight:4},dragIcon:{justifyContent:"flex-end"}},{name:"MuiDataGridColumnsPanel"});function wa(){const t=va(),r=pe(),l=e$3.useRef(null),o=Cr(r,ge),n=Lr(),[a,i]=e$3.useState(""),s=e$3.useCallback((e=>{const{name:t}=e.target,l=r.current.getColumn(t);r.current.setColumnVisibility(t,!!l.hide);}),[r]),c=e$3.useCallback((e=>{r.current.updateColumns(o.map((t=>(t.hide=e,t))));}),[r,o]),u=e$3.useCallback((()=>c(!1)),[c]),d=e$3.useCallback((()=>c(!0)),[c]),p=e$3.useCallback((e=>{i(e.target.value);}),[]),m=e$3.useMemo((()=>a?o.filter((e=>e.field.toLowerCase().indexOf(a.toLowerCase())>-1||e.headerName&&e.headerName.toLowerCase().indexOf(a.toLowerCase())>-1)):o),[o,a]);return e$3.useEffect((()=>{l.current.focus();}),[]),e$3.createElement(ba,null,e$3.createElement(pa,null,e$3.createElement(P,{label:r.current.getLocaleText("columnsPanelTextFieldLabel"),placeholder:r.current.getLocaleText("columnsPanelTextFieldPlaceholder"),inputRef:l,value:a,onChange:p,variant:"standard",fullWidth:!0})),e$3.createElement(sa,null,e$3.createElement("div",{className:t.container},m.map((l=>e$3.createElement("div",{key:l.field,className:t.column},e$3.createElement(A,{control:e$3.createElement(H,{className:t.switch,checked:!l.hide,onClick:s,name:l.field,color:"primary",size:"small"}),label:l.headerName||l.field}),!n.disableColumnReorder&&ha&&e$3.createElement(O,{draggable:!0,className:t.dragIcon,"aria-label":r.current.getLocaleText("columnsPanelDragIconLabel"),title:r.current.getLocaleText("columnsPanelDragIconLabel"),size:"small",disabled:!0},e$3.createElement(ko,null))))))),e$3.createElement(ua,null,e$3.createElement(z,{onClick:d,color:"primary"},r.current.getLocaleText("columnsPanelHideAllButton")),e$3.createElement(z,{onClick:u,color:"primary"},r.current.getLocaleText("columnsPanelShowAllButton"))))}const Oa=makeStyles((e=>({root:{zIndex:e.zIndex.modal},paper:{backgroundColor:e.palette.background.paper,minWidth:300,maxHeight:450,display:"flex"}})),{name:"MuiGridPanel",defaultTheme:createTheme()});kr("MuiGridPanel",["root","paper"]);const Sa=e$3.forwardRef(((t,r)=>{var o;const{children:n,className:a,open:i,classes:s}=t,c=bl(t,["children","className","open","classes"]),u=Oa(t),d=pe(),p=e$3.useCallback((()=>{d.current.hidePreferences();}),[d]),m=e$3.useCallback((e=>{on(e.key)&&d.current.hidePreferences();}),[d]),f=null===(o=d.current.columnHeadersContainerElementRef)||void 0===o?void 0:o.current;return f?e$3.createElement(M,Object.assign({ref:r,placement:"bottom-start",className:l$2(a,u.root),open:i,anchorEl:f,modifiers:[{name:"flip",enabled:!1}]},c),e$3.createElement(ClickAwayListener,{onClickAway:p},e$3.createElement(k,{className:u.paper,elevation:8,onKeyDown:m},n))):null})),Ea=e$3.forwardRef((function(t,r){var l,o,n;const a=pe(),i=Cr(a,ge),s=Lr(),c=Cr(a,El),u=c.openedPanelValue===kl.columns,d=!c.openedPanelValue||!u;return e$3.createElement(s.components.Panel,Object.assign({ref:r,open:i.length>0&&c.open},null===(l=s.componentsProps)||void 0===l?void 0:l.panel,t),!s.disableColumnSelector&&u&&e$3.createElement(s.components.ColumnsPanel,Object.assign({},null===(o=s.componentsProps)||void 0===o?void 0:o.columnsPanel)),!s.disableColumnFilter&&d&&e$3.createElement(s.components.FilterPanel,Object.assign({},null===(n=s.componentsProps)||void 0===n?void 0:n.filterPanel)))})),xa=makeStyles({root:{display:"flex",justifyContent:"space-around",padding:8},linkOperatorSelect:{minWidth:60},columnSelect:{width:150},operatorSelect:{width:120},filterValueInput:{width:190},closeIcon:{flexShrink:0,justifyContent:"flex-end",marginRight:6,marginBottom:2}},{name:"MuiGridFilterForm"});function ka(t){var r,l;const{item:o,hasMultipleFilters:n,deleteFilter:i,applyFilterChanges:s,multiFilterOperator:c,showMultiFilterOperators:u,disableMultiFilterOperator:p,applyMultiFilterOperatorChanges:m}=t,f=xa(),b=pe(),g=Cr(b,ve),h=unstable_useId(),C=unstable_useId(),v=unstable_useId(),w=unstable_useId(),y=unstable_useId(),S=unstable_useId(),E=e$3.useCallback((()=>o.columnField?b.current.getColumn(o.columnField):null),[b,o]),x=e$3.useCallback((()=>{var e;const t=E();return o.operatorValue&&t?null===(e=t.filterOperators)||void 0===e?void 0:e.find((e=>e.value===o.operatorValue)):null}),[o,E]),k=e$3.useCallback((e=>{const t=e.target.value,r=b.current.getColumn(t).filterOperators[0];s(Object.assign(Object.assign({},o),{value:void 0,columnField:t,operatorValue:r.value}));}),[b,s,o]),M=e$3.useCallback((e=>{const t=e.target.value;s(Object.assign(Object.assign({},o),{operatorValue:t}));}),[s,o]),P=e$3.useCallback((e=>{const t=e.target.value===Bn.And.toString()?Bn.And:Bn.Or;m(t);}),[m]),R=e$3.useCallback((()=>{i(o);}),[i,o]),L=x();return e$3.createElement("div",{className:f.root},e$3.createElement(N,{variant:"standard",className:f.closeIcon},e$3.createElement(O,{"aria-label":b.current.getLocaleText("filterPanelDeleteIconLabel"),title:b.current.getLocaleText("filterPanelDeleteIconLabel"),onClick:R,size:"small"},e$3.createElement(So,{fontSize:"small"}))),e$3.createElement(N,{variant:"standard",className:f.linkOperatorSelect,style:{display:n?"block":"none",visibility:u?"visible":"hidden"}},e$3.createElement(_$1,{htmlFor:h,id:C},b.current.getLocaleText("filterPanelOperators")),e$3.createElement(F,{labelId:C,id:h,value:c,onChange:P,disabled:!!p,native:!0},e$3.createElement("option",{key:Bn.And.toString(),value:Bn.And.toString()},b.current.getLocaleText("filterPanelOperatorAnd")),e$3.createElement("option",{key:Bn.Or.toString(),value:Bn.Or.toString()},b.current.getLocaleText("filterPanelOperatorOr")))),e$3.createElement(N,{variant:"standard",className:f.columnSelect},e$3.createElement(_$1,{htmlFor:v,id:w},b.current.getLocaleText("filterPanelColumns")),e$3.createElement(F,{labelId:w,id:v,value:o.columnField||"",onChange:k,native:!0},g.map((t=>e$3.createElement("option",{key:t.field,value:t.field},t.headerName||t.field))))),e$3.createElement(N,{variant:"standard",className:f.operatorSelect},e$3.createElement(_$1,{htmlFor:y,id:S},b.current.getLocaleText("filterPanelOperators")),e$3.createElement(F,{labelId:S,id:y,value:o.operatorValue,onChange:M,native:!0},null===(l=null===(r=E())||void 0===r?void 0:r.filterOperators)||void 0===l?void 0:l.map((t=>e$3.createElement("option",{key:t.value,value:t.value},t.label||b.current.getLocaleText(`filterOperator${capitalize$1(t.value)}`)))))),e$3.createElement(N,{variant:"standard",className:f.filterValueInput},(null==L?void 0:L.InputComponent)?e$3.createElement(L.InputComponent,Object.assign({apiRef:b,item:o,applyValue:s},L.InputComponentProps)):null))}function Ma(){const t=pe(),r=Lr(),l=Cr(t,Zr),o=l.items.length>1,n=e$3.useCallback((e=>{t.current.upsertFilter(e);}),[t]),a=e$3.useCallback((e=>{t.current.applyFilterLinkOperator(e);}),[t]),i=e$3.useCallback((()=>{t.current.upsertFilter({});}),[t]),s=e$3.useCallback((e=>{t.current.deleteFilter(e);}),[t]);return e$3.useEffect((()=>{0===l.items.length&&i();}),[i,l.items.length]),e$3.createElement(ba,null,e$3.createElement(sa,null,l.items.map(((t,r)=>e$3.createElement(ka,{key:null==t.id?r:t.id,item:t,applyFilterChanges:n,deleteFilter:s,hasMultipleFilters:o,showMultiFilterOperators:r>0,multiFilterOperator:l.linkOperator,disableMultiFilterOperator:1!==r,applyMultiFilterOperatorChanges:a})))),!r.disableMultipleColumnsFiltering&&e$3.createElement(ua,null,e$3.createElement(z,{onClick:i,startIcon:e$3.createElement(Eo,null),color:"primary"},t.current.getLocaleText("filterPanelAddFilter"))))}const Pa=e$3.forwardRef((function(t,r){const{onClick:l}=t,o=bl(t,["onClick"]),n=pe(),a=Lr(),{open:i,openedPanelValue:s}=Cr(n,El);return a.disableColumnSelector?null:e$3.createElement(z,Object.assign({ref:r,size:"small",color:"primary","aria-label":n.current.getLocaleText("toolbarColumnsLabel"),startIcon:e$3.createElement(a.components.ColumnSelectorIcon,null)},o,{onClick:e=>{i&&s===kl.columns?n.current.hidePreferences():n.current.showPreferences(kl.columns),null==l||l(e);}}),n.current.getLocaleText("toolbarColumns"))})),Ra=e$3.forwardRef((function(t,r){const{onClick:l}=t,o=bl(t,["onClick"]),n=pe(),i=Lr(),c=Cr(n,ul),u=unstable_useId(),d=unstable_useId(),[p,m]=e$3.useState(!1),f=e$3.useRef(null),b=useForkRef$1(r,f),g=[{icon:e$3.createElement(i.components.DensityCompactIcon,null),label:n.current.getLocaleText("toolbarDensityCompact"),value:Wn.Compact},{icon:e$3.createElement(i.components.DensityStandardIcon,null),label:n.current.getLocaleText("toolbarDensityStandard"),value:Wn.Standard},{icon:e$3.createElement(i.components.DensityComfortableIcon,null),label:n.current.getLocaleText("toolbarDensityComfortable"),value:Wn.Comfortable}],h=e$3.useMemo((()=>{switch(c){case Wn.Compact:return e$3.createElement(i.components.DensityCompactIcon,null);case Wn.Comfortable:return e$3.createElement(i.components.DensityComfortableIcon,null);default:return e$3.createElement(i.components.DensityStandardIcon,null)}}),[c,i]),C=()=>m(!1);if(i.disableDensitySelector)return null;const v=g.map(((t,r)=>e$3.createElement(I,{key:r,onClick:()=>{return e=t.value,n.current.setDensity(e),void m(!1);var e;},selected:t.value===c},e$3.createElement(D,null,t.icon),t.label)));return e$3.createElement(e$3.Fragment,null,e$3.createElement(z,Object.assign({ref:b,color:"primary",size:"small",startIcon:h,"aria-label":n.current.getLocaleText("toolbarDensityLabel"),"aria-expanded":p?"true":void 0,"aria-haspopup":"menu","aria-labelledby":d,id:u},o,{onClick:e=>{m(!0),null==l||l(e);}}),n.current.getLocaleText("toolbarDensity")),e$3.createElement(Ll,{open:p,target:f.current,onClickAway:C,position:"bottom-start"},e$3.createElement(j,{id:d,className:"MuiDataGrid-gridMenuList","aria-labelledby":u,onKeyDown:e=>{an(e.key)&&e.preventDefault(),wn(e.key)&&C();},autoFocusItem:p},v)))})),La=makeStyles((e=>({list:{margin:e.spacing(1,1,.5),padding:e.spacing(0,1)}})),{name:"MuiGridToolbarFilterButton",defaultTheme:createTheme()}),Fa=e$3.forwardRef((function(t,r){const{componentsProps:l={}}=t,o=bl(t,["componentsProps"]),n=l.button||{},a=La(),i=pe(),s=Lr(),c=Cr(i,tl),u=Cr(i,el),p=Cr(i,be),m=Cr(i,El),f=e$3.useMemo((()=>{if(m.open)return i.current.getLocaleText("toolbarFiltersTooltipHide");if(0===c)return i.current.getLocaleText("toolbarFiltersTooltipShow");return e$3.createElement("div",null,i.current.getLocaleText("toolbarFiltersTooltipActive")(c),e$3.createElement("ul",{className:a.list},u.map(((t,r)=>Object.assign({},p[t.columnField]&&e$3.createElement("li",{key:r},`${p[t.columnField].headerName||t.columnField}\n                  ${(e=>p[e.columnField].filterOperators.find((t=>t.value===e.operatorValue)).label||i.current.getLocaleText(`filterOperator${capitalize$1(e.operatorValue)}`).toString())(t)}\n                  ${t.value}`))))))}),[i,m.open,c,u,p,a]);return s.disableColumnFilter?null:e$3.createElement(y,Object.assign({title:f,enterDelay:1e3},o),e$3.createElement(z,Object.assign({ref:r,size:"small",color:"primary","aria-label":i.current.getLocaleText("toolbarFiltersLabel"),startIcon:e$3.createElement(w,{badgeContent:c,color:"primary"},e$3.createElement(s.components.OpenFilterButtonIcon,null))},n,{onClick:e=>{var t;const{open:r,openedPanelValue:l}=m;r&&l===kl.filters?i.current.hideFilterPanel():i.current.showFilterPanel(),null===(t=n.onClick)||void 0===t||t.call(n,e);}}),i.current.getLocaleText("toolbarFilters")))})),Ia=e$3.forwardRef((function(t,r){const{csvOptions:l,printOptions:o,onClick:n}=t,i=bl(t,["csvOptions","printOptions","onClick"]),c=pe(),u=Lr(),d=unstable_useId(),p=unstable_useId(),[m,f]=e$3.useState(!1),b=e$3.useRef(null),g=useForkRef$1(r,b),h=[{label:c.current.getLocaleText("toolbarExportCSV"),format:"csv",formatOptions:l},{label:c.current.getLocaleText("toolbarExportPrint"),format:"print",formatOptions:o}],C=()=>f(!1),v=e=>()=>{switch(e.format){case"csv":c.current.exportDataAsCsv(e.formatOptions);break;case"print":c.current.exportDataAsPrint(e.formatOptions);}f(!1);};return e$3.createElement(e$3.Fragment,null,e$3.createElement(z,Object.assign({ref:g,color:"primary",size:"small",startIcon:e$3.createElement(u.components.ExportIcon,null),"aria-expanded":m?"true":void 0,"aria-label":c.current.getLocaleText("toolbarExportLabel"),"aria-haspopup":"menu","aria-labelledby":p,id:d},i,{onClick:e=>{f(!0),null==n||n(e);}}),c.current.getLocaleText("toolbarExport")),e$3.createElement(Ll,{open:m,target:b.current,onClickAway:C,position:"bottom-start"},e$3.createElement(j,{id:p,className:"MuiDataGrid-gridMenuList","aria-labelledby":d,onKeyDown:e=>{an(e.key)&&e.preventDefault(),wn(e.key)&&C();},autoFocusItem:m},h.map(((t,r)=>e$3.createElement(I,{key:r,onClick:v(t)},t.label))))))}));e$3.forwardRef((function(t,r){const{className:o}=t,n=bl(t,["className"]),a=Lr(),i=(e=>{const{classes:t}=e;return Sr({root:["toolbarContainer"]},Mr,t)})({classes:a.classes});return a.disableColumnFilter&&a.disableColumnSelector&&a.disableDensitySelector?null:e$3.createElement(ea,Object.assign({ref:r,className:l$2(o,i.root)},n),e$3.createElement(Pa,null),e$3.createElement(Fa,null),e$3.createElement(Ra,null),e$3.createElement(Ia,null))}));const Da=e$3.forwardRef((function(t,r){const{className:o,rowCount:n,visibleRowCount:a}=t,i=bl(t,["className","rowCount","visibleRowCount"]),s=pe(),c=(e=>{const{classes:t}=e;return Sr({root:["rowCount"]},Mr,t)})({classes:Lr().classes});if(0===n)return null;const u=a<n?s.current.getLocaleText("footerTotalVisibleRows")(a,n):n.toLocaleString();return e$3.createElement("div",Object.assign({ref:r,className:l$2(c.root,o)},i),s.current.getLocaleText("footerTotalRows")," ",u)})),Ta=e$3.forwardRef((function(t,r){const{className:o,selectedRowCount:n}=t,a=bl(t,["className","selectedRowCount"]),i=pe(),s=(e=>{const{classes:t}=e;return Sr({root:["selectedRowCount"]},Mr,t)})({classes:Lr().classes}),c=i.current.getLocaleText("footerRowSelected")(n);return e$3.createElement("div",Object.assign({ref:r,className:l$2(s.root,o)},a),c)})),Ha=e$3.forwardRef((function(t,r){var l;const o=pe(),n=Lr(),a=Cr(o,Ar),i=Cr(o,Zl),s=Cr(o,Qr),c=!n.hideFooterSelectedRowCount&&i>0?e$3.createElement(Ta,{selectedRowCount:i}):e$3.createElement("div",null),u=n.hideFooterRowCount||n.pagination?null:e$3.createElement(Da,{rowCount:a,visibleRowCount:s}),d=n.pagination&&!n.hideFooterPagination&&n.components.Pagination&&e$3.createElement(n.components.Pagination,Object.assign({},null===(l=n.componentsProps)||void 0===l?void 0:l.pagination));return e$3.createElement(Xn,Object.assign({ref:r},t),c,u,d)})),za=e$3.forwardRef((function(t,r){var l,o;const n=Lr();return e$3.createElement("div",Object.assign({ref:r},t),e$3.createElement(n.components.PreferencesPanel,Object.assign({},null===(l=n.componentsProps)||void 0===l?void 0:l.preferencesPanel)),n.components.Toolbar&&e$3.createElement(n.components.Toolbar,Object.assign({},null===(o=n.componentsProps)||void 0===o?void 0:o.toolbar)))})),Aa=e$3.forwardRef((function(t,r){return e$3.createElement(Jn,Object.assign({ref:r},t),e$3.createElement(V,null))})),$a=e$3.forwardRef((function(t,r){const l=pe().current.getLocaleText("noRowsLabel");return e$3.createElement(Jn,Object.assign({ref:r},t),l)})),Na=makeStyles((e=>({selectLabel:{display:"none",[e.breakpoints.up("sm")]:{display:"block"}},caption:{"&[id]":{display:"none",[e.breakpoints.up("sm")]:{display:"block"}}},input:{display:"none",[e.breakpoints.up("sm")]:{display:"inline-flex"}}})),{defaultTheme:createTheme()}),_a=e$3.forwardRef((function(t,r){var n;const a=Na(),i=pe(),s=Lr(),c=Cr(i,Hn),u=e$3.useMemo((()=>Math.floor(c.rowCount/(c.pageSize||1))),[c.rowCount,c.pageSize]),d=e$3.useCallback((e=>{const t=Number(e.target.value);i.current.setPageSize(t);}),[i]),p=e$3.useCallback(((e,t)=>{i.current.setPage(t);}),[i]);return e$3.createElement(B,Object.assign({ref:r,classes:{selectLabel:a.selectLabel,input:a.input},component:"div",count:c.rowCount,page:c.page<=u?c.page:u,rowsPerPageOptions:(null===(n=s.rowsPerPageOptions)||void 0===n?void 0:n.includes(c.pageSize))?s.rowsPerPageOptions:[],rowsPerPage:c.pageSize,onPageChange:p,onRowsPerPageChange:d},i.current.getLocaleText("MuiTablePagination"),t))}));function Va(t){var r,o,n;const{selected:a,id:i,row:s,index:c,rowHeight:u,renderedColumns:d,firstColumnToRender:p,children:m,cellFocus:f,cellTabIndex:b,editRowsModel:g,scrollBarState:h,renderState:C,onClick:v,onDoubleClick:w}=t,O=bl(t,["selected","id","row","index","rowHeight","renderedColumns","firstColumnToRender","children","cellFocus","cellTabIndex","editRowsModel","scrollBarState","renderState","onClick","onDoubleClick"]),y=c+2,S=pe(),E=Lr(),x=(e=>{const{editable:t,editing:r,selected:l,classes:o}=e;return Sr({root:["row",l&&"selected",t&&"row--editable",r&&"row--editing"]},Mr,o)})(Object.assign(Object.assign({},t),{classes:E.classes,editing:S.current.getRowMode(i)===Sn.Edit,editable:E.editMode===On.Row})),k=e$3.useCallback(((e,t)=>r=>{(1!==r.target.nodeType||r.currentTarget.contains(r.target))&&S.current.getRow(i)&&(S.current.publishEvent(e,S.current.getRowParams(i),r),t&&t(r));}),[S,i]),M={maxHeight:u,minHeight:u},P="function"==typeof E.getRowClassName&&E.getRowClassName(S.current.getRowParams(i)),R=[];for(let t=0;t<d.length;t+=1){const a=d[t],s=p+t,c=s===d.length-1,m=c&&h.hasScrollX&&!h.hasScrollY,C=c?!m&&E.disableExtendRowFullWidth:E.showCellRightBorder,v=S.current.getCellParams(i,a.field),w=[];a.cellClassName&&w.push(l$2("function"==typeof a.cellClassName?a.cellClassName(v):a.cellClassName));const O=g[i]&&g[i][a.field];let y=null;if(null==O&&a.renderCell&&(y=a.renderCell(Object.assign(Object.assign({},v),{api:S.current})),w.push(l$2(Pr["cell--withRenderer"],null===(r=E.classes)||void 0===r?void 0:r["cell--withRenderer"]))),null!=O&&a.renderEditCell){const e=Object.assign(Object.assign(Object.assign({},v),O),{api:S.current});y=a.renderEditCell(e),w.push(l$2(Pr["cell--editing"],null===(o=E.classes)||void 0===o?void 0:o["cell--editing"]));}E.getCellClassName&&w.push(E.getCellClassName(v));const x=null!==f&&f.id===i&&f.field===a.field,k=null!==b&&b.id===i&&b.field===a.field&&"view"===v.cellMode?0:-1;R.push(e$3.createElement(E.components.Cell,Object.assign({key:a.field,value:v.value,field:a.field,width:a.computedWidth,rowId:i,height:u,showRightBorder:C,formattedValue:v.formattedValue,align:a.align||"left",cellMode:v.cellMode,colIndex:s,isEditable:v.isEditable,hasFocus:x,tabIndex:k,className:l$2(w)},null===(n=E.componentsProps)||void 0===n?void 0:n.cell),y));}return e$3.createElement("div",Object.assign({key:i,"data-id":i,"data-rowindex":c,role:"row",className:l$2(P,x.root),"aria-rowindex":y,"aria-selected":a,style:M,onClick:k(ue.rowClick,v),onDoubleClick:k(ue.rowDoubleClick,w)},O),e$3.createElement(Fr,{width:C.renderContext.leftEmptyWidth,height:u}),R,e$3.createElement(Fr,{width:C.renderContext.rightEmptyWidth,height:u}))}const Ba=e=>e.columnReorder;createSelector(Ba,(e=>e.dragCol));const Ga=e=>e.columnResize;createSelector(Ga,(e=>e.resizingColumnField));const Ka=()=>({items:[],linkOperator:Bn.And});class Za extends class{constructor(){this.maxListeners=10,this.warnOnce=!1,this.events={};}on(e,t){Array.isArray(this.events[e])||(this.events[e]=[]),this.events[e].push(t);}removeListener(e,t){if(Array.isArray(this.events[e])){const r=this.events[e].indexOf(t);r>-1&&this.events[e].splice(r,1);}}removeAllListeners(e){e?Array.isArray(this.events[e])&&(this.events[e]=[]):this.events={};}emit(e,...t){if(Array.isArray(this.events[e])){const r=this.events[e].slice(),l=r.length;for(let e=0;e<l;e+=1)r[e].apply(this,t);}}once(e,t){const r=this;this.on(e,(function l(...o){r.removeListener(e,l),t.apply(r,o);}));}}{on(e,t,r){Array.isArray(this.events[e])||(this.events[e]=[]),r&&r.isFirst?this.events[e].splice(0,0,t):this.events[e].push(t);}}function qa(...t){const r=t[0],l=e$3.useRef();return l.current||(l.current=new Za),e$3.useImperativeHandle(r,(()=>l.current),[l]),l}function Ya(t,r,l){const o=fr(t,"useGridScrollFn"),n=e$3.useRef();return [e$3.useCallback((e=>{var t;e.left===(null===(t=n.current)||void 0===t?void 0:t.left)&&e.top===n.current.top||r&&r.current&&(o.debug(`Moving ${r.current.className} to: ${e.left}-${e.top}`),r.current.style.transform=`translate3d(${-e.left}px, ${-e.top}px, 0px)`,l.current.style.transform=`translate3d(${-e.left}px, 0px, 0px)`,n.current=e);}),[r,o,l])]}const Ja=(t,r,l,o,n)=>{const a=fr(t,"useNativeEventListener"),[i,s]=e$3.useState(!1),c=e$3.useRef(o),u=e$3.useCallback((e=>c.current&&c.current(e)),[]);e$3.useEffect((()=>{c.current=o;}),[o]),e$3.useEffect((()=>{let e;if(e=dr(r)?r():r&&r.current?r.current:null,e&&u&&l&&!i){a.debug(`Binding native ${l} event`),e.addEventListener(l,u,n);const r=e;s(!0);const o=()=>{a.debug(`Clearing native ${l} event`),r.removeEventListener(l,u,n);};t.current.subscribeEvent(ue.unmount,o);}}),[r,u,l,i,a,n,t]);},Qa={autoHeight:!1,autoPageSize:!1,checkboxSelection:!1,checkboxSelectionVisibleOnly:!1,columnBuffer:2,density:Wn.Standard,disableExtendRowFullWidth:!1,disableColumnFilter:!1,disableColumnMenu:!1,disableColumnReorder:!1,disableColumnResize:!1,disableColumnSelector:!1,disableDensitySelector:!1,disableMultipleColumnsFiltering:!1,disableMultipleSelection:!1,disableMultipleColumnsSorting:!1,disableSelectionOnClick:!1,disableVirtualization:!1,editMode:On.Cell,filterMode:Vn.client,headerHeight:56,hideFooter:!1,hideFooterPagination:!1,hideFooterRowCount:!1,hideFooterSelectedRowCount:!1,logger:console,logLevel:"error",pagination:!1,paginationMode:Vn.client,rowHeight:52,rowsPerPageOptions:[25,50,100],scrollEndThreshold:80,showCellRightBorder:!1,showColumnRightBorder:!1,sortingOrder:["asc","desc",null],sortingMode:Vn.client,throttleRowsMs:0},ei=e$3.memo((function(t){const r=Lr(),[l]=r.sortingOrder,o="asc"===l?r.components.ColumnSortedAscendingIcon:r.components.ColumnSortedDescendingIcon;return o?e$3.createElement(o,Object.assign({},t)):null})),ti=e$3.forwardRef((function(t,r){const{message:l,hasError:o,errorInfo:n}=t,a=bl(t,["message","hasError","errorInfo"]),i=pe().current.getLocaleText("errorOverlayDefaultLabel");return e$3.createElement(Jn,Object.assign({ref:r},a),l||i)})),ri=e$3.forwardRef((function(t,r){const l=pe().current.getLocaleText("noResultsOverlayLabel");return e$3.createElement(Jn,Object.assign({ref:r},t),l)})),li={BooleanCellTrueIcon:Po,BooleanCellFalseIcon:So,ColumnMenuIcon:yo,OpenFilterButtonIcon:po,ColumnFilteredIcon:mo,ColumnSelectorIcon:ho,ColumnUnsortedIcon:ei,ColumnSortedAscendingIcon:co,ColumnSortedDescendingIcon:uo,ColumnResizeIcon:Co,DensityCompactIcon:vo,DensityStandardIcon:wo,DensityComfortableIcon:Oo,ExportIcon:Mo,MoreActionsIcon:Ro},oi=Object.assign(Object.assign({},li),{Cell:Kn,Checkbox:L,ColumnMenu:aa,ErrorOverlay:ti,Footer:Ha,Header:za,Toolbar:null,PreferencesPanel:Ea,LoadingOverlay:Aa,NoResultsOverlay:ri,NoRowsOverlay:$a,Pagination:_a,FilterPanel:Ma,ColumnsPanel:wa,Panel:Sa,Row:Va}),ni=t=>{const r=e$3.useMemo((()=>Object.assign(Object.assign({},Ca),t.localeText)),[t.localeText]),l=e$3.useMemo((()=>{const e=t.components;if(!e)return Object.assign({},oi);const r={};return Object.keys(oi).forEach((t=>{r[t]=void 0===e[t]?oi[t]:e[t];})),r}),[t.components]);return e$3.useMemo((()=>Object.assign(Object.assign(Object.assign({},Qa),t),{localeText:r,components:l})),[t,r,l])},ai=(e,t)=>{var r;return {components:{MuiDataGrid:{defaultProps:{localeText:Object.assign(Object.assign({},e),{MuiTablePagination:(null===(r=null==t?void 0:t.components)||void 0===r?void 0:r.MuiTablePagination.defaultProps)||{}})}}}}};ai({noRowsLabel:"لا توجد صفوف",noResultsOverlayLabel:"لم يتم العثور على نتائج.",errorOverlayDefaultLabel:"حدث خطأ.",toolbarDensity:"كثافة",toolbarDensityLabel:"كثافة",toolbarDensityCompact:"مدمج",toolbarDensityStandard:"المعيار",toolbarDensityComfortable:"مريح",toolbarColumns:"الأعمدة",toolbarColumnsLabel:"حدد الأعمدة",toolbarFilters:"الفلاتر",toolbarFiltersLabel:"اظهر الفلاتر",toolbarFiltersTooltipHide:"إخفاء الفلاتر",toolbarFiltersTooltipShow:"اظهر الفلاتر",toolbarFiltersTooltipActive:e=>`${e} فلاتر نشطة`,toolbarExport:"تصدير",toolbarExportLabel:"تصدير",toolbarExportCSV:"تنزيل كملف CSV",columnsPanelTextFieldLabel:"ايجاد عمود",columnsPanelTextFieldPlaceholder:"عنوان العمود",columnsPanelDragIconLabel:"إعادة ترتيب العمود",columnsPanelShowAllButton:"عرض الكل",columnsPanelHideAllButton:"اخفاء الكل",filterPanelAddFilter:"اضف فلتر",filterPanelDeleteIconLabel:"حذف",filterPanelOperators:"العاملين",filterPanelOperatorAnd:"و",filterPanelOperatorOr:"او",filterPanelColumns:"الأعمدة",filterPanelInputLabel:"قيمة",filterPanelInputPlaceholder:"قيمة التصفية",filterOperatorContains:"يحتوي على",filterOperatorEquals:"يساوي",filterOperatorStartsWith:"يبدأ ب",filterOperatorEndsWith:"ينتهي بـ",filterOperatorIs:"يكون",filterOperatorNot:"ليس",filterOperatorAfter:"يكون بعد",filterOperatorOnOrAfter:"في أو بعد",filterOperatorBefore:"يكون",filterOperatorOnOrBefore:"في أو قبل",filterOperatorIsEmpty:"فارغ",filterOperatorIsNotEmpty:"ليس فارغا",filterValueAny:"أي",filterValueTrue:"صحيح",filterValueFalse:"خاطئة",columnMenuLabel:"القائمة",columnMenuShowColumns:"إظهار الأعمدة",columnMenuFilter:"فلتر",columnMenuHideColumn:"إخفاء",columnMenuUnsort:"غير مرتب",columnMenuSortAsc:"الترتيب حسب ASC",columnMenuSortDesc:"الترتيب حسب DESC",columnHeaderFiltersTooltipActive:e=>`${e} فلاتر نشطة`,columnHeaderFiltersLabel:"اظهر الفلاتر",columnHeaderSortIconLabel:"ترتيب",footerRowSelected:e=>`${e.toLocaleString()} صفوف مختارة`,footerTotalRows:"إجمالي الصفوف:",footerTotalVisibleRows:(e,t)=>`${e.toLocaleString()} من ${t.toLocaleString()}`,checkboxSelectionHeaderName:"تحديد",booleanCellTrueLabel:"صحيح",booleanCellFalseLabel:"خاطئة"},arSD);ai({noRowsLabel:"Няма редове",errorOverlayDefaultLabel:"Възникна грешка.",toolbarDensity:"Гъстота",toolbarDensityLabel:"Гъстота",toolbarDensityCompact:"Компактна",toolbarDensityStandard:"Стандартна",toolbarDensityComfortable:"Комфортна",toolbarColumns:"Колони",toolbarColumnsLabel:"Покажи селектора на колони",toolbarFilters:"Филтри",toolbarFiltersLabel:"Покажи Филтрите",toolbarFiltersTooltipHide:"Скрий Филтрите",toolbarFiltersTooltipShow:"Покажи Филтрите",toolbarFiltersTooltipActive:e=>`${e} активни филтри`,columnsPanelTextFieldLabel:"Намери колона",columnsPanelTextFieldPlaceholder:"Заглавие на колона",columnsPanelDragIconLabel:"Пренареди на колона",columnsPanelShowAllButton:"Покажи Всички",columnsPanelHideAllButton:"Скрий Всички",filterPanelAddFilter:"Добави Филтър",filterPanelDeleteIconLabel:"Изтрий",filterPanelOperators:"Оператори",filterPanelOperatorAnd:"И",filterPanelOperatorOr:"Или",filterPanelColumns:"Колони",filterOperatorContains:"съдържа",filterOperatorEquals:"равно",filterOperatorStartsWith:"започва с",filterOperatorEndsWith:"завършва с",filterOperatorIs:"е",filterOperatorNot:"не е",filterOperatorAfter:"е след",filterOperatorOnOrAfter:"е на или след",filterOperatorBefore:"е преди",filterOperatorOnOrBefore:"е на или преди",filterPanelInputLabel:"Стойност",filterPanelInputPlaceholder:"Стойност на филтъра",columnMenuLabel:"Меню",columnMenuShowColumns:"Покажи колоните",columnMenuFilter:"Филтри",columnMenuHideColumn:"Скрий",columnMenuUnsort:"Отмени сортирането",columnMenuSortAsc:"Сортирай по възходящ ред",columnMenuSortDesc:"Сортирай по низходящ ред",columnHeaderFiltersTooltipActive:e=>`${e} активни филтри`,columnHeaderFiltersLabel:"Покажи Филтрите",columnHeaderSortIconLabel:"Сортирай",footerRowSelected:e=>1!==e?`${e.toLocaleString()} избрани редове`:`${e.toLocaleString()} избран ред`,footerTotalRows:"Общо Rедове:"},bgBG);ai({noRowsLabel:"Žádné záznamy",noResultsOverlayLabel:"Nenašli se žadné výsledky.",errorOverlayDefaultLabel:"Stala sa nepředvídaná chyba.",toolbarDensity:"Hustota",toolbarDensityLabel:"Hustota",toolbarDensityCompact:"Kompaktní",toolbarDensityStandard:"Standartní",toolbarDensityComfortable:"Komfortní",toolbarColumns:"Sloupce",toolbarColumnsLabel:"Vybrat sloupec",toolbarFilters:"Filtry",toolbarFiltersLabel:"Zobrazit filtry",toolbarFiltersTooltipHide:"Skrýt filtry",toolbarFiltersTooltipShow:"Zobrazit filtry",toolbarFiltersTooltipActive:e=>{let t="aktivních filtrů";return e>1&&e<5?t="aktivní filtry":1===e&&(t="aktivní filtr"),`${e} ${t}`},toolbarExport:"Export",toolbarExportLabel:"Export",toolbarExportCSV:"Stáhnout jako CSV",columnsPanelTextFieldLabel:"Najít sloupec",columnsPanelTextFieldPlaceholder:"Název sloupce",columnsPanelDragIconLabel:"Uspořádat sloupce",columnsPanelShowAllButton:"Zobrazit vše",columnsPanelHideAllButton:"Skrýt vše",filterPanelAddFilter:"Přidat filtr",filterPanelDeleteIconLabel:"Odstranit",filterPanelOperators:"Operátory",filterPanelOperatorAnd:"A",filterPanelOperatorOr:"Nebo",filterPanelColumns:"Sloupce",filterPanelInputLabel:"Hodnota",filterPanelInputPlaceholder:"Hodnota filtru",filterOperatorContains:"obsahuje",filterOperatorEquals:"rovná se",filterOperatorStartsWith:"začíná s",filterOperatorEndsWith:"končí na",filterOperatorIs:"je",filterOperatorNot:"není",filterOperatorAfter:"je po",filterOperatorOnOrAfter:"je na nebo po",filterOperatorBefore:"je před",filterOperatorOnOrBefore:"je na nebo dříve",filterValueAny:"jakýkoliv",filterValueTrue:"ano",filterValueFalse:"ne",columnMenuLabel:"Menu",columnMenuShowColumns:"Zobrazit sloupce",columnMenuFilter:"Filtr",columnMenuHideColumn:"Skrýt",columnMenuUnsort:"Zrušit filtry",columnMenuSortAsc:"Seřadit vzestupně",columnMenuSortDesc:"Seřadit sestupně",columnHeaderFiltersTooltipActive:e=>{let t="aktivních filtrů";return e>1&&e<5?t="aktivní filtry":1===e&&(t="aktivní filtr"),`${e} ${t}`},columnHeaderFiltersLabel:"Zobrazit filtry",columnHeaderSortIconLabel:"Filtrovat",footerRowSelected:e=>{let t="vybraných záznamů";return e>1&&e<5?t="vybrané záznamy":1===e&&(t="vybraný záznam"),`${e} ${t}`},footerTotalRows:"Celkem řádků:",checkboxSelectionHeaderName:"Výběr řádku",booleanCellTrueLabel:"ano",booleanCellFalseLabel:"ne"},csCZ);ai({noRowsLabel:"Keine Einträge",noResultsOverlayLabel:"Keine Ergebnisse gefunden.",errorOverlayDefaultLabel:"Ein unerwarteter Fehler ist aufgetreten.",toolbarDensity:"Zeilenhöhe",toolbarDensityLabel:"Zeilenhöhe",toolbarDensityCompact:"Kompakt",toolbarDensityStandard:"Standard",toolbarDensityComfortable:"Breit",toolbarColumns:"Spalten",toolbarColumnsLabel:"Zeige Spaltenauswahl",toolbarFilters:"Filter",toolbarFiltersLabel:"Zeige Filter",toolbarFiltersTooltipHide:"Verberge Filter",toolbarFiltersTooltipShow:"Zeige Filter",toolbarFiltersTooltipActive:e=>1!==e?`${e} aktive Filter`:`${e} aktiver Filter`,toolbarExport:"Exportieren",toolbarExportLabel:"Exportieren",toolbarExportCSV:"Download als CSV",columnsPanelTextFieldLabel:"Finde Spalte",columnsPanelTextFieldPlaceholder:"Spaltenüberschrift",columnsPanelDragIconLabel:"Spalte umsortieren",columnsPanelShowAllButton:"Zeige alle",columnsPanelHideAllButton:"Verberge alle",filterPanelAddFilter:"Filter hinzufügen",filterPanelDeleteIconLabel:"Löschen",filterPanelOperators:"Operatoren",filterPanelOperatorAnd:"Und",filterPanelOperatorOr:"Oder",filterPanelColumns:"Spalten",filterPanelInputLabel:"Wert",filterPanelInputPlaceholder:"Wert filtern",filterOperatorContains:"beinhaltet",filterOperatorEquals:"ist gleich",filterOperatorStartsWith:"beginnt mit",filterOperatorEndsWith:"endet mit",filterOperatorIs:"ist",filterOperatorNot:"ist nicht",filterOperatorOnOrAfter:"ist an oder nach",filterOperatorBefore:"ist vor",filterOperatorOnOrBefore:"ist an oder vor",filterOperatorAfter:"ist nach",filterOperatorIsEmpty:"ist leer",filterOperatorIsNotEmpty:"ist nicht leer",columnMenuLabel:"Menü",columnMenuShowColumns:"Zeige alle Spalten",columnMenuFilter:"Filter",columnMenuHideColumn:"Verbergen",columnMenuUnsort:"Sortierung deaktivieren",columnMenuSortAsc:"Sortiere aufsteigend",columnMenuSortDesc:"Sortiere absteigend",columnHeaderFiltersTooltipActive:e=>1!==e?`${e} aktive Filter`:`${e} aktiver Filter`,columnHeaderFiltersLabel:"Zeige Filter",columnHeaderSortIconLabel:"Sortieren",footerRowSelected:e=>1!==e?`${e.toLocaleString()} Einträge ausgewählt`:`${e.toLocaleString()} Eintrag ausgewählt`,footerTotalRows:"Gesamt:",footerTotalVisibleRows:(e,t)=>`${e.toLocaleString()} von ${t.toLocaleString()}`},deDE);ai({noRowsLabel:"Δεν υπάρχουν καταχωρήσεις",errorOverlayDefaultLabel:"Παρουσιάστηκε απρόβλεπτο σφάλμα.",toolbarDensity:"Ύψος σειράς",toolbarDensityLabel:"Ύψος σειράς",toolbarDensityCompact:"Συμπαγής",toolbarDensityStandard:"Προκαθορισμένο",toolbarDensityComfortable:"Πλατύ",toolbarColumns:"Στήλες",toolbarColumnsLabel:"Επιλέξτε στήλες",toolbarFilters:"Φίλτρα",toolbarFiltersLabel:"Εμφάνιση φίλτρων",toolbarFiltersTooltipHide:"Απόκρυψη φίλτρων",toolbarFiltersTooltipShow:"Εμφάνιση φίλτρων",toolbarFiltersTooltipActive:e=>1!==e?`${e} ενεργά φίλτρα`:`${e} ενεργό φίλτρο`,toolbarExport:"Εξαγωγή",toolbarExportLabel:"Εξαγωγή",toolbarExportCSV:"Λήψη ως CSV",columnsPanelTextFieldLabel:"Εύρεση στήλης",columnsPanelTextFieldPlaceholder:"Επικεφαλίδα στήλης",columnsPanelDragIconLabel:"Αναδιάταξη στήλης",columnsPanelShowAllButton:"Προβολή όλων",columnsPanelHideAllButton:"Απόκρυψη όλων",filterPanelAddFilter:"Προσθήκη φίλτρου",filterPanelDeleteIconLabel:"Διαγραφή",filterPanelOperators:"Τελεστές",filterPanelOperatorAnd:"Καί",filterPanelOperatorOr:"Ή",filterPanelColumns:"Στήλες",filterPanelInputLabel:"Τιμή",filterPanelInputPlaceholder:"Τιμή φίλτρου",filterOperatorContains:"περιέχει",filterOperatorEquals:"ισούται",filterOperatorStartsWith:"ξεκινάει με",filterOperatorEndsWith:"τελειώνει με",filterOperatorIs:"είναι",filterOperatorNot:"δεν είναι",filterOperatorAfter:"είναι μετά",filterOperatorOnOrAfter:"είναι ίσο ή μετά",filterOperatorBefore:"είναι πριν",filterOperatorOnOrBefore:"είναι ίσο ή πριν",columnMenuLabel:"Μενού",columnMenuShowColumns:"Εμφάνιση στηλών",columnMenuFilter:"Φίλτρο",columnMenuHideColumn:"Απόκρυψη",columnMenuUnsort:"Απενεργοποίηση ταξινόμησης",columnMenuSortAsc:"Ταξινόμηση σε αύξουσα σειρά",columnMenuSortDesc:"Ταξινόμηση σε φθίνουσα σειρά",columnHeaderFiltersTooltipActive:e=>1!==e?`${e} ενεργά φίλτρα`:`${e} ενεργό φίλτρο`,columnHeaderFiltersLabel:"Εμφάνιση φίλτρων",columnHeaderSortIconLabel:"Ταξινόμηση",footerRowSelected:e=>1!==e?`${e.toLocaleString()} επιλεγμένες γραμμές`:`${e.toLocaleString()} επιλεγμένη γραμμή`,footerTotalRows:"Σύνολο Γραμμών:"});ai(Ca,enUS);ai({noRowsLabel:"Sin filas",errorOverlayDefaultLabel:"Ha ocurrido un error.",toolbarDensity:"Densidad",toolbarDensityLabel:"Densidad",toolbarDensityCompact:"Compacta",toolbarDensityStandard:"Standard",toolbarDensityComfortable:"Comoda",toolbarColumns:"Columnas",toolbarColumnsLabel:"Seleccionar columnas",toolbarFilters:"Filtros",toolbarFiltersLabel:"Mostrar filtros",toolbarFiltersTooltipHide:"Ocultar filtros",toolbarFiltersTooltipShow:"Mostrar filtros",toolbarFiltersTooltipActive:e=>e>1?`${e} filtros activos`:`${e} filtro activo`,toolbarExport:"Exportar",toolbarExportLabel:"Exportar",toolbarExportCSV:"Descargar como CSV",columnsPanelTextFieldLabel:"Columna de búsqueda",columnsPanelTextFieldPlaceholder:"Título de columna",columnsPanelDragIconLabel:"Reorder columna",columnsPanelShowAllButton:"Mostrar todo",columnsPanelHideAllButton:"Ocultar todo",filterPanelAddFilter:"Agregar filtro",filterPanelDeleteIconLabel:"Borrar",filterPanelOperators:"Operadores",filterPanelOperatorAnd:"Y",filterPanelOperatorOr:"O",filterPanelColumns:"Columnas",filterPanelInputLabel:"Valor",filterPanelInputPlaceholder:"Valor de filtro",filterOperatorContains:"contiene",filterOperatorEquals:"es igual",filterOperatorStartsWith:"comienza con",filterOperatorEndsWith:"termina con",filterOperatorIs:"es",filterOperatorNot:"no es",filterOperatorAfter:"es posterior",filterOperatorOnOrAfter:"es en o posterior",filterOperatorBefore:"es anterior",filterOperatorOnOrBefore:"es en o anterior",filterOperatorIsEmpty:"está vacío",filterOperatorIsNotEmpty:"no esta vacío",columnMenuLabel:"Menú",columnMenuShowColumns:"Mostrar columnas",columnMenuFilter:"Filtro",columnMenuHideColumn:"Ocultar",columnMenuUnsort:"Desordenar",columnMenuSortAsc:"Ordenar ASC",columnMenuSortDesc:"Ordenar DESC",columnHeaderFiltersTooltipActive:e=>e>1?`${e} filtros activos`:`${e} filtro activo`,columnHeaderFiltersLabel:"Mostrar filtros",columnHeaderSortIconLabel:"Ordenar",footerRowSelected:e=>e>1?`${e.toLocaleString()} filas seleccionadas`:`${e.toLocaleString()} fila seleccionada`,footerTotalRows:"Filas Totales:",footerTotalVisibleRows:(e,t)=>`${e.toLocaleString()} de ${t.toLocaleString()}`,actionsCellMore:"más"},esES);ai({noRowsLabel:"بدون سطر",noResultsOverlayLabel:"نتیجه ای پیدا نشد.",errorOverlayDefaultLabel:"خطایی روی داد.",toolbarDensity:"تراکم",toolbarDensityLabel:"تراکم",toolbarDensityCompact:"فشرده",toolbarDensityStandard:"استاندارد",toolbarDensityComfortable:"راحت",toolbarColumns:"ستون‌ها",toolbarColumnsLabel:"ستون‌ها را انتخاب کنید",toolbarFilters:"فیلترها",toolbarFiltersLabel:"نمایش فیلترها",toolbarFiltersTooltipHide:"مخفی کردن فیلترها",toolbarFiltersTooltipShow:"نمایش فیلترها",toolbarFiltersTooltipActive:e=>1!==e?`${e} فیلترهای فعال`:`${e} فیلتر فعال`,toolbarExport:"خروجی",toolbarExportLabel:"خروجی",toolbarExportCSV:"دانلود به‌صورت CSV",columnsPanelTextFieldLabel:"پیداکردن ستون",columnsPanelTextFieldPlaceholder:"عنوان ستون",columnsPanelDragIconLabel:"جا‌به‌جایی ستون",columnsPanelShowAllButton:"نمایش همه",columnsPanelHideAllButton:"مخفی همه",filterPanelAddFilter:"افزودن فیلتر",filterPanelDeleteIconLabel:"حذف",filterPanelOperators:"عملگرها",filterPanelOperatorAnd:"و",filterPanelOperatorOr:"یا",filterPanelColumns:"ستون‌ها",filterPanelInputLabel:"مقدار",filterPanelInputPlaceholder:"فیلتر مقدار",filterOperatorContains:"شامل",filterOperatorEquals:"مساوی",filterOperatorStartsWith:"شروع با",filterOperatorEndsWith:"پایان با",filterOperatorIs:"هست",filterOperatorNot:"نیست",filterOperatorAfter:"بعد از",filterOperatorOnOrAfter:"معادل یا بعدش",filterOperatorBefore:"قبلش",filterOperatorOnOrBefore:"معادل یا قبلش",filterOperatorIsEmpty:"خالی است",filterOperatorIsNotEmpty:"خالی نیست",filterValueAny:"هرچیزی",filterValueTrue:"صحیح",filterValueFalse:"غلط",columnMenuLabel:"فهرست",columnMenuShowColumns:"نمایش ستون‌ها",columnMenuFilter:"فیلتر",columnMenuHideColumn:"مخفی",columnMenuUnsort:"نامرتب‌کردن",columnMenuSortAsc:"مرتب‌کردن صعودی",columnMenuSortDesc:"مرتب‌کردن نزولی",columnHeaderFiltersTooltipActive:e=>1!==e?`${e} فیلتر‌های فعال`:`${e} فیلتر فعال`,columnHeaderFiltersLabel:"نمایش فیلترها",columnHeaderSortIconLabel:"مرتب‌کردن",footerRowSelected:e=>1!==e?`${e.toLocaleString()} سطرهای انتخاب شده`:`${e.toLocaleString()} سطر انتخاب شده`,footerTotalRows:"مجموع سطرها:",footerTotalVisibleRows:(e,t)=>`${e.toLocaleString()} از ${t.toLocaleString()}`,checkboxSelectionHeaderName:"انتخاب چک‌باکس",booleanCellTrueLabel:"صحیح",booleanCellFalseLabel:"غلط",actionsCellMore:"بیشتر",MuiTablePagination:{}},faIR);ai({noRowsLabel:"Pas de résultats",noResultsOverlayLabel:"Aucun résultat.",errorOverlayDefaultLabel:"Une erreur est apparue.",toolbarDensity:"Densité",toolbarDensityLabel:"Densité",toolbarDensityCompact:"Compact",toolbarDensityStandard:"Standard",toolbarDensityComfortable:"Confortable",toolbarColumns:"Colonnes",toolbarColumnsLabel:"Choisir les colonnes",toolbarFilters:"Filtres",toolbarFiltersLabel:"Afficher les filtres",toolbarFiltersTooltipHide:"Cacher les filtres",toolbarFiltersTooltipShow:"Afficher les filtres",toolbarFiltersTooltipActive:e=>e>1?`${e} filtres actifs`:`${e} filtre actif`,toolbarExport:"Exporter",toolbarExportLabel:"Exporter",toolbarExportCSV:"Télécharger en CSV",columnsPanelTextFieldLabel:"Chercher colonne",columnsPanelTextFieldPlaceholder:"Titre de la colonne",columnsPanelDragIconLabel:"Réorganiser la colonne",columnsPanelShowAllButton:"Tout afficher",columnsPanelHideAllButton:"Tout cacher",filterPanelAddFilter:"Ajouter un filtre",filterPanelDeleteIconLabel:"Supprimer",filterPanelOperators:"Opérateurs",filterPanelOperatorAnd:"Et",filterPanelOperatorOr:"Ou",filterPanelColumns:"Colonnes",filterPanelInputLabel:"Valeur",filterPanelInputPlaceholder:"Filtrer la valeur",filterOperatorContains:"contient",filterOperatorEquals:"égal à",filterOperatorStartsWith:"commence par",filterOperatorEndsWith:"se termine par",filterOperatorIs:"est",filterOperatorNot:"n'est pas",filterOperatorOnOrAfter:"égal ou postérieur",filterOperatorAfter:"postérieur",filterOperatorOnOrBefore:"égal ou antérieur",filterOperatorBefore:"antérieur",filterOperatorIsEmpty:"est vide",filterOperatorIsNotEmpty:"n'est pas vide",columnMenuLabel:"Menu",columnMenuShowColumns:"Afficher les colonnes",columnMenuFilter:"Filtrer",columnMenuHideColumn:"Cacher",columnMenuUnsort:"Annuler le tri",columnMenuSortAsc:"Tri ascendant",columnMenuSortDesc:"Tri descendant",columnHeaderFiltersTooltipActive:e=>e>1?`${e} filtres actifs`:`${e} filtre actif`,columnHeaderFiltersLabel:"Afficher les filtres",columnHeaderSortIconLabel:"Trier",footerRowSelected:e=>e>1?`${e.toLocaleString()} lignes sélectionnées`:`${e.toLocaleString()} ligne sélectionnée`,footerTotalRows:"Lignes totales :",footerTotalVisibleRows:(e,t)=>`${e.toLocaleString()} sur ${t.toLocaleString()}`,checkboxSelectionHeaderName:"Sélection",actionsCellMore:"Plus"},frFR);ai({noRowsLabel:"Nessun record",noResultsOverlayLabel:"Nessun record trovato.",errorOverlayDefaultLabel:"Si è verificato un errore.",toolbarDensity:"Densità",toolbarDensityLabel:"Densità",toolbarDensityCompact:"Compatta",toolbarDensityStandard:"Standard",toolbarDensityComfortable:"Comoda",toolbarColumns:"Colonne",toolbarColumnsLabel:"Seleziona le colonne",toolbarFilters:"Filtri",toolbarFiltersLabel:"Mostra i filtri",toolbarFiltersTooltipHide:"Nascondi i filtri",toolbarFiltersTooltipShow:"Mostra i filtri",toolbarFiltersTooltipActive:e=>e>1?`${e} filtri attivi`:`${e} filtro attivo`,toolbarExport:"Esporta",toolbarExportLabel:"Esporta",toolbarExportCSV:"Esporta in CSV",columnsPanelTextFieldLabel:"Cerca colonna",columnsPanelTextFieldPlaceholder:"Titolo della colonna",columnsPanelDragIconLabel:"Riordina la colonna",columnsPanelShowAllButton:"Mostra tutto",columnsPanelHideAllButton:"Nascondi tutto",filterPanelAddFilter:"Aggiungi un filtro",filterPanelDeleteIconLabel:"Rimuovi",filterPanelOperators:"Operatori",filterPanelOperatorAnd:"E (and)",filterPanelOperatorOr:"O (or)",filterPanelColumns:"Colonne",filterPanelInputLabel:"Valore",filterPanelInputPlaceholder:"Filtra il valore",filterOperatorContains:"contiene",filterOperatorEquals:"uguale a",filterOperatorStartsWith:"comincia per",filterOperatorEndsWith:"termina per",filterOperatorIs:"uguale a",filterOperatorNot:"diversa da",filterOperatorOnOrAfter:"a partire dal",filterOperatorAfter:"dopo il",filterOperatorOnOrBefore:"fino al",filterOperatorBefore:"prima del",filterOperatorIsEmpty:"è vuoto",filterOperatorIsNotEmpty:"non è vuoto",columnMenuLabel:"Menu",columnMenuShowColumns:"Mostra le colonne",columnMenuFilter:"Filtra",columnMenuHideColumn:"Nascondi",columnMenuUnsort:"Annulla l'ordinamento",columnMenuSortAsc:"Ordinamento crescente",columnMenuSortDesc:"Ordinamento decrescente",columnHeaderFiltersTooltipActive:e=>e>1?`${e} filtri attivi`:`${e} filtro attivo`,columnHeaderFiltersLabel:"Mostra i filtri",columnHeaderSortIconLabel:"Ordina",footerRowSelected:e=>e>1?`${e.toLocaleString()} record selezionati`:`${e.toLocaleString()} record selezionato`,footerTotalRows:"Record totali:",footerTotalVisibleRows:(e,t)=>`${e.toLocaleString()} di ${t.toLocaleString()}`,checkboxSelectionHeaderName:"Seleziona",actionsCellMore:"più"},itIT);ai({noRowsLabel:"行がありません。",noResultsOverlayLabel:"結果がありません。",errorOverlayDefaultLabel:"エラーが発生しました。",toolbarDensity:"行間隔",toolbarDensityLabel:"行間隔",toolbarDensityCompact:"コンパクト",toolbarDensityStandard:"標準",toolbarDensityComfortable:"ひろめ",toolbarColumns:"列一覧",toolbarColumnsLabel:"列選択",toolbarFilters:"フィルター",toolbarFiltersLabel:"フィルター表示",toolbarFiltersTooltipHide:"フィルター非表示",toolbarFiltersTooltipShow:"フィルター表示",toolbarFiltersTooltipActive:e=>`${e}件のフィルターを適用中`,toolbarExport:"エクスポート",toolbarExportLabel:"エクスポート",toolbarExportCSV:"CSVダウンロード",columnsPanelTextFieldLabel:"列検索",columnsPanelTextFieldPlaceholder:"検索クエリを入力...",columnsPanelDragIconLabel:"列並べ替え",columnsPanelShowAllButton:"すべて表示",columnsPanelHideAllButton:"すべて非表示",filterPanelAddFilter:"フィルター追加",filterPanelDeleteIconLabel:"削除",filterPanelOperators:"オペレータ",filterPanelOperatorAnd:"And",filterPanelOperatorOr:"Or",filterPanelColumns:"列",filterPanelInputLabel:"値",filterPanelInputPlaceholder:"値を入力...",filterOperatorContains:"...を含む",filterOperatorEquals:"...に等しい",filterOperatorStartsWith:"...で始まる",filterOperatorEndsWith:"...で終わる",filterOperatorIs:"...である",filterOperatorNot:"...でない",filterOperatorAfter:"...より後ろ",filterOperatorOnOrAfter:"...以降",filterOperatorBefore:"...より前",filterOperatorOnOrBefore:"...以前",filterOperatorIsEmpty:"...空である",filterOperatorIsNotEmpty:"...空でない",columnMenuLabel:"メニュー",columnMenuShowColumns:"列表示",columnMenuFilter:"フィルター",columnMenuHideColumn:"列非表示",columnMenuUnsort:"ソート解除",columnMenuSortAsc:"昇順ソート",columnMenuSortDesc:"降順ソート",columnHeaderFiltersTooltipActive:e=>`${e}件のフィルターを適用中`,columnHeaderFiltersLabel:"フィルター表示",columnHeaderSortIconLabel:"ソート",footerRowSelected:e=>`${e}行を選択中`,footerTotalRows:"総行数:",footerTotalVisibleRows:(e,t)=>`${e.toLocaleString()} / ${t.toLocaleString()}`,checkboxSelectionHeaderName:"チェックボックス",booleanCellTrueLabel:"真",booleanCellFalseLabel:"偽"},jaJP);ai({noRowsLabel:"행이 없습니다.",noResultsOverlayLabel:"결과값이 없습니다.",errorOverlayDefaultLabel:"오류가 발생했습니다.",toolbarDensity:"라인 간격",toolbarDensityLabel:"라인 간격",toolbarDensityCompact:"좁게",toolbarDensityStandard:"기본",toolbarDensityComfortable:"넓게",toolbarColumns:"열 목록",toolbarColumnsLabel:"열 선택",toolbarFilters:"필터",toolbarFiltersLabel:"필터 표시",toolbarFiltersTooltipHide:"필터 숨기기",toolbarFiltersTooltipShow:"필터 표시",toolbarFiltersTooltipActive:e=>`${e}건의 필터를 적용중`,toolbarExport:"내보내기",toolbarExportLabel:"내보내기",toolbarExportCSV:"CSV다운로드",columnsPanelTextFieldLabel:"열 검색",columnsPanelTextFieldPlaceholder:"열 이름",columnsPanelDragIconLabel:"열 정렬",columnsPanelShowAllButton:"모두 보기",columnsPanelHideAllButton:"모두 숨기기",filterPanelAddFilter:"필터 추가",filterPanelDeleteIconLabel:"삭제",filterPanelOperators:"연산자",filterPanelOperatorAnd:"그리고",filterPanelOperatorOr:"또는",filterPanelColumns:"목록",filterPanelInputLabel:"값",filterPanelInputPlaceholder:"값 입력",filterOperatorContains:"포함하는",filterOperatorEquals:"값이 같은",filterOperatorStartsWith:"시작하는",filterOperatorEndsWith:"끝나는",filterOperatorIs:"~인",filterOperatorNot:"~아닌",filterOperatorAfter:"더 이후",filterOperatorOnOrAfter:"이후",filterOperatorBefore:"더 이전",filterOperatorOnOrBefore:"이전",filterOperatorIsEmpty:"값이 없는",filterOperatorIsNotEmpty:"값이 있는",filterValueAny:"아무값",filterValueTrue:"참",filterValueFalse:"거짓",columnMenuLabel:"메뉴",columnMenuShowColumns:"열 표시",columnMenuFilter:"필터",columnMenuHideColumn:"열 숨기기",columnMenuUnsort:"정렬 해제",columnMenuSortAsc:"오름차순 정렬",columnMenuSortDesc:"내림차순 정렬",columnHeaderFiltersTooltipActive:e=>`${e}건의 필터를 적용중`,columnHeaderFiltersLabel:"필터 표시",columnHeaderSortIconLabel:"정렬",footerRowSelected:e=>`${e}행 선택중`,footerTotalRows:"총 행수:",booleanCellTrueLabel:"참",booleanCellFalseLabel:"거짓"},koKR);ai({noRowsLabel:"Geen resultaten.",errorOverlayDefaultLabel:"Er deed zich een fout voor.",toolbarDensity:"Grootte",toolbarDensityLabel:"Grootte",toolbarDensityCompact:"Compact",toolbarDensityStandard:"Normaal",toolbarDensityComfortable:"Breed",toolbarColumns:"Kolommen",toolbarColumnsLabel:"Kies kolommen",toolbarFilters:"Filters",toolbarFiltersLabel:"Toon filters",toolbarFiltersTooltipHide:"Verberg filters",toolbarFiltersTooltipShow:"Toon filters",toolbarFiltersTooltipActive:e=>e>1?`${e} actieve filters`:`${e} filter actief`,columnsPanelTextFieldLabel:"Zoek kolom",columnsPanelTextFieldPlaceholder:"Kolomtitel",columnsPanelDragIconLabel:"Kolom herschikken",columnsPanelShowAllButton:"Alles tonen",columnsPanelHideAllButton:"Alles verbergen",filterPanelAddFilter:"Filter toevoegen",filterPanelDeleteIconLabel:"Verwijderen",filterPanelOperators:"Operatoren",filterPanelOperatorAnd:"En",filterPanelOperatorOr:"Of",filterPanelColumns:"Kolommen",filterPanelInputLabel:"Waarde",filterPanelInputPlaceholder:"Filter waarde",filterOperatorContains:"bevat",filterOperatorEquals:"gelijk aan",filterOperatorStartsWith:"begint met",filterOperatorEndsWith:"eindigt met",filterOperatorIs:"is",filterOperatorNot:"is niet",filterOperatorOnOrAfter:"is gelijk of er voor",filterOperatorAfter:"is voor",filterOperatorOnOrBefore:"is gelijk of er na",filterOperatorBefore:"is na",columnMenuLabel:"Menu",columnMenuShowColumns:"Toon kolommen",columnMenuFilter:"Filteren",columnMenuHideColumn:"Verbergen",columnMenuUnsort:"Annuleer sortering",columnMenuSortAsc:"Oplopend sorteren",columnMenuSortDesc:"Aflopend sorteren",columnHeaderFiltersTooltipActive:e=>e>1?`${e} actieve filters`:`${e} filter actief`,columnHeaderFiltersLabel:"Toon filters",columnHeaderSortIconLabel:"Sorteren",footerRowSelected:e=>e>1?`${e.toLocaleString()} rijen geselecteerd`:`${e.toLocaleString()} rij geselecteerd`,footerTotalRows:"Totaal:"},nlNL);ai({noRowsLabel:"Brak danych",noResultsOverlayLabel:"Nie znaleziono wyników.",errorOverlayDefaultLabel:"Wystąpił błąd.",toolbarDensity:"Wysokość rzędu",toolbarDensityLabel:"Wysokość rzędu",toolbarDensityCompact:"Kompakt",toolbarDensityStandard:"Standard",toolbarDensityComfortable:"Komfort",toolbarColumns:"Kolumny",toolbarColumnsLabel:"Zaznacz kolumny",toolbarFilters:"Filtry",toolbarFiltersLabel:"Pokaż filtry",toolbarFiltersTooltipHide:"Ukryj filtry",toolbarFiltersTooltipShow:"Pokaż filtry",toolbarFiltersTooltipActive:e=>`Liczba aktywnych filtrów: ${e}`,toolbarExport:"Eksportuj",toolbarExportLabel:"Eksportuj",toolbarExportCSV:"Pobierz jako plik CSV",columnsPanelTextFieldLabel:"Znajdź kolumnę",columnsPanelTextFieldPlaceholder:"Tytuł kolumny",columnsPanelDragIconLabel:"Zmień kolejność kolumn",columnsPanelShowAllButton:"Pokaż wszystko",columnsPanelHideAllButton:"Ukryj wszystko",filterPanelAddFilter:"Dodaj filtr",filterPanelDeleteIconLabel:"Usuń",filterPanelOperators:"Operator",filterPanelOperatorAnd:"I",filterPanelOperatorOr:"Lub",filterPanelColumns:"Kolumny",filterPanelInputLabel:"Wartość",filterPanelInputPlaceholder:"Filtrowana wartość",filterOperatorContains:"zawiera",filterOperatorEquals:"równa się",filterOperatorStartsWith:"zaczyna się od",filterOperatorEndsWith:"kończy się na",filterOperatorIs:"równa się",filterOperatorNot:"różne",filterOperatorAfter:"większe niż",filterOperatorOnOrAfter:"większe lub równe",filterOperatorBefore:"mniejsze niż",filterOperatorOnOrBefore:"mniejsze lub równe",filterOperatorIsEmpty:"jest pusty",filterOperatorIsNotEmpty:"nie jest pusty",columnMenuLabel:"Menu",columnMenuShowColumns:"Pokaż wszystkie kolumny",columnMenuFilter:"Filtr",columnMenuHideColumn:"Ukryj",columnMenuUnsort:"Anuluj sortowanie",columnMenuSortAsc:"Sortuj rosnąco",columnMenuSortDesc:"Sortuj malejąco",columnHeaderFiltersTooltipActive:e=>`Liczba aktywnych filtrów: ${e}`,columnHeaderFiltersLabel:"Pokaż filtry",columnHeaderSortIconLabel:"Sortuj",footerRowSelected:e=>`Liczba wybranych wierszy: ${e.toLocaleString()}`,footerTotalRows:"Łączna liczba wierszy:",footerTotalVisibleRows:(e,t)=>`${e.toLocaleString()} z ${t.toLocaleString()}`,actionsCellMore:"więcej"},plPL);ai({noRowsLabel:"Nenhuma linha",noResultsOverlayLabel:"Nenhum resultado encontrado.",errorOverlayDefaultLabel:"Ocorreu um erro.",toolbarDensity:"Densidade",toolbarDensityLabel:"Densidade",toolbarDensityCompact:"Compacto",toolbarDensityStandard:"Padrão",toolbarDensityComfortable:"Confortável",toolbarColumns:"Colunas",toolbarColumnsLabel:"Exibir seletor de colunas",toolbarFilters:"Filtros",toolbarFiltersLabel:"Exibir filtros",toolbarFiltersTooltipHide:"Ocultar filtros",toolbarFiltersTooltipShow:"Exibir filtros",toolbarFiltersTooltipActive:e=>`${e} ${1!==e?"filtros":"filtro"} ${1!==e?"ativos":"ativo"}`,toolbarExport:"Exportar",toolbarExportLabel:"Exportar",toolbarExportCSV:"Baixar como CSV",columnsPanelTextFieldLabel:"Localizar coluna",columnsPanelTextFieldPlaceholder:"Título da coluna",columnsPanelDragIconLabel:"Reordenar Coluna",columnsPanelShowAllButton:"Mostrar todas",columnsPanelHideAllButton:"Ocultar todas",filterPanelAddFilter:"Adicionar filtro",filterPanelDeleteIconLabel:"Excluir",filterPanelOperators:"Operadores",filterPanelOperatorAnd:"E",filterPanelOperatorOr:"Ou",filterPanelColumns:"Colunas",filterPanelInputLabel:"Valor",filterPanelInputPlaceholder:"Filtrar valor",filterOperatorContains:"contém",filterOperatorEquals:"é igual a",filterOperatorStartsWith:"começa com",filterOperatorEndsWith:"termina com",filterOperatorIs:"é",filterOperatorNot:"não é",filterOperatorOnOrAfter:"em ou após",filterOperatorBefore:"antes de",filterOperatorOnOrBefore:"em ou antes de",filterOperatorAfter:"após",filterOperatorIsEmpty:"está vazio",filterOperatorIsNotEmpty:"não está vazio",columnMenuLabel:"Menu",columnMenuShowColumns:"Exibir colunas",columnMenuFilter:"Filtrar",columnMenuHideColumn:"Ocultar",columnMenuUnsort:"Desfazer ordenação",columnMenuSortAsc:"Ordenar do menor para o maior",columnMenuSortDesc:"Ordenar do maior para o menor",columnHeaderFiltersTooltipActive:e=>`${e} ${1!==e?"filtros":"filtro"} ${1!==e?"ativos":"ativo"}`,columnHeaderFiltersLabel:"Exibir Filtros",columnHeaderSortIconLabel:"Ordenar",footerRowSelected:e=>1!==e?`${e.toLocaleString()} linhas selecionadas`:`${e.toLocaleString()} linha selecionada`,footerTotalRows:"Total de linhas:",footerTotalVisibleRows:(e,t)=>`${e.toLocaleString()} de ${t.toLocaleString()}`,checkboxSelectionHeaderName:"Seleção",booleanCellTrueLabel:"sim",booleanCellFalseLabel:"não",actionsCellMore:"mais"},ptBR);ai({noRowsLabel:"Нет строк",errorOverlayDefaultLabel:"Обнаружена ошибка.",toolbarDensity:"Высота строки",toolbarDensityLabel:"Высота строки",toolbarDensityCompact:"Компактная",toolbarDensityStandard:"Стандартная",toolbarDensityComfortable:"Комфортная",toolbarColumns:"Столбцы",toolbarColumnsLabel:"Выделите столбцы",toolbarFilters:"Фильтры",toolbarFiltersLabel:"Показать фильтры",toolbarFiltersTooltipHide:"Скрыть фильтры",toolbarFiltersTooltipShow:"Показать фильтры",toolbarFiltersTooltipActive:e=>{let t="активных фильтров";const r=e%10;return r>1&&r<5?t="активных фильтра":1===r&&(t="активный фильтр"),`${e} ${t}`},toolbarExport:"Экспорт",toolbarExportLabel:"Экспорт",toolbarExportCSV:"Скачать в формате CSV",columnsPanelTextFieldLabel:"Найти столбец",columnsPanelTextFieldPlaceholder:"Заголовок столбца",columnsPanelDragIconLabel:"Изменить порядок столбца",columnsPanelShowAllButton:"Показать все",columnsPanelHideAllButton:"Скрыть все",filterPanelAddFilter:"Добавить фильтр",filterPanelDeleteIconLabel:"Удалить",filterPanelOperators:"Операторы",filterPanelOperatorAnd:"И",filterPanelOperatorOr:"Или",filterPanelColumns:"Столбцы",filterPanelInputLabel:"Значение",filterPanelInputPlaceholder:"Значение фильтра",filterOperatorContains:"содержит",filterOperatorEquals:"равен",filterOperatorStartsWith:"начинается с",filterOperatorEndsWith:"заканчивается на",filterOperatorIs:"равен",filterOperatorNot:"не равен",filterOperatorAfter:"больше чем",filterOperatorOnOrAfter:"больше или равно",filterOperatorBefore:"меньше чем",filterOperatorOnOrBefore:"меньше или равно",filterValueAny:"любой",filterValueTrue:"истина",filterValueFalse:"ложь",columnMenuLabel:"Меню",columnMenuShowColumns:"Показать столбцы",columnMenuFilter:"Фильтр",columnMenuHideColumn:"Скрыть",columnMenuUnsort:"Отменить сортировку",columnMenuSortAsc:"Сортировать по возрастанию",columnMenuSortDesc:"Сортировать по убыванию",columnHeaderFiltersTooltipActive:e=>{let t="активных фильтров";const r=e%10;return r>1&&r<5?t="активных фильтра":1===r&&(t="активный фильтр"),`${e} ${t}`},columnHeaderFiltersLabel:"Показать фильтры",columnHeaderSortIconLabel:"Сортировать",footerRowSelected:e=>{let t="строк выбрано";const r=e%10;return r>1&&r<5?t="строки выбраны":1===r&&(t="строка выбрана"),`${e} ${t}`},footerTotalRows:"Всего строк:",checkboxSelectionHeaderName:"Выбор флажка",booleanCellTrueLabel:"истина",booleanCellFalseLabel:"ложь"},ruRU);ai({noRowsLabel:"Žiadne záznamy",noResultsOverlayLabel:"Nenašli sa žadne výsledky.",errorOverlayDefaultLabel:"Stala sa nepredvídaná chyba.",toolbarDensity:"Hustota",toolbarDensityLabel:"Hustota",toolbarDensityCompact:"Kompaktná",toolbarDensityStandard:"Štandartná",toolbarDensityComfortable:"Komfortná",toolbarColumns:"Stĺpce",toolbarColumnsLabel:"Vybrať stĺpce",toolbarFilters:"Filtre",toolbarFiltersLabel:"Zobraziť filtre",toolbarFiltersTooltipHide:"Skryť filtre ",toolbarFiltersTooltipShow:"Zobraziť filtre",toolbarFiltersTooltipActive:e=>{let t="aktívnych filtrov";return e>1&&e<5?t="aktívne filtre":1===e&&(t="aktívny filter"),`${e} ${t}`},toolbarExport:"Export",toolbarExportLabel:"Export",toolbarExportCSV:"Stiahnuť ako CSV",columnsPanelTextFieldLabel:"Nájsť stĺpec",columnsPanelTextFieldPlaceholder:"Názov stĺpca",columnsPanelDragIconLabel:"Usporiadť stĺpce",columnsPanelShowAllButton:"Zobraziť všetko",columnsPanelHideAllButton:"Skryť všetko",filterPanelAddFilter:"Pridať filter",filterPanelDeleteIconLabel:"Odstrániť",filterPanelOperators:"Operátory",filterPanelOperatorAnd:"A",filterPanelOperatorOr:"Alebo",filterPanelColumns:"Stĺpce",filterPanelInputLabel:"Hodnota",filterPanelInputPlaceholder:"Hodnota filtra",filterOperatorContains:"obsahuje",filterOperatorEquals:"rovná sa",filterOperatorStartsWith:"začína s",filterOperatorEndsWith:"končí na",filterOperatorIs:"je",filterOperatorNot:"nie je",filterOperatorAfter:"je po",filterOperatorOnOrAfter:"je na alebo po",filterOperatorBefore:"je pred",filterOperatorOnOrBefore:"je na alebo skôr",filterValueAny:"akýkoľvek",filterValueTrue:"áno",filterValueFalse:"nie",columnMenuLabel:"Menu",columnMenuShowColumns:"Zobraziť stĺpce",columnMenuFilter:"Filter",columnMenuHideColumn:"Skryť",columnMenuUnsort:"Zrušiť filtre",columnMenuSortAsc:"Zoradiť vzostupne",columnMenuSortDesc:"Zoradiť zostupne",columnHeaderFiltersTooltipActive:e=>{let t="aktívnych filtrov";return e>1&&e<5?t="aktívne filtre":1===e&&(t="aktívny filter"),`${e} ${t}`},columnHeaderFiltersLabel:"Zobraziť filtre",columnHeaderSortIconLabel:"Filtrovať",footerRowSelected:e=>{let t="vybraných záznamov";return e>1&&e<5?t="vybrané záznamy":1===e&&(t="vybraný záznam"),`${e} ${t}`},footerTotalRows:"Riadkov spolu:",checkboxSelectionHeaderName:"Výber riadku",booleanCellTrueLabel:"áno",booleanCellFalseLabel:"nie"},skSK);ai({noRowsLabel:"Satır yok",errorOverlayDefaultLabel:"Bir hata oluştu.",toolbarDensity:"Yoğunluk",toolbarDensityLabel:"Yoğunluk",toolbarDensityCompact:"Sıkı",toolbarDensityStandard:"Standart",toolbarDensityComfortable:"Rahat",toolbarColumns:"Sütunlar",toolbarColumnsLabel:"Sütun seç",toolbarFilters:"Filtreler",toolbarFiltersLabel:"Filtreleri göster",toolbarFiltersTooltipHide:"Filtreleri gizle",toolbarFiltersTooltipShow:"Filtreleri göster",toolbarFiltersTooltipActive:e=>`${e} aktif filtre`,toolbarExport:"Dışa aktar",toolbarExportLabel:"Dışa aktar",toolbarExportCSV:"CSV olarak aktar",columnsPanelTextFieldLabel:"Sütun ara",columnsPanelTextFieldPlaceholder:"Sütun adı",columnsPanelDragIconLabel:"Sütunları yeniden sırala",columnsPanelShowAllButton:"Hepsini göster",columnsPanelHideAllButton:"Hepsini gizle",filterPanelAddFilter:"Filtre Ekle",filterPanelDeleteIconLabel:"Kaldır",filterPanelOperators:"Operatör",filterPanelOperatorAnd:"Ve",filterPanelOperatorOr:"Veya",filterPanelColumns:"Sütunlar",filterPanelInputLabel:"Değer",filterPanelInputPlaceholder:"Filtre değeri",filterOperatorContains:"içerir",filterOperatorEquals:"eşittir",filterOperatorStartsWith:"ile başlar",filterOperatorEndsWith:"ile biter",filterOperatorIs:"eşittir",filterOperatorNot:"eşit değildir",filterOperatorAfter:"büyük",filterOperatorOnOrAfter:"büyük eşit",filterOperatorBefore:"küçük",filterOperatorOnOrBefore:"küçük eşit",filterOperatorIsEmpty:"boş",filterOperatorIsNotEmpty:"dolu",columnMenuLabel:"Menü",columnMenuShowColumns:"Sütunları göster",columnMenuFilter:"Filtre uygula",columnMenuHideColumn:"Gizle",columnMenuUnsort:"Sıralama",columnMenuSortAsc:"Sırala - Artan",columnMenuSortDesc:"Sırala - Azalan",columnHeaderFiltersTooltipActive:e=>`${e} filtre aktif`,columnHeaderFiltersLabel:"Filtreleri göster",columnHeaderSortIconLabel:"Sırala",footerRowSelected:e=>`${e.toLocaleString()} satır seçildi`,footerTotalRows:"Toplam Satır:",footerTotalVisibleRows:(e,t)=>`${e.toLocaleString()} / ${t.toLocaleString()}`},trTR);ai({noRowsLabel:"Немає рядків",errorOverlayDefaultLabel:"Виявлено помилку.",toolbarDensity:"Висота рядка",toolbarDensityLabel:"Висота рядка",toolbarDensityCompact:"Компактний",toolbarDensityStandard:"Стандартний",toolbarDensityComfortable:"Комфортний",toolbarColumns:"Стовпці",toolbarColumnsLabel:"Виділіть стовпці",toolbarFilters:"Фільтри",toolbarFiltersLabel:"Показати фільтри",toolbarFiltersTooltipHide:"Сховати фільтри",toolbarFiltersTooltipShow:"Показати фільтри",toolbarFiltersTooltipActive:e=>1!==e?`${e} активні фільтри`:`${e} активний фільтр`,toolbarExport:"Експорт",toolbarExportLabel:"Експорт",toolbarExportCSV:"Завантажити у форматі CSV",columnsPanelTextFieldLabel:"Знайти стовпець",columnsPanelTextFieldPlaceholder:"Заголовок стовпця",columnsPanelDragIconLabel:"Змінити порядок стовпця",columnsPanelShowAllButton:"Показати усі",columnsPanelHideAllButton:"Сховати усі",filterPanelAddFilter:"Додати фільтр",filterPanelDeleteIconLabel:"Видалити",filterPanelOperators:"Оператори",filterPanelOperatorAnd:"І",filterPanelOperatorOr:"Або",filterPanelColumns:"Стовпці",filterPanelInputLabel:"Значення",filterPanelInputPlaceholder:"Значення фільтра",filterOperatorContains:"містить",filterOperatorEquals:"дорівнює",filterOperatorStartsWith:"починається з",filterOperatorEndsWith:"закінчується на",filterOperatorIs:"дорівнює",filterOperatorNot:"не",filterOperatorAfter:"більше ніж",filterOperatorOnOrAfter:"більше або дорівнює",filterOperatorBefore:"менше ніж",filterOperatorOnOrBefore:"менше або дорівнює",filterValueAny:"будь-який",filterValueTrue:"правда",filterValueFalse:"помилковий",columnMenuLabel:"Меню",columnMenuShowColumns:"Показати стовпці",columnMenuFilter:"Фільтр",columnMenuHideColumn:"Сховати",columnMenuUnsort:"Скасувати сортування",columnMenuSortAsc:"Сортувати за зростанням",columnMenuSortDesc:"Сортувати за спаданням",columnHeaderFiltersTooltipActive:e=>1!==e?`${e} активні фільтри`:`${e} активний фільтр`,columnHeaderFiltersLabel:"Показати фільтри",columnHeaderSortIconLabel:"Сортувати",footerRowSelected:e=>1!==e?`${e.toLocaleString()} вибрані рядки`:`${e.toLocaleString()} вибраний рядок`,footerTotalRows:"Всього рядків:",checkboxSelectionHeaderName:"Вибір прапорця",booleanCellTrueLabel:"правда",booleanCellFalseLabel:"помилковий"},ukUA);ai({noRowsLabel:"Không có dữ liệu",noResultsOverlayLabel:"Không tìm thấy kết quả.",errorOverlayDefaultLabel:"Có lỗi xảy ra.",toolbarDensity:"Độ giãn",toolbarDensityLabel:"Độ giãn",toolbarDensityCompact:"Trung bình",toolbarDensityStandard:"Tiêu chuẩn",toolbarDensityComfortable:"Rộng",toolbarColumns:"Cột",toolbarColumnsLabel:"Chọn cột",toolbarFilters:"Bộ lọc",toolbarFiltersLabel:"Hiển thị bộ lọc",toolbarFiltersTooltipHide:"Ẩn",toolbarFiltersTooltipShow:"Hiện",toolbarFiltersTooltipActive:e=>`${e} bộ lọc hoạt động`,toolbarExport:"Xuất",toolbarExportLabel:"Xuất",toolbarExportCSV:"Xuất CSV",columnsPanelTextFieldLabel:"Tìm kiếm",columnsPanelTextFieldPlaceholder:"Tiêu đề cột",columnsPanelDragIconLabel:"Sắp xếp",columnsPanelShowAllButton:"Hiện tất cả",columnsPanelHideAllButton:"Ẩn tất cả",filterPanelAddFilter:"Thêm bộ lọc",filterPanelDeleteIconLabel:"Xóa",filterPanelOperators:"Toán tử",filterPanelOperatorAnd:"Và",filterPanelOperatorOr:"Hoặc",filterPanelColumns:"Cột",filterPanelInputLabel:"Giá trị",filterPanelInputPlaceholder:"Lọc giá trị",filterOperatorContains:"Chứa",filterOperatorEquals:"Bằng",filterOperatorStartsWith:"Bắt đầu bằng",filterOperatorEndsWith:"Kết thúc bằng",filterOperatorIs:"Là",filterOperatorNot:"Không là",filterOperatorAfter:"Trước",filterOperatorBefore:"Sau",filterOperatorIsEmpty:"Rỗng",filterOperatorIsNotEmpty:"Khác rỗng",columnMenuLabel:"Danh mục",columnMenuShowColumns:"Danh sách cột",columnMenuFilter:"Bộ lọc",columnMenuHideColumn:"Ẩn cột",columnMenuUnsort:"Bỏ sắp xếp",columnMenuSortAsc:"Sắp xếp tăng dần",columnMenuSortDesc:"Sắp xếp giảm dần",columnHeaderFiltersTooltipActive:e=>`${e} bộ lọc hoạt động`,columnHeaderFiltersLabel:"Bộ lọc",columnHeaderSortIconLabel:"Sắp xếp",footerRowSelected:e=>`${e.toLocaleString()} hàng đã chọn`,footerTotalRows:"Tổng:",footerTotalVisibleRows:(e,t)=>`${e.toLocaleString()} / ${t.toLocaleString()}`,actionsCellMore:"Thêm"},viVN);ai({noRowsLabel:"没有数据。",noResultsOverlayLabel:"未找到数据。",errorOverlayDefaultLabel:"发生错误。",toolbarDensity:"表格密度",toolbarDensityLabel:"表格密度",toolbarDensityCompact:"紧密",toolbarDensityStandard:"标准",toolbarDensityComfortable:"稀疏",toolbarColumns:"列",toolbarColumnsLabel:"选择列",toolbarFilters:"筛选器",toolbarFiltersLabel:"显示筛选器",toolbarFiltersTooltipHide:"隐藏筛选器",toolbarFiltersTooltipShow:"显示筛选器",toolbarFiltersTooltipActive:e=>`${e} 个筛选器`,toolbarExport:"导出",toolbarExportLabel:"导出",toolbarExportCSV:"导出至CSV",columnsPanelTextFieldLabel:"搜索列",columnsPanelTextFieldPlaceholder:"列名",columnsPanelDragIconLabel:"重排序列",columnsPanelShowAllButton:"显示所有",columnsPanelHideAllButton:"隐藏所有",filterPanelAddFilter:"添加筛选器",filterPanelDeleteIconLabel:"删除",filterPanelOperators:"操作器",filterPanelOperatorAnd:"与",filterPanelOperatorOr:"或",filterPanelColumns:"列",filterPanelInputLabel:"值",filterPanelInputPlaceholder:"筛选值",filterOperatorContains:"包含",filterOperatorEquals:"等于",filterOperatorStartsWith:"开始于",filterOperatorEndsWith:"结束于",filterOperatorIs:"是",filterOperatorNot:"不是",filterOperatorAfter:"在后面",filterOperatorOnOrAfter:"正在后面",filterOperatorBefore:"在前面",filterOperatorOnOrBefore:"正在前面",filterOperatorIsEmpty:"为空",filterOperatorIsNotEmpty:"不为空",filterValueAny:"任何",filterValueTrue:"真",filterValueFalse:"假",columnMenuLabel:"菜单",columnMenuShowColumns:"显示",columnMenuFilter:"筛选器",columnMenuHideColumn:"隐藏",columnMenuUnsort:"恢复默认",columnMenuSortAsc:"升序",columnMenuSortDesc:"降序",columnHeaderFiltersTooltipActive:e=>`${e} 个筛选器`,columnHeaderFiltersLabel:"显示筛选器",columnHeaderSortIconLabel:"排序",footerRowSelected:e=>`共选中了${e.toLocaleString()}行`,footerTotalRows:"所有行:",footerTotalVisibleRows:(e,t)=>`${e.toLocaleString()} / ${t.toLocaleString()}`,checkboxSelectionHeaderName:"多选框",booleanCellTrueLabel:"真",booleanCellFalseLabel:"假",MuiTablePagination:{}},zhCN);const Pi=({apiRef:t,props:r,children:l})=>e$3.createElement(Rr.Provider,{value:r},e$3.createElement(de.Provider,{value:t},l)),Ri=pr()&&null!=window.localStorage.getItem("DEBUG"),Li=()=>{},Fi={debug:Li,info:Li,warn:Li,error:Li},Ii=["debug","info","warn","error"];function ji(e,t,r=console){const l=Ii.indexOf(t);if(-1===l)throw new Error(`MUI: Log level ${t} not recognized.`);return Ii.reduce(((t,o,n)=>(t[o]=n>=l?(...t)=>{const[l,...n]=t;r[o](`MUI: ${e} - ${l}`,...n);}:Li,t)),{})}const Di=(r,l)=>{((t,r)=>{t.current.getLogger=e$3.useCallback((e=>Ri?ji(e,"debug",r.logger):r.logLevel?ji(e,r.logLevel.toString(),r.logger):Fi),[r.logLevel,r.logger]);})(r,l),function(t,r){const l=fr(t,"useApi"),o=e$3.useCallback(((e,l,o={})=>{if(o.defaultMuiPrevented=!1,o&&(e=>void 0!==e.isPropagationStopped)(o)&&o.isPropagationStopped())return;const n=r.signature===Ir.DataGridPro?{api:t.current}:{};t.current.emit(e,l,o,n);}),[t,r.signature]),n=e$3.useCallback(((e,r,o)=>{l.debug(`Binding ${e} event`),t.current.on(e,r,o);const n=t.current;return ()=>{l.debug(`Clearing ${e} event`),n.removeListener(e,r);}}),[t,l]),a=e$3.useCallback((e=>{t.current.publishEvent(ue.componentError,e);}),[t]);e$3.useEffect((()=>{l.debug("Initializing grid api.");const e=t.current;return ()=>{l.info("Unmounting Grid component. Clearing all events listeners."),e.publishEvent(ue.unmount),e.removeAllListeners();}}),[l,t]),br(t,{subscribeEvent:n,publishEvent:o,showError:a},"GridCoreApi");}(r,l),function(t,r){const[,l]=hr(t),o=e$3.useCallback((e=>{l((t=>Object.assign(Object.assign({},t),{error:e})));}),[l]);e$3.useEffect((()=>{o(r.error);}),[o,r.error]),jr(t,ue.componentError,o);}(r,l),function(e,r){const l=e__default.useRef({}),o=e__default.useCallback((e=>{const{stateId:t}=e,r=bl(e,["stateId"]);l.current[t]=Object.assign(Object.assign({},r),{stateId:t});}),[]),n=e__default.useCallback((t=>{let o=!1;const n=[],a=l.current;if(Object.keys(a).forEach((r=>{const l=a[r],i=l.stateSelector(e.current.state),s=l.stateSelector(t);s!==i&&(s!==l.propModel&&n.push(l.stateId),void 0!==l.propModel&&s!==l.propModel&&(o=!0));})),n.length>1)throw new Error(`You're not allowed to update several sub-state in one transaction. You already updated ${n[0]}, therefore, you're not allowed to update ${n.join(", ")} in the same transaction.`);return {ignoreSetState:o,postUpdate:()=>{n.forEach((l=>{const o=a[l],n=a[l].stateSelector(t);if(o.propOnChange){const t=r.signature===Ir.DataGridPro?{api:e.current}:{};o.propOnChange(n,t);}e.current.publishEvent(o.changeEvent,n);}));}}}),[e,r.signature]);br(e,{updateControlState:o,applyControlStateConstraint:n},"controlStateApi");}(r,l),((t,r)=>{br(t,{getLocaleText:e$3.useCallback((e=>{if(null==r.localeText[e])throw new Error(`Missing translation for key ${e}.`);return r.localeText[e]}),[r.localeText])},"LocaleTextApi");})(r,l),function(t,{state:r}){const[,l,o]=hr(t),n=fr(t,"useStateProp");e$3.useEffect((()=>{null!=r&&t.current.state!==r&&(n.debug("Overriding state with props.state"),l((e=>Object.assign(Object.assign({},e),r))),o());}),[t,o,n,r,l]);}(r,l);},Ti=(e,t)=>{if("string"==typeof e){const r=e.replace(/"/g,'""');return r.includes(t)?`"${r}"`:r}return e};function Hi(e){const{columns:t,rows:r,selectedRowIds:l,getCellParams:o,delimiterCharacter:n,includeHeaders:a=!0}=e;let i=[...r.keys()];l.length&&(i=i.filter((e=>l.includes(e))));const s=i.reduce(((e,r)=>`${e}${function(e,t,r,l){const o=[];return t.forEach((t=>t.field!==_n.field&&o.push(Ti(r(e,t.field).formattedValue,l)))),o}(r,t,o,n).join(n)}\r\n`),"").trim();if(!a)return s;return `${`${t.filter((e=>e.field!==_n.field)).map((e=>Ti(e.headerName||e.field,n))).join(n)}\r\n`}${s}`.trim()}function zi(e){const t=document.createElement("span");t.style.whiteSpace="pre",t.style.userSelect="all",t.style.opacity="0px",t.textContent=e,document.body.appendChild(t);const r=document.createRange();r.selectNode(t);const l=window.getSelection();l.removeAllRanges(),l.addRange(r);try{document.execCommand("copy");}finally{document.body.removeChild(t);}}const Ai=(t,r)=>{const l=e$3.useRef(!1);l.current||(t.current.state=r(t.current.state),l.current=!0);};function $i(e,t){let r=0,l=t;const o=e.map((e=>{var t,o;const n=Object.assign({},e);if(e.hide)n.computedWidth=0;else {const e=null!==(t=n.minWidth)&&void 0!==t?t:Ko.minWidth;if(n.flex&&n.flex>0)r+=n.flex,n.computedWidth=e;else {const t=Math.max(null!==(o=n.width)&&void 0!==o?o:Ko.width,e);l-=t,n.computedWidth=t;}}return n}));if(r>0&&l>0){const e=l/r;for(let t=0;t<o.length;t+=1){const r=o[t];!r.hide&&r.flex&&r.flex>0&&(o[t].computedWidth=Math.max(e*r.flex,r.computedWidth));}}return o}function Ni(e,t={},r,l,o){const n=function(e,t){const r=Object.assign(Object.assign({},e),t),l={};return Object.entries(r).forEach((([e,t])=>{t=Object.assign(Object.assign({},r[t.extendType||"__default__"]),t),l[e]=t;})),l}(In(),t),a=e.map((e=>Object.assign(Object.assign({},jn(n,e.type)),e)));return l?[Object.assign(Object.assign({},_n),{cellClassName:o.cellCheckbox,columnHeaderCheckbox:o.columnHeaderCheckbox,headerName:r("checkboxSelectionHeaderName")}),...a]:a}const _i=(e,t)=>{var r,l;const o={all:[...null!==(r=null==t?void 0:t.all)&&void 0!==r?r:[]],lookup:Object.assign({},null!==(l=null==t?void 0:t.lookup)&&void 0!==l?l:{})};return e.forEach((e=>{null==o.lookup[e.field]?(o.lookup[e.field]=e,o.all.push(e.field)):o.lookup[e.field]=Object.assign(Object.assign({},o.lookup[e.field]),e);})),o};function Vi(t,r){var l,o;const n=fr(t,"useGridColumns"),a=(t=>{const{classes:r}=t;return e$3.useMemo((()=>Sr({cellCheckbox:["cellCheckbox"],columnHeaderCheckbox:["columnHeaderCheckbox"]},Mr,r)),[r])})({classes:r.classes});Ai(t,(e=>{const l=Ni(r.columns,r.columnTypes,t.current.getLocaleText,r.checkboxSelection,a),o=_i(l);let n=o.all.map((e=>o.lookup[e]));n=$i(n,0);const i={all:n.map((e=>e.field)),lookup:n.reduce(((e,t)=>(e[t.field]=t,e)),{})};return Object.assign(Object.assign({},e),{columns:i})}));const[,i,s]=hr(t),c=null!==(o=null===(l=t.current.state.viewportSizes)||void 0===l?void 0:l.width)&&void 0!==o?o:0,u=e$3.useCallback(((e,r=!0)=>{n.debug("Updating columns state."),i((t=>Object.assign(Object.assign({},t),{columns:e}))),s(),r&&t.current.publishEvent(ue.columnsChange,e.all);}),[n,i,s,t]),d=e$3.useCallback((e=>t.current.state.columns.lookup[e]),[t]),p=e$3.useCallback((()=>ge(t.current.state)),[t]),m=e$3.useCallback((()=>he(t.current.state)),[t]),f=e$3.useCallback((()=>Ce(t.current.state)),[t]),b=e$3.useCallback(((e,r=!0)=>(r?he(t.current.state):ge(t.current.state)).findIndex((t=>t.field===e))),[t]),g=e$3.useCallback((e=>{const r=b(e);return Ce(t.current.state).positions[r]}),[t,b]),h=e$3.useCallback(((e,r)=>{n.debug("updating GridColumns with new state");const l=t.current.state.viewportSizes.width;let o=e.all.map((t=>e.lookup[t]));o=$i(o,l);const a={all:o.map((e=>e.field)),lookup:o.reduce(((e,t)=>(e[t.field]=t,e)),{})};u(a,r);}),[t,n,u]),C=e$3.useCallback((e=>{const r=_i(e,t.current.state.columns);h(r,!1);}),[t,h]),v=e$3.useCallback((e=>C([e])),[C]),w=e$3.useCallback(((e,r)=>{const l=d(e),o=Object.assign(Object.assign({},l),{hide:!r});C([o]),t.current.publishEvent(ue.columnVisibilityChange,{field:e,colDef:o,isVisible:r});}),[t,d,C]),O=e$3.useCallback(((e,r)=>{const l=fe(t.current.state),o=l.findIndex((t=>t===e));if(o===r)return;n.debug(`Moving column ${e} to index ${r}`);const a=[...l];a.splice(r,0,a.splice(o,1)[0]),u(Object.assign(Object.assign({},me(t.current.state)),{all:a}));const i={field:e,element:t.current.getColumnHeaderElement(e),colDef:t.current.getColumn(e),targetIndex:r,oldIndex:o};t.current.publishEvent(ue.columnOrderChange,i);}),[t,n,u]),y=e$3.useCallback(((e,r)=>{n.debug(`Updating column ${e} width to ${r}`);const l=t.current.getColumn(e),o=Object.assign(Object.assign({},l),{width:r});t.current.updateColumns([o]),t.current.publishEvent(ue.columnWidthChange,{element:t.current.getColumnHeaderElement(e),colDef:o,width:r});}),[t,n]);br(t,{getColumn:d,getAllColumns:p,getColumnIndex:b,getColumnPosition:g,getVisibleColumns:m,getColumnsMeta:f,updateColumn:v,updateColumns:C,setColumnVisibility:w,setColumnIndex:O,setColumnWidth:y},"ColApi");const S=e$3.useRef(!0);e$3.useEffect((()=>{if(S.current)return void(S.current=!1);n.info(`GridColumns have changed, new length ${r.columns.length}`);const e=Ni(r.columns,r.columnTypes,t.current.getLocaleText,r.checkboxSelection,a),l=_i(e);h(l);}),[n,t,h,r.columns,r.columnTypes,r.checkboxSelection,a]),e$3.useEffect((()=>{n.debug(`GridColumns gridState.viewportSizes.width, changed ${c}`),0!==c&&h(t.current.state.columns);}),[t,h,c,n]),Tr(t,ue.columnVisibilityChange,r.onColumnVisibilityChange);}const Bi=(e,t,r)=>{switch(e){case Wn.Compact:return {value:e,headerHeight:Math.floor(.7*t),rowHeight:Math.floor(.7*r)};case Wn.Comfortable:return {value:e,headerHeight:Math.floor(1.3*t),rowHeight:Math.floor(1.3*r)};default:return {value:e,headerHeight:t,rowHeight:r}}};const Wi=t=>{const r=fr(t,"useGridCsvExport"),l=Cr(t,he),o=Cr(t,ge),n=Cr(t,Yr),a=Cr(t,Kl),i=e$3.useCallback((e=>{let i;if(r.debug("Get data as CSV"),null==e?void 0:e.fields)i=e.fields.map((e=>o.find((t=>t.field===e)))).filter((e=>!!e));else {i=((null==e?void 0:e.allColumns)?o:l).filter((e=>!e.disableExport));}return Hi({columns:i,rows:n,selectedRowIds:a,getCellParams:t.current.getCellParams,delimiterCharacter:(null==e?void 0:e.delimiter)||","})}),[r,l,o,n,a,t]),s=e$3.useCallback((e=>{r.debug("Export data as CSV");const t=i(e);!function(e,t="csv",r=document.title){const l=`${r}.${t}`;if("download"in HTMLAnchorElement.prototype){const t=URL.createObjectURL(e),r=document.createElement("a");return r.href=t,r.download=l,r.click(),void setTimeout((()=>{URL.revokeObjectURL(t);}))}throw new Error("MUI: exportAs not supported")}(new Blob([(null==e?void 0:e.utf8WithBom)?new Uint8Array([239,187,191]):"",t],{type:"text/csv"}),"csv",null==e?void 0:e.fileName);}),[r,i]);br(t,{getDataAsCsv:i,exportDataAsCsv:s},"GridCsvExportApi");},Gi=t=>{const r=e$3.useRef(!0);r.current&&(r.current=!1,t());},Ui=e=>{if(e.items.length>1){if(e.items.find((e=>null==e.id)))throw new Error("MUI: The 'id' field is required on `filterModel.items` when you use multiple filters.")}},Ki=t=>{const r=e$3.useCallback(((e,r)=>{t.current.publishEvent(ue.cellNavigationKeyDown,e,r);const l=t.current.state.focus.cell;if(!l)return;const o=(n=r.target,a=Pr.row,n.closest(`.${a}`));var n,a;const i=Number(o.getAttribute("data-rowindex")),s=Jr(t.current.state)[i];s!==l.id&&t.current.selectRowRange({startId:s,endId:l.id},!t.current.isRowSelected(l.id));}),[t]),l=e$3.useCallback(((e,l)=>{if(1===l.target.nodeType&&(null==(o=l.target)||!o.classList.contains(Pr.cell)))return;var o;const n=t.current.getCellParams(e.id,e.field);if(!(n.cellMode===yn.Edit)){if(sn(l.key)&&l.shiftKey)return l.preventDefault(),void t.current.selectRow(n.id,!t.current.isRowSelected(n.id),!1);if(!Cn(l.key)||l.shiftKey)return Cn(l.key)&&l.shiftKey?(l.preventDefault(),void r(n,l)):void("c"===l.key.toLowerCase()&&(l.ctrlKey||l.metaKey)||"a"===l.key.toLowerCase()&&(l.ctrlKey||l.metaKey)&&(l.preventDefault(),t.current.selectRows(t.current.getAllRowIds(),!0)));t.current.publishEvent(ue.cellNavigationKeyDown,n,l);}}),[t,r]),o=e$3.useCallback(((e,r)=>{hl(r.target)&&(sn(r.key)&&hl(r.target)&&r.preventDefault(),!Cn(r.key)||sn(r.key)||r.shiftKey?nn(r.key)&&(r.ctrlKey||r.metaKey)&&t.current.toggleColumnMenu(e.field):t.current.publishEvent(ue.columnHeaderNavigationKeyDown,e,r));}),[t]);jr(t,ue.cellKeyDown,l),jr(t,ue.columnHeaderKeyDown,o);},Zi=(t,r)=>{const l=fr(t,"useGridKeyboardNavigation"),o=Cr(t,Hn),n=Cr(t,Qr),a=Cr(t,Oe),i=Cr(t,jl),s=Cr(t,Xr),c=e=>nn(e.key)?"ArrowDown":an(e.key)?e.shiftKey?"ArrowLeft":"ArrowRight":e.key,u=e$3.useCallback(((e,u)=>{u.preventDefault();const d=t.current.getColumnIndex(e.field),p=s.findIndex((([t])=>t===e.id)),m=c(u),f=u.ctrlKey||u.metaKey||u.shiftKey;let b,g=n;if(r.pagination&&n>o.pageSize&&(g=o.pageSize*(o.page+1)),cn(m))b=((e,t)=>{if(!cn(e))throw new Error("MUI: The first argument (key) should be an arrow key code.");switch(e){case"ArrowLeft":return Object.assign(Object.assign({},t),{colIndex:t.colIndex-1});case"ArrowRight":return Object.assign(Object.assign({},t),{colIndex:t.colIndex+1});case"ArrowUp":return Object.assign(Object.assign({},t),{rowIndex:t.rowIndex-1});default:return Object.assign(Object.assign({},t),{rowIndex:t.rowIndex+1})}})(m,{colIndex:d,rowIndex:p});else if(un(m)){const e="Home"===m?0:a-1;if(f){let t=0;t=0===e?r.pagination?g-o.pageSize:0:g-1,b={colIndex:e,rowIndex:t};}else b={colIndex:e,rowIndex:p};}else {if(!dn(m)&&!sn(m))throw new Error("MUI: Key not mapped to navigation behavior.");b={colIndex:d,rowIndex:p+(m.indexOf("Down")>-1||sn(m)?i.viewportPageSize:-1*i.viewportPageSize)};}if(b.rowIndex<0){const e=t.current.getVisibleColumns()[b.colIndex].field;return void t.current.setColumnHeaderFocus(e,u)}b.rowIndex=b.rowIndex>=g&&g>0?g-1:b.rowIndex,b.colIndex=b.colIndex<=0?0:b.colIndex,b.colIndex=b.colIndex>=a?a-1:b.colIndex,l.debug(`Navigating to next cell row ${b.rowIndex}, col ${b.colIndex}`),t.current.scrollToIndexes(b);const h=t.current.getVisibleColumns()[b.colIndex].field,[C]=s[b.rowIndex];t.current.setCellFocus(C,h);}),[t,s,n,r.pagination,o.pageSize,o.page,a,l,i]),d=e$3.useCallback(((e,r)=>{let o;r.preventDefault();const n=t.current.getColumnIndex(e.field),u=c(r);if(cn(u))o=((e,t)=>{if(!cn(e))throw new Error("MUI: The first argument (key) should be an arrow key code.");switch(e){case"ArrowLeft":return {colIndex:t.colIndex-1};case"ArrowRight":return {colIndex:t.colIndex+1};case"ArrowDown":return null;default:return Object.assign({},t)}})(u,{colIndex:n});else {if(!un(u)){if(dn(u)){if(u.indexOf("Down")>-1){const e=t.current.getVisibleColumns()[n].field,r=t.current.getRowIdFromRowIndex(i.viewportPageSize-1);t.current.setCellFocus(r,e);}return}throw new Error("MUI: Key not mapped to navigation behavior.")}o={colIndex:"Home"===u?0:a-1};}if(!o){const e=t.current.getVisibleColumns()[n].field,[r]=s[0];return void t.current.setCellFocus(r,e)}o.colIndex=Math.max(0,o.colIndex),o.colIndex=o.colIndex>=a?a-1:o.colIndex,l.debug(`Navigating to next column row ${o.colIndex}`),t.current.scrollToIndexes(o);const d=t.current.getVisibleColumns()[o.colIndex].field;t.current.setColumnHeaderFocus(d,r);}),[t,a,i,l,s]);jr(t,ue.cellNavigationKeyDown,u),jr(t,ue.columnHeaderNavigationKeyDown,d);},qi=(e,t)=>t>0&&e>0?Math.ceil(e/t):0,Yi=e=>e.pageCount?Object.assign(Object.assign({},e),{page:Math.max(Math.min(e.page,e.pageCount-1),0)}):e;function Xi(t,r){const l=fr(t,"useGridEditRows");Ai(t,(e=>Object.assign(Object.assign({},e),{editRows:{}})));const[,o,n]=hr(t),a=e$3.useRef(null),i=e$3.useRef(null),s=Cr(t,ge);t.current.updateControlState({stateId:"editRows",propModel:r.editRowsModel,propOnChange:r.onEditRowsModelChange,stateSelector:Ul,changeEvent:ue.editRowsModelChange});const c=(e,l)=>{e.cellMode!==yn.View&&(r.editMode===On.Row?(i.current=null,a.current=setTimeout((()=>{var r;if((null===(r=i.current)||void 0===r?void 0:r.id)!==e.id){t.current.commitRowChange(e.id,l);const r=t.current.getRowParams(e.id);t.current.publishEvent(ue.rowEditStop,r,l);}}))):(t.current.commitCellChange(e,l),t.current.publishEvent(ue.cellEditStop,e,l)));},u=e$3.useCallback((e=>{i.current=e;}),[]),d=Or(((e,t)=>{c(e,t);})),p=Or((e=>{const{cell:r}=t.current.state.focus;if(!r)return;const l=t.current.getCellParams(r.id,r.field);c(l,e);})),m=e$3.useCallback(((e,r,a)=>{const i=t.current.getCellMode(e,r)===yn.Edit;a===yn.Edit&&i||a===yn.View&&!i||(l.debug(`Switching cell id: ${e} field: ${r} to mode: ${a}`),o((l=>{const o=Object.assign({},l.editRows);return o[e]=Object.assign({},o[e]),a===yn.Edit?o[e][r]={value:t.current.getCellValue(e,r)}:(delete o[e][r],Object.keys(o[e]).length||delete o[e]),Object.assign(Object.assign({},l),{editRows:o})})),n(),t.current.publishEvent(ue.cellModeChange,{id:e,field:r,mode:a,api:t.current}));}),[t,n,l,o]),f=e$3.useCallback(((e,r)=>{const l=t.current.getRowMode(e)===Sn.Edit;r===Sn.Edit&&l||r===Sn.View&&!l||(o((l=>{const o=Object.assign({},l.editRows);return r===Sn.Edit?(o[e]={},s.forEach((r=>{const l=t.current.getCellParams(e,r.field);l.isEditable&&(o[e][r.field]={value:l.value});}))):delete o[e],Object.assign(Object.assign({},l),{editRows:o})})),n());}),[t,s,n,o]),b=e$3.useCallback((e=>r.editMode===On.Cell?Sn.View:t.current.state.editRows[e]?Sn.Edit:Sn.View),[t,r.editMode]),g=e$3.useCallback(((e,r)=>{const l=t.current.state.editRows;return l[e]&&l[e][r]?yn.Edit:yn.View}),[t]),h=e$3.useCallback((e=>!!e.colDef.editable&&!!e.colDef.renderEditCell&&(!r.isCellEditable||r.isCellEditable(e))),[r.isCellEditable]),C=e$3.useCallback(((e,r)=>{const l={id:e.id,field:e.field,props:{value:e.value}};t.current.publishEvent(ue.editCellPropsChange,l,r);}),[t]),v=e$3.useCallback((e=>{const{id:r,field:a,props:i}=e;l.debug(`Setting cell props on id: ${r} field: ${a}`),o((e=>{const l=t.current.getColumn(a),o=l.valueParser?l.valueParser(i.value,t.current.getCellParams(r,a)):i.value,n=Object.assign({},e.editRows);return n[r]=Object.assign({},e.editRows[r]),n[r][a]=Object.assign(Object.assign({},i),{value:o}),Object.assign(Object.assign({},e),{editRows:n})})),n();}),[t,n,l,o]),w=e$3.useCallback((e=>{v(e);}),[v]),O=e$3.useCallback((e=>{Ul(t.current.state)!==e&&(l.debug("Setting editRows model"),o((t=>Object.assign(Object.assign({},t),{editRows:e}))),n());}),[t,n,l,o]),y=e$3.useCallback((()=>t.current.state.editRows),[t]),S=e$3.useCallback(((e,r)=>{const{id:l,field:o}=e,n=t.current.getEditRowsModel();if(!n[l]||!n[l][o])throw new Error(`MUI: Cell at id: ${l} and field: ${o} is not in edit mode.`);const{error:a,value:i}=n[l][o];if(!a){const l=Object.assign(Object.assign({},e),{value:i});return t.current.publishEvent(ue.cellEditCommit,l,r),!0}return !1}),[t]),E=e$3.useCallback((e=>{if(r.editMode===On.Row)throw new Error("MUI: You can't commit changes when the edit mode is 'row'.");const{id:o,field:n}=e,a=t.current.getEditRowsModel(),{value:i}=a[o][n];l.debug(`Setting cell id: ${o} field: ${n} to value: ${null==i?void 0:i.toString()}`);const s=t.current.getRow(o),c=Object.assign(Object.assign({},s),{[n]:i});t.current.updateRows([c]);}),[t,l,r.editMode]),x=e$3.useCallback(((e,l)=>{if(r.editMode===On.Cell)throw new Error("MUI: You can't commit changes when the edit mode is 'cell'.");const o=t.current.getEditRowsModel()[e];if(!o)throw new Error(`MUI: Row at id: ${e} is not being edited.`);return !Object.values(o).some((e=>!!e.error))&&(t.current.publishEvent(ue.rowEditCommit,e,l),!0)}),[t,r.editMode]),k=e$3.useCallback(((e,t)=>{e.isEditable&&(m(e.id,e.field,yn.Edit),vn(t)&&fn(t.key)&&v({id:e.id,field:e.field,props:{value:""}}));}),[v,m]),M=e$3.useCallback((e=>{t.current.setRowMode(e.id,Sn.Edit);}),[t]),P=e$3.useCallback(((e,r)=>{t.current.setRowMode(e.id,Sn.View),"Enter"===r.key&&t.current.publishEvent(ue.cellNavigationKeyDown,e,r);}),[t]),R=e$3.useCallback((e=>{const r=t.current.getEditRowsModel()[e];if(!r)throw new Error(`MUI: Row at id: ${e} is not being edited.`);const l=t.current.getRow(e),o=Object.assign({},l);Object.keys(r).forEach((e=>{o[e]=r[e].value;})),t.current.updateRows([o]);}),[t]),L=e$3.useCallback(((e,t)=>{const r=t.detail>1;e.isEditable&&e.cellMode===yn.View&&r&&t.preventDefault();}),[]),F=e$3.useCallback(((e,l)=>{const{id:o,field:n,cellMode:a,isEditable:i}=e;if(!i)return;const s=a===yn.Edit;if(r.editMode===On.Row){const r=t.current.getRowParams(e.id);return void(s?"Enter"===l.key?(t.current.commitRowChange(e.id),t.current.publishEvent(ue.rowEditStop,r,l)):"Escape"===l.key&&t.current.publishEvent(ue.rowEditStop,r,l):"Enter"===l.key&&t.current.publishEvent(ue.rowEditStart,r,l))}const c=l.ctrlKey||l.metaKey||l.altKey;var u;if(!s&&(u=l.key,nn(u)||pn(u)||fn(u))&&!c&&t.current.publishEvent(ue.cellEditStart,e,l),!s&&pn(l.key)&&(t.current.setEditCellValue({id:o,field:n,value:""}),t.current.commitCellChange({id:o,field:n},l),t.current.publishEvent(ue.cellEditStop,e,l)),s&&hn(l.key)){const e={id:o,field:n};if(!t.current.commitCellChange(e,l))return}s&&(e=>bn.indexOf(e)>-1)(l.key)&&t.current.publishEvent(ue.cellEditStop,e,l);}),[t,r.editMode]),I=e$3.useCallback(((e,r)=>{m(e.id,e.field,yn.View),vn(r)&&(hn(r.key)?t.current.publishEvent(ue.cellNavigationKeyDown,e,r):("Escape"===r.key||pn(r.key))&&t.current.setCellFocus(e.id,e.field));}),[t,m]),j=e$3.useCallback(((e,l)=>{if(e.isEditable)if(r.editMode===On.Row){const r=t.current.getRowParams(e.id);t.current.publishEvent(ue.rowEditStart,r,l);}else t.current.publishEvent(ue.cellEditStart,e,l);}),[t,r.editMode]);jr(t,ue.cellKeyDown,F),jr(t,ue.cellMouseDown,L),jr(t,ue.cellDoubleClick,j),jr(t,ue.cellFocusOut,d),jr(t,ue.cellFocusIn,u),jr(t,ue.columnHeaderDragStart,p),jr(t,ue.editCellPropsChange,w),jr(t,ue.cellEditStart,k),jr(t,ue.cellEditStop,I),jr(t,ue.cellEditCommit,E),jr(t,ue.rowEditStart,M),jr(t,ue.rowEditStop,P),jr(t,ue.rowEditCommit,R),Tr(t,ue.editCellPropsChange,r.onEditCellPropsChange),Tr(t,ue.cellEditCommit,r.onCellEditCommit),Tr(t,ue.cellEditStart,r.onCellEditStart),Tr(t,ue.cellEditStop,r.onCellEditStop),Tr(t,ue.rowEditCommit,r.onRowEditCommit),Tr(t,ue.rowEditStart,r.onRowEditStart),Tr(t,ue.rowEditStop,r.onRowEditStop),br(t,{setCellMode:m,getCellMode:g,setRowMode:f,getRowMode:b,isCellEditable:h,commitCellChange:S,commitRowChange:x,setEditRowsModel:O,getEditRowsModel:y,setEditCellValue:C},"EditRowApi"),e$3.useEffect((()=>{void 0!==r.editRowsModel&&t.current.setEditRowsModel(r.editRowsModel);}),[t,r.editRowsModel]);}function Ji(e,t,r){const l=t?t(e):e.id;return Gn(l,e,r),l}function Qi(e,t,r){const l={idRowsLookup:{},allRows:[],totalRowCount:t&&t>e.length?t:e.length};return e.forEach((e=>{const t=Ji(e,r);l.allRows.push(t),l.idRowsLookup[t]=e;})),l}function ts(t){const r=e$3.useCallback((e=>({field:e,colDef:t.current.getColumn(e)})),[t]),l=e$3.useCallback((e=>{const r=t.current.getRow(e);if(!r)throw new Error(`No row with id #${e} found`);return {id:e,columns:t.current.getAllColumns(),row:r,getValue:t.current.getCellValue}}),[t]),o=e$3.useCallback(((e,r)=>{const l=t.current.getRow(e);if(!l)throw new Error(`No row with id #${e} found`);const o=ol(t.current.state),n=il(t.current.state);return {id:e,field:r,row:l,value:l[r],colDef:t.current.getColumn(r),cellMode:t.current.getCellMode(e,r),getValue:t.current.getCellValue,api:t.current,hasFocus:null!==o&&o.field===r&&o.id===e,tabIndex:n&&n.field===r&&n.id===e?0:-1}}),[t]),n=e$3.useCallback(((e,r)=>{const l=t.current.getColumn(r),o=t.current.getCellValue(e,r),n=t.current.getRow(e);if(!n)throw new Error(`No row with id #${e} found`);const a=ol(t.current.state),i=il(t.current.state),s={id:e,field:r,row:n,colDef:l,cellMode:t.current.getCellMode(e,r),getValue:t.current.getCellValue,hasFocus:null!==a&&a.field===r&&a.id===e,tabIndex:i&&i.field===r&&i.id===e?0:-1,value:o,formattedValue:o};return l.valueFormatter&&(s.formattedValue=l.valueFormatter({id:e,field:s.field,value:s.value,api:t.current})),s.isEditable=l&&t.current.isCellEditable(s),s}),[t]),a=e$3.useCallback(((e,r)=>{const l=t.current.getColumn(r);if(!l||!l.valueGetter){const l=t.current.getRow(e);if(!l)throw new Error(`No row with id #${e} found`);return l[r]}return l.valueGetter(o(e,r))}),[t,o]),i=e$3.useCallback((e=>t.current.rootElementRef.current?function(e,t){return e.querySelector(`[role="columnheader"][data-field="${Cl(t)}"]`)}(t.current.rootElementRef.current,e):null),[t]),s=e$3.useCallback((e=>t.current.rootElementRef.current?vl(t.current.rootElementRef.current,e):null),[t]),c=e$3.useCallback(((e,r)=>t.current.rootElementRef.current?function(e,{id:t,field:r}){const l=vl(e,t);return l?l.querySelector(`.${Pr.cell}[data-field="${Cl(r)}"]`):null}(t.current.rootElementRef.current,{id:e,field:r}):null),[t]);br(t,{getCellValue:a,getCellParams:n,getCellElement:c,getRowParams:l,getRowElement:s,getColumnHeaderParams:r,getColumnHeaderElement:i},"GridParamsApi");}function rs(e,t,r=0,l=t.length){if(t.length<=0)return -1;if(r>=l)return r;const o=r+Math.floor((l-r)/2);return e<=t[o]?rs(e,t,r,o):rs(e,t,o+1,l)}const ls=(t,r)=>{var l;const o=fr(t,"useGridVirtualization");Ai(t,(e=>Object.assign(Object.assign({},e),{rendering:{realScroll:{left:0,top:0},renderContext:null,renderingZoneScroll:{left:0,top:0},virtualPage:0,virtualRowsCount:0}})));const n=t.current.columnHeadersElementRef,a=t.current.windowRef,i=t.current.renderingZoneRef,[s,c,u]=hr(t),d=Cr(t,Hn),p=Cr(t,Ar),m=Cr(t,he),f=Cr(t,Ce),b=e$3.useRef(null),g=e$3.useRef(null),h=e$3.useRef(0),[C]=Ya(t,i,n),v=e$3.useCallback((e=>{let t=!1;return c((r=>{const l=Object.assign(Object.assign({},r.rendering),e);return ur(r.rendering,l)?r:(t=!0,Object.assign(Object.assign({},r),{rendering:l}))})),t}),[c]),w=e$3.useCallback((e=>{if(null==t.current.state.containerSizes)return null;let l=0;r.pagination&&"client"===r.paginationMode&&(l=d.pageSize*d.page);const o=e*t.current.state.containerSizes.viewportPageSize+l;let n=o+t.current.state.containerSizes.renderingZonePageSize;const a=t.current.state.containerSizes.virtualRowsCount+l;n>a&&(n=a);return {page:e,firstRowIdx:o,lastRowIdx:n}}),[t,r.pagination,d.pageSize,r.paginationMode,d.page]),O=e$3.useCallback((()=>{if(null==t.current.state.containerSizes)return null;return Object.assign(Object.assign(Object.assign({},b.current),w(t.current.state.rendering.virtualPage)),{paginationCurrentPage:d.page,pageSize:d.pageSize})}),[b,w,t,d.page,d.pageSize]),y=e$3.useCallback((()=>{const e=O();v({renderContext:e})&&(o.debug("reRender: trigger rendering"),u());}),[O,o,u,v]),S=e$3.useCallback((e=>rs(e,f.positions)),[f.positions]),E=e$3.useCallback((e=>m.length?m[S(e)]:null),[S,m]),x=e$3.useCallback(((e,l)=>{var n,a,i,s;if(!e)return !1;g.current=e;const c=e.windowSizes.width;h.current=l,o.debug(`GridColumns from ${null===(n=E(l))||void 0===n?void 0:n.field} to ${null===(a=E(l+c))||void 0===a?void 0:a.field}`);const u=S(l),d=S(l+c),p=(null===(i=null==b?void 0:b.current)||void 0===i?void 0:i.firstColIdx)||0,C=(null===(s=null==b?void 0:b.current)||void 0===s?void 0:s.lastColIdx)||0,v=r.columnBuffer,w=v>1?v-1:v,O=Math.abs(u-w-p),y=Math.abs(d+w-C);o.debug(`Column buffer: ${v}, tolerance: ${w}`),o.debug(`Previous values  => first: ${p}, last: ${C}`),o.debug(`Current displayed values  => first: ${u}, last: ${d}`),o.debug(`Difference with first: ${O} and last: ${y} `);const x=m.length>0?m.length-1:0,k=u-v>=0?u-v:0,M={leftEmptyWidth:f.positions[k],rightEmptyWidth:0,firstColIdx:k,lastColIdx:d+v>=x?x:d+v};return t.current.state.scrollBar.hasScrollX?M.rightEmptyWidth=f.totalWidth-f.positions[M.lastColIdx]-m[M.lastColIdx].computedWidth:r.disableExtendRowFullWidth||(M.rightEmptyWidth=t.current.state.viewportSizes.width-f.totalWidth),ur(M,b.current)?(o.debug("No rendering needed on columns"),!1):(b.current=M,o.debug("New columns state to render",M),!0)}),[t,f.positions,f.totalWidth,E,S,o,r.columnBuffer,r.disableExtendRowFullWidth,m]),k=e$3.useCallback(((e=!1)=>{if(r.disableVirtualization)return;const l=t.current.state,n=l.containerSizes;if(!a||!a.current||!n)return;const i=l.scrollBar,{scrollLeft:s,scrollTop:c}=a.current;o.debug(`Handling scroll Left: ${s} Top: ${c}`);let u=x(n,s);const p=s,m=l.containerSizes.renderingZoneScrollHeight,f=l.rendering.virtualPage,b=m>0?Math.floor(c/m):0,g=c%m,h={left:i.hasScrollX?p:0,top:n.isVirtualized?g:c};n.isVirtualized&&f!==b?(v({virtualPage:b}),o.debug(`Changing page from ${f} to ${b}`),u=!0):(!n.isVirtualized&&f>0&&(o.debug("Virtualization disabled, setting virtualPage to 0"),v({virtualPage:0})),C(h)),v({renderingZoneScroll:h,realScroll:{left:a.current.scrollLeft,top:a.current.scrollTop}}),t.current.publishEvent(ue.rowsScroll,h);const w=l.rendering.renderContext&&l.rendering.renderContext.paginationCurrentPage!==d.page;(e||u||w)&&y();}),[t,o,d.page,y,C,v,x,a,r.disableVirtualization]),M=e$3.useCallback((()=>{C({left:0,top:0}),v({virtualPage:0}),a&&a.current&&(a.current.scrollTop=0,a.current.scrollLeft=0),v({renderingZoneScroll:{left:0,top:0}});}),[C,v,a]),P=e$3.useCallback((()=>{r.disableVirtualization||a.current.scrollLeft<0||a.current.scrollTop<0||t.current.updateViewport&&t.current.updateViewport();}),[r.disableVirtualization,a,t]),R=e$3.useCallback((()=>s.containerSizes),[s.containerSizes]),L=e$3.useCallback((()=>s.rendering.renderContext||void 0),[s.rendering.renderContext]);yr((()=>{r.disableVirtualization||i&&i.current&&(o.debug("applying scrollTop ",s.rendering.renderingZoneScroll.top),C(s.rendering.renderingZoneScroll));}));br(t,{getContainerPropsState:R,getRenderContextState:L,updateViewport:k},"GridVirtualizationApi"),e$3.useEffect((()=>{var e;(null===(e=s.rendering.renderContext)||void 0===e?void 0:e.paginationCurrentPage)!==d.page&&t.current.updateViewport&&(o.debug(`State paginationState.page changed to ${d.page}. `),t.current.updateViewport(!0),M());}),[t,d.page,null===(l=s.rendering.renderContext)||void 0===l?void 0:l.paginationCurrentPage,o,M]),e$3.useEffect((()=>{t.current.updateViewport&&(o.debug(`totalRowCount has changed to ${p}, updating viewport.`),t.current.updateViewport(!0));}),[o,p,s.viewportSizes,s.scrollBar,s.containerSizes,t]),Ja(t,a,"scroll",P,{passive:!0});const F=e$3.useCallback((()=>{o.debug("Clearing previous renderedColRef"),b.current=null;}),[o,b]);jr(t,ue.columnsChange,F),jr(t,ue.debouncedResize,F);};function os(e){const{clientHeight:t,scrollTop:r,offsetHeight:l,offsetTop:o}=e,n=o+l;return n-t>r?n-t:o<r?o:void 0}const as=(t,r)=>{Di(t,r),function(t,r){const l=fr(t,"useResizeContainer"),o=e$3.useRef(!1),n=e$3.useCallback((()=>{var e;l.debug("resizing..."),t.current.publishEvent(ue.debouncedResize,null===(e=t.current.state.containerSizes)||void 0===e?void 0:e.windowSizes);}),[t,l]);br(t,{resize:n},"GridEventsApi");const a=e$3.useMemo((()=>debounce$2(n,60)),[n]),i=e$3.useCallback((e=>{const t=/jsdom/.test(window.navigator.userAgent);0!==e.height||o.current||r.autoHeight||t||(l.warn(["The parent of the grid has an empty height.","You need to make sure the container has an intrinsic height.","The grid displays with a height of 0px.","","You can find a solution in the docs:","https://mui.com/components/data-grid/layout/"].join("\n")),o.current=!0),0!==e.width||o.current||t||(l.warn(["The parent of the grid has an empty width.","You need to make sure the container has an intrinsic width.","The grid displays with a width of 0px.","","You can find a solution in the docs:","https://mui.com/components/data-grid/layout/"].join("\n")),o.current=!0),a();}),[r.autoHeight,a,l,n]);e$3.useEffect((()=>()=>{l.info("canceling resize..."),a.clear();}),[l,a]),e$3.useEffect((()=>{l.info("canceling resize..."),a.clear();}),[r.rows,a,l]),jr(t,ue.resize,i),Tr(t,ue.debouncedResize,r.onResize);}(t,r),Vi(t,r),((t,r)=>{const l=fr(t,"useGridRows"),o=e$3.useRef({state:{idRowsLookup:{},allRows:[],totalRowCount:0},timeout:null,lastUpdateMs:Date.now()});Ai(t,(e=>(o.current.state=Qi(r.rows,r.rowCount,r.getRowId),Object.assign(Object.assign({},e),{rows:o.current.state}))));const[,n,a]=hr(t),i=e$3.useCallback((e=>t.current.getSortedRowIds?t.current.getSortedRowIds().indexOf(e):t.current.state.rows.allRows.indexOf(e)),[t]),s=e$3.useCallback((e=>t.current.getSortedRowIds?t.current.getSortedRowIds()[e]:t.current.state.rows.allRows[e]),[t]),c=e$3.useCallback((e=>{var r;return null!==(r=$r(t.current.state)[e])&&void 0!==r?r:null}),[t]),u=e$3.useCallback(((e,l)=>{const i=()=>{o.current.timeout=null,o.current.lastUpdateMs=Date.now(),n((e=>Object.assign(Object.assign({},e),{rows:o.current.state}))),t.current.publishEvent(ue.rowsSet),a();};if(o.current.timeout&&clearTimeout(o.current.timeout),o.current.state=e,o.current.timeout=null,!l)return void i();const s=null===o.current.lastUpdateMs?0:r.throttleRowsMs-(Date.now()-o.current.lastUpdateMs);s>0?o.current.timeout=setTimeout(i,s):i();}),[t,a,n,o,r.throttleRowsMs]),d=e$3.useCallback((e=>{l.debug(`Updating all rows, new length ${e.length}`),u(Qi(e,r.rowCount,r.getRowId),!0);}),[l,u,r.rowCount,r.getRowId]),p=e$3.useCallback((e=>{const l=new Map;e.forEach((e=>{const t=Ji(e,r.getRowId,"A row was provided without id when calling updateRows():");l.has(t)?l.set(t,Object.assign(Object.assign({},l.get(t)),e)):l.set(t,e);}));const n=[],a=Object.assign({},o.current.state.idRowsLookup);let i=[...o.current.state.allRows];l.forEach(((e,r)=>"delete"===e._action?(delete a[r],void n.push(r)):t.current.getRow(r)?void(a[r]=Object.assign(Object.assign({},t.current.getRow(r)),e)):(a[r]=e,void i.push(r)))),n.length>0&&(i=i.filter((e=>!n.includes(e))));const s=r.rowCount&&r.rowCount>i.length?r.rowCount:i.length;u({idRowsLookup:a,allRows:i,totalRowCount:s},!0);}),[t,r.getRowId,r.rowCount,u]),m=e$3.useCallback((()=>{const e=Nr(t.current.state),r=$r(t.current.state);return new Map(e.map((e=>[e,r[e]])))}),[t]),f=e$3.useCallback((()=>Ar(t.current.state)),[t]),b=e$3.useCallback((()=>Nr(t.current.state)),[t]);e$3.useEffect((()=>()=>{null!==o.current.timeout&&clearTimeout(o.current.timeout);}),[]);const g=e$3.useRef(!0);e$3.useEffect((()=>{g.current?g.current=!1:(l.debug(`Updating all rows, new length ${r.rows.length}`),u(Qi(r.rows,r.rowCount,r.getRowId),!1));}),[r.rows,r.rowCount,r.getRowId,l,u]),br(t,{getRowIndex:i,getRowIdFromRowIndex:s,getRow:c,getRowModels:m,getRowsCount:f,getAllRowIds:b,setRows:d,updateRows:p},"GridRowApi");})(t,r),ts(t),Xi(t,r),((t,r)=>{const l=fr(t,"useGridFocus");Ai(t,(e=>Object.assign(Object.assign({},e),{focus:{cell:null,columnHeader:null},tabIndex:{cell:null,columnHeader:null}})));const[,o,n]=hr(t),a=e$3.useRef(null),i=e$3.useCallback(((e,r)=>{t.current.getRow(e)&&(o((t=>(l.debug(`Focusing on cell with id=${e} and field=${r}`),Object.assign(Object.assign({},t),{tabIndex:{cell:{id:e,field:r},columnHeader:null},focus:{cell:{id:e,field:r},columnHeader:null}})))),n(),t.current.publishEvent(ue.cellFocusIn,t.current.getCellParams(e,r)));}),[t,n,l,o]),s=e$3.useCallback(((e,r)=>{const{cell:a}=t.current.state.focus;a&&t.current.publishEvent(ue.cellFocusOut,t.current.getCellParams(a.id,a.field),r),o((t=>(l.debug(`Focusing on column header with colIndex=${e}`),Object.assign(Object.assign({},t),{tabIndex:{columnHeader:{field:e},cell:null},focus:{columnHeader:{field:e},cell:null}})))),n();}),[t,n,l,o]),c=e$3.useCallback((({id:e,field:r})=>{t.current.setCellFocus(e,r);}),[t]),d=e$3.useCallback(((e,r)=>{"Enter"===r.key||"Tab"===r.key||Cn(r.key)||t.current.setCellFocus(e.id,e.field);}),[t]),p=e$3.useCallback((({field:e},r)=>{r.target===r.currentTarget&&t.current.setColumnHeaderFocus(e,r);}),[t]),m=e$3.useCallback((()=>{l.debug("Clearing focus"),o((e=>Object.assign(Object.assign({},e),{focus:{cell:null,columnHeader:null}})));}),[l,o]),f=e$3.useCallback((e=>{a.current=e;}),[]),b=e$3.useCallback((e=>{const r=a.current;a.current=null;const{cell:l}=t.current.state.focus;if(!l)return void(r&&t.current.setCellFocus(r.id,r.field));if((null==r?void 0:r.id)===l.id&&(null==r?void 0:r.field)===l.field)return;const i=t.current.getCellElement(l.id,l.field);(null==i?void 0:i.contains(e.target))||t.current.getRow(l.id)&&(t.current.publishEvent(ue.cellFocusOut,t.current.getCellParams(l.id,l.field),e),r?t.current.setCellFocus(r.id,r.field):(o((e=>Object.assign(Object.assign({},e),{focus:{cell:null,columnHeader:null}}))),n()));}),[t,n,o]),g=e$3.useCallback((e=>{if("view"===e.cellMode)return;const{cell:r}=t.current.state.focus;(null==r?void 0:r.id)===e.id&&(null==r?void 0:r.field)===e.field||t.current.setCellFocus(e.id,e.field);}),[t]);br(t,{setCellFocus:i,setColumnHeaderFocus:s},"GridFocusApi"),e$3.useEffect((()=>{const{cell:e}=t.current.state.focus;e&&(t.current.getRow(e.id)||o((e=>Object.assign(Object.assign({},e),{focus:{cell:null,columnHeader:null}}))));}),[t,o,r.rows]),e$3.useEffect((()=>{const e=ownerDocument$1(t.current.rootElementRef.current);return e.addEventListener("click",b),()=>{e.removeEventListener("click",b);}}),[t,b]),jr(t,ue.columnHeaderBlur,m),jr(t,ue.cellDoubleClick,c),jr(t,ue.cellMouseUp,f),jr(t,ue.cellKeyDown,d),jr(t,ue.cellModeChange,g),jr(t,ue.columnHeaderFocus,p);})(t,r),((t,r)=>{const l=fr(t,"useGridSelection"),o=e$3.useMemo((()=>null==r.selectionModel||Array.isArray(r.selectionModel)?r.selectionModel:[r.selectionModel]),[r.selectionModel]);Ai(t,(e=>Object.assign(Object.assign({},e),{selection:null!=o?o:[]})));const[,n,a]=hr(t),i=Cr(t,$r),s=e$3.useRef(null);t.current.updateControlState({stateId:"selection",propModel:o,propOnChange:r.onSelectionModelChange,stateSelector:Kl,changeEvent:ue.selectionChange});const{checkboxSelection:c,disableMultipleSelection:u,disableSelectionOnClick:d,isRowSelectable:p}=r,m=!u||c,f=e$3.useCallback((()=>ql(t.current.state)),[t]),b=e$3.useCallback(((e,r=!0,o=!1)=>{if(!p||p(t.current.getRowParams(e)))if(s.current=e,o)l.debug(`Setting selection for row ${e}`),t.current.setSelectionModel(r?[e]:[]);else {l.debug(`Toggling selection for row ${e}`);const o=Kl(t.current.state).filter((t=>t!==e));r&&o.push(e),(o.length<2||m)&&t.current.setSelectionModel(o);}}),[t,p,l,m]),g=e$3.useCallback(((e,r=!0,o=!1)=>{l.debug("Setting selection for several rows");const n=p?e.filter((e=>p(t.current.getRowParams(e)))):e;let a;if(o)a=r?n:[];else {const e=Object.assign({},Yl(t.current.state));n.forEach((t=>{r?e[t]=t:delete e[t];})),a=Object.values(e);}(a.length<2||m)&&t.current.setSelectionModel(a);}),[t,p,l,m]),h=e$3.useCallback((({startId:e,endId:r},o=!0,n)=>{if(!t.current.getRow(e)||!t.current.getRow(r))return;l.debug(`Expanding selection from row ${e} to row ${r}`);const a=Jr(t.current.state),i=a.indexOf(e),s=a.indexOf(r),[c,u]=i>s?[s,i]:[i,s],d=a.slice(c,u+1);t.current.selectRows(d,o,n);}),[t,l]),C=e$3.useCallback((e=>{var r;let l=e;const o=null!==(r=s.current)&&void 0!==r?r:e,n=t.current.isRowSelected(e);if(n){const e=Jr(t.current.state),r=e.findIndex((e=>e===o)),n=e.findIndex((e=>e===l));l=r>n?e[n+1]:e[n-1];}s.current=e,t.current.selectRowRange({startId:o,endId:l},!n);}),[t]),v=e$3.useCallback((e=>{Kl(t.current.state)!==e&&(l.debug("Setting selection model"),n((t=>Object.assign(Object.assign({},t),{selection:e}))),a());}),[t,n,a,l]),w=e$3.useCallback((e=>Kl(t.current.state).includes(e)),[t]),O=e$3.useCallback(((e,r)=>{if(d)return;const l=r.metaKey||r.ctrlKey;if(r.shiftKey&&(m||c))C(e.id);else {const r=!c&&!l;!m||r?t.current.selectRow(e.id,!l&&!c||!t.current.isRowSelected(e.id),!0):t.current.selectRow(e.id,!t.current.isRowSelected(e.id),!1);}}),[t,C,m,d,c]),y=e$3.useCallback(((e,t)=>{var r;m&&t.shiftKey&&(null===(r=window.getSelection())||void 0===r||r.removeAllRanges());}),[m]),S=e$3.useCallback(((e,r)=>{r.nativeEvent.shiftKey?C(e.id):t.current.selectRow(e.id,e.value);}),[t,C]),E=e$3.useCallback((e=>{const l=r.checkboxSelectionVisibleOnly&&r.pagination?$n(t.current.state):Jr(t.current.state);t.current.selectRows(l,e.value);}),[t,r.checkboxSelectionVisibleOnly,r.pagination]);jr(t,ue.rowClick,O),jr(t,ue.rowSelectionCheckboxChange,S),jr(t,ue.headerSelectionCheckboxChange,E),jr(t,ue.cellMouseDown,y),br(t,{selectRow:b,selectRows:g,selectRowRange:h,setSelectionModel:v,getSelectedRows:f,isRowSelected:w},"GridSelectionApi"),e$3.useEffect((()=>{const e=Kl(t.current.state),r=Object.assign({},Yl(t.current.state));let l=!1;e.forEach((e=>{i[e]||(delete r[e],l=!0);})),l&&t.current.setSelectionModel(Object.values(r));}),[i,t]),e$3.useEffect((()=>{void 0!==o&&t.current.setSelectionModel(o);}),[t,o]);const x=null!=o;e$3.useEffect((()=>{if(x)return;const e=Kl(t.current.state);if(p){const r=e.filter((e=>p(t.current.getRowParams(e))));r.length<e.length&&t.current.setSelectionModel(r);}}),[t,p,x]);})(t,r),((t,r)=>{const l=fr(t,"useGridSorting");Ai(t,(e=>{var t;return Object.assign(Object.assign({},e),{sorting:{sortModel:null!==(t=r.sortModel)&&void 0!==t?t:[],sortedRows:[]}})}));const[,o,n]=hr(t);t.current.updateControlState({stateId:"sortModel",propModel:r.sortModel,propOnChange:r.onSortModelChange,stateSelector:Gr,changeEvent:ue.sortModelChange});const a=e$3.useCallback(((e,r)=>{const l=Gr(t.current.state),o=l.findIndex((t=>t.field===e));let n=[...l];return o>-1?r?n.splice(o,1,r):n.splice(o,1):n=[...l,r],n}),[t]),i=e$3.useCallback(((e,l)=>{const o=Gr(t.current.state).find((t=>t.field===e.field));if(o){const e=void 0===l?Vo(r.sortingOrder,o.sort):l;return null==e?void 0:Object.assign(Object.assign({},o),{sort:e})}return {field:e.field,sort:void 0===l?Vo(r.sortingOrder):l}}),[t,r.sortingOrder]),s=e$3.useCallback(((e,r)=>({id:e,field:r,value:t.current.getCellValue(e,r),api:t.current})),[t]),c=e$3.useCallback((e=>(t,r)=>e.reduce(((e,l,o)=>{if(0!==e)return e;const{comparator:n}=l,a=t[o],i=r[o];return n(a.value,i.value,a,i)}),0)),[]),u=e$3.useCallback((e=>e.map((e=>{const r=t.current.getColumn(e.field);if(!r)throw new Error(`Error sorting: column with field '${e.field}' not found. `);const l="desc"===e.sort?(e,t,l,o)=>-1*r.sortComparator(e,t,l,o):r.sortComparator;return {field:r.field,comparator:l}}))),[t]),d=e$3.useCallback((()=>{let e=t.current.getAllRowIds();if(r.sortingMode===Vn.server)return l.debug("Skipping sorting rows as sortingMode = server"),void o((t=>Object.assign(Object.assign({},t),{sorting:Object.assign(Object.assign({},t.sorting),{sortedRows:e})})));const a=Gr(t.current.state);if(a.length>0){const t=u(a);l.debug("Sorting rows with ",a),e=e.map((e=>t.map((t=>s(e,t.field))))).sort(c(t)).map((e=>e[0].id));}o((t=>Object.assign(Object.assign({},t),{sorting:Object.assign(Object.assign({},t.sorting),{sortedRows:e})}))),n();}),[t,l,s,o,n,u,c,r.sortingMode]),p=e$3.useCallback((e=>{Gr(t.current.state)!==e&&(l.debug("Setting sort model"),o((t=>Object.assign(Object.assign({},t),{sorting:Object.assign(Object.assign({},t.sorting),{sortModel:e})}))),n(),t.current.applySorting());}),[t,o,n,l]),m=e$3.useCallback(((e,l,o)=>{if(!e.sortable)return;const n=i(e,l);let s;s=!o||r.disableMultipleColumnsSorting?n?[n]:[]:a(e.field,n),t.current.setSortModel(s);}),[t,a,i,r.disableMultipleColumnsSorting]),f=e$3.useCallback((()=>Gr(t.current.state)),[t]),b=e$3.useCallback((()=>Object.values(Wr(t.current.state))),[t]),g=e$3.useCallback((()=>Br(t.current.state)),[t]);br(t,{getSortModel:f,getSortedRows:b,getSortedRowIds:g,setSortModel:p,sortColumn:m,applySorting:d},"GridSortApi"),e$3.useEffect((()=>{void 0!==r.sortModel&&t.current.setSortModel(r.sortModel);}),[t,r.sortModel]),Gi((()=>t.current.applySorting()));const h=e$3.useCallback((({colDef:e},t)=>{const r=t.shiftKey||t.metaKey||t.ctrlKey;m(e,void 0,r);}),[m]),C=e$3.useCallback((({colDef:e},t)=>{!nn(t.key)||t.ctrlKey||t.metaKey||m(e,void 0,t.shiftKey);}),[m]),v=e$3.useCallback((()=>{const e=Gr(t.current.state),r=ge(t.current.state);if(e.length>0){const l=e.filter((e=>r.find((t=>t.field===e.field))));l.length<e.length&&t.current.setSortModel(l);}}),[t]);jr(t,ue.columnHeaderClick,h),jr(t,ue.columnHeaderKeyDown,C),jr(t,ue.rowsSet,t.current.applySorting),jr(t,ue.columnsChange,v);})(t,r),(t=>{const r=fr(t,"useGridPreferencesPanel");Ai(t,(e=>Object.assign(Object.assign({},e),{preferencePanel:{open:!1}})));const[,l,o]=hr(t),n=e$3.useRef(),a=e$3.useRef(),i=e$3.useCallback((()=>{r.debug("Hiding Preferences Panel"),l((e=>Object.assign(Object.assign({},e),{preferencePanel:{open:!1}}))),o();}),[o,r,l]),s=e$3.useCallback((()=>{a.current=setTimeout((()=>clearTimeout(n.current)),0);}),[]),c=e$3.useCallback((()=>{n.current=setTimeout(i,100);}),[i]);br(t,{showPreferences:e$3.useCallback((e=>{r.debug("Opening Preferences Panel"),s(),l((t=>Object.assign(Object.assign({},t),{preferencePanel:Object.assign(Object.assign({},t.preferencePanel),{open:!0,openedPanelValue:e})}))),o();}),[s,o,r,l]),hidePreferences:c},"ColumnMenuApi"),e$3.useEffect((()=>()=>{clearTimeout(n.current),clearTimeout(a.current);}),[]);})(t),((t,r)=>{const l=fr(t,"useGridFilter");Ai(t,(e=>{var t;return r.filterModel&&Ui(r.filterModel),Object.assign(Object.assign({},e),{filter:{filterModel:null!==(t=r.filterModel)&&void 0!==t?t:Ka(),visibleRowsLookup:{},visibleRows:null}})}));const[,o,n]=hr(t);t.current.updateControlState({stateId:"filter",propModel:r.filterModel,propOnChange:r.onFilterModelChange,stateSelector:Zr,changeEvent:ue.filterModelChange});const a=e$3.useCallback(((e,r=Bn.And)=>{if(!e.columnField||!e.operatorValue)return;const a=t.current.getColumn(e.columnField);if(!a)return;const i=a.valueParser?a.valueParser(e.value):e.value,s=Object.assign(Object.assign({},e),{value:i});l.debug(`Filtering column: ${s.columnField} ${s.operatorValue} ${s.value} `);const c=a.filterOperators;if(!(null==c?void 0:c.length))throw new Error(`MUI: No filter operators found for column '${a.field}'.`);const u=c.find((e=>e.value===s.operatorValue));if(!u)throw new Error(`MUI: No filter operator found for column '${a.field}' and operator value '${s.operatorValue}'.`);const d=u.getApplyFilterFn(s,a);"function"==typeof d&&(o((e=>{const l=Object.assign({},qr(e));return Wr(e).forEach(((e,o)=>{const n=t.current.getCellParams(o,s.columnField),a=d(n);null==l[o]?l[o]=a:l[o]=r===Bn.And?l[o]&&a:l[o]||a;})),Object.assign(Object.assign({},e),{filter:Object.assign(Object.assign({},e.filter),{visibleRowsLookup:l,visibleRows:Object.entries(l).filter((([,e])=>e)).map((([e])=>e))})})})),n());}),[t,n,l,o]),i=e$3.useCallback((()=>{if(r.filterMode===Vn.server)return void n();o((e=>Object.assign(Object.assign({},e),{filter:Object.assign(Object.assign({},e.filter),{visibleRowsLookup:{},visibleRows:null})})));const{items:e,linkOperator:l}=Zr(t.current.state);e.forEach((e=>{t.current.applyFilter(e,l);})),n();}),[t,o,n,r.filterMode]),s=e$3.useCallback((e=>{l.debug("Upserting filter"),o((l=>{const o=we(l),n=[...Zr(l).items],a=Object.assign({},e),i=n.findIndex((e=>e.id===a.id));if(1===n.length&&ur(n[0],{})?n[0]=a:-1===i?n.push(a):n[i]=a,null==a.id&&(a.id=Math.round(1e5*Math.random())),null==a.columnField&&(a.columnField=o[0]),null!=a.columnField&&null==a.operatorValue){const e=t.current.getColumn(a.columnField);a.operatorValue=e&&e.filterOperators[0].value;}return r.disableMultipleColumnsFiltering&&n.length>1&&(n.length=1),Object.assign(Object.assign({},l),{filter:Object.assign(Object.assign({},l.filter),{filterModel:Object.assign(Object.assign({},l.filter.filterModel),{items:n})})})})),t.current.applyFilters();}),[t,l,o,r.disableMultipleColumnsFiltering]),c=e$3.useCallback((e=>{l.debug(`Deleting filter on column ${e.columnField} with value ${e.value}`),o((t=>{const r=[...Zr(t).items.filter((t=>t.id!==e.id))];return Object.assign(Object.assign({},t),{filter:Object.assign(Object.assign({},t.filter),{filterModel:Object.assign(Object.assign({},t.filter.filterModel),{items:r})})})})),0===Zr(t.current.state).items.length&&t.current.upsertFilter({}),t.current.applyFilters();}),[t,l,o]),u=e$3.useCallback((e=>{if(l.debug("Displaying filter panel"),e){const r=Zr(t.current.state),l=r.items.length>0?r.items[r.items.length-1]:null;l&&l.columnField===e||t.current.upsertFilter({columnField:e});}t.current.showPreferences(kl.filters);}),[t,l]),d=e$3.useCallback((()=>{l.debug("Hiding filter panel"),t.current.hidePreferences();}),[t,l]),p=e$3.useCallback((e=>{l.debug("Applying filter link operator"),o((t=>Object.assign(Object.assign({},t),{filter:Object.assign(Object.assign({},t.filter),{filterModel:Object.assign(Object.assign({},t.filter.filterModel),{linkOperator:e})})}))),t.current.applyFilters();}),[t,l,o]),m=e$3.useCallback((e=>{Zr(t.current.state)!==e&&(Ui(e),l.debug("Setting filter model"),o((t=>Object.assign(Object.assign({},t),{filter:Object.assign(Object.assign({},t.filter),{filterModel:e})}))),t.current.applyFilters());}),[t,l,o]),f=e$3.useCallback((()=>Yr(t.current.state)),[t]);br(t,{applyFilterLinkOperator:p,applyFilters:i,applyFilter:a,deleteFilter:c,upsertFilter:s,setFilterModel:m,showFilterPanel:u,hideFilterPanel:d,getVisibleRowModels:f},"FilterApi");const b=e$3.useCallback((()=>{l.debug("onColUpdated - GridColumns changed, applying filters");const e=Zr(t.current.state),r=we(t.current.state);l.debug("GridColumns changed, applying filters"),e.items.forEach((e=>{r.find((t=>t===e.columnField))||t.current.deleteFilter(e);})),t.current.applyFilters();}),[t,l]);e$3.useEffect((()=>{void 0!==r.filterModel&&t.current.setFilterModel(r.filterModel);}),[t,l,r.filterModel]),Gi((()=>t.current.applyFilters())),jr(t,ue.rowsSet,t.current.applyFilters),jr(t,ue.columnsChange,b);})(t,r),((t,r)=>{const l=fr(t,"useDensity");Ai(t,(e=>Object.assign(Object.assign({},e),{density:Bi(r.density,r.headerHeight,r.rowHeight)})));const[,o,n]=hr(t),a=e$3.useCallback(((e,t=r.headerHeight,a=r.rowHeight)=>{l.debug(`Set grid density to ${e}`),o((r=>{const l=cl(r),o=Bi(e,t,a);return ur(l,o)?r:Object.assign(Object.assign({},r),{density:o})})),n();}),[l,o,n,r.headerHeight,r.rowHeight]);e$3.useEffect((()=>{t.current.setDensity(r.density,r.headerHeight,r.rowHeight);}),[t,r.density,r.rowHeight,r.headerHeight]),br(t,{setDensity:a},"GridDensityApi");})(t,r),((t,r)=>{const l=fr(t,"useGridPageSize");Ai(t,(e=>{var t;return Object.assign(Object.assign({},e),{pagination:{pageSize:null!==(t=r.pageSize)&&void 0!==t?t:100}})}));const[,o,n]=hr(t),a=Cr(t,jl);t.current.updateControlState({stateId:"pageSize",propModel:r.pageSize,propOnChange:r.onPageSizeChange,stateSelector:An,changeEvent:ue.pageSizeChange});const i=e$3.useCallback((e=>{l.debug(`Setting page size to ${e}`),o((t=>Object.assign(Object.assign({},t),{pagination:Object.assign(Object.assign({},t.pagination),{pageSize:e})}))),n();}),[o,n,l]);e$3.useEffect((()=>{const e=null==a?void 0:a.viewportPageSize,l=t.current.state.pagination.pageSize;let i=l;null!=r.pageSize?i=r.pageSize:r.autoPageSize&&(i=null!=e?e:0),i!==l&&(r.autoPageSize&&t.current.publishEvent(ue.pageSizeChange,e),o((e=>Object.assign(Object.assign({},e),{pagination:Object.assign(Object.assign({},e.pagination),{pageSize:i})}))),n());}),[t,o,n,r.autoPageSize,r.pageSize,null==a?void 0:a.viewportPageSize]),br(t,{setPageSize:i},"GridPageSizeApi");})(t,r),((t,r)=>{const l=fr(t,"useGridPage");Ai(t,(e=>{var t,l;return Object.assign(Object.assign({},e),{pagination:Object.assign(Object.assign({},e.pagination),{page:0,pageCount:qi(null!==(t=r.rowCount)&&void 0!==t?t:0,e.pagination.pageSize),rowCount:null!==(l=r.rowCount)&&void 0!==l?l:0})})}));const[,o,n]=hr(t),a=Cr(t,Qr);t.current.updateControlState({stateId:"page",propModel:r.page,propOnChange:r.onPageChange,stateSelector:zn,changeEvent:ue.pageChange});const i=e$3.useCallback((e=>{l.debug(`Setting page to ${e}`),o((t=>Object.assign(Object.assign({},t),{pagination:Yi(Object.assign(Object.assign({},t.pagination),{page:e}))}))),n();}),[o,n,l]);e$3.useEffect((()=>{o((e=>{const t=void 0!==r.rowCount?r.rowCount:a,l=qi(t,e.pagination.pageSize),o=null==r.page?e.pagination.page:r.page;return Object.assign(Object.assign({},e),{pagination:Yi(Object.assign(Object.assign({},e.pagination),{page:o,rowCount:t,pageCount:l}))})})),n();}),[o,n,a,r.rowCount,r.page,t]);const s=e$3.useCallback((e=>{o((t=>{const r=qi(t.pagination.rowCount,e);return Object.assign(Object.assign({},t),{pagination:Yi(Object.assign(Object.assign({},t.pagination),{pageCount:r,page:t.pagination.page}))})})),n();}),[o,n]);jr(t,ue.pageSizeChange,s),br(t,{setPage:i},"GridPageApi");})(t,r),((t,r)=>{var l;const o=fr(t,"useGridContainerProps");Ai(t,(e=>Object.assign(Object.assign({},e),{containerSizes:null,viewportSizes:{width:0,height:1},scrollBar:{hasScrollX:!1,hasScrollY:!1,sizes:{x:0,y:0}}})));const[n,a,i]=hr(t),s=e$3.useRef({width:0,height:0}),c=Cr(t,dl),d=Cr(t,ye),p=Cr(t,Qr),m=Cr(t,Hn),f=t.current.windowRef,b=null===(l=t.current.rootElementRef)||void 0===l?void 0:l.current,g=!!d,h=e$3.useMemo((()=>{if(null!=r.scrollbarSize)return r.scrollbarSize;if(!g||!b)return 0;const e=function(e,t){const r=e.createElement("div");r.style.width="99px",r.style.height="99px",r.style.position="absolute",r.style.overflow="scroll",r.className="scrollDiv",t.appendChild(r);const l=r.offsetWidth-r.clientWidth;return t.removeChild(r),l}(ownerDocument$1(b),b);return o.debug(`Detected scroll bar size ${e}.`),e}),[b,o,r.scrollbarSize,g]),C=e$3.useCallback((()=>{if(o.debug("Calculating virtual row count."),r.pagination&&(!r.autoPageSize||r.pageSize)){const e=p-m.page*m.pageSize;return e>m.pageSize?m.pageSize:e}return p}),[o,r.autoPageSize,r.pagination,r.pageSize,m.page,m.pageSize,p]),v=e$3.useCallback((e=>{o.debug("Calculating scrollbar sizes.");let t=d>s.current.width;const l={y:0,x:t?h:0};if(0===e)return {hasScrollX:t,hasScrollY:!1,sizes:l};const n=e*c,a=!r.autoPageSize&&!r.autoHeight&&n+l.x>s.current.height;return l.y=a?h:0,t=d+l.y>s.current.width,l.x=t?h:0,o.debug(`Scrollbar size on axis x: ${l.x}, y: ${l.y}`),{hasScrollX:t,hasScrollY:a,sizes:l}}),[o,d,r.autoPageSize,r.autoHeight,c,h]),w=e$3.useCallback(((e,t)=>{if(!(null==f?void 0:f.current))return null;o.debug("Calculating container sizes.");const l=f.current.getBoundingClientRect();return s.current={width:l.width,height:l.height},o.debug(`window Size - W: ${s.current.width} H: ${s.current.height} `),{width:s.current.width-t.sizes.y,height:r.autoHeight?e*c:s.current.height-t.sizes.x}}),[o,r.autoHeight,c,f]),O=e$3.useCallback(((e,t,l)=>{if(!f||!f.current||0===d||Number.isNaN(d))return null;const n=e*c-s.current.height>2*c&&!r.disableVirtualization;if(r.autoPageSize||r.autoHeight||!n){const n=Math.floor(t.height/c),a=l.hasScrollY||e<n?e:n,i=Math.max(a*c+(r.autoHeight?l.sizes.x:0),1),u={isVirtualized:!1,virtualRowsCount:a,renderingZonePageSize:a,viewportPageSize:a,totalSizes:{width:d,height:i},dataContainerSizes:{width:d,height:i},renderingZoneScrollHeight:i-t.height,renderingZone:{width:d,height:i},windowSizes:s.current,lastPage:1};return o.debug("Fixed container props",u),u}const a=Math.floor(t.height/c),i=a>0?Math.ceil(e/a)-1:0,u=2*a,p=u*c,m=p-t.height;let b=i*m+t.height;const g=e%a;g>0&&(b=b-m+g*c);const h={isVirtualized:n,virtualRowsCount:e,viewportPageSize:a,totalSizes:{width:d,height:b},dataContainerSizes:{width:d,height:b},renderingZonePageSize:u,renderingZone:{width:d,height:p},renderingZoneScrollHeight:m,windowSizes:s.current,lastPage:i};return o.debug("virtualized container props",h),h}),[f,d,c,r.autoPageSize,r.autoHeight,r.disableVirtualization,o]),y=e$3.useCallback(((e,t)=>{let r=!1;a((l=>(r=e(l),r?t(l):l))),r&&i();}),[i,a]),S=e$3.useCallback((()=>{o.debug("Refreshing container sizes");const e=C(),t=v(e),r=w(e,t);if(!r)return;y((e=>e.scrollBar!==t),(e=>Object.assign(Object.assign({},e),{scrollBar:t}))),y((e=>e.viewportSizes!==r),(e=>Object.assign(Object.assign({},e),{viewportSizes:r})));const l=O(e,r,t);y((e=>!ur(e.containerSizes,l)),(e=>Object.assign(Object.assign({},e),{containerSizes:l})));}),[O,v,w,C,o,y]);e$3.useEffect((()=>{S();}),[n.columns,r.hideFooter,S,p]),jr(t,ue.debouncedResize,S);})(t,r),((t,r)=>{const l=fr(t,"useGridScroll"),o=t.current.columnHeadersElementRef,n=t.current.windowRef,a=Cr(t,dl),i=Cr(t,Hn),s=Cr(t,Ar),c=Cr(t,he),u=Cr(t,Ce),d=e$3.useCallback((e=>{if(0===s||0===c.length)return !1;l.debug(`Scrolling to cell at row ${e.rowIndex}, col: ${e.colIndex} `);const o={};if(null!=e.colIndex&&(o.left=os({clientHeight:n.current.clientWidth,scrollTop:n.current.scrollLeft,offsetHeight:c[e.colIndex].computedWidth,offsetTop:u.positions[e.colIndex]})),null!=e.rowIndex){const t=r.pagination?e.rowIndex-i.page*i.pageSize:e.rowIndex;o.top=os({clientHeight:n.current.clientHeight,scrollTop:n.current.scrollTop,offsetHeight:a,offsetTop:a*t});}return (void 0!==typeof o.left||void 0!==typeof o.top)&&(t.current.scroll(o),!0)}),[s,c,l,t,r.pagination,i.page,i.pageSize,n,u.positions,a]),p=e$3.useCallback((e=>{n.current&&null!=e.left&&o.current&&(o.current.scrollLeft=e.left,n.current.scrollLeft=e.left,l.debug(`Scrolling left: ${e.left}`)),n.current&&null!=e.top&&(n.current.scrollTop=e.top,l.debug(`Scrolling top: ${e.top}`)),l.debug("Scrolling, updating container, and viewport");}),[n,o,l]),m=e$3.useCallback((()=>wr(t.current.state)),[t]);br(t,{scroll:p,scrollToIndexes:d,getScrollPosition:m},"GridScrollApi");const f=e$3.useCallback((e=>{e.target.scrollLeft=0,e.target.scrollTop=0;}),[]);Ja(t,(()=>{var e,r,l;return null===(l=null===(r=null===(e=t.current)||void 0===e?void 0:e.renderingZoneRef)||void 0===r?void 0:r.current)||void 0===l?void 0:l.parentElement}),"scroll",f),Ja(t,(()=>{var e,r;return null===(r=null===(e=t.current)||void 0===e?void 0:e.columnHeadersContainerElementRef)||void 0===r?void 0:r.current}),"scroll",f);})(t,r),((t,r)=>{const l=t.current.windowRef,o=t.current.columnHeadersElementRef,n=t.current.renderingZoneRef,[,a,i]=hr(t),[s]=Ya(t,n,o),c=Cr(t,Hn),u=Cr(t,he),d=Cr(t,Qr),p=Cr(t,jl),m=e$3.useCallback((()=>{if(!p||!(null==l?void 0:l.current))return;let e=0;const{page:t,pageSize:o}=c;r.pagination&&"client"===r.paginationMode&&(e=o*t);const n={firstRowIdx:e,lastRowIdx:e+p.virtualRowsCount,firstColIdx:0,lastColIdx:u.length>0?u.length-1:0},s={top:l.current.scrollTop,left:l.current.scrollLeft};a((e=>Object.assign(Object.assign({},e),{rendering:Object.assign(Object.assign({},e.rendering),{virtualPage:0,renderContext:n,realScroll:s,renderingZoneScroll:s})}))),i();}),[p,c,r.pagination,r.paginationMode,a,i,u.length,l]),f=e$3.useCallback((()=>{a((e=>Object.assign(Object.assign({},e),{containerSizes:Object.assign(Object.assign({},e.containerSizes),{renderingZone:Object.assign(Object.assign({},e.containerSizes.renderingZone),{height:d*r.rowHeight}),renderingZonePageSize:d}),viewportSizes:Object.assign(Object.assign({},e.viewportSizes),{height:d*r.rowHeight})}))),m();}),[d,r.rowHeight,a,m]);e$3.useEffect((()=>{r.disableVirtualization&&m();}),[r.disableVirtualization,m]);const b=e$3.useCallback((()=>{if(!r.disableVirtualization||!(null==l?void 0:l.current))return;const{scrollLeft:e,scrollTop:t}=l.current;s({top:t,left:e}),m();}),[r.disableVirtualization,s,l,m]);Ja(t,l,"scroll",b,{passive:!0}),br(t,{UNSTABLE_disableVirtualization:f},"GridDisableVirtualization");})(t,r),ls(t,r),(t=>{const r=fr(t,"useGridColumnMenu");Ai(t,(e=>Object.assign(Object.assign({},e),{columnMenu:{open:!1}})));const[,l,o]=hr(t),n=Cr(t,ml),a=e$3.useCallback((e=>{l((t=>t.columnMenu.open&&t.columnMenu.field===e?t:(r.debug("Opening Column Menu"),Object.assign(Object.assign({},t),{columnMenu:{open:!0,field:e}}))))&&(t.current.hidePreferences(),o());}),[t,o,r,l]),i=e$3.useCallback((()=>{l((e=>e.columnMenu.open||void 0!==e.columnMenu.field?(r.debug("Hiding Column Menu"),Object.assign(Object.assign({},e),{columnMenu:Object.assign(Object.assign({},e.columnMenu),{open:!1,field:void 0})})):e))&&o();}),[o,r,l]),s=e$3.useCallback((e=>{r.debug("Toggle Column Menu"),n.open&&n.field===e?i():a(e);}),[r,a,i,n]);br(t,{showColumnMenu:a,hideColumnMenu:i,toggleColumnMenu:s},"ColumnMenuApi"),jr(t,ue.columnResizeStart,i),jr(t,ue.rowsScroll,i);})(t),Ki(t),Zi(t,r),Wi(t),((t,r)=>{const l=fr(t,"useGridPrintExport"),[o,n]=hr(t),a=Cr(t,dl),i=Cr(t,pl),s=Cr(t,Qr),c=Cr(t,ge),d=e$3.useRef(null),p=e$3.useRef(),m=e$3.useRef([]);e$3.useEffect((()=>{d.current=ownerDocument$1(t.current.rootElementRef.current);}),[t]);const f=e$3.useCallback(((e,r)=>new Promise((l=>{e||r?(t.current.updateColumns(c.map((t=>(t.hide&&m.current.push(t.field),r?(t.hide=!1,t):(t.hide=!(null==e?void 0:e.includes(t.field))||t.disableExport,t))))),l()):l();}))),[c,t]),b=e$3.useCallback((e=>{const t=document.createElement("iframe");return t.id="grid-print-window",t.src=window.location.href,t.style.position="absolute",t.style.width="0px",t.style.height="0px",t.title=e||document.title,t}),[]),g=e$3.useCallback(((e,r)=>{var l,o,n,c,u;const p=Object.assign({copyStyles:!0,hideToolbar:!1,hideFooter:!1},r);e.onload=null;const m=e.contentDocument||(null===(l=e.contentWindow)||void 0===l?void 0:l.document);if(!m)return;const f=t.current.rootElementRef.current,b=f.cloneNode(!0),g=b.querySelector(`.${Pr.viewport}`);g.style.minWidth="100%",g.style.maxWidth="100%";let h=(null===(o=f.querySelector(`.${Pr.toolbarContainer}`))||void 0===o?void 0:o.clientHeight)||0,C=(null===(n=f.querySelector(`.${Pr.footerContainer}`))||void 0===n?void 0:n.clientHeight)||0;p.hideToolbar&&(null===(c=b.querySelector(`.${Pr.toolbarContainer}`))||void 0===c||c.remove(),h=0),p.hideFooter&&(null===(u=b.querySelector(`.${Pr.footerContainer}`))||void 0===u||u.remove(),C=0),b.style.height=`${s*a+i+h+C}px`,m.body.innerHTML="",m.body.appendChild(b);const v="function"==typeof p.pageStyle?p.pageStyle():p.pageStyle;if("string"!=typeof v){const e=m.createElement("style");e.appendChild(m.createTextNode(v)),m.head.appendChild(e);}if(p.bodyClassName&&m.body.classList.add(...p.bodyClassName.split(" ")),p.copyStyles){const e=d.current.querySelectorAll("style, link[rel='stylesheet']");for(let t=0;t<e.length;t+=1){const r=e[t];if("STYLE"===r.tagName){const e=m.createElement(r.tagName),t=r.sheet;if(t){let r="";for(let e=0;e<t.cssRules.length;e+=1)"string"==typeof t.cssRules[e].cssText&&(r+=`${t.cssRules[e].cssText}\r\n`);e.appendChild(m.createTextNode(r)),m.head.appendChild(e);}}else if(r.getAttribute("href")){const e=m.createElement(r.tagName);for(let t=0;t<r.attributes.length;t+=1){const l=r.attributes[t];l&&e.setAttribute(l.nodeName,l.nodeValue||"");}m.head.appendChild(e);}}}e.contentWindow.print();}),[t,d,s,a,i]),h=e$3.useCallback((e=>{d.current.body.removeChild(e),n((e=>Object.assign(Object.assign({},e),p.current))),m.current.length&&t.current.updateColumns(c.map((e=>(e.hide=m.current.includes(e.field),e)))),p.current=null,m.current=[];}),[c,t,n]),C=e$3.useCallback((e=>gl(void 0,void 0,void 0,(function*(){if(l.debug("Export data as Print"),!t.current.rootElementRef.current)throw new Error("MUI: No grid root element available.");p.current=o,r.pagination&&t.current.setPageSize(s),yield f(null==e?void 0:e.fields,null==e?void 0:e.allColumns),t.current.UNSTABLE_disableVirtualization();const n=b(null==e?void 0:e.fileName);d.current.body.appendChild(n),n.onload=()=>g(n,e),n.contentWindow.onafterprint=()=>h(n);}))),[s,r,l,t,o,b,g,h,f]);br(t,{exportDataAsPrint:C},"GridPrintExportApi");})(t,r),(t=>{const r=Cr(t,he),l=e$3.useCallback(((e=!1)=>{const l=t.current.getSelectedRows(),o=r.filter((e=>e.field!==_n.field));if(0===l.size||0===o.length)return;const n=Hi({columns:r,rows:l,selectedRowIds:[],includeHeaders:e,getCellParams:t.current.getCellParams,delimiterCharacter:"\t"});navigator.clipboard?navigator.clipboard.writeText(n).catch((()=>{zi(n);})):zi(n);}),[t,r]),o=e$3.useCallback((e=>{var r;const l=e.ctrlKey||e.metaKey||e.altKey;"c"===e.key.toLowerCase()&&l&&""===(null===(r=window.getSelection())||void 0===r?void 0:r.toString())&&t.current.copySelectedRowsToClipboard(e.altKey);}),[t]);Ja(t,t.current.rootElementRef,"keydown",o),br(t,{copySelectedRowsToClipboard:l},"GridClipboardApi");})(t),function(e,t){Tr(e,ue.columnHeaderClick,t.onColumnHeaderClick),Tr(e,ue.columnHeaderDoubleClick,t.onColumnHeaderDoubleClick),Tr(e,ue.columnHeaderOver,t.onColumnHeaderOver),Tr(e,ue.columnHeaderOut,t.onColumnHeaderOut),Tr(e,ue.columnHeaderEnter,t.onColumnHeaderEnter),Tr(e,ue.columnHeaderLeave,t.onColumnHeaderLeave),Tr(e,ue.columnOrderChange,t.onColumnOrderChange),Tr(e,ue.cellClick,t.onCellClick),Tr(e,ue.cellDoubleClick,t.onCellDoubleClick),Tr(e,ue.cellKeyDown,t.onCellKeyDown),Tr(e,ue.cellFocusOut,t.onCellFocusOut),Tr(e,ue.rowDoubleClick,t.onRowDoubleClick),Tr(e,ue.rowClick,t.onRowClick),Tr(e,ue.componentError,t.onError),Tr(e,ue.stateChange,t.onStateChange);}(t,r);},ss={apiRef:void 0,disableColumnResize:!0,disableColumnReorder:!0,disableMultipleColumnsFiltering:!0,disableMultipleColumnsSorting:!0,disableMultipleSelection:!0,throttleRowsMs:void 0,hideFooterRowCount:!1,pagination:!0,onRowsScrollEnd:void 0,onViewportRowsChange:void 0,checkboxSelectionVisibleOnly:!1,scrollEndThreshold:void 0,signature:"DataGrid"},cs=t=>{if(t.pageSize>100)throw new Error("'props.pageSize' cannot exceed 100 in DataGrid.");const r=function({props:t,name:r}){const l=useTheme();return e$3.useMemo((()=>{const e=Object.assign({},t),o=getThemeProps$1({theme:l,name:r,props:e}),n=o.theme||l,a="rtl"===n.direction;return Object.assign({theme:n,isRtl:a},o)}),[t,r,l])}({props:t,name:"MuiDataGrid"}),l=e$3.useMemo((()=>Object.assign(Object.assign({},r),ss)),[r]);return ni(l)},us=e$3.forwardRef((function(t,r){const l=cs(t),o=qa();return as(o,l),e$3.createElement(Pi,{apiRef:o,props:l},e$3.createElement(Yn,{ref:r},e$3.createElement(oo,null,e$3.createElement(ao,null),e$3.createElement(ro,null),e$3.createElement(no,null))))})),ds=e$3.memo(us);us.propTypes={"aria-label":propTypes.string,"aria-labelledby":propTypes.string,autoHeight:propTypes.bool,autoPageSize:propTypes.bool,checkboxSelection:propTypes.bool,classes:propTypes.object,className:propTypes.string,columnBuffer:propTypes.number,columns:chainPropTypes(propTypes.array.isRequired),columnTypes:propTypes.object,components:propTypes.object,componentsProps:propTypes.object,density:propTypes.oneOf(["comfortable","compact","standard"]),disableColumnFilter:propTypes.bool,disableColumnMenu:propTypes.bool,disableColumnSelector:propTypes.bool,disableDensitySelector:propTypes.bool,disableExtendRowFullWidth:propTypes.bool,disableSelectionOnClick:propTypes.bool,disableVirtualization:propTypes.bool,editMode:propTypes.oneOf(["cell","row"]),editRowsModel:propTypes.object,error:propTypes.any,filterMode:propTypes.oneOf(["client","server"]),filterModel:chainPropTypes(propTypes.any),getCellClassName:propTypes.func,getRowClassName:propTypes.func,getRowId:propTypes.func,headerHeight:propTypes.number,hideFooter:propTypes.bool,hideFooterPagination:propTypes.bool,hideFooterSelectedRowCount:propTypes.bool,isCellEditable:propTypes.func,isRowSelectable:propTypes.func,loading:propTypes.bool,localeText:propTypes.object,logger:propTypes.shape({debug:propTypes.func.isRequired,error:propTypes.func.isRequired,info:propTypes.func.isRequired,warn:propTypes.func.isRequired}),logLevel:propTypes.oneOf(["debug","error","info","warn",!1]),nonce:propTypes.string,onCellClick:propTypes.func,onCellDoubleClick:propTypes.func,onCellEditCommit:propTypes.func,onCellEditStart:propTypes.func,onCellEditStop:propTypes.func,onCellFocusOut:propTypes.func,onCellKeyDown:propTypes.func,onCellValueChange:propTypes.func,onColumnHeaderClick:propTypes.func,onColumnHeaderDoubleClick:propTypes.func,onColumnHeaderEnter:propTypes.func,onColumnHeaderLeave:propTypes.func,onColumnHeaderOut:propTypes.func,onColumnHeaderOver:propTypes.func,onColumnOrderChange:propTypes.func,onColumnResize:propTypes.func,onColumnVisibilityChange:propTypes.func,onColumnWidthChange:propTypes.func,onEditCellPropsChange:propTypes.func,onEditRowsModelChange:propTypes.func,onError:propTypes.func,onFilterModelChange:propTypes.func,onPageChange:propTypes.func,onPageSizeChange:propTypes.func,onResize:propTypes.func,onRowClick:propTypes.func,onRowDoubleClick:propTypes.func,onRowEditCommit:propTypes.func,onRowEditStart:propTypes.func,onRowEditStop:propTypes.func,onSelectionModelChange:propTypes.func,onSortModelChange:propTypes.func,onStateChange:propTypes.func,page:propTypes.number,pageSize:chainPropTypes(propTypes.number),pagination:e=>!1===e.pagination?new Error(["MUI: `<DataGrid pagination={false} />` is not a valid prop.","Infinite scrolling is not available in the MIT version.","","You need to upgrade to the DataGridPro component to disable the pagination."].join("\n")):null,paginationMode:propTypes.oneOf(["client","server"]),rowCount:propTypes.number,rowHeight:propTypes.number,rows:propTypes.arrayOf(propTypes.object).isRequired,rowsPerPageOptions:propTypes.arrayOf(propTypes.number),scrollbarSize:propTypes.number,selectionModel:chainPropTypes(propTypes.oneOfType([propTypes.number,propTypes.string,propTypes.array])),showCellRightBorder:propTypes.bool,showColumnRightBorder:propTypes.bool,sortingMode:propTypes.oneOf(["client","server"]),sortingOrder:propTypes.arrayOf(propTypes.oneOf(["asc","desc"])),sortModel:propTypes.arrayOf(propTypes.shape({field:propTypes.string.isRequired,sort:propTypes.oneOf(["asc","desc"])})),style:propTypes.object};

var useStyles$1 = makeStyles(function () {
  return createStyles({
    root: {
      alignItems: 'center',
      lineHeight: '24px',
      width: '100%',
      height: '100%',
      position: 'relative',
      display: 'flex',
      '& .cellValue': {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }
  });
});

function isOverflown(element) {
  return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}

var GridCellExpand = /*#__PURE__*/e__default.memo(function GridCellExpand(props) {
  var width = props.width,
      value = props.value;
  var wrapper = e__default.useRef(null);
  var cellDiv = e__default.useRef(null);
  var cellValue = e__default.useRef(null);

  var _React$useState = e__default.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var classes = useStyles$1();

  var _React$useState3 = e__default.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      showFullCell = _React$useState4[0],
      setShowFullCell = _React$useState4[1];

  var _React$useState5 = e__default.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      showPopper = _React$useState6[0],
      setShowPopper = _React$useState6[1];

  var handleMouseEnter = function handleMouseEnter() {
    var isCurrentlyOverflown = isOverflown(cellValue.current);
    setShowPopper(isCurrentlyOverflown);
    setAnchorEl(cellDiv.current);
    setShowFullCell(true);
  };

  var handleMouseLeave = function handleMouseLeave() {
    setShowFullCell(false);
  };

  e__default.useEffect(function () {
    if (!showFullCell) {
      return undefined;
    }

    function handleKeyDown(nativeEvent) {
      // IE11, Edge (prior to using Bink?) use 'Esc'
      if (nativeEvent.key === 'Escape' || nativeEvent.key === 'Esc') {
        setShowFullCell(false);
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return function () {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [setShowFullCell, showFullCell]);
  return /*#__PURE__*/e__default.createElement("div", {
    ref: wrapper,
    className: classes.root,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }, /*#__PURE__*/e__default.createElement("div", {
    ref: cellDiv,
    style: {
      height: 1,
      width: width,
      display: 'block',
      position: 'absolute',
      top: 0
    }
  }), /*#__PURE__*/e__default.createElement("div", {
    ref: cellValue,
    className: "cellValue"
  }, value), showPopper && /*#__PURE__*/e__default.createElement(Popper$1, {
    open: showFullCell && anchorEl !== null,
    anchorEl: anchorEl,
    style: {
      width: width,
      marginLeft: -17,
      zIndex: 99999
    }
  }, /*#__PURE__*/e__default.createElement(Paper$1, {
    elevation: 1,
    style: {
      minHeight: wrapper.current.offsetHeight - 3
    }
  }, /*#__PURE__*/e__default.createElement(Typography$2, {
    variant: "body2",
    style: {
      padding: 16
    }
  }, value))));
});
function renderCellExpand(params) {
  return /*#__PURE__*/e__default.createElement(GridCellExpand, {
    value: params.value ? params.value.toString() : '',
    width: params.colDef.computedWidth
  });
}

/*
 * Copyright (C) 2007-2021 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
var ContentTypeHelper = {
  FIELD_TYPE_INPUT: 'input',
  FIELD_TYPE_RTE: 'rte',
  supportedFieldTypes: function supportedFieldTypes() {
    return [ContentTypeHelper.FIELD_TYPE_INPUT, ContentTypeHelper.FIELD_TYPE_RTE];
  },
  isFieldTypeSupported: function isFieldTypeSupported(fieldType) {
    return ContentTypeHelper.supportedFieldTypes().includes(fieldType);
  }
};

var PAGE_SIZE = 100;
var ROWS_PER_PAGE_OPTIONS = [100];
var DEFAULT_COLUMN_WIDTH = 220;
var useStyles = makeStyles({
  root: {
    height: 400,
    width: '100%',
    '& .edited': {
      backgroundColor: '#a5d6a7',
      color: '#1b5e20'
    },
    '& .found': {
      backgroundColor: '#b9d5ff91',
      color: '#1a3e72'
    }
  }
});
/**
 * @param {*} config - form-definition.xml
 * @returns
 */

var getDataSheetHeadersFromConfig = function getDataSheetHeadersFromConfig(config) {
  var xml = new DOMParser().parseFromString(config, 'text/xml');
  var fields = xml.getElementsByTagName('field');
  var headers = [];

  for (var i = 0; i < fields.length; i += 1) {
    var field = fields[i];
    var fieldType = field.getElementsByTagName('type')[0].textContent;
    if (!ContentTypeHelper.isFieldTypeSupported(fieldType)) continue;
    var fieldId = field.getElementsByTagName('id')[0].textContent;
    var title = field.getElementsByTagName('title')[0].textContent;
    headers.push({
      fieldId: fieldId,
      fieldType: fieldType,
      title: title
    });
  }

  return headers;
};

var getColumnsFromHeader = function getColumnsFromHeader(fields) {
  // default to have `id` and `path`
  var columns = [{
    field: 'id',
    headerName: 'ID',
    description: 'ID',
    sortable: false,
    width: 0,
    editable: false,
    hide: true
  }, {
    field: 'path',
    headerName: 'Path',
    description: 'Path',
    sortable: false,
    width: DEFAULT_COLUMN_WIDTH,
    editable: false,
    renderCell: renderCellExpand
  }];

  for (var i = 0; i < fields.length; i += 1) {
    var field = fields[i];
    var fieldId = field.fieldId,
        fieldType = field.fieldType,
        title = field.title;
    var column = {
      field: fieldId,
      headerName: title,
      description: title,
      sortable: false,
      width: DEFAULT_COLUMN_WIDTH,
      editable: true,
      renderCell: renderCellExpand
    };

    if (fieldType === ContentTypeHelper.FIELD_TYPE_RTE) {
      column.renderCell = renderCellExpand;
    }

    columns.push(column);
  }

  return columns;
};

var getColumnProperties = function getColumnProperties(fieldName, columns) {
  return columns.find(function (cl) {
    return cl.field === fieldName;
  });
};

var rowFromApiContent = function rowFromApiContent(index, path, content, headers) {
  var xml = new DOMParser().parseFromString(content, 'text/xml');
  var row = {
    id: index,
    path: path
  };

  for (var i = 0; i < headers.length; i += 1) {
    var column = headers[i];
    var fieldId = column.fieldId;
    var field = xml.getElementsByTagName(fieldId)[0];
    row[fieldId] = field ? field.textContent : '';
  }
  return row;
};

var isCellEdited = function isCellEdited(params, rows) {
  if (!params || rows.length === 0) return false;
  var cellId = params.id;
  var cellField = params.field;
  var cellValue = params.value;
  return cellValue !== rows[cellId][cellField];
};

var isCellContainText = function isCellContainText(text, params) {
  if (!text || !params) return false;
  var cellValue = params.value;
  return cellValue.indexOf(text) >= 0;
};

var writeContent = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(path, editedObj) {
    var content, xml, keys, i, fieldName, value, node;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return StudioAPI.getContent(path);

          case 2:
            content = _context.sent;

            if (content) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return");

          case 5:
            xml = new DOMParser().parseFromString(content, 'text/xml');
            keys = Object.keys(editedObj);

            for (i = 0; i < keys.length; i++) {
              fieldName = keys[i];
              value = editedObj[fieldName];
              node = xml.getElementsByTagName(fieldName)[0];

              if (node) {
                node.textContent = value;
              }
            }

            _context.next = 10;
            return StudioAPI.writeContent(path, new XMLSerializer().serializeToString(xml));

          case 10:
            return _context.abrupt("return", _context.sent);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function writeContent(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var DataSheet = /*#__PURE__*/e__default.forwardRef(function (props, ref) {
  var classes = useStyles();

  var _React$useState = e__default.useState([]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      columns = _React$useState2[0],
      setColumns = _React$useState2[1];

  var _React$useState3 = e__default.useState([]),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      rows = _React$useState4[0],
      setRows = _React$useState4[1];

  var _React$useState5 = e__default.useState([]),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      sessionRows = _React$useState6[0],
      setSessionRows = _React$useState6[1];

  var _React$useState7 = e__default.useState({}),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      editedRows = _React$useState8[0],
      setEditedRows = _React$useState8[1];

  var _React$useState9 = e__default.useState({}),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      editRowsModel = _React$useState10[0],
      setEditRowsModel = _React$useState10[1];

  var _React$useState11 = e__default.useState(0),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      refresh = _React$useState12[0],
      setRefresh = _React$useState12[1];

  var _React$useState13 = e__default.useState(''),
      _React$useState14 = _slicedToArray(_React$useState13, 2),
      findText = _React$useState14[0],
      setFindText = _React$useState14[1];

  var _React$useState15 = e__default.useState(''),
      _React$useState16 = _slicedToArray(_React$useState15, 2),
      contentType = _React$useState16[0],
      setContentType = _React$useState16[1];

  e__default.useImperativeHandle(ref, function () {
    return {
      cancelAllChanges: function cancelAllChanges() {
        setRefresh(1 - refresh);
      },
      saveAllChanges: function saveAllChanges() {
        var keys = Object.keys(editedRows);

        if (keys.length === 0) {
          return;
        }

        keys.forEach( /*#__PURE__*/function () {
          var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(path) {
            var res;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return writeContent(path, editedRows[path], contentType);

                  case 2:
                    res = _context2.sent;

                    if (!res) {
                      console.log("Error while saving path ".concat(path));
                    }

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));

          return function (_x3) {
            return _ref2.apply(this, arguments);
          };
        }());
      }
    };
  });

  var replaceTextInAllRows = function replaceTextInAllRows(text, replaceText, rows, columns) {
    var newRows = [];

    for (var i = 0; i < rows.length; i += 1) {
      var newRow = replaceTextInRow(text, replaceText, rows[i], columns);
      newRows.push(newRow);
    }

    return newRows;
  };

  var replaceTextInRow = function replaceTextInRow(text, replaceText, row, columns) {
    var newRow = {};
    var keys = Object.keys(row);

    for (var i = 0; i < keys.length; i += 1) {
      var fieldName = keys[i];
      var fieldValue = row[fieldName];
      var newFieldValue = fieldValue;

      var _props = getColumnProperties(fieldName, columns);

      if (_props.editable) {
        newFieldValue = fieldValue.replaceAll(text, replaceText);
      }

      if (newFieldValue !== fieldValue) {
        var model = {
          id: row.id,
          field: fieldName,
          value: newFieldValue
        };
        saveEditState(model);
      }

      newRow[fieldName] = newFieldValue;
    }

    return newRow;
  };

  e__default.useEffect(function () {
    var subscriber = findReplaceSub.subscribe(function (value) {
      var findText = value.findText,
          replaceText = value.replaceText,
          action = value.action;

      if (action === ActionHelper.FIND) {
        setFindText(findText);
      }

      if (action === ActionHelper.REPLACE) {
        var newRows = replaceTextInAllRows(findText, replaceText, rows, columns);
        setSessionRows(newRows);
      }
    });
    return function () {
      subscriber.unsubscribe();
    };
  }, [rows]);
  e__default.useEffect(function () {
    var subscriber;

    _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              subscriber = contentTypeSub.subscribe( /*#__PURE__*/function () {
                var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(value) {
                  var config, headerList, items, paths, dtRows, i, path, content, row;
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          setContentType(value);
                          _context3.next = 3;
                          return StudioAPI.getContentTypeConfig(value);

                        case 3:
                          config = _context3.sent;
                          headerList = getDataSheetHeadersFromConfig(config);
                          setColumns(getColumnsFromHeader(headerList));
                          _context3.next = 8;
                          return StudioAPI.searchByContentType(value);

                        case 8:
                          items = _context3.sent;
                          paths = items.map(function (item) {
                            return item.path;
                          });
                          dtRows = [];
                          i = 0;

                        case 12:
                          if (!(i < paths.length)) {
                            _context3.next = 22;
                            break;
                          }

                          path = paths[i];
                          _context3.next = 16;
                          return StudioAPI.getContent(path);

                        case 16:
                          content = _context3.sent;
                          row = rowFromApiContent(i, path, content, headerList);
                          dtRows.push(row);

                        case 19:
                          i += 1;
                          _context3.next = 12;
                          break;

                        case 22:
                          setRows(dtRows);
                          setSessionRows(dtRows);

                        case 24:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3);
                }));

                return function (_x4) {
                  return _ref4.apply(this, arguments);
                };
              }());

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();

    return function () {
      subscriber.unsubscribe();
    };
  }, []);

  var handleEditRowsModelChange = function handleEditRowsModelChange(model) {
    setEditRowsModel(model);
  };

  var handleOnCellEditCommit = function handleOnCellEditCommit(model, event) {
    saveEditState(model);
  };

  var saveEditState = function saveEditState(model) {
    var currentEditedRows = editedRows;
    if (!isCellEdited(model, rows)) return;
    var key = rows[model.id].path;

    if (!currentEditedRows[key]) {
      currentEditedRows[key] = {};
    }

    currentEditedRows[key][model.field] = model.value;
    setEditedRows(currentEditedRows);
  };

  return /*#__PURE__*/e__default.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/e__default.createElement(ds, {
    key: refresh,
    rows: sessionRows,
    columns: columns,
    pageSize: PAGE_SIZE,
    rowsPerPageOptions: ROWS_PER_PAGE_OPTIONS,
    disableSelectionOnClick: true,
    editRowsModel: editRowsModel,
    getCellClassName: function getCellClassName(params) {
      if (!params.isEditable) return '';

      if (isCellEdited(params, rows)) {
        return 'edited';
      }

      if (findText && isCellContainText(findText, params)) {
        return 'found';
      }

      return '';
    },
    onEditRowsModelChange: handleEditRowsModelChange,
    onCellEditCommit: handleOnCellEditCommit
  }));
});

var DRAWER_WIDTH = 240;
var Main = styled$3('main', {
  shouldForwardProp: function shouldForwardProp(prop) {
    return prop !== 'open';
  }
})(function (_ref) {
  var theme = _ref.theme,
      open = _ref.open;
  return _objectSpread2({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: "-".concat(DRAWER_WIDTH, "px")
  }, open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  });
});
function Editor() {
  var _React$useState = e__default.useState(true),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      drawerOpen = _React$useState2[0],
      setDrawerOpen = _React$useState2[1];

  var _React$useState3 = e__default.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      findReplaceDialogOpen = _React$useState4[0],
      setFindReplaceDialogOpen = _React$useState4[1];

  var _React$useState5 = e__default.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      filterDialogOpen = _React$useState6[0],
      setFilterDialogOpen = _React$useState6[1];

  var _React$useState7 = e__default.useState(false),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      openAlert = _React$useState8[0],
      setOpenAlert = _React$useState8[1];

  var rootRef = e__default.useRef(null);
  var dataSheetRef = e__default.useRef(null);

  var handleFindReplaceDialogClose = function handleFindReplaceDialogClose() {
    setFindReplaceDialogOpen(false);
  };

  var handleFilterDialogClose = function handleFilterDialogClose() {
    setFilterDialogOpen(false);
  };

  var handleCloseAlert = function handleCloseAlert() {
    setOpenAlert(false);
  };

  var handleSaveChangeClick = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dataSheetRef.current.saveAllChanges();
              setOpenAlert(true);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSaveChangeClick() {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleCancelAllChangeClick = function handleCancelAllChangeClick() {
    dataSheetRef.current.cancelAllChanges();
  };

  var toggleDrawer = function toggleDrawer() {
    setDrawerOpen(!drawerOpen);
  };

  var appbar = /*#__PURE__*/e__default.createElement(Box, {
    position: "relative"
  }, /*#__PURE__*/e__default.createElement(Toolbar$2, null, /*#__PURE__*/e__default.createElement(IconButton$1, {
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer,
    edge: "start",
    sx: {
      mr: 2
    }
  }, /*#__PURE__*/e__default.createElement(MenuIcon, null))));
  var drawer = /*#__PURE__*/e__default.createElement(Drawer, {
    variant: "persistent",
    sx: {
      width: DRAWER_WIDTH,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: DRAWER_WIDTH,
        boxSizing: 'border-box'
      }
    },
    PaperProps: {
      style: {
        position: "absolute",
        width: DRAWER_WIDTH,
        top: "130px",
        height: "auto"
      }
    },
    BackdropProps: {
      style: {
        position: "absolute"
      }
    },
    open: drawerOpen,
    ModalProps: {
      container: document.getElementById("drawer-container"),
      style: {
        position: 'absolute'
      },
      disableEnforceFocus: true,
      keepMounted: true
    },
    SlideProps: {
      onExiting: function onExiting(node) {
        node.style.webkitTransform = "scaleX(0)";
        node.style.transform = "scaleX(0)";
        node.style.transformOrigin = "top left ";
      }
    }
  }, /*#__PURE__*/e__default.createElement(List$2, null, /*#__PURE__*/e__default.createElement(ListItem, null, /*#__PURE__*/e__default.createElement(ContentTypeSelect, null))), /*#__PURE__*/e__default.createElement(Divider, null), /*#__PURE__*/e__default.createElement(List$2, null, /*#__PURE__*/e__default.createElement(ListItem, {
    button: true,
    key: "Find and Replace",
    onClick: function onClick() {
      return setFindReplaceDialogOpen(true);
    }
  }, /*#__PURE__*/e__default.createElement(ListItemIcon$1, null, /*#__PURE__*/e__default.createElement(FindReplaceIcon, null)), /*#__PURE__*/e__default.createElement(ListItemText, {
    primary: "Find and Replace"
  })), /*#__PURE__*/e__default.createElement(ListItem, {
    button: true,
    key: "Apply Filters"
  }, /*#__PURE__*/e__default.createElement(ListItemIcon$1, null, /*#__PURE__*/e__default.createElement(FilterListIcon, null)), /*#__PURE__*/e__default.createElement(ListItemText, {
    primary: "Apply Filters"
  }))), /*#__PURE__*/e__default.createElement(Divider, null), /*#__PURE__*/e__default.createElement(List$2, null, /*#__PURE__*/e__default.createElement(ListItem, {
    button: true,
    key: "Save Change",
    onClick: handleSaveChangeClick
  }, /*#__PURE__*/e__default.createElement(ListItemIcon$1, null, /*#__PURE__*/e__default.createElement(SaveIcon, null)), /*#__PURE__*/e__default.createElement(ListItemText, {
    primary: "Save Change"
  })), /*#__PURE__*/e__default.createElement(ListItem, {
    button: true,
    key: "Cancel All Change",
    onClick: handleCancelAllChangeClick
  }, /*#__PURE__*/e__default.createElement(ListItemIcon$1, null, /*#__PURE__*/e__default.createElement(ClearAllIcon, null)), /*#__PURE__*/e__default.createElement(ListItemText, {
    primary: "Cancel All Change"
  }))), /*#__PURE__*/e__default.createElement(Divider, null));
  return /*#__PURE__*/e__default.createElement(Box, null, /*#__PURE__*/e__default.createElement(CssBaseline, null), appbar, /*#__PURE__*/e__default.createElement("section", {
    id: "drawer-container",
    position: "relative",
    bgcolor: "white",
    component: "div",
    style: {
      overflowY: "scroll",
      overflowX: "hidden",
      display: "flex",
      border: "1px solid #e0e0e0",
      height: "calc(100vh - 194px)"
    },
    ref: rootRef
  }, drawer, /*#__PURE__*/e__default.createElement(Main, {
    open: drawerOpen
  }, /*#__PURE__*/e__default.createElement(DataSheet, {
    ref: dataSheetRef
  }))), /*#__PURE__*/e__default.createElement(FindAndReplaceDialog, {
    isOpen: findReplaceDialogOpen,
    handleClose: handleFindReplaceDialogClose
  }), /*#__PURE__*/e__default.createElement(FilterDialog, {
    isOpen: filterDialogOpen,
    handleClose: handleFilterDialogClose
  }), /*#__PURE__*/e__default.createElement(Snackbar, {
    open: openAlert,
    autoHideDuration: 6000,
    onClose: handleCloseAlert
  }, /*#__PURE__*/e__default.createElement(Alert, {
    onClose: handleCloseAlert,
    severity: "success",
    sx: {
      width: '100%'
    }
  }, "Change has been saved.")));
}

var _excluded = ["children", "onClose"];
var BootstrapDialog = styled$3(Dialog)(function (_ref) {
  _ref.theme;
  return {
    '& .MuiPaper-root': {
      height: '100%'
    },
    '& .MuiDialogContent-root': {
      padding: 0
    }
  };
});

var BootstrapDialogTitle = function BootstrapDialogTitle(props) {
  var children = props.children,
      onClose = props.onClose,
      other = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/e__default.createElement(DialogTitle, _extends$1({
    sx: {
      m: 0,
      p: 2,
      textAlign: 'center'
    }
  }, other), children, onClose ? /*#__PURE__*/e__default.createElement(IconButton$1, {
    "aria-label": "close",
    onClick: onClose,
    sx: {
      position: 'absolute',
      right: 8,
      top: 8,
      color: function color(theme) {
        return theme.palette.grey[500];
      }
    }
  }, /*#__PURE__*/e__default.createElement(CloseIcon, null)) : null);
};

function MainDialog() {
  var _React$useState = e__default.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var handleClickOpen = function handleClickOpen() {
    setOpen(true);
  };

  var handleClose = function handleClose(e, reason) {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  return /*#__PURE__*/e__default.createElement("div", null, /*#__PURE__*/e__default.createElement(List$2, {
    sx: {
      width: '100%',
      maxWidth: 360,
      bgcolor: 'background.paper',
      borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
    },
    component: "nav",
    "aria-labelledby": "nested-list-subheader"
  }, /*#__PURE__*/e__default.createElement(ListItemButton, {
    onClick: handleClickOpen
  }, /*#__PURE__*/e__default.createElement(ListItemIcon$1, null, /*#__PURE__*/e__default.createElement(AutoAwesomeMotionOutlinedIcon, null)), /*#__PURE__*/e__default.createElement(ListItemText, {
    primary: "Bulk Edit"
  }), /*#__PURE__*/e__default.createElement(KeyboardArrowRightIcon, null))), /*#__PURE__*/e__default.createElement(BootstrapDialog, {
    onClose: handleClose,
    "aria-labelledby": "customized-dialog-title",
    open: open,
    fullWidth: true,
    maxWidth: true
  }, /*#__PURE__*/e__default.createElement(BootstrapDialogTitle, {
    id: "customized-dialog-title",
    onClose: handleClose
  }, "Bulk Edit"), /*#__PURE__*/e__default.createElement(DialogContent, {
    dividers: true
  }, /*#__PURE__*/e__default.createElement(Editor, null))));
}

/*
 * Copyright (C) 2007-2021 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

function BulkEditApp() {
  return /*#__PURE__*/e__default.createElement(Stack, {
    spacing: 2
  }, /*#__PURE__*/e__default.createElement(MainDialog, null));
}

/*
 * Copyright (C) 2007-2021 Crafter Software Corporation. All Rights Reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as published by
 * the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
var plugin = {
  id: 'org.craftercms.bulkEditPlugin',
  name: 'Bulk Edit Plugin',
  description: 'A plugin to do bulk edit',
  author: 'Crafter CMS',
  logo: null,
  locales: {},
  apps: [{
    route: '/yada-yada',
    widget: {
      id: 'org.craftercms.bulkEditPlugin.components.BulkEditApp'
    }
  }],
  widgets: {
    'org.craftercms.bulkEditPlugin.components.BulkEditApp': BulkEditApp
  },
  scripts: [],
  stylesheets: [],
  themes: []
};

export { BulkEditApp, plugin as default };
