var * as React = craftercms.libs.React;
var { Stack, Button } = craftercms.libs.MaterialUI;

function ReactComponent(_ref) {
  _ref.text;
  return /*#__PURE__*/React.createElement(Stack, {
    spacing: 2,
    direction: "row"
  }, /*#__PURE__*/React.createElement(Button, {
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
    'org.craftercms.bulkEditPlugin.components.BulkEditApp': ReactComponent
  },
  scripts: [],
  stylesheets: [],
  themes: []
};

export { ReactComponent as BulkEditApp, plugin as default };
