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

import CookieHelper from '../helpers/cookie';
import HttpHelper from '../helpers/http';

const API_GET_CONTENT_TYPE = '/studio/api/1/services/api/1/content/get-content-types.json';
const API_GET_CONFIGURATION = '/studio/api/2/configuration/get_configuration';
const API_SEARCH = '/studio/api/2/search/search.json';
const API_GET_CONTENT = '/studio/api/1/services/api/1/content/get-content.json';
const API_WRITE_CONTENT = '/studio/api/1/services/api/1/content/write-content.json';
const API_ME = '/studio/api/2/users/me.json';

const StudioAPI = {
  origin() {
    return window.location.origin;
  },
  xsrfToken() {
    return CookieHelper.get('XSRF-TOKEN');
  },
  siteId() {
    const url = new URL(window.location.href);
    if (url.searchParams.has('site')) {
      return url.searchParams.get('site');
    }

    return CookieHelper.get('crafterSite');
  },
  async getContentTypes() {
    const url = `${StudioAPI.origin()}${API_GET_CONTENT_TYPE}?site=${StudioAPI.siteId()}`;
    const res = await HttpHelper.get(url);

    if (res.status === 200) {
      const data = res.response;
      return data.map(ct => {
        return {
          name: ct.name,
          label: ct.label,
        };
      });
    }

    return [];
  },
  async getContentTypeConfig(contentType) {
    const path = `/content-types${contentType}/form-definition.xml`;
    const url = `${StudioAPI.origin()}${API_GET_CONFIGURATION}?module=studio&path=${path}&siteId=${StudioAPI.siteId()}`;
    const res = await HttpHelper.get(url);
    if (res.status === 200 && res.response && res.response.content) {
      return res.response.content;
    }

    return '';
  },
  async searchByContentType(ct, keywords) {
    const url = `${StudioAPI.origin()}${API_SEARCH}?siteId=${StudioAPI.siteId()}`;
    const body = {
      query: '',
      keywords: keywords || '',
      offset: 0,
      limit: 100,
      sortBy: '',
      sortBy: '_score',
      sortOrder: 'desc',
      filters: {
        'content-type': ct,
      },
    };
    const res = await HttpHelper.post(url, body);

    if (res.status === 200) {
      return res.response.result.items;
    }

    return [];
  },
  async getContent(path) {
    const url = `${StudioAPI.origin()}${API_GET_CONTENT}?edit=false&site_id=${StudioAPI.siteId()}&path=${path}`;
    const res = await HttpHelper.get(url);

    if (res.status === 200) {
      return res.response.content;
    }

    return null;
  },
  async writeContent(path, content, contentType) {
    const fileName = path.split('/').pop();
    const url = `${StudioAPI.origin()}${API_WRITE_CONTENT}?site=${StudioAPI.siteId()}&phase=onSave&path=${path}&fileName=${fileName}&contentType=${contentType}&unlock=true`;
    const res = await HttpHelper.post(url, content);

    if (res.status === 200) {
      return res.response;
    }

    return null;
  },
  async getMe() {
    const url = `${StudioAPI.origin()}${API_ME}`;
    const res = await HttpHelper.get(url);

    if (res.status === 200) {
      return res.response;
    }

    return null;
  },
};

export default StudioAPI;
