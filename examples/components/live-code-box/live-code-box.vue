<template>
  <div class="live-code-box"></div>
</template>
<script>
  export default {
    name: 'live-code-box',
    props: {
      code: { type: String, default: '' },
      defaultCode: { type: String, default: '' }
    },
    mounted() {
      this.runCode();
    },
    watch: {
      code(newVal) {
        this.$nextTick(() => {
          this.runCode();
        });
      }
    },
    methods: {
      runCode() {
        let iframeHtml = `<iframe id="previewFrame" frameborder="0" style="width: 100%; height: 100%;" border="0" marginwidth="0" marginheight="0" scrolling="yes" allowtransparency="yes"></iframe>`;
        this.$el.innerHTML = iframeHtml;
        // 抓出iframe元素
        let iframe = this.$el.querySelector('#previewFrame');
        let contentDocument = iframe.contentDocument;
        // 写入内容
        contentDocument.open();
        contentDocument.write('');
        contentDocument.write(this.code || this.defaultCode);
        contentDocument.close();
      }
    }
  };

</script>
