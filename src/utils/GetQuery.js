/**
 * 获取参数
 * 传入参数名获取当前地址栏上参数的值
 * @param {String} queryName
 * @returns {String}
 */
function getQuery(queryName) {
  const reg = new RegExp(`(^|&)${queryName}=([^&]*)(&|$)`, 'i');
  // eslint-disable-next-line no-restricted-globals
  const r = location.search.substr(1).match(reg);
  if (r != null) return decodeURI(r[2]);
  return null;
}

export default getQuery;
