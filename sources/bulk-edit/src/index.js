import ReactComponent from './ReactComponent';

import en from './i18n/translations/en.json';
import es from './i18n/translations/es.json';

const plugin = {
  id: 'org.craftercms.bulkEditPlugin',
  name: 'Bulk Edit Plugin',
  description: 'A plugin to do bulk edit',
  author: 'Roy Art',
  logo: null,
  locales: {
    en,
    es
  },
  apps: [
    {
      route: '/yada-yada',
      widget: { id: 'org.craftercms.bulkEditPlugin.components.reactComponent' }
    }
  ],
  widgets: {
    'org.craftercms.bulkEditPlugin.components.reactComponent': ReactComponent,
  },
  scripts: [
    {
      src: 'https://code.jquery.com/jquery-3.5.1.min.js',
      integrity: 'sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=',
      crossorigin: 'anonymous'
    },
    'script.js'
  ],
  stylesheets: ['index.css'],
  themes: []
};

export { ReactComponent };

export default plugin;