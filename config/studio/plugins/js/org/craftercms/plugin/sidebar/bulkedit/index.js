var React = craftercms.libs.React && Object.prototype.hasOwnProperty.call(craftercms.libs.React, 'default') ? craftercms.libs.React['default'] : craftercms.libs.React;
var { Typography } = craftercms.libs.MaterialUI;
var { useIntl } = craftercms.libs.ReactIntl;

function ReactComponent(_ref) {
  var text = _ref.text;

  var _useIntl = useIntl(),
      formatMessage = _useIntl.formatMessage;

  return /*#__PURE__*/React.createElement(Typography, {
    sx: {
      margin: '.5em',
      padding: '.5em',
      border: '2px solid #000',
      textAlign: 'center'
    }
  }, "Hello from the react world, ", text, ".", ' ', formatMessage({
    id: 'myTestTranslation',
    defaultMessage: 'Hello, this is a test translation'
  }), ".");
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
    'org.craftercms.bulkEditPlugin.components.BulkEditApp': ReactComponent
  },
  scripts: [],
  stylesheets: [],
  themes: []
};

export { ReactComponent as BulkEditApp, plugin as default };
