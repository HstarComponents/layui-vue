<template>
  <div class="lv-progress layui-progress" :class="{'layui-progress-big': bigSize}">
    <div class="layui-progress-bar" :style="progressBarStyle">
      <span class="layui-progress-text" v-if="showProgressText">{{progressText}}</span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'lv-progress',
    props: {
      bgColor: { type: String, default: '' },
      bigSize: { type: Boolean, default: false },
      showProgressText: { type: Boolean, default: false },
      total: { type: Number, default: 100 },
      value: { type: Number, default: 0 }
    },
    data() {
      return {
        progressBarStyle: {
          'background-color': '',
          width: 'auto'
        },
        progressText: ''
      };
    },
    watch: {
      bgColor() {
        this._setProgressBarStyle();
      },
      total() {
        this._setProgressBarStyle();
      },
      value() {
        this._setProgressBarStyle();
      }
    },
    mounted() {
      this._setProgressBarStyle();
    },
    methods: {
      _setProgressBarStyle() {
        this.bgColor && (this.progressBarStyle['background-color'] = this.bgColor);
        if (this.value) {
          let per = Math.floor(this.value / this.total * 100);
          per = Math.max(0, Math.min(per, 100));
          this.progressBarStyle.width = `${per}%`;
          this.progressText = `${per}%`;
        }
      }
    }
  };

</script>
