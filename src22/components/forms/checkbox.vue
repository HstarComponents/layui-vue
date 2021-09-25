<template>
  <div class="lv-checkbox layui-unselect layui-form-checkbox" :class="{'layui-form-checked': value, 'layui-checkbox-disbaled layui-disabled': disabled}"
    :lay-skin="skin" @click="changeStatus()">
    <span><slot></slot></span>
    <i class="layui-icon">{{iconText}}</i>
  </div>
</template>
<script>
  export default {
    name: 'lv-checkbox',
    props: {
      simpleStyle: { type: Boolean, default: true },
      disabled: { type: Boolean, default: false },
      value: null
    },
    data() {
      return {};
    },
    computed: {
      iconText() {
        return this.simpleStyle ? '' : ''
      },
      skin() {
        return this.simpleStyle ? 'primary' : '';
      }
    },
    methods: {
      changeStatus() {
        if (!this.disabled) {
          this.$emit('input', !this.value);
        }
      }
    }
  };

</script>
