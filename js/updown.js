// 获取所有的input标签
const inputTags = document.querySelectorAll('sc-text');

// 遍历每个input标签
inputTags.forEach(input => {
  // 监听焦点事件
  input.addEventListener('focus', () => {
    // 修改样式，使其悬浮在网页的上面
    input.style.position = 'fixed';
    input.style.top = '50%';
    input.style.left = '50%';
    input.style.transform = 'translate(-50%, -50%)';
  });

  // 监听失去焦点事件
  input.addEventListener('blur', () => {
    // 修改样式，使其回到原来的位置
    input.style.position = 'static';
  });
});