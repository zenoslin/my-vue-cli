function bodyScroll(event) {
  event.preventDefault();
}

let top;

/**
 * 不允许滚动屏幕
 * @export noallowScroll
 */
export function noallowScroll() {
  top = document.documentElement.scrollTop;
  document
    .getElementById('app')
    .addEventListener('touchmove', bodyScroll, false);
  document.getElementById(
    'app'
  ).style.cssText = `position:fixed;width:100%;top:${top * -1}px`;
}

/**
 * 允许滚动屏幕
 * @export allowScroll
 */
export function allowScroll() {
  document
    .getElementById('app')
    .removeEventListener('touchmove', bodyScroll, false);
  document.getElementById('app').style.cssText = 'position:static;';
  document.documentElement.scrollTop = top;
}
