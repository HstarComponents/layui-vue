<template>
  <div lay-skin="_switch" class="lv-switch layui-unselect layui-form-switch" :class="{'layui-form-onswitch': value}" @click="changeStatus">
    <em>{{value ? onText: offText}}</em><i></i>
  </div>
</template>
<script>
  export default {
    name: 'lv-switch',
    props: {
      disabled: { type: Boolean, default: false },
      onText: { type: String, default: 'ON' },
      offText: { type: String, default: 'OFF' },
      value: null
    },
    data() {
      return {};
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
