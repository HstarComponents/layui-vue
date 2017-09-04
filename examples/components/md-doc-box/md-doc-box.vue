<template>
  <div class="md-dob-box"></div>
</template>
<script>
  export default {
    name: 'md-dob-box',
    props: {
      markdown: { type: String, default: '' },
      options: { type: Object, default: () => { } }
    },
    mounted() {
      this._setMarkedOptions();
      this.renderMarkdown();
    },
    watch: {
      options() {
        this._setMarkedOptions();
      },
      markdown() {
        this.$nextTick(() => {
          this.renderMarkdown();
        });
      }
    },
    methods: {
      renderMarkdown() {
        if (!window.marked) {
          return console.error('md-doc-box component depend marked(https://github.com/chjj/marked).');
        }
        let htmlCode = window.marked(this.markdown);
        htmlCode = htmlCode.replace(/<table>/g, '<table class="table table-bordered">');
        this.$el.innerHTML = htmlCode;
      },
      _setMarkedOptions() {
        if (window.marked) {
          marked.setOptions(this.options);
        }
      }
    }
  };

</script>
