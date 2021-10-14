<template>
  <button class="lv-button layui-btn" :class="buttonClass" @click="btnClick"><slot></slot></button>
</template>
<script>
  export default {
    name: 'lv-button',
    props: {
      type: { type: String, default: '' },
      size: { type: String, default: '' },
      disabled: { type: Boolean, default: false },
      radius: { type: Boolean, default: false }
    },
    data() {
      return {
        groupSize: '',
        groupType: ''
      };
    },
    computed: {
      buttonClass() {
        let classArr = [];
        (this.groupType || this.type) && classArr.push(`layui-btn-${this.groupType || this.type}`);
        this.disabled && classArr.push('layui-btn-disabled');
        (this.groupSize || this.size) && classArr.push(`layui-btn-${this.groupSize || this.size}`);
        this.radius && classArr.push('layui-btn-radius');
        return classArr;
      }
    },
    methods: {
      btnClick(evt) {
        !this.disabled && this.$emit('click', evt);
      },
      _updateTypeAndSize(type, size) {
        if (type !== null) {
          this.groupType = type;
        }
        if (size !== null) {
          this.groupSize = size;
        }
      }
    }
  };

</script>
