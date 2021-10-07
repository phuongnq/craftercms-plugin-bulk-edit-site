var React = craftercms.libs.React && Object.prototype.hasOwnProperty.call(craftercms.libs.React, 'default') ? craftercms.libs.React['default'] : craftercms.libs.React;
var { Typography } = craftercms.libs.MaterialUI;
var { useIntl } = craftercms.libs.ReactIntl;
var createEmotion = craftercms.libs.createEmotion && Object.prototype.hasOwnProperty.call(craftercms.libs.createEmotion, 'default') ? craftercms.libs.createEmotion['default'] : craftercms.libs.createEmotion;

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

var _createEmotion = createEmotion({
  key: 'NonReactComponentEmotionKey'
}),
    css = _createEmotion.css,
    flush = _createEmotion.flush;

var NonReactComponent = {
  main: function main(_ref) {
    var craftercms = _ref.craftercms,
        element = _ref.element,
        configuration = _ref.configuration;
    var store = craftercms.getStore();
    var className = css({
      margin: '.5em',
      padding: '.5em',
      border: '2px solid #000',
      textAlign: 'center',
      color: configuration.fontColor || 'green'
    });
    var user = store.getState().user.username;
    element.classList.add(className);
    element.innerHTML = "Hello from the non-react world, ".concat(user, ". ").concat(craftercms.getIntl().formatMessage({
      id: 'myTestTranslation',
      defaultMessage: 'Showing the default translation'
    }), ".");
    return function () {
      // Component destruction logic
      flush();
    };
  }
};

var myTestTranslation$1 = "Hello, this is a test translation";
var en = {
	myTestTranslation: myTestTranslation$1
};

var myTestTranslation = "Hola, esta es una traducción de prueba";
var es = {
	myTestTranslation: myTestTranslation
};

var plugin
/*: PluginDescriptor */
= {
  id: 'org.craftercms.sampleComponentLibraryPlugin',
  name: 'Sample component library',
  description: 'An example plugin of a component library',
  author: 'Roy Art',
  logo: null,
  locales: {
    en: en,
    es: es
  },
  apps: [{
    route: '/yada-yada',
    widget: {
      id: 'org.craftercms.sampleComponentLibraryPlugin.components.reactComponent'
    }
  }],
  widgets: {
    'org.craftercms.sampleComponentLibraryPlugin.components.reactComponent': ReactComponent,
    'org.craftercms.sampleComponentLibraryPlugin.components.nonReactComponent': NonReactComponent
  },
  scripts: [{
    src: 'https://code.jquery.com/jquery-3.5.1.min.js',
    integrity: 'sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=',
    crossorigin: 'anonymous'
  }, 'script.js'],
  stylesheets: ['index.css'],
  themes: []
};

export { NonReactComponent, ReactComponent, plugin as default };
