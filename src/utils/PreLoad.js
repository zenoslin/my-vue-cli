
/**
 * 预加载图片
 * 传入图片数组或者json列表之后预加载图片，路径后面可加版本号
 * @param {*} imgPathList
 * @param {Number} version
 */
function preLoad(imgPathList, version) {
  const imgs = imgPathList;
  if (imgs instanceof Array) {
    imgs.forEach(element => {
      const image = new Image();
      if (version) {
        image.src = element.concat('?v=', version);
      } else {
        image.src = element;
      }
    });
  } else if (imgs instanceof Object) {
    // eslint-disable-next-line no-restricted-syntax
    for (const item in imgs) {
      if (Object.prototype.hasOwnProperty.call(imgs, item)) {
        const image = new Image();
        if (version) {
          image.src = imgs[item].concat('?v=', version);
        } else {
          image.src = imgs[item];
        }
      }
    }
  }
}

export default preLoad;
