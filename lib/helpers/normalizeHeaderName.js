'use strict';

var utils = require('../utils');

/**
 * 格式化headers，比如 { accept: 'xx' }，其实应该格式化成 { Accept: 'xxx' }
 * @param {*} headers { [string]: string }
 * @param {*} normalizedName string
 */
module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};
