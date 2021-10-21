const ContentTypeHelper = {
  supportedFieldTypes: ['input', 'rte'],
  isFieldTypeSupported(fieldType) {
    return ContentTypeHelper.supportedFieldTypes.includes(fieldType);
  },
};

export default ContentTypeHelper;
