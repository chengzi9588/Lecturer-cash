/*
 * 统一的「返回目录」悬浮按钮（原型 V3.0）
 * 用法：在页面末尾引入  <script src="./返回目录.js" data-style="top:20px;left:50%;transform:translateX(-50%)"></script>
 * data-style 用于按各页面空白区域微调位置，外观与文案全部统一，在此处统一维护。
 */
(function () {
  var script = document.currentScript;
  var pos = (script && script.getAttribute('data-style')) || 'top:16px;left:50%;transform:translateX(-50%)';

  var css = document.createElement('style');
  css.textContent =
    '#backToIndex{position:fixed;z-index:40;display:inline-flex;align-items:center;gap:6px;height:26px;padding:0 12px 0 9px;' +
    'border-radius:13px;background:rgba(22,32,51,.88);color:#fff;font:600 12px/1 -apple-system,BlinkMacSystemFont,"PingFang SC","Microsoft YaHei",sans-serif;' +
    'text-decoration:none;box-shadow:0 4px 14px rgba(22,32,51,.22);backdrop-filter:blur(6px);transition:background .15s,transform .15s;white-space:nowrap}' +
    '#backToIndex:hover{background:#315cec}' +
    '#backToIndex svg{width:13px;height:13px;fill:none;stroke:currentColor;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}';

  var a = document.createElement('a');
  a.id = 'backToIndex';
  a.href = './index.html';
  a.title = '返回原型目录';
  a.setAttribute('style', pos);
  a.innerHTML = '<svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>返回目录';

  // 挂在 <html> 下，避免页面重新渲染 body 内容时按钮丢失
  document.documentElement.appendChild(css);
  document.documentElement.appendChild(a);
})();
