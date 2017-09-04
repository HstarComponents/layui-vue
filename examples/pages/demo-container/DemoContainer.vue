<style lang="stylus">
  .full-height {
    height: 100%;
  }

  .page-demo-container {
    .half-height {
      height: 50%;
    }
    .left-border {
      border-left: 1px solid #ccc;
    }
    .preview-container {
      background: #fff;
      padding: 0;
    }

    .layui-tab {
      margin: 0;
    }
  }
</style>
<template>
  <div class="page-demo-container full-height">
    <div class="row full-height">
      <div class="layui-col-xs6 full-height">
        <div class="top-part half-height">
          <lv-tabset v-model="tabsetVal" type="simple">
            <lv-tab-item header="Document" name="doc">
              <div style="overflow:auto" :style="{height: editorHeight + 'px'}">
                <md-dob-box :markdown="document"></md-dob-box>
              </div>
            </lv-tab-item>
          </lv-tabset>
        </div>
        <div class="bottom-part half-height">
          <lv-tabset v-model="tabsetVal2" type="simple">
            <lv-tab-item header="HTML" name="html">
              <ace-editor v-model="demoHtmlCode" mode="html" :height="editorHeight"></ace-editor>
            </lv-tab-item>
            <lv-tab-item header="JavaScript" name="js">
              <ace-editor v-model="demoJsCode" :height="editorHeight"></ace-editor>
            </lv-tab-item>
          </lv-tabset>
        </div>
      </div>
      <div class="layui-col-xs6 full-height left-border preview-container">
        <lv-tabset type="simple">
          <lv-tab-item header="Preivew" name="html">
            <live-code-box :code="liveHtml" :style="iframeStyle"></live-code-box>
          </lv-tab-item>
        </lv-tabset>
      </div>
    </div>
  </div>
</template>
<script>
  import { templateService, eventBus } from '../../services';
  export default {
    data() {
      return {
        liveHtml: '',
        tabsetVal: 'doc',
        tabsetVal2: 'html',
        document: '# Welcome!',
        demoHtmlCode: '',
        demoJsCode: '',
        editorHeight: 100,
        componentName: 'box',
        iframeStyle: {
          height: 'calc(100vh - 127px)'
        },
        previewTimerId: null
      };
    },
    created() {
      eventBus.on('route-change', path => {
        this.processRouteChange(path);
      });
      this.processRouteChange(this.$route.path);
    },
    mounted() {
      this.loadComponentDemoAndDocument();
      this.liveHtml = this._buildHtmlForPreview();
      window.addEventListener('resize', this._setEditorHeight, false);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this._setEditorHeight);
    },
    watch: {
      demoHtmlCode() {
        this.updateLiveHtml();
      },
      demoJsCode() {
        this.updateLiveHtml();
      }
    },
    methods: {
      processRouteChange(path) {
        let arr = path.split('/');
        this.componentName = arr.pop();
        if (this.componentName) {
          this.loadComponentDemoAndDocument();
        }
      },
      updateLiveHtml() {
        clearTimeout(this.previewTimerId);
        this.previewTimerId = setTimeout(() => {
          this.liveHtml = this._buildHtmlForPreview();
        }, 500);
      },
      loadComponentDemoAndDocument() {
        this._loadDocument();
        this._loadDemo();
        this._setEditorHeight();
      },
      _setEditorHeight() {
        this.$nextTick(() => {
          this.editorHeight = this.$el.offsetHeight / 2 - 64;
        });
      },
      _buildHtmlForPreview() {
        let html = templateService.buildHtmlForPreview(this.demoHtmlCode, this.demoJsCode);
        return html;
      },
      _loadDocument() {
        axios.get(`${AppConf.rootHost}/src/components/${this.componentName}/README.md`).then(res => {
          let doc = res.data; this.document = doc;
        });
      },
      _loadDemo() {
        axios.get(`${AppConf.rootHost}/src/components/${this.componentName}/usage.html`)
          .then(({ data }) => { this.demoHtmlCode = data; })
          .catch(() => {
            this.demoHtmlCode = `<h1>加载组件[${this.componentName}]示例失败</h1>`;
          });
        axios.get(`${AppConf.rootHost}/src/components/${this.componentName}/usage.js`)
          .then(({ data }) => { this.demoJsCode = data; })
          .catch(() => {
            this.demoJsCode = `console.log('加载组件[${this.componentName}]示例失败')`;
          });
      }
    }
  };

</script>
