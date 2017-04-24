<style>
  .lv-modal .layui-layer-page {
    min-height: 260px;
  }
  
  .lv-modal .layui-layer-content {
    min-height: 158px;
  }
  
  .lv-modal .layui-layer-btn.layui-layer-btn- {
    border-top: 1px solid #eee;
  }
</style>
<template>
  <div class="lv-modal" v-show="modalShown">
    <div class="layui-layer-shade" style="z-index:100000; background-color:#000; opacity:0.3; filter:alpha(opacity=30);"></div>
    <div class="layui-layer layui-layer-page layui-layer-rim layer-anim" :style="modalStyle">
      <div class="layui-layer-title" style="cursor: move;">
        <slot name="header"></slot>
        <template v-if="!$slots.header">{{header}}</template>
      </div>
      <div class="layui-layer-content">
        <slot></slot>
      </div>
      <span class="layui-layer-setwin">
        <a class="layui-layer-ico layui-layer-close layui-layer-close1" href="javascript:;" @click="doClose()"></a>
      </span>
      <div class="layui-layer-btn layui-layer-btn-">
        <template v-if="!$slots.footer">
          <a class="layui-layer-btn0" @click="doOk">确定</a>
          <a class="layui-layer-btn1" @click="doClose(true)">取消</a>
        </template>
      </div>
      <span class="layui-layer-resize"></span>
    </div>
  </div>
</template>
<script>
  import { domUtil } from './../../utils';
  export default {
    name: 'lv-modal',
    props: {
      header: { type: String, default: '' },
      width: { type: Number, default: 600 },
      value: { type: Boolean, default: false }
    },
    data() {
      return {
        modalShown: false,
        modalStyle: {
          'z-index': 100001,
          'min-height': '260px',
          width: '600px',
          top: 'auto',
          left: 'auto'
        },
        events: []
      };
    },
    mounted() {
      this.modalShown = this.value === true;
      this.calcModalStyle();
      let evtObj = domUtil.bindEvent(window, 'resize', () => {
        this.calcModalStyle();
      });
      this.events.push(evtObj);
    },
    beforeDestroy() {
      this.events.forEach(e => e.destroy());
    },
    watch: {
      value(newVal) {
        this.modalShown = newVal;
        if (newVal) {
          this.calcModalStyle();
        }
      },
      width(newVal) {
        this.calcModalStyle();
      }
    },
    methods: {
      calcModalStyle(stop) {
        this.modalStyle.width = `${this.width}px`;
        let modalEl = this.$el.querySelector('.layui-layer-page');
        let size = domUtil.getSize(modalEl);
        this.modalStyle.left = `${(window.innerWidth - size.width) / 2}px`;
        this.modalStyle.top = `${(window.innerHeight - size.height) / 2}px`;
        if (!stop) {
          this.$nextTick(() => {
            this.calcModalStyle(true);
          });
        }
      },
      doOk() {
        this.$emit('ok');
      },
      doClose(isCancel) {
        this.modalShown = false;
        this.$emit('input', false);
        this.$emit(isCancel ? 'cancel' : 'close');
      }
    }
  };

</script>
