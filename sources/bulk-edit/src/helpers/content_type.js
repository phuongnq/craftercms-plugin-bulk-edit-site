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
const ContentTypeHelper = {
  FIELD_TYPE_INPUT: 'input',
  FIELD_TYPE_RTE: 'rte',
  FIELD_TYPE_VIDEO_PICKER: 'video-picker',
  FIELD_TYPE_IMAGE_PICKER: 'image-picker',
  supportedFieldTypes() {
    return [
      ContentTypeHelper.FIELD_TYPE_INPUT,
      ContentTypeHelper.FIELD_TYPE_RTE,
      ContentTypeHelper.FIELD_TYPE_VIDEO_PICKER,
      ContentTypeHelper.FIELD_TYPE_IMAGE_PICKER,
    ]
  },
  isFieldTypeSupported(fieldType) {
    return ContentTypeHelper.supportedFieldTypes().includes(fieldType);
  },
  isMediaType(fieldType) {
    return ContentTypeHelper.FIELD_TYPE_VIDEO_PICKER === fieldType || ContentTypeHelper.FIELD_TYPE_IMAGE_PICKER === fieldType;
  },
  isRteType(fieldType) {
    return ContentTypeHelper.FIELD_TYPE_RTE === fieldType;
  }
};

export default ContentTypeHelper;
