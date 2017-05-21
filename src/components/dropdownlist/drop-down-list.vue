<template>
  <div class="lv-drop-down-list layui-unselect layui-form-select" :class="{'layui-form-selected': open}" @click.stop="">
    <div class="layui-select-title" @click="openDialog">
      <input type="text" :placeholder="label" value="" readonly="" class="layui-input layui-unselect" v-model="innerText">
      <i class="layui-edge"></i>
    </div>
    <dl class="layui-anim layui-anim-upbit">
      <dd v-for="item in dataList" @click="selectItem(item)" :class="{'layui-disabled': item.disabled, 'layui-this': innerText === item.text}">{{item.text}}</dd>
    </dl>
  </div>
</template>
<script>
  export default {
    name: 'lv-drop-down-list',
    props: {
      dataSource: { type: Array },
      label: { type: String, default: '' },
      textField: { type: String, default: 'text' },
      valueField: { type: String, default: 'value' },
      value: null
    },
    data() {
      return {
        open: false,
        dataList: [],
        innerText: ''
      };
    },
    mounted() {
      this.setDataList();
      this.setValue();
      document.addEventListener('click', this.processDocClick, false);
    },
    beforeDestroy() {
      document.removeEventListener('click', this.processDocClick);
    },
    watch: {
      dataSource() {
        this.setDataList();
      },
      value() {
        this.setValue();
      }
    },
    methods: {
      setValue() {
        let selectdItem = this.dataList.find(x => x.value === this.value);
        if (selectdItem) {
          this.innerText = selectdItem.text;
        }
      },
      setDataList() {
        let data = this.dataSource;
        if (!(data instanceof Array)) {
          return console.warn('Must provider array.');
        }
        if (data.length === 0) {
          this.dataList = [];
          return;
        }
        // 判断是否是简单类型（字符串，数字）
        let isSimple = typeof data[0] === 'string' || typeof data[0] === 'number';
        this.dataList = data.map(item => {
          return {
            text: isSimple ? item : item[this.textField],
            value: isSimple ? item : item[this.valueField],
            disabled: isSimple ? false : item['disabled']
          }
        });
      },
      openDialog() {
        if (this.dataList.length > 0) {
          this.open = true;
        }
      },
      selectItem(item) {
        if (item.disabled) {
          return;
        }
        this.open = false;
        this.innerText = item.text;
        this.$emit('input', item.value);
      },
      processDocClick() {
        this.open = false;
      }
    }
  };

</script>
