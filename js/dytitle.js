<!--崩溃欺骗-->
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    document.title = ' 亲爱的，您怎么走了~ ';
    clearTimeout(titleTime);
  }
  else {
    $('[rel="icon"]').attr('href', "/favicon.ico");
    document.title = ' 撒拉嘿呦~ ';
    titleTime = setTimeout(function () {
      document.title = OriginTitile;
    }, 2000);
  }
});
