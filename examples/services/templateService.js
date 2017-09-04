const baseTemplate = `
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <base href="/">
    <link href="//cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link rel="stylesheet" href="static/layui/css/layui.css">
  </head>
  <body>
  {{htmlCode}}
  <script src="//cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
  <script src="/static/layui/layui.all.js"></script>
  <script src="//cdn.bootcss.com/vue/2.4.2/vue.js"></script>
  <script src="lib/lv-ui.js"></script>
  <script>
    {{jsCode}}
  </script>
  </body>
</html>
`;

export const templateService = {
  buildHtmlForPreview(htmlCode, jsCode) {
    let html = baseTemplate;
    return html.replace('{{htmlCode}}', htmlCode).replace('{{jsCode}}', jsCode);
  }
};
