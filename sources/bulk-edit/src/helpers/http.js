const HttpHelper = {
  get(url) {
    return new Promise((resolve, reject) => {
      CrafterCMSNext.util.ajax.get(url).subscribe((response) => {
        resolve(response);
      });
    });
  }
};

export default HttpHelper;

