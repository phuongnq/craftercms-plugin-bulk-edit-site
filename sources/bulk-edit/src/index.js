import BulkEditApp from './BulkEditApp';

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
      widget: { id: 'org.craftercms.bulkEditPlugin.components.BulkEditApp' }
    }
  ],
  widgets: {
    'org.craftercms.bulkEditPlugin.components.BulkEditApp': BulkEditApp,
  },
  scripts: [],
  stylesheets: [],
  themes: []
};

export { BulkEditApp };

export default plugin;