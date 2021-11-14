// 存放工具
// 防抖工具
// 封装防抖函数
export function debounce(fn, delay) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this,args);
    }, delay);
  };
}