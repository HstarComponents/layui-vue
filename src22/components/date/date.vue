<template>
  <input class="lv-date layui-input" :placeholder="placeholder">
</template>
<script>
  export default {
    name: 'lv-date',
    props: {
      placeholder: { type: String, default: '' },
      event: { type: String, default: 'click' },
      format: { type: String, default: 'YYYY-MM-DD hh:mm:ss' },
      showTime: { type: Boolean, default: false },
      showClear: { type: Boolean, default: true },
      showToday: { type: Boolean, default: true },
      showOk: { type: Boolean, default: true },
      showFestival: { type: Boolean, default: false },
      minDate: { type: Date, default: () => new Date(1990, 0, 1, 0, 0, 0) },
      maxDate: { type: Date, default: () => new Date(2099, 11, 31, 23, 59, 59) },
      startDate: { type: Date },
      fixed: { type: Boolean, default: false },
      zIndex: { type: Number, default: 99999999 },
      value: null
    },
    data() {
      return {
        dateFormat: ''
      };
    },
    created() {
      this.dateFormat = this.showTime ? 'YYYY-MM-DD hh:mm:ss' : 'YYYY-MM-DD';
    },
    mounted() {
      this.$el.addEventListener('click', this.clickHanlder, false);
    },
    beforeDestroy() {
      this.$el.removeEventListener('click', this.clickHanlder);
    },
    watch: {
      format(newVal) {
        this.dataFormat = newVal;
      }
    },
    computed: {
      dateOpt() {
        return {
          event: this.event,//触发事件
          format: this.dateFormat,//日期格式
          istime: this.showTime,//是否开启时间选择
          isclear: this.showClear,//是否显示清空
          istoday: this.showToday, //是否显示今天
          issure: this.showOk, //是否显示确认
          festival: this.showFestival,//是否显示节日
          min: this.getString(this.minDate),//最小日期
          max: this.getString(this.maxDate),//最大日期
          start: this.getString(this.startDate), //开始日期
          fixed: this.fixed,//是否固定在可视区域
          zIndex: this.zIndex//css z-index
        };
      }
    },
    methods: {
      getString(date) {
        if (!date) {
          return '';
        }
        return `${date.getFullYear()}-${this.fixZero(date.getMonth() + 1)}-${this.fixZero(date.getDate())} ${this.fixZero(date.getHours())}:${this.fixZero(date.getMinutes())}:${this.fixZero(date.getSeconds())}`
      },
      fixZero(str) {
        str = '00' + str;
        return str.substring(str.length - 2);
      },
      clickHanlder(e) {
        let opt = Object.assign({}, this.dateOpt, {
          elem: this.$el, choose: datas => {
            this.$emit('input', datas);
          }
        });
        layui.laydate(opt);
      }
    }
  };

</script>
