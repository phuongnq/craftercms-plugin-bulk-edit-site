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