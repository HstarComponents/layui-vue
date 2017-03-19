<template>
  <div class="layui-unselect layui-form-radio" :class="{'layui-form-radioed': checked, 'layui-radio-disbaled layui-disabled': disabled}"
    @click="changeStatus">
    <i class="layui-anim layui-icon"></i>
    <span><slot></slot></span>
  </div>
</template>
<script>
  export default {
    name: 'lv-radio',
    props: {
      disabled: { type: Boolean, default: false },
      val: { default: true },
      value: null
    },
    data() {
      return {};
    },
    computed: {
      checked() {
        return this.value === this.val;
      }
    },
    methods: {
      changeStatus() {
        if (!this.disabled) {
          this.$emit('input', this.val);
        }
      }
    }
  };

</script>
