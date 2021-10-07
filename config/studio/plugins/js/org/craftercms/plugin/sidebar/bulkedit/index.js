(function (exports, React, material) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  function BulkEditApp() {
    return /*#__PURE__*/React__default["default"].createElement(material.Stack, {
      spacing: 2,
      direction: "row"
    }, /*#__PURE__*/React__default["default"].createElement(material.Button, {
      variant: "contained"
    }, "Bulk Edit"));
  }

  var myTestTranslation$1 = "Hello, this is a test translation";
  var en = {
  	myTestTranslation: myTestTranslation$1
  };

  var myTestTranslation = "Hola, esta es una traducción de prueba";
  var es = {
  	myTestTranslation: myTestTranslation
  };

  var plugin = {
    id: 'org.craftercms.bulkEditPlugin',
    name: 'Bulk Edit Plugin',
    description: 'A plugin to do bulk edit',
    author: 'Roy Art',
    logo: null,
    locales: {
      en: en,
      es: es
    },
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

  exports.BulkEditApp = BulkEditApp;
  exports["default"] = plugin;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({}, craftercms.libs.React, craftercms.libs.MaterialUI);
